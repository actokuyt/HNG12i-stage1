import axios from "axios";

export async function getFunFact(num: number): Promise<string> {
  try {
    const response = await axios.get(`http://numbersapi.com/${num}/math`);
    return response.data;
  } catch (error) {
    console.error("Error fetching fun fact:", error);
    return "No fun fact available.";
  }
}
