export const maskName = (name: string): string => {
  const mask = "*";
  return (name.substring(0, 1) +
    mask.repeat(name.length - 2) +
    name.slice(-1)) as string;
};
