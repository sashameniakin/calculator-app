import { ACTIONS } from "../../App";

export default function Button({
  digit,
  textStyle,
  BGcolor,
  dispatch,
  position,
}) {
  return (
    <button
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
      className={`${BGcolor} ${
        position === 2
          ? "hover:bg-theme2-digitHover"
          : position === 3
          ? "hover:bg-theme3-digitHover"
          : "hover:bg-theme1-digitHover"
      } rounded-[10px] flex justify-center hover:cursor-pointer items-center 
      ${
        position === 2
          ? "shadow-[inset_0_-4px_0_rgba(167,158,145)]"
          : position === 3
          ? "shadow-[inset_0_-4px_0_rgba(136,28,158)]"
          : "shadow-[inset_0_-4px_0_rgba(179,164,151)]"
      } 
      h-[64px]`}
    >
      <p className={`${textStyle} text-center my-3`}>{digit}</p>
    </button>
  );
}
