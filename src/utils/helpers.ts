export const firstTenElements = (data: [] | undefined | null) => {
  if (!data) return [];

  if (data.length < 11) return data;

  return data.slice(0, 10);
};
