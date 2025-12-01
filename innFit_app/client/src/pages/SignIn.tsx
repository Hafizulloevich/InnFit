import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SignInProps {
  onLogin?: () => void;
  onSignUp?: () => void;
  onForgotPassword?: () => void;
  onBack?: () => void;
}

export default function SignIn({ onLogin, onSignUp, onForgotPassword, onBack }: SignInProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [focusedField, setFocusedField] = useState<"email" | "password" | null>(null);
  const [error, setError] = useState("");

  const isFormValid = email.trim().length > 0 && password.trim().length > 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) {
      setError("Please fill in all fields");
      setTimeout(() => setError(""), 3000);
      return;
    }
    onLogin?.();
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
            Welcome<br />Back!
          </h1>
          <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="font-['Montserrat',Helvetica] text-xs text-blue-800">
              <span className="font-semibold">Demo Credentials:</span><br />
              Email: innfit@gmail.com | Password: 1234
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col">
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#626262]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <Input
              type="email"
              placeholder="Username or Email"
              value={email}
              onFocus={() => setFocusedField("email")}
              onBlur={() => setFocusedField(null)}
              onChange={(e) => setEmail(e.target.value)}
              className={`h-14 pl-12 rounded-[10px] font-['Montserrat',Helvetica] text-sm transition-all duration-200 ${
                focusedField === "email"
                  ? "bg-white border-2 border-[#0088ff]"
                  : "bg-[#f3f3f3] border-[#a8a8a9]"
              }`}
            />
          </div>

          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#626262]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="16" r="1" fill="currentColor"/>
                <path d="M7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onFocus={() => setFocusedField("password")}
              onBlur={() => setFocusedField(null)}
              onChange={(e) => setPassword(e.target.value)}
              className={`h-14 pl-12 pr-12 rounded-[10px] font-['Montserrat',Helvetica] text-sm transition-all duration-200 ${
                focusedField === "password"
                  ? "bg-white border-2 border-[#0088ff]"
                  : "bg-[#f3f3f3] border-[#a8a8a9]"
              }`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#626262] hover:text-[#0088ff] active:scale-95 transition-all duration-200"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          <div className="text-right">
            <button
              type="button"
              onClick={onForgotPassword}
              className="font-['Montserrat',Helvetica] text-[#0088ff] text-xs hover:underline active:opacity-70 transition-opacity duration-200"
            >
              Forgot Password?
            </button>
          </div>

          <Button
            type="submit"
            className="w-full h-14 bg-[#0088ff] hover:bg-[#0077dd] active:scale-95 rounded font-['Montserrat',Helvetica] font-semibold text-xl text-white transition-all duration-200 shadow-sm hover:shadow-md active:shadow-none"
          >
            Login
          </Button>

          <div className="flex-1" />

          <div className="space-y-5 pb-6">
            <p className="text-center font-['Montserrat',Helvetica] font-medium text-xs text-[#575757]">
              - OR Continue with -
            </p>

            <div className="flex justify-center gap-3">
              <button className="w-14 h-14 rounded-full border border-[#0088ff] bg-[#fcf3f6] flex items-center justify-center hover:bg-[#f0e8ec] transition-colors">
                <img src="https://www.google.com/favicon.ico" alt="Google" className="w-6 h-6" />
              </button>
              <button className="w-14 h-14 rounded-full border border-[#0088ff] bg-[#fcf3f6] flex items-center justify-center hover:bg-[#f0e8ec] transition-colors">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                  <path d="M17.05 12.536c-.028-2.79 2.278-4.13 2.383-4.196-1.296-1.896-3.318-2.156-4.038-2.186-1.719-.175-3.356 1.013-4.227 1.013-.871 0-2.217-.988-3.643-.963-1.875.028-3.604 1.091-4.57 2.772-1.948 3.38-.498 8.384 1.4 11.127.928 1.342 2.035 2.849 3.487 2.795 1.398-.056 1.927-.905 3.62-.905 1.693 0 2.168.905 3.648.877 1.505-.025 2.462-1.368 3.383-2.715 1.067-1.558 1.506-3.066 1.533-3.144-.033-.015-2.94-1.128-2.976-4.475z" fill="black"/>
                </svg>
              </button>
              <button className="w-14 h-14 rounded-full border border-[#0088ff] bg-[#fcf3f6] flex items-center justify-center hover:bg-[#f0e8ec] transition-colors">
                <svg width="14" height="26" viewBox="0 0 14 26" fill="none">
                  <path d="M9 15H12.5L14 9H9V6C9 4.3 9 3 12 3H14V0.14C13.62 0.0970001 11.68 0 9.58 0C5.18 0 2 2.68 2 7.6V9H0V15H2V26H9V15Z" fill="#3D4DA6"/>
                </svg>
              </button>
            </div>

            <p className="text-center font-['Montserrat',Helvetica] text-sm text-[#575757]">
              Create An Account{" "}
              <button onClick={onSignUp} className="text-[#0088ff] font-semibold underline">
                Sign Up
              </button>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}
