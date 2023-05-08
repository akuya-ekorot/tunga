import { Editable, Slate, withReact } from "slate-react";
import React, { useState } from "react";
import { Editor, createEditor } from "slate";
import { initialValue, onKeyDown, renderElement } from "@/utils/page/";

const Page = () => {
  const [editor] = useState(() => withReact(createEditor()));
  const [value, setValue] = useState(initialValue);
  const [element, setElement] = useState(0);

  return (
    <div>
      <Slate editor={editor} value={value} onChange={setValue}>
        <div className="items-center font-mono text-xs flex flex-col gap-4 bg-slate-100">
          <Editable
            className="flex flex-col gap-4 py-8 leading-none"
            renderElement={(props) => renderElement(props)}
            onKeyDown={(event) =>
              onKeyDown(event, editor, Editor, element, setElement)
            }
          ></Editable>
        </div>
      </Slate>
    </div>
  );
};

export default Page;
