export default function MenuItem() {
  return(
    <div className="bg-gray-200 p-4 rounded-lg text-center group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
      <div className="text-center">
        <img className="bloc max-w-auto max-h-24 w-auto mx-auto" src="/pizza.png" alt="pizza" />
      </div>
      <h4 className="font-semibold my-3">
        Pepperoni Pazza
      </h4>
      <p className="text-gray-500 text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <button className="bg-red-500 text-white rounded-full px-8 py-2 mt-4">
        Add to cart $12
      </button>
    </div>
  )
}