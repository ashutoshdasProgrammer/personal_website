import { useState } from 'react'
import NavBar from './Navbar';
import Intro from './Intro';
import CodeBlock from './CodeBlock';

function App() {
  console.log('App rendered');

  return (
    <>
      <div className="relative bg-[url(./assets/ashutosh.png)] bg-contain bg-no-repeat bg-left h-screen">
        <NavBar></NavBar>
        <Intro></Intro>
        <CodeBlock></CodeBlock>
      </div>
    </>
  )
}

export default App
