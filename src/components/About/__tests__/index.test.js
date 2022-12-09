import React from 'react';

// render function renders component - jest creates simulated DOM in node.js environment to approximate the DOM
// cleanup function used to remove components from DOM to prevent memroy leaking 
import { render, cleanup} from '@testing-library/react';

// import extend-expect lib from jest-dom package 
import '@testing-library/jest-dom/extend-expect';

// import the component we'll be testing - the About component 
import About from '..';

// call the cleanup function
afterEach(cleanup);

// use describe function to declare component we're testing 
describe('About component', () => {
    //renders About test

    // First test

    // Second test 
})
