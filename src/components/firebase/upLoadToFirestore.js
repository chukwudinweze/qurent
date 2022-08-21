const upLoadToFirestore = async (data) => {
  try {
    const response = await fetch(
      "https://qurent-a1b03-default-rtdb.firebaseio.com/rooms.json",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    if (!response.ok) {
      console.log(response);
      throw new Error("Could not post, Please try again later");
    }
    const data2 = await response.json();
    console.log("returned data", data2);
  } catch (error) {
    console.log(error.message);
  }
};

export default upLoadToFirestore;

// import { dbStore } from "../firebase/firebase";

// const upLoadToFirestore = (data) => {
//   return dbStore
//     .collection("rooms")
//     .add(data)
//     .then((docRef) => {
//       console.log("a room with ID:", docRef.id);
//     })
//     .catch((error) => {
//       console.error("Error uploading room:", error);
//     });
// };
