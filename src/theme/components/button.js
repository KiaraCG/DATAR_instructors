import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";
const baseStyle = defineStyle({ borderRadius: "8px", outlineOffset: "0", cursor: "pointer", flexDirection: "row" });

const sizes = {

    md: defineStyle({
        h: "44px",
        fontSize: "16px",
        px: "34px",
    }),

    sm: defineStyle({
        h: "40px",
        fontSize: "16px",
        px: "34px",
    }),


    xs: defineStyle({
        h: "32px",
        fontSize: "16px",
        px: "6px"
    }),
};
const variants = {
    outline: defineStyle((props) => {
        const { colorScheme } = props;
        const colorCombinations = {
            black_900: {
                borderColor: "black.900", borderWidth: "1px",
                borderStyle: "solid", color: "blue_gray.900_01",
            },
        };
        return colorCombinations[colorScheme] || colorCombinations["black_900"];
    }),
    fill: defineStyle((props) => {
        const { colorScheme } = props;
        const colorCombinations = {
            gray_100: {
                bg: "gray.100", color: "gray.900",
            },
            gray_300: {
                bg: "gray.300", color: "gray.900",
            },
            blue_gray_900: {
                bg: "blue_gray.900", color: "gray. 100"
            },
        };
        return colorCombinations[colorScheme] || colorCombinations["blue_gray_900"];
    }),
}

const Button = defineStyleConfig({
    baseStyle, variants, sizes,
    defaultProps: {
        variant: "fill", size:
            "xs",
    },
});

export default Button;