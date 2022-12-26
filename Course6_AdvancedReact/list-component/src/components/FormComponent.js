import { useState } from "react";
const FormComponent = () => {
  const [name, setName] = useState("");
  const [score, setScore] = useState("5");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(+score <= 5 && comment.length <=10){
        alert('Please provide a comment explaining why the experience was poor')
        return
    }
    console.log("submitted");
    setName("");
    setScore('5');
    setComment("");
  };

  return (
    <div className="formComp">
      <form onSubmit={handleSubmit}>
        <h2>Feedback Form</h2>
        <fieldset>
          <legend>Info</legend>
          <div className="Field">
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </fieldset>

        <fieldset>
          <legend>Rating</legend>
          <div className="Field">
            <label>Score: {score}⭐</label>
            <input
              type="range"
              min="0"
              max="10"
              value={score}
              onChange={(e) => setScore(e.target.value)}
            />
          </div>
          <div className="Field">
            <label>Comment:</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
        </fieldset>

        <button disabled={!name} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
