import React, { createContext, useContext, useState, useEffect } from "react";

export interface Notification {
  id: number;
  type: "purchase" | "delivery" | "news" | "update" | "discount" | "seasonal";
  title: string;
  message: string;
  read: boolean;
  timestamp: Date;
  icon: string;
}

interface NotificationContextType {
  notifications: Notification[];
  unreadCount: number;
  addNotification: (notification: Omit<Notification, "id" | "read" | "timestamp">) => void;
  markAsRead: (id: number) => void;
  markAllAsRead: () => void;
  deleteNotification: (id: number) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

const defaultNotifications: Notification[] = [
  {
    id: 1,
    type: "purchase",
    title: "Order Confirmed",
    message: "Your order #12345 has been confirmed. Total: $89.99",
    read: false,
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
    icon: "🛍️",
  },
  {
    id: 2,
    type: "delivery",
    title: "Package Shipped",
    message: "Your order is on the way! Expected delivery in 3-5 days.",
    read: false,
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
    icon: "📦",
  },
  {
    id: 3,
    type: "discount",
    title: "Exclusive Promo Code",
    message: "Use code SAVE20 for 20% off your next purchase!",
    read: false,
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    icon: "🎉",
  },
  {
    id: 4,
    type: "seasonal",
    title: "Seasonal Sale Alert",
    message: "Winter collection now on sale - Up to 50% off!",
    read: false,
    timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    icon: "❄️",
  },
  {
    id: 5,
    type: "news",
    title: "New Collection Launched",
    message: "Check out our latest Spring/Summer collection!",
    read: true,
    timestamp: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
    icon: "⭐",
  },
  {
    id: 6,
    type: "update",
    title: "App Update Available",
    message: "Update to the latest version for new features and improvements.",
    read: true,
    timestamp: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
    icon: "🔄",
  },
];

export function NotificationProvider({ children }: { children: React.ReactNode }) {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("notifications");
    if (saved) {
      setNotifications(JSON.parse(saved).map((n: any) => ({ ...n, timestamp: new Date(n.timestamp) })));
    } else {
      setNotifications(defaultNotifications);
      localStorage.setItem("notifications", JSON.stringify(defaultNotifications));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notifications", JSON.stringify(notifications));
  }, [notifications]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const addNotification = (notification: Omit<Notification, "id" | "read" | "timestamp">) => {
    const newNotification: Notification = {
      ...notification,
      id: Math.max(...notifications.map(n => n.id), 0) + 1,
      read: false,
      timestamp: new Date(),
    };
    setNotifications(prev => [newNotification, ...prev]);
  };

  const markAsRead = (id: number) => {
    setNotifications(prev =>
      prev.map(n => n.id === id ? { ...n, read: true } : n)
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev =>
      prev.map(n => ({ ...n, read: true }))
    );
  };

  const deleteNotification = (id: number) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  return (
    <NotificationContext.Provider value={{ notifications, unreadCount, addNotification, markAsRead, markAllAsRead, deleteNotification }}>
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotifications() {
  const context = useContext(NotificationContext);
  if (!context) throw new Error("useNotifications must be used within NotificationProvider");
  return context;
}
