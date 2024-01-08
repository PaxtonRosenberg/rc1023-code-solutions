import { FormEvent } from 'react';

export default function RegistrationFormUncontrolled() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    console.log('state:', Object.fromEntries(formData.entries()));
  }
  return (
    <div>
      <h1>Uncontrolled Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username{' '}
          <input type="text" name="username" autoComplete="off" required />
        </label>
        <label>
          Password <input type="password" name="password" required />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
