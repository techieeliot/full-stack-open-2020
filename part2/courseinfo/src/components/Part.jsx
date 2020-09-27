import React from 'react'

const Part = ({id, name, exercises}) => {
    return (
      <tr key={id}>
    <td>{name}</td><td style={{textAlign: "right"}}>{exercises}</td> 
      </tr>
    )
  }

export default Part