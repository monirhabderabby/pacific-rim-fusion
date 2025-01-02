/* eslint-disable react/prop-types */


function PaymentOption({ name, selected, images, image, isFirst }) {
  const borderColor = selected ? "border-green-800" : "border-zinc-300";
  const textColor = selected ? "text-green-800" : "text-black";

  return (
    <div className={`flex flex-wrap gap-10 justify-between items-center p-3 w-full bg-white rounded-lg border border-solid ${borderColor} ${!isFirst ? 'mt-4' : ''} max-md:max-w-full`}>
      <div className="flex gap-3 items-start self-stretch my-auto">
        <div className="flex flex-col w-5">
          <div className={`flex shrink-0 w-5 h-5 rounded-full border-solid border-[1.5px] ${borderColor}`}>
            {selected && (
              <div className="flex shrink-0 w-2.5 h-2.5 bg-green-800 rounded-full" />
            )}
          </div>
        </div>
        <div className={`text-base leading-tight ${textColor}`}>{name}</div>
      </div>
      <div className="flex gap-2 items-start self-stretch my-auto">
        {images ? (
          images.map((img, index) => (
            <img
              key={index}
              loading="lazy"
              src={img}
              alt=""
              className="object-contain shrink-0 aspect-[1.5] w-[42px]"
            />
          ))
        ) : (
          <img
            loading="lazy"
            src={image}
            alt=""
            className="object-contain shrink-0 aspect-[2.36] w-[66px]"
          />
        )}
      </div>
    </div>
  );
}

export default PaymentOption;