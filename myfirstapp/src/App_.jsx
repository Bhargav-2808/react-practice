//lac  18 and 19

import React, { createContext, useState , useEffect } from 'react';
import AddIcon from '@material-ui/icons/Add';
import { AssignmentReturnOutlined } from '@material-ui/icons';
import axios from 'axios';

// function main_(){

//     let currDate = new Date(2020,5,5,7);
//     currDate = currDate.getHours();

//     const cssstyele = {};
//     let greet = '';

//     if(currDate>=1 && currDate<=11)
//     {
//         greet= 'Good Morning';


//         cssstyele.color ='green';
//     }
//     else if(currDate>=12 && currDate < 19)
//     {
//         greet = 'Good Afternoon';
//         cssstyele.color ='red';
//     }
//     else{
//         greet='good night';
//         cssstyele.color ='yellow';
//     }

//     return( <div>
//          <h1>Hello ,<span style={cssstyele}> {greet}</span> </h1>
//                 </div>)

// }

// export default main_


// lac 20


// let name = 'Bhargav';
// const youtuber = 'Techno gamerz';
// const favpro = 'Python';

// function myname(){
//     return name;
// }

// export default youtuber;
// export {favpro,myname};

 
//hooks lac 30 

// import React, { useState } from 'react';



// const App_ = () =>{

// const [count_ , setCount] =  useState(0);

// const Incnum = () => {
//     setCount(count_ + 1);
//    // console.log('clicked');
// }


//     return(
//         <>
//             <h2> {count_} </h2>
//             <button onClick={Incnum}>Click here</button>
//         </>
//     )

// }

// export default App_;



// lac 31 

// import React, { useState } from 'react';
// const App_ = () =>{


// let curr = new Date().toLocaleTimeString();
// const [Ctime, settime] =  useState(curr);


// const updatetime = () => {

// curr = new Date().toLocaleTimeString();
// settime(curr);
   
// }


//     return(
//         <>
//             <h2> {Ctime} </h2>
//             <button onClick = {updatetime}>Click here</button>
//         </>
//     )

// }

// export default App_;





// const App_ = () =>{
//     const pur = '#8e44ad';
    
//     const [bg,setbg]=useState(pur);
//     const [name , setname] = useState('click here');

//     const change = () =>{
//         //console.log("clicked");
//         let newbg = "#34495e";
//         setbg(newbg);
//         const newname = "Get back to work";
//         setname(newname);

//     }

//     const bgback = () =>{

    
//         setbg(pur);
//         setname("Click here");

//     }
//     return(

//         <>

//         <div className="centerbutton" style = { {backgroundColor:bg } }>
//             <button onClick = {change} onDoubleClick ={bgback}>
//                 {name}
//             </button>
//         </div>
        
        
//         </>


//     );
// }


// export default App_;


// lac 33 forms


// const App_ = () =>{


    

//     const [name_,setname] = useState("");
//     const [fullname_ , setfullname] = useState();
//     const inputevent = (event) =>{



//         setname(event.target.value);
//      }

//     const click = () =>{
//         setfullname(name_)
//     }

//     return(
//         <>
    
//         <div className="form_">
//             <h1> hello  {fullname_}</h1>
//             <input type= "text"  onChange={inputevent} value={name_}/><br/>
//             <button onClick= {click}>Click here</button>
//         </div>

//     </>
//     );
   

// }


// export default App_;

//lac 34,35


// const App_ = () =>{


    

//     const [name_,setname] = useState("");
//     const [fullname_,setfullname] = useState();

//     const [pwd, setpwd] = useState("");
//     const [pwdfull, setpwdname] = useState();


//     const inputevent = (event) =>{

//         setname(event.target.value);
       
//      }


//     const inputeventtwo = (event) =>{

//         setpwd(event.target.value);

//     }
//     const click = (event) =>{
//         event.preventDefault();
//         setfullname(name_);
//         setpwdname(pwd);

//     }

//     return(
//         <>

//         <form onSubmit= {click} >
    
//         <div className="form_">
//         <h1> hello  {fullname_} {pwdfull}</h1>
            
//             <input type= "text"  onChange={inputevent} value={name_} placeholder="Enter your name"/><br/>
//             <input type= "text"  onChange={inputeventtwo} value={pwd} placeholder="Enter your password" /><br/>
//             <button type="submit">Click here</button>
//         </div>

//         </form>

//     </>
//     );
   

// }


// export default App_;

//lac 36


// const App_ = () =>{


//     const [fullname,setfullname] = useState({
//        fname: "",
//        lname: "",
//        email: "",
//     });
    

//     const inputevent = (event) =>{

//         const value = event.target.value;
//         const name = event.target.name;


//         setfullname((prevalue) =>{
            
//             if(name === 'fName'){

//                 return{
//                     fname: value,
//                     lname: prevalue.lname,
//                     email: prevalue.email,
//                 }

//             }
//             else if(name === 'lName'){

//                 return{
//                     fname: prevalue.fname,
//                     lname: value,
//                     email: prevalue.email,
//                 }

//             }
//             else  if(name === 'Email'){

//                 return{
//                     fname: prevalue.fname,
//                     lname: prevalue.lname,
//                     email: value,

//                 }

//             }  
//         });

//      }


    
//     const click = (event) =>{
//         event.preventDefault();

//         alert("Form Submitted");

//     }

//     return(
//         <>

//         <form onSubmit= {click} >
    
//         <div className="form_">
//         <h1> Hello {fullname.fname} {fullname.lname}</h1>

//         <p>{fullname.email}</p>
            
