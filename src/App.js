import Button from "./components/UI/Button";
import { BUTTONS } from "./buttons";

function App() {
  return (
    <div className="w-full h-screen flex items-center bg-theme1-mainColor">
      <div className="flex flex-col w-[540px] mx-auto">
        <div className="flex justify-between mb-8">
          <p className="text-theme1-numbers text-calc">calc</p>
          <div className="text-theme1-numbers text-calc">switch</div>
        </div>
        <div className="w-full bg-theme1-field text-right rounded-[10px] pt-10 pb-9 px-8 mb-6 ">
          <p className="text-h1 text-theme1-numbers">{1}</p>
        </div>
        <div className=" p-8 bg-theme1-fieldButtons rounded-[10px]">
          <div className="grid grid-cols-4 gap-6 grid-rows-5">
            {BUTTONS.map((button, index) => (
              <Button
                key={index}
                pressFunction={button.pressFunction}
                textStyle={button.textStyle}
                BGcolor={button.BGColor}
                shadowColor={button.shadowColor}
                hoverColor={button.hoverColor}
                doubleWidth={button.doubleWidth}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
