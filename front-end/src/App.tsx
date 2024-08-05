import React from 'react';
import './App.css';
import CreateUser from './view/CreateUser';
import ListUser from './view/ListUser';
import UpdateUser from './view/UpdateUsers';
import { BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom';

function App() {
  return (
    <Router>
    <header className="sticky">
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">

                  <NavLink to="/" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                    List User
                  </NavLink>

                  <NavLink to="/CreateUser" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                    Create User
                  </NavLink>

                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header> 
    <div className="container">
      <Routes>

        <Route path="/" element={<ListUser />} />
        <Route path="/CreateUser" element={<CreateUser />} />
        <Route path="/Update/:id" element={<UpdateUser />} />
      
      </Routes>
    </div>
  </Router>
  );
}

export default App;
