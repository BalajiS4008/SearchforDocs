import { Dialog } from '@syncfusion/react-popups';
import { Button, Variant } from '@syncfusion/react-buttons';
import { TextBox, NumericTextBox, TextBoxChangeEvent, NumericChangeEvent } from '@syncfusion/react-inputs';
import { Form, FormField, ValidationRules, FormValueType, FormState } from '@syncfusion/react-inputs';
import { useState } from 'react';
import './App.css';

export default function App() {
    const [visible, setVisible] = useState(false);
    const [submissionData, setSubmissionData] = useState<Record<string, FormValueType> | null>(null);
    const [formState, setFormState] = useState<FormState>();

    const openDialog = () => {
        setVisible(true);
        setSubmissionData(null);
    };

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

    const handleSubmit = (data: Record<string, FormValueType>) => {
        setSubmissionData(data);
        setTimeout(() => {
            setVisible(false);
        }, 3000);
    };

    return (
        <div className="component-section">
            <Button onClick={openDialog}>Open Form Dialog</Button>
            <Dialog
                header="Event Registration Form"
                open={visible}
                className="form-dialog"
                style={{ width: '400px' }}
                footer={<> <Button variant={Variant.Standard} onClick={() => { formState?.onFormReset(); }} >Clear</Button>
                    <Button variant={Variant.Standard} disabled={!formState?.allowSubmit} onClick={formState?.onSubmit} >Submit</Button>
                    </>}
                onClose={() => { setVisible(false); setSubmissionData(null); }}
            >
                <div className="dialog-form-container">
                    {!submissionData ? (
                        <Form
                            rules={validationRules}
                            onSubmit={handleSubmit}
                            validateOnChange={true}
                            autoComplete='off'
                            onFormStateChange={setFormState}
                        >
                            <FormField name="fullName">
                                <div className="form-field">
                                    <label className="sf-form-label" htmlFor="name">Full Name</label>
                                    <div className="input-wrapper">
                                        <TextBox
                                            name='fullName'
                                            id='name'
                                            autoComplete='off'
                                            className={formState?.errors['fullName'] ? 'sf-error' : undefined}
                                            placeholder="Enter your full name (min 2 characters)"
                                            value={(formState?.values['fullName'] || '') as string}
                                            onChange={(args: TextBoxChangeEvent) => formState?.onChange('fullName', { value: args.value || '' })}
                                            onBlur={() => formState?.onBlur('fullName')}
                                        />
                                    </div>
                                    {formState?.errors['fullName'] && (<div className="sf-form-error">{formState?.errors['fullName']}</div>)}
                                </div>
                            </FormField>

                            <FormField name="email">
                                <div className="form-field">
                                    <label className="sf-form-label" htmlFor="email">Email</label>
                                    <div className="input-wrapper">
                                        <TextBox
                                            name='email'
                                            id='email'
                                            autoComplete='off'
                                            className={formState?.errors['email'] ? 'sf-error' : undefined}
                                            placeholder="Enter your email address"
                                            type="email"
                                            value={(formState?.values['email'] || '') as string}
                                            onChange={(args: TextBoxChangeEvent) => formState?.onChange('email', { value: args.value || '' })}
                                            onBlur={() => formState?.onBlur('email')}
                                        />
                                    </div>
                                    {formState?.errors['email'] && (<div className="sf-form-error">{formState?.errors['email']}</div>)}
                                </div>
                            </FormField>

                            <FormField name="eventType">
                                <div className="form-field">
                                    <label className="sf-form-label" htmlFor="event">Event Type</label>
                                    <div className="input-wrapper">
                                        <TextBox
                                            name='eventType'
                                            id='event'
                                            autoComplete='off'
                                            className={formState?.errors['eventType'] ? 'sf-error' : undefined}
                                            placeholder="Enter event type (min 3 characters)"
                                            value={(formState?.values['eventType'] || '') as string}
                                            onChange={(args: TextBoxChangeEvent) => formState?.onChange('eventType', { value: args.value || '' })}
                                            onBlur={() => formState?.onBlur('eventType')}
                                        />
                                    </div>
                                    {formState?.errors['eventType'] && (<div className="sf-form-error">{formState?.errors['eventType']}</div>)}
                                </div>
                            </FormField>

                            <FormField name="participants">
                                <div className="form-field">
                                    <label className="sf-form-label" htmlFor="participants">Number of Participants</label>
                                    <div className="input-wrapper">
                                        <NumericTextBox
                                            name='participants'
                                            id='participants'
                                            autoComplete='off'
                                            min={0}
                                            className={formState?.errors['participants'] ? 'sf-error' : undefined}
                                            placeholder="Enter number (1-10)"
                                            value={Number(formState?.values['participants']) || null}
                                            onChange={(args: NumericChangeEvent) => { formState?.onChange('participants', { value: args.value }) }}
                                            onBlur={() => formState?.onBlur('participants')}
                                        />
                                    </div>
                                    {formState?.errors['participants'] && (<div className="sf-form-error">{formState?.errors['participants']}</div>)}
                                </div>
                            </FormField>
                        </Form>
                    ) : (
                        <div className="submission-result">
                            <p>Registration Completed!</p>
                            <p><span className="field-name">Full Name:</span> <span className="field-value">{submissionData.fullName as string}</span></p>
                            <p><span className="field-name">Email:</span> <span className="field-value">{submissionData.email as string}</span></p>
                            <p><span className="field-name">Event Type:</span> <span className="field-value">{submissionData.eventType as string}</span></p>
                            <p><span className="field-name">Number of Participants:</span> <span className="field-value">{submissionData.participants as string}</span></p>
                        </div>
                    )}
                </div>
            </Dialog>
        </div>
    );
}