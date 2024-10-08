
import { Link } from "react-router-dom"
import "./nav.css"



const NavbarUrl=[

   {
        url: "/",
        name: "Home"

   },
   {
      url: "/about-us",
      name: "About Us",

 },
 {
   url: "/teacher",
   name: "Teacher",

},
{
   url: "/contact-us",
   name: "Contact Us",

}






]
const Navbar = ()=>{

    return(
    <div>

      <nav className='sticky top-0 left-0 z-50' style={{ 
        background:'White',
        display:'flex',
        justifyContent:'space-between',
        padding:'0 48px',
        boxShadow: "0px 8px 8px 0px rgba(0,0,0,0.1)"
       }}>
        <div  style={{ 
            display: 'flex',
            alignItems:'center',
            gap:'8px'
         }}>
       <img src="./logo/logo.jfif" 
       width="60" alt="logo"
       className="pt-3 pb-3"
       />
       <h1 className="text-4xl animate-bounce font-bold ">Code School</h1>
       </div>


       <ul style={{ 
        listStyle:"none",
        display:'flex',
        padding:0,
        margin:0,
        // gap:'48px',
     
        }}>

         {

NavbarUrl.map((item,index)=>{

return(

        <li key={index} style={{ 
            display:"flex",
            alignItems:"center",
            padding:'16px 24px',            
           
         }}>
            <Link 
            className="text-4xl"
            to={item.url} style={{ 
               textDecoration:"none",
               color:323232,
               fontSize:"17px",
         }}>{item.name}</Link>
        </li>

)
})

      }

        {/* <li style={{ 
            display:"flex",
            alignItems:"center",
            padding:'16px 24px',              
           
         }}>
            <Link to="/about-us" style={{ 
               textDecoration:"none",
               color:323232,
               fontSize:"17px",
         }}>About Us</Link>
        </li>


        <li style={{ 
            display:"flex",
            alignItems:"center",
            padding:'16px 24px',             
           
         }}>
            <Link to="/teacher" style={{ 
               textDecoration:"none",
               color:323232,
               fontSize:"17px",
         }}>Teacher</Link>
        </li>



        <li   style={{ 
            display:"flex",
            alignItems:"center",
            padding:"16px 24px",           
         }}>
            <Link  to="/contact-us"  className="contact_us"  style={{ 
               textDecoration:"none",
               color:323232,
               fontSize:"17px",
               background: "dodgerblue",
               padding:' 16px 48px',
               borderRadius:4
         }}><i className="ri-contacts-book-line"></i> Contact Us</Link>
        </li> */}
      
      
       </ul>

      </nav>
    </div>

    )
}

export default Navbar