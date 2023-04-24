const ParentheticalsBlock = (props) => {
  return (
    <div className="ml-[110px]" {...props.attributes}>
      <p>({props.children})</p>
    </div>
  );
};

export default ParentheticalsBlock;
