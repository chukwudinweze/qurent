import { storage } from "../components/firebase/firebase";

export const postProperty = (room) => ({
  type: "POST_PROPERTY",
  room,
});

export const startPostProperty = (room) => {
  const { pictures } = room;
  let fileLists = [];
  for (let i = 0; i < pictures.length; i++) {
    let file = pictures[i];
    fileLists = [...fileLists, file];
  }
  return (dispatch) => {
    let storageImgUrl = [];
    fileLists.forEach((file) => {
      const uploadTask = storage.ref(`images/${file.name}`).put(file);
      uploadTask.on(
        "state_changed",
        (snapShot) => {
          console.log(snapShot);
        },
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref("images")
            .child(file.name)
            .getDownloadURL()
            .then((url) => {
              storageImgUrl = [...storageImgUrl, url];
              console.log(storageImgUrl);
            })
            .catch((error) => {
              console.log("error", error);
            })

            .then(() => {
              dispatch(postProperty({ ...room, pictures: storageImgUrl }));
            });
        }
      );
    });
  };
};
