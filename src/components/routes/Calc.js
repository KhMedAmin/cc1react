import React, { useState } from 'react'

import './style2.css'

export default function Calc() {

const [exp,setExp]=useState('');


const clear=()=>{

 setExp('');
}

const result=()=>{
  try {
  let v=exp;
    setExp(eval(v));
    
   }
  catch(error){
    setExp('expression non valide')
  }
}
const tapecar=(e)=>{


let oldval=exp;
let newval=oldval+e.target.value;
setExp(newval);
}

  return (
    <div>
      <h1>CALCULATRICE</h1>
    <div className="calculator">
      <input value={exp} type="text"/>
      <div>
        <input onClick={(e) => tapecar(e)} type="button" value="1" />
        <input onClick={(e) => tapecar(e)} type="button" value="2" />
        <input onClick={(e) => tapecar(e)} type="button" value="3" />
      </div>
      <div>
        <input onClick={(e) => tapecar(e)} type="button" value="4" />
        <input onClick={(e) => tapecar(e)} type="button" value="5" />
        <input onClick={(e) => tapecar(e)} type="button" value="6" />
      </div>
      <div>
        <input onClick={(e) => tapecar(e)} type="button" value="7" />
        <input onClick={(e) => tapecar(e)} type="button" value="8" />
        <input onClick={(e) => tapecar(e)} type="button" value="9" />
      </div>
      <div>
        <input onClick={(e) => tapecar(e)} type="button" value="." style={{ background: 'LawnGreen' ,color:'white'}}/>
        <input onClick={(e) => tapecar(e)} type="button" value="0" />
        <input onClick={(e) => tapecar(e)} type="button" value="/" style={{ background: 'LawnGreen' ,color:'white'}}/>
      </div>
      <div>
        <input onClick={(e) => tapecar(e)} type="button" value="-" style={{ background: 'LawnGreen' ,color:'white'}}/>
        <input onClick={(e) => tapecar(e)} type="button" value="*" style={{ background: 'LawnGreen' ,color:'white'}}/>
        <input onClick={(e) => tapecar(e)} type="button" value="+" style={{ background: 'LawnGreen' ,color:'white'}}/>
      </div>
      <div>
        <input style={{ background: 'red' }} onClick={clear} type="button" value="C" className="clear" />
        <input onClick={result} type="button" value="=" style={{ background: 'orange',minWidth:'140px' }} />
        
      </div>
    </div>
    </div>
  )
}
