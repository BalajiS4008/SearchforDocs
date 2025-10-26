import { Button } from '@syncfusion/react-buttons';
import { ChangeEventArgs, DropDownList } from '@syncfusion/react-dropdowns';
import { TextBox } from "@syncfusion/react-inputs";
import { Message, Severity } from '@syncfusion/react-notifications';
import { useState } from 'react';
import './validation-form.css';

export default function App() {
  const [state, setState] = useState<{ location: string | null; membership: string; }>({
    location: null,
    membership: ''
  });
  const [showValidityStyles] = useState(true);
  const [success, setSuccess] = useState(false);
  const [touched, setTouched] = useState({
    location: false,
    membership: false
  });

  const locations: { [key: string]: unknown }[] = [
    { text: 'Downtown', value: 'downtown' },
    { text: 'Uptown', value: 'uptown' },
    { text: 'Suburb', value: 'suburb' }
  ];

  const memberships: { [key: string]: unknown }[] = [
    { text: 'Monthly', value: 'monthly' },
    { text: 'Yearly', value: 'yearly' },
    { text: 'Family', value: 'family' }
  ];

  const handleLocationChange = (e?: ChangeEventArgs) => {
    setState({
      ...state,
      location: e?.value as string
    });
    setTouched({
      ...touched,
      location: true
    });
  };

  const handleMembershipChange = (e?: ChangeEventArgs) => {
    setState({
      ...state,
      membership: e?.value as string
    });
    setTouched({
      ...touched,
      membership: true
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setTouched({
      location: true,
      membership: true
    });
    if (state.location && state.membership) {
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    }
  };

  return (
    <div className="row">
      <div className='ddl-parent-element'>
        <div className='form-div-element'>
          <form onSubmit={handleSubmit}>
            <fieldset className='component-section form-container'>
              <div className='ddl-form-div-element'>
                <TextBox
                  id="name"
                  name="name"
                  placeholder="Enter a name"
                  required={true}
                  width="100%"
                  className="e-outline"
                  labelMode='Auto'
                />
              </div>

              <div className='ddl-form-div-element'>
                <DropDownList
                  id="location"
                  name="location"
                  dataSource={locations as { [key: string]: object }[]}
                  fields={{ text: 'text', value: 'value' }}
                  value={state.location}
                  onChange={handleLocationChange}
                  placeholder="Select a location"
                  labelMode='Auto'
                  className='validationform-ddl-width'
                />
                {touched.location && !state.location && showValidityStyles && (
                  <div className='error-text'>
                    Select a Gym Location!
                  </div>
                )}
              </div>

              <div className='ddl-form-div-element'>

                <DropDownList
                  id="membership"
                  name="membership"
                  dataSource={memberships as { [key: string]: object }[]}
                  fields={{ text: 'text', value: 'value' }}
                  value={state.membership}
                  onChange={handleMembershipChange}
                  placeholder="Select a membership"
                  labelMode='Auto'
                  className='validationform-ddl-width'
                  disabled={!state.location}
                />
                {touched.membership && !state.membership && showValidityStyles && state.location && (
                  <div className='error-text'>
                    Please select a Membership Type!
                  </div>
                )}
              </div>
            </fieldset>

            <div className='member-element'>
              <Button type='submit'>Become a member</Button>
            </div>
          </form>

          {success && (
            <Message className="sf-content-center" severity={Severity.Success}>Welcome to the gym!</Message>
          )}
        </div>
      </div>
    </div>
  );
}