import { useEffect } from "react";
import { dbStore } from "./firebase";
import { useDispatch } from "react-redux";
import { ErrorMsg, setError, setLoading } from "../../actions/uiInteraction";
// import { orderBy } from "firebase/firestore";

const useFetchData = (field, value, action) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoading(true));
    dbStore
      .collection("rooms")
      .where(field, "===", value)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          let data = { ...doc.data(), id: doc.id };
          dispatch(action(data));
          console.log(data);
          dispatch(setLoading(false));
        });
      })
      .catch((error) => {
        dispatch(setError(true));
        dispatch(ErrorMsg(`${error}, Error fetching data`));
        console.log(`error: ${error}`);
        dispatch(setLoading(false));
      });
  }, [field, value, dispatch, action]);
};

export default useFetchData;
