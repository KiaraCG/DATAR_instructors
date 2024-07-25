import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

// custom sizes definition
const sizes = {
    xs: defineStyle({
        maxW: "1154px",
        w: "100%",
        ms: "auto",
    })
};

// export component theme
const Container = defineStyleConfig({
    sizes, defaultProps: {size:"xs"}
});

export default Container;