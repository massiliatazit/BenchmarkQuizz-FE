import React from "react";

class Questions extends React.Component {
  state = {
    Exams: {
      questions: [
        {
          duration: 0,
          text: "",
          answers: [
            { text: "", isCorrect: false },
            { text: "", isCorrect: false },
            { text: "", isCorrect: false },
            { text: "", isCorrect: false },
          ],
          _id: "",
        },
      ],
    },
  };
  componentDidMount = async () => {
    try {
      let response = await fetch("http://localhost:5001/exams/start");
      let data = await response.json();
      this.setState{(Exams: data)}
      return data;
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    return (
      <div className="container">
        <div id="game" className="flex-center flex-column">
          <h2 id="question">this.state.Exams.questions.map</h2>
          <div className="choice-container">
            <p className="choice-prefix"> A </p>
            <p className="choice-text" data-number="1">
              {" "}
              choice 1
            </p>
          </div>
          <div className="choice-container">
            <p className="choice-prefix">B </p>
            <p className="choice-text" data-number="2">
              {" "}
              choice 2
            </p>
          </div>
          <div className="choice-container">
            <p className="choice-prefix">C </p>
            <p className="choice-text" data-number="3">
              {" "}
              choice 3
            </p>
          </div>
          <div className="choice-container">
            <p className="choice-prefix">D </p>
            <p className="choice-text" data-number="4">
              {" "}
              choice 4
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Questions;
