const FadeIn = (props) => {
  return (
    <div className="uppercase" {...props.attributes}>
      <p>{props.children}:</p>
    </div>
  );
};

export default FadeIn;
