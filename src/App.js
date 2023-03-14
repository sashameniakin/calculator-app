import Button from "./components/UI/Button";

function App() {
  return (
    <div className="w-full h-screen flex items-center bg-theme1-mainColor">
      <div className="flex flex-col w-[540px] mx-auto">
        <div className="flex justify-between mb-8">
          <p className="text-theme1-numbers text-calc">calc</p>
          <div className="text-theme1-numbers text-calc">switch</div>
        </div>
        <div className="w-full bg-theme1-field text-right rounded-[10px] pt-10 pb-9 px-8 mb-6 ">
          <p className="text-h1 text-theme1-numbers">399,921</p>
        </div>
        <div className=" p-8 bg-theme1-fieldButtons rounded-[10px]">
          <div className="grid grid-cols-4 gap-6 grid-rows-5">
            <Button
              number="7"
              textStyle="text-h2"
              BGcolor="bg-theme1-button"
              shadowColor="rgba(179,164,151)"
            />
            <Button
              number="8"
              textStyle="text-h2"
              BGcolor="bg-theme1-button"
              shadowColor="shadow-[inset_0_-4px_0_rgba(179,164,151)]"
            />
            <Button
              number="9"
              textStyle="text-h2"
              BGcolor="bg-theme1-button"
              shadowColor="rgba(179,164,151)"
            />
            <Button
              number="DEL"
              textStyle="text-reset text-theme1-numbers"
              BGcolor="bg-theme1-resetdel"
              shadowColor="rgba(65,78,115)"
            />
            <Button
              number="4"
              textStyle="text-h2"
              BGcolor="bg-theme1-button"
              shadowColor="rgba(179,164,151)"
            />
            <Button
              number="5"
              textStyle="text-h2"
              BGcolor="bg-theme1-button"
              shadowColor="rgba(179,164,151)"
            />
            <Button
              number="6"
              textStyle="text-h2"
              BGcolor="bg-theme1-button"
              shadowColor="rgba(179,164,151)"
            />
            <Button
              number="+"
              textStyle="text-h2"
              BGcolor="bg-theme1-button"
              shadowColor="rgba(179,164,151)"
            />
            <Button
              number="1"
              textStyle="text-h2"
              BGcolor="bg-theme1-button"
              shadowColor="rgba(179,164,151)"
            />
            <Button
              number="2"
              textStyle="text-h2"
              BGcolor="bg-theme1-button"
              shadowColor="rgba(179,164,151)"
            />
            <Button
              number="3"
              textStyle="text-h2"
              BGcolor="bg-theme1-button"
              shadowColor="rgba(179,164,151)"
            />
            <Button
              number="-"
              textStyle="text-h2"
              BGcolor="bg-theme1-button"
              shadowColor="rgba(179,164,151)"
            />
            <Button
              number="."
              textStyle="text-h2"
              BGcolor="bg-theme1-button"
              shadowColor="rgba(179,164,151)"
            />
            <Button
              number="0"
              textStyle="text-h2"
              BGcolor="bg-theme1-button"
              shadowColor="rgba(179,164,151)"
            />
            <Button
              number="/"
              textStyle="text-h2"
              BGcolor="bg-theme1-button"
              shadowColor="rgba(179,164,151)"
            />
            <Button
              number="x"
              textStyle="text-h2"
              BGcolor="bg-theme1-button"
              shadowColor="rgba(179,164,151)"
            />
            <Button
              number="RESET"
              textStyle="text-reset text-theme1-numbers"
              big="col-span-2"
              BGcolor="bg-theme1-resetdel"
              shadowColor="rgba(65,78,115)"
            />
            <Button
              number="="
              textStyle="text-reset text-theme1-numbers"
              BGcolor="bg-theme1-gleich"
              big="col-span-2"
              shadowColor="rgba(147,38,26)"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
