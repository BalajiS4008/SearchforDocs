import { useState } from 'react';
import { Form, FormField, FormValueType, ValidationRules, FormState, TextBox, TextBoxChangeEvent } from '@syncfusion/react-inputs';
import { Button, Color } from '@syncfusion/react-buttons';
import { PasswordStrengthIndicator } from './password-strength-indicator';
import './app.css';

export default function App() {
  const [submittedData, setSubmittedData] = useState<Record<string, FormValueType> | null>(null);
  const [formState, setFormState] = useState<FormState>();

  const fields = [
    { name: 'username', placeholder: 'Enter your username', label: 'Username', info: '5+ characters, letters, numbers and underscores only' },
    { name: 'password', placeholder: 'Enter a strong password', label: 'Password', type: 'password', info: 'Password must include uppercase, lowercase, numbers, and special characters' },
    { name: 'confirmPassword', placeholder: 'Re-enter your password', label: 'Confirm Password', type: 'password' },
    { name: 'email', placeholder: 'Enter your company email (name@company.com)', label: 'Company Email', type: 'email', info: 'Must be a @company.com email address' }
  ];

  const validationRules: ValidationRules = {
    username: {
      required: [true, 'Username is required'],
      regex: [/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores'],
      minLength: [5, 'Username must be at least 5 characters'],
    },
    password: {
      required: [true, 'Password is required'],
      customValidator: (value) => {
        const password = String(value);
        let strength = 0;
        if (password.length >= 8) strength += 1;
        if (/[A-Z]/.test(password)) strength += 1;
        if (/[a-z]/.test(password)) strength += 1;
        if (/[0-9]/.test(password)) strength += 1;
        if (/[^A-Za-z0-9]/.test(password)) strength += 1;

        if (strength < 3) {
          return 'Password is too weak. Include uppercase, lowercase, numbers, and special characters.';
        }
        return '';
      },
      minLength: [8, 'Password must be at least 8 characters'],
    },
    confirmPassword: {
      required: [true, 'Please confirm your password'],
      equalTo: ['password', 'Passwords do not match']
    },
    email: {
      required: [true, 'Email is required'],
      email: [true, 'Please enter a valid email address'],
      customValidator: (value) => {
        const email = String(value);
        if (!email.endsWith('@company.com')) {
          return 'Please use a company email (@company.com)';
        }
        return '';
      }
    }
  };

  const handleSubmit = (data: Record<string, FormValueType>) => {
    setSubmittedData(data);
  };

  return (
    <div className="component-section form-container">
      <h2 className="form-title">Account Security Setup</h2>

      <Form rules={validationRules} onSubmit={handleSubmit} validateOnChange={true} autoComplete='off' onFormStateChange={setFormState} >
        {fields.map((field) => (
          <FormField key={field.name} name={field.name} >
            <div className={`form-field ${field.name}-field`}>
              <label className="sf-form-label" htmlFor={field.name}>{field.label}</label>
              <TextBox id={field.name} name={field.name} placeholder={field.placeholder} type={field.type}
                autoComplete='off'
                className={formState?.errors[field.name] ? 'sf-error' : undefined}
                value={(formState?.values[field.name] || '') as string}
                onChange={(args: TextBoxChangeEvent) => formState?.onChange(field.name, { value: args.value || '' })}
                onBlur={() => formState?.onBlur(field.name)} />
              {field.name === 'password' && (
                <PasswordStrengthIndicator password={(formState?.values[field.name] || '') as string} />
              )}
              {field.info && field.name !== 'password' && <div className="info-text">{field.info}</div>}
              {field.name !== 'password' && formState?.errors[field.name] && (<div className="sf-form-error">{formState?.errors[field.name]}</div>)}
            </div>
          </FormField>
        ))}

        <div className="form-actions">
          <Button type="button" color={Color.Error} className="form-button"
            onClick={() => {
              formState?.onFormReset();
              setSubmittedData(null);
            }}
          >
            Reset
          </Button>
          <Button type="submit" className="form-button" disabled={!formState?.allowSubmit} >Submit</Button>
        </div>
        {submittedData && (<div className="status-message success"> Form submitted successfully! </div>)}
      </Form>
    </div>
  );
}