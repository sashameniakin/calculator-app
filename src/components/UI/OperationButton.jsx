import { ACTIONS } from "../../App";

export default function OperationButton({ dispatch, operation }) {
  return (
    <button
      className="text-h2 bg-theme1-button rounded-[10px] hover:cursor-pointer hover:bg-theme1-whiteHover shadow-[inset_0_-4px_0_rgba(179,164,151)]"
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }
    >
      {operation}
    </button>
  );
}
