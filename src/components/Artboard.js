import React from 'react';

import { useClassName } from 'hooks';

const Artboard = ({ children, className }) => {
  const { componentClassName } = useClassName({
    component: 'artboard',
    additionalParent: className
  });

  return (
    <section className={componentClassName}>
      { children }
    </section>
  )
}

export default Artboard;