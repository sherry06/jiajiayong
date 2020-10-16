// import React from 'react';
import HomePage from './pages/homepage';
import Page1 from './pages/page1';

const routes = [
    {
        path:'/',
        component:HomePage,
        exact:true
    },
    {
        path:'/page1',
        component:Page1
    }
];

export {routes}
