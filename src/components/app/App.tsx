import React from 'react';
import { Routes, Route } from 'react-router-dom';

import AppHeader from '../appHeader/AppHeader';
import AppFooter from '../appFooter/AppFooter';
import InfoCard from '../infoCard/InfoCard';
import AppHome from '../appHome/AppHome';
import NewsList from '../newsList/NewsList';
import AppProfile from '../appProfile/AppProfile';
import LoginForm from '../loginForm/LoginForm';
import Page404 from '../page404/Page404';

import PrivateRoute from '../../utils/router/privateRoute';

import './app.scss';

function App() {
  return (
      <div className="App">
        <AppHeader/>
        <main>
          <Routes>
            <Route path='/' element={<AppHome/>}/>
            <Route path='/news' element={<NewsList/>}/>
            <Route path='/news/:id' element={<InfoCard/>}/>

            <Route element={<PrivateRoute/>}>
              <Route path='/profile' element={<AppProfile/>}/>
            </Route>

            <Route path='/login' element={<LoginForm/>}/>
            <Route path='*' element={<Page404/>}/>
          </Routes>
        </main>
        <AppFooter/>
      </div>
  );
}

export default App;
