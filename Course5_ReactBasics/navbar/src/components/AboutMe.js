const AboutMe = () => {
  const randomImgUrl = "https://picsum.photos/200/300";
  return (
    <div>
      <h1>About Little Lemon</h1>
      <img
        src={randomImgUrl}
        alt="random img from the web"
        height={200}
      />
    </div>
  );
};

export default AboutMe;
