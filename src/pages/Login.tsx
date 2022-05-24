import {
    Container,
    Input,
    InputGroup,
    InputRightElement,
    Box,
    Button
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { store } from "../app/store";
import { verifyLogin } from "../features/auth/authSlice";
import { RootState } from "../app/store";

const Login = () => {
    const [show, setShow] = useState(false);
    const [loginCredentials, setLoginCredentials] = useState({
        username: "",
        password: ""
    });
    const auth = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        auth.isLoggedIn && navigate(-1);
    }, [navigate, auth.isLoggedIn]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target;
        setLoginCredentials({
            ...loginCredentials,
            [target.name]: target.value
        });
    };

    const handleSubmit = () => {
        const { users } = store.getState();
        dispatch(
            verifyLogin({
                users,
                loginCredentials
            })
        );
    };

    return (
        <Container centerContent={true} mt="24">
            <Input
                placeholder="Username"
                mb="4"
                name="username"
                onChange={(e) => handleInputChange(e)}
            />
            <InputGroup size="md">
                <Input
                    mb={2}
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    placeholder="Enter password"
                    name="password"
                    onChange={handleInputChange}
                />
                <InputRightElement width="4.5rem">
                    <Button
                        h="1.75rem"
                        size="sm"
                        onClick={() => {
                            setShow(!show);
                        }}
                    >
                        {show ? "Hide" : "Show"}
                    </Button>
                </InputRightElement>
            </InputGroup>

            <Box
                display="flex"
                alignItems="flex-end"
                justifyContent="flex-end"
                flexDir="column"
                width="full"
            >
                {!!auth.errors.length &&
                    auth.errors.map((error, i) => (
                        <Box
                            key={i}
                            mb="3"
                            fontSize="small"
                            fontWeight="light"
                            color="red"
                        >
                            {error}
                        </Box>
                    ))}
                <Button
                    width="full"
                    onClick={handleSubmit}
                    disabled={
                        !loginCredentials.username || !loginCredentials.password
                    }
                >
                    Submit
                </Button>
            </Box>
        </Container>
    );
};

export default Login;
