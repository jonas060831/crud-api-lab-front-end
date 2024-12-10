import React from 'react'

const ContentView = ({ view}) => {
  return (
    <div>

        <h1>{view.title}</h1>
        <div>
            {view.content}
        </div>
    </div>
  )
}

export default ContentView