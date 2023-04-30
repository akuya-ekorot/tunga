import { Editable, Slate, withReact } from "slate-react";
import React, { useState } from "react";
import { Editor, createEditor } from "slate";
import { initialValue, onKeyDown, renderElement } from "@/utils/page/";
import CommandBox from "../CommandBox";

const Page = () => {
  const [editor] = useState(() => withReact(createEditor()));
  const [value, setValue] = useState(initialValue);

  const [element, setElement] = useState(0);
  const [coords, setCoords] = useState({ x: 0, y: 200 });
  const [commandBox, setCommandBox] = useState(false);

  return (
    <Slate editor={editor} value={value} onChange={setValue}>
      <div className="items-center font-mono text-xs flex flex-col gap-4">
        <div className="relative w-[594px]">
          {commandBox && <CommandBox coords={coords} />}
        </div>
        <Editable
          className="w-[594px] pl-[108px] pr-[62px] pt-[72px] border-x border-slate-300"
          renderElement={(props) => renderElement(props)}
          onKeyDown={(event) =>
            onKeyDown(
              event,
              editor,
              Editor,
              element,
              setElement,
              setCoords,
              setCommandBox
            )
          }
        />
      </div>
    </Slate>
  );
};

export default Page;
