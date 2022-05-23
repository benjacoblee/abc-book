// theme.js
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    components: {
        Link: {
            baseStyle: {
                fontWeight: "semibold"
            }
        }
    }
});

export default theme;
