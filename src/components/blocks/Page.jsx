import { useMemo } from "react";
import { Editable, Slate, withReact } from "slate-react";
import ScreenplayEditor from "../ScreenplayEditor";
import { Transforms, createEditor } from "slate";

const initialValue = [
  {
    type: "editable-void",
    page: 1,
    children: [{ text: "" }],
  },
];

const Page = () => {
  const editor = useMemo(() => withEditableVoid(withReact(createEditor())), []);

  return (
    <Slate editor={editor} value={initialValue}>
      <Editable
        className="bg-slate-100 py-8 flex flex-col gap-4"
        onKeyDown={(e) => e.preventDefault()}
        renderElement={(props) => <Element {...props} />}
      />
      <button onClick={() => insertPageVoid(editor)}>Add Page</button>
    </Slate>
  );
};

const insertPageVoid = (editor) => {
  const text = { text: "" };
  const voidNode = {
    type: "editable-void",
    page: editor.children.length + 1,
    children: [text],
  };

  Transforms.insertNodes(editor, voidNode);
  console.log(editor.children);
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
      return (
        <PageVoid
          attributes={attributes}
          children={children}
          page={element.page}
        />
      );
    default:
      return <p {...attributes}>{children}</p>;
  }
};

const PageVoid = ({ attributes, children, page }) => {
  return (
    <div
      {...attributes}
      contentEditable={false}
      className="bg-white border font-mono text-xs mx-auto shadow-lg w-[595px] h-[857px] pl-[108px] pr-[62px] pb-[84px] pt-[36px]"
    >
      <p className="text-right">{page}</p>
      <ScreenplayEditor />
      <div className="hidden">{children}</div>
    </div>
  );
};

export default Page;
