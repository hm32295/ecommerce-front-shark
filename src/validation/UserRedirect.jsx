import { useEffect } from "react";

 const UserRedirect = () => {

  useEffect(() => {
    window.location.href = "https://www.google.com/";
  }, []);

  return null;
};

export default  UserRedirect