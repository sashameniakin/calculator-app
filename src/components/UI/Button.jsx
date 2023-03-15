import { useState } from "react";

export default function Button({
  pressFunction,
  textStyle,
  BGcolor,
  shadowColor,
  hoverColor,
  doubleWidth,
}) {
  /*   const initialState = 0;
  const [display, setDisplay] = useState(initialState); */

  /*   function handleButton() {
    if (number === "RESET") {
      setDisplay(initialState);
      console.log(display);
    } else {
      setDisplay(display + number);
      console.log(display);
    }
  } */

  return (
    <button
      /*  onClick={() => setDisplay(display + number)} */

      className={`${BGcolor} ${doubleWidth ? "col-span-2" : ""} ${
        hoverColor === "white"
          ? "hover:bg-theme1-whiteHover"
          : hoverColor === "dark"
          ? "hover:bg-theme1-darkHover"
          : hoverColor === "red"
          ? "hover:bg-theme1-redHover"
          : ""
      } rounded-[10px] flex justify-center hover:cursor-pointer items-center ${
        shadowColor === "light"
          ? "shadow-[inset_0_-4px_0_rgba(179,164,151)]"
          : shadowColor === "dark"
          ? "shadow-[inset_0_-4px_0_rgba(65,78,115)]"
          : shadowColor === "red"
          ? "shadow-[inset_0_-4px_0_rgba(147,38,26)]"
          : ""
      } `}
    >
      <p className={`${textStyle} text-center my-3`}>{pressFunction}</p>
    </button>
  );
}

//pt-[3px] mt-[13px] mb-[11px] w-[74px] h-[40px]
