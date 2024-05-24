import React, { useEffect, useRef } from 'react';

const TypingAnimation = ({ text }) => {
  const typingTextRef = useRef(null);

  useEffect(() => {
    const devTypeText = text;

    let i = 0;
    let isTag;
    let newText;

    const type = () => {
      newText = devTypeText.slice(0, ++i);
      if (newText === devTypeText) return;
      typingTextRef.current.innerHTML = newText + `<span class='blinker'>&#32;</span>`;
      const char = newText.slice(-1);
      if (char === "<") isTag = true;
      if (char === ">") isTag = false;
      if (isTag) return type();
      setTimeout(type, 38);
    }

    type();
  }, [text]);

  return (
    <div ref={typingTextRef}></div>
  );
}

export default TypingAnimation;
