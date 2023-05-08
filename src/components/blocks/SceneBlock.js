const SceneBlock = (props) => {
  return (
    <div className="bg-slate-100 font-bold uppercase" {...props.attributes}>
      <p>{props.children}</p>
    </div>
  );
};

export default SceneBlock;
