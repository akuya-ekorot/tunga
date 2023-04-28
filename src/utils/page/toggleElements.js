/**
 * toggleElements - toggles through the different elements
 * @param element - 
 * @param setElement - 
 */
const toggleElements = (setElement, element) => {
  const elements = [
    "screenPlayTitle",
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
};

export default toggleElements;
