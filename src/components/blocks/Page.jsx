import { Editable, Slate, withReact } from "slate-react";
import React, { useEffect, useState } from "react";
import { Editor, createEditor } from "slate";
import { initialValue, onKeyDown, renderElement } from "@/utils/page/";
import CommandBox from "../CommandBox";

const Page = (props) => {
  const [editor] = useState(() => withReact(createEditor()));
  const [value, setValue] = useState(initialValue);

  const [element, setElement] = useState(0);
  const [coords, setCoords] = useState({ x: 0, y: 200 });
  const [commandBox, setCommandBox] = useState(false);

  useEffect(() => {
    props.setPageHeight(props.pageRef.current.clientHeight);
  }, [value])

  return (
    <div {...props.attributes} contentEditable={false}>
      <div className="hidden">{props.children}</div>
      <Slate editor={editor} value={value} onChange={setValue}>
        <div className="items-center font-mono text-xs flex flex-col gap-4 bg-slate-100">
          <div className="relative w-[594px]">
            {commandBox && <CommandBox coords={coords} />}
          </div>
          <div ref={props.pageRef}>
            <Editable
              className="w-[594px] pl-[108px] pr-[62px] pt-[72px] pb-[84px] border border-slate-300 bg-white"
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
            ></Editable>
          </div>
        </div>
      </Slate>
    </div>
  );
};

export default Page;
