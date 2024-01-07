import React,{useState} from 'react';
import App from './App.css';

function Calculator() {

    const[value,setvalue] =useState('');

    function add1() {
        try {
            setvalue(eval(value));
        } catch (error) {
            alert('input wrong');
        }
    }
    
  
  return (
    <div className='background'>
        <div className="container">
                <div className="display"><input value={value} /></div>
            <form action="">
                
                <div>
                    <input type="text" value='AC' onClick={(e)=>{setvalue('')}}/>
                    <input type="text" value='DC' onClick={(e)=>{setvalue(value.slice(0,-1))}}/>
                    <input type="text" value='.' onClick={(e)=>{setvalue(value+e.target.value)}}/>
                    <input type="text" value='/' onClick={(e)=>{setvalue(value+e.target.value)}}/>
                </div>
                <div>
                    <input type="text" value='7' onClick={(e)=>{setvalue(value+e.target.value)}}/>
                    <input type="text" value='8' onClick={(e)=>{setvalue(value+e.target.value)}}/>
                    <input type="text" value='9' onClick={(e)=>{setvalue(value+e.target.value)}}/>
                    <input type="text" value='*' onClick={(e)=>{setvalue(value+e.target.value)}}/>
                </div>
                <div>
                    <input type="text" value='4' onClick={(e)=>{setvalue(value+e.target.value)}}/>
                    <input type="text" value='5' onClick={(e)=>{setvalue(value+e.target.value)}}/>
                    <input type="text" value='6' onClick={(e)=>{setvalue(value+e.target.value)}}/>
                    <input type="text" value='+' onClick={(e)=>{setvalue(value+e.target.value)}}/>
                </div>
                <div>
                    <input type="text" value='1' onClick={(e)=>{setvalue(value+e.target.value)}}/>
                    <input type="text" value='2' onClick={(e)=>{setvalue(value+e.target.value)}}/>
                    <input type="text" value='3' onClick={(e)=>{setvalue(value+e.target.value)}}/>
                    <input type="text" value='-' onClick={(e)=>{setvalue(value+e.target.value)}}/>
                </div>
                <div>
                    <input type="text" value='00' onClick={(e)=>{setvalue(value+e.target.value)}}/>
                    <input type="text" value='0' onClick={(e)=>{setvalue(value+e.target.value)}}/>
                    <input type="text" value='=' onClick={()=>{
                        add1();
                    }}/>
                    
                </div>
            </form>
        </div>
    </div>
  )
}

export default Calculator