import React, { useCallback, useState } from "react";
import { Editor, Element, Transforms, createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import {
  ActionBlock,
  CharacterBlock,
  DialogueBlock,
  NoteBlock,
  ParentheticalsBlock,
  SceneBlock,
  SceneDescriptionBlock,
  TransitionBlock,
} from "@/components/blocks";


export default function ScreenplayEditor() {
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
      <Editable
        className="w-full h-full"
        renderElement={renderElement}
        onKeyDown={(event) => onKeyDown(event, editor)}
      />
    </Slate>
  );
}
