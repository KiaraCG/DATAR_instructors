import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";
const baseStyle = defineStyle({
    field: { cursor: "text", color: "gray.400", borderColor: "blue_gray.100", borderWidth: "0.5px", bg: "white.a700" },
});
const sizes = {
    xs: defineStyle({
        field: {
            fontSize: "16px", px: "16px",
            height: "40px",
        },
    }),
};
const variants = {
    fill: defineStyle((props) => {
        const { colorScheme } = props;
        const colorCombinations = {
            white_A700: {
                field: {
                    bg: "white-a700", color: "gray.400",
                },
            },
        };

        return colorCombinations[colorScheme] || colorCombinations["white_A700"];
    }),
};
const Input = defineStyleConfig({
    baseStyle, variants, sizes,
    defaultProps: {
        variant: "fill", size: "xs",
    },
});
export default Input;