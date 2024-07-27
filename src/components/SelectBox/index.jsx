import React from "react";
import {
    Box,
    FormControl,
    FormLabel,
    FormErrorMessage,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

const shapes = {
    round: {
        borderRadius: "8px",
    },
};

const variants = {
    fill: {
        white_A700: {
            bg: "white.a700",
            color: "gray.900"
        }
    }
};

const sizes = {
    xs: {
        h: "40px", fontSize: "16px", px: "14px"
    }
}



const SelectBox = React.forwardRef(
    (
        {
            options = [],
            shape = "",
            size = "xs",
            variant = "fill",
            color = "white_A700",
            label,
            isInvalid,
            errorMessage,
            ...restProps
        },
        ref
    ) => {
        return (
            <FormControl isInvalid={isInvalid}>
                {label && <FormLabel>{label}</FormLabel>}
                <Box
                    as="select"
                    ref={ref}
                    {...restProps}
                    {...sizes[size]}
                    {...shapes[shape]}
                    {...variants[variant][color]}
                    borderRadius={shapes[shape]?.borderRadius}
                    bg={variants[variant][color]?.bg}
                    color={variants[variant][color]?.color}
                >
                    {options.map((option, index) => (
                        <option key={index} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </Box>
                {isInvalid && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
            </FormControl>
        );
    }
);

SelectBox.propTypes = {
    options: PropTypes.array.isRequired,
    shape: PropTypes.string,
    size: PropTypes.string,
    variant: PropTypes.string,
    color: PropTypes.string,
    label: PropTypes.string,
    isInvalid: PropTypes.bool,
    errorMessage: PropTypes.string,
};

export { SelectBox };
