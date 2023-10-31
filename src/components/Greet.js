// function component

import React from 'react';

// function  Greet(){
//     return <h1>Hello God</h1>
// }

// const Greet = (props) => {
//     console.log(props);
//     return (
//         <div>
//             <h1>Hello {props.name}</h1>
//             {props.children}
//         </div>
//     )
// }

// props destracturing 

const Greet = (props) => {
    const {name}= props;
    return (
        <div>
            <h1>Hello {name}</h1>
        </div>
    )
}

export default Greet;