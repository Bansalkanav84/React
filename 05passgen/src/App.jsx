import { useState, useCallback,useEffect, useRef } from 'react'


function App() {

  const [length, setLength] = useState(8)
  const [numAllow, setNumAllow] = useState(false)
  const [charAllow, setCharAllow] = useState(false)
  const [pass, setPass] = useState("")
  const [copied, setCopied] = useState(false);

  //ref hook
  const passRef = useRef(null)

  const passGen = useCallback( () => {
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    
    if (numAllow) str += "0123456789"
    if (charAllow) str += "!@#$%^&*()-_+=[]{}"

    for(let i=1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPass(pass)

  }, [length, numAllow, charAllow])

  const copyPass = useCallback( () => {
    passRef.current?.select()  
    window.navigator.clipboard.writeText(pass)
    setCopied(true);
    setTimeout(() => setCopied(false), 300);
  }, [pass])
  
  useEffect( () => {
    passGen()
  }, [length, numAllow, charAllow,passGen]
  )

  return (
    <>
      
      <div className="w-full max-w-md mx-auto shadow-md
      rounded-lg px-4 pb-7 my-8 mt-40 text-orange-500 bg-gray-700">
        <h1 className="text-white text-3xl flex justify-center px-3 py-5">Password Generator</h1>

        <div className="flex shadow rounded-lg overflow-hidden mt-2 mb-4">
        <input
            type='text'
            value={pass}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref={passRef}
        />
        <button 
        onClick={copyPass}
        className={`outline-none px-3 py-0.5 shrink-0 rounded-xl transition-all
          duration-300 ease-out  text-white
          ${copied ? "bg-red-700 scale-103" : "bg-blue-700 "}`}
        >Copy</button>
        </div>

        <div className='flex text-sm gap-x-2 py-2'>
         <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={6}
          max={100}
          value={length}
          className="cursor-pointer"
          onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
         </div>

         <div className="flex items-center gap-x-1">
          <input
          type='checkbox'
          defaultChecked={numAllow}
          id='numberInput'
          onChange={ () => {
            setNumAllow((prev) => !prev);
          }}
          />
          <label>Numbers</label>
         </div>

         <div className="flex items-center gap-x-1">
          <input
          type='checkbox'
          defaultChecked={charAllow}
          id='charInput'
          onChange={ () => {
            setCharAllow((prev) => !prev);
          }}
          />
          <label>Characters</label>
         </div>

        </div>

      </div>
      
      

    </>
  )
}

export default App
