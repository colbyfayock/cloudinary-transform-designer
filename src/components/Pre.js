import React from 'react';

const Pre = ({ children }) => {
  return (
    <div className="pre">
      <pre>
        <code>
{ children }
        </code>
      </pre>
    </div>
  )
}

export default Pre;