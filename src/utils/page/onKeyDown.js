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
    console.log("selection", selection);

    const path = selection.focus.path;
    console.log("path", path);

    const [currentNode] = Editor.nodes(editor, { at: selection });
    console.log("current node", currentNode);

    const [parent] = Editor.parent(editor, currentNode[0].selection);
    console.log("parent", parent);
    let type;

    switch (parent.type) {
      case "character":
        type = "dialogue";
        break;
      case "fadeIn":
        type = "scene";
        break;
      case "fadeOut":
        type = "end";
        break;
      case "fadeOut":
        type = "end";
        break;
      case "note":
        type = "sceneDescription";
        break;
      case "parentheticals":
        type = "dialogue";
        break;
      case "scene":
        type = "sceneDescription";
        break;
      case "screenPlayTitle":
        type = "fadeIn";
        setElement(4);
        break;
      case "transition":
        type = "scene";
        break;
      default:
        type = parent.type;
    }

    Transforms.insertNodes(
      editor,
      {
        type,
        children: [{ text: "" }],
      },
    );
  }

  if (event.key == "/" && !event.ctrlKey) {
    setCoords({
      ...{ x: event.target.clientLeft, y: event.target.clientHeight },
    });
    setCommandBox(true);
  }
};

export default onKeyDown;
