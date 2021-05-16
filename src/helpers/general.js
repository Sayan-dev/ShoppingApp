export const excessHideForCardNames = (limit, string) => {
  let modString = string;
  const dots = '...';
  if (modString.length > limit) {
    modString = modString.substring(0, limit) + dots;
  }
  return modString;
};
