import { Navigate, Outlet, useLocation } from "react-router-dom";

export const user = JSON.parse(localStorage.getItem('user'));

export const RequireAuth = () => {
    const location = useLocation();
    return user ? (
        <Outlet/>
    ) : (
        <Navigate to='/auth/users/sign-in' state={{ from: location}} replace/>
    )
};