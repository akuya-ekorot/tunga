import { Transforms, Element } from "slate";
import toggleElements from "./toggleElements";

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
  setCoords,
  setCommandBox
) => {
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
    const { selection } = editor;
    const [currentNode] = Editor.nodes(editor, { at: selection });
    const [parent] = Editor.parent(editor, currentNode[0].selection);
    let type = "";

    switch (parent.type) {
      case "screenplayTitle":
        type = "screenPlayTitle";
      case "scene":
        setElement(1);
        type = "sceneDescription";
        break;
      case "character":
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

  if (event.key == "/" && !event.ctrlKey) {
    setCoords({
      ...{ x: event.target.clientLeft, y: event.target.clientHeight },
    });
    setCommandBox(true);
  }
};

export default onKeyDown;
