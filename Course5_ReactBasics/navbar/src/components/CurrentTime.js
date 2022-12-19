const WorkDays = () => {
  return <h2 className="alert">Get it done</h2>;
};
const WeekEnds = () => {
  return <h2 className="alert">Get some rest</h2>;
};

const ErrorComponent = () => {
    return <h2>Something went wrong</h2>
}

const CurrentTime = ({ day }) => {
  const workday = day > 0 && day < 6;
  const weekend = day > 0 && day < 6;
  let message;
  if (workday) message = <WorkDays />;
  else if (weekend) message = <WeekEnds />;
  else message = <ErrorComponent />
  return <div>{message}</div>;
};

export default CurrentTime;
