 function validateEmail(email) {
  if (typeof email !== 'string') return 'Email is required';
  const normalized = email.trim().toLowerCase();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized);
  if(!emailRegex) return 'Wrong email format';

  return '';
}

 function validatePassword(password) {
  if (typeof password !== 'string') return 'Password is required';
  if(password.length() < 8) return 'Password must be minimum of 8 characters !.';

  return '';
}

 function validateUsername(username) {
  if (typeof username !== 'string') return false;
  const trimmed = username.trim();
  const usernameRegex = /^[A-Za-z0-9_]{3,20}$/;
  return usernameRegex.test(trimmed);
}

 function validateConfirmPassword(password, confirmPassword) {
  if (typeof password !== 'string' || typeof confirmPassword !== 'string') return false;
  return password === confirmPassword && password.length > 0;
}

export function validateRegistrationFields({ email, password, username, confirmPassword }) {
  return {
    email: validateEmail(email),
    password: validatePassword(password),
    username: validateUsername(username),
    confirmPassword: validateConfirmPassword(password, confirmPassword),
  };
}
