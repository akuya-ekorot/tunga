import { Transforms } from "slate";
import { ReactEditor } from "slate-react";
import { BaseEditor } from "slate";

/**
 * @description
 * handles the adding of a page when content exceeds the height
 * of a page.
 *
 * @param editor {BaseEditor & ReactEditor} - the editor object
 * @param type {string} - corresponds with the name of the block element
 */
const handleAddPage = (editor, type) => {
  Transforms.insertNodes(editor,
    {
      type: "play",
      children: [{ type, children: [{ text: "" }] }]
    },
    { at: [editor.children.length] }
  );

  Transforms.select(editor, [editor.children.length - 1, 0, 0])
}

export default handleAddPage;
