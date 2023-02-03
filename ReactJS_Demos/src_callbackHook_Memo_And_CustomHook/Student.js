

import React from 'react'

function Student({text,count}) {

    console.log("Rendering ",text)

  return (
    <div>
        {text} - {count}
    </div>
  )
}


export default React.memo(Student);