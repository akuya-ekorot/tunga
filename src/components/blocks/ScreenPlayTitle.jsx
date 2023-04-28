const ScreenPlayTitle = (props) => {
  return (
    <div className="text-center uppercase mb-4" {...props.attributes}>
      <p>"{props.children}"</p>
    </div>
  );
};

export default ScreenPlayTitle;
