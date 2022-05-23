import { Box, Container } from "@chakra-ui/react";
import React from "react";
import {
    BrowserRouter,
    Link as RouterLink,
    Route,
    Routes
} from "react-router-dom";
import { Link } from "@chakra-ui/react";
import Users from "./pages/Users";

const Home = () => (
    <Container maxW="container.xl">
        <Link as={RouterLink} to="/users">
            User Management
        </Link>
    </Container>
);

const App = () => {
    return (
        <BrowserRouter>
            <Box
                bg="tomato"
                w="100%"
                p={4}
                color="white"
                mb={4}
                display="flex"
                justifyContent="space-between"
            >
                <div>
                    <strong>
                        <Link as={RouterLink} to="/">
                            Book Management System
                        </Link>
                    </strong>
                </div>
                <div>
                    <strong>Login</strong>
                </div>
            </Box>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<Users />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
