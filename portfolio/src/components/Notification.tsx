import { CheckCircle, AlertCircle, X } from "lucide-react";

interface NotificationProps {
  show: boolean;
  type: "success" | "error";
  message: string;
  onClose: () => void;
}

const Notification = ({
  show,
  type,
  message,
  onClose,
}: NotificationProps) => {
  return (
    <div
      className={`
        fixed top-6 left-1/2 -translate-x-1/2 z-[9999]
        transition-all duration-500
        ${
          show
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-10 pointer-events-none"
        }
      `}
    >
      <div
        className={`
          min-w-[320px]
          max-w-lg
          rounded-2xl
          border
          backdrop-blur-xl
          shadow-2xl
          px-5 py-4
          flex items-center gap-3
          ${
            type === "success"
              ? "bg-blue-950/90 border-blue-500/50"
              : "bg-red-950/90 border-red-500/50"
          }
        `}
      >
        {type === "success" ? (
          <CheckCircle className="text-blue-400" size={22} />
        ) : (
          <AlertCircle className="text-red-400" size={22} />
        )}

        <p className="text-sm text-gray-200 flex-1">{message}</p>

        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white transition"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
};

export default Notification;