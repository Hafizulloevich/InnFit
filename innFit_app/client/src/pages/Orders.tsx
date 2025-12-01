import React from "react";
import { useOrders } from "@/context/OrderContext";

interface OrdersProps {
  onBack?: () => void;
  onSelectOrder?: (orderId: string) => void;
}

export default function Orders({ onBack, onSelectOrder }: OrdersProps) {
  const { getOrders } = useOrders();
  const orders = getOrders();

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", hour: "2-digit", minute: "2-digit" });
  };

  return (
    <main className="relative min-h-screen w-full flex flex-col bg-[#f9f9f9] safe-top safe-bottom">
      <header className="container-responsive pt-4 pb-4 flex items-center gap-4 border-b bg-white">
        <button
          onClick={onBack}
          className="p-2 -ml-2 hover:bg-gray-100 rounded-lg transition-colors active:scale-95"
        >
          <svg width="12" height="20" viewBox="0 0 12 20" fill="none">
            <path d="M10 2L2 10L10 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h1 className="font-['Montserrat',Helvetica] font-semibold text-lg text-black">My Orders ({orders.length})</h1>
      </header>

      <div className="flex-1 overflow-y-auto pb-8">
        {orders.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-96 gap-4">
            <div className="text-6xl">📦</div>
            <p className="font-['Montserrat',Helvetica] text-gray-500 text-center">No orders yet</p>
          </div>
        ) : (
          <div className="container-responsive py-6 space-y-4">
            {orders.map((order) => (
              <div
                key={order.id}
                onClick={() => onSelectOrder?.(order.id)}
                className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-all cursor-pointer active:scale-95"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-['Montserrat',Helvetica] font-semibold text-sm text-black">{order.id}</p>
                    <p className="font-['Montserrat',Helvetica] text-xs text-gray-500">{formatDate(order.timestamp)}</p>
                  </div>
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                    order.status === "delivered" ? "bg-green-100 text-green-700" :
                    order.status === "shipped" ? "bg-blue-100 text-blue-700" :
                    "bg-yellow-100 text-yellow-700"
                  }`}>
                    {order.status === "delivered" ? "Delivered" : order.status === "shipped" ? "Shipped" : "Pending"}
                  </span>
                </div>

                <div className="mb-3 pb-3 border-b border-gray-100">
                  <div className="flex flex-wrap gap-2">
                    {order.items.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <img src={item.productImage} alt={item.productName} className="w-10 h-10 rounded object-cover" />
                        <div>
                          <p className="font-['Montserrat',Helvetica] text-xs font-medium text-black">{item.productName}</p>
                          <p className="font-['Montserrat',Helvetica] text-xs text-gray-500">Qty: {item.quantity}</p>
                        </div>
                      </div>
                    ))}
                    {order.items.length > 3 && (
                      <div className="text-xs text-gray-500 font-medium">+{order.items.length - 3} more</div>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-['Montserrat',Helvetica] text-xs text-gray-500">Total: {order.items.length} item{order.items.length !== 1 ? "s" : ""}</p>
                    <p className="font-['Montserrat',Helvetica] font-bold text-sm text-black">${order.total.toFixed(2)}</p>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18L15 12L9 6" stroke="#0088ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                {order.address && (
                  <div className="mt-3 pt-3 border-t border-gray-100 text-xs text-gray-600">
                    <p className="font-medium">{order.address.fullName}</p>
                    <p>{order.address.street}, {order.address.city}, {order.address.state} {order.address.zip}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
