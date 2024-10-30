import { Outlet,Navigate } from "react-router-dom";
import useLoginStore from "./useLoginStore";

function ProtectedRoute() {
    const user=useLoginStore((state)=>state.user);
  return user  ? <Outlet/> : <Navigate to="/login"/>
}

export default ProtectedRoute
