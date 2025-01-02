/* eslint-disable react/prop-types */


function ProductCard({ image, name, price }) {
  return (
    <div className="flex flex-wrap gap-4 items-center w-full max-md:max-w-full mb-4">
      <img
        loading="lazy"
        src={image}
        alt={name}
        className="object-contain shrink-0 self-stretch my-auto w-20 rounded-lg aspect-[1.54]"
      />
      <div className="flex flex-1 shrink gap-10 justify-between items-start self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
        <div className="w-60 text-green-800">{name}</div>
        <div className="text-neutral-900">{price}</div>
      </div>
    </div>
  );
}

export default ProductCard;

// <div class="flex flex-wrap gap-10 justify-between items-center p-3 w-full bg-white rounded-lg border border-solid border-zinc-300 mt-4 max-md:max-w-full"><div class="flex gap-3 items-start self-stretch my-auto"><div class="flex flex-col w-5"><div class="flex shrink-0 w-5 h-5 rounded-full border-solid border-[1.5px] border-zinc-300"></div></div><div class="text-base leading-tight text-black">PayPal</div></div><div class="flex gap-2 items-start self-stretch my-auto"><img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b81887d892c8b0cda4b3af51771e04341ab9e75d128795a2c184c9c05398d349?placeholderIfAbsent=true&amp;apiKey=2e251f586b5b47d69c37dbbb20f835df" alt="" class="object-contain shrink-0 aspect-[2.36] w-[66px]"></div></div>