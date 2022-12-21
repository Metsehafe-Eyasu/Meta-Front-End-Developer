import ReactPlayer from "react-player/youtube";

const MyVideo = () => {
  const url = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  return <ReactPlayer url={url} playing={false} volume={0.5} />;
};

const Contact = () => {
  return (
    <div>
      <h1>Contact Little Lemon on this page.</h1>
      <MyVideo />
    </div>
  );
};

export default Contact;
