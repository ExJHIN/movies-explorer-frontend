export function getDynamicMovies() {
  let adaptiveCount;
  const width = window.innerWidth;
  const config = {'1200': [12, 3], '900': [9, 3],'768': [8, 2],'240': [5, 2]};
  Object.keys(config).sort((a, b) => a - b).forEach((key) => {
      if (width > +key) {
        adaptiveCount = config[key];
      }
    });
  return adaptiveCount;
}