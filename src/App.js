/* eslint-disable default-case */
import { useReducer, useState } from "react";
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

  const [position, setPosition] = useState(1);

  return (
    <div
      className={`w-full h-screen flex items-center ${
        position === 2
          ? "bg-theme2-mainColor"
          : position === 3
          ? "bg-theme3-mainColor"
          : "bg-theme1-mainColor"
      } `}
    >
      <div className="flex flex-col w-[327px] mx-auto desktop:w-[540px] desktop:mx-auto">
        <div className="flex justify-between mb-8 items-end">
          <p
            className={`${
              position === 2
                ? "text-theme2-pureBlack"
                : position === 3
                ? "text-theme3-yellow"
                : "text-theme1-pureWhite"
            } text-calc`}
          >
            calc
          </p>

          <div className="flex items-end justify-center">
            <p
              className={`${
                position === 2
                  ? "text-theme2-pureBlack"
                  : position === 3
                  ? "text-theme3-yellow"
                  : "text-theme1-pureWhite"
              }  text-theme flex mb-[6px] mr-[26px]`}
            >
              THEME
            </p>
            <div className="flex flex-col items-center gap-2">
              <p
                className={`flex gap-[10px] ml-1.5 ${
                  position === 2
                    ? "text-theme2-pureBlack"
                    : position === 3
                    ? "text-theme3-yellow"
                    : "text-theme1-pureWhite"
                } `}
              >
                <span className="w-[12px] h-[13px]">1</span>
                <span className="w-[12px] h-[13px]">2</span>
                <span className="w-[12px] h-[13px]">3</span>
              </p>
              <Slider position={position} setPosition={setPosition} />
            </div>
          </div>
        </div>
        <div
          className={`w-full ${
            position === 2
              ? "bg-theme2-field"
              : position === 3
              ? "bg-theme3-field"
              : "bg-theme1-field"
          } text-right rounded-[10px] pt-[29px] pb-[22px] px-6 desktop:pt-10 desktop:pb-9 desktop:px-8 mb-6 min-h-[88px] desktop:min-h-[128px]`}
        >
          <p
            className={`text-h2 desktop:text-h1 ${
              position === 2
                ? "text-theme2-pureBlack"
                : position === 3
                ? "text-theme3-yellow"
                : "text-theme1-pureWhite"
            }`}
          >
            {displayDigit
              ? currentOperand == null
                ? digit
                : currentOperand
              : previousOperand}
          </p>
        </div>
        <div
          className={`p-4  desktop:p-8 ${
            position === 2
              ? "bg-theme2-fieldButtons"
              : position === 3
              ? "bg-theme3-fieldButtons"
              : "bg-theme1-fieldButtons"
          } rounded-[10px]`}
        >
          <div className="grid grid-cols-4 gap-3 desktop:gap-6 grid-rows-5">
            <Button
              digit="7"
              textStyle={`${
                position === 2
                  ? "text-theme2-pureBlack"
                  : position === 3
                  ? "text-theme3-yellow"
                  : "text-theme1-digit"
              } text-calc desktop:text-h2`}
              BGcolor={`
              ${
                position === 2
                  ? "bg-theme2-button"
                  : position === 3
                  ? "bg-theme3-button"
                  : "bg-theme1-button"
              }`}
              dispatch={dispatch}
              position={position}
            />
            <Button
              digit="8"
              textStyle={`${
                position === 2
                  ? "text-theme2-pureBlack"
                  : position === 3
                  ? "text-theme3-yellow"
                  : "text-theme1-digit"
              } text-calc desktop:text-h2`}
              BGcolor={`
              ${
                position === 2
                  ? "bg-theme2-button"
                  : position === 3
                  ? "bg-theme3-button"
                  : "bg-theme1-button"
              }`}
              dispatch={dispatch}
              position={position}
            />
            <Button
              digit="9"
              textStyle={`${
                position === 2
                  ? "text-theme2-pureBlack"
                  : position === 3
                  ? "text-theme3-yellow"
                  : "text-theme1-digit"
              } text-calc desktop:text-h2`}
              BGcolor={`
              ${
                position === 2
                  ? "bg-theme2-button"
                  : position === 3
                  ? "bg-theme3-button"
                  : "bg-theme1-button"
              }`}
              dispatch={dispatch}
              position={position}
            />
            <button
              onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}
              className={`${
                position === 2
                  ? "bg-theme2-resetdel"
                  : position === 3
                  ? "bg-theme3-resetdel"
                  : "bg-theme1-resetdel"
              } rounded-[10px] flex justify-center hover:cursor-pointer items-center  ${
                position === 2
                  ? "shadow-[inset_0_-4px_0_rgba(27,96,102)]"
                  : position === 3
                  ? "shadow-[inset_0_-4px_0_rgba(190,21,244)]"
                  : "shadow-[inset_0_-4px_0_rgba(65,78,115)]"
              }
              ${
                position === 2
                  ? "hover:bg-theme2-resetdelHover"
                  : position === 3
                  ? "hover:bg-theme3-resetdelHover"
                  : "hover:bg-theme1-resetdelHover"
              } 
              `}
            >
              <p className="text-resetMobile desktop:text-reset text-theme1-pureWhite text-center my-3">
                DEL
              </p>
            </button>
            <Button
              digit="4"
              textStyle={`${
                position === 2
                  ? "text-theme2-pureBlack"
                  : position === 3
                  ? "text-theme3-yellow"
                  : "text-theme1-digit"
              } text-calc desktop:text-h2`}
              BGcolor={`
              ${
                position === 2
                  ? "bg-theme2-button"
                  : position === 3
                  ? "bg-theme3-button"
                  : "bg-theme1-button"
              }`}
              dispatch={dispatch}
              position={position}
            />
            <Button
              digit="5"
              textStyle={`${
                position === 2
                  ? "text-theme2-pureBlack"
                  : position === 3
                  ? "text-theme3-yellow"
                  : "text-theme1-digit"
              } text-calc desktop:text-h2`}
              BGcolor={`
              ${
                position === 2
                  ? "bg-theme2-button"
                  : position === 3
                  ? "bg-theme3-button"
                  : "bg-theme1-button"
              }`}
              dispatch={dispatch}
              position={position}
            />
            <Button
              digit="6"
              textStyle={`${
                position === 2
                  ? "text-theme2-pureBlack"
                  : position === 3
                  ? "text-theme3-yellow"
                  : "text-theme1-digit"
              } text-calc desktop:text-h2`}
              BGcolor={`
              ${
                position === 2
                  ? "bg-theme2-button"
                  : position === 3
                  ? "bg-theme3-button"
                  : "bg-theme1-button"
              }`}
              dispatch={dispatch}
              position={position}
            />
            <OperationButton
              operation="+"
              dispatch={dispatch}
              position={position}
            />
            <Button
              digit="1"
              textStyle={`${
                position === 2
                  ? "text-theme2-pureBlack"
                  : position === 3
                  ? "text-theme3-yellow"
                  : "text-theme1-digit"
              } text-calc desktop:text-h2`}
              BGcolor={`
              ${
                position === 2
                  ? "bg-theme2-button"
                  : position === 3
                  ? "bg-theme3-button"
                  : "bg-theme1-button"
              }`}
              dispatch={dispatch}
              position={position}
            />
            <Button
              digit="2"
              textStyle={`${
                position === 2
                  ? "text-theme2-pureBlack"
                  : position === 3
                  ? "text-theme3-yellow"
                  : "text-theme1-digit"
              } text-calc desktop:text-h2`}
              BGcolor={`
              ${
                position === 2
                  ? "bg-theme2-button"
                  : position === 3
                  ? "bg-theme3-button"
                  : "bg-theme1-button"
              }`}
              dispatch={dispatch}
              position={position}
            />
            <Button
              digit="3"
              textStyle={`${
                position === 2
                  ? "text-theme2-pureBlack"
                  : position === 3
                  ? "text-theme3-yellow"
                  : "text-theme1-digit"
              } text-calc desktop:text-h2`}
              BGcolor={`
              ${
                position === 2
                  ? "bg-theme2-button"
                  : position === 3
                  ? "bg-theme3-button"
                  : "bg-theme1-button"
              }`}
              dispatch={dispatch}
              position={position}
            />
            <OperationButton
              operation="-"
              dispatch={dispatch}
              position={position}
            />
            <Button
              digit="."
              textStyle={`${
                position === 2
                  ? "text-theme2-pureBlack"
                  : position === 3
                  ? "text-theme3-yellow"
                  : "text-theme1-digit"
              } text-calc desktop:text-h2`}
              BGcolor={`
              ${
                position === 2
                  ? "bg-theme2-button"
                  : position === 3
                  ? "bg-theme3-button"
                  : "bg-theme1-button"
              }`}
              dispatch={dispatch}
              position={position}
            />
            <Button
              digit="0"
              textStyle={`${
                position === 2
                  ? "text-theme2-pureBlack"
                  : position === 3
                  ? "text-theme3-yellow"
                  : "text-theme1-digit"
              } text-calc desktop:text-h2`}
              BGcolor={`
              ${
                position === 2
                  ? "bg-theme2-button"
                  : position === 3
                  ? "bg-theme3-button"
                  : "bg-theme1-button"
              }`}
              dispatch={dispatch}
              position={position}
            />
            <OperationButton
              operation="/"
              dispatch={dispatch}
              position={position}
            />
            <OperationButton
              operation="x"
              dispatch={dispatch}
              position={position}
            />
            <button
              className={`${
                position === 2
                  ? "bg-theme2-resetdel"
                  : position === 3
                  ? "bg-theme3-resetdel"
                  : "bg-theme1-resetdel"
              }  col-span-2 rounded-[10px] flex justify-center hover:cursor-pointer items-center ${
                position === 2
                  ? "shadow-[inset_0_-4px_0_rgba(27,96,102)]"
                  : position === 3
                  ? "shadow-[inset_0_-4px_0_rgba(190,21,244)]"
                  : "shadow-[inset_0_-4px_0_rgba(65,78,115)]"
              }
              ${
                position === 2
                  ? "hover:bg-theme2-resetdelHover"
                  : position === 3
                  ? "hover:bg-theme3-resetdelHover"
                  : "hover:bg-theme1-resetdelHover"
              } 
              `}
              onClick={() => dispatch({ type: ACTIONS.RESET })}
            >
              <p
                className={`text-resetMobile desktop:text-reset ${
                  position === 2
                    ? "text-theme2-pureWhite"
                    : position === 3
                    ? "text-theme3-pureWhite"
                    : "text-theme1-pureWhite"
                } text-center my-3`}
              >
                RESET
              </p>
            </button>
            <button
              className={`${
                position === 2
                  ? "bg-theme2-gleich"
                  : position === 3
                  ? "bg-theme3-gleich"
                  : "bg-theme1-gleich"
              } col-span-2 rounded-[10px] flex justify-center hover:cursor-pointer items-center ${
                position === 2
                  ? "shadow-[inset_0_-4px_0_rgba(135,57,1)]"
                  : position === 3
                  ? "shadow-[inset_0_-4px_0_rgba(108,249,241)]"
                  : "shadow-[inset_0_-4px_0_rgba(147,38,26)]"
              } 
              ${
                position === 2
                  ? "hover:bg-theme2-gleichHover"
                  : position === 3
                  ? "hover:bg-theme3-gleichHover"
                  : "hover:bg-theme1-gleichHover"
              } 
              `}
              onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
            >
              <p
                className={`text-resetMobile desktop:text-reset ${
                  position === 2
                    ? "text-theme2-pureWhite"
                    : position === 3
                    ? "text-theme3-pureBlack"
                    : "text-theme1-pureWhite"
                } text-center my-3`}
              >
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
