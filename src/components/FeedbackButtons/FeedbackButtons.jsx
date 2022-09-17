import { Component } from "react";

export default class FeedbackButtons extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    countTotal() {
        const {good, neutral,bad} = this.state;
        return good + neutral + bad;
    }

    countPercentage() {
        const total = this.countTotal();
        if (!total) {
            return 0;
        }

        const value = this.state.good;
        const result = (value / total) * 100;
        return Number(result.toFixed(1));
    }

    

    render() {
        const { good, neutral, bad } = this.state;
        return (
            <div>
                <h2>Please leave feedback</h2>
                <button type="button">Good</button>
                <button type="button">Neutral</button>
                <button type="button">Bad</button>
            </div>
            
        )
    }
}