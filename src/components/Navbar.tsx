import { Box, Link } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { logout } from "../features/auth/authSlice";

type NavbarProps = {
    isLoggedIn?: boolean;
};

const Navbar = (props: NavbarProps) => {
    const dispatch = useDispatch();
    return (
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
                        ABC Book
                    </Link>
                </strong>
            </div>
            <div>
                <strong>
                    {props.isLoggedIn ? (
                        <Link
                            as={RouterLink}
                            to=""
                            onClick={() => dispatch(logout(""))}
                        >
                            Logout
                        </Link>
                    ) : (
                        <Link as={RouterLink} to="/login">
                            Login
                        </Link>
                    )}
                </strong>
            </div>
        </Box>
    );
};

export default Navbar;
