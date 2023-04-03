const BASE_FONT = 16.0;

export const px2rem = (pixels: number): string => {
  return `${pixels / BASE_FONT}rem`;
};

export type Typography = keyof typeof typo;

export const typo = {
  title: {
    fontSize: px2rem(28),
    fontWeight: 700,
  },
  heading1: {
    fontSize: px2rem(36),
    fontWeight: 700,
  },
  button: {
    fontSize: px2rem(18),
    fontWeight: 500,
  },
  body1: {
    fontSize: px2rem(16),
    fontWeight: 500,
  },
  body2: {
    fontSize: px2rem(14),
    fontWeight: 500,
  },
} as const;

export const sizes = {
  sz960: px2rem(960),
} as const;

export const spacing = {
  sp004: px2rem(4),
  sp008: px2rem(8),
  sp016: px2rem(16),
  sp032: px2rem(32),
} as const;

export const colors = {
  gray050: "#ECEFF1",
} as const;

export const borderRadius = {
  sm: px2rem(8),
} as const;

export const viewports = {
  l: "960px",
} as const;
