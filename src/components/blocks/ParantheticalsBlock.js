const ParentheticalsBlock = (props) => {
  return (
    <div className="ml-[110px] mr-[180px]" {...props.attributes}>
      <p>({props.children})</p>
    </div>
  );
};

export default ParentheticalsBlock;
