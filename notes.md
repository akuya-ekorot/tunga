# onEnter Algorithm.

This algorithm describes the process of adding a new node to the editor when the user presses the enter key while typing.

## Process

1. Add appropriate descendant node after current node.
  1. Get the type of the immediate parent node.
  2. Insert next logical node after.
  3. Set selection to new node.
2. Handle new page if necessary.
  1. If height of page has exceeded the A4 height dimmension
    - Pick last node of the page.
    - If there is a next page.
      - Shift all other nodes that were present in the page one level down.
    - Else
      - Create a new page.
    - Insert the last node at the start of the new page.
