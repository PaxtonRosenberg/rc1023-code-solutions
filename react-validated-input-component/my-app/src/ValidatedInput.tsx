import { ChangeEvent, useState } from 'react';

export default function ValidatedInput() {
  const [password, setPassword] = useState('');
  const [validation, setValidation] = useState('is-invalid');
  const [text, setText] = useState('A password is required');
  const [icon, setIcon] = useState('bi bi-x');

  const specialChars: RegExp = /[!@#$%^&*()]/;
  const caps: RegExp = /[A-Z]/;
  const numbers: RegExp = /[0-9]/;

  console.log('password:', password);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
    const newPassword = e.target.value;
    if (newPassword.length < 8) {
      setValidation('is-invalid');
      setText('Your password is too short');
      setIcon('bi bi-x');
    } else if (!newPassword.match(specialChars)) {
      setValidation('is-invalid');
      setText(
        'Your password must include at least one special character ex.) !@#$%^&*()'
      );
    } else if (!newPassword.match(caps)) {
      setValidation('is-invalid');
      setText('Your password must include at least one capital letter');
      setIcon('bi bi-x');
    } else if (!newPassword.match(numbers)) {
      setValidation('is-invalid');
      setText('Your password must include at least one number');
      setIcon('bi bi-x');
    } else {
      setValidation('is-valid');
      setText('');
      setIcon('bi bi-check');
    }
  }
  return (
    <div className="col-md-4">
      <label>
        Password
        <div className="box">
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            required></input>
          <i className={icon}></i>
        </div>
        <div className={validation}>{text}</div>
      </label>
    </div>
  );
}
