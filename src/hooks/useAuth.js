import { useContext } from "react";
import { FirebaseContext } from '../context/AuthProvider';

const useAuth = () => {
    const firebaseData = useContext(FirebaseContext)
    return firebaseData;
};

export default useAuth;