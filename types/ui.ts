export type SiteColors = "cyan" | "gray" | "red";

type InfoBannerBackgrounds = "";

// Bland

export type SelectOptionBland = {
  value: string;
  key: string;
};

export type SelectOptionsBland = SelectOptionBland[];

// Flexible

export type SelectOptions = SelectOptionsBland | string[];
