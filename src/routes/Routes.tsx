import { Route, Routes, Outlet } from "react-router-dom";
import { LoginForm } from "../pages/auth";
import { AppLayout } from "../components/layouts/AppLayout";
import useAuth from "../providers/AuthProvider";
import { Profile } from "../pages/profile";

export const AppRoutes = () => {
    const { user } = useAuth();

    console.log("User Details...", user);
    const isLoggedIn = user;
    const isGuestUser = user && user.roles.find((r) => r === "guest");
    const isAdminUser = user && user.roles.find((r) => r === "admin");

    // if(isAdmin) {
    //     return [<AdminRoutes />, <AuthRoutes />, <PublicRoutes />]
    // }
    return isLoggedIn ? <AuthRoutes /> : <PublicRoutes />;
};

const App = () => {
    return (
        <AppLayout>
            <Outlet />
        </AppLayout>
    );
};

const AuthRoutes = () => {
    const { user } = useAuth();

    const email = user?.email;
    return (
        <Routes>
            <Route path="/" element={<App />}>
                <Route
                    path="/"
                    element={<div>Home Page. Logged in as {email}</div>}
                />
                <Route
                    path="/products"
                    element={<div>Products Page - List of products</div>}
                />
                <Route path="/products/:id" element={<div>Product Page</div>} />
                <Route path="/profile" element={<Profile />} />

                <Route path="*" element={<div>New page here</div>} />
            </Route>
        </Routes>
    );
};

const PublicRoutes = () => {
    function onSuccess() {
        //Test purposes
    }
    return (
        <Routes>
            <Route path="/" element={<LoginForm onSuccess={onSuccess} />} />
            <Route
                path="/profile"
                element={<LoginForm onSuccess={onSuccess} />}
            />
            <Route path="*" element={<LoginForm onSuccess={onSuccess} />} />
        </Routes>
    );
};
