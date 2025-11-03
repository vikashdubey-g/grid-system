const DayTwo = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        GPT recommendation Day 1 Practice (Header + Sidebar + Content)
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <header className="bg-teal-300 p-4 text-center md:col-span-4">
          Header
        </header>
        <aside className="bg-rose-300 p-4 text-center md:col-span-1 hidden md:block">
          Sidebar
        </aside>
        <main className="bg-blue-300 p-4 text-center  md:col-span-3">
          Main content
        </main>
      </div>
    </div>
  )
}

export default DayTwo
