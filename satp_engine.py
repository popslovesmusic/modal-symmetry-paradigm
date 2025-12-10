import numpy as np
import matplotlib.pyplot as plt
import matplotlib.animation as animation

# ==========================================
# SATP 4.0 SIMULATION PARAMETERS
# ==========================================
# Space-Time Configuration
L = 40.0           # Half-length of the universe (Total box = 2L)
N = 801            # Grid points (Higher = smoother, slower)
dx = (2 * L) / (N - 1)
dt = 0.01          # Time step (Must satisfy Courant limit)
T_max = 1000       # Total simulation duration

# Physics Constants (Natural Units)
LAMBDA = 0.5       # Coupling constant (Potential stiffness)
V_VEV = 1.0        # Vacuum Expectation Value (+/- v)
DAMPING = 0.02     # Global friction (simulates radiation loss to other fields)

# SATP Engine Settings
ENGINE_ON = True   # Toggle the drive
STROKE_PERIOD = 300 # Steps per engine cycle
BIAS_AMP = 0.8     # Intensity of the "Sword" (S_max)
BIAS_OFFSET = 3.0  # How far ahead of the wall to apply bias (Delta)
BIAS_WIDTH = 4.0   # Width of the bias field

# ==========================================
# INITIALIZATION
# ==========================================
x = np.linspace(-L, L, N)
t = 0.0

# 1. Initialize the Static Kink Solution (The Bubble)
# phi(x) = v * tanh( m/sqrt(2) * x )
# mass m = sqrt(8 * lambda * v^2)
m_phi = np.sqrt(8 * LAMBDA * V_VEV**2)
phi = V_VEV * np.tanh((m_phi / np.sqrt(2)) * x)

# Previous step (for Leapfrog start) - assume static initially
phi_old = np.copy(phi)
phi_new = np.zeros_like(phi)

# Telemetry Data
pos_history = []
thrust_history = []
time_history = []

# ==========================================
# CORE FUNCTIONS
# ==========================================

def get_kink_center(phi_field, x_grid):
    """
    Finds the zero-crossing of the field to locate the ship (wall center).
    Uses interpolation for sub-grid accuracy.
    """
    # Find index where sign flips
    signs = np.sign(phi_field)
    zero_crossings = np.where(np.diff(signs))[0]
    
    if len(zero_crossings) == 0:
        return 0.0 # Lost the bubble
    
    idx = zero_crossings[int(len(zero_crossings)/2)] # Take the middle crossing
    
    # Linear interpolation for precise x
    y1 = phi_field[idx]
    y2 = phi_field[idx+1]
    x1 = x_grid[idx]
    x2 = x_grid[idx+1]
    
    # x where y=0
    x_zero = x1 - y1 * ((x2 - x1) / (y2 - y1))
    return x_zero

def engine_control_law(x_grid, t_step, kink_pos):
    """
    The SATP 4.0 "Bang-Bang" Controller.
    Returns the Source field S(x,t).
    """
    S = np.zeros_like(x_grid)
    
    if not ENGINE_ON:
        return S
        
    cycle_phase = t_step % STROKE_PERIOD
    
    # PHASE A: BIAS STROKE (0% to 60% of cycle)
    # We lower the potential AHEAD of the bubble to pull it forward.
    if cycle_phase < (0.6 * STROKE_PERIOD):
        # Create a Gaussian depression ahead of the wall
        center_target = kink_pos + BIAS_OFFSET
        S = BIAS_AMP * np.exp(-((x_grid - center_target)**2) / (2 * BIAS_WIDTH**2))
        
        # NOTE: S adds to the Equation of Motion. 
        # Equation: phi_tt - phi_xx + V' = S
        # To pull a kink (tanh), we need S to lower the energy ahead.
        # Check polarity: Kink goes -v to +v. 
        # Ahead is +v. We want to make +v energetically unfavorable locally.
        
    # PHASE B: RELAXATION / RADIATION (60% to 100%)
    # S = 0. The wall settles into the new position, shedding scalar photons.
    
    return S

def potential_deriv(phi_val):
    """ dV/dphi = 4 * lambda * phi * (phi^2 - v^2) """
    return 4 * LAMBDA * phi_val * (phi_val**2 - V_VEV**2)

# ==========================================
# SIMULATION LOOP
# ==========================================

print(">>> INITIALIZING ANTI-SATP AUDIT...")
print(f"    Courant Number: {dt/dx:.4f} (Must be < 1.0)")
print("    Starting Simulation...")

fig, (ax1, ax2) = plt.subplots(2, 1, figsize=(10, 8))
line_phi, = ax1.plot(x, phi, 'b-', label='Scalar Field $\phi$')
line_S, = ax1.plot(x, np.zeros_like(x), 'r--', alpha=0.5, label='Vacuum Bias $S(x)$')
ax1.set_ylim(-1.5 * V_VEV, 1.5 * V_VEV)
ax1.set_title("SATP 4.0: Field Configuration")
ax1.legend()
ax1.grid(True)

line_pos, = ax2.plot([], [], 'k-', label='Bubble Position')
ax2.set_xlim(0, T_max)
ax2.set_ylim(-1, 5) # Expect forward motion
ax2.set_xlabel("Time Step")
ax2.set_ylabel("Position ($X_{cm}$)")
ax2.set_title("Telemetry: Propulsion Verification")
ax2.grid(True)

# Pre-calculate factor for laplacian
r2 = (dt / dx)**2

def update(frame):
    global phi, phi_old, phi_new, t
    
    # Run a few physics steps per animation frame to speed up visual
    steps_per_frame = 10
    
    for _ in range(steps_per_frame):
        t_step = int(t / dt)
        
        # 1. Locate Bubble
        kink_x = get_kink_center(phi, x)
        
        # 2. Get Engine Command
        S_field = engine_control_law(x, t_step, kink_x)
        
        # 3. Compute Laplacian (d2phi/dx2)
        # Standard central difference
        laplacian = np.roll(phi, -1) - 2*phi + np.roll(phi, 1)
        
        # 4. Leapfrog Update
        # phi_new = 2*phi - phi_old + r^2*laplacian - dt^2*(V' - S)
        # Damping term approximation included in update
        
        dv_term = potential_deriv(phi)
        
        # Standard Verlet with linear damping correction
        # phi_new = (1/(1 + eps)) * (2*phi - (1-eps)*phi_old + ...)
        damping_factor = DAMPING * dt
        
        phi_new = (2*phi - phi_old + r2*laplacian - (dt**2)*(dv_term - S_field)) 
        
        # Apply Absorbing BC (Simple clamping at edges to VEV to prevent reflection)
        phi_new[0] = -V_VEV
        phi_new[-1] = V_VEV
        
        # Cycle buffers
        phi_old = np.copy(phi)
        phi = np.copy(phi_new)
        t += dt
        
    # Telemetry Update
    pos_history.append(kink_x)
    time_history.append(t)
    thrust_history.append(S_field.max()) # Proxy for effort
    
    # Update Plots
    line_phi.set_ydata(phi)
    line_S.set_ydata(S_field) # Visual scale
    
    # Auto-scroll position plot
    ax2.set_xlim(0, max(t, 10))
    ax2.set_ylim(min(pos_history)-1, max(pos_history)+1)
    line_pos.set_data(time_history, pos_history)
    
    return line_phi, line_S, line_pos

ani = animation.FuncAnimation(fig, update, frames=200, interval=20, blit=False)
plt.show()