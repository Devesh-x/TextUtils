import React from 'react'

export default function Alert(props) {
  const capitalize =(word)=>{
    const lower= word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissble fade show  d-flex align-items-center`} role='alert'>
      <strong>{props.alert.type}</strong>:{props.alert.msg}
      <button type='button'  className='btn-close ms-auto' data-bs-dismiss='alert' aria-label='Close'></button>
    </div>
  )
}