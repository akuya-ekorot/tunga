const FadeInBlock = (props) => {
  return (
    <div className="uppercase mb-4" {...props.attributes}>
      <p>{props.children}:</p>
    </div>
  );
};

export default FadeInBlock;
