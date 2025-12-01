import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ForgotPasswordProps {
  onSubmit?: () => void;
  onBack?: () => void;
}

export default function ForgotPassword({ onSubmit, onBack }: ForgotPasswordProps) {
  const [email, setEmail] = useState("");
  const [focusedField, setFocusedField] = useState(false);
  const [error, setError] = useState("");

  const isFormValid = email.trim().length > 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) {
      setError("Please enter your email address");
      setTimeout(() => setError(""), 3000);
      return;
    }
    onSubmit?.();
  };

  return (
    <main className="relative min-h-screen w-full flex flex-col bg-white safe-top safe-bottom animate-fade-in">
      <header className="container-responsive pt-4 pb-2">
        <button 
          onClick={onBack}
          className="p-2 -ml-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <svg width="12" height="20" viewBox="0 0 12 20" fill="none">
            <path d="M10 2L2 10L10 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </header>

      <div className="flex-1 container-responsive flex flex-col">
        <div className="mb-8">
          <h1 className="font-['Montserrat',Helvetica] font-bold text-3xl sm:text-[36px] text-black leading-tight">
            Forgot<br />password?
          </h1>
          <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="font-['Montserrat',Helvetica] text-xs text-blue-800">
              <span className="font-semibold">Demo Email:</span> innfit@gmail.com
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#626262]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onFocus={() => setFocusedField(true)}
              onBlur={() => setFocusedField(false)}
              onChange={(e) => setEmail(e.target.value)}
              className={`h-14 pl-12 rounded-[10px] font-['Montserrat',Helvetica] text-sm transition-all duration-200 ${
                focusedField
                  ? "bg-white border-2 border-[#0088ff]"
                  : "bg-[#f3f3f3] border-[#a8a8a9]"
              }`}
            />
          </div>

          <p className="font-['Montserrat',Helvetica] text-xs text-[#676767]">
            <span className="text-[#ff4b26]">*</span> We will send you a message to set or reset your new password
          </p>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded text-sm">
              {error}
            </div>
          )}

          <Button
            type="submit"
            disabled={!isFormValid}
            className={`w-full h-14 rounded font-['Montserrat',Helvetica] font-semibold text-xl text-white transition-all duration-200 shadow-sm hover:shadow-md active:shadow-none ${
              isFormValid
                ? "bg-[#0088ff] hover:bg-[#0077dd] active:scale-95"
                : "bg-gray-400 cursor-not-allowed opacity-60"
            }`}
          >
            Submit
          </Button>
        </form>
      </div>
    </main>
  );
}
