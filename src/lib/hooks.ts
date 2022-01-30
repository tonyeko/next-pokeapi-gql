import { useCallback, useState } from "react";

export const useToggle = (
  initialState = false
): [boolean, (value?: boolean) => void] => {
  const [state, setState] = useState<boolean>(initialState);
  const toggle = useCallback(
    (value?: boolean): void =>
      value ? setState(value) : setState((state) => !state),
    []
  );
  return [state, toggle];
};

export const useDisclosure = (
  initialState = false
): { isOpen: boolean; onOpen: () => void; onClose: () => void } => {
  const [isOpen, setIsOpen] = useToggle(initialState);
  const onOpen = useCallback(() => setIsOpen(true), [setIsOpen]);
  const onClose = useCallback(() => setIsOpen(false), [setIsOpen]);
  return { isOpen, onOpen, onClose };
};
