const DefaultBlock = (props) => {
  return (
    <div className="" {...props.attributes}>
      <p className="leading-none">{props.children}</p>
    </div>
  );
};

export default DefaultBlock;
