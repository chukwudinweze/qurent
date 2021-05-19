import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import { Button, IconButton } from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import LocalGvts from "./LocalGvts";
import RenderLocation from "./RenderLocation";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import FormRoomCategory from './FormRoomCategory'



const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "4rem",
    width: "90%",
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "100%",
      focused: {
        borderColor: "green",
      },
    },
  },
}));

const initialValues = {
  localGvt: "",
  category: "",
  pictures: [""],
  location: "",
  title: "",
  typeOfProperty: "",
  condition: "",
  description: "",
  price: undefined,
};

const validationSchema = Yup.object({
  localGvt: Yup.string().required("Required"),
  category: Yup.string().required("Required"),
  location: Yup.string().required("Required"),
});
const onSubmit = (value) => {
  console.log(value);
};

const validatePictured = (value) => {
  let error;
  if (value.length <= 5) {
    error = "Pictures must be more than six";
  }
  return error;
};

const PostProperty = () => {
  const classes = useStyles();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        console.log(formik.values);
        return (
          <div className={classes.root}>
            <Form>
              <div>
                <TextField
                  id=""
                  name="category"
                  label="category*"
                  select
                  variant="outlined"
                  value={formik.values.category}
                  onChange={formik.handleChange}
                  helperText={formik.touched.email && formik.errors.email}
                >
                  {FormRoomCategory.map((category) => (
                    <MenuItem key={category.value} value={category.value}>
                      {category.label}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
              <TextField
                id="localGvt"
                name="localGvt"
                label="Local government*"
                select
                variant="outlined"
                value={formik.values.localGvt}
                onChange={formik.handleChange}
                helperText={formik.touched.localGvt && formik.errors.localGvt}
              >
                {LocalGvts.map((localGvt) => (
                  <MenuItem
                    key={localGvt.value}
                    value={localGvt.value}
                    onClick={() =>
                      formik.setFieldValue("localGvt", `${localGvt.value}`)
                    }
                  >
                    {localGvt.label}
                  </MenuItem>
                ))}
              </TextField>
              <div>
                <TextField
                  disabled={!formik.values.localGvt}
                  id="location"
                  name="location"
                  label="location*"
                  select
                  variant="outlined"
                  value={formik.values.location}
                  onChange={formik.handleChange}
                  helperText={formik.touched.location && formik.errors.location}
                >
                  {RenderLocation(formik.values.localGvt)}
                </TextField>
              </div>
              <div>
                <TextField
                  type="text"
                  name="location"
                  id="location"
                  label="location*"
                  value={formik.values.location}
                  onChange={formik.handleChange}
                  helperText={formik.touched.location && formik.errors.location}
                />
              </div>
              <div>
                <p className="no__of__pictures_hints">
                  please add at least five 6 pictures, first picture is the
                  banner of your room
                </p>
                <FieldArray name="pictures">
                  {(fieldArrayProps) => {
                    const { push, remove, form } = fieldArrayProps;
                    const { values } = form;
                    const { pictures } = values;

                    return (
                      <div>
                        {pictures.map((picture, index) => (
                          <span
                            key={index}
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <Field
                              name={`pictures[${index}]`}
                              type="file"
                              accept="image/x-png, image/jpeg"
                              style={{ width: "80%" }}
                            />

                            <IconButton
                              color="secondary"
                              onClick={() => remove(index)}
                              aria-label="delete"
                            >
                              <DeleteIcon />
                            </IconButton>
                          </span>
                        ))}
                        <button
                          type="button"
                          style={{
                            marginLeft: "10px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                          onClick={() => push("")}
                        >
                          <AddCircleIcon />
                          {pictures.length > 0
                            ? "Add More Pictures"
                            : "Add Picture"}
                        </button>
                      </div>
                    );
                  }}
                </FieldArray>
              </div>
              {/* <input
                  type="file"
                  name="picture"
                  id="picture1"
                  value={formik.values.picture1}
                  onChange={formik.handleChange}
                  helperText="pictures"
                /> */}

              <button type="submit">submit</button>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default PostProperty;