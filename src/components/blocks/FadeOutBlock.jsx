const FadeOutBlock = (props) => {
  return (
    <div className="uppercase" {...props.attributes}>
      <p>{props.children}:</p>
    </div>
  );
};

export default FadeOutBlock;
