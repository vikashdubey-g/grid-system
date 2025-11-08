const PageOne = () => {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">My Website</h1>
      </header>
      <div className="grid grid-cols-[250px_1fr]">
        <aside className="bg-gray-800 text-white p-6">
          <h2 className="font-bold mb-4">Sidebar</h2>
          <ul className="space-y-2">
            <li>Dashboard</li>
            <li>Settings</li>
            <li>Profile</li>
          </ul>
        </aside>
        <main className="p-4">Main content</main>
      </div>

      <footer className="bg-teal-800 text-white p-4">Footer content</footer>
    </div>
    // <div  >
    //   <header className="bg-blue-600 text-white p-4">
    //     <h1 className="text-2xl font-bold">My Website</h1>
    //   </header>
    //   <div className="grid grid-rows-[1fr_auto]">
    //     <main className="p-4">Main content</main>
    //     <footer className="bg-gray-800 text-white p-4 mt-4">
    //       Footer content
    //     </footer>
    //   </div>
    // </div>
  )
}

export default PageOne
