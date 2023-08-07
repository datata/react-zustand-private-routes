import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { ReactNode } from "react";
import jwtDecode from 'jwt-decode';

interface Props {
    children: ReactNode
}

interface TokenData {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
    iat: number;
    exp: number;
  }

const PrivateZone = ({ children }: Props) => {
  const reset = useAuthStore(state => state.reset);

  try {
    const token = useAuthStore(state => state.token);
    const decode: TokenData = jwtDecode(token);
    
    const currentTime = Date.now() / 1000;

    if(!(decode.exp > currentTime)) reset();

    return decode.exp > currentTime ? children : <Navigate to="/login" />;
  } catch (error) {
    return <Navigate to="/login" />
  }
};

export default PrivateZone;