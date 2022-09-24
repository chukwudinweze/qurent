export const expandFooter = () => ({
  type: "EXPAND_FOOTER",
});

export const setLoading = (value) => ({
  type: "SET_LOADING",
  value,
});

export const setError = (value, ErrorMsg = "") => ({
  type: "ERROR",
  value,
  ErrorMsg,
});

export const setSuccess = (value, successMsg = "") => ({
  type: "SET_SUCCESS",
  value,
  successMsg,
});

export const setErrorUploading = (value, successMsg = "") => ({
  type: "ERROR__UPLOAD",
  value,
  successMsg,
});

export const setErrorAuth = (value, successMsg = "") => ({
  type: "ERROR__AUTH",
  value,
  successMsg,
});
