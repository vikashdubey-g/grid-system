function App() {
  function sayName() {
    console.log("Hello World");
    return;
  }

  function addNumbers(a, b) {
    return a + b;
  }

  return (
    <>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-12 gap-4">
        <div class="bg-blue-200 p-4">1</div>
        <div class="bg-blue-200 p-4">2</div>
        <div class="bg-blue-200 p-4">3</div>
        <div class="bg-blue-200 p-4">4</div>
        <div class="bg-blue-200 p-4">5</div>
        <div class="bg-blue-200 p-4">6</div>
        <div class="bg-blue-200 p-4">7</div>
        <div class="bg-blue-200 p-4">8</div>
        <div class="bg-blue-200 p-4">9</div>
        <div class="bg-blue-200 p-4">10</div>
        <div class="bg-blue-200 p-4">11</div>
        <div class="bg-blue-200 p-4">12</div>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 bg-purple-200 p-4">Full Width Header</div>
        <div className="col-span-8 bg-blue-200 p-4">Main Content (8 cols)</div>
        <div className="col-span-4 bg-green-200 p-4">Sidebar (4 cols)</div>
        <div className="col-span-4 bg-yellow-200 p-4">Box 1</div>
        <div className="col-span-4 bg-yellow-200 p-4">Box 2</div>
        <div className="col-span-4 bg-yellow-200 p-4">Box 3</div>
      </div>

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

      <div className="grid grid-cols-4 grid-rows-3 gap-4 h-96">
        <div className="col-span-2 row-span-2 bg-indigo-200 p-4">Large Box</div>
        <div className="bg-pink-200 p-4">1</div>
        <div className="bg-pink-200 p-4">2</div>
        <div className="bg-pink-200 p-4">3</div>
        <div className="bg-pink-200 p-4">4</div>
        <div className="col-span-4 bg-teal-200 p-4">Footer</div>
      </div>
    </>
  );
}

export default App;
