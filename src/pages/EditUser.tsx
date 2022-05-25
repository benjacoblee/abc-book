import {
    Box,
    Button,
    Container,
    HStack,
    Input,
    InputGroup,
    InputRightElement,
    Radio,
    RadioGroup
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../app/store";
import { editUser } from "../features/users/usersSlice";
import { hasUserAccess, me } from "../utils/auth";
import { generateSelectItems } from "../utils/roles";

const EditUser = () => {
    const [show, setShow] = useState(false);
    const users = useSelector((state: RootState) => state.users);
    const auth = useSelector((state: RootState) => state.auth);
    const params = useParams();
    const { id } = params;
    const user = users.find((user) => user.id === id);
    const [loginCredentials, setLoginCredentials] = useState({
        username: user?.name,
        password: user?.password
    });
    const [role, setRole] = useState(user?.role);
    const [isMe, setIsMe] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        !user && navigate("/");
        !auth.isLoggedIn && navigate("/");
        user && setIsMe(me(id, auth?.user?.id));
    }, [user, auth.isLoggedIn, navigate, auth.user, id]);

    const roles =
        isMe || user?.role === "admin"
            ? ["admin"]
            : generateSelectItems(users, "role");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target;
        setLoginCredentials({
            ...loginCredentials,
            [target.name]: target.value
        });
    };

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRole(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        hasUserAccess(auth?.user?.role) &&
            dispatch(
                editUser({
                    ...user,
                    ...loginCredentials,
                    name: loginCredentials.username,
                    role
                })
            );

        navigate(-1);
    };

    return user ? (
        <Container centerContent={true} mt="24">
            <Input
                placeholder="Username"
                mb="4"
                name="username"
                value={loginCredentials.username}
                onChange={handleInputChange}
            />
            <InputGroup size="md">
                <Input
                    mb={4}
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    placeholder="Enter password"
                    name="password"
                    value={loginCredentials.password}
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
            <RadioGroup mb={4} value={role ? role : user.role}>
                <HStack spacing="24px">
                    {roles.map((role) => (
                        <Radio
                            key={role}
                            value={role}
                            onChange={handleRadioChange}
                        >
                            {role}
                        </Radio>
                    ))}
                </HStack>
            </RadioGroup>
            <Box
                display="flex"
                alignItems="flex-end"
                justifyContent="flex-end"
                flexDir="column"
                width="full"
            >
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
    ) : null;
};

export default EditUser;
