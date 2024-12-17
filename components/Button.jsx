import React from 'react'

const Button = (label, href) => {
  return (
<a href={href}>
    <label for="button">
        {label}
    </label>
    <input id='button' type='button'/>
</a>
)
}

export default Button