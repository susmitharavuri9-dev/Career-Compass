import { Navigate } from "react-router-dom";
import { authHelpers } from "../services/api";

function PrivateRoute({ children }) {

    if (!authHelpers.isAuthenticated()) {
        return <Navigate to="/" replace />;
    }

    return children;
}

export default PrivateRoute;