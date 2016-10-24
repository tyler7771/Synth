import React from 'react';

const NoteKey = ({note, pressed}) => {
  let pressedClass = pressed ? "pressed" : "";
  return (
    <p className={pressedClass}>{note}</p>
  );
};

export default NoteKey;
