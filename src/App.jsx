function App() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Tailwind CSS Grid Layouts</h1>
      <p>
        <em>Responsive Grid Example:</em>
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-12 gap-4">
        <div className="bg-blue-200 p-4">1</div>
        <div className="bg-blue-200 p-4">2</div>
        <div className="bg-blue-200 p-4">3</div>
        <div className="bg-blue-200 p-4">4</div>
        <div className="bg-blue-200 p-4">5</div>
        <div className="bg-blue-200 p-4">6</div>
        <div className="bg-blue-200 p-4">7</div>
        <div className="bg-blue-200 p-4">8</div>
        <div className="bg-blue-200 p-4">9</div>
        <div className="bg-blue-200 p-4">10</div>
        <div className="bg-blue-200 p-4">11</div>
        <div className="bg-blue-200 p-4">12</div>
      </div>
      <p className="mt-8">
        <em>Complex Grid Layout:</em>
      </p>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 bg-purple-200 p-4">Full Width Header</div>
        <div className="col-span-8 bg-blue-200 p-4">Main Content (8 cols)</div>
        <div className="col-span-4 bg-green-200 p-4">Sidebar (4 cols)</div>
        <div className="col-span-4 bg-yellow-200 p-4">Box 1</div>
        <div className="col-span-4 bg-yellow-200 p-4">Box 2</div>
        <div className="col-span-4 bg-yellow-200 p-4">Box 3</div>
      </div>
      <p className="mt-8">
        <em>Grid with Cards:</em>
      </p>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-red-200 p-4">
          Card 1
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-red-200 p-4">
          Card 2
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-red-200 p-4">
          Card 3
        </div>
      </div>
      <p className="mt-8">
        <em>Grid with Spanning Items:</em>
      </p>
      <div className="grid grid-cols-4 grid-rows-3 gap-4 h-96">
        <div className="col-span-2 row-span-2 bg-indigo-200 p-4">Large Box</div>
        <div className="bg-pink-200 p-4">1</div>
        <div className="bg-pink-200 p-4">2</div>
        <div className="bg-pink-200 p-4">3</div>
        <div className="bg-pink-200 p-4">4</div>
        <div className="col-span-4 bg-teal-200 p-4">Footer</div>
      </div>
    </>
  )
}

export default App
