import React from "react";
import { LOGIN } from "../../../constants";
import { Box, TextField, Button } from "@mui/material";
import useAuth from "../../../providers/AuthProvider";

type LoginValues = {
    email: string;
    password: string;
};

type LoginFormProps = {
    onSuccess: () => void;
};

export const LoginForm = ({ onSuccess }: LoginFormProps) => {
    const { login } = useAuth();

    const [email, setEmail] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");
    const [error, setError] = React.useState<any>();

    React.useEffect(() => {
        //api.get("/user").then(response => setUser(response.data))
    }, []);

    function handleSubmit(formData: LoginValues) {
        const { email } = formData;
        if (email === "fail") {
            setError("This is an invalid username");
        } else {
            setError(null);
            //api request to login here
            console.log("Logging in user:", email);
            onSuccess();
        }
        login(formData.email, formData.password);
    }

    function onEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
        setEmail(e.target.value);
    }

    function onPasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
        setPassword(e.target.value);
    }

    const isLoggedInDisabled: boolean =
        email.length === 0 || password.length === 0;

    return (
        <Box
            component="form"
            sx={{
                "& .MuiTextField-root": { m: 1, width: "25%" },
            }}
            noValidate
            autoComplete="off"
        >
            {" "}
            <div>
                <TextField
                    label="E-mail"
                    id="outlined-size-normal"
                    defaultValue=""
                    value={email}
                    onChange={onEmailChange}
                />
            </div>
            <div>
                <TextField
                    label="Password"
                    type="password"
                    id="outlined-size-normal"
                    defaultValue=""
                    value={password}
                    onChange={onPasswordChange}
                />
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Button
                    variant="contained"
                    onClick={() => handleSubmit({ email, password })}
                    disabled={isLoggedInDisabled}
                >
                    {LOGIN}
                </Button>
            </div>
            {/* // <Box> */}
            {/* style={{ */}
            {/* //             display: "flex",
        //             flexDirection: "row",
        //             justifyContent: "center",
        //             padding: "10px",
        //         }}
        //     > */}
            {/* //         <label */}
            {/* //             style={{
        //                 marginRight: "5px",
        //             }}
        //         >
        //             E-mail
        //         </label>
        //         <input id="login" value={email} onChange={onEmailChange} />
        //     </div>
        //     <div
        //         style={{
        //             display: "flex",
        //             flexDirection: "row",
        //             justifyContent: "center",
        //             padding: "10px",
        //         }}
        //     >
        //         <label
        //             style={{
        //                 marginRight: "5px",
        //             }}
        //         >
        //             Password
        //         </label>
        //         <input
        //             id="password"
        //             value={password}
        //             onChange={onPasswordChange}
        //         />
        //     </div>
        //     <button
        //         disabled={isLoggedInDisabled}
        //         onClick={() => handleSubmit({ email, password })}
        //     >
        //         {LOGIN}
        //     </button> */}
            {error && (
                <p>Username and password did not match - Please login again</p>
            )}
        </Box>
    );
};
