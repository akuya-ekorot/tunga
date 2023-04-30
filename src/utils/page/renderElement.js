import {
  CharacterBlock,
  DefaultBlock,
  DialogueBlock,
  EndBlock,
  FadeInBlock,
  FadeOutBlock,
  NoteBlock,
  ParentheticalsBlock,
  SceneBlock,
  ScreenPlayTitle,
  TransitionBlock,
} from "@/components/blocks";

const renderElement = (props) => {
  const elements = {
    action: <DefaultBlock {...props} />,
    character: <CharacterBlock {...props} />,
    dialogue: <DialogueBlock {...props} />,
    end: <EndBlock {...props} />,
    fadeIn: <FadeInBlock {...props} />,
    fadeOut: <FadeOutBlock {...props} />,
    note: <NoteBlock {...props} />,
    parentheticals: <ParentheticalsBlock {...props} />,
    scene: <SceneBlock {...props} />,
    sceneDescription: <DefaultBlock {...props} />,
    screenPlayTitle: <ScreenPlayTitle {...props} />,
    transition: <TransitionBlock {...props} />,
  };

  return elements[props.element.type];
};

export default renderElement;
