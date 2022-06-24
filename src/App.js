import Home from './pages/Home';

function App() {
  return (
    
      <div className='p-4 bg-[url("https://wallpaperaccess.com/full/8140084.jpg")] bg-fixed bg-cover bg-center bg-no-repeat 
        sm:bg-center sm:bg-no-repeat sm:bg-cover w-full sm:bg-fixed max-h-full relative '>
        <div className='p-2 bg-gray-100 mx-auto overflow-hidden rounded-lg max-w-sm sm:max-w-md md:max-w-lg lg:left-1/3' >
          <Home />
        </div>      
      </div>
    
  );
}

export default App;
