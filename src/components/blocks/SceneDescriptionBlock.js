const SceneDescriptionBlock = (props) => {
  return (
    <div className="mb-4" {...props.attributes}>
      <p>{props.children}</p>
    </div>
  );
};

export default SceneDescriptionBlock;
