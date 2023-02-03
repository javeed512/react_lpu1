


import React from 'react'

 function Title() {

    console.log('title render')

  return (
    <div>
      <h1>React Title Component</h1>
    </div>
  )
}


export default React.memo(Title);
