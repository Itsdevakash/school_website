import Navbar from './Navbar'
import Footer from './Footer'

const teachers = [

    {
        image: './image/a.png',
        name:'A',
        qua:'MCA ( India University )'
    },
    {
        image: './image/b.png',
        name:'B',
        qua:'MCA ( India University )'
    },
    {
        image: './image/c.png',
        name:'C',
        qua:'MCA ( India University )'
    },

    {
        image: './image/d.png',
        name:'D',
        qua:'MCA ( India University )'
    },

    {
        image: './image/e.png',
        name:'E',
        qua:'MCA ( India University )'
    },
    {
        image: './image/j.png',
        name:'F',
        qua:'MCA ( India University )'
    },

    {
        image: './image/g.png',
        name:'G',
        qua:'MCA ( India University )'
    },
    {
        image: './image/h.png',
        name:'H',
        qua:'MCA ( India University )'
    },
    {
        image: './image/i.png',
        name:'I',
        qua:'MCA ( India University )'
    },
    {
        image: './image/j.png',
        name:'J',
        qua:'MCA ( India University )'
    },
    {
        image: './image/a.png',
        name:'K',
        qua:'MCA ( India University )'
    },
    {
        image: './image/c.png',
        name:'L',
        qua:'MCA ( India University )'
    }
]

const Teacher=()=>{
    return(
        <div>
        <Navbar />
       

         <header  style={{ 
             height:200,
             background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,20,121,0.8631827731092036) 35%, rgba(0,212,255,1) 100%)',
             display:'flex',
             justifyContent:'center',
             alignItems:'center'
          }}>
            <h1 style={{ 
                fontsize:60,
                color:"#fff"
             }}>Teacher</h1>
         </header>

         <section style={{ 
              width: "80%",
              margin:'0 auto',
              padding: '60px 0',
              display:"flex",
             columnGap:"5%",
             rowGap:48,
              flexWrap:'wrap' 

          }} >

            {
          
          teachers.map(function(item,index){

         return(

            <div style={{  width:'20%' }}  key={index}>
            <img src={item.image} width="100%" alt={item.name}/>
            <h2  style={{ panding:0,margin:0 }}>{item.name}</h2>
            <p style={{ panding:0,margin:0 }}>{item.qua}</p>
       </div>




         )

          })




            }









         </section>







        <Footer />
        </div>
    )
}
export default Teacher