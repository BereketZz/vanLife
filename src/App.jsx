import { useState } from 'react'
import { Navigate,  redirect } from 'react-router-dom'
import viteLogo from '/vite.svg'
import './App.css'
// Importig all the component from pages
import Login , {action} from './pages/Login'
import Home from './pages/Home'
import About from './pages/About'
import Vans, {loader as vanLoader} from './pages/Vans'
import VansDetail, {loader as vansDetailLoader} from './pages/VansDetail'
import Layout from './components/Layout'
// Importing all the components  from pages/Host
import Dashboard, {} from './pages/Host/Dashboard'
import Reviews , {loader as reviewLoader} from './pages/Host/Reviews'
import Income , {loader as incomeLoader} from './pages/Host/Income'
import HostLayout  from './components/HostLayout'
import HostVans, {loader as hostVanLoader} from './pages/Host/HostVans'
import HostVanDetail , {loader as hostVanDetailLoader} from './pages/Host/HostVanDetail'
import HvdDetail , {loader as hvdDetailLoader} from './pages/Host/HvdDetail'
import HvdPrice , {loader as hvdPriceLoader} from './pages/Host/HvdPrice'
import HvdPhoto  , {loader as hvdPhotoLoader}from './pages/Host/HvdPhoto'

//Importing an Error.jsx from components
import Error from './components/Error'

// importing  404 page form pages
import NotFound from './pages/NotFound'

// importing  layouts from layout
import AuthRoute from './components/AuthRoute'

import { BrowserRouter, Route, Routes,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements
  


} from 'react-router-dom'

const router= createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
  <Route path="*" element={<NotFound/>} /> 
  
 <Route index element={<Home/>} />
 <Route path='about' element={<About/>} />
 <Route path='login' element={<Login/>} action={action} />
 <Route path='vans' element={<Vans/>} loader={vanLoader} errorElement={<Error/>} />
 <Route path='vans/:id' element={<VansDetail/>} loader={vansDetailLoader} />

 
 <Route path='host' element={<HostLayout/>} >
 <Route element={<AuthRoute/>} >
 <Route index element={<Dashboard/>}  />
 <Route path='income' element={<Income/>}  loader={incomeLoader}/>

 <Route path='reviews' element={<Reviews/>} loader={reviewLoader} />
 <Route path='vans' element={<HostVans />}  loader={hostVanLoader}/>
 
 <Route path="vans/:id" element={<HostVanDetail />} loader={hostVanDetailLoader}>
  <Route index element={<HvdDetail/>}  loader={hvdDetailLoader}/>
  <Route path="pricing" element={<HvdPrice/>} loader={hvdPriceLoader} />
  <Route path="photos" element={<HvdPhoto/>} loader={HvdPhoto} />

 </Route>

 </Route>

 

 

 







 </Route>
 </Route>
))


function App() {
  const [count, setCount] = useState(0)
  localStorage.removeItem("logged")

  return (
    <>
    <RouterProvider router={router} />
     
    </>
  )
}

export default App
/*
Quiz on Nested Route

1. we use nested route when there is a shared UI between components
2. The Layout route is the one that holds the shared UI component and 
   the outlet where the child components get rendered.
3. We use the <Outlet/> component to insert part of the child component
   in the Layout component
4. The index route is a placeholder to say that the path of the child
component is the same as the parent component's path      

**/