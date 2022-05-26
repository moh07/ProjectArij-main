import { useCallback, useState } from 'react';

export function useModalState(initialState: boolean = false) {
  const [visible, setVisible] = useState(initialState);

  const close = useCallback(() => {
    setVisible(false);
  }, [setVisible]);

  const open = useCallback(() => {
    setVisible(true);
  }, [setVisible]);

  return {
    close,
    open,
    visible,
  };
}
