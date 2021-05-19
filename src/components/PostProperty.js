import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import {
  Button,
  Checkbox,
  Chip,
  ClickAwayListener,
  FormControl,
  IconButton,
  Input,
  InputLabel,
  ListItemText,
  Select,
  Tooltip,
} from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import LocalGvts from "./LocalGvts";
import RenderLocation from "./RenderLocation";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import FormRoomCategory from "./FormRoomCategory";
import PropertyFor from "./PropertyFor";
import PropertyCondition from "./PropertyCondition";
import NumberOfRooms from "./NumberOfRooms";
import PropertyFacilities from "./PropertyFacilities";

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
    width: "90%",
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
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

const initialValues = {
  localGvt: "",
  category: "",
  pictures: [""],
  location: "",
  propertyFor: "",
  propertyAdress: "",
  propertyCondition: "",
  typeOfProperty: "",
  numberOfRooms: "",
  description: "",
  propertyFacilities: [],
  price: undefined,
};

const validationSchema = Yup.object({
  localGvt: Yup.string().required("Required"),
  category: Yup.string().required("Required"),
  location: Yup.string().required("Required"),
  propertyFor: Yup.string().required("Required"),
  propertyAdress: Yup.string().required("Required"),
  propertyCondition: Yup.string().required("Required"),
  numberOfRooms: Yup.string().required("Required"),
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
  // location tooltip state
  const [locationTooltip, setlocationTooltip] = useState(false);

  // change the state of location input tooltip
  const closeLocationTooltip = () => {
    setlocationTooltip(false);
  };

  const openLocationTooltip = () => {
    setlocationTooltip(true);
  };

  // description tooltip state
  const [description_Tooltip, setDescription_Tooltip] = useState(false);

  // change the state of description input tooltip
  const close_description_Tooltip = () => {
    setDescription_Tooltip(false);
  };

  const open_description_Tooltip = () => {
    setDescription_Tooltip(true);
  };

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
                  id="category"
                  name="category"
                  label="category*"
                  select
                  variant="outlined"
                  value={formik.values.category}
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
                  value={formik.values.propertyFor}
                  onChange={formik.handleChange}
                  helperText={
                    formik.touched.propertyFor && formik.errors.propertyFor
                  }
                >
                  {React.Children.toArray(
                    PropertyFor.map((value) => (
                      <MenuItem value={value}>{value}</MenuItem>
                    ))
                  )}
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
                      value={formik.values.propertyAdress}
                      onChange={formik.handleChange}
                      helperText={
                        formik.touched.propertyAdress &&
                        formik.errors.propertyAdress
                      }
                    />
                  </Tooltip>
                </ClickAwayListener>
              </div>
              <div>
                {/* select pictures created using formik fieldArray */}
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

              <div>
                <TextField
                  id="propertyCondition"
                  name="propertyCondition"
                  label="Condition*"
                  select
                  variant="outlined"
                  value={formik.values.propertyCondition}
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
                  id="numberOfRooms"
                  name="numberOfRooms"
                  label="Bedrooms*"
                  select
                  variant="outlined"
                  value={formik.values.numberOfRooms}
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
                      label="Property address(optional)"
                      multiline
                      rows={4}
                      variant="outlined"
                      onClick={open_description_Tooltip}
                      value={formik.values.description}
                      onChange={formik.handleChange}
                    />
                  </Tooltip>
                </ClickAwayListener>
              </div>
              <div>
                <FormControl className={classes.formControl}>
                  <InputLabel shrink>Facilities</InputLabel>
                  <Select
                    labelId="facilities"
                    id="propertyFacilites"
                    multiple
                    value={formik.values.propertyFacilities}
                    // onChange={formik.handleChange}
                    input={<Input />}
                    renderValue={(selected) => selected.join(", ")}
                    MenuProps={MenuProps}
                  >
                    {PropertyFacilities.map((facilities) => (
                      <MenuItem key={facilities} value={facilities}>
                        <Checkbox
                          checked={PropertyFacilities.indexOf(facilities) > -1}
                        />
                        <ListItemText primary={facilities} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
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
