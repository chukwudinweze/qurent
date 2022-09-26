export const expandFooter = () => ({
  type: "EXPAND_FOOTER",
});

export const setLoading = (value) => ({
  type: "SET_LOADING",
  value,
});

export const setError = (value, errorMsg = "") => ({
  type: "ERROR",
  value,
  errorMsg,
});

export const setSuccess = (value, successMsg = "") => ({
  type: "SET_SUCCESS",
  value,
  successMsg,
});

export const setErrorUploading = (value, errorMsg = "") => ({
  type: "ERROR__UPLOAD",
  value,
  errorMsg,
});

export const setErrorAuth = (value, errorMsg = "") => ({
  type: "ERROR__AUTH",
  value,
  errorMsg,
});

export const setAuthLoading = (value, errorMsg = "") => ({
  type: "AUTH__LOADING",
  value,
  errorMsg,
});
