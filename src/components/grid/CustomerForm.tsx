import React, { useEffect } from 'react';
import './CustomerForm.css';
import {
  Form, FormField, FormState, FormValueType, ValidationRules, TextBox, TextBoxChangeEvent
} from '@syncfusion/react-inputs';
import { Button } from '@syncfusion/react-buttons';
import { ChangeEvent, DatePicker } from '@syncfusion/react-calendars';
import { Order } from './multiple-validation';
 
interface CustomerFormProps {
  formState: FormState;
  setFormState: React.Dispatch<React.SetStateAction<FormState>>;
  selectedProduct: Order;
  formKey: number;
  formMode: 'add' | 'edit' | null;
  showForm: boolean;
  onSubmit: (data: Record<string, FormValueType>) => void;
  onCancel: () => void;
}
 
const validationRules: ValidationRules = {
    FirstName: {
        required: [true, 'First Name is required'],
        minLength: [3, 'First Name must be at least 3 characters']
    },
    LastName: {
        required: [true, 'Last Name is required'],
        minLength: [2, 'Last Name must be at least 2 characters']
    },
    Phone: {
        required: [true, 'Phone Number is required'],
        regex: [/^\+?[0-9\- ]{10,15}$/, 'Phone number must be 10 to 15 digits long and follow international format (e.g., +1-555-123-4567)']
    },
    Email: {
        required: [true, 'Email is required'],
        email: [true, 'Enter a valid email'],
        customValidator: (value) => {
            const email = String(value);
            if (!email.endsWith('@example.com') && !email.endsWith('@example.in') && !email.endsWith('@example.co.uk')) {
                return 'Email must end with @example.com or @example.in or @example.co.uk';
            }
            return '';
            }
        },
    AccountNumber: {
        required: [true, 'Account Number is required'],
        regex: [/^(US[0-9A-Z]{10}|GB[0-9A-Z]{20}|IN[0-9A-Z]{14})$/, 'Enter a valid account number for US (12), GB (22), or IN (16)']
    },
    CreditCardNumber: {
        required: [true, 'Card Number is required'],
        regex: [/^[0-9 ]{19}$/, 'Card Number must be 16 digits with spaces (e.g., 4111 1111 1111 1111)']
    },
    ExpireDate: {
        required: [true, 'Expiry Date is required'],
        customValidator: (value: FormValueType): string | null => {
        if (!(value instanceof Date)) return 'Invalid date format';
        const now = new Date();
        if (value < now) return 'Expiry date cannot be in the past.';
        return null;
        }
    }
};
 
const CustomerForm: React.FC<CustomerFormProps> = ({
  formState,
  setFormState,
  selectedProduct,
  formKey,
  formMode,
  showForm,
  onSubmit,
  onCancel,
}) => {
  const fields: (keyof Order)[] = [
    'CustomerID', 'FirstName', 'LastName', 'Phone', 'Email', 'AccountNumber', 'CreditCardNumber', 'ExpireDate', 'CardStatus',
  ];
 
  // Sync formState with selectedProduct when form opens in edit mode.
  useEffect(() => {
    if (showForm && formMode === 'edit' && Object.keys(formState.values).length === 0) {
      setFormState((prev: FormState) => ({
        ...prev,
        values: { ...selectedProduct },
        errors: prev.errors || {},
      }));
    }
  }, [formMode, selectedProduct, showForm, setFormState]);
 
  if (!showForm) return null;
 
  return (
    <div
      className="form-container"
    >
      <Form
        key={formKey}
        rules={validationRules}
        initialValues={formState.values}
        onSubmit={onSubmit}
        validateOnChange={true}
        onFormStateChange={(state) => {
          setFormState(state);
        }}
      >
        <h2>Customer Details</h2>
        <div className='form-layout' >
          {fields.map((field) => {
            const isDisabled =
              field === 'CustomerID' || field === 'CardStatus' ||
              (formMode === 'edit' && ['CustomerID', 'AccountNumber', 'CreditCardNumber', 'ExpireDate', 'CardStatus'].includes(field));
                const fieldValue = formState.values[field];
                const isDateField = field === 'ExpireDate';
 
            return (
              <FormField key={field} name={field}>
                <div className="form-row">
                  <label>
                    {field === 'CustomerID' ? 'Customer ID' : field.replace(/([A-Z])/g, ' $1')}
                  </label>
                  {isDateField ? (
                    <DatePicker
                      format="MM/yyyy"
                      value={fieldValue instanceof Date ? fieldValue : undefined}
                      onChange={(e) => {
                        if ((e as ChangeEvent).value instanceof Date) {
                          formState.onChange(field, { value: (e as ChangeEvent).value as Date});
                        }
                      }}
                      onBlur={(e) => {
                        if (e.currentTarget.contains(e.target)) {
                          formState.onBlur(field);
                        }
                      }}
                      disabled={isDisabled}
                    />
                  ) : (
                    <TextBox
                      name={field}
                      disabled={isDisabled}
                      value={fieldValue as string || ''}
                      onChange={(args: TextBoxChangeEvent) => {
                        formState.onChange(field, { value: args.value || '' });
                      }}
                      onBlur={() => formState.onBlur(field)}
                      className={formState.errors[field] ? 'error-text' : ''}
                    />
                  )}
                  {formState.errors[field] && (
                    <div className="error-text">
                      {formState.errors[field]}
                    </div>
                  )}
                </div>
              </FormField>
            );
          })}
        </div>
        <div className="form-actions">
          <Button type="reset"  className="form-button cancel-button" onClick={onCancel}> Cancel </Button>
          <Button type="submit" className="form-button" disabled={!formState.allowSubmit}> Save </Button>
        </div>
      </Form>
    </div>
  );
};
 
export default CustomerForm;