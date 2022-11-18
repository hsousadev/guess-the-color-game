import React, { useEffect, useState } from "react";
import { CheckCircle, XCircle } from "phosphor-react";

import { Container } from "./styles";

interface ColorLogProps {
  colors: Array<string>;
  seconds: number;
}

const ColorLog = ({ colors, seconds }: ColorLogProps) => {
  var contrast = require("contrast");

  const [textColor, setTextColor] = useState("");

  useEffect(() => {
    if (contrast(colors[0]) === "light") {
      setTextColor("#000");
    } else {
      setTextColor("#fff");
    }
  }, []);

  return (
    <Container>
      {colors.length < 2 ? (
        <div className="single-color">
          <div
            className="color"
            style={{ backgroundColor: colors[0], color: textColor }}
          >
            {colors[0]}
          </div>
          <div className="icon-and-seconds">
            <CheckCircle
              size={20}
              color="var(--DARK-GREY)"
              fill="green"
              weight="duotone"
            />
            {seconds}s
          </div>
        </div>
      ) : (
        <div className="double-color">
          <div className="colors">
            <div
              className="color"
              style={{ backgroundColor: colors[0], color: textColor }}
            >
              {colors[0]}
            </div>
            <div
              className="color"
              style={{ backgroundColor: colors[1], color: textColor }}
            >
              {colors[1]}
            </div>
          </div>
          <div className="icon-and-seconds">
            <XCircle
              size={20}
              color="var(--DARK-GREY)"
              weight="duotone"
              fill="red"
            />
            {seconds}s
          </div>
        </div>
      )}
    </Container>
  );
};

export default ColorLog;
