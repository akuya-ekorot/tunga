const EndBlock = (props) => {
  return (
    <div className="uppercase underline flex justify-center" {...props.attributes}>
      <p>{props.children}</p>
    </div>
  );
};

export default EndBlock;
