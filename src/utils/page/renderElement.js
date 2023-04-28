import {
  ActionBlock,
  FadeIn,
  CharacterBlock,
  DialogueBlock,
  NoteBlock,
  ParentheticalsBlock,
  SceneBlock,
  SceneDescriptionBlock,
  ScreenPlayTitle,
  TransitionBlock,
} from "@/components/blocks";

const renderElement = (props) => {
  const elements = {
    action: <ActionBlock {...props} />,
    fadeIn: <FadeIn {...props} />,
    character: <CharacterBlock {...props} />,
    dialogue: <DialogueBlock {...props} />,
    note: <NoteBlock {...props} />,
    parentheticals: <ParentheticalsBlock {...props} />,
    scene: <SceneBlock {...props} />,
    screenPlayTitle: <ScreenPlayTitle {...props} />,
    sceneDescription: <SceneDescriptionBlock {...props} />,
    transition: <TransitionBlock {...props} />,
  };

  return elements[props.element.type];
};

export default renderElement;
