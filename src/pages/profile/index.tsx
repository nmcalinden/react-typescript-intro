import React from "react";
import useAuth from "../../providers/AuthProvider";

export function Profile() {
    const { user, logout } = useAuth();
    const [userFavourites, setUserFavourites] = React.useState<any>();

    function logoutUser() {
        logout();
    }
    React.useEffect(() => {
        if (user) {
            return;
        }
        //api.getFavouriteList("`users/${user.id}").then(handle).catch(catch error)
    }, [user]);

    return <div>This is the profile page</div>;
}
