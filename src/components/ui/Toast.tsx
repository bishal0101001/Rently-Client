import { useState, useEffect } from "react";

interface Props {
  message: string;
  duration?: number;
  onClose?: () => void;
}

const Toast = ({ message, duration = 3000, onClose }: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timeout = setTimeout(() => {
      setIsVisible(false);
      onClose && onClose();
    }, duration);
    return () => clearTimeout(timeout);
  }, [duration, onClose]);

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white rounded-md py-2 px-4 z-50">
          <p className="text-sm">{message}</p>
        </div>
      )}
    </>
  );
};

export default Toast;
