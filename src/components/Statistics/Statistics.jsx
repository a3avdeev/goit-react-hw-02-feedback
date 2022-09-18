import React from "react";
import PropTypes from "prop-types";
import {Stats} from "./Statistics.Styled"

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (
        <Stats>
            <li>Good: { good }</li>
            <li>Neutral: { neutral }</li>
            <li>Bad: { bad }</li>
            <li>Total: { total }</li>
            <li>Positive Feedback: <b>{ positivePercentage }%</b></li>
        </Stats>
    
)
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
}