import React from "react";
import { useNotifications } from "@/context/NotificationContext";

interface NotificationsPanelProps {
  isOpen: boolean;
  onClose?: () => void;
}

export default function NotificationsPanel({ isOpen, onClose }: NotificationsPanelProps) {
  const { notifications, markAsRead, markAllAsRead, deleteNotification } = useNotifications();

  if (!isOpen) return null;

  const sortedNotifications = [...notifications].sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 safe-top safe-bottom" onClick={onClose}>
      <div
        className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-xl flex flex-col safe-top safe-bottom"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <h2 className="font-['Montserrat',Helvetica] font-bold text-lg">Notifications</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Mark All as Read */}
        {notifications.some(n => !n.read) && (
          <div className="px-4 py-2 border-b border-gray-100">
            <button
              onClick={markAllAsRead}
              className="text-sm text-[#0088ff] font-semibold hover:opacity-80 transition-opacity"
            >
              Mark all as read
            </button>
          </div>
        )}

        {/* Notifications List */}
        <div className="flex-1 overflow-y-auto">
          {sortedNotifications.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4">
              <div className="text-5xl">🔔</div>
              <p className="text-gray-500 text-center text-sm">No notifications yet</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {sortedNotifications.map((notification) => (
                <div
                  key={notification.id}
                  onClick={() => {
                    if (!notification.read) markAsRead(notification.id);
                  }}
                  className={`p-4 cursor-pointer transition-colors ${
                    notification.read ? "bg-white" : "bg-blue-50 hover:bg-blue-100"
                  }`}
                >
                  <div className="flex gap-3">
                    <div className="text-2xl flex-shrink-0">{notification.icon}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-['Montserrat',Helvetica] font-semibold text-sm text-black">
                          {notification.title}
                        </h3>
                        {!notification.read && (
                          <div className="w-2 h-2 rounded-full bg-[#0088ff] flex-shrink-0 mt-1.5"></div>
                        )}
                      </div>
                      <p className="font-['Montserrat',Helvetica] text-xs text-gray-600 mt-1 line-clamp-2">
                        {notification.message}
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs text-gray-400">
                          {notification.timestamp.toLocaleDateString()} {notification.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            deleteNotification(notification.id);
                          }}
                          className="text-xs text-red-500 hover:text-red-600 font-semibold"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
