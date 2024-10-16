// Core
import { RefObject, useEffect } from "react";

export const useOnClickOutside = (
  ref: RefObject<HTMLElement>,
  handler: (event: MouseEvent) => void,
  closeRef?: RefObject<HTMLElement>,
  closeHandler?: () => void,
): void => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      let shouldCallHandler: boolean = true;
      if (closeRef && closeHandler) {
        if (closeRef.current && closeRef.current.contains(event.target as Node)) {
          closeHandler();
          shouldCallHandler = false;
        }
      }
      if (shouldCallHandler && ref.current && !ref.current.contains(event.target as Node)) {
        handler(event);
      }
    };
    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler, closeRef, closeHandler]);
};