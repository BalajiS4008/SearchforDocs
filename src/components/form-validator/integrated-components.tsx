import { useState, useRef } from 'react';
import { Form, FormField, ValidationRules, IFormValidator, FormState } from '@syncfusion/react-inputs';
import { Button, Color } from '@syncfusion/react-buttons';
import './app.css';

export default function App() {
  const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);
  const formRef = useRef<IFormValidator>(null);
  const [formState, setFormState] = useState<FormState>();

  const countries = [
    { id: 'us', name: 'United States' },
    { id: 'ca', name: 'Canada' },
    { id: 'uk', name: 'United Kingdom' },
    { id: 'au', name: 'Australia' },
    { id: 'de', name: 'Germany' },
    { id: 'fr', name: 'France' },
    { id: 'jp', name: 'Japan' }
  ];


  const validationRules: ValidationRules = {
    fullName: {
      required: [true, 'Full name is required'],
      regex: [/^[A-Za-z\s]+$/, 'Full name should contain only alphabets'],
      minLength: [2, 'Name must be at least 2 characters']
    },
    email: {
      required: [true, 'Email is required'],
      email: [true, 'Please enter a valid email address']
    },
    country: {
      required: [true, 'Please select your country']
    },
    amount: {
      required: [true, 'Amount is required'],
      min: [10, 'Minimum amount is $10'],
      max: [100, 'Maximum amount is $100']
    },
    termsAccepted: {
      customValidator: (value) => {
        if (!value) {
          return 'You must accept the terms and conditions';
        }
        return null;
      }
    }
  };

  const handleSubmit = () => {
    setSubmissionStatus('success');
    setTimeout(() => {
      setSubmissionStatus(null);
      if (formRef.current) {
        formRef.current.reset();
      }
    }, 5000);
  };

  const handleReset = () => {
    setSubmissionStatus(null);
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  return (
    <div className="component-section form-container custom-form">
      <h2 className="form-title">Donation Form</h2>

      {!submissionStatus ? (
        <Form
          ref={formRef}
          rules={validationRules}
          onSubmit={handleSubmit}
          validateOnChange={true}
          autoComplete='off'
          initialValues={{ fullName: '', email: '', country: '', birthdate: null, amount: 50, termsAccepted: false }}
          onFormStateChange={setFormState}
        >
          <FormField name="fullName">
            <div className="form-field">
              <label className="sf-form-label" htmlFor="fullName">Full Name</label>
              <input id="fullName" className={`input-field ${!formState?.valid['fullName'] && formState?.visited['fullName'] ? 'error' : ''}`} name='fullName' placeholder="Enter your full name"
                value={(formState?.values['fullName'] || '') as string}
                onChange={(e) => formState?.onChange('fullName', { value: e.target.value })}
                onBlur={() => formState?.onBlur('fullName')}
                onFocus={() => formState?.onFocus('fullName')} />
              {formState?.visited['fullName'] && !formState?.valid['fullName'] && (<div className="sf-form-error">{formState?.errors['fullName']}</div>)}
            </div>
          </FormField>

          <FormField name="email">
            <div className="form-field">
              <label className="sf-form-label" htmlFor="email">Email</label>
              <input id="email" className={`input-field ${!formState?.valid['email'] && formState?.visited['email'] ? 'error' : ''}`} name='email' type="email" placeholder="Enter your email"
                autoComplete='off'
                value={(formState?.values['email'] || '') as string}
                onChange={(e) => formState?.onChange('email', { value: e.target.value })}
                onBlur={() => formState?.onBlur('email')} onFocus={() => formState?.onFocus('email')} />
              {formState?.visited['email'] && !formState?.valid['email'] && (<div className="sf-form-error">{formState?.errors['email']}</div>)}
            </div>
          </FormField>

          <FormField name="country">
            <div className="form-field">
              <label className="sf-form-label" htmlFor="country">Country</label>
              <select id="country" className={`input-field select-field ${!formState?.valid['country'] && formState?.visited['country'] ? 'error' : ''}`} name='country'
                autoComplete='off'
                value={(formState?.values['country'] || '') as string}
                onChange={(e) => formState?.onChange('country', { value: e.target.value })}
                onBlur={() => formState?.onBlur('country')}
                onFocus={() => formState?.onFocus('country')} >
                <option value="">Select your country</option>
                {countries.map(country => (
                  <option key={(country.id as string)} value={(country.id as string)}>
                    {country.name as string}
                  </option>
                ))}
              </select>
              {formState?.visited['country'] && !formState?.valid['country'] && (<div className="sf-form-error">{formState?.errors['country']}</div>)}
            </div>
          </FormField>

          <FormField name="amount">
            <div className="form-field">
              <label className="sf-form-label" htmlFor="amount">Amount ($)</label>
              <input id="amount" className={`input-field ${!formState?.valid['amount'] && formState?.visited['amount'] ? 'error' : ''}`} name='amount' type="number" placeholder="Enter amount"
                min={10} max={100}
                value={(formState?.values['amount'] || '') as string}
                onChange={(e) => formState?.onChange('amount', { value: e.target.value })}
                onBlur={() => formState?.onBlur('amount')}
                onFocus={() => formState?.onFocus('amount')} />
              {formState?.visited['amount'] && !formState?.valid['amount'] && (<div className="sf-form-error">{formState?.errors['amount']}</div>)}
            </div>
          </FormField>

          <FormField name="termsAccepted">
            <div className="form-field">
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <input type="checkbox" id="termsCheckbox" className="custom-checkbox" name='termsAccepted'
                  checked={(formState?.values['termsAccepted'] || false) as boolean}
                  onChange={(e) => formState?.onChange('termsAccepted', { value: e.target.checked })}
                  onBlur={() => formState?.onBlur('termsAccepted')}
                  onFocus={() => formState?.onFocus('termsAccepted')} />
                <label htmlFor="termsCheckbox">I accept the terms and conditions</label>
              </div>
              {formState?.visited['termsAccepted'] && !formState?.valid['termsAccepted'] && (<div className="sf-form-error">{formState?.errors['termsAccepted']}</div>)}
            </div>
          </FormField>

          <div className="form-actions">
            <Button className="form-button" color={Color.Error} onClick={handleReset} >Reset</Button>
            <Button disabled={!formState?.allowSubmit} className="form-button" onClick={formState?.onSubmit} >Submit</Button>
          </div>
        </Form>
      ) : (
        <div className="status-message success">
          <h3>Form Submitted Successfully!</h3>
          <p>Thank you for your submission.</p>
          <p>Redirecting in 5 seconds...</p>
          <Button content="Submit Another" className="form-button" onClick={handleReset} >Submit Another</Button>
        </div>
      )}
    </div>
  );
}