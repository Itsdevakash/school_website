import Navbar from './Navbar'
import Footer from './Footer'
const About=()=>{
const aboutDetails =[

    {
        Company: 'Alfreds Futterkiste' ,
        Contact :  'Maria Anders' ,
        Country: 'Germany' ,
    },
{
    Company: 'Centro comercial Moctezuma' ,
    Contact :  'Francisco Chang' ,
    Country: 'Mexico' ,
},
{
    Company: 'Ernst Handel' ,
    Contact : 'Roland Mendel'  ,
    Country: 'Austria' ,
},


{
    Company: 'Island Trading' ,
    Contact : 'Helen Bennett'  ,
    Country:  'UK',
},


{
    Company: 'Laughing Bacchus Winecellars' ,
    Contact :  'Yoshi Tannamuri' ,
    Country:  'Canada',
},

{
    Company: 'Magazzini Alimentari Riuniti' ,
    Contact :  'Giovanni Rovelli' ,
    Country: 'Italy' ,
}



]
  

    return(
        <div>

            <Navbar />
        <center>  <h2 >HTML Table</h2>  </center>  
        <div style={{padding: '2%',}}>

<table style={{ 
     fontFamily: 'arial, sans-serif',
     borderCollapse: 'collapse',
     width: '100%',
    
      }}>
        <thead>
  <tr>
  <th  style={{ 
         border:'1px solid #dddddd',
         textAlign: 'left',
         padding: '8px',
     }}>S.No</th>
    <th  style={{ 
         border:'1px solid #dddddd',
         textAlign: 'left',
         padding: '8px',
     }}>Company</th>
    <th  style={{ 
         border:'1px solid #dddddd',
         textAlign: 'left',
         padding: '8px',
     }}>Contact</th>
    <th  style={{ 
         border:'1px solid #dddddd',
         textAlign: 'left',
         padding: '8px',
     }}>Country</th>
  </tr>
  </thead>

  <tbody>
    {
        aboutDetails.map((item,index)=>(
     
  <tr style={{ backgroundColor: index % 2 === 0 ? '#dddddd' : '' }} key={index}  >
      <td   style={{ 
         border:'1px solid #dddddd',
         textAlign: 'left',
         padding: '8px',
     }}>{index+1}</td>
    <td   style={{ 
         border:'1px solid #dddddd',
         textAlign: 'left',
         padding: '8px',
     }}>{item.Company}</td>
    <td  style={{ 
         border:'1px solid #dddddd',
         textAlign: 'left',
         padding: '8px',
     }}>{item.Contact}</td>
    <td  style={{ 
         border:'1px solid #dddddd',
         textAlign: 'left',
         padding: '8px',
     }}>{item.Country}</td>
  </tr>
     ))
}
  </tbody>

 
</table>
</div>
        <Footer />
        </div>
    )
}
export default About

