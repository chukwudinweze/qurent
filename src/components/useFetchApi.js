import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { setError, setLoading } from "../actions/uiInteraction";
import "../Styles/featuredRoom.css";
import { setFetchData } from "../actions/products";

const useFetchData = (url, typeOfDispatch = setFetchData, category = "") => {
  const dispatch = useDispatch();

  const fetchData = useCallback(async () => {
    console.log("running agin and again");
    dispatch(setLoading(true));
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("could not fetch rooms, please try again later");
      }
      const data = await response.json();
      // format incoming data to be dispatched to the store
      for (const key in data) {
        let loadedProperty = {
          id: key,
          localGvt: data[key].localGvt,
          category: data[key].category,
          pictures: data[key].pictures,
          location: data[key].location,
          propertyFor: data[key].propertyFor,
          propertyAdress: data[key].propertyAdress,
          propertyCondition: data[key].propertyCondition,
          numberOfRooms: data[key].numberOfRooms,
          description: data[key].description,
          propertyFacilities: data[key].propertyFacilities,
          price: data[key].price,
          acceptTerms: data[key].acceptTerms,
          title: data[key].title,
          phoneNumber: data[key].phoneNumber,
          featured: data[key].featured,
        };
        if (loadedProperty.category === category) {
          dispatch(typeOfDispatch(loadedProperty));
        }
        dispatch(setFetchData(loadedProperty));
      }
    } catch (error) {
      console.log(error.message);
      dispatch(setError(true));
    }
    dispatch(setLoading(false));
  }, [dispatch, url, typeOfDispatch, category]);

  return { fetchData };
};

export default useFetchData;
