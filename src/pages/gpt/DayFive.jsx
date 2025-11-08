const DayFive = () => {
  const colors = [
    'bg-orange-300',
    'bg-pink-300',
    'bg-purple-300',
    'bg-red-300',
    'bg-amber-300',
    'bg-yellow-300',
    'bg-lime-300',
    'bg-cyan-300',
    'bg-green-300',
    'bg-indigo-300',
    'bg-rose-300',
    'bg-teal-300',
  ]
  return (
    <div className="p-4">
      <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-4">
        Product Listing Page
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 ">
        {colors.map((bg, index) => (
          <div
            key={bg}
            className={`${bg} p-4 shadow-md rounded-lg text-gray-700 font-medium hover:scale-105 transition-transform duration-200 grid grid-rows-[1fr_auto] `}
          >
            <div>
              <h2 className="text-lg font-semibold mb-2">
                Product {index + 1}
              </h2>
              <p className="text-sm sm:text-base">
                {index % 2 === 0
                  ? 'This is a description for product with a short text.'
                  : 'This product has a longer description to test how the price section stays aligned at the bottom.'}
              </p>
            </div>
            <div className="grid grid-cols-2 items-center mt-auto pt-4 ">
              <span className="text-gray-800 font-semibold">
                ${' '}
                <span className="text-green-700 font-bold">
                  {(index + 1) * 10}.00
                </span>
              </span>
              <button className="justify-self-end px-3 py-2 bg-fuchsia-700 text-white rounded-md hover:bg-fuchsia-500 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DayFive
