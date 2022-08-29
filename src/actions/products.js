import { storage } from "../components/firebase/firebase";
import { setError, setLoading, setSuccess } from "../actions/uiInteraction";
import { Message } from "@material-ui/icons";

export const postProperty = (property) => ({
  type: "POST_PROPERTY",
  property,
});

// redux middleware dispatching to redux store and to the firebase
export const startPostProperty = (property) => {
  const { pictures, category } = property;
  let fileLists = [];
  for (let i = 0; i < pictures.length; i++) {
    let file = pictures[i];
    fileLists = [...fileLists, file];
  }
  return (dispatch) => {
    dispatch(setLoading(true));
    dispatch(setSuccess(false));
    dispatch(setError(false));
    let storeImgUrls = [];
    fileLists.forEach((file) => {
      const uploadTask = storage.ref(`images/${file.name}`).put(file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          console.log(progress);
        },
        (error) => {
          console.log("fre:..........", error);
          dispatch(setError(true));
        },
        // call back to get url from firebase storage
        () => {
          storage
            .ref("images")
            .child(file.name)
            .getDownloadURL()
            .then((url) => {
              storeImgUrls.push(url);
              console.log(url);
              console.log("i am dispatching many times");
            })
            .catch((error) => {
              console.log("error", error);
            });
        }
      );
    });

    const enhanceData = {
      ...property,
      pictures: storeImgUrls,
      createdAt: new Date().getTime().toString(),
    };

    const upLoadToFirestore = async (data) => {
      try {
        const response = await fetch(
          "https://qurent-a1b03-default-rtdb.firebaseio.com/property.json",
          {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "Content-type": "application/json",
            },
          }
        );
        if (response.ok) {
          console.log("happy i am successful");
          dispatch(setSuccess(true, "uploaded successfully"));
        } else {
          return response.json().then((data) => {
            throw new Error("Upload unsuccessful, Please try again later");
          });
        }
      } catch (error) {
        dispatch(setError(true));
      }
      dispatch(setLoading(false));
      dispatch(setSuccess(false, "ended"));
    };

    let time = fileLists.length * 10000;
    setTimeout(() => {
      upLoadToFirestore(enhanceData);
    }, time);
  };
};

export const fetchData = (data) => ({
  type: "FETCH_DATA",
  data,
});

export const setFetchData = (data) => {
  return (dispatch) => {
    dispatch(fetchData(data));
  };
};

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
  type: "FETCH_SHOPS",
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
