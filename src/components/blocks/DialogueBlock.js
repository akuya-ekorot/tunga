const DialogueBlock = (props) => {
  return (
    <div className="ml-[70px] mr-[108px]" {...props.attributes}>
      <p>{props.children}</p>
    </div>
  );
};

export default DialogueBlock;
