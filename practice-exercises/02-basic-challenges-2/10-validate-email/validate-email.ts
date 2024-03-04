export function validateEmail(email: string): boolean {
  const validEmail: RegExp = /^[a-zA-z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;

  return validEmail.test(email);
}
