import {
  CharacterBlock,
  DefaultBlock,
  DialogueBlock,
  FadeInBlock,
  FadeOutBlock,
  NoteBlock,
  ParentheticalsBlock,
  SceneBlock,
  SceneDescriptionBlock,
  ScreenPlayTitle,
  TransitionBlock,
} from "@/components/blocks";

const renderElement = (props) => {
  const elements = {
    action: <DefaultBlock {...props} />,
    character: <CharacterBlock {...props} />,
    dialogue: <DialogueBlock {...props} />,
    fadeIn: <FadeInBlock {...props} />,
    fadeOut: <FadeOutBlock {...props} />,
    note: <NoteBlock {...props} />,
    parentheticals: <ParentheticalsBlock {...props} />,
    scene: <SceneBlock {...props} />,
    sceneDescription: <SceneDescriptionBlock {...props} />,
    screenPlayTitle: <ScreenPlayTitle {...props} />,
    transition: <TransitionBlock {...props} />,
  };

  return elements[props.element.type];
};

export default renderElement;
