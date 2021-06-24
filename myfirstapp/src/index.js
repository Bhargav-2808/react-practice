import React from 'react';
import ReactDOM from 'react-dom';
//import { favpro } from './App_';
//import favyoutuber , {favpro,myname} from './App_';
import './index.css';
import App_ from './App_';

//import {BrowserRouter} from 'react-router-dom'; 

// lac 10
// const fname = 'Bhargav'; 

// ReactDOM.render(
//   <>
//   <h2>My name is {fname}</h2>
//   <p>My luckey num is {1+2}</p>
//   <p>Rendom num is {Math.random()}</p>
//   </>,
//   document.getElementById('root')

// );

// In the pair of {} we can use only expression not the statement(like if condition)



// lac 11 template litrals

// const fname = 'Bhargav';
// const lname = 'valani';

// ReactDOM.render(
//     <>
//       <h1>My name is {fname + " " + lname}</h1>
//       <h1>{`My name is ${fname} ${lname}`}</h1>
//     </>,
//     document.getElementById('root')

// );


//lac 12 challenge

// const fname = 'Bhargav';
// const lname = 'valani';
// const d = new Date().toLocaleDateString();
// const t = new Date().toLocaleTimeString();
// ReactDOM.render(
//     <>
   
//       <h1>{`My name is ${fname} ${lname}`}</h1>
//       <p>{`current date is ${d}`}</p>
//       <p>{`Current time is ${t}`}</p>
//     </>,
//     document.getElementById('root')

// );


// lac 13 JSX attributes

// const fname = 'Bhargav';


// ReactDOM.render(

//     <>
//     <h2 contentEditable="true">My name is {fname}</h2> 
//     <a href="#">
//     <img src="#" alt="image"/>
//     </a>
//     </>,
//     document.getElementById('root')
// );
// you can store path in const than also display it.


// lac 14 css styling and importing css files in react


// const fname = 'Bhargav';


// ReactDOM.render(

//     <>
//     <h2 contentEditable="true" className="heading"> My name is {fname}</h2> 
//     <a href="#">
//     <div className="img_">
//     <img  src="https://images.pexels.com/photos/6335/man-coffee-cup-pen.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="image"/>
//     </div>
//     </a>
//     </>,
//     document.getElementById('root')
// );

// lac 15 add google fonts

// lac 16 add internal and inline css

// const fname = 'Bhargav';

// const heading ={
//     color : '#fa9191',
//     textTransform : 'capitalize',
//     textAlign:'center'
// }


// ReactDOM.render(

//     <>
//     <h2 contentEditable="true" style={ heading }> My name is {fname}</h2> 
//     <a href="#">
    
//     <img  src="https://images.pexels.com/photos/6335/man-coffee-cup-pen.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="image"/>
    
//     </a>
//     </>,
//     document.getElementById('root')
//);

// lac 17 challenge greetings 
// let currDate = new Date(2020,5,5,14);
// currDate = currDate.getHours();

// const cssstyele = {};
// let greet = '';

// if(currDate>=1 && currDate<=11)
// {
//     greet= 'Good Morning';


//     cssstyele.color ='green';
// }
// else if(currDate>=12 && currDate < 19)
// {
//     greet = 'Good Afternoon';
//     cssstyele.color ='red';
// }
// else{
//     greet='good night';
//     cssstyele.color ='yellow';
// }



// ReactDOM.render(

//     <>
//         <div>
//         <h1>Hello ,<span style={cssstyele}> {greet}</span> </h1>
//         </div>
//     </>,
//     document.getElementById('root')
// );


//lac 18 and 19

// ReactDOM.render(

//     <>
//         <App_/>
//     </>,
//     document.getElementById('root')
// );

// lac 20 import exportes6 modules


// to fatch all the thing you can write import * as que from './App_';
// Here all the return value you got as an object
// like que.default for default values and que.favyoutuber for other values
 
// ReactDOM.render(
    
//     <>

//         <ol>
//                 <li>{favpro}</li>
//                 <li>{favyoutuber}</li>
//                 <li>{myname()}</li>
//         </ol>

//     </>,document.getElementById('root')

// );


// lac 22 props in react js

//netfix app
// import sdata from './Sdata'

// import Card from './Cards';

// ReactDOM.render(
//    <>
//    <h1 className="heading_style">Top two netfilx series</h1>

//    {
//        sdata.map((val) =>{
//            return(
//             <Card imgsrc={sdata[0].imgsrc}
//             title_={sdata[0].title_}
//             sname={sdata[0].sname}
//             link_={sdata[0].link_}
//    />
//            );
//        })
//    }
   
  
//    </>
//    ,document.getElementById('root')
// );



// hooks lac 30

// ReactDOM.render(
//     <>
//         <App_/>
//     </>
//     ,document.getElementById('root')
// );

// hooks lac 31 

// ReactDOM.render(
//     <>
//         <App_/>
//     </>
//     ,document.getElementById('root')
// );

// lac 32 events+
// ReactDOM.render(
//     <>
//         <App_/>
//     </>,document.getElementById('root')

// );


// lac 33 forms

// ReactDOM.render(
//         <>
//             <App_/>
//         </>,document.getElementById('root')
    
//     );
    
//lac 34,35 ,36 37 ,38,39 forms

// ReactDOM.render(
//         <>
//             <App_/>
//         </>,document.getElementById('root')
    
//     );

// lac 40   to 66

// import {BrowserRouter} from 'react-router-dom'; 

// ReactDOM.render(
//             <>
//                 <BrowserRouter>
//                 <App_/>
//                 </BrowserRouter>
//             </>,document.getElementById('root')
        
//         );


        ReactDOM.render(
                    <>
                        
                        <App_/>
                        
                    </>,document.getElementById('root')
                
                );



    

