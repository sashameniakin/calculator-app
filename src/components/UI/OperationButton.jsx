import { ACTIONS } from "../../App";

export default function OperationButton({ dispatch, operation, position }) {
  return (
    <button
      className={`${
        position === 2
          ? "text-theme2-pureBlack"
          : position === 3
          ? "text-theme3-yellow"
          : "text-theme1-digit"
      }  text-calc desktop:text-h2  ${
        position === 2
          ? "bg-theme2-button"
          : position === 3
          ? "bg-theme3-button"
          : "bg-theme1-button"
      } rounded-[10px] hover:cursor-pointer hover:bg-theme1-whiteHover ${
        position === 2
          ? "shadow-[inset_0_-4px_0_rgba(167,158,145)]"
          : position === 3
          ? "shadow-[inset_0_-4px_0_rgba(136,28,158)]"
          : "shadow-[inset_0_-4px_0_rgba(179,164,151)]"
      }  
      ${
        position === 2
          ? "hover:bg-theme2-digitHover"
          : position === 3
          ? "hover:bg-theme3-digitHover"
          : "hover:bg-theme1-digitHover"
      }
      `}
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }
    >
      {operation}
    </button>
  );
}
