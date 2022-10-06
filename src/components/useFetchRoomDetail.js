import { useCallback } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setError, setLoading } from "../actions/uiInteraction";

const useFetchRoomDetail = (id) => {
  const [data, setData] = useState(null);
  const dispatch = useDispatch();
  const fetchRoomDetail = useCallback(async () => {
    dispatch(setLoading(true));
    try {
      const response = await fetch(
        `https://qurent-a1b03-default-rtdb.firebaseio.com/property/${id}.json`
      );
      if (!response.ok) {
        throw new Error("could not fetch rooms, please try again later");
      }
      const data = await response.json();
      setData(data);
      // console.log(data, "response was okay");
    } catch (error) {
      // console.log(error.message);
      dispatch(setError(true));
    }
    dispatch(setLoading(false));
  }, [dispatch, id]);
  // console.log(data);
  return { fetchRoomDetail, data };
};

export default useFetchRoomDetail;
