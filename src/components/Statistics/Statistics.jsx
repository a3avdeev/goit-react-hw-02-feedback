import React from "react";
import FeedbackButtons from "components/FeedbackButtons/FeedbackButtons";

export default function Statistics({good, neutral, bad, total, percent})  {
    return (
        <div>
            <h2>Statistics</h2>
            <p>Good: { good }</p>
            <p>Neutral: { neutral }</p>
            <p>Bad: { bad }</p>
            <p>Total: { total }</p>
            <p>Positive Feedback: { percent }%</p>
        </div>
    
)
}