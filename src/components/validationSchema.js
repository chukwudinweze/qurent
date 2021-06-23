import * as yup from "yup";

const validationSchema = () => {
  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

  const validations = yup.object({
    localGvt: yup.string().required("Local government is required"),
    category: yup.string().required("Property category is required"),
    location: yup.string().required("Location is required"),
    propertyFor: yup
      .string()
      .required("Indicate if you want to sell or rent out"),
    propertyAdress: yup.string().required("Address is required"),
    propertyCondition: yup
      .string()
      .required("Condition of property is equired"),
    numberOfRooms: yup.string().when("category", {
      is: "Flat",
      then: yup.string().required("Number of rooms is required"),
    }),
    price: yup
      .number()
      .positive("price can't be negative")
      .integer("Decimal point is not accepted")
      .min(1000, "Price should be more than 1000")
      .max(1000000000, "Price is too long")
      .required("Price is required"),

    acceptTerms: yup.bool().oneOf([true]),
    title: yup.string().required("Title is required"),
    phoneNumber: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("Phone number is required"),
  });

  return validations;
};

export default validationSchema;
