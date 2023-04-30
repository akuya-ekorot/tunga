const FadeOutBlock = (props) => {
  return (
    <div className="uppercase flex justify-end mb-[36px]" {...props.attributes}>
      <p>{props.children}.</p>
    </div>
  );
};

export default FadeOutBlock;
