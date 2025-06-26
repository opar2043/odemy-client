import { useContext } from "react";
import { AuthContex } from "../Firebase/Authprovider";


const useAuth = () => {
   const contex = useContext(AuthContex);
   return contex
}

export default useAuth