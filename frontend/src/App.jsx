import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from "react-router";

function App() {

  return (
    
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black'>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
