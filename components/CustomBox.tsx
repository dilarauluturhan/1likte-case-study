import React from "react";

interface BoxProps {
  icon: string;
  title: string;
  description: string;
  date: string;
}

const Box: React.FC<BoxProps> = ({ icon, title, description, date }) => {
  return (
    <div className="border border-[#D9D9D9] hover:border-[#1C1C1E] rounded-[10px] p-5 flex flex-col flex-wrap items-start justify-start gap-y-2.5 mx-4 md:mx-0">
      <div>
        <img src={`/icons/${icon}.svg`} alt={title} width={29} height={28} />
      </div>
      <h3 className="text-[16px] font-medium">{title}</h3>
      <p className="font-normal text-[#414141] text-[16px]">{description}</p>
      <p className="text-[13px] text-[#9A9A9A]">{date}</p>
    </div>
  );
};

export default Box;
