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
  pageRef,
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
      case "character":
        type = "dialogue";
        break;
      case "dialogue":
        Transforms.insertNodes(editor, { type: "space", children: [{ text: "" }] });
        type = "character";
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
        break;
      case "transition":
        type = "scene";
        break;
      default:
        type = parent.type;
        break;
    }

    if (pageRef.current.offsetHeight > 842) {
      Transforms.insertNodes(editor,
        {
          type: "play",
          children: [
            {
              type,
              children: [{ text: "" }],
            },
          ]
        }
      );
    };

    Transforms.insertNodes(editor, { type, children: [{ text: "" }] });
  }
};

export default onKeyDown;
