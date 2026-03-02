export const formatDate = (dateString: string) => {
  if (!dateString) return "Unknown";

  const date = new Date(dateString);// Convert string to Date object

  return date.toLocaleDateString("en-GB", {
    day: "2-digit", // Two-digit day
    month: "long", // Full month name
    year: "numeric", // Four-digit year
  });
};
