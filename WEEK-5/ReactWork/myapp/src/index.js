
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import GreetingElement from './myGreetingApp'; // Task 4: Stateless Functional Component
import GreetingElementWithProp from './myGreetingProp'; // Task 5: Functional Component with Props
import AppColor from './AppBackgroundColor'; // Task 6: Functional Component with Buttons and Background Color

// Create the root for rendering React 18+ compatible apps
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render all tasks one by one
root.render(
  <React.StrictMode>

    {/* Task 4: Stateless Functional Component */}
    <GreetingElement />

    {/* Task 5: Functional Component with Properties */}
    <GreetingElementWithProp msg="Hello, it’s Monday!" />

    {/* Task 6: Functional Component with Buttons and Background Color */}
    <AppColor heading="Change Background to Green" lbl="Name:" color="green" />
    <AppColor heading="Change Background to Blue" lbl="Name:" color="blue" />
    <AppColor heading="Change Background to Yellow" lbl="Name:" color="yellow" />

  </React.StrictMode>
);
