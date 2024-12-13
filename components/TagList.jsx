import React from 'react'

const TagList = (tags) => {
  return (
    <span>
        <ul className=''>
            {tags.forEach(tag => {
                <li>
                    <span>
                        <p>{tag}</p>
                    </span>
                </li>
            });}
        </ul>
    </span>
)
}

export default TagList