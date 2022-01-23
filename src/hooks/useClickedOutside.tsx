import React from 'react';

type ComponentRef<T = any> = React.MutableRefObject<T>;

const useClickedOutside = (componentRef: ComponentRef) => {
  const [clickedOutside, setClickedOutside] = React.useState(false);

  const hasClickedOutside = React.useCallback(
    (event: Event) =>
      setClickedOutside(
        componentRef.current && !componentRef.current.contains(event.target)
      ),
    [componentRef]
  );

  React.useEffect(() => {
    document.addEventListener('mousedown', hasClickedOutside);

    return () => document.removeEventListener('mousedown', hasClickedOutside);
  }, [componentRef]);

  return clickedOutside;
};

export default useClickedOutside;
