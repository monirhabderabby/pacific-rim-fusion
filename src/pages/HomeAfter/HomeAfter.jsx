import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";



export default function HomeAfter() {
  return (
    <>
      <div className="p-5">
        <h1>Hello</h1>
      </div>
      <div className='bg-primary-light rounded-3xl'>
        <div className='container'>
          <div className="flex flex-col items-center py-7">
            <div className="flex flex-col self-stretch w-full max-md:max-w-full">
              <h1 className="text-4xl font-semibold leading-tight text-center text-green-800 max-md:max-w-full">
                Our Featured Products
              </h1>
              <h2 className="mt-2 text-xl font-medium leading-tight text-center bg-clip-text max-md:max-w-full">
                Products
              </h2>
              <div className="flex gap-1 items-start self-center mt-2">
                <div className="flex shrink-0 w-3 h-1 bg-stone-600 bg-opacity-30" />
                <div className="flex shrink-0 w-10 h-1 bg-green-800" />
                <div className="flex shrink-0 w-3 h-1 bg-stone-600 bg-opacity-30" />
              </div>
            </div>
            <div className=" items-center mt-10 w-full max-md:max-w-full">
              <div className="">
                <FeaturedProducts />
              </div>
            </div>
            <button
              className="flex gap-3 justify-center items-center px-6 py-3 mt-10 text-base font-medium leading-tight text-white bg-green-800 rounded-lg max-md:px-5"
              aria-label="Explore more products"
            >
              <div className="flex gap-1 items-center self-stretch my-auto">
                <div className="self-stretch my-auto">Explore More</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/00651e66aeccdb8ce0f30cf002cbf41fd80842796b048d2f1aecf41ebb2ee3d8?placeholderIfAbsent=true&apiKey=13a72d2a8d4c40b0974e394fc11603d9"
                  alt=""
                  className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
