/* eslint-disable react/prop-types */

function PaymentOption({ name, selected, images, image, isFirst, type = 'radio' }) {
    const borderColor = selected ? "border-green-800" : "border-zinc-300";
    const textColor = selected ? "text-green-800" : "text-black";
  
    return (
      <div className={`flex flex-wrap gap-10 justify-between items-center p-3 w-full bg-white rounded-lg border border-solid ${borderColor} ${!isFirst ? 'mt-4' : ''} max-md:max-w-full`}>
        <div className="flex gap-3 items-start self-stretch my-auto">
          <div className="flex flex-col w-5">
            <input
              type={type}
              className="appearance-none w-5 h-5 border-2 rounded-full border-solid cursor-pointer checked:bg-green-800 checked:border-green-800"
              checked={selected}
              readOnly
            />
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
  