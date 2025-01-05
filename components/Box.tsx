import React from "react";

interface BoxProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  date: string;
}

const Box: React.FC<BoxProps> = ({ icon, title, description, date }) => {
  return (
    <div className="p-4 border rounded-lg shadow-sm hover:shadow-md flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <div className="text-2xl">{icon}</div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-sm text-gray-600">{description}</p>
      <p className="text-xs text-gray-400 mt-auto">{date}</p>
    </div>
  );
};

export default Box;
