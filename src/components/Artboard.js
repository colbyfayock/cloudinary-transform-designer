import React from 'react';

const Artboard = ({ children, className }) => {
  let artboardClassName = 'artboard';

  if ( className ) {
    artboardClassName = `${artboardClassName} ${className}`;
  }

  return (
    <section className={artboardClassName}>
      { children }
    </section>
  )
}

export default Artboard;