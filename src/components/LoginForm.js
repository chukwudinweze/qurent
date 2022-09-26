import React from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { Form, Formik } from "formik";
import { validationSchema } from "./LoginFormValidation";
import "../Styles/LoginForm.css";
import { useState } from "react";
import Logo from "../images/logo.png";
import { setUser } from "../actions/user";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const LoginForm = () => {
  const [login, setLogin] = useState(true);

  const dispatch = useDispatch();

  // get the current state. This is mainly used to style post ad button
  const loading = useSelector((state) => state.uiInteraction.authLoading);
  const error = useSelector((state) => state.uiInteraction.errorAuth);
  const errorMsg = useSelector((state) => state.uiInteraction.errorMsg);

  // initial formik values
  const initialValues = {
    email: "",
    password: "",
  };

  // dynamic url for login and signup  end point
  const url = login
    ? "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDP1Wo9ZXDH7eHhmZz3b7yD1li4noBmlCY"
    : "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDP1Wo9ZXDH7eHhmZz3b7yD1li4noBmlCY";
  const onSubmit = (value, { resetForm }) => {
    dispatch(setUser(value, url));
  };
  return (
    <section className="register__form__section">
      <article className="register__form__article">
        <div className="logo__image">
          <img src={Logo} alt="logo" />
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => {
            return (
              <Form>
                <strong>{login ? "Login" : "Welcome to qurent"}</strong>
                <p>
                  {login
                    ? "Kindly enter your details to login"
                    : "Kindly enter correct details to sign up"}
                </p>
                <div className="login__email">
                  <TextField
                    error={formik.touched.email && formik.errors.email}
                    id="email"
                    label="Email Address"
                    variant="outlined"
                    value={formik.values.email || ""}
                    onChange={formik.handleChange}
                    helperText={formik.touched.email && formik.errors.email}
                    fullWidth
                    size="medium"
                  />
                </div>
                <div className="login__password">
                  <TextField
                    error={formik.touched.password && formik.errors.password}
                    id="password"
                    label="Password"
                    variant="outlined"
                    value={formik.values.password || ""}
                    onChange={formik.handleChange}
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                    fullWidth
                    size="medium"
                  />
                </div>
                <div className="login__button">
                  <Button
                    type="submit"
                    variant="contained"
                    disableElevation
                    fullWidth
                    size="large"
                    style={{ background: "#20c063", color: "#fff" }}
                    disabled={loading}
                  >
                    {login && !loading && !error && "Login"}
                    {!login && !loading && !error && "Sign up"}
                    {!error && loading && "Authenticating"}
                    {error && "Retry"}
                  </Button>
                </div>
              </Form>
            );
          }}
        </Formik>
        <p className="switch__state">
          {login ? "Not registered yet?" : "Already registered?"}
          <Button
            style={{ color: "#20c063" }}
            onClick={() => {
              setLogin(!login);
            }}
          >
            {login ? "Sign up" : "Login"}
          </Button>
        </p>
        <p className="error">{error && errorMsg}</p>
      </article>
    </section>
  );
};

export default LoginForm;
