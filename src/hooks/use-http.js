import { useCallback } from "react";

const useHttp = () => {
  const sendRequest = useCallback(async (applyData) => {
    try {
      const response = await fetch(
        "https://react-http-6cb96-default-rtdb.europe-west1.firebasedatabase.app/events.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();

      applyData(data);

    } catch (error) {
        console.log(error)
      throw new Error(error);
    }
  }, []);

  return {
    sendRequest,
  };
};

export default useHttp;
