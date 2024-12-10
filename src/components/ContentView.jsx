import React from 'react'

const ContentView = ({ view }) => {
  return (
    <div
     style={{ 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80vh'
     }}
    >
        <div>
            {view.content}
        </div>
    </div>
  )
}

export default ContentView