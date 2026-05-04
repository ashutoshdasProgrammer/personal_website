import { useState } from 'react'
import NavBar from './Navbar';
// import Intro from './Routes/Homepagecomponents.jsx/Intro';
// import CodeBlock from './Routes/Homepagecomponents.jsx/CodeBlock';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Routes/Home';
import Discover from './Routes/Discover';
import Contact from './Routes/Contact';
import Blogs from './Routes/Blogs';
import Projects from './Routes/Projects';
import Layout from './Layout';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        { path: "/", element: Home() },
        { path: "/discover", element: Discover() },
        { path: "/contact", element: Contact() },
        { path: "/projects", element: Projects() },
        { path: "/blogs", element: Projects() }
      ]
    }
  ]
)

function App() {
  console.log('App rendered');

  return (
    <>
      <div className="relative bg-[url(./assets/ashutosh.png)] bg-contain bg-no-repeat bg-left h-screen">
        <RouterProvider router={router} />
        {/* can run other components here */}
      </div>
    </>
  )
}

export default App
