import {useState} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Swal from 'sweetalert2'
const Contact=()=>{

    const [fullname,setName] = useState('')
    const [email,setEmail] = useState('')
    const [message,setMessage] = useState('')


    const contactus=(e)=>{
        e.preventDefault()
      console.log(fullname,email,message)
      Swal.fire({
        title: "Success",
        text: "Thank For You !",
        icon: "success"
      })
      e.target.reset()

    }
    return(
      
        <div>
         <Navbar />
         <center> <h1><u>Contact Us</u></h1></center>
        <div style={{ 
            display:"flex",
            alignItems:'center',
            gap:90
         }}>
             <img src="./image/contact.png" alt='Contact Us'  
              style={{ 
                 marginLeft: '1%',
                 width:"45%",
                 marginTop: '-6%',
               }}/>
     

        <div style={{ 
               width: '36%',
               marginBottom: '57px',
         }} >
        <form style={{ 
            display:'flex',
            flexDirection:"column",
            gap:16
          }}
          
          onSubmit={contactus}
          >
            <lable style={{   marginLeft:'3%' }}>Full Name</lable>
            <input  
               type='text'
                name="fullname"
                placeholder="Enter Name"
                required
                style={{ 
                padding:12,
                borderRadius:'19px',
                marginTop:'-2%',
                }} 
                onChange={(e)=>setName(e.target.value)}
             />
            <lable style={{   marginLeft:'3%' }}>Email</lable>   
                <input  
                type='email'
                name="email"
                placeholder="Enter Email"
                required
                style={{ 
                padding:12,
                borderRadius:'19px',
                marginTop:'-2%',
                }} 
                onChange={(e)=>setEmail(e.target.value)}
             />

                <lable style={{   marginLeft:'3%' }}>Message</lable>   
                <textarea  
                name="message"
                placeholder="Enter Message"
                required
                rows={5}
                style={{ 
                padding:12,
                borderRadius:'19px',
                marginTop:'-2%',
                }} 
                onChange={(e)=>setMessage(e.target.value)}
             />

             <button type="submit"  style={{ 
                width:"fit-content",
                border:'none',
                background:'#223a7b',
                color:'white',
                borderRadius:4,
                padding:"12px 24px"
              }}>Submit</button>
         </form>
         </div>
        </div>
       
        <Footer />
        </div>
    )
}
export default Contact