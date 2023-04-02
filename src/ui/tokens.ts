const BASE_FONT = 16.0;

export const px2rem = (pixels: number): string => {
  return `${pixels / BASE_FONT}rem`;
};

export type Typography = keyof typeof typo;

export const typo = {
  title: {
    fontSize: px2rem(32),
    fontWeight: 600,
  },
  heading1: {
    fontSize: px2rem(48),
    fontWeight: 600,
  },
} as const;

export const sizes = {
  sz960: px2rem(960),
} as const;

export const spacing = {
  sp016: px2rem(16),
  sp032: px2rem(32),
} as const;
