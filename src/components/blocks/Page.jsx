import { useMemo } from "react";
import { Editable, Slate, withReact } from "slate-react";
import ScreenplayEditor from "../ScreenplayEditor";
import { Transforms, createEditor } from "slate";

const initialValue = [
  {
    type: "editable-void",
    children: [{ text: "" }],
  },
];

const Page = () => {
  const editor = useMemo(() => withEditableVoid(withReact(createEditor())), []);

  return (
    <Slate editor={editor} value={initialValue}>
      <Editable renderElement={(props) => <Element {...props} />} />
      <button onClick={() => insertPageVoid(editor)}>Add Page</button>
    </Slate>
  );
};

const insertPageVoid = (editor) => {
  const text = { text: "" };
  const voidNode = {
    type: "editable-void",
    children: [text],
  };

  Transforms.insertNodes(editor, voidNode);
};

const withEditableVoid = (editor) => {
  const { isVoid } = editor;

  editor.isVoid = (element) => {
    return element.type === "editable-void" ? true : isVoid(element);
  };

  return editor;
};

const Element = (props) => {
  const { attributes, children, element } = props;

  switch (element.type) {
    case "editable-void":
      return <PageVoid {...props} />;
    default:
      return <p {...attributes}>{children}</p>;
  }
};

const PageVoid = ({ attributes }) => {
  return (
    <div className="w-full font-mono text-xs bg-slate-100 flex flex-col items-center h-full pt-4">
      <div
        className="bg-white border shadow-lg w-[595px] h-[857px] pl-[108px] pr-[62px] pb-[84px] pt-[36px]"
        {...attributes}
        contentEditable={false}
      >
        <ScreenplayEditor />
      </div>
    </div>
  );
};

export default Page;
