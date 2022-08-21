export const expandFooter = () => ({
  type: "EXPAND_FOOTER",
});

export const setLoading = (value) => ({
  type: "SET_LOADING",
  value,
});

export const setError = (ErrorMsg) => ({
  type: "ERROR",
  ErrorMsg,
});

export const successMsg = (successMsg) => ({
  type: "SUCCESS_MESSAGE",
  successMsg,
});
