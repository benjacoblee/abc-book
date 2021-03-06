import { Box, Container, Heading, SlideFade } from "@chakra-ui/react";
import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";
import { store } from "../app/store";
import {
    normalizeBooksByGenre,
    normalizeBooksByYearPublished
} from "../utils/book";

const Home = () => {
    const books = store.getState().books;
    const booksByGenre = normalizeBooksByGenre(books);
    const booksByYearPublished = normalizeBooksByYearPublished(books);

    const renderBarChart = () => {
        return (
            <BarChart width={730} height={250} data={booksByGenre}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="genre" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#8884d8" />
            </BarChart>
        );
    };

    const renderLineChart = () => {
        return (
            <LineChart
                width={730}
                height={250}
                data={booksByYearPublished}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year_published" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="count" stroke="#8884d8" />
            </LineChart>
        );
    };

    return (
        <Container maxW="container.xl" centerContent={true}>
            <Heading mb="4">Analytics</Heading>
            <SlideFade in={true} style={{ zIndex: 10 }}>
                <Box mb="4" rounded="md">
                    {renderBarChart()}
                </Box>
                <Box mb="4" rounded="md">
                    {renderLineChart()}
                </Box>
            </SlideFade>
        </Container>
    );
};

export default Home;
