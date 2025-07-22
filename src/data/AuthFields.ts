
interface AuthField {
  label: string;
  placeholder: string;
  type: string;
  name: string;
}

export const loginFields: AuthField[] = [
  { label: "Email Address", placeholder: "Enter your email address", type: "email", name: "email" },
  { label: "Password", placeholder: "Enter your password", type: "password", name: "password" },
];

export const signupFields: AuthField[] = [
  { label: "Name and Surname", placeholder: "Enter your name and surname", type: "text", name: "name" },
  ...loginFields,
];
