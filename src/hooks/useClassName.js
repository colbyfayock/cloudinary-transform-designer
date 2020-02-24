function useClassName({ component, additionalParent }) {

  let componentClassName = component;

  if ( typeof additionalParent === 'string' ) {
    componentClassName = `${componentClassName} ${additionalParent}`;
  }

  function childClassName(child) {
    return `${component}-${child}`;
  }

  return {
    componentClassName,
    childClassName
  };

};

export default useClassName;