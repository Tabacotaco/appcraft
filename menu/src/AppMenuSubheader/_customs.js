import { useEffect, useMemo, useContext } from 'react';
import { AppMenuContext } from '../utils/_context';

export function useRecognizeEffect(uid) {
  const { onRecognize } = useContext(AppMenuContext);
  const option = useMemo(() => ({ uid }), [uid]);

  useEffect(() => {
    onRecognize(option);

    return () => onRecognize(uid);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [option]);
}
