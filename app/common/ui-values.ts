// UI constants and mathematical values

// Icon scaling; i imagine we want this to be consistent across the site
export const ICON_SIZE = 42;

// scaled by 0.7 because normal icons already have padding, so we scale down the largeIconSize for ones which DONT have that same padding to match visually.
export const PADDING_SCALAR = 0.7;
export const LARGE_ICON_SIZE = PADDING_SCALAR * ICON_SIZE;
