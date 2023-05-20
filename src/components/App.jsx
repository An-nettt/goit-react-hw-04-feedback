import { Wrapper } from './styled';

import { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleLeaveFeedback = button => {
    this.setState(prevState => {
      return {
        [button.toLowerCase()]: prevState[button.toLowerCase()] + 1,
      };
    });
  };

  render() {
    const countTotalFeedback =
      this.state.good + this.state.neutral + this.state.bad;

    const countPositiveFeedbackPercentage = Math.round(
      (this.state.good / countTotalFeedback) * 100
    );

    const visible =
      this.state.good > 0 || this.state.neutral > 0 || this.state.bad > 0;

    return (
      <Wrapper>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['Good', 'Neutral', 'Bad']}
            onLeaveFeedback={this.handleLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {!visible && <Notification message="There is no feedback" />}
          {visible && (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={countTotalFeedback}
              positivePercentage={countPositiveFeedbackPercentage}
            />
          )}
        </Section>
      </Wrapper>
    );
  }
}
