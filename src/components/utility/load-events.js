import { json } from "react-router-dom";

const loadEvents = async () => {
    const response = await fetch(
      "https://react-http-6cb96-default-rtdb.europe-west1.firebasedatabase.app/events.json"
    );
  
    if (!response.ok) {
      throw json({ message: "Could not load events!" }, { status: 500 });
    } else {
      const resultData = await response.json();
      return resultData;
    }
  };

  export default loadEvents