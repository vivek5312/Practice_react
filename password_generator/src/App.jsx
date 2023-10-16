import { useCallback, useEffect,useRef} from 'react';
import { useState } from 'react';
import './App.css'
function App() {
  const [Password,setpassword]=useState('');
  const [length,setlength]=useState(8);
  const[number,setNumber]=useState(true);
  const[charcter,setCharacter]=useState(true);
  const passwordRef=useRef(null)

  let randomPass=useCallback(()=>{
    let pass=''
    let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if(number){
      str+='0123456789'
    }
    if(charcter){
      str+='@#$%&*'
    }
for(var i=0;i<=length;i++){
  let char=Math.floor(Math.random()*str.length+1)
  pass+=str.charAt(char)
}
setpassword(pass)

  },[length,setpassword,number,charcter])

  const copyPasswordHandler= useCallback(()=>{
  
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(Password)

  },[Password])

  useEffect(()=>{
randomPass()
  },[length,number,charcter,randomPass])

  return (
    <>
    <div className='pass'>
      <h1 className='title'>Password Generator</h1>
      <div className='inputdiv'>
        <input
        value={Password}
        type='text'
        placeholder='password'
        readOnly
        className='input'
        ref={passwordRef}
        />
        <button className='btn' onClick={copyPasswordHandler}>Copy</button>
      </div>
      <div className='div'>
      <div className='rangediv'>
        <input
        type='range'
        min={8}
        max={25}
        value={length}
        onChange={(e)=>setlength(e.target.value)}
        className='inputRange'
        />
        <label className='rangeName'>Length :{length}</label>
      </div>
      <div className='number'>
        <input
        type='checkbox'
       defaultChecked={number}
       id='numberValue'
       className='numberInput'
       onChange={()=>setNumber((prev)=>!prev)}
       />
       <label className='numberLabel'>Number</label>
      </div>
      <div className='char'>
        <input
        type='checkbox'
       defaultChecked={charcter}
       id='charValue'
       className='charInput'
       onChange={()=>setNumber((prev)=>!prev)}
       />
       <label className='charLabel'>Character</label>
      </div>
      </div>
    </div>
    </>
  )
}

export default App
