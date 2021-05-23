import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { Formik, Form, Field, FieldArray } from "formik";
import * as yup from "yup";
import {
  Button,
  Checkbox,
  ClickAwayListener,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  ListItemText,
  Select,
  Tooltip,
} from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";
import LocalGvts from "./LocalGvts";
import RenderLocation from "./RenderLocation";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import FormRoomCategory from "./FormRoomCategory";
import PropertyFor from "./PropertyFor";
import PropertyCondition from "./PropertyCondition";
import NumberOfRooms from "./NumberOfRooms";
import PropertyFacilities from "./PropertyFacilities";
import NairaSymbol from "./NairaSymbol";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "4rem",
    marginBottom: "3rem",
    width: "100%",
    "& .MuiTextField-root": {
      marginBottom: "1rem",
      width: "100%",
      focused: {
        borderColor: "green",
      },
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const validationSchema = yup.object({
  localGvt: yup.string().required("Required"),
  category: yup.string().required("Required"),
  location: yup.string().required("Required"),
  propertyFor: yup.string().required("Required"),
  propertyAdress: yup.string().required("Required"),
  propertyCondition: yup.string().required("Required"),
  numberOfRooms: yup.string().required("Required"),
  amount: yup.number("input must be number").required("Required"),
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
  // material ui class
  const classes = useStyles();
  // input location tooltip state
  const [locationTooltip, setlocationTooltip] = useState(false);

  // change the state of location input tooltip
  const closeLocationTooltip = () => {
    setlocationTooltip(false);
  };

  const openLocationTooltip = () => {
    setlocationTooltip(true);
  };

  // input description description tooltip state
  const [description_Tooltip, setDescription_Tooltip] = useState(false);

  // change the state of description input tooltip
  const close_description_Tooltip = () => {
    setDescription_Tooltip(false);
  };

  const open_description_Tooltip = () => {
    setDescription_Tooltip(true);
  };

  const initialValues = {
    localGvt: "",
    category: "",
    pictures: [""],
    location: "",
    propertyFor: "",
    propertyAdress: "",
    propertyCondition: "",
    numberOfRooms: "",
    description: "",
    propertyFacilities: [],
    amount: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        // formik is an object with proerties like values, handleChange etc
        console.log(formik.values);
        return (
          <div className={classes.root}>
            <Form style={{ padding: "0 2rem", border: "1px solid red" }}>
              <div>
                <TextField
                  id="category"
                  name="category"
                  label="category*"
                  select
                  variant="outlined"
                  value={formik.values.category || ""}
                  onChange={formik.handleChange}
                  helperText={formik.touched.category && formik.errors.category}
                >
                  {FormRoomCategory.map((category) => (
                    <MenuItem key={category.value} value={category.value}>
                      {category.label}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
              <div>
                <TextField
                  id="propertyFor"
                  name="propertyFor"
                  label="Property for*"
                  select
                  variant="outlined"
                  value={formik.values.propertyFor || ""}
                  onChange={formik.handleChange}
                  helperText={
                    formik.touched.propertyFor && formik.errors.propertyFor
                  }
                >
                  {PropertyFor.map((value, index) => (
                    <MenuItem key={index} value={value}>
                      {value}
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
                value={formik.values.localGvt || ""}
                onChange={formik.handleChange}
                helperText={formik.touched.localGvt && formik.errors.localGvt}
              >
                {LocalGvts.map((localGvt) => (
                  <MenuItem
                    key={localGvt.value}
                    value={localGvt.value}
                    onClick={() =>
                      formik.setFieldValue("localGvt", localGvt.value)
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
                  value={formik.values.location || ""}
                  onChange={formik.handleChange}
                  helperText={formik.touched.location && formik.errors.location}
                >
                  {/* RenderLocation() is a function that checks the value of localGvt to determine the location it will showcase in location input below */}
                  {RenderLocation(formik.values.localGvt)}
                </TextField>
              </div>
              <div>
                {/* ClickAwayListener: material ui close tooltip onclick outside the target element(property address) */}
                <ClickAwayListener onClickAway={closeLocationTooltip}>
                  <Tooltip
                    open={locationTooltip}
                    title="example: No.1 Enugu road Nsukka"
                    placement="top"
                    arrow
                    disableHoverListener
                  >
                    <TextField
                      type="text"
                      name="propertyAdress"
                      id="propertyAdress"
                      label="Property address*"
                      variant="outlined"
                      onClick={openLocationTooltip}
                      value={formik.values.propertyAdress || ""}
                      onChange={formik.handleChange}
                      helperText={
                        formik.touched.propertyAdress &&
                        formik.errors.propertyAdress
                      }
                    />
                  </Tooltip>
                </ClickAwayListener>
              </div>
              <div
                style={{
                  border: "1px solid gray",
                  marginBottom: "1rem",
                  padding: "0.312rem",
                  borderRadius: "5px",
                }}
              >
                {/* select multiple pictures, created using formik fieldArray, refer to documentation for more info */}
                <em style={{ fontSize: ".87rem" }}>
                  Please add at least 6 pictures, first picture is the main
                  picture of your room.
                </em>
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
                        {/* <Button
                          type="button"
                          variant="contained"
                          onClick={() => push("")}
                        >
                          <AddCircleIcon />
                          {pictures.length > 0
                            ? "Add More Pictures"
                            : "Add Picture"}
                        </Button> */}

                        <Button
                          style={{ width: "80%" }}
                          type="button"
                          variant="contained"
                          className={classes.button}
                          startIcon={<AddCircleIcon />}
                          onClick={() => push("")}
                        >
                          {pictures.length > 0
                            ? "Add More Pictures"
                            : "Add Picture"}
                        </Button>
                        {/* <button
                          type="button"
                          style={{
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
                        </button> */}
                      </div>
                    );
                  }}
                </FieldArray>
              </div>

              <div>
                <TextField
                  id="propertyCondition"
                  name="propertyCondition"
                  label="Condition*"
                  select
                  variant="outlined"
                  value={formik.values.propertyCondition || ""}
                  onChange={formik.handleChange}
                  helperText={
                    formik.touched.propertyCondition &&
                    formik.errors.propertyCondition
                  }
                >
                  {PropertyCondition.map((condition) => (
                    <MenuItem value={condition}>{condition}</MenuItem>
                  ))}
                </TextField>
              </div>

              <div>
                <TextField
                  // if the value of the category is flat, display this textfield, if not don't display it to the user
                  style={
                    formik.values.category === "Flat"
                      ? {
                          display: "flex",
                        }
                      : { display: "none" }
                  }
                  id="numberOfRooms"
                  name="numberOfRooms"
                  label="Bedrooms*"
                  select
                  variant="outlined"
                  value={formik.values.numberOfRooms || ""}
                  onChange={formik.handleChange}
                  helperText={
                    formik.touched.numberOfRooms && formik.errors.numberOfRooms
                  }
                >
                  {NumberOfRooms.map((number) => (
                    <MenuItem value={number}>{number}</MenuItem>
                  ))}
                </TextField>
              </div>
              <div>
                {/* ClickAwayListener: material ui close tooltip onclick outside the target element(property address) */}
                <ClickAwayListener onClickAway={close_description_Tooltip}>
                  <Tooltip
                    open={description_Tooltip}
                    title="field must be more than 20 characters. Example:This is a newly built house with enough parking space and it is very close to ogige main market, St Theresa's cathedral and unn main gate"
                    placement="top"
                    arrow
                    disableHoverListener
                  >
                    <TextField
                      type="text"
                      name="description"
                      id="description"
                      label="Property Description(optional)"
                      multiline
                      rows={4}
                      variant="outlined"
                      onClick={open_description_Tooltip}
                      value={formik.values.description || ""}
                      onChange={formik.handleChange}
                    />
                  </Tooltip>
                </ClickAwayListener>
              </div>

              <div>
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-mutiple-checkbox-label">
                    Facilities
                  </InputLabel>
                  <Select
                    style={{ minWidth: "20rem" }}
                    labelId="facilities-label"
                    id="facilities"
                    multiple
                    value={formik.values.propertyFacilities || ""}
                    // onchange, push selected item to the empty array(propertyFacility initialValue)
                    onChange={(e) =>
                      formik.setFieldValue("propertyFacilities", e.target.value)
                    }
                    input={<Input />}
                    renderValue={(selected) => selected.join(", ")}
                    MenuProps={MenuProps}
                  >
                    {PropertyFacilities.map((facility) => (
                      <MenuItem key={facility} value={facility}>
                        {/* let an item in the options be checked if and only if it exits in the propertyFacilities array */}
                        <Checkbox
                          checked={
                            formik.values.propertyFacilities.indexOf(facility) >
                            -1
                          }
                        />
                        <ListItemText primary={facility} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>

              <div>
                <TextField
                  label="Amount*"
                  id="amount"
                  name="amount"
                  type="number"
                  variant="outlined"
                  helperText={formik.touched.amount && formik.errors.amount}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <NairaSymbol />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <button type="submit">submit</button>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default PostProperty;
