import React from 'react';

const Artboard = ({ children }) => {
  return (
    <section className="artboard">
      <div className="artboard-layout">
        { children }
      </div>
    </section>
  )
}

export default Artboard;