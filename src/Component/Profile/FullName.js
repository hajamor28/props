import React from 'react'


const FullName = ({firstName,lastName ,children,Handle} ) => {
    console.log (firstName,lastName);
  return (
    <div>
        <h3> {firstName + '   ' + lastName }</h3>
        {children}
        <button onClick={()=>Handle()}>Click me</button>
      
    </div>
  )
}

export default FullName
