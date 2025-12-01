import React, { useState, useEffect } from "react";
import { useProfile } from "@/context/ProfileContext";
import { useNotifications } from "@/context/NotificationContext";

interface ProfileProps {
  onBack?: () => void;
  onLogout?: () => void;
  onEditProfile?: () => void;
  onViewOrders?: () => void;
}

export default function Profile({ onBack, onLogout, onEditProfile, onViewOrders }: ProfileProps) {
  const { profile, updateProfile } = useProfile();
  const { notifications } = useNotifications();
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(profile);
  const [error, setError] = useState("");

  useEffect(() => {
    setFormData(profile);
  }, [profile]);

  const isAddressFormValid = 
    formData.address.street.trim().length > 0 && 
    formData.address.city.trim().length > 0 && 
    formData.address.state.trim().length > 0 && 
    formData.address.zipcode.trim().length > 0 && 
    formData.address.phone.trim().length > 0;

  const handleSave = () => {
    if (activeModal === "address" && !isAddressFormValid) {
      setError("Please fill in all address fields");
      setTimeout(() => setError(""), 3000);
      return;
    }
    updateProfile(formData);
    setIsEditing(false);
    setError("");
  };

  const menuItems = [
    { 
      icon: "📦", 
      label: "Orders", 
      value: "View your orders",
      id: "orders"
    },
    { 
      icon: "📍", 
      label: "Address", 
      value: "Manage your addresses",
      id: "address"
    },
    { 
      icon: "💳", 
      label: "Payment", 
      value: "Payment methods",
      id: "payment"
    },
    { 
      icon: "🔔", 
      label: "Notifications", 
      value: `${notifications.length} notifications`,
      id: "notifications"
    },
    { 
      icon: "🔒", 
      label: "Privacy", 
      value: "Privacy settings",
      id: "privacy"
    },
    { 
      icon: "❓", 
      label: "Help", 
      value: "Get support",
      id: "help"
    },
    { 
      icon: "ℹ️", 
      label: "About", 
      value: "App information",
      id: "about"
    },
  ];

  return (
    <main className="relative min-h-screen w-full flex flex-col bg-[#f9f9f9] safe-top safe-bottom">
      <header className="container-responsive pt-4 pb-2 flex items-center gap-4">
        <button 
          onClick={onBack}
          className="p-2 -ml-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <svg width="12" height="20" viewBox="0 0 12 20" fill="none">
            <path d="M10 2L2 10L10 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h1 className="font-['Montserrat',Helvetica] font-semibold text-lg text-black">Profile</h1>
      </header>

      <div className="container-responsive py-8">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#0088ff] to-[#0066cc] flex items-center justify-center text-white text-3xl font-bold mb-4">
            M
          </div>
          <h2 className="font-['Montserrat',Helvetica] font-bold text-xl text-black">Mirzo</h2>
          <p className="font-['Montserrat',Helvetica] text-sm text-gray-500">mirzo@hoshimov.com</p>
          <button
            onClick={onEditProfile}
            className="mt-4 px-6 py-2 border border-[#0088ff] text-[#0088ff] rounded-full text-sm font-semibold hover:bg-blue-50 active:scale-95 transition-all"
          >
            Edit Profile
          </button>
        </div>
      </div>

      <div className="flex-1 container-responsive pb-8">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {menuItems.map((item, index) => (
            <button
              key={item.label}
              onClick={() => {
                if (item.id === "orders") {
                  onViewOrders?.();
                } else {
                  setActiveModal(item.id);
                }
              }}
              className={`w-full flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors active:scale-95 ${
                index !== menuItems.length - 1 ? "border-b border-gray-100" : ""
              }`}
            >
              <span className="text-2xl">{item.icon}</span>
              <div className="flex-1 text-left">
                <p className="font-['Montserrat',Helvetica] font-medium text-sm text-black">{item.label}</p>
                <p className="font-['Montserrat',Helvetica] text-xs text-gray-500">{item.value}</p>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          ))}
        </div>

        <button
          onClick={onLogout}
          className="w-full mt-6 h-12 border border-red-500 text-red-500 rounded-lg font-['Montserrat',Helvetica] font-semibold hover:bg-red-50 active:scale-95 transition-all"
        >
          Logout
        </button>
      </div>

      {/* Modals */}
      {activeModal === "address" && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 safe-top safe-bottom" onClick={() => setActiveModal(null)}>
          <div className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-xl flex flex-col safe-top safe-bottom" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <h2 className="font-['Montserrat',Helvetica] font-bold text-lg">Delivery Address</h2>
              <button onClick={() => setActiveModal(null)} className="p-2 hover:bg-gray-100 rounded-lg">✕</button>
            </div>
            <div className="flex-1 overflow-y-auto p-4">
              {isEditing && activeModal === "address" ? (
                <div className="space-y-3">
                  {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-3 py-2 rounded text-sm">
                      {error}
                    </div>
                  )}
                  <input type="text" placeholder="Street Address" value={formData.address.street} onChange={(e) => setFormData({...formData, address: {...formData.address, street: e.target.value}})} className="w-full px-3 py-2 border border-[#e0e0e0] rounded text-sm" />
                  <input type="text" placeholder="City" value={formData.address.city} onChange={(e) => setFormData({...formData, address: {...formData.address, city: e.target.value}})} className="w-full px-3 py-2 border border-[#e0e0e0] rounded text-sm" />
                  <div className="grid grid-cols-2 gap-2">
                    <input type="text" placeholder="State" value={formData.address.state} onChange={(e) => setFormData({...formData, address: {...formData.address, state: e.target.value}})} className="px-3 py-2 border border-[#e0e0e0] rounded text-sm" />
                    <input type="text" placeholder="Zip Code" value={formData.address.zipcode} onChange={(e) => setFormData({...formData, address: {...formData.address, zipcode: e.target.value}})} className="px-3 py-2 border border-[#e0e0e0] rounded text-sm" />
                  </div>
                  <input type="tel" placeholder="Phone" value={formData.address.phone} onChange={(e) => setFormData({...formData, address: {...formData.address, phone: e.target.value}})} className="w-full px-3 py-2 border border-[#e0e0e0] rounded text-sm" />
                </div>
              ) : (
                <div className="p-4 bg-[#f5f5f5] rounded-lg">
                  <h3 className="font-semibold text-sm mb-2">Home</h3>
                  <p className="text-xs text-gray-600">{profile.address.street}</p>
                  <p className="text-xs text-gray-600">{profile.address.city}, {profile.address.state} {profile.address.zipcode}</p>
                  <p className="text-xs text-gray-600">Phone: {profile.address.phone}</p>
                </div>
              )}
            </div>
            <div className="p-4 border-t border-gray-100 flex gap-2">
              {isEditing && activeModal === "address" ? (
                <>
                  <button onClick={handleSave} disabled={!isAddressFormValid} className={`flex-1 py-2 rounded text-sm font-semibold active:scale-95 transition-all ${
                    isAddressFormValid 
                      ? "bg-[#0088ff] text-white hover:bg-[#0077dd]" 
                      : "bg-gray-400 text-white cursor-not-allowed opacity-60"
                  }`}>Save</button>
                  <button onClick={() => { setIsEditing(false); setFormData(profile); setError(""); }} className="flex-1 py-2 bg-white border border-[#e0e0e0] rounded text-sm font-semibold hover:bg-gray-50">Cancel</button>
                </>
              ) : (
                <button onClick={() => setIsEditing(true)} className="w-full py-2 bg-[#0088ff] text-white rounded text-sm font-semibold hover:bg-[#0077dd] active:scale-95 transition-all">Edit</button>
              )}
            </div>
          </div>
        </div>
      )}

      {activeModal === "payment" && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 safe-top safe-bottom" onClick={() => setActiveModal(null)}>
          <div className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-xl flex flex-col safe-top safe-bottom" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <h2 className="font-['Montserrat',Helvetica] font-bold text-lg">Payment Methods</h2>
              <button onClick={() => setActiveModal(null)} className="p-2 hover:bg-gray-100 rounded-lg">✕</button>
            </div>
            <div className="flex-1 overflow-y-auto p-4">
              {isEditing && activeModal === "payment" ? (
                <div className="space-y-3">
                  <input type="text" placeholder="Card Holder Name" value={formData.payment.cardHolder} onChange={(e) => setFormData({...formData, payment: {...formData.payment, cardHolder: e.target.value}})} className="w-full px-3 py-2 border border-[#e0e0e0] rounded text-sm" />
                  <input type="text" placeholder="Card Number" value={formData.payment.cardNumber} onChange={(e) => setFormData({...formData, payment: {...formData.payment, cardNumber: e.target.value}})} className="w-full px-3 py-2 border border-[#e0e0e0] rounded text-sm" />
                  <input type="text" placeholder="MM/YY" value={formData.payment.expiryDate} onChange={(e) => setFormData({...formData, payment: {...formData.payment, expiryDate: e.target.value}})} className="w-full px-3 py-2 border border-[#e0e0e0] rounded text-sm" />
                </div>
              ) : (
                <div className="p-4 bg-[#f5f5f5] rounded-lg">
                  <h3 className="font-semibold text-sm mb-2">💳 Visa Card</h3>
                  <p className="text-xs text-gray-600">Card: {profile.payment.cardNumber}</p>
                  <p className="text-xs text-gray-600">Holder: {profile.payment.cardHolder}</p>
                  <p className="text-xs text-gray-600">Expires: {profile.payment.expiryDate}</p>
                </div>
              )}
            </div>
            <div className="p-4 border-t border-gray-100 flex gap-2">
              {isEditing && activeModal === "payment" ? (
                <>
                  <button onClick={handleSave} className="flex-1 py-2 bg-[#0088ff] text-white rounded text-sm font-semibold hover:bg-[#0077dd] active:scale-95 transition-all">Save</button>
                  <button onClick={() => { setIsEditing(false); setFormData(profile); }} className="flex-1 py-2 bg-white border border-[#e0e0e0] rounded text-sm font-semibold hover:bg-gray-50">Cancel</button>
                </>
              ) : (
                <button onClick={() => setIsEditing(true)} className="w-full py-2 bg-[#0088ff] text-white rounded text-sm font-semibold hover:bg-[#0077dd] active:scale-95 transition-all">Edit</button>
              )}
            </div>
          </div>
        </div>
      )}

      {activeModal === "notifications" && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 safe-top safe-bottom" onClick={() => setActiveModal(null)}>
          <div className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-xl flex flex-col safe-top safe-bottom" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <h2 className="font-['Montserrat',Helvetica] font-bold text-lg">Notifications</h2>
              <button onClick={() => setActiveModal(null)} className="p-2 hover:bg-gray-100 rounded-lg">✕</button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              <div className="flex items-center justify-between p-3 bg-[#f5f5f5] rounded-lg">
                <div><p className="font-semibold text-sm">Push Notifications</p><p className="text-xs text-gray-500">Receive purchase & order updates</p></div>
                <input type="checkbox" defaultChecked className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-between p-3 bg-[#f5f5f5] rounded-lg">
                <div><p className="font-semibold text-sm">Promotions</p><p className="text-xs text-gray-500">Get promo codes and discounts</p></div>
                <input type="checkbox" defaultChecked className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-between p-3 bg-[#f5f5f5] rounded-lg">
                <div><p className="font-semibold text-sm">News & Updates</p><p className="text-xs text-gray-500">New collections and features</p></div>
                <input type="checkbox" defaultChecked className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      )}

      {activeModal === "privacy" && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 safe-top safe-bottom" onClick={() => setActiveModal(null)}>
          <div className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-xl flex flex-col safe-top safe-bottom" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <h2 className="font-['Montserrat',Helvetica] font-bold text-lg">Privacy Settings</h2>
              <button onClick={() => setActiveModal(null)} className="p-2 hover:bg-gray-100 rounded-lg">✕</button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              <div className="flex items-center justify-between p-3 bg-[#f5f5f5] rounded-lg">
                <div><p className="font-semibold text-sm">Profile Visibility</p><p className="text-xs text-gray-500">Allow others to see your profile</p></div>
                <input type="checkbox" className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-between p-3 bg-[#f5f5f5] rounded-lg">
                <div><p className="font-semibold text-sm">Data Sharing</p><p className="text-xs text-gray-500">Share data with analytics</p></div>
                <input type="checkbox" defaultChecked className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-between p-3 bg-[#f5f5f5] rounded-lg">
                <div><p className="font-semibold text-sm">Personalization</p><p className="text-xs text-gray-500">Personalized recommendations</p></div>
                <input type="checkbox" defaultChecked className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      )}

      {activeModal === "help" && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 safe-top safe-bottom" onClick={() => setActiveModal(null)}>
          <div className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-xl flex flex-col safe-top safe-bottom" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <h2 className="font-['Montserrat',Helvetica] font-bold text-lg">Help & Support</h2>
              <button onClick={() => setActiveModal(null)} className="p-2 hover:bg-gray-100 rounded-lg">✕</button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              <div className="p-4 bg-[#f5f5f5] rounded-lg cursor-pointer hover:bg-gray-200 transition-colors">
                <p className="font-semibold text-sm mb-1">📞 Customer Service</p>
                <p className="text-xs text-gray-600">support@innfit.com | +1 (555) 123-4567</p>
              </div>
              <div className="p-4 bg-[#f5f5f5] rounded-lg cursor-pointer hover:bg-gray-200 transition-colors">
                <p className="font-semibold text-sm mb-1">📚 FAQ</p>
                <p className="text-xs text-gray-600">Shipping • Returns • Sizing Guide</p>
              </div>
              <div className="p-4 bg-[#f5f5f5] rounded-lg cursor-pointer hover:bg-gray-200 transition-colors">
                <p className="font-semibold text-sm mb-1">🐛 Report an Issue</p>
                <p className="text-xs text-gray-600">Help us improve your experience</p>
              </div>
              <div className="p-4 bg-[#f5f5f5] rounded-lg cursor-pointer hover:bg-gray-200 transition-colors">
                <p className="font-semibold text-sm mb-1">💬 Live Chat</p>
                <p className="text-xs text-gray-600">Chat with our support team</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeModal === "about" && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 safe-top safe-bottom" onClick={() => setActiveModal(null)}>
          <div className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-xl flex flex-col safe-top safe-bottom" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <h2 className="font-['Montserrat',Helvetica] font-bold text-lg">About innFit</h2>
              <button onClick={() => setActiveModal(null)} className="p-2 hover:bg-gray-100 rounded-lg">✕</button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              <div>
                <h3 className="font-semibold text-sm mb-2">App Version</h3>
                <p className="text-xs text-gray-600">innFit v2.0.0</p>
              </div>
              <div>
                <h3 className="font-semibold text-sm mb-2">About Us</h3>
                <p className="text-xs text-gray-600">innFit is your ultimate e-commerce shopping platform with smart product recommendations, advanced search, and seamless checkout experience.</p>
              </div>
              <div>
                <h3 className="font-semibold text-sm mb-2">Features</h3>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>✓ Smart product discovery</li>
                  <li>✓ Wishlist & favorites</li>
                  <li>✓ Secure payments</li>
                  <li>✓ Order tracking</li>
                  <li>✓ 24/7 customer support</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-sm mb-2">Links</h3>
                <div className="space-y-1 text-xs">
                  <p className="text-[#0088ff] cursor-pointer">Terms of Service</p>
                  <p className="text-[#0088ff] cursor-pointer">Privacy Policy</p>
                  <p className="text-[#0088ff] cursor-pointer">Contact Us</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
