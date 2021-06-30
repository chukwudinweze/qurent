export const expandFooter = () => ({
  type: "EXPAND_FOOTER",
});

export const setLoading = (value) => ({
  type: "SET_LOADING",
  value,
});

export const setError = (value) => ({
  type: "ERROR",
  value,
});

export const ErrorMsg = (errorMsg) => ({
  type: "ERROR_MESSAGE",
  errorMsg,
});
