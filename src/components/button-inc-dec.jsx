import React from "react";

export const ButtonIncDec = ({ imitateur, value, text }) => {
  const param = text.toLowerCase().replace(" ", "_");
  return (
    <div>
      <div className="flex space-x-1 items-center">
        <label className="font-lg font-bold" htmlFor={param}>
          {text}
        </label>
        <button
          className="w-8 h-8 bg-orange-400 text-xl rounded-md font-extrabold"
          type="button"
          onClick={() => imitateur(value - 10)}
        >
          -
        </button>
        <input
          id={param}
          type="number"
          value={value}
          onChange={(e) => imitateur(e.target.valueAsNumber)}
          className="h-8 rounded-md bg-white w-24 p-2 text-xl text-center"
          name={param}
        />
        <button
          className="w-8 h-8 bg-orange-500 text-xl rounded-md font-extrabold"
          type="button"
          onClick={() => imitateur(value + 10)}
        >
          +
        </button>
      </div>
    </div>
  );
};
