const ScreenPlayTitle = (props) => {
  return (
    <div className="relative right-[23px] text-center uppercase mb-4" {...props.attributes}>
      <p>{props.children}</p>
    </div>
  );
};

export default ScreenPlayTitle;
