import { useCallback, useEffect, useState } from "react";

export const ABModal = ({
  isOpen,
  onClose,
  onSubmit,
  // title,
  // body,
  // footer,
  // actionLable,
  disabled,
  // secondaryAction
  // secondaryLable,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    setShowModal(false);

    setTimeout(() => {
      onclose();
    }, 300);
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit();
  }, [disabled, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }

    secondaryAction();
  }, [disabled, secondaryAction]);

  if (!open) {
    return null;
  }
  return <div></div>;
};
