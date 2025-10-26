import { useState } from 'react';
import { Form, FormField, TextArea, ValidationRules, FormState, ResizeMode, TextBox, TextBoxChangeEvent, TextAreaChangeEvent } from '@syncfusion/react-inputs';
import { Button, Color } from '@syncfusion/react-buttons';
import './app.css';

export default function App() {
  const [status, setStatus] = useState<{ success: boolean; message: string } | null>(null);
  const [formState, setFormState] = useState<FormState>();

  const fields = [
    { name: 'subject', placeholder: 'Enter subject', label: 'Subject' },
    { name: 'email', placeholder: 'Enter your email', label: 'Your Email' },
    { name: 'message', placeholder: 'Enter your message', label: 'Message', isTextArea: true }
  ];
  const validationRules: ValidationRules = {
    subject: {
      required: [true, 'Subject is required'],
      minLength: [5, 'Subject must be at least 5 characters'],
      maxLength: [50, 'Subject must not exceed 50 characters']
    },
    email: {
      required: [true, 'Email is required'],
      email: [true, 'Please enter a valid email address']
    },
    message: {
      required: [true, 'Message is required'],
      minLength: [10, 'Message must be at least 10 characters'],
      maxLength: [500, 'Message must not exceed 500 characters']
    }
  };

  const handleSubmit = () => {
    setStatus({
      success: true,
      message: 'Support ticket submitted successfully! We will contact you soon.'
    });
    setTimeout(() => setStatus(null), 3000);
  };

  return (
    <div className="component-section form-container">
      <h2 className="form-title">Contact Support</h2>

      <Form rules={validationRules} onSubmit={handleSubmit} validateOnChange={true} autoComplete='off' onFormStateChange={setFormState} >
        {fields.map((field) => (
          <FormField
            key={field.name}
            name={field.name}
          >
            <div className="form-field">
              <label className="sf-form-label" htmlFor={field.name}>{field.label}</label>
              {field.isTextArea ? (
                <TextArea id={field.name} name={field.name} resizeMode={ResizeMode.Vertical} placeholder={field.placeholder}
                  className={formState?.errors[field.name] ? 'sf-error' : undefined}
                  value={(formState?.values[field.name] || '') as string}
                  onChange={(args: TextAreaChangeEvent) => formState?.onChange(field.name, { value: args.value || '' })}
                  onBlur={() => formState?.onBlur(field.name)} width={'100%'} />
              ) : (
                <TextBox id={field.name} name={field.name} placeholder={field.placeholder}
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

        <div className="form-actions">
          <Button type="button" className="form-button" color={Color.Error}
            onClick={() => {
              formState?.onFormReset();
              setStatus(null);
            }}
          >
            Reset
          </Button>
          <Button type="submit" className="form-button" disabled={!formState?.allowSubmit} >Create</Button>
        </div>

        {status && (<div className={`status-message ${status.success ? 'success' : 'error'}`}>{status.message}</div>)}
      </Form>
    </div>
  );
}