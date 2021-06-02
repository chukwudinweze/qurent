{/* <FieldArray name="pictures">
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
                        {/* if the number of picture is less than one, let button label be "add picture", when the number is upto one or greater than one, let button label be "add more pictures" */}
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
                      </div>
                    );
                  }}
                </FieldArray> */}