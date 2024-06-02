import { Menu,X } from "lucide-react"
import { useState } from "react"  
import logo from "../assets/logo.png"
import {navItems} from "../constants"

const Navbar = () => {
// The use state is for making our web dynamic
   
    // At the beggining the mobile drawer is open indicated by false
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false); 

    // This funtion is used to toggle the mobileDrawer
    const toggleNavbar =()=>{
        setMobileDrawerOpen(!mobileDrawerOpen);
    };
 
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg
     border-b border-neutral-700/80">
       <div className="container px-4 mx-auto relative text-sm">
          <div className="flex justify-between items-center">  

                    {/* div for [logo,VirtualIR] */}
              <div className="flex items-center flex-shrink-0">
                <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
                <span className="text-xl tracking-tight">VirtualR</span>
              </div>

                  {/* Using ul for [Features,Workflow,Pricing,Testimonials]
                 hidden  by difault(on small screens)
                    (only visible on large screens)*/}
                <ul className="hidden lg:flex ml-14 space-x-12">
                   {navItems.map((item,index)=>(
                   <li key={index}>
                     <a href={item.href}>{item.label}</a>
                   </li>
                   ))}
                </ul>

                   {/* div for [Sign In, Create an account] 
                   hidden  by difault(on small screens)
                    (only visible on large screens) */}
                <div className="hidden lg:flex justify-center space-x-20 items-center">
                   <a href="#" className="py-2 px-3 border rounded-md">
                     Sign In
                   </a>
                   <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md">
                    Create an account
                   </a>
                </div>
                 
                 {/* Here we are creating the navbar of a mobile(small divice) and hidden on large screens*/}
                <div className="lg:hidden md:flex flex-col justify-end">
                  <button onClick={toggleNavbar}>          {/* the buttom will call the toggleNavbar function onClick*/}
                    {mobileDrawerOpen ? <X/> : <Menu/>}    {/* if the mobileDrawerOpen is true (? <X/>)-->Show the X icon ,,else show the menu bars (: <Menu/>)  */}
                  </button>  
                </div>
          
            </div>

            {mobileDrawerOpen &&(
                <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12
                flex flex-col justify-center items-center lg:hidden ">
                    <ul>
                        {navItems.map((item, index)=>(
                             <li key={index} className="py-4">
                             <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="flex space-x-6">
                        <a href="#" className="py-2 px-3 border rounded-md">
                            Sign In
                        </a>
                        <a href="#" className="py-2 px-3 rounded-md bg-gradient-to-r
                         from-orange-500 to-orange-800">
                            Create an account
                        </a>
                    </div>
                </div>
            )}

       </div>
    </nav>
  )
}

export default Navbar
