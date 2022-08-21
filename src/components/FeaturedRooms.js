import React from "react";
import Loading from "./Loading";
import FeaturedRoom from "./FeaturedRoom";
import { useDispatch, useSelector } from "react-redux";
import "../Styles/featuredRoom.css";
import useFetchData from "../components/firebase/FetchData";
import { fetchFeaturedRooms } from "../actions/products";
import { useEffect } from "react";
import { setError, setLoading } from "../actions/uiInteraction";
import { dbStore } from "./firebase/firebase";

const FeaturedRooms = React.memo(() => {
  // call custom hook to fetch data

  // useFetchData("featured", true, fetchFeaturedRooms);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    dbStore
      .collection("rooms")
      .where("featured", "==", true)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          let data = { ...doc.data(), id: doc.id };
          dispatch(fetchFeaturedRooms(data));
          console.log(data);
          dispatch(setLoading(false));
        });
      })
      .catch((error) => {
        dispatch(setError(`${error}, Error fetching data`));
        console.log(`error: ${error}`);
        dispatch(setLoading(false));
      });
  }, [dispatch]);

  const featuredRooms = useSelector((state) => state.products.featuredRooms);

  const loading = useSelector((state) => state.uiInteraction.loading);

  if (loading) {
    return <Loading title="featured rooms" />;
  }
  return (
    <section className="featured__rooms">
      <h3>featured ads</h3>
      <article className="room__list">
        {featuredRooms.map((room, index) => {
          return <FeaturedRoom key={index} room={room} />;
        })}
      </article>
    </section>
  );
});
// const FeaturedRooms = () => {
//   // call custom hook to fetch data
//   useFetchData("featured", true,fetchFeaturedRooms);

//   const featuredRooms = useSelector((state) => state.products.featuredRooms);

//   const loading = useSelector((state) => state.uiInteraction.loading);

//   if (loading) {
//     return <Loading title="featured rooms" />;
//   }
//   return (
//     <section className="featured__rooms">
//       <h3>featured ads</h3>
//       <article className="room__list">
//         {featuredRooms.map((room, index) => {
//           return <FeaturedRoom key={index} room={room} />;
//         })}
//       </article>
//     </section>
//   );
// };

export default FeaturedRooms;
