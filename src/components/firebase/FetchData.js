import { useEffect } from "react";
import { dbStore } from "./firebase";
import { useDispatch } from "react-redux";
import { ErrorMsg, setError, setLoading } from "../../actions/uiInteraction";
// import { ErrorMsg, setError } from "../../actions/uiInteraction";
// import { orderBy } from "firebase/firestore";

const useFetchData = (field, value, action) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoading(true));
    dbStore
      .collection("rooms")
      .where(field, "===", value)
      .get()
      .then((snapshot) => {
        if (snapshot) {
          dispatch(action(snapshot));
        }
      })
      .then(() => {
        dispatch(setLoading(false));
      })
      .catch((error) => {
        dispatch(setError(true));
        dispatch(ErrorMsg(`${error}, Error fetching data`));
      });
  }, [field, value, dispatch, action]);
};

export default useFetchData;
