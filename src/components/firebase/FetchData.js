import { useEffect } from "react";
import { dbStore } from "./firebase";
import { setLoading } from "../actions/uiInteraction";
import { useDispatch } from "react-redux";
import { fetchData } from "../../actions/products";
import { ErrorMsg, setError } from "../../actions/uiInteraction";

const useFetchData = (property) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoading(true));
    const unsub = dbStore
      .collection(property)

      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        snap.forEach((doc) => {
          dispatch(fetchData({ ...doc.data(), id: doc.id }));
        });
      })
      .catch((error) => {
        dispatch(setError(true));
        dispatch(ErrorMsg(`${error}, Error fetching data`));
      })
      .then(() => {
        dispatch(setLoading(false));
      });
    return () => unsub();
  }, [property, dispatch]);
};

export default useFetchData;
