import React from "react";
import PropTypes from "prop-types";
import {ButtonStyles, ButtonWrapper} from "./FeedbackOptions.Styled"

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {

    return <ButtonWrapper>
        {options.map(option => {
            return <ButtonStyles type="button" key={option} onClick={() => onLeaveFeedback(option)}>{option}</ButtonStyles>
        })}
            </ButtonWrapper>
        
    
}

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
}