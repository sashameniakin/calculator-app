import { ACTIONS } from "../../App";

export default function Button({
  big,
  textStyle,
  BGcolor,
  shadowColor,
  shadowColorDark,
  shadowColorRed,
  white,
  dark,
  red,
  dispatch,
  digit,
}) {
  return (
    <button
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
      className={`${BGcolor} ${big} ${
        white
          ? "hover:bg-theme1-whiteHover"
          : dark
          ? "hover:bg-theme1-darkHover"
          : red
          ? "hover:bg-theme1-redHover"
          : ""
      } rounded-[10px] flex justify-center hover:cursor-pointer items-center ${
        shadowColor
          ? "shadow-[inset_0_-4px_0_rgba(179,164,151)]"
          : shadowColorDark
          ? "shadow-[inset_0_-4px_0_rgba(65,78,115)]"
          : shadowColorRed
          ? "shadow-[inset_0_-4px_0_rgba(147,38,26)]"
          : ""
      } `}
    >
      <p className={`${textStyle} text-center my-3`}>{digit}</p>
    </button>
  );
}

//pt-[3px] mt-[13px] mb-[11px] w-[74px] h-[40px]
