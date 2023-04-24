import "@/styles/globals.css";
import React, { useCallback, useState } from "react";
import { Courier_Prime } from "next/font/google";
import { Editor, Element, Transforms, createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import {
  ActionBlock,
  CharacterBlock,
  DialogueBlock,
  NoteBlock,
  Page,
  ParentheticalsBlock,
  SceneBlock,
  SceneDescriptionBlock,
  TransitionBlock,
} from "@/components/blocks";

const courier = Courier_Prime({
  variable: "--font-courier",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function App({ Component, pageProps }) {
  const [element, setElement] = useState(0);
  const [editor] = useState(() => withReact(createEditor()));
  const [value, setValue] = useState([
    { type: "scene", children: [{ text: "INT. " }] },
  ]);

  const renderElement = useCallback((props) => {
    const elements = {
      action: <ActionBlock {...props} />,
      character: <CharacterBlock {...props} />,
      dialogue: <DialogueBlock {...props} />,
      note: <NoteBlock {...props} />,
      parentheticals: <ParentheticalsBlock {...props} />,
      scene: <SceneBlock {...props} />,
      sceneDescription: <SceneDescriptionBlock {...props} />,
      transition: <TransitionBlock {...props} />,
    };
    return elements[props.element.type];
  }, []);

  const toggleElements = useCallback(() => {
    const elements = [
      "scene",
      "sceneDescription",
      "character",
      "dialogue",
      "parentheticals",
      "transition",
      "note",
    ];
    setElement((prev) => {
      if (prev < elements.length - 1) {
        return prev + 1;
      }
      return 0;
    });
    return elements[element];
  });

  const onKeyDown = (event, editor) => {
    if (event.key == "Tab") {
      event.preventDefault();
      Transforms.setNodes(
        editor,
        { type: toggleElements() },
        {
          match: (n) => {
            return Editor.isBlock(editor, n) && Element.isElement(n);
          },
        }
      );
    }

    if (event.key == "Enter") {
      event.preventDefault();
      const { selection } = editor;
      const [currentNode] = Editor.nodes(editor, { at: selection });
      const [parent] = Editor.parent(editor, currentNode[0].selection);
      let type = "";

      switch (parent.type) {
        case "scene":
          setElement(1);
          console.log(element)
          type = "sceneDescription";
          break;
        case "character" :
          setElement(4);
          type = "dialogue";
          break;
        case "parentheticals":
          setElement(4);
          type = "dialogue";
          break;
        case "dialogue":
          type = "character";
          setElement(4);
          break;
        default:
          type = "sceneDescription";
      }

      Transforms.insertNodes(editor, {
        type,
        children: [{ text: "" }],
      });
    }
  };

  return (
    <Slate editor={editor} value={value} onChange={setValue}>
      <div
        className={`h-screen w-screen flex flex-col ${courier.variable} font-mono text-xs`}
      >
        <Component {...pageProps} />
        <div className="w-full bg-slate-100 flex flex-col items-center h-full pt-4">
          <Editable
            className="bg-white border shadow-lg w-[595px] h-[857px] pl-[108px] pr-[62px] pb-[84px] pt-[36px]"
            renderElement={renderElement}
            onKeyDown={(event) => onKeyDown(event, editor)}
          />
        </div>
      </div>
    </Slate>
  );
}
