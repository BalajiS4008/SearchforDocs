import { useState } from 'react';
import { Form, FormField, ValidationRules, FormValueType, TextArea, FormState, ResizeMode, TextAreaChangeEvent, TextBox, NumericTextBox, TextBoxChangeEvent, NumericChangeEvent } from '@syncfusion/react-inputs';
import { Button } from '@syncfusion/react-buttons';
import './app.css';

interface StepData {
  [key: string]: FormValueType;
}

interface StepState {
  isCompleted: boolean;
  data: StepData;
}

interface FieldConfig {
  name: string;
  label: string;
  placeholder: string;
  type: string;
  format?: string;
}

interface StepConfig {
  title: string;
  fields: FieldConfig[];
  rules: ValidationRules;
}

export default function App() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formState, setFormState] = useState<FormState>();
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const [stepStates, setStepStates] = useState<Record<number, StepState>>({
    1: { isCompleted: false, data: {} },
    2: { isCompleted: false, data: {} },
    3: { isCompleted: false, data: {} }
  });

  const stepConfigs: Record<number, StepConfig> = {
    1: {
      title: 'Personal Information',
      fields: [
        { name: 'firstName', label: 'First Name', placeholder: 'Enter your first name', type: 'text' },
        { name: 'lastName', label: 'Last Name', placeholder: 'Enter your last name', type: 'text' },
        { name: 'email', label: 'Email', placeholder: 'Enter your email address', type: 'email' },
        { name: 'phoneNumber', label: 'Phone Number', placeholder: 'Enter phone (e.g., +919876543210 or 9876543210)', type: 'text' }
      ],
      rules: {
        firstName: {
          required: [true, 'First name is required'],
          regex: [/^[A-Za-z\s]+$/, 'First name should only contain letters'],
          minLength: [2, 'First name must be at least 2 characters']
        },
        lastName: {
          required: [true, 'Last name is required'],
          regex: [/^[A-Za-z\s]+$/, 'Last name should only contain letters']
        },
        email: {
          required: [true, 'Email is required'],
          email: [true, 'Please enter a valid email address']
        },
        phoneNumber: {
          required: [true, 'Phone number is required'],
          tel: [true, 'Please enter a valid phone number with 9 to 13 digits. Example: +919876543210 or 9876543210']
        }
      }
    },
    2: {
      title: 'Address Information',
      fields: [
        { name: 'address', label: 'Street Address', placeholder: 'Enter your full street address', type: 'textarea' },
        { name: 'city', label: 'City', placeholder: 'Enter your city name', type: 'text' },
        { name: 'state', label: 'State', placeholder: 'Enter your state name', type: 'text' },
        { name: 'zipCode', label: 'Zip Code', placeholder: 'Enter your zip code (e.g., 123456)', type: 'numeric', format: '#.##' }
      ],
      rules: {
        address: {
          required: [true, 'Street address is required'],
          minLength: [5, 'Please enter a valid street address']
        },
        city: {
          required: [true, 'City is required'],
          regex: [/^[A-Za-z\s]+$/, 'City should only contain letters']
        },
        state: {
          required: [true, 'State is required']
        },
        zipCode: {
          required: [true, 'Zip code is required'],
          regex: ['^\\d{6}$', 'Please enter a valid zip code (123456)']
        }
      }
    },
    3: {
      title: 'Account Information',
      fields: [
        { name: 'username', label: 'Username', placeholder: 'Choose a username (4-20 characters)', type: 'text' },
        { name: 'password', label: 'Password', placeholder: 'Create a strong password', type: 'password' },
        { name: 'confirmPassword', label: 'Confirm Password', placeholder: 'Re-enter your password', type: 'password' }
      ],
      rules: {
        username: {
          required: [true, 'Username is required'],
          minLength: [4, 'Username must be at least 4 characters'],
          maxLength: [20, 'Username cannot exceed 20 characters']
        },
        password: {
          required: [true, 'Password is required'],
          regex: [/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, 'Password must include uppercase, lowercase, number, and special character'],
          minLength: [8, 'Password must be at least 8 characters']
        },
        confirmPassword: {
          required: [true, 'Please confirm your password'],
          equalTo: ['password', 'Passwords do not match']
        }
      }
    }
  };

  const getCurrentStepConfig = () => stepConfigs[currentStep];

  const handleStepSubmit = (data: StepData) => {
    setStepStates(prev => ({
      ...prev,
      [currentStep]: { isCompleted: true, data }
    }));

    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsComplete(true);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      if (formState?.values) {
        setStepStates(prev => ({
          ...prev,
          [currentStep]: { ...prev[currentStep], data: formState.values }
        }));
      }
      setCurrentStep(currentStep - 1);
    }
  };

  const getAllFormData = (): StepData => Object.values(stepStates).reduce((acc, step) => ({ ...acc, ...step.data }), {});

  const canProceedToNext = () => formState?.allowSubmit === true;

  const resetForm = () => {
    setCurrentStep(1);
    setIsComplete(false);
    setStepStates({
      1: { isCompleted: false, data: {} },
      2: { isCompleted: false, data: {} },
      3: { isCompleted: false, data: {} }
    });
    setFormState(undefined);
  };

  const renderField = (field: FieldConfig) => {
    const renderInputComponent = () => {
      switch (field.type) {
        case 'textarea':
          return (
            <TextArea
              id={field.name}
              placeholder={field.placeholder}
              resizeMode={ResizeMode.Vertical}
              width="100%"
              className={formState?.errors[field.name] ? 'sf-error' : undefined}
              value={(formState?.values[field.name] || '') as string}
              onChange={(args: TextAreaChangeEvent) => formState?.onChange(field.name, { value: args.value || '' })}
              onBlur={() => formState?.onBlur(field.name)}
              onFocus={() => formState?.onFocus(field.name)}
            />
          );
        case 'numeric':
          return (
            <NumericTextBox
              id={field.name}
              placeholder={field.placeholder}
              spinButton={false}
              format={field.format}
              className={formState?.errors[field.name] ? 'sf-error' : undefined}
              value={Number(formState?.values[field.name]) || null}
              onChange={(args: NumericChangeEvent) => formState?.onChange(field.name, { value: args.value })}
              onBlur={() => formState?.onBlur(field.name)}
              onFocus={() => formState?.onFocus(field.name)}
            />
          );
        default:
          return (
            <TextBox
              id={field.name}
              placeholder={field.placeholder}
              autoComplete='off'
              type={field.type === 'text' ? undefined : field.type}
              className={formState?.errors[field.name] ? 'sf-error' : undefined}
              value={(formState?.values[field.name] || '') as string}
              onChange={(args: TextBoxChangeEvent) => formState?.onChange(field.name, { value: args.value || '' })}
              onBlur={() => formState?.onBlur(field.name)}
              onFocus={() => formState?.onFocus(field.name)}
            />
          );
      }
    };

    return (
      <FormField key={field.name} name={field.name}>
        <div className="form-field">
          <label className="sf-form-label" htmlFor={field.name}>{field.label}</label>
          {renderInputComponent()}
          {formState?.errors[field.name] && (
            <div className="sf-form-error">{formState.errors[field.name]}</div>
          )}
        </div>
      </FormField>
    );
  };

  const renderStepForm = () => {
    const currentStepConfig = getCurrentStepConfig();

    return (
      <Form
        key={`step-${currentStep}`}
        rules={currentStepConfig.rules}
        onSubmit={handleStepSubmit}
        validateOnChange={true}
        autoComplete='off'
        initialValues={stepStates[currentStep].data}
        onFormStateChange={setFormState}
      >
        {currentStep === 2 ? (
          <>
            {renderField(currentStepConfig.fields[0])}
            <div className="form-grid">
              {renderField(currentStepConfig.fields[1])}
              {renderField(currentStepConfig.fields[2])}
            </div>
            {renderField(currentStepConfig.fields[3])}
          </>
        ) : (
          currentStepConfig.fields.map(renderField)
        )}

        <div className="form-actions">
          {currentStep > 1 && (
            <Button type="button" className="form-button" onClick={handlePrevious}> Previous </Button>
          )}
          <Button type="submit" className="form-button" disabled={!canProceedToNext()}>  {currentStep < 3 ? 'Next' : 'Submit'} </Button>
        </div>
      </Form>
    );
  };

  const stepLabels = ['Personal', 'Address', 'Account'];
  const dataLabels = {
    'Personal Information': ['firstName', 'lastName', 'email', 'phoneNumber'],
    'Address Information': ['address', 'city', 'state', 'zipCode'],
    'Account Information': ['username']
  };

  const formatFieldName = (field: string): string => {
    return field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1');
  };

  return (
    <div className="component-section form-container">
      <h2 className="form-title">New Account Creation</h2>
      <div className={`step-indicator ${currentStep === 2 ? 'step-2' : currentStep === 3 ? 'step-3' : ''}`}>
        {stepLabels.map((label, index) => {
          const stepNum = index + 1;
          const isActive = currentStep === stepNum;
          const isCompleted = stepStates[stepNum].isCompleted;

          return (
            <div key={stepNum} className={`step ${isActive ? 'active' : isCompleted ? 'completed' : ''}`}>
              <div className="step-number">{stepNum}</div>
              <div className="step-label">{label}</div>
            </div>
          );
        })}
      </div>

      {!isComplete ? renderStepForm() : (
        <div className="status-message success">
          <h3>Registration Complete!</h3>
          <p>Thank you for completing the registration process.</p>

          <div className="submission-details">
            {Object.entries(dataLabels).map(([sectionTitle, fields]) => (
              <div key={sectionTitle}>
                <h4>{sectionTitle}</h4>
                {fields.map(field => {
                  const allData = getAllFormData();
                  const value = allData[field];
                  const displayValue = (value as string) || 'N/A';

                  return (
                    <p key={field}>
                      <strong>{formatFieldName(field)}:</strong> {displayValue}
                    </p>
                  );
                })}
              </div>
            ))}
          </div>

          <Button type="button" className="form-button" onClick={resetForm}> Start Over </Button>
        </div>
      )}
    </div>
  );
}
