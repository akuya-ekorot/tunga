import { Transforms, Element } from "slate";
import toggleElements from "./toggleElements";
import { getBlockType } from ".";

/**
 * handles keypress events from within the editor
 *
 * @param event -
 * @param editor -
 * @param Editor -
 * @param element -
 * @param setElement -
 */
const onKeyDown = (
  event,
  editor,
  Editor,
  element,
  setElement,
  pageRef,
) => {
  const { selection } = editor;
  const [currentNode] = Editor.nodes(editor, { at: selection });
  const [parent] = Editor.parent(editor, currentNode[0].selection);
  const type = getBlockType(parent);

  if (event.key == "Tab") {
    event.preventDefault();
    Transforms.setNodes(
      editor,
      { type: toggleElements(setElement, element) },
      {
        match: (n) => {
          return Editor.isBlock(editor, n) && Element.isElement(n);
        },
      }
    );
  }

  if (event.key == "Enter") {
    event.preventDefault();

    if (pageRef.current?.offsetHeight >= 842) {
      Transforms.insertNodes(editor,
        {
          type: "play",
          children: [{ type, children: [{ text: "" }] }]
        },
        { at: [editor.children.length] }
      );

      Transforms.select(editor, [editor.children.length - 1, 0, 0])
    } else {
      if (type === "character" && parent.type === "dialogue")
        Transforms.insertNodes(editor, { type: "space", children: [{ text: "" }] });

      Transforms.insertNodes(editor, { type, children: [{ text: "" }] });
    }
  }

};

export default onKeyDown;
