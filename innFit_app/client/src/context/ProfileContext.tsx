import React, { createContext, useContext, useState, useEffect } from "react";

export interface UserProfile {
  address: {
    street: string;
    city: string;
    state: string;
    zipcode: string;
    phone: string;
  };
  payment: {
    cardNumber: string;
    cardHolder: string;
    expiryDate: string;
  };
  notifications: {
    orders: boolean;
    promotions: boolean;
    newArrivals: boolean;
  };
}

interface ProfileContextType {
  profile: UserProfile;
  updateProfile: (profile: Partial<UserProfile>) => void;
}

const defaultProfile: UserProfile = {
  address: {
    street: "123 Fashion Street",
    city: "New York",
    state: "NY",
    zipcode: "10001",
    phone: "+1 (555) 123-4567"
  },
  payment: {
    cardNumber: "4242",
    cardHolder: "John Doe",
    expiryDate: "12/25"
  },
  notifications: {
    orders: true,
    promotions: true,
    newArrivals: false
  }
};

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export function ProfileProvider({ children }: { children: React.ReactNode }) {
  const [profile, setProfile] = useState<UserProfile>(defaultProfile);

  useEffect(() => {
    const saved = localStorage.getItem("userProfile");
    if (saved) {
      setProfile(JSON.parse(saved));
    }
  }, []);

  const updateProfile = (updates: Partial<UserProfile>) => {
    const newProfile = { ...profile, ...updates };
    setProfile(newProfile);
    localStorage.setItem("userProfile", JSON.stringify(newProfile));
  };

  return (
    <ProfileContext.Provider value={{ profile, updateProfile }}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const context = useContext(ProfileContext);
  if (!context) throw new Error("useProfile must be used within ProfileProvider");
  return context;
}
