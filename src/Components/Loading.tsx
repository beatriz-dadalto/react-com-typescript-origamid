import React from "react";

const styleLoading: React.CSSProperties = {
  border: "var(--gap-s) solid var(--color-2)",
  width: "var(--gap)",
  height: "var(--gap)",
  borderRadius: "50%",
  borderRightColor: "var(--color-4)",
  animation: "spin 1s infinite",
};

const Loading = () => {
  return (
    <div style={styleLoading}>
      <style>
        {`
          @keyFrames spin {
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Loading;
