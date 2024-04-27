export const checkEmail = (email: string) => {
  // check email format
  if (!email) return;

  // check if email is valid
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ ;

  return emailRegex.test(email);      
};