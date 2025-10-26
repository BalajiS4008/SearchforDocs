import * as React from 'react';
import { useState, useCallback } from 'react';
import { TextBox, TextArea, ResizeMode, TextAreaChangeEvent, TextBoxChangeEvent } from '@syncfusion/react-inputs';
import './form.css';
import { Button, Color } from '@syncfusion/react-buttons';

const firstNameValidator = (value: string) =>
  !value ? 'First Name is required' : '';

const addressValidator = (value: string) =>
  !value ? 'Address is required' : value.length < 10 ? 'Address should be at least 10 characters long.' : '';

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
        className={`field ${isValid ? 'valid' : (showError ? 'error' : '')}`}
        labelMode="Auto"
        placeholder={label}
        width={280}
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
      {hint && !showError && <div className="hint">{hint}</div>}
      {<div className="sf-error-message" style={{ height: '20px' }}>{showError ? error : ''}</div>}
    </div>
  );
};

const TextAreaField: React.FC<FieldProps> = ({
  id,
  label,
  value,
  error,
  touched,
  hint,
  onChange,
  onBlur,
  ...rest
}) => {
  const showError = touched && error;
  const isValid = touched && !error;

  return (
    <div className="sf-form-field">
      <TextArea
        id={id}
        value={value}
        autoComplete='off'
        className={`field ${isValid ? 'valid' : (showError ? 'error' : '')}`}
        placeholder={label}
        onChange={((args: TextAreaChangeEvent) => {
          if (args.value !== undefined) {
            onChange(args.value as string);
          }
        })}
        onBlur={onBlur}
        width={300}
        resizeMode={ResizeMode.None}
        height={100}
        rows={3}
        style={{ marginBottom: '15px' }}
        {...rest}
      />
      {hint && !showError && <div className="hint">{hint}</div>}
      {<div className="sf-error-message" style={{ height: '20px' }}>{showError ? error : ''}</div>}
    </div>
  );
};

interface FormValues {
  firstName: string;
  address: string;
}

interface FormTouched {
  firstName: boolean;
  address: boolean;
}

export default function App() {
  const [values, setValues] = useState<FormValues>({
    firstName: '',
    address: ''
  });

  const [touched, setTouched] = useState<FormTouched>({
    firstName: false,
    address: false
  });

  const errors = {
    firstName: firstNameValidator(values.firstName),
    address: addressValidator(values.address)
  };

  const isFormValid = useCallback(() => {
    return values.firstName &&
      values.address.length >= 10;
  }, [values]);

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
      address: true
    });

    if (isFormValid()) {
      alert(JSON.stringify(values, null, 2));
    }
  }, [values, isFormValid]);

  const handleReset = useCallback(() => {
    setValues({
      firstName: '',
      address: ''
    });
    setTouched({
      firstName: false,
      address: false
    });
  }, []);

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <div className="form-title">
          <h6 className='sf-form-title-text'>Registration Form</h6>
        </div>

        <FormField
          id="firstName"
          name="firstName"
          label="Name"
          value={values.firstName}
          error={errors.firstName}
          touched={touched.firstName}
          onChange={(value) => handleChange('firstName', value)}
          onBlur={() => handleBlur('firstName')}
          validator={firstNameValidator}
        />

        <TextAreaField
          id="address"
          name="address"
          label="Address"
          value={values.address}
          error={errors.address}
          touched={touched.address}
          onChange={(value) => handleChange('address', value)}
          onBlur={() => handleBlur('address')}
          validator={addressValidator}
          width={280}
          rows={2}
        />
        <div className="form-buttons">
          <Button
            type="submit"
            color={Color.Primary}
            disabled={!isFormValid()}
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