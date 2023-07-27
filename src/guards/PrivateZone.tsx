import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { ReactNode } from "react";

interface Props {
    children: ReactNode
}

const PrivateZone = ({ children }: Props) => {
  const token = useAuthStore(state => state.token);
  
  return token ? children : <Navigate to="/login" />;
};

export default PrivateZone;