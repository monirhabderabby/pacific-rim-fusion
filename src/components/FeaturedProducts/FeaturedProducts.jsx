import React from 'react'


const products = [
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/9e2eee2d87f9223e15d4d490ff2922fdad0a22157bd32d19501954d9886d6193?placeholderIfAbsent=true&apiKey=13a72d2a8d4c40b0974e394fc11603d9", price: "7,000.00", originalPrice: "9,25.00" },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/07a15d7f9b9bb47f1c399eb2bcca6083f278b4bf5bd9f04b6458478c49d90e56?placeholderIfAbsent=true&apiKey=13a72d2a8d4c40b0974e394fc11603d9", price: "7,000.00", originalPrice: "9,25.00" },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e31f30190ae8334711be131a4faa618ed10d6b8118e1fb0977816b5faf9d799c?placeholderIfAbsent=true&apiKey=13a72d2a8d4c40b0974e394fc11603d9", price: "7,000.00", originalPrice: "9,25.00" },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/4dd039fee230bad73c9e81be9b42370d963639728093a42252a4373a6761bd5b?placeholderIfAbsent=true&apiKey=13a72d2a8d4c40b0974e394fc11603d9", price: "7,000.00", originalPrice: "9,25.00" },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/5876283651517a075632f1cf4dcb2ec865e183ad25f964e7eac9ed23f304dc0d?placeholderIfAbsent=true&apiKey=13a72d2a8d4c40b0974e394fc11603d9", price: "7,000.00", originalPrice: "9,25.00" },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/437698f36a55085fdea81db93566e5977998abe1c4e84a54633d51c875ad61b8?placeholderIfAbsent=true&apiKey=13a72d2a8d4c40b0974e394fc11603d9", price: "7,000.00", originalPrice: "9,25.00" },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/1130998d2e61365068b144f3d996b8edb94edba896e3fcba0a19881a3601d24f?placeholderIfAbsent=true&apiKey=13a72d2a8d4c40b0974e394fc11603d9", price: "7,000.00", originalPrice: "9,25.00" },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/4dd039fee230bad73c9e81be9b42370d963639728093a42252a4373a6761bd5b?placeholderIfAbsent=true&apiKey=13a72d2a8d4c40b0974e394fc11603d9", price: "7,000.00", originalPrice: "9,25.00" }
];


export default function FeaturedProducts() {
    return (
        <>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ms-auto">
                {products.map((product, index) => (
                    <div className="flex overflow-hidden relative flex-col grow shrink self-stretch p-3 my-auto mx-auto bg-white rounded-xl border border-gray-200 border-solid min-w-[260px] w-[216px]">
                        <img
                            loading="lazy"
                            src={product.image}
                            alt="Product image"
                            className="object-contain z-0 w-full rounded-lg aspect-[1.07]"
                        />
                        <div className="flex absolute top-5 z-0 flex-col w-8 right-[22px]">
                            <div className="flex gap-2.5 items-center p-2 w-full h-8 bg-white rounded-[30px]">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7aa98756a0edbd0efc17462247d9f34070a2253eadc71dd676b6ac01e44f47ab?placeholderIfAbsent=true&apiKey=13a72d2a8d4c40b0974e394fc11603d9"
                                    alt=""
                                    className="object-contain self-stretch my-auto w-4 aspect-square"
                                />
                            </div>
                        </div>
                        <div className="flex z-0 flex-col mt-2 w-full">
                            <div className="flex flex-col w-full">
                                <div className="flex gap-10 justify-between items-center w-full">
                                    <div className="flex gap-2 items-center self-stretch my-auto text-xs leading-tight text-red-600 whitespace-nowrap">
                                        <div className="flex gap-1 items-center self-stretch my-auto">
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/14764144228843ad8620e0d89d55e16aa84e25a6077363516ccaf792f601093e?placeholderIfAbsent=true&apiKey=13a72d2a8d4c40b0974e394fc11603d9"
                                                alt=""
                                                className="object-contain shrink-0 self-stretch my-auto aspect-[0.75] fill-red-600 w-[9px]"
                                            />
                                            <div className="self-stretch my-auto">Hot</div>
                                        </div>
                                    </div>
                                    <div className="flex gap-1 items-start self-stretch my-auto">
                                        {[1, 2, 3, 4].map((star) => (
                                            <img
                                                key={star}
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c8142323b0144e72d88cf2324dce4346b35731e8ef923cb2adc0bb1914a31216?placeholderIfAbsent=true&apiKey=13a72d2a8d4c40b0974e394fc11603d9"
                                                alt=""
                                                className="object-contain shrink-0 w-3 aspect-square fill-amber-500"
                                            />
                                        ))}
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5fba6028bbac1b07068f1658d11d2d12c10482cf33c03fd5c4d065723a61c621?placeholderIfAbsent=true&apiKey=13a72d2a8d4c40b0974e394fc11603d9"
                                            alt=""
                                            className="object-contain shrink-0 w-3 aspect-square fill-stone-300"
                                        />
                                    </div>
                                </div>
                                <div className="mt-2 text-base font-medium leading-tight text-green-800">
                                    American Beauty
                                </div>
                                <div className="flex gap-1 items-end self-start mt-2 font-medium leading-tight">
                                    <div className="self-stretch text-base whitespace-nowrap text-zinc-900">
                                        ₿{product.price}
                                    </div>
                                    <div className="self-stretch text-xs text-neutral-400">
                                        <span className="line-through">₿{product.originalPrice}</span>
                                    </div>
                                </div>
                            </div>
                            <button
                                className="gap-2.5 self-stretch px-6 py-3 mt-4 w-full text-base font-medium leading-tight text-white bg-green-800 rounded-lg max-md:px-5"
                                aria-label="Add to cart"
                            >
                                Add to cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>

        </>
    )
}
