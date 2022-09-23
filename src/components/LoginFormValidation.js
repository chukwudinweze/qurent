import * as yup from "yup";

export const validationSchema = () => {
  const validations = yup.object({
    email: yup.string().email().required("Enter Email"),
    password: yup
      .string()
      .required("Enter password")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
        "Password must contain 8 characters. Atleast one uppercase, lowercase, number and special character"
      ),
  });
  return validations;
};
