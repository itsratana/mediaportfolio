

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
// import Service from "./components/service";
import Projects from "./components/projects";
import SingleProject from "./components/single-project";
import Blog from "./components/blog";
import Contact from "./components/contact";
import BlogDetails from "./components/blog-details";
import EventHighlight from "./components/service/event-highlight";
import PromoteVideo from "./components/service/promote-video";
import Photography from "./components/service/photography";
import CameraOperating from "./components/service/camera-operating";




const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  // { path: "/service", element: <Service /> },
  { path: "/projects", element: <Projects /> },
  { path: "/single-project", element: <SingleProject /> },
  { path: "/blog@@123", element: <Blog /> },
  { path: "/blog-details", element: <BlogDetails /> },
  { path: "/contact", element: <Contact /> },
  { path: "/service/event-highlight", element: <EventHighlight /> },
  { path: "/service/promote-video", element: <PromoteVideo /> },
  { path: "/service/photography", element: <Photography /> },
  { path: "/service/camera-operating", element: <CameraOperating /> },

]);


function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
