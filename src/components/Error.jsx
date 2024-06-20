import React from 'react'
import { useRouteError } from 'react-router-dom'

function Error() {
    const error= useRouteError()
  return (
    <div style={{width:"100vw", height:"86vh"}}>
      <h2 style={{textAlign:"center"}}> <br/> <br/> Error: {error.message}!</h2> <br/> <br/>
      <pre  style={{textAlign:"center"}}>{error.status}- {error.statusText}</pre>
    </div>
  )
}

export default Error
