import { dbStore } from "../firebase/firebase";

const upLoadToFirestore = (data) => {
  return dbStore
    .collection("rooms")
    .add(data)
    .then((docRef) => {
      console.log("a room with ID:", docRef.id);
    })
    .catch((error) => {
      console.error("Error uploading room:", error);
    });
};

export default upLoadToFirestore;
