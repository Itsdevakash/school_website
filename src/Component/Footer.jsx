import {Link} from 'react-router-dom'

const Footer=()=>{
    return(
        <footer style={{ 
            padding:'60px 100px',
            background:'#03011c',
            display:'flex',
            gap:15,
         }}>
            <div  style={{ width:"102%" }}>
        <h2 style={{ 
            color:'white',
            fontWeight:500,
         }}>Code School</h2>
        <p style={{ 
            color:'white',

         }}>Rated as the most promising CBSE-affiliated school of UP, the school offers education to children from Kindergarten to Senior Secondary level. </p>
      </div>
      <div  style={{ width:"100%" }}>
        <h2 style={{ 
            color:'white',
            fontWeight:500,
         }}>Usefull Links</h2>
           <ul style={{ 
            padding:0,
            margin:0,
            gap:25
            }}>
            <li  style={{ 
                    listStyle:"none"
             }}>
                <Link to="/" style={{ 
                color:'white',
                textDecoration:"none",              
             }}><i className="ri-home-3-line"></i> Home</Link> 
             </li>

            <li style={{ 
                    listStyle:"none"
             }}><Link to="/about-us" style={{ 
                color:'white',
                textDecoration:"none",
             
             }}><i className="ri-archive-drawer-fill"></i> About</Link> 
             </li>

              <li style={{ 
                    listStyle:"none"
             }}>
                <Link to="/teacher" style={{ 
                color:'white',
                textDecoration:"none",
               listStyle:"none"
             }}><i className="ri-user-line"></i> Teacher</Link>
             </li>

             
             <li style={{ 
                    listStyle:"none"
             }}><Link to="/contact-us" style={{ 
                color:'white',
                textDecoration:"none",
                listStyle:"none"

             }}><i className="ri-contacts-book-line"></i> Contact</Link>
             </li>

             <li style={{ 
                    listStyle:"none"
             }}><Link to="/testing" style={{ 
                color:'white',
                textDecoration:"none",
                listStyle:"none"

             }}><i className="ri-contacts-book-line"></i> Testing</Link>
             </li>
             
             
           </ul>
      </div>


      <div  style={{ width:"100%" }}>
        <h2 style={{ 
            color:'white',
            fontWeight:500,
         }}>Social Links</h2>
           <ul style={{ 
            padding:0,
            margin:0,
            gap:25
            }}>
            <li style={{ 
                    listStyle:"none"
             }}>
                <Link to="" style={{ 
                color:'white',
                textDecoration:"none",
                listStyle:"none"
             }}><i className="ri-youtube-line"></i> Youtube</Link>
              </li>

            <li style={{ 
                    listStyle:"none"
             }}>
                <Link to="" style={{ 
                color:'white',
                textDecoration:"none",
                 listStyle:"none"
             }}><i className="ri-facebook-circle-line"></i>  Facebook</Link> 
             </li>

              <li style={{ 
                    listStyle:"none"
             }}><Link to="" style={{ 
                color:'white',
                textDecoration:"none",
               listStyle:"none"
             }}><i className="ri-instagram-line"></i> Instagram </Link>
             </li>

             
             <li style={{ 
                    listStyle:"none"
             }}><Link to="" style={{ 
                color:'white',
                textDecoration:"none",
                listStyle:"none"

             }}><i className="ri-twitter-x-line"></i> Twitter</Link>
             </li>
             
            
           </ul>
      </div>


      <div  style={{ width:"100%" }}>
        <h2 style={{ 
            color:'white',
            fontWeight:500,
         }}>Enquiry</h2>

         <form style={{ 
            display:'flex',
            flexDirection:"column",
            gap:16
          }}>

            <input  
                name="fullname"
                placeholder="Enter Name"
                required
                style={{ 
                border:'none',
                padding:12,
                borderRadius:4
                }} 
             />

                <input  
                name="email"
                placeholder="Enter Email"
                required
                style={{ 
                border:'none',
                padding:12,
                borderRadius:4
                }} 
             />

             
                <textarea  
                name="message"
                placeholder="Enter Message"
                required
                style={{ 
                border:'none',
                padding:12,
                borderRadius:4
                }} 
             />

             <button type="submit"  style={{ 
                width:"fit-content",
                border:'none',
                background:'orange',
                color:'white',
                borderRadius:4,
                padding:"12px 24px"
              }}>Submit</button>
         </form>
       
      </div>
      
     
        </footer>
        
    )
}
export default Footer