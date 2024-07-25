import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import { tabsAnatomy as parts } from "@chakra-ui/anatomy";
const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(parts.keys);
const baseStyle = definePartsStyle({
    tab: {
        fontWeight: "semibold", // change the font weight
    }
});
const variants = {
    custombackground: definePartsStyle({
        tab: {
            color: "blue_gray 900_01", _selected: {
                color: "gray.100", borderColor: "blue_gray.900", borderWidth: "1px", borderStyle: "solid", bg: "blue_gray.900", borderRadius: "8px",
            },
        },
    }),
};

const Tab = defineMultiStyleConfig({
    baseStyle,
    variants,
    defaultProps: { size: "", variant: "custombackground" },
});
export default Tab;