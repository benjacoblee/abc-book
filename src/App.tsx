import { Container, Link } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import {
    BrowserRouter,
    Link as RouterLink,
    Route,
    Routes
} from "react-router-dom";
import { RootState } from "./app/store";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Users from "./pages/Users";

const Home = () => (
    <Container maxW="container.xl">
        <Link as={RouterLink} to="/users">
            User Management
        </Link>
    </Container>
);

const App = () => {
    const auth = useSelector((state: RootState) => state.auth);

    return (
        <BrowserRouter>
            <Navbar isLoggedIn={auth.isLoggedIn} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<Users />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
