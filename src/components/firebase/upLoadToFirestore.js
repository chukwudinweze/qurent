import { useState } from "react";
import { setError, setLoading, successMsg } from "../../actions/uiInteraction";

const upLoadToFirestore = (room) => {
  const startUpoload = async (data) => {
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
      if (response.ok) {
        console.log("successful");
      } else {
        throw new Error("Upload unsuccessful, Please try again later");
      }
    } catch (error) {
      console.log(error);
    }
  };
  startUpoload(room);
};

export default upLoadToFirestore;
