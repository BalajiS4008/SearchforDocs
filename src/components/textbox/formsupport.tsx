import * as React from 'react';
import { useState, useCallback } from 'react';
import { TextBox, TextBoxChangeEvent } from '@syncfusion/react-inputs';
import './form.css';
import { Button, Color } from '@syncfusion/react-buttons';
const firstNameValidator = (value: string) =>
  !value ? 'First Name is required' : '';

const lastNameValidator = (value: string) =>
  !value ? 'Last Name is required' : '';

const emailValidator = (value: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  if (!value) {
    return 'Email is required';
  }

  if (!emailRegex.test(value)) {
    return 'Please enter a valid email address.';
  }

  return '';
};

interface FieldProps {
  id: string;
  name: string;
  label: string;
  value: string;
  error: string | null;
  touched: boolean;
  hint?: string;
  onChange: (value: string) => void;
  onBlur: () => void;
  validator: (value: string) => string;
  [key: string]: unknown;
}

const FormField: React.FC<FieldProps> = ({
  id,
  label,
  value,
  error,
  touched,
  hint,
  onChange,
  onBlur,
  validator,
  ...rest
}) => {
  const showError = touched && error;
  const isValid = touched && !error;

  function setError(validationResult: string) {
    console.log(validationResult);
  }

  return (
    <div className="sf-form-field">
      <TextBox
        id={id}
        value={value}
        autoComplete='off'
        className={`sf-field ${isValid ? 'sf-valid' : (showError ? 'sf-error' : '')}`}
        labelMode="Auto"
        width="15.625em"
        placeholder={label}
        onChange={((args: TextBoxChangeEvent) => {
          if (args.value !== undefined) {
            const value = args.value;
            const validationResult = validator(value);
            setError(validationResult);   
            onChange(value);
          }
        })}
        onBlur={onBlur}
        {...rest}
      />
      {hint && !showError && <div className="sf-hint">{hint}</div>}
      {<div className="sf-error-message" style={{ height: '20px' }}>{showError ? error : ''}</div>}
    </div>
  );
};

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

interface FormTouched {
  firstName: boolean;
  lastName: boolean;
  email: boolean;
}

export default function App() {
  const [values, setValues] = useState<FormValues>({
    firstName: '',
    lastName: '',
    email: ''
  });

  const [touched, setTouched] = useState<FormTouched>({
    firstName: false,
    lastName: false,
    email: false
  });

  const errors = {
    firstName: firstNameValidator(values.firstName),
    lastName: lastNameValidator(values.lastName),
    email: emailValidator(values.email)
  };

  const isFormValid = !Object.values(errors).some(error => error !== '');

  const handleChange = useCallback((field: keyof FormValues, value: string) => {
    setValues(prev => ({
      ...prev,
      [field]: value
    }));
  }, []);

  const handleBlur = useCallback((field: keyof FormTouched) => {
    setTouched(prev => ({
      ...prev,
      [field]: true
    }));
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();

    setTouched({
      firstName: true,
      lastName: true,
      email: true
    });

    if (isFormValid) {
      alert(JSON.stringify(values, null, 2));
    }
  }, [values, isFormValid]);

  const handleReset = useCallback(() => {
    setValues({
      firstName: '',
      lastName: '',
      email: ''
    });
    setTouched({
      firstName: false,
      lastName: false,
      email: false
    });
  }, []);

  return (
    <div className="sf-form-container">
      <form onSubmit={handleSubmit} className="sf-form">
        <div className="sf-form-title">
          <h6 className='sf-form-title-text'>Registration Form</h6>
        </div>

        <FormField
          id="firstName"
          name="firstName"
          label="First Name"
          value={values.firstName}
          error={errors.firstName}
          touched={touched.firstName}
          onChange={(value) => handleChange('firstName', value)}
          onBlur={() => handleBlur('firstName')}
          validator={firstNameValidator}
        />

        <FormField
          id="lastName"
          name="lastName"
          label="Last Name"
          value={values.lastName}
          error={errors.lastName}
          touched={touched.lastName}
          onChange={(value) => handleChange('lastName', value)}
          onBlur={() => handleBlur('lastName')}
          validator={lastNameValidator}
        />

        <FormField
          id="email"
          name="email"
          label="Email"
          value={values.email}
          error={errors.email}
          touched={touched.email}
          clearButton={true}
          onChange={(value) => handleChange('email', value)}
          onBlur={() => handleBlur('email')}
          validator={emailValidator}
        />

        <div className="sf-form-buttons">
          <Button
            type="submit"
            color={Color.Primary}
            disabled={!isFormValid}
          >
            Submit
          </Button>
          <Button
            type="button"
            onClick={handleReset}
          >
            Clear
          </Button>
        </div>
      </form>
    </div>
  );
};