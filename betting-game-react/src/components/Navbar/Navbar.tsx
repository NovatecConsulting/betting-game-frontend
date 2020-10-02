import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';
import Login from '../Login/Login';
import Matches from '../Matches/Matches';
import Standings from '../Standings/Standings';
import AboutUs from '../AboutUs/AboutUs';
import { Redirect } from 'react-router-dom'

const Navbar: React.FC = () => (
  <Router>
    <nav
      className='flex items-center justify-between flex-wrap border-b-2 border-blue-300 bg-blue-900 p-2'
      data-testid='Navbar'
    >
      <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
        <div className='items-center flex-shrink-0 text-white mr-6 ml-10 inline'>
          <span className='font-semibold text-xl tracking-tight'>NOVATIPP</span>
        </div>
        <div className='text-sm lg:flex-grow inline'>
          <NavLink
            to='/matches'
            className='block mt-4 lg:inline-block lg:mt-0 py-2 border-b-2 border-transparent rounded-mdw-auto inline-block text-gray-400 hover:text-white mr-4'
            activeClassName='border-gray-400 text-indigo-100'
            data-testid='Matches-NavButton'
          >
            Matches
          </NavLink>
          <NavLink
            to='/standings'
            className='block mt-4 lg:inline-block lg:mt-0 py-2 border-b-2 border-transparent w-auto inline-block text-gray-400 hover:text-red-100 mr-4'
            activeClassName='border-gray-400 text-indigo-100'
            data-testid='Standings-NavButton'
          >
            Standings
          </NavLink>
          <NavLink
            to='/aboutus'
            className='block mt-4 lg:inline-block lg:mt-0 py-2 border-b-2 border-transparent w-auto inline-block text-gray-400 hover:text-white'
            activeClassName='border-gray-400 text-indigo-100'
            data-testid='AboutUs-NavButton'
          >
            About us
          </NavLink>
        </div>
        <div className='float-right'>
          <NavLink
            to='/login'
            className='inline-block text-sm px-4 py-2 leading-none border rounded-full text-white border-white hover:border-transparent hover:text-blue-400 hover:bg-white mt-4 lg:mt-0 mr-10 active:bg-blue-700'
            data-testid='Login-NavButton'
          >
            Login
          </NavLink>
        </div>
      </div>
    </nav>
    <Switch>
      <Route exact path='/' component={Matches} /> {/* Default Route */}
      <Route exact path='/matches' component={Matches} />
      <Route exact path='/standings' component={Standings} />
      <Route exact path='/aboutus' component={AboutUs} />
      <Route exact path='/login' component={Login} />
      <Redirect to ='matches'/>
    </Switch>
  </Router>
);

export default Navbar;
