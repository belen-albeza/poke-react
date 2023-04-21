import type { FC } from "react";

import { SpinnerSvg } from "./index.styles";

const LoadingSpinner: FC = () => {
  return (
    <SpinnerSvg viewBox="0 0 100 100">
      <circle
        className="path"
        cx="50"
        cy="50"
        r="46"
        fill="none"
        strokeWidth="8"
      />
    </SpinnerSvg>
  );
};

export default LoadingSpinner;
