import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import FeedbackForm from "./FeedbackForm";

describe('App load', () => {
    test("renders a link that points to the little lemon webpage", () => {
      render(<App />);
      const linkElement = screen.getByText(/Little Lemon Restaurant/i);
      expect(linkElement).toBeInTheDocument();
    });
})


describe("Feedback form", () => {
  test("invalidity checker", () => {
    const handleSubmit = jest.fn();
    render(<FeedbackForm onSubmit={handleSubmit} />);

    const rangeInput = screen.getByLabelText(/Score:/);
    fireEvent.change(rangeInput, { target: { value: "4" } });

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    expect(handleSubmit).not.toHaveBeenCalled();
    expect(submitButton).toHaveAttribute("disabled");
  });

  test("User is able to submit the form if the score is lower than 5 and additional feedback is provided", () => {
    const score = "3";
    const comment = "the pizza crust was too thick";
    const handleSubmit = jest.fn();

    render(<FeedbackForm onSubmit={handleSubmit} />);
    const rangeInput = screen.getByLabelText(/Score:/);
    fireEvent.change(rangeInput, { target: { value: score } });

    const commentInput = screen.getByLabelText(/Comment:/);
    fireEvent.change(commentInput, { target: { value: comment } });

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalledWith({
      score: score,
      comment: comment,
    });
  });

  test("User is able to submit the form if the score is higher than 5, without additional feedback", () => {
    const score = "9";
    const handleSubmit = jest.fn();

    render(<FeedbackForm onSubmit={handleSubmit} />);
    const rangeInput = screen.getByLabelText(/Score:/);
    fireEvent.change(rangeInput, { target: { value: score } });

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalledWith({
      score: score,
      comment: "",
    });
  });
});
