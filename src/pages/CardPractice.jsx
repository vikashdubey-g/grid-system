const CardPractice = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Card Practice Grid</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-red-300 shadow-md rounded-lg p-4">Card 1</div>
        <div className="bg-red-300 shadow-md rounded-lg p-4">Card 2</div>
        <div className="bg-red-300 shadow-md rounded-lg p-4">Card 3</div>
      </div>
      <h1 className="text-2xl font-bold mb-4">Header + Sidebar + Content</h1>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <header className="bg-blue-300 p-4 md:col-span-12">Header</header>
        <aside className="col-span-1 md:col-span-3 bg-green-300 p-4 h-64">
          Sidebar
        </aside>
        <main className="bg-yellow-300 md:col-span-9 p-4 h-64">
          Main Content Area
        </main>
      </div>
      <h1 className="text-2xl font-bold mb-4">Dashboard Layout</h1>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <header className="col-span-12 bg-slate-800 p-4">Header</header>
        <aside className="col-span-12 lg:col-span-1 bg-blue-400 p-4">
          Sidebar
        </aside>
        <main className="col-span-12 lg:col-span-11 bg-orange-300 p-4">
          Main Content Area
        </main>
      </div>
      <h1 className="text-2xl font-bold mb-4">Image Gallery</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        <div className="bg-pink-300 h-40 rounded-lg" />
        <div className="bg-yellow-300 h-60 rounded-lg" />
        <div className="bg-green-300 h-52 rounded-lg" />
        <div className="bg-blue-300 h-72 rounded-lg" />
        <div className="bg-purple-300 h-48 rounded-lg" />
        <div className="bg-red-300 h-64 rounded-lg" />
        <div className="bg-teal-300 h-56 rounded-lg" />
        <div className="bg-indigo-300 h-44 rounded-lg" />
      </div>
    </div>
  )
}

export default CardPractice
