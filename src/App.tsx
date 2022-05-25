import { SearchIcon } from "@chakra-ui/icons";
import { Link, Tab, TabList, Tabs } from "@chakra-ui/react";
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
import Home from "./pages/Home";
import Login from "./pages/Login";
import User from "./pages/User";
import Users from "./pages/Users";

const App = () => {
    const auth = useSelector((state: RootState) => state.auth);

    return (
        <BrowserRouter>
            <Navbar isLoggedIn={auth.isLoggedIn} />
            <Tabs variant="unstyled" mb="4" boxShadow="md">
                <TabList pb="2">
                    <Link as={RouterLink} to="/">
                        <Tab
                            aria-selected={window.location.pathname === "/"}
                            fontWeight="semibold"
                        >
                            Home
                        </Tab>
                    </Link>
                    <Link as={RouterLink} to="/users">
                        <Tab fontWeight="semibold">
                            <SearchIcon mr="2" fontSize="md" /> User Management
                        </Tab>
                    </Link>{" "}
                    <Link as={RouterLink} to="/books">
                        <Tab fontWeight="semibold">
                            <SearchIcon mr="2" fontSize="md" /> Book Management
                        </Tab>
                    </Link>
                </TabList>
            </Tabs>
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
