import { css, cx } from "@emotion/css";
import { forwardRef } from "react";
import {PropTypes} from "prop-types"

const containerFlexStyles = (width, height, bgColor, flexDirection, alignContent, alignItems, justifyContent,gap) => css `
    width: ${width || "100%"};
    height: ${height || "100%"};
    display: flex;
    background-color: ${bgColor};
    flex-direction: ${flexDirection};
    align-content: ${alignContent};
    align-items: ${alignItems};
    justify-content: ${justifyContent}
    gap: ${gap};
`

const ContainerFlex = forwardRef((props, ref) => {
    const {
        className,
        width,
        height,
        bgColor,
        flexDirection,
        alignContent,
        alignItems,
        justifyContent,
        gap,
        ...otherProps
    } = props

    return (
        <section
        ref={ref}
        {...otherProps}
        className={cx(containerFlexStyles(width,height,bgColor,flexDirection,alignContent,alignItems,justifyContent,gap),className)}
        />
    )
}) 

ContainerFlex.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    bgColor: PropTypes.string,
    className: PropTypes.string,
    gap: PropTypes.string,
    flexDirection: PropTypes.oneOf(['column','column-reverse','row','row-reverse']),
    alignContent: PropTypes.oneOf(['center','flex-start','flex-end','space-around','space-between','stretch']),
    alignItems: PropTypes.oneOf(['center','flex-start','flex-end','stretch']),
    justifyContent: PropTypes.oneOf(['center','flex-start','flex-end','space-around','space-between','space-evenly']),
    gap: PropTypes.string
}

export default ContainerFlex;