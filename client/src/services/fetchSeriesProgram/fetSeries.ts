const API_URL_PROGRAM = "http://localhost:3310/api/programs";

export const fetchSeries = async () => {
  try {
    const response = await fetch(`${API_URL_PROGRAM}`);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
