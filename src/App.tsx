import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./providers/AuthProvider";
import { AppRoutes } from "./routes/Routes";

function App() {
    return (
        <AuthProvider>
            <div className="App">
                <h1>React Typescript Intro</h1>
                <BrowserRouter>
                    <AppRoutes />
                </BrowserRouter>
            </div>
        </AuthProvider>
    );
}

export default App;
