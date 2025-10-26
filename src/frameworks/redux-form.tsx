import { TextBox } from "@syncfusion/react-inputs";
import { Button } from '@syncfusion/react-buttons';
import { useState } from "react";
import './App.css';

export default function App () {
  const [username, setUser] = useState("");
  const [password, setPass] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [nameTouched, setUserTouched] = useState(false);
  const [passwordTouched, setPassTouched] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    if (username != "" && password != "") {
      alert(`username name: ${username}\nPassword: ${password}`);
    }
  };

  return (
    <div className="component-section redux-sample">
      <form onSubmit={handleSubmit}>
        <h2>Redux form</h2>
        <div className="redux-textbox">
          <TextBox
            placeholder="Enter the user name"
            labelMode="Auto"
            value={username}
            onChange={e => setUser(e.value as string)}
            onBlur={() => setUserTouched(true)}
            style={{ width: "100%" }}
          />
          {(nameTouched || submitted) && username.trim() === "" && (
            <span className="error-message">Required</span>
          )}
        </div>
        <div className="redux-textbox">
          <TextBox
            placeholder="Enter the password"
            type="password"
            labelMode="Auto"
            value={password}
            onChange={e => setPass(e.value as string)}
            onBlur={() => setPassTouched(true)}
            style={{ width: "100%" }}
          />
          {(passwordTouched || submitted) && password.trim() === "" && (
            <span className="error-message">Required</span>
          )}
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}