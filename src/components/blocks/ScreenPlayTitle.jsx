const ScreenPlayTitle = (props) => {
  return (
    <div className="text-center uppercase" {...props.attributes}>
      <p>{props.children}</p>
    </div>
  );
};

export default ScreenPlayTitle;
