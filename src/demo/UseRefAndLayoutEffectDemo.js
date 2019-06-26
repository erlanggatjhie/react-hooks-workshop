import React from "react";

const UseRefDemoAndLayoutEffectDemo = () => {
  const [width, setWidth] = React.useState(0);
  const el = React.useRef(null);

  React.useLayoutEffect(() => {
    if (el.current) {
      setWidth(el.current.getBoundingClientRect().width);
    }
  }, [el.current]);

  return <div ref={el}>Width of this element is {width}px</div>;
};

export default UseRefDemoAndLayoutEffectDemo;
