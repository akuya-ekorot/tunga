const CharacterBlock = (props) => {
  return (
    <div className="ml-[142px] uppercase" {...props.attributes}>
      <p>{props.children}</p>
    </div>
  );
};

export default CharacterBlock;
