import { useEffect, useRef } from 'react';

/**
 * Хук, предназначенный для фокусировки на элементе.
 * И при помощи события keydown, фокус устанавливается каждый раз,
 * когда пользователь нажимает любую клавишу
 *
 * @return - elementRef: Ссылка на DOM-element
 */
export const useAutoFocus = <T extends HTMLElement>() => {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const focusElement = () => {
      if (elementRef) {
        elementRef.current?.focus();
      }
    };

    focusElement();

    document.addEventListener('keydown', focusElement);

    return () => {
      document.removeEventListener('keydown', focusElement);
    };
  }, []);

  return elementRef;
};
