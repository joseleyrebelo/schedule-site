import React from "react";

export type Effect = keyof typeof Effects;

const Effects = {
  linkClick: "block active:scale-95 transition-transform",
};

type EffectProps = {
  type: Effect;
  children: React.ReactNode;
};

const Effect = ({ type, children }: EffectProps) => {
  return <span className={Effects[type]}>{children}</span>;
};

export default Effect;
