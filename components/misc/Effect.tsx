import React from "react";

export type Effect = keyof typeof Effects;

const Effects = {
  click: "flex active:scale-75 transition-transform cursor-pointer opacity-10 active:opacity-60",
  linkClick: "flex active:scale-95 transition-transform",
};

type EffectProps = {
  type: Effect;
  children: React.ReactNode;
};

const Effect = ({ type, children }: EffectProps) => {
  return <span className={Effects[type]}><span className="pointer-events-none select-none">
    {children}
    </span>
  </span>;
};

export default Effect;
