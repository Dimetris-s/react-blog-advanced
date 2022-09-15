import React, { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage'
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';

const App = () => {
  const { toggleTheme, theme } = useTheme()
  return (
    <div className={classNames('app', {}, [theme])}>
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPage/>}/>
          <Route path={'/'} element={<MainPage/>}/>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
