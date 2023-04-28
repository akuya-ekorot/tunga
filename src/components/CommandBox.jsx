const CommandBox = ({ coords }) => {
  const elements = [
    "Screenplay Title",
    "Scene Heading",
    "Scene Description",
    "Action",
    "Character",
    "Dialogue",
    "Parentheticals",
    "Transition",
    "Note",
    "Fade In",
    "Fade Out",
  ];

  return (
    <div
      style={{
        top: coords.y + 1,
        left: coords.x + 108,
      }}
      className={`z-10 border h-64 w-56 overflow-auto border-slate-300 bg-slate-100 p-2 flex flex-col gap-2 absolute left-[${coords.x}] top-[${coords.y}]`}
    >
      {elements.map((el) => {
        return (
          <div key={el} className="border-b border-slate-300 p-2">
            {el}
          </div>
        );
      })}
    </div>
  );
};

export default CommandBox;
