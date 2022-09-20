import React from "react"
import PropTypes from "prop-types";
import {SectionStyle, Title} from "./Section.Styled"

export const Section = ({ title, children }) => {
    return (
        <SectionStyle>
            <Title>{title}</Title>
            {children}
        </SectionStyle>
    )
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired
}
