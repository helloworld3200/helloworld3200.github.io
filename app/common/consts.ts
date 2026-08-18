// Constants to be used across the app that can easily be changed here

export const NAME = "helloworld3200";
export const GH_LINK = "https://github.com/" + NAME + "/";

// Icon scaling; i imagine we want this to be consistent across the site
export const ICON_SIZE = 42;

// scaled by 0.7 because normal icons already have padding, so we scale down the largeIconSize for ones which DONT have that same padding to match visually.
export const PADDING_SCALAR = 0.7;
export const LARGE_ICON_SIZE = PADDING_SCALAR * ICON_SIZE;

// Font sources. Will be imported using <link> tags in root.tsx. ONLY Google fonts!
export const FONT_SRC = [
    "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
    "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap",
    "https://fonts.googleapis.com/css2?family=Noto+Sans+Mono:wght@100..900&display=swap"
];
