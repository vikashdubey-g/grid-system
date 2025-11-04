const DayThree = () => {
  return (
    <div className="p-4">
      <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-4">
        Dashboard Layout (Nested Grid)
      </h1>

      {/* Outer Grid */}
      <div className="grid grid-cols-2 md:grid-cols-10 gap-4">
        {/* Header */}
        <header className="bg-orange-300 p-4 text-center col-span-2 md:col-span-10 rounded-lg shadow-md">
          Header
        </header>

        {/* Sidebar */}
        <aside className="bg-lime-300 p-4 text-center hidden md:block md:col-span-2 rounded-lg shadow-md">
          Sidebar
        </aside>

        {/* Main Content with Nested Grid */}
        <main className="bg-indigo-300 p-4 col-span-2 md:col-span-8 rounded-lg shadow-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white/60 p-4 rounded-lg">Widget 1</div>
            <div className="bg-white/60 p-4 rounded-lg">Widget 2</div>
            <div className="bg-white/60 p-4 rounded-lg">Widget 3</div>
            <div className="bg-white/60 p-4 rounded-lg">Widget 4</div>
            <div className="bg-white/60 p-4 rounded-lg">Widget 5</div>
            <div className="bg-white/60 p-4 rounded-lg">Widget 6</div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default DayThree
