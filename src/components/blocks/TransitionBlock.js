const TransitionBlock = (props) => {
  return (
    <div className="w-full flex justify-end uppercase mr-[52px] mb-4" {...props.attributes}>
      <p>{props.children}:</p>
    </div>
  );
};

export default TransitionBlock;
