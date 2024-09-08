// import React from "react";
// import { Link } from "react-router-dom";



// const Navbar=(props)=>{
//     let loggedin=props.loggedin
//     let setloggedin=props.setloggedin
// return(
//     <div className="flex  justify-evenly">
      

//         <nav >
//             <ul className="flex gap-3">
//                 <li><Link to='/home'> Home</Link></li>
//                 <li><Link to='/home'> About</Link></li>
//                 <li><Link to='/home'> Contact</Link></li>
//             </ul>
//         </nav>



        


//      <div className="flex m-8 p-7 text-white ml-5 mr-3 gap-3"> 
//       {!loggedin &&
//         <Link to='/home'>
//             <button className="text-white">
//                 Login
//             </button>
//         </Link> 
//       }
   
      
//        {loggedin &&
//         <Link to='/'>       
//             <button className="text-white" onClick={()=>{
//                 setloggedin(false);
               
                
//             }}>
//                Logout
//             </button>
//         </Link>
//       }
      

//     </div>  
//       </div>
// )
// }

// export default Navbar;