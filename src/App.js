import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import AboutUs from "./pages/aboutUs/AboutUs";
import Give from "./pages/give/Give";
import Footer from "./components/footer/Footer";
import ContactUs from "./pages/contactUs/ContactUs";
import './App.css';
import ScrollToTop from "./components/scrollToTop/ScrollToTop.js";




const Layout = () => {

  return (
    <>
      < Navbar />
      <div className="content-wrapper">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

const router = createBrowserRouter([

  {
    path: '/',
    element: (
      <>
        <ScrollToTop />
        <Layout />
      </>
    ),
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/aboutUs',
        element: <AboutUs />
      },
      {
        path: '/contactUs',
        element: <ContactUs />,
      },
      {
        path: '/give',
        element: <Give />,
      },
    ]
  },
]);

function App() {
  return (
    <div className="app-wrapper">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
