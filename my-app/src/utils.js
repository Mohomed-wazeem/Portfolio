// export const getImageUrl = (path) => {
//     return new URL(`../assets/${path}`,import.meta.url).href;
// };

export const getImageUrl = (imageName) => {
    return new URL(`../assets/about/hero/${imageName}`, import.meta.url).href;
};

