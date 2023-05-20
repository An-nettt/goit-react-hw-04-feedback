import { Wrapper } from './styled';

import { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

// const useButtonClick = (key, button) => {
//   const [state, setState] = useState(prevState => {
//     return {
//       [button.toLowerCase()]: prevState[button.toLowerCase()] + 1,
//     };
//   });
// };

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleLeaveFeedback = () => {
    // console.log(button);

    setGood(prevGood => prevGood + 1);

    setNeutral(prevNeutral => prevNeutral + 1);

    // console.log(prevGood);
    // setGood(useButtonClick(good));
    // this.setState(prevState => {
    //   return {
    //     [button.toLowerCase()]: prevState[button.toLowerCase()] + 1,
    //   };
    // });
  };

  const countTotalFeedback = good + neutral + bad;

  const countPositiveFeedbackPercentage = Math.round(
    (good / countTotalFeedback) * 100
  );

  const visible = good > 0 || neutral > 0 || bad > 0;

  return (
    <Wrapper>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['Good', 'Neutral', 'Bad']}
          onLeaveFeedback={handleLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {!visible && <Notification message="There is no feedback" />}
        {visible && (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        )}
      </Section>
    </Wrapper>
  );
}

// export default class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleLeaveFeedback = button => {
//     this.setState(prevState => {
//       return {
//         [button.toLowerCase()]: prevState[button.toLowerCase()] + 1,
//       };
//     });
//   };

//   render() {
//     const countTotalFeedback =
//       this.state.good + this.state.neutral + this.state.bad;

//     const countPositiveFeedbackPercentage = Math.round(
//       (this.state.good / countTotalFeedback) * 100
//     );

//     const visible =
//       this.state.good > 0 || this.state.neutral > 0 || this.state.bad > 0;

//     return (
//       <Wrapper>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={['Good', 'Neutral', 'Bad']}
//             onLeaveFeedback={this.handleLeaveFeedback}
//           />
//         </Section>
//         <Section title="Statistics">
//           {!visible && <Notification message="There is no feedback" />}
//           {visible && (
//             <Statistics
//               good={this.state.good}
//               neutral={this.state.neutral}
//               bad={this.state.bad}
//               total={countTotalFeedback}
//               positivePercentage={countPositiveFeedbackPercentage}
//             />
//           )}
//         </Section>
//       </Wrapper>
//     );
//   }
// }
