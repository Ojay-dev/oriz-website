import React from "react";

type StoryTagProps = {
  text: string;
  color: string;
  bgColor: string;
};

const StoryTag: React.FC<StoryTagProps> = ({ text, color, bgColor }) => {
  const textColor = `text-[${color}]` || "text-[#BD4355]";
  const backgroundColor = `bg-[${bgColor}]` || "bg-[#F5DADE]";
  const dotColor = `bg-[${color}]` || "bg-[#BD4355]";

  return (
    <div className={`flex w-fit items-center gap-x-2 rounded-[50px] ${backgroundColor} px-3 py-2 text-sm ${textColor}`}>
      <span className={`block h-2.5 w-2.5 rounded-full ${dotColor}`} />
      <span>{text}</span>
    </div>
  );
};

export default StoryTag;
