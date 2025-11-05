const DayFour = () => {
  return (
    <div className="p-4">
      <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-4">
        Image Gallery (Pinterest-style)
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[200px]">
        <div className="bg-pink-200 p-4 shadow-sm rounded-lg hover:scale-105 transition duration-200">
          1
        </div>
        <div className="bg-red-200 p-4 shadow-sm rounded-lg hover:scale-105 transition duration-200">
          2
        </div>
        <div className="bg-rose-200 p-4 shadow-sm rounded-lg hover:scale-105 transition duration-200">
          3
        </div>
        <div className="bg-teal-200 p-4 shadow-sm rounded-lg hover:scale-105 transition duration-200">
          4
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[200px]">
        {[
          'https://picsum.photos/300/200',
          'https://picsum.photos/300/350',
          'https://picsum.photos/300/250',
          'https://picsum.photos/300/400',
          'https://picsum.photos/300/300',
          'https://picsum.photos/300/280',
          'https://picsum.photos/300/370',
          'https://picsum.photos/300/260',
        ].map((src, i) => (
          <div
            key={src}
            className="overflow-hidden rounded-lg shadow-sm hover:scale-105 transition-transform duration-200"
          >
            <img
              src={src}
              alt={`Gallery ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default DayFour
