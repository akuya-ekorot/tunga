/**
 * toggleElements - toggles through the different elements
 * @param element - 
 * @param setElement - 
 */
const toggleElements = (setElement, element) => {
  const elements = [
    "action",
    "character",
    "dialogue",
    "end",
    "fadeIn",
    "fadeOut",
    "note",
    "parentheticals",
    "scene",
    "sceneDescription",
    "screenPlayTitle",
    "transition",
  ];

  setElement((prev) => {
    if (prev < elements.length - 1) {
      return prev + 1;
    }
    return 0;
  });

  return elements[element];
};

export default toggleElements;
