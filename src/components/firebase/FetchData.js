import { dbStore } from "./firebase";
import { useDispatch } from "react-redux";
import { setLoading } from "../actions/uiInteraction";

const FetchData = () => {
  const dispatch = useDispatch();
  const dataRef = dbStore.collection("rooms");

  dataRef
    .get()
    .then((doc) => {
      dispatch(setLoading(true));
      if (doc.exits) {
        console.log("data", doc.data);
      } else {
        console.log("no such document");
      }
    })
    .catch((error) => {
      console.log("Errr", error);
    });
  dispatch(setLoading(false));
};

export default FetchData;
