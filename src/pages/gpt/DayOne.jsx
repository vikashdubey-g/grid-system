const DayOne = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        GPT recommendation Day 1 Practice
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 ">
        {[
          'orange',
          'pink',
          'purple',
          'red',
          'amber',
          'yellow',
          'lime',
          'cyan',
          'fuchsia',
          'indigo',
          'rose',
          'teal',
        ].map((color, index) => (
          <div
            key={`${color}`}
            className={`bg-${color}-300 p-6 shadow-md rounded-lg text-center text-gray-700 font-medium hover:scale-105 transition-transform duration-200`}
          >
            Card {index + 1}
          </div>
        ))}
      </div>
    </div>
  )
}

export default DayOne
