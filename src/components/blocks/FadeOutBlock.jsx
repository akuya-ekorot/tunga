const FadeOutBlock = (props) => {
  return (
    <div className="uppercase flex justify-end" {...props.attributes}>
      <p>{props.children}.</p>
    </div>
  );
};

export default FadeOutBlock;
