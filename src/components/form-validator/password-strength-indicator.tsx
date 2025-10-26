interface PasswordStrengthIndicatorProps {
  password: string;
}

export function PasswordStrengthIndicator({ password }: PasswordStrengthIndicatorProps) {
  const calculateStrength = (password: string): number => {
    if (!password) return 0;

    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[a-z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;

    return strength;
  };

  const strength = calculateStrength(password);

  const getStrengthColor = (): string => {
    switch (strength) {
      case 0: return '#d32f2f';
      case 1: return '#f44336';
      case 2: return '#ff9800';
      case 3: return '#ffc107';
      case 4: return '#8bc34a';
      case 5: return '#4caf50';
      default: return '#ccc';
    }
  };

  const requirements = [
    { label: 'At least 8 characters', met: password.length >= 8 },
    { label: 'Contains uppercase letter', met: /[A-Z]/.test(password) },
    { label: 'Contains lowercase letter', met: /[a-z]/.test(password) },
    { label: 'Contains number', met: /[0-9]/.test(password) },
    { label: 'Contains special character', met: /[^A-Za-z0-9]/.test(password) }
  ];

  return (
    <div className="password-strength-container">
      <div className="password-strength-meter">
        <div className="strength-bars">
          {[1, 2, 3, 4, 5].map((index) => (
            <div
              key={index}
              className="strength-bar"
              style={{
                backgroundColor: index <= strength ? getStrengthColor() : '#e0e0e0',
                opacity: index <= strength ? 1 : 0.3
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="password-requirements">
        {requirements.map((req, index) => (
          <div key={index} className={`requirement ${req.met ? 'met' : ''}`}>
            <span className="requirement-icon">{req.met ? '✓' : '○'}</span>
            <span className="requirement-text">{req.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PasswordStrengthIndicator;