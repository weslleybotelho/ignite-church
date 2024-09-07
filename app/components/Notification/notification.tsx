import { useEffect } from 'react';
import Image from 'next/image';
import successIcon from '@/public/svg/checkbox-circlesvg.svg';
import './notification.css';

interface NotificationProps {
  message: string;
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="notification">
      {/* <Image src={successIcon} alt="Success Icon" width={24} height={24} /> */}
      <span className="color-black">{message}</span>
    </div>
  );
};

export default Notification;
