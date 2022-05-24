import { Box, Container, Heading, Link } from "@chakra-ui/react";
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
import Books from "./pages/Books";
import EditUser from "./pages/EditUser";
import Login from "./pages/Login";
import User from "./pages/User";
import Users from "./pages/Users";

const Home = () => (
    <Container maxW="container.xl">
        <Heading size="lg" textDecor="underline">
            <Box>
                <Link as={RouterLink} to="/users">
                    User Management
                </Link>
            </Box>
            <Box>
                <Link as={RouterLink} to="/books">
                    Book Management
                </Link>
            </Box>
        </Heading>
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
                <Route path="/users/:id" element={<User />} />
                <Route path="/users/:id/edit" element={<EditUser />} />
                <Route path="/books" element={<Books />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
