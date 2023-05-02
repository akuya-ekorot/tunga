import { Editable, Slate, withReact } from "slate-react";
import React, { useRef, useState } from "react";
import { Editor, createEditor } from "slate";
import { initialValue, onKeyDown, renderElement } from "@/utils/page/";

const Page = () => {
  const [editor] = useState(() => withReact(createEditor()));
  const [value, setValue] = useState(initialValue);
  const [element, setElement] = useState(0);

  const pageRef = useRef();

  return (
    <div>
      <Slate editor={editor} value={value} onChange={setValue}>
        <div className="items-center font-mono text-xs flex flex-col gap-4 bg-slate-100">
          <Editable
            className="flex flex-col gap-4 py-8"
            renderElement={(props) => renderElement(props, pageRef)}
            onKeyDown={(event) =>
              onKeyDown(event, editor, Editor, element, setElement, pageRef)
            }
          ></Editable>
        </div>
      </Slate>
    </div>
  );
};

export default Page;
