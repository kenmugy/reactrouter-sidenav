import React from 'react';
import Home from '../components/Home';
import About from '../components/About';
import More from '../components/More';
import Info from '../components/Info';

export default [
  {
    path: '/',
    exact: true,
    sideBar: () => <h5>home</h5>,
    main: Home
  },
  {
    path: '/about',
    sideBar: () => <h5>about</h5>,
    main: About
  },
  {
    path: '/info',
    sideBar: () => <h5>info</h5>,
    main: Info
  },
  {
    path: '/more',
    sideBar: () => <h5>more</h5>,
    main: More
  }
];
