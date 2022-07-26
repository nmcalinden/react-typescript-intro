function storeToken(value: string) {
    localStorage.setItem("appToken", value);
}

function getToken() {
    return localStorage.getToken("appToken");
}

function removeToken() {
    localStorage.removeItem("appToken");
}

const JwtHandler = {
    storeToken,
    getToken,
    removeToken,
};

export default JwtHandler;
