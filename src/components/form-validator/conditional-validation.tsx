import { useState } from 'react';
import { Form, FormField, ValidationRules, FormValueType, FormState, NumericTextBox, TextBox, TextBoxChangeEvent, NumericChangeEvent } from '@syncfusion/react-inputs';
import { RadioButton } from '@syncfusion/react-buttons';
import { Button, Color } from '@syncfusion/react-buttons';
import './app.css';

interface BaseFieldConfig {
  name: string;
  placeholder: string;
  label: string;
  isRadioGroup?: boolean;
  isNumeric?: boolean;
  radioOptions?: { value: string; label: string; className?: string }[];
  onChange?: (value: string) => void;
  format?: string;
  min?: number;
}

export default function App() {
  const [employmentType, setEmploymentType] = useState<string>('');
  const [formState, setFormState] = useState<FormState>();
  const [submissionData, setSubmissionData] = useState<Record<string, FormValueType> | null>(null);

  const baseFields: BaseFieldConfig[] = [
    { name: 'fullName', placeholder: 'Enter your full name', label: 'Full Name' },
    { name: 'email', placeholder: 'Enter your email address', label: 'Email' },
    {
      name: 'employmentType',
      placeholder: 'Select your employment type',
      label: 'Employment Type',
      isRadioGroup: true,
      radioOptions: [
        { value: 'Employee', label: 'Employee' },
        { value: 'Freelancer', label: 'Freelancer' },
        { value: 'Contractor', label: 'Contractor' }
      ],
      onChange: (value: string) => setEmploymentType(value)
    }
  ];

  const employeeFields: BaseFieldConfig[] = [
    { name: 'employeeId', placeholder: 'Enter your employee ID (min 5 characters)', label: 'Employee ID' }
  ];

  const freelancerFields: BaseFieldConfig[] = [
    { name: 'taxId', placeholder: 'Enter your tax ID (min 4 characters)', label: 'Tax ID' },
    { name: 'hourlyRate', placeholder: 'Enter your hourly rate (min $1)', label: 'Hourly Rate ($)', isNumeric: true, format: 'c2', min: 1 }
  ];

  const contractorFields: BaseFieldConfig[] = [
    { name: 'companyName', placeholder: 'Enter your company name', label: 'Company Name' },
    { name: 'contractPeriod', placeholder: 'Enter contract period in months (min 3)', label: 'Contract Period (months)', isNumeric: true, format: '#.##', min: 3 }
  ];

  const getAdditionalFields = (): BaseFieldConfig[] => {
    switch (employmentType) {
      case 'Employee': return employeeFields;
      case 'Freelancer': return freelancerFields;
      case 'Contractor': return contractorFields;
      default: return [];
    }
  };

  const getValidationRules = (): ValidationRules => {
    const baseRules: ValidationRules = {
      fullName: {
        required: [true, 'Full name is required'],
        regex: [/^[A-Za-z\s]+$/, 'Full name should contain only alphabets'],
        minLength: [2, 'Name must be at least 2 characters']
      },
      email: {
        required: [true, 'Email is required'],
        email: [true, 'Please enter a valid email address']
      },
      employmentType: {
        required: [true, 'Please select an employment type']
      }
    };

    if (employmentType === 'Employee') {
      baseRules.employeeId = {
        required: [true, 'Employee ID is required'],
        minLength: [5, 'Employee ID must be at least 5 characters']
      };
      baseRules.department = {
        required: [true, 'Department is required']
      };
    }

    if (employmentType === 'Freelancer') {
      baseRules.taxId = {
        required: [true, 'Tax ID is required'],
        minLength: [4, 'Tax ID must be at least 4 characters']
      };
      baseRules.hourlyRate = {
        required: [true, 'Hourly rate is required'],
        min: [1, 'Hourly rate must be greater than $0'],
        number: [true, 'Hourly rate must be a number']
      };
    }

    if (employmentType === 'Contractor') {
      baseRules.companyName = {
        required: [true, 'Company name is required']
      };
      baseRules.contractPeriod = {
        required: [true, 'Contract period is required'],
        min: [3, 'Contract period must be at least 3 month'],
        number: [true, 'Contract period must be a number']
      };
    }

    return baseRules;
  };

  const handleSubmit = (data: Record<string, FormValueType>): void => {
    setSubmissionData(data);
  };

  return (
    <div className="component-section form-container">
      <h2 className="form-title">Employment Application</h2>

      {submissionData && (
        <div className="submission-success">
          <h3>Form Submitted Successfully!</h3>
          <p>Employment Type: {submissionData.employmentType as string}</p>
          <div className="form-fields-display">
            {Object.entries(submissionData).map(([key, value]) => {
              if (key === 'employmentType' || value === '') return null;
              return (
                <div key={key} className="form-field-display">
                  <span className="field-label">{key}:</span>
                  <span className="field-value">{value as string}</span>
                </div>
              );
            })}
          </div>
          <Button
            className="form-button submit-another-button"
            onClick={() => {
              setSubmissionData(null);
              setEmploymentType('');
            }}
          >
            Submit Another Application
          </Button>
        </div>
      )}

      {!submissionData && (
        <Form rules={getValidationRules()} onSubmit={handleSubmit} autoComplete='off' validateOnChange={true} onFormStateChange={setFormState} >
          {baseFields.map((field) => (
            <FormField key={field.name} name={field.name} >
              <div className="form-field">
                {field.isRadioGroup ? (
                  <label className="sf-form-label">{field.label}</label>
                ) : (
                  <label className="sf-form-label" htmlFor={field.name}>{field.label}</label>
                )}
                {field.isRadioGroup ? (
                  <div className="radio-group" style={{ display: 'flex', flexDirection: 'row', gap: '10px', flexWrap: 'wrap', paddingTop: '4px' }}>
                    {field.radioOptions?.map((option) => (
                      <RadioButton
                        key={option.value}
                        name={field.name}
                        value={option.value}
                        label={option.label}
                        checked={(formState?.values[field.name] || '') === option.value}
                        onChange={(args) => {
                          formState?.onChange(field.name, { value: args.value });
                          field.onChange?.(args.value);
                        }}
                      />
                    ))}
                  </div>
                ) : (
                  <TextBox name={field.name} placeholder={field.placeholder}
                    autoComplete='off'
                    className={formState?.errors[field.name] ? 'sf-error' : undefined}
                    value={(formState?.values[field.name] || '') as string}
                    onChange={(args: TextBoxChangeEvent) => formState?.onChange(field.name, { value: args.value || '' })}
                    onBlur={() => formState?.onBlur(field.name)} />
                )}
                {formState?.errors[field.name] && (<div className="sf-form-error">{formState?.errors[field.name]}</div>)}
              </div>
            </FormField>
          ))}

          {getAdditionalFields().map((field) => (
            <FormField key={field.name} name={field.name} >
              <div className="form-field">
                <label className="sf-form-label" htmlFor={field.name}>{field.label}</label>
                {field.isRadioGroup ? (
                  <div className="radio-group" style={{ display: 'flex', flexDirection: 'row', gap: '20px', flexWrap: 'wrap' }}>
                    {field.radioOptions?.map((option) => (
                      <RadioButton
                        key={option.value}
                        name={field.name}
                        value={option.value}
                        label={option.label}
                        className={option.className}
                        checked={(formState?.values[field.name] || '') === option.value}
                        onChange={(args) => {
                          const newValue = args.value as string;
                          formState?.onChange(field.name, { value: newValue });
                          field.onChange?.(newValue);
                        }}
                      />
                    ))}
                  </div>
                ) : field.isNumeric ? (
                  <NumericTextBox id={field.name} name={field.name} placeholder={field.placeholder} format={field.format} min={field.min}
                    className={formState?.errors[field.name] ? 'sf-error' : undefined}
                    value={Number(formState?.values[field.name]) || null}
                    onChange={(args: NumericChangeEvent) => formState?.onChange(field.name, { value: args.value })}
                    onBlur={() => formState?.onBlur(field.name)} />
                ) : (
                  <TextBox id={field.name} name={field.name} placeholder={field.placeholder}
                    className={formState?.errors[field.name] ? 'sf-error' : undefined}
                    value={(formState?.values[field.name] || '') as string}
                    onChange={(args: TextBoxChangeEvent) => formState?.onChange(field.name, { value: args.value || '' })}
                    onBlur={() => formState?.onBlur(field.name)} />
                )}
                {formState?.errors[field.name] && (<div className="sf-form-error">{formState?.errors[field.name]}</div>)}
              </div>
            </FormField>
          ))}

          <div className="form-actions">
            <Button type="button" className="form-button" color={Color.Error}
              onClick={() => {
                setEmploymentType('');
                formState?.onFormReset();
              }}
            >
              Reset
            </Button>
            <Button type="submit" className="form-button" disabled={!formState?.allowSubmit} >Submit</Button>
          </div>
        </Form>
      )}
    </div>
  );
}