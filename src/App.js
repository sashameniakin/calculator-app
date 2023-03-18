import { useReducer } from "react";
import Button from "./components/UI/Button";
import OperationButton from "./components/UI/OperationButton";

export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  RESET: "reset",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
};

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (payload.digit === "0" && state.currentOperand === "0") return state;
      if (payload.digit === "." && state.currentOperand.includes("."))
        return state;
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      };
    case ACTIONS.RESET:
      return {};
  }
}

function App() {
  const [{ currentOperand }, dispatch] = useReducer(reducer, {});

  return (
    <div className="w-full h-screen flex items-center">
      <div className="flex flex-col w-[540px] mx-auto">
        <div className="flex justify-between mb-8">
          <p className="text-theme1-numbers text-calc">calc</p>
          <div className="text-theme1-numbers text-calc">switch</div>
        </div>
        <div className="w-full bg-theme1-field text-right rounded-[10px] pt-10 pb-9 px-8 mb-6 ">
          <p className="text-h1 text-theme1-numbers">{currentOperand}</p>
        </div>
        <div className=" p-8 bg-theme1-fieldButtons rounded-[10px]">
          <div className="grid grid-cols-4 gap-6 grid-rows-5">
            <Button
              digit="7"
              textStyle="text-h2"
              BGcolor="bg-theme1-button"
              shadowColor
              white
              display
              dispatch={dispatch}
            />
            <Button
              digit="8"
              textStyle="text-h2"
              BGcolor="bg-theme1-button"
              shadowColor
              white
              dispatch={dispatch}
            />
            <Button
              digit="9"
              textStyle="text-h2"
              BGcolor="bg-theme1-button"
              shadowColor
              white
              dispatch={dispatch}
            />
            <Button
              number="DEL"
              textStyle="text-reset text-theme1-numbers"
              BGcolor="bg-theme1-resetdel"
              shadowColorDark
              dark
            />
            <Button
              digit="4"
              textStyle="text-h2"
              BGcolor="bg-theme1-button"
              shadowColor
              white
              dispatch={dispatch}
            />
            <Button
              digit="5"
              textStyle="text-h2"
              BGcolor="bg-theme1-button"
              shadowColor
              white
              dispatch={dispatch}
            />
            <Button
              digit="6"
              textStyle="text-h2"
              BGcolor="bg-theme1-button"
              shadowColor
              white
              dispatch={dispatch}
            />
            <OperationButton
              operation="+"
              textStyle="text-h2"
              BGcolor="bg-theme1-button"
              shadowColor
              white
              dispatch={dispatch}
            />
            <Button
              digit="1"
              textStyle="text-h2"
              BGcolor="bg-theme1-button"
              shadowColor
              white
              dispatch={dispatch}
            />
            <Button
              digit="2"
              textStyle="text-h2"
              BGcolor="bg-theme1-button"
              shadowColor
              white
              dispatch={dispatch}
            />
            <Button
              digit="3"
              textStyle="text-h2"
              BGcolor="bg-theme1-button"
              shadowColor
              white
              dispatch={dispatch}
            />
            <OperationButton
              operation="-"
              textStyle="text-h2"
              BGcolor="bg-theme1-button"
              shadowColor
              white
              dispatch={dispatch}
            />
            <Button
              digit="."
              textStyle="text-h2"
              BGcolor="bg-theme1-button"
              shadowColor
              white
              dispatch={dispatch}
            />
            <Button
              digit="0"
              textStyle="text-h2"
              BGcolor="bg-theme1-button"
              shadowColor
              white
              dispatch={dispatch}
            />
            <OperationButton
              operation="/"
              textStyle="text-h2"
              BGcolor="bg-theme1-button"
              shadowColor
              white
              dispatch={dispatch}
            />
            <OperationButton
              operation="x"
              textStyle="text-h2"
              BGcolor="bg-theme1-button"
              shadowColor
              white
              dispatch={dispatch}
            />
            <button
              className="bg-theme1-resetdel col-span-2 hover:bg-theme1-darkHover rounded-[10px] flex justify-center hover:cursor-pointer items-center shadow-[inset_0_-4px_0_rgba(65,78,115)]"
              onClick={() => dispatch({ type: ACTIONS.RESET })}
            >
              <p className="text-reset text-theme1-numbers text-center my-3">
                RESET
              </p>
            </button>
            <Button
              number="="
              textStyle="text-reset text-theme1-numbers"
              BGcolor="bg-theme1-gleich"
              big="col-span-2"
              shadowColorRed
              red
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
