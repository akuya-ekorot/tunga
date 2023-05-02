const getBlockType = (parent) => {
  switch (parent.type) {
    case "character":
      return "dialogue";
    case "dialogue":
      return "character";
    case "fadeIn":
      return "scene";
    case "fadeOut":
      return "end";
    case "fadeOut":
      return "end";
    case "note":
      return "sceneDescription";
    case "parentheticals":
      return "dialogue";
    case "scene":
      return "sceneDescription";
    case "screenPlayTitle":
      return "fadeIn";
    case "transition":
      return "scene";
    default:
      return parent.type;
  }
}

export default getBlockType;
