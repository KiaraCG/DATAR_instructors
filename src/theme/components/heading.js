const baseStyle = {
    color: "gray.900", fontFamily: "Inter",
};
const sizes = {
    headingxs: {
        fontSize: {
            md: "48px",
            base: "38px",
            sm:
                "44px",
        },
        fontWeight: 700, fontStyle:
            "bold",
    },
    headings: {
        fontSize: "16px", fontWeight: 600, fontStyle:
            "bold",
    },
    headingmd: {
        fontSize: {
            md: "24px", base: "24px", sm: "22px"
        },
        fontWeight: 600, fontStyle: "bold",
    },
};
const defaultProps = {
    size: "headings",
};
const Heading = {
    baseStyle, sizes, defaultProps,
};
export default Heading;