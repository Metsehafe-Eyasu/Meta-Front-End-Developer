import { useState } from "react";

const FeedbackForm = ({ onSubmit }) => {
  const [score, setScore] = useState("10");
  const [comment, setComment] = useState("");

  const isDisabled = +score < 5 && comment.length <= 10;

  const textAreaPlaceholder = isDisabled
    ? "Please provide a comment explaining why the experience was not good. Minimum length is 10 characters"
    : "Optional Feedback";

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ score, comment });
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Feedback Form</h2>
          <div className="field">
            <label htmlFor="range">Score: {score} ⭐</label>
            <input
              id="range"
              type="range"
              min="0"
              max="10"
              value={score}
              onChange={(e) => {
                setScore(e.target.value);
              }}
            />
          </div>
          <div className="field">
            <label htmlFor="comment">Comment: </label>
            <textarea 
              placeholder={textAreaPlaceholder}
              name='comment'
              id="comment"
              value={comment}
              onChange={(e) => {
                setComment(e.target.value)
              }}
            />
          </div>
          <button type="submit" disabled={isDisabled}>Submit</button>
        </fieldset>
      </form>
    </div>
  );
};

export default FeedbackForm;
