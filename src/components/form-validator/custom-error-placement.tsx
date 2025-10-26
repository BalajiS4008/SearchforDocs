import { useState } from 'react';
import { Form, FormField, ValidationRules, FormValueType, FormState, TextArea, NumericTextBox, TextBox, ResizeMode, TextBoxChangeEvent, NumericChangeEvent, TextAreaChangeEvent } from '@syncfusion/react-inputs';
import { Button, Color } from '@syncfusion/react-buttons';
import './app.css';

export default function App() {
  const [submissionData, setSubmissionData] = useState<Record<string, FormValueType> | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formState, setFormState] = useState<FormState>();

  const validationRules: ValidationRules = {
    name: {
      required: [true, 'Name is required'],
      regex: [/^[A-Za-z\s]+$/, 'Full name should contain only alphabets'],
      minLength: [2, 'Name must be at least 2 characters']
    },
    email: {
      required: [true, 'Email is required'],
      email: [true, 'Please enter a valid email address']
    },
    age: {
      required: [true, 'Age is required'],
      digits: [true, 'Age must be digits only'],
      range: [[18, 70], 'Age must be between 18 and 70']
    },
    feedback: {
      required: [true, 'Feedback is required'],
      minLength: [10, 'Feedback must be at least 10 characters']
    }
  };

  const handleSubmit = (data: Record<string, FormValueType>) => {
    setSubmissionData(data);
    setErrors({});
  };

  return (
    <div className="component-section form-container">
      <h2 className="form-title">Feedback Survey</h2>
      <div className="form-errors-summary">
        {Object.keys(errors).length > 0 && (
          <div className="error-summary">
            <h3>Please fill in the following fields:</h3>
            <ul> {Object.entries(errors).map(([field, message]) => (<li key={field}>{message}</li>))} </ul>
          </div>
        )}
      </div>

      <Form
        rules={validationRules}
        onSubmit={handleSubmit}
        validateOnChange={true}
        autoComplete='off'
        onFormStateChange={(newState) => {
          if (newState) {
            setFormState(newState);
            setErrors(newState.errors);
          }
        }}
      >
        <div className="form-grid">
          <FormField name="name">
            <div className="form-field">
              <label className="sf-form-label" htmlFor="name">Your Name</label>
              <TextBox id="name" name='name' placeholder="Enter your full name" autoComplete='off'
                className={formState?.errors['name'] ? 'sf-error' : undefined}
                value={(formState?.values['name'] || '') as string}
                onChange={(args: TextBoxChangeEvent) => formState?.onChange('name', { value: args.value || '' })}
                onBlur={() => formState?.onBlur('name')} />
            </div>
          </FormField>

          <FormField name="age">
            <div className="form-field">
              <label className="sf-form-label" htmlFor="age">Age</label>
              <NumericTextBox id="age" name='age' placeholder="Enter your age" format="#.##" min={1}
                className={formState?.errors['age'] ? 'sf-error' : undefined}
                value={Number(formState?.values['age']) || null}
                onChange={(args: NumericChangeEvent) => formState?.onChange('age', { value: args.value })}
                onBlur={() => formState?.onBlur('age')} />
            </div>
          </FormField>
        </div>

        <FormField name="email">
          <div className="form-field">
            <label className="sf-form-label" htmlFor="email">Email Address</label>
            <TextBox id="email" name='email' type="email" placeholder="Enter your email address" autoComplete='off'
              className={formState?.errors['email'] ? 'sf-error' : undefined}
              value={(formState?.values['email'] || '') as string}
              onChange={(args: TextBoxChangeEvent) => formState?.onChange('email', { value: args.value || '' })}
              onBlur={() => formState?.onBlur('email')} />
          </div>
        </FormField>

        <FormField name="feedback">
          <div className="form-field">
            <label className="sf-form-label" htmlFor="feedback">Your Feedback</label>
            <TextArea id="feedback" name='feedback' resizeMode={ResizeMode.Vertical} placeholder="Enter your feedback here (min 10 characters)"
              className={formState?.errors['feedback'] ? 'sf-error' : undefined}
              value={(formState?.values['feedback'] || '') as string}
              onChange={(args: TextAreaChangeEvent) => formState?.onChange('feedback', { value: args.value || '' })}
              onBlur={() => formState?.onBlur('feedback')}
            />
          </div>
        </FormField>

        <div className="form-actions">
          <Button type="button" className="form-button" color={Color.Error}
            onClick={() => {
              formState?.onFormReset();
              setSubmissionData(null);
              setErrors({});
            }}
          >
            Reset
          </Button>
          <Button type="submit" className="form-button" disabled={!formState?.allowSubmit}>Submit</Button>
        </div>

        {submissionData && (
          <div className="status-message success">
            <h3>Feedback Submitted!</h3>
            <p><strong>Name:</strong> {submissionData.name as string}</p>
            <p><strong>Email:</strong> {submissionData.email as string}</p>
            <p><strong>Age:</strong> {submissionData.age as string}</p>
            <p><strong>Feedback:</strong> {submissionData.feedback as string}</p>
          </div>
        )}
      </Form>
    </div>
  );
}