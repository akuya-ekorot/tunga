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
const onKeyDown = (event, editor, Editor, element, setElement) => {
  const { selection } = editor;
  const [currentNode] = Editor.nodes(editor, { at: selection });
  const [parent] = Editor.parent(editor, currentNode[0].selection);
  const type = getBlockType(parent);
  const pageCount = editor.children.length;
  const nodeCountInPage =
    editor.children[selection.anchor.path[0]].children.length;

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

    /* add appropriate descendant node after current node */
    Transforms.insertNodes(editor, {
      type,
      children: [
        {
          text: "",
        },
      ],
    });

    /* handle new page if necessary  */
    if (nodeCountInPage > 56) {
      /* add new page if there is no next page */
      if (editor.children.length == selection.anchor.path[0] + 1) {
        Transforms.insertNodes(
          editor,
          {
            type: "play",
            children: [{ text: "" }],
          },
          {
            at: [pageCount],
          }
        );
      }

      Transforms.moveNodes(editor, {
        at: [selection.anchor.path[0], nodeCountInPage],
        to: [selection.anchor.path[0] + 1, 0],
      });
    }
  }
};

export default onKeyDown;
