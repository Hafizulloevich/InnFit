import React, { useState, useEffect } from "react";
import { useProfile } from "@/context/ProfileContext";

interface SettingsProps {
  onBack?: () => void;
  onLogout?: () => void;
}

export default function Settings({ onBack, onLogout }: SettingsProps) {
  const [activeTab, setActiveTab] = useState<"address" | "payment" | "notifications" | "privacy" | "help" | "about">("address");
  const { profile, updateProfile } = useProfile();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(profile);

  useEffect(() => {
    setFormData(profile);
  }, [profile]);

  const handleSave = () => {
    updateProfile(formData);
    setIsEditing(false);
  };

  const settingsSections = {
    address: {
      title: "Delivery Address",
      content: (
        <div className="space-y-4">
          {isEditing ? (
            <div className="p-4 bg-white border border-[#e0e0e0] rounded-lg space-y-3">
              <input
                type="text"
                placeholder="Street Address"
                value={formData.address.street}
                onChange={(e) => setFormData({
                  ...formData,
                  address: { ...formData.address, street: e.target.value }
                })}
                className="w-full px-3 py-2 border border-[#e0e0e0] rounded text-sm"
              />
              <input
                type="text"
                placeholder="City"
                value={formData.address.city}
                onChange={(e) => setFormData({
                  ...formData,
                  address: { ...formData.address, city: e.target.value }
                })}
                className="w-full px-3 py-2 border border-[#e0e0e0] rounded text-sm"
              />
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="State"
                  value={formData.address.state}
                  onChange={(e) => setFormData({
                    ...formData,
                    address: { ...formData.address, state: e.target.value }
                  })}
                  className="px-3 py-2 border border-[#e0e0e0] rounded text-sm"
                />
                <input
                  type="text"
                  placeholder="Zip Code"
                  value={formData.address.zipcode}
                  onChange={(e) => setFormData({
                    ...formData,
                    address: { ...formData.address, zipcode: e.target.value }
                  })}
                  className="px-3 py-2 border border-[#e0e0e0] rounded text-sm"
                />
              </div>
              <input
                type="tel"
                placeholder="Phone"
                value={formData.address.phone}
                onChange={(e) => setFormData({
                  ...formData,
                  address: { ...formData.address, phone: e.target.value }
                })}
                className="w-full px-3 py-2 border border-[#e0e0e0] rounded text-sm"
              />
              <div className="flex gap-2">
                <button
                  onClick={handleSave}
                  className="flex-1 py-2 bg-[#0088ff] text-white rounded text-sm font-semibold hover:bg-[#0077dd] active:scale-95 transition-all"
                >
                  Save
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="flex-1 py-2 bg-white border border-[#e0e0e0] rounded text-sm font-semibold hover:bg-gray-50 active:scale-95 transition-all"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="p-4 bg-[#f5f5f5] rounded-lg">
                <h3 className="font-semibold text-sm mb-2">Home</h3>
                <p className="text-xs text-gray-600">{profile.address.street}</p>
                <p className="text-xs text-gray-600">{profile.address.city}, {profile.address.state} {profile.address.zipcode}</p>
                <p className="text-xs text-gray-600">Phone: {profile.address.phone}</p>
                <button
                  onClick={() => setIsEditing(true)}
                  className="mt-2 text-xs text-[#0088ff] font-semibold hover:underline active:opacity-70"
                >
                  Edit
                </button>
              </div>
            </>
          )}
        </div>
      )
    },
    payment: {
      title: "Payment Methods",
      content: (
        <div className="space-y-4">
          {isEditing ? (
            <div className="p-4 bg-white border border-[#e0e0e0] rounded-lg space-y-3">
              <input
                type="text"
                placeholder="Card Holder Name"
                value={formData.payment.cardHolder}
                onChange={(e) => setFormData({
                  ...formData,
                  payment: { ...formData.payment, cardHolder: e.target.value }
                })}
                className="w-full px-3 py-2 border border-[#e0e0e0] rounded text-sm"
              />
              <input
                type="text"
                placeholder="Last 4 Digits"
                value={formData.payment.cardNumber}
                onChange={(e) => setFormData({
                  ...formData,
                  payment: { ...formData.payment, cardNumber: e.target.value }
                })}
                className="w-full px-3 py-2 border border-[#e0e0e0] rounded text-sm"
              />
              <input
                type="text"
                placeholder="MM/YY"
                value={formData.payment.expiryDate}
                onChange={(e) => setFormData({
                  ...formData,
                  payment: { ...formData.payment, expiryDate: e.target.value }
                })}
                className="w-full px-3 py-2 border border-[#e0e0e0] rounded text-sm"
              />
              <div className="flex gap-2">
                <button
                  onClick={handleSave}
                  className="flex-1 py-2 bg-[#0088ff] text-white rounded text-sm font-semibold hover:bg-[#0077dd] active:scale-95 transition-all"
                >
                  Save
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="flex-1 py-2 bg-white border border-[#e0e0e0] rounded text-sm font-semibold hover:bg-gray-50 active:scale-95 transition-all"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="p-4 bg-[#f5f5f5] rounded-lg">
                <h3 className="font-semibold text-sm mb-2">Visa Card</h3>
                <p className="text-xs text-gray-600">Cardholder: {profile.payment.cardHolder}</p>
                <p className="text-xs text-gray-600">**** **** **** {profile.payment.cardNumber}</p>
                <p className="text-xs text-gray-600">Expires: {profile.payment.expiryDate}</p>
                <button
                  onClick={() => setIsEditing(true)}
                  className="mt-2 text-xs text-[#0088ff] font-semibold hover:underline active:opacity-70"
                >
                  Edit
                </button>
              </div>
            </>
          )}
        </div>
      )
    },
    notifications: {
      title: "Notification Settings",
      content: (
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-white rounded-lg">
            <span className="text-sm">Order Updates</span>
            <input
              type="checkbox"
              checked={formData.notifications.orders}
              onChange={(e) => setFormData({
                ...formData,
                notifications: { ...formData.notifications, orders: e.target.checked }
              })}
              onBlur={() => updateProfile(formData)}
              className="w-5 h-5 cursor-pointer"
            />
          </div>
          <div className="flex items-center justify-between p-3 bg-white rounded-lg">
            <span className="text-sm">Promotional Offers</span>
            <input
              type="checkbox"
              checked={formData.notifications.promotions}
              onChange={(e) => setFormData({
                ...formData,
                notifications: { ...formData.notifications, promotions: e.target.checked }
              })}
              onBlur={() => updateProfile(formData)}
              className="w-5 h-5 cursor-pointer"
            />
          </div>
          <div className="flex items-center justify-between p-3 bg-white rounded-lg">
            <span className="text-sm">New Arrivals</span>
            <input
              type="checkbox"
              checked={formData.notifications.newArrivals}
              onChange={(e) => setFormData({
                ...formData,
                notifications: { ...formData.notifications, newArrivals: e.target.checked }
              })}
              onBlur={() => updateProfile(formData)}
              className="w-5 h-5 cursor-pointer"
            />
          </div>
        </div>
      )
    },
    privacy: {
      title: "Privacy & Security",
      content: (
        <div className="space-y-4">
          <div className="p-4 bg-[#f5f5f5] rounded-lg">
            <h3 className="font-semibold text-sm mb-2">Data Privacy</h3>
            <p className="text-xs text-gray-600">We protect your personal data with industry-standard encryption and security measures.</p>
          </div>
          <button className="w-full py-3 bg-white border border-[#e0e0e0] rounded-lg text-sm font-semibold hover:bg-gray-50 active:scale-95 transition-all">
            Change Password
          </button>
          <button className="w-full py-3 bg-white border border-[#e0e0e0] rounded-lg text-sm font-semibold hover:bg-gray-50 active:scale-95 transition-all">
            View Privacy Policy
          </button>
        </div>
      )
    },
    help: {
      title: "Help & Support",
      content: (
        <div className="space-y-4">
          <div className="p-4 bg-[#f5f5f5] rounded-lg">
            <h3 className="font-semibold text-sm mb-2">Frequently Asked Questions</h3>
            <p className="text-xs text-gray-600 mb-2">• How do I track my order?</p>
            <p className="text-xs text-gray-600 mb-2">• What is your return policy?</p>
            <p className="text-xs text-gray-600">• How can I contact customer service?</p>
          </div>
          <button className="w-full py-3 bg-[#0088ff] text-white rounded-lg text-sm font-semibold hover:bg-[#0077dd] active:scale-95 transition-all">
            Contact Support
          </button>
        </div>
      )
    },
    about: {
      title: "About innFit",
      content: (
        <div className="space-y-4">
          <div className="p-4 bg-[#f5f5f5] rounded-lg">
            <h3 className="font-semibold text-sm mb-2">innFit v1.0.0</h3>
            <p className="text-xs text-gray-600 mb-3">Your Personal Shopping Assistant</p>
            <p className="text-xs text-gray-600 mb-2">Founded in 2024, innFit revolutionizes shopping with personalized recommendations and AI-powered body scanning.</p>
          </div>
          <div className="p-4 bg-[#f5f5f5] rounded-lg">
            <p className="text-xs text-gray-600">© 2024 innFit. All rights reserved.</p>
          </div>
        </div>
      )
    }
  };

  return (
    <main className="relative min-h-screen w-full flex flex-col bg-white safe-top safe-bottom animate-fade-in">
      <header className="container-responsive pt-4 pb-4 flex items-center gap-4 border-b">
        <button 
          onClick={onBack}
          className="p-2 -ml-2 hover:bg-gray-100 rounded-lg transition-colors active:scale-95"
        >
          <svg width="12" height="20" viewBox="0 0 12 20" fill="none">
            <path d="M10 2L2 10L10 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h1 className="font-['Montserrat',Helvetica] font-semibold text-lg text-black">Settings</h1>
      </header>

      <div className="flex-1 overflow-y-auto pb-24">
        <div className="grid grid-cols-2 gap-2 p-4">
          {(["address", "payment", "notifications", "privacy", "help", "about"] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all ${
                activeTab === tab
                  ? "bg-[#0088ff] text-white"
                  : "bg-white border border-[#e0e0e0] text-black hover:bg-gray-50"
              } active:scale-95`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="container-responsive py-6">
          <h2 className="font-semibold text-lg mb-4">{settingsSections[activeTab].title}</h2>
          {settingsSections[activeTab].content}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100 safe-bottom mb-7">
        <button
          onClick={onLogout}
          className="w-full h-12 border border-red-500 text-red-500 rounded-lg font-['Montserrat',Helvetica] font-semibold hover:bg-red-50 active:scale-95 transition-all"
        >
          Log Out
        </button>
      </div>
    </main>
  );
}