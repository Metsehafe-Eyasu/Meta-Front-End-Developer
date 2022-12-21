import ReactLogo from "../assets/images/logo192.png";
const HomePage = () => {
    const gif = "https://media.giphy.com/media/lgcUUCXgC8mEo/giphy.gif";
  return (
    <div>
      <h1>Welcome to the Little Lemon site</h1>
      <img src={ReactLogo} alt="react logo" height={200} />

      <img
        height={200}
        alt="rick roll"
        src={gif}
      />
    </div>
  );
};

export default HomePage;
