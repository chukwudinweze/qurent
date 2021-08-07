import firebase from "firebase";
import { storage, dbStore } from "../components/firebase/firebase";
import upLoadToFirestore from "../components/firebase/upLoadToFirestore";
import { ErrorMsg, setError, setLoading } from "../actions/uiInteraction";

export const postProperty = (property) => ({
  type: "POST_PROPERTY",
  property,
});

// redux middleware dispatching to redux store and to the firebase
export const startPostProperty = (property) => {
  const { pictures } = property;
  let fileLists = [];
  for (let i = 0; i < pictures.length; i++) {
    let file = pictures[i];
    fileLists = [...fileLists, file];
  }
  return (dispatch) => {
    let storeImgUrls = [];
    fileLists.forEach((file) => {
      const uploadTask = storage.ref(`images/${file.name}`).put(file);
      uploadTask.on(
        "state_changed",
        (snapShot) => {
          console.log(snapShot);
        },
        (error) => {
          dispatch(error(true));
          dispatch(
            "ooops, your property could not upload, check yourr network and try again"
          );
        },
        // below is a call back to get url from firebase storage
        () => {
          storage
            .ref("images")
            .child(file.name)
            .getDownloadURL()
            .then((url) => {
              storeImgUrls.push(url);
              console.log("i am dispatching many times");
            })
            .catch((error) => {
              console.log("error", error);
            });
        }
      );
    });

    setTimeout(() => {
      dispatch(
        postProperty({
          ...property,
          pictures: storeImgUrls,
        })
      );
    }, 10000);

    setTimeout(() => {
      upLoadToFirestore({
        ...property,
        pictures: storeImgUrls,
        createdAt: firebase.firestore.serverTimestamp(),
      });
    }, 75000);
  };
};

export const fetchData = (data) => ({
  type: "FETCH_DATA",
  data,
});

export const fetchFeaturedRooms = (data) => ({
  type: "FETCH_FEATURED_ROOMS",
  data,
});

export const fetchFlats = (data) => ({
  type: "FETCH_FLATS",
  data,
});

export const fetchSingleRooms = (data) => ({
  type: "FETCH_SINGLE_ROOMS",
  data,
});

export const fetchStores = (data) => ({
  type: "FETCH_STORES",
  data,
});

export const fetchSelfContain = (data) => ({
  type: "FETCH_SELF_CONTAIN",
  data,
});

export const fetchOfficeSpace = (data) => ({
  type: "FETCH_OFFICE_SPACE",
  data,
});

export const fetchLands = (data) => ({
  type: "FETCH_LANDS",
  data,
});

// export const startFetchData = () => {
//   return (dispatch) => {
//     dispatch(setLoading(true));
//     dbStore
//       .collection("rooms")
//       .orderBy("createdAt", "desc")
//       .onSnapshot((snap) => {
//         snap.forEach((doc) => {
//           if (!doc.empty) {
//             dispatch(fetchData({ ...doc.data(), id: doc.id }));
//           } else {
//             dispatch(
//               ErrorMsg("Looks like nothing could be found here at the moment")
//             );
//             dispatch(setError(true));
//           }
//         });
//         dispatch(setLoading(false));
//       });
//   };
// };

// export const addToSavedProperty = (id) => ({
//   type: "ADD_TO_SAVED_PROPERTY",
//   id,
// });
