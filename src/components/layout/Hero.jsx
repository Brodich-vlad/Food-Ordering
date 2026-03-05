import Image from "next/image";
import Righ from "../icons/Right";

export default function Hero(){
  return(
    <section className="block md:grid grid-cols-2 grid-cols-[.4fr .6fr] md:mt-4">
      <div className="py-8 md:py-12">
        <h1 className="text-4xl font-semibold">   
          Everything<br />
          is better<br />
          with a&nbsp;
          <span className="text-red-500">
            Pizza
          </span>
        </h1>
        <p className="mt-4 text-gray-500 mb-6">
          Pizza is the missing piece that makes every day complete, a simple yet delicious joy in life
        </p>
        <div className="flex gap-4 text-sm">
          <button type="button" className="bg-red-500 flex justify-center uppercase items-center gap-2 text-white px-4 py-2 rounded-full">
            Order now
            <Righ/>

          </button>
          <button type="button" className="flex items-center border-0 gap-2 py-2 text-gray-600 font-semibold">
            Learn more
            <Righ/>
          </button>
        </div>
      </div>

      <div className="relative hidden md:block">
        <Image src={'/pizza.png'} layout={"fill"} objectFit={'contain'} alt="pizza"/>
      </div>

    </section>
  )
}