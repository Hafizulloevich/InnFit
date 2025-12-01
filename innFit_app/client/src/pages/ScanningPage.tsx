import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ScanningPageProps {
  onComplete?: () => void;
  onBack?: () => void;
}

export default function ScanningPage({
  onComplete,
  onBack,
}: ScanningPageProps) {
  const [measurements, setMeasurements] = useState({
    height: "",
    weight: "",
    waist: "",
    chest: "",
    shoulders: "",
    hips: "",
    age: "",
  });

  const [scanning, setScanning] = useState(false);
  const [showScanModal, setShowScanModal] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (field: string, value: string) => {
    setMeasurements((prev) => ({ ...prev, [field]: value }));
  };

  const handleScan = () => {
    setShowScanModal(true);
  };

  const handleCloseScanModal = () => {
    setShowScanModal(false);
    setScanning(true);
  };

  return (
    <main className="relative min-h-screen w-full flex flex-col bg-[#fdfdfd] safe-top safe-bottom animate-fade-in">
      <header className="container-responsive pt-4 pb-2 flex items-center gap-4">
        <button
          onClick={onBack}
          className="p-2 -ml-2 hover:bg-gray-100 rounded-lg transition-colors active:scale-95"
        >
          <svg width="12" height="20" viewBox="0 0 12 20" fill="none">
            <path
              d="M10 2L2 10L10 18"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <h1 className="font-['Montserrat',Helvetica] font-semibold text-lg text-black">
          Body Measurements
        </h1>
      </header>

      <div className="flex-1 container-responsive overflow-y-auto pb-24">
        <div
          className={`w-full aspect-square max-w-sm mx-auto rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ${
            scanning
              ? "bg-white border-2 border-[#0088ff] overflow-hidden"
              : "bg-gradient-to-br from-[#f0f0f0] to-[#e0e0e0]"
          }`}
        >
          {scanning ? (
            <iframe
              src="https://sketchfab.com/models/932a07f7f9e143f4820546709853576e/embed"
              title="3D Body Scanner"
              className="w-full h-full rounded-lg"
              allow="autoplay; fullscreen; accelerometer; ambient-light-sensor; camera; encrypted-media; gyroscope; picture-in-picture"
              style={{ pointerEvents: "auto" }}
            />
          ) : (
            <div className="text-center">
              <div className="text-6xl mb-2">📐</div>
              <p className="text-sm text-gray-500">3D Body Scanner</p>
            </div>
          )}
        </div>

        <Button
          onClick={handleScan}
          className="w-full h-14 bg-[#0088ff] hover:bg-[#0077dd] active:scale-95 rounded-lg font-['Plus_Jakarta_Sans',Helvetica] font-semibold text-xl text-white mb-8 transition-all duration-200 shadow-sm hover:shadow-md active:shadow-none"
        >
          {scanning ? "Scanner Active" : "Scan"}
        </Button>

        <div className="space-y-6">
          <h2 className="font-['Montserrat',Helvetica] font-semibold text-lg text-black">
            Personal Details
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="font-['Montserrat',Helvetica] text-xs text-black">
                Height
              </label>
              <Input
                placeholder="cm"
                value={measurements.height}
                onFocus={() => setFocusedField("height")}
                onBlur={() => setFocusedField(null)}
                onChange={(e) => handleChange("height", e.target.value)}
                className={`h-12 rounded-lg transition-all duration-200 ${
                  focusedField === "height"
                    ? "bg-white border-2 border-[#0088ff]"
                    : "bg-white border-[#c8c8c8]"
                }`}
              />
            </div>
            <div className="space-y-2">
              <label className="font-['Montserrat',Helvetica] text-xs text-black">
                Weight
              </label>
              <Input
                placeholder="kg"
                value={measurements.weight}
                onFocus={() => setFocusedField("weight")}
                onBlur={() => setFocusedField(null)}
                onChange={(e) => handleChange("weight", e.target.value)}
                className={`h-12 rounded-lg transition-all duration-200 ${
                  focusedField === "weight"
                    ? "bg-white border-2 border-[#0088ff]"
                    : "bg-white border-[#c8c8c8]"
                }`}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="font-['Montserrat',Helvetica] text-xs text-black">
                Waist
              </label>
              <Input
                placeholder="cm"
                value={measurements.waist}
                onFocus={() => setFocusedField("waist")}
                onBlur={() => setFocusedField(null)}
                onChange={(e) => handleChange("waist", e.target.value)}
                className={`h-12 rounded-lg transition-all duration-200 ${
                  focusedField === "waist"
                    ? "bg-white border-2 border-[#0088ff]"
                    : "bg-white border-[#c8c8c8]"
                }`}
              />
            </div>
            <div className="space-y-2">
              <label className="font-['Montserrat',Helvetica] text-xs text-black">
                Chest
              </label>
              <Input
                placeholder="cm"
                value={measurements.chest}
                onFocus={() => setFocusedField("chest")}
                onBlur={() => setFocusedField(null)}
                onChange={(e) => handleChange("chest", e.target.value)}
                className={`h-12 rounded-lg transition-all duration-200 ${
                  focusedField === "chest"
                    ? "bg-white border-2 border-[#0088ff]"
                    : "bg-white border-[#c8c8c8]"
                }`}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="font-['Montserrat',Helvetica] text-xs text-black">
                Shoulders
              </label>
              <Input
                placeholder="cm"
                value={measurements.shoulders}
                onFocus={() => setFocusedField("shoulders")}
                onBlur={() => setFocusedField(null)}
                onChange={(e) => handleChange("shoulders", e.target.value)}
                className={`h-12 rounded-lg transition-all duration-200 ${
                  focusedField === "shoulders"
                    ? "bg-white border-2 border-[#0088ff]"
                    : "bg-white border-[#c8c8c8]"
                }`}
              />
            </div>
            <div className="space-y-2">
              <label className="font-['Montserrat',Helvetica] text-xs text-black">
                Hips
              </label>
              <Input
                placeholder="cm"
                value={measurements.hips}
                onFocus={() => setFocusedField("hips")}
                onBlur={() => setFocusedField(null)}
                onChange={(e) => handleChange("hips", e.target.value)}
                className={`h-12 rounded-lg transition-all duration-200 ${
                  focusedField === "hips"
                    ? "bg-white border-2 border-[#0088ff]"
                    : "bg-white border-[#c8c8c8]"
                }`}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-['Montserrat',Helvetica] text-xs text-black">
              Age
            </label>
            <Input
              placeholder="years"
              value={measurements.age}
              onFocus={() => setFocusedField("age")}
              onBlur={() => setFocusedField(null)}
              onChange={(e) => handleChange("age", e.target.value)}
              className={`h-12 rounded-lg transition-all duration-200 ${
                focusedField === "age"
                  ? "bg-white border-2 border-[#0088ff]"
                  : "bg-white border-[#c8c8c8]"
              }`}
            />
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100 safe-bottom">
        <Button
          onClick={onComplete}
          className="w-full h-14 bg-[#0088ff] hover:bg-[#0077dd] active:scale-95 rounded-lg font-['Plus_Jakarta_Sans',Helvetica] font-semibold text-xl text-white transition-all duration-200 shadow-sm hover:shadow-md active:shadow-none"
        >
          Save and Continue
        </Button>
      </div>

      {showScanModal && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4 safe-top safe-bottom"
          onClick={() => setShowScanModal(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6 animate-in fade-in slide-in-from-bottom-4 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-['Montserrat',Helvetica] font-bold text-lg text-black">
                Body Scanner
              </h2>
              <button
                onClick={() => setShowScanModal(false)}
                className="w-8 h-8 flex items-center justify-center text-2xl text-gray-400 hover:text-black hover:bg-gray-100 rounded-lg transition-colors active:scale-90"
              >
                ✕
              </button>
            </div>

            <div className="mb-6">
              <p className="font-['Montserrat',Helvetica] text-sm text-gray-700 leading-relaxed">
                Generally, the user will have his virtual body illustrated like
                this example image (profile), so he can visualize the clothes on
                himself. Now, you can drag and move the 3D image to feel the
                potential functionalities.
              </p>
            </div>

            <div className="w-full aspect-square rounded-lg bg-gradient-to-br from-[#f0f0f0] to-[#e0e0e0] flex items-center justify-center mb-6">
              <div className="text-center">
                <div className="text-5xl mb-2">👤</div>
                <p className="font-['Montserrat',Helvetica] text-xs text-gray-500">
                  Virtual Body Preview
                </p>
              </div>
            </div>

            <button
              onClick={handleCloseScanModal}
              className="w-full h-12 bg-[#0088ff] hover:bg-[#0077dd] text-white rounded-lg font-['Montserrat',Helvetica] font-semibold active:scale-95 transition-all"
            >
              Continue Scanning
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
