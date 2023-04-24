const NoteBlock = (props) => {
  return (
    <div className="mb-4 uppercase" {...props.attributes}>
      <p>{props.children}</p>
    </div>
  );
};

export default NoteBlock;
