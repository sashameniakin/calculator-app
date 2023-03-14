export default function Button({
  number,
  big,
  textStyle,
  BGcolor,
  shadowColor,
}) {
  return (
    <div
      className={`${BGcolor} ${big} rounded-[10px] flex justify-center items-center`}
    >
      <p className={`${textStyle} text-center my-3`}>{number}</p>
    </div>
  );
}

//pt-[3px] mt-[13px] mb-[11px] w-[74px] h-[40px]
