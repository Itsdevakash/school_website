
import {Link} from "react-router-dom"
import {useState} from 'react'
const Testing = ()=>{

  //array distructure
    // var [name,subject]= ["akash","math"]
    //  console.log(name);





    //  object distructure



//     const{subject:sub,fullName:name,roll:nub} ={
// fullName :"re",
// roll:10,
// subject:"hindi"
// }

// console.log(name)
// console.log(sub)
// console.log(nub)


//nestobject


//  const {one: {english},two:{english:toenglish}} = {
//  one:{

//   english: "ravi",
//   math:"rahul"
//  },
//  two:{

//   english: "om",
//   math:"kl"
//  },


//  }
//  console.log(english)
//  console.log(toenglish)


    const [show,setShow] = useState(true)
    const [datatest,setDatatest]= useState(false)

    const test = (x,y)=>{
     console.log(x,y)

    }

    const stateused = ()=>{

         
        setShow(!show)
   
       }


       const dataShow=()=>{
        setDatatest(!datatest)

       }
   

 const demo = ()=>{

alert('hello');


    }



    return(
       <div> 
        <center>


        <h1>AKASH Maurya {show}</h1>

        {/* //logical condition */}  
        {  show &&  <p>maurya@gmail.com</p>   }
        <br></br>
        { show === false ? 'maurya@gmail.com' : 'No Email id' } &nbsp;  <br></br>



        <button  onClick={demo}>Demo</button>  
        <br></br>




        <button  onClick={()=>{test(4,5)}}>Call by value</button>  <br></br>


        <button  onClick={stateused}>{show === true ? 'Hide' :'Show' }</button>
<br></br>
         <Link to="/">Home</Link>
         
         
         
         </center>




         <button onMouseOver={demo}> onMouseOver</button>
         <button onMouseOut={demo}> onMouseOut</button>
         <button onClick={demo}> onClick</button>
         <button onDoubleClick={demo}> onDoubleClick</button>
         <br></br>
         <h1 style={{ 
            color : datatest  === false ? 'blue' :'red',
            fontSize :  datatest  === false ? 20 : 50,
            fontFamily: datatest === false ? 'cursive' :'system-ui' 
          }}>AKASH</h1>
    <button onClick={()=>dataShow()}> { datatest === false ?'Start':'done' } </button>





       </div>

    )
}
export default Testing