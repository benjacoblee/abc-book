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
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../app/store";
import { me } from "../utils/auth";
import { generateRoles } from "../utils/roles";

const EditUser = () => {
    const [show, setShow] = useState(false);
    const [loginCredentials, setLoginCredentials] = useState({
        username: "",
        password: ""
    });
    const [role, setRole] = useState("");
    const [isMe, setIsMe] = useState(false);

    const params = useParams();
    const { id } = params;

    const users = useSelector((state: RootState) => state.users);
    const auth = useSelector((state: RootState) => state.auth);
    const user = users.find((user) => user.id === id);
    const navigate = useNavigate();
    useEffect(() => {
        !user && navigate("/");
        !auth.isLoggedIn && navigate("/");
        user && setIsMe(me(user.id));
    }, [user, auth.isLoggedIn, navigate, auth.user]);

    const roles =
        isMe || user?.role === "admin" ? ["admin"] : generateRoles(users);

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

    return user ? (
        <Container centerContent={true} mt="24">
            <Input
                placeholder="Username"
                mb="4"
                name="username"
                defaultValue={user.name}
                onChange={handleInputChange}
            />
            <InputGroup size="md">
                <Input
                    mb={4}
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    placeholder="Enter password"
                    name="password"
                    value={user.password}
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
                <Button width="full">Submit</Button>
            </Box>
        </Container>
    ) : null;
};

export default EditUser;
