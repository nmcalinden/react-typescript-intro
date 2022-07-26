import React from "react";
import AuthApi from "../api/auth";
import { User } from "../types/auth";
import JwtHandler from "../utils/jwt";

interface AuthProviderProps {
    children: React.ReactNode;
}

interface AuthContextType {
    user?: User | null;
    loading: boolean;
    error?: any;
    login: (email: string, password: string) => void;
    // signUp: (email: string, name: string, password: string) => void;
    logout: () => void;
}

const AuthContext = React.createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = React.useState<User | null>();
    const [loading, setLoading] = React.useState<boolean>(false);
    const [error, setError] = React.useState<any>();

    React.useEffect(() => {
        // AuthApi.getCurrentUser()
        //   .then((user) => setUser(user))
        //   .catch((_error) => {})
    }, []);

    function login(email: string, password: string) {
        setUser({
            id: 1,
            email: "test",
            forename: "test",
            surname: "testerson",
            roles: ["guest", "admin"],
        });
        // AuthApi.login({ email, password })
        //     .then((response) => {
        //         //handle Response
        //         JwtHandler.storeToken(response.token);
        //     })
        //     .catch((error) => setError("This is a test"));
    }

    function logout() {
        //Logout functionality here
        setUser(null);
    }

    const providerTypes = {
        user,
        loading,
        error,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={providerTypes}>
            {children}
        </AuthContext.Provider>
    );
}

export default function useAuth() {
    return React.useContext(AuthContext);
}
