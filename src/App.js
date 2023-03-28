/* eslint-disable default-case */
import { useReducer } from "react";
import Button from "./components/UI/Button";
import OperationButton from "./components/UI/OperationButton";
import Slider from "./components/UI/Slider";

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
      if (state.currentOperand && state.currentOperand.length > 14)
        return state;
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: payload.digit,
          overwrite: false,
        };
      }
      if (payload.digit === "0" && state.currentOperand === "0") return state;
      if (payload.digit === "." && state.currentOperand.includes("."))
        return state;
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
        displayDigit: true,
      };
    case ACTIONS.CHOOSE_OPERATION:
      if (state.currentOperand == null && state.previousOperand == null) {
        return state;
      }

      if (state.currentOperand == null) {
        return {
          ...state,
          operation: payload.operation,
        };
      }

      if (state.previousOperand == null) {
        return {
          ...state,
          operation: payload.operation,
          previousOperand: state.currentOperand,
          digit: state.currentOperand,
          currentOperand: null,
          displayDigit: true,
        };
      }

      return {
        ...state,
        previousOperand: evaluate(state),
        operation: payload.operation,
        currentOperand: null,
        displayDigit: false,
      };

    case ACTIONS.RESET:
      return {};
    case ACTIONS.DELETE_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          overwrite: false,
          currentOperand: null,
        };
      }
      if (state.currentOperand == null) return state;
      if (state.currentOperand.length === 1) {
        return { ...state, currentOperand: null };
      }

      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      };
    case ACTIONS.EVALUATE:
      if (
        state.operation == null ||
        state.currentOperand == null ||
        state.previousOperand == null
      ) {
        return state;
      }
      return {
        ...state,
        overwrite: true,
        previousOperand: null,
        operation: null,
        currentOperand: evaluate(state),
      };
  }
}

function evaluate({ currentOperand, previousOperand, operation }) {
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return "";
  let computation = "";
  switch (operation) {
    case "+":
      computation = prev + current;
      break;
    case "-":
      computation = prev - current;
      break;
    case "x":
      computation = prev * current;
      break;
    case "/":
      computation = prev / current;
      break;
  }
  return computation.toString();
}

function App() {
  const [
    { currentOperand, previousOperand, operation, displayDigit, digit },
    dispatch,
  ] = useReducer(reducer, {});

  function handleToggleChange(position) {
    console.log("kflsdjf");
  }

  return (
    <div className="w-full h-screen flex items-center">
      <div className="flex flex-col w-[540px] mx-auto">
        <div className="flex justify-between mb-8 items-end">
          <p className="text-theme1-numbers text-calc">calc</p>

          <div className="flex items-end justify-center">
            <p className="text-theme1-numbers text-theme flex mb-[6px] mr-[26px]">
              THEME
            </p>
            <div className="flex flex-col items-center gap-2 text-theme1-numbers">
              <p className="flex gap-[10px] ml-1.5">
                <span className="w-[12px] h-[13px]">1</span>
                <span className="w-[12px] h-[13px]">2</span>
                <span className="w-[12px] h-[13px]">3</span>
              </p>
              <Slider />
            </div>
          </div>
        </div>
        <div className="w-full bg-theme1-field text-right rounded-[10px] pt-10 pb-9 px-8 mb-6 min-h-[128px]">
          <p className="text-h1 text-theme1-numbers">
            {displayDigit
              ? currentOperand == null
                ? digit
                : currentOperand
              : previousOperand}
          </p>
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
            <button
              onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}
              className="bg-theme1-resetdel hover:bg-theme1-darkHover rounded-[10px] flex justify-center hover:cursor-pointer items-center shadow-[inset_0_-4px_0_rgba(65,78,115)]"
            >
              <p className="text-reset text-theme1-numbers text-center my-3">
                DEL
              </p>
            </button>
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
            <OperationButton operation="+" dispatch={dispatch} />
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
            <OperationButton operation="-" dispatch={dispatch} />
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
            <OperationButton operation="/" dispatch={dispatch} />
            <OperationButton operation="x" dispatch={dispatch} />
            <button
              className="bg-theme1-resetdel col-span-2 hover:bg-theme1-darkHover rounded-[10px] flex justify-center hover:cursor-pointer items-center shadow-[inset_0_-4px_0_rgba(65,78,115)]"
              onClick={() => dispatch({ type: ACTIONS.RESET })}
            >
              <p className="text-reset text-theme1-numbers text-center my-3">
                RESET
              </p>
            </button>
            <button
              className="bg-theme1-gleich col-span-2 hover:bg-theme1-redHover rounded-[10px] flex justify-center hover:cursor-pointer items-center shadow-[inset_0_-4px_0_rgba(147,38,26)]"
              onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
            >
              <p className="text-reset text-theme1-numbers text-center my-3">
                =
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
