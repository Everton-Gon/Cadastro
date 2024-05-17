import React from 'react';
import ReactDOM from 'react-dom/client';
import  GlobalStyle  from './globalStyle';
import  Paginas  from './routes';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Paginas/> <GlobalStyle/> 
  </>
);

// ReactDOM.render(
//     <>
//         <App/>
//         <GlobalStyle/> 
//     </>,
//     document.getElementById("root"))

