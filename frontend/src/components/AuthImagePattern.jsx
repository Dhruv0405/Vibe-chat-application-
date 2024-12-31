import { useEffect, useState } from 'react';

const AuthImagePattern = ({ title, subtitle }) => {
  // URL of the working GIF
  const gifUrl = "authbg.gif"; // Replace with your GIF URL

  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
      <div className="max-w-md text-center">
        <div className="relative w-full" style={{ height: "60vh" }}>
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div
              className="flex justify-center items-center h-full"
              style={{
                height: "80%",
              }}
            >
              <div
                className="flex-shrink-0 w-full h-full"
                style={{
                  overflow: "hidden",
                  borderRadius: "10px", // Add border-radius for rounded corners
                }}
              >
                <img
                  src={gifUrl}
                  alt="Working GIF"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-2">{title}</h2> {/* Reduced margin */}
        <p className="text-base-content/60 mb-2">{subtitle}</p> {/* Reduced margin */}
      </div>
    </div>
  );
};

export default AuthImagePattern;
