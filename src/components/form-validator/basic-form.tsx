import { useState } from 'react';
import { Form, FormField, ValidationRules, FormState, TextBox, NumericTextBox, TextBoxChangeEvent, NumericChangeEvent } from '@syncfusion/react-inputs';
import { Button, Color } from '@syncfusion/react-buttons';
import './app.css';

export default function App() {
  const [submissionData, setSubmissionData] = useState<Record<string, string> | null>(null);
  const [formState, setFormState] = useState<FormState>();

  const validationRules: ValidationRules = {
    fullName: {
      required: [true, 'Full name is required'],
      regex: [/^[A-Za-z\s]+$/, 'Full name should contain only alphabets'],
      minLength: [2, 'Full name must be at least 2 characters']
    },
    email: {
      required: [true, 'Email is required'],
      email: [true, 'Please enter a valid email address']
    },
    eventType: {
      required: [true, 'Event type is required'],
      minLength: [3, 'Event type must be at least 3 characters']
    },
    participants: {
      required: [true, 'Number of participants is required'],
      number: [true, 'Number of participants must be a number'],
      range: [[1, 10], 'Number of participants must be between 1 and 10']
    }
  };

  const fields = [
    { name: 'fullName', placeholder: 'Enter your full name', label: 'Full Name' },
    { name: 'email', placeholder: 'Enter your email', label: 'Email' },
    { name: 'eventType', placeholder: 'Enter event type', label: 'Event Type' },
    { name: 'participants', placeholder: 'Enter number of participants', label: 'Number of Participants' }
  ];

  return (
    <div className="component-section form-container">
      <h2 className="form-title">Event Registration</h2>
      <Form rules={validationRules} onSubmit={(data) => setSubmissionData(data as Record<string, string>)} onFormStateChange={setFormState} validateOnChange={true} autoComplete='off' >
        {fields.map((field) => (
          <FormField key={field.name} name={field.name} >
            <div className="form-field">
              <label className="sf-form-label" htmlFor={field.name}> {field.label} </label>
              {field.name !== 'participants' ? (
                <TextBox id={field.name} name={field.name} placeholder={field.placeholder}
                  autoComplete='off'
                  className={formState?.errors[field.name] ? 'sf-error' : undefined}
                  value={(formState?.values[field.name] || '') as string}
                  onChange={(args: TextBoxChangeEvent) => formState?.onChange(field.name, { value: args.value || '' })}
                  onBlur={() => formState?.onBlur(field.name)} />
              ) : (
                <NumericTextBox id={field.name} name={field.name} format='n' placeholder={field.placeholder}
                  className={formState?.errors[field.name] ? 'sf-error' : undefined}
                  value={Number(formState?.values[field.name]) || null}
                  min={0}
                  onChange={(args: NumericChangeEvent) => {
                    if (args) {
                      formState?.onChange(field.name, { value: args.value });
                    }
                  }}
                  onBlur={() => formState?.onBlur(field.name)} />
              )}
              {formState?.errors[field.name] && (<div className="sf-form-error">{formState?.errors[field.name]}</div>)}
            </div>
          </FormField>
        ))}

        <div className="form-actions">
          <Button type="reset" className="form-button" color={Color.Error} onClick={() => { setSubmissionData(null); }} >Reset</Button>
          <Button type="submit" className="form-button" disabled={!formState?.allowSubmit} > Submit </Button>
        </div>

        {submissionData && (
          <div className="status-message success">
            <h3>Event Registration Submitted!</h3>
            <p><strong>Full Name:</strong> {submissionData.fullName}</p>
            <p><strong>Email:</strong> {submissionData.email}</p>
            <p><strong>Event Type:</strong> {submissionData.eventType}</p>
            <p><strong>Number of Participants:</strong> {submissionData.participants}</p>
          </div>
        )}
      </Form>
    </div>
  );
}