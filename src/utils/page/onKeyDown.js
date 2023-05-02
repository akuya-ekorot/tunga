import { Transforms, Element } from "slate";
import toggleElements from "./toggleElements";
import { getBlockType, handleAddPage } from ".";

/**
 * handles keypress events from within the editor
 *
 * @param event -
 * @param editor -
 * @param Editor -
 * @param element -
 * @param setElement -
 * @parem pageRef - 
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

  if (pageRef.current?.offsetHeight >= 842) {
    handleAddPage(editor, type);
  }

  if (event.key == "Enter") {
    event.preventDefault();

    if (pageRef.current?.offsetHeight >= 842) {
      handleAddPage(editor, type);
    } else {

      /*
       * add a space if the parent type is dialogue and the type selected
       * is character
       */
      if (type === "character" && parent.type === "dialogue")
        Transforms.insertNodes(editor, { type: "space", children: [{ text: "" }] });

      Transforms.insertNodes(editor, { type, children: [{ text: "" }] });
    }
  }
};

export default onKeyDown;
