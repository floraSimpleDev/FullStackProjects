import { useEffect } from "react";

type ToastProps = {
  message: string;
  type: "SUCCESS" | "ERROR";
  onClose: () => void;
};

const Toast = ({ message, type, onClose }: ToastProps) => {
  // toast will be closed after 2 seconds displayed
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  //different types of styles
  const styles =
    type === "SUCCESS"
      ? "fixed top-4 right-4 z-5 p-4 rounded-md bg-[#20e3ac] text-white max-w-md"
      : "fixed top-4 right-4 z-5 p-4 rounded-md bg-red-400 text-white max-w-md";

  return (
    <aside className={styles}>
      <article className="flex justify-center items-center">
        <blockquote className="text-lg font-semibold">{message}</blockquote>
      </article>
    </aside>
  );
};

export default Toast;
