import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { Formik, Form } from "formik";
import {
  Button,
  Checkbox,
  ClickAwayListener,
  FormControl,
  FormControlLabel,
  Input,
  InputAdornment,
  InputLabel,
  ListItemText,
  Select,
  Tooltip,
} from "@material-ui/core";
import LocalGvts from "./LocalGvts";
import RenderLocation from "./RenderLocation";
import FormRoomCategory from "./FormRoomCategory";
import PropertyFor from "./PropertyFor";
import PropertyCondition from "./PropertyCondition";
import NumberOfRooms from "./NumberOfRooms";
import PropertyFacilities from "./PropertyFacilities";
import NairaSymbol from "./NairaSymbol";
import { useDispatch } from "react-redux";
import { startPostProperty } from "../actions/products";
import validationSchema from "./validationSchema";
import "../Styles/postproperty.css";

const ITEM_HEIGHT = 80;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: "95vw",
    },
  },
};

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      marginBottom: "1rem",
      width: "100%",
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
}));

const PostProperty = () => {
  // ......................................................................
  // material ui class
  const classes = useStyles();
  // property title tooltip state(material ui tooltip api)
  const [titleTooltip, setTitleTooltip] = useState(false);

  // change the state of Title input tooltip(material ui tooltip api)
  const closeTitleTooltip = () => {
    setTitleTooltip(false);
  };

  const openTitleTooltip = () => {
    setTitleTooltip(true);
  };

  // input location tooltip state(material ui tooltip api)
  const [locationTooltip, setlocationTooltip] = useState(false);

  // change the state of location input tooltip(material ui tooltip api)
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
  // ..................................................................

  // dispatching to the redux store
  const dispatch = useDispatch();
  const onSubmit = (value) => {
    dispatch(startPostProperty(value));
  };
  const initialValues = {
    localGvt: "",
    category: "",
    pictures: [],
    location: "",
    propertyFor: "",
    propertyAdress: "",
    propertyCondition: "",
    numberOfRooms: "",
    description: "",
    propertyFacilities: [],
    price: undefined,
    acceptTerms: false,
    title: "",
    phoneNumber: undefined,
    featured: true,
    createdAt: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        // formik is an object with proerties like values, handleChange etc
        return (
          <div
            style={{
              backgroundColor: "rgb(241, 239, 239)",
              padding: "0.7rem",
              marginBottom: "8rem",
            }}
            className={classes.root}
          >
            <Form
              style={{
                backgroundColor: "#f9f9fb",
                padding: "0.6rem 0.6rem 1.5rem",
                width: "100%",
                boxShadow: "0 0 5px #888",
              }}
            >
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
                <ClickAwayListener onClickAway={closeTitleTooltip}>
                  <Tooltip
                    open={titleTooltip}
                    title="Example: Newly built 3 bedroom flat opposite UNN main gate"
                    placement="top"
                    arrow
                    disableHoverListener
                  >
                    <TextField
                      type="text"
                      name="title"
                      id="title"
                      label="Title*"
                      variant="outlined"
                      onClick={openTitleTooltip}
                      value={formik.values.title || ""}
                      onChange={formik.handleChange}
                      helperText={formik.touched.title && formik.errors.title}
                    />
                  </Tooltip>
                </ClickAwayListener>
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
                {/* select multiple pictures */}
                <em style={{ fontSize: ".87rem" }}>
                  Please add at least 6 pictures, first picture is the main
                  picture of your room.
                </em>
                <div>
                  <input
                    accept="image/*"
                    className={classes.input}
                    style={{ display: "none" }}
                    multiple
                    type="file"
                    id="pictures"
                    name="pictures"
                    onChange={(e) =>
                      formik.setFieldValue("pictures", [...e.target.files])
                    }
                  />
                  <label htmlFor="pictures">
                    <Button
                      variant="raised"
                      component="span"
                      className={classes.button}
                    >
                      Upload
                    </Button>
                  </label>
                </div>
                <p>
                  {formik.values.pictures && formik.values.pictures.length}{" "}
                  pictures selected
                </p>
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
                    style={{ marginBottom: "1rem" }}
                    labelId="facilities-label"
                    id="facilities"
                    name="propertyFacilities"
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
                  type="number"
                  name="phoneNumber"
                  id="phoneNumber"
                  label="Phone Number*"
                  variant="outlined"
                  onClick={openLocationTooltip}
                  value={formik.values.phoneNumber || ""}
                  onChange={formik.handleChange}
                  helperText={
                    formik.touched.phoneNumber && formik.errors.phoneNumber
                  }
                />
              </div>
              <div>
                <TextField
                  label="Price per annum*"
                  id="price"
                  name="price"
                  type="number"
                  variant="outlined"
                  value={formik.values.price || ""}
                  onChange={formik.handleChange}
                  helperText={formik.touched.price && formik.errors.price}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <NairaSymbol />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>

              <div>
                <FormControlLabel
                  style={
                    formik.touched.acceptTerms && formik.errors.acceptTerms
                      ? { color: "red" }
                      : null
                  }
                  control={
                    <Checkbox
                      // if the value changes to true, turn the color to green
                      style={
                        formik.values.acceptTerms
                          ? { color: "#20c063" }
                          : { color: "gray" }
                      }
                      name="acceptTerms"
                      checked={formik.values.acceptTerms}
                      onChange={() =>
                        formik.setFieldValue(
                          "acceptTerms",
                          !formik.values.acceptTerms
                        )
                      }
                    />
                  }
                  label="Terms and Conditions"
                />
              </div>
              <br />
              <Button
                style={{
                  width: "100%",
                  backgroundColor: "#20c063",
                  color: "white",
                  // padding: ".5rem 0",
                }}
                size="large"
                type="submit"
                variant="contained"
                disableElevation
                className={classes.button}
              >
                Post Ad
              </Button>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default PostProperty;
