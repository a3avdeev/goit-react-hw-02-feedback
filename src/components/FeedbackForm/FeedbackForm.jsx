import { Component } from "react";
import PropTypes from "prop-types";

import {FeedbackOptions} from '../FeedbackOptions/FeedbackOptions'
import {Statistics} from '../Statistics/Statistics'
import { Section } from '../Section/Section'
import {Notification} from '../Notification/Notification'

export default class FeedbackForm extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    countTotal() {
        const {good, neutral, bad} = this.state;
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

    onLeaveFeedback = (propertyName) => {
        this.setState((prevState) => {
            const value = prevState[propertyName];
            return {[propertyName]: value + 1}
        })
    };

    render() {
        const { good, neutral, bad } = this.state;
        const total = this.countTotal();
        const positivePercentage = this.countPercentage();
        return (
            <div>
                <Section title="Please leave feedback">
                    <FeedbackOptions options={["good", "neutral", "bad"]} onLeaveFeedback={this.onLeaveFeedback} />
                </Section>
                
                <Section title="Statistics">
                    {!total ? <Notification message="There is no feedback"></Notification> : <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={total}
                        positivePercentage={positivePercentage} />
                    }
                </Section>
            </div>
            
        )
    }

}


FeedbackForm.propTypes = {
    state: PropTypes.objectOf(PropTypes.shape({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
    })),
    total: PropTypes.number,
    positivePercent: PropTypes.number,
}