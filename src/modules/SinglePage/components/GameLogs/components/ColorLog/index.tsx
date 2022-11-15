import React from "react";
import { CheckCircle, XCircle } from "phosphor-react";

import { Container } from "./styles";

interface ColorLogProps {
  colors: Array<string>;
}

const ColorLog = ({ colors }: ColorLogProps) => {
  return (
    <Container>
      {colors.length < 2 ? (
        <div className="single-color">
          <div className="color" style={{ backgroundColor: colors[0] }}>
            {colors[0]}
          </div>
          <div className="icon-and-seconds">
            <CheckCircle
              size={20}
              color="var(--DARK-GREY)"
              fill="green"
              weight="duotone"
            />
            2s
          </div>
        </div>
      ) : (
        <div className="double-color">
          <div className="colors">
            <div className="color" style={{ backgroundColor: colors[0] }}>
              {colors[0]}
            </div>
            <div className="color" style={{ backgroundColor: colors[1] }}>
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
            2s
          </div>
        </div>
      )}
    </Container>
  );
};

export default ColorLog;
