const DialogueBlock = (props) => {
  return (
    <div className="ml-[70px] mr-[108px] mb-4" {...props.attributes}>
      <p>{props.children}</p>
    </div>
  );
};

export default DialogueBlock;
