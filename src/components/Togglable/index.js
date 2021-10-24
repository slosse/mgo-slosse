import React, { useState, useImperativeHandle } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

const Togglable = React.forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none'}

  const toggleVisibility = () => {
    setVisible(!visible)
  } 

  const setVisibilityTrue = () => {
      if(!visible) {
        toggleVisibility()
      }
  }


  useImperativeHandle(ref, () => {
    return {
        setVisibilityTrue
    }
  })

  return (
    <div>
      <div style={hideWhenVisible}>
        <button className="btn btn-primary" onClick={toggleVisibility}>{props.buttonLabelShow}</button>
      </div>
      <div style={showWhenVisible}>
         <button className="btn btn-primary" onClick={toggleVisibility}>{props.buttonLabelHide ? props.buttonLabelHide : 'Cerrar'}</button>
         {props.children}
      </div>
    </div>
    ) 
})

export default Togglable