//             <input type= "text"  onChange={inputevent} 
//             placeholder="Enter your name"
//             name="fName"
//             //value={fullname.fname}
//             />
//             <br/>
//             <input type= "text"  onChange={inputevent} 
//             placeholder="Enter your password"
//             name="lName"
//             //value={fullname.lname}
//             />
//             <br/>
//             <input type= "text"  onChange={inputevent} 
//             placeholder="Enter your email"
//             name="Email"
//             //value={fullname.lname}
//             />
//             <br/>
//             <button type="submit">Click here</button>
//         </div>

//         </form>

//     </>
//     );
   

// }


// export default App_;

// lac till 39
// const App_ = () =>{


//         const [fullname,setfullname] = useState({
//            fname: "",
//            lname: "",
//            email: "",
//         });
        
    
//         const inputevent = (event) =>{
    
//             const value = event.target.value;
//             const name = event.target.name;
    
    
//             setfullname((prevalue) =>{
                
//                 return{
//                     ...prevalue,

//                     [name] : value,

//                 }
     
//             });
    
//          }
    
    
        
//         const click = (event) =>{
//             event.preventDefault();
    
//             alert("Form Submitted");
    
//         }
    
//         return(
//             <>
    
//             <form onSubmit= {click} >
        
//             <div className="form_">
//             <h1> Hello {fullname.fname} {fullname.lname}</h1>
    
//             <p>{fullname.email}</p>
                
//                 <input type= "text"  onChange={inputevent} 
//                 placeholder="Enter your name"
//                 name="fname"
//                 //value={fullname.fname}
//                 />
//                 <br/>
//                 <input type= "text"  onChange={inputevent} 
//                 placeholder="Enter your password"
//                 name="lname"
//                 //value={fullname.lname}
//                 />
//                 <br/>
//                 <input type= "text"  onChange={inputevent} 
//                 placeholder="Enter your email"
//                 name="email"
//                 //value={fullname.lname}
//                 />
//                 <br/>
//                 <button type="submit">Click here</button>
//             </div>
    
//             </form>
    
//         </>
//         );
       
    
//     }
    
    
//     export default App_;



// lac 39

// import ToDo from './Todo';



// const App_ = () =>{


//     const [inputlist,setinputlist] = useState("");
//     const [item,setitem] = useState([]);


//     const itemEvent = (event) =>{
//         setinputlist(event.target.value);
//     }

//     const listofitems = () =>{
//         setitem((olditem) =>{
//             return [...olditem,inputlist];

//         })

    
//     setinputlist("");

//     }

//     const deleteitem = (id) =>{
//         setitem((olditem)=>{
//                 return olditem.filter( (arritem,index) =>{

//                     return index !== id;

//                 })
//         })
//     }
//     return(
//         <>
//             <div className="main_div">
//                 <div className="center_div">
//                     <h1> ToDo list APP</h1>
//                     <br/>
//                     <input type="text" placeholder="Add items" onChange={itemEvent} value={inputlist}/>
//                     <button onClick={listofitems}> <AddIcon/></button> 
//                     <ol>
//                     {/* <li>{inputlist}</li> */}
//                        { item.map( (itemval , index) => {

                           
//                            return <ToDo   
//                            text={itemval} 
//                            key={index} 
//                            id={index}
//                            onSelect={deleteitem}
//                            />;

//                         })

//                     }
//                     </ol>

//                 </div>

//             </div>
        
//         </>
//     );
// };

// export default App_

// lac 51 to 53
// import CompA from "./ComA";

// const Fname = createContext();
// const Lname = createContext();

// const App_ = () =>{
//     return(
//         <>
//             <Fname.Provider value={"Bhargav"}>
//                 <Lname.Provider value ={"Valani"}>
//                     <CompA/>
//                 </Lname.Provider>
//             </Fname.Provider>
           
//         </>
//     );

// }

// export default App_;
// export {Fname , Lname};


// lac 55


// const App_ = () =>{

//     const [num , setnum] = useState(0);
//     useEffect(()=>{

//         alert("clicked");
//     })

//     return(
//         <>
//             <button onClick  = { () =>{
//                 setnum(num+1);
//             }} > Click {num}</button>
//         </>
//     );

// }

// export default App_;


// lac 55

// const App_ = () => {
//     const [num , setnum] = useState();
//     const [name, setname] =  useState();
//     const  [move , setmove] = useState();

//     useEffect( ()=>{
//         async function getdata(){
//             const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
//             setname(res.data.name);
//             setmove(res.data.move);
//             console.log(res.data.move);

//         }
//         getdata();
//     });

//     return (

//         <>
//             <h1>You choose {num} value</h1>
//             <h1>Your name is  {name} </h1>
//             <h1>I have {move} moves</h1>
//             <select value= {num} onChange={ (event) =>{

//                 setnum(event.target.value);

//             }}>
//                 <option value="1">1</option>
//                 <option value="25">25</option>
//                 <option value="3">3</option>
//                 <option value="4">4</option>
//                 <option value="5">5</option>
//             </select>
//         </>
//     );

// }

// export default App_;

// lac 56 to 62 router

import {Route , Switch} from 'react-router-dom';
import About from "./About";
import Contact from './Contact';
import Error from './Error';
import Navbar_ from './Navbar_';
import User from './User';
import Search from './Search';
import Search_i from './Search_i';





// const App_ = () =>{

//     return(

//         <>
//             <Navbar_/>
//             <Switch>
//                 <Route exact path ='/' component={ ()=> <About ab="About"/>}/>
//                 {/* <Route exact path ='/' component={About}/> */}
//                 <Route  exact path ='/contact' component={()=> <Contact cn="Contact"/>}/>
//                 <Route exact path ='/user/:fn/:ln' component={User}/>
//                 <Route exact path = '/search' component={Search}/>
//                 <Route component={Error}/>
//             </Switch>

//             {/* <Contact/>
//             <About/>
//              */}
            
//         </>
//     );

// }
// export default App_;

    
    
