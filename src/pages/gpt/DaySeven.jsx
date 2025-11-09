import { useId } from 'react'

const DaySeven = () => {
  const id = useId()
  return (
    <div className="p-4">
      <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-6">
        Fluid Dashboard (Auto-Fit & Subgrid)
      </h1>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={id}
            className="bg-slate-300 rounded-xl shadow-md p-4 flex flex-col justify-between"
          >
            <h2 className="text-lg font-semibold text-slate-800 mb-2">
              Widget {index + 1}
            </h2>

            {/* Nested grid (subgrid-like pattern) */}
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div className="bg-white rounded-md p-2 shadow-sm text-sm">
                Metric A
              </div>
              <div className="bg-white rounded-md p-2 shadow-sm text-sm">
                Metric B
              </div>
            </div>

            <p className="text-gray-700 text-sm mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              vel risus eget nunc.
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DaySeven
