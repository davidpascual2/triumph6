import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Leaders from "./pages/leaders/Leaders";
import Give from "./pages/give/Give";
import Footer from "./components/footer/Footer";
import ContactUs from "./pages/contactUs/ContactUs";



const Layout = () => {

    return(
      <>
        {/* <Navbar /> */}
        <Outlet />
        <Footer />
      </>
    );
  };
  
  const router = createBrowserRouter([
    
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path:'/',
          element:<Home />
        },
        {  
          path:'/leaders',
          element:<Leaders />
        },
        {
          path:'/contactUs',
          element:<ContactUs />,
        },
        {
          path:'/give',
          element:<Give />,
        },
      ]
    },
  ]);

function App() {
  return (
    <div>
       <RouterProvider router={router}/>
    </div>
  );
}

export default App;
