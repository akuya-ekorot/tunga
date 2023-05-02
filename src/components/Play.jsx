import React from "react";

const Play = React.forwardRef((props, ref) => {
  return (
    <div
      {...props.attributes}
      className="w-[595px] h-[842px] border border-slate-300 bg-white"
    >
      <div
        ref={ref}
        className=" pl-[108px] pr-[62px] pt-[72px] pb-[84px] "
      >
        {props.children}
      </div>
    </div>
  );
});

export default Play;
