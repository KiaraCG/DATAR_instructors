import React, {useState} from "react";
import Routes from "./Routes";
import {BrowserRouter as Router} from "react-router-dom";
import {ChakraProvider} from "@chakra-ui/react";
import theme from "./theme";

function App() {
    const [user, setUser] = useState('');

    return (
        <ChakraProvider theme={theme}>
            <Router>
                <Routes user={user} setUser={setUser} />
            </Router>
        </ChakraProvider>
    );
}

export default App;