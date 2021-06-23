import { storage } from "../components/firebase/firebase";
import upLoadToFirestore from "../components/firebase/upLoadToFirestore";
import formatPictures from "../components/formatPictures";

export const postProperty = (property) => ({
  type: "POST_PROPERTY",
  property,
});

// export const addToSavedProperty = (id) => ({
//   type: "ADD_TO_SAVED_PROPERTY",
//   id,
// });

// redux middleware dispatching to redux store and to the firebase
export const startPostProperty = (property) => {
  const { pictures } = property;
  const formatedPictures = formatPictures(pictures)
  return (dispatch) => {
    let storeImgUrls = [];
    formatedPictures.forEach((file) => {
      const uploadTask = storage.ref(`images/${file.name}`).put(file);
      uploadTask.on(
        "state_changed",
        (snapShot) => {
          console.log(snapShot);
        },
        (error) => {
          console.log(error);
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
    // refering to the code below. we wait for all the returning promise to finish up; set time out will make sure that all the returning url from firebase storgae which is a promise, has all been fetched and all pushed to the new array created up above i.e storeImgUrls array up above. without setTimeOut, if we dispatch synchronously, we would be dispatching empty array because url has not been fetched yet at the time of sync dispatch.
    setTimeout(() => {
      dispatch(postProperty({ ...property, pictures: storeImgUrls }));
    }, 10000);

    setTimeout(() => {
      upLoadToFirestore({ ...property, pictures: storeImgUrls });
    }, 75000);
  };
};
