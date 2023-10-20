// src/pages/api/home.js
import endpoint from '../../../utils/api-endpoint';

export default async function handler(req, res) {
  try {
    const page = 1; // you can define the page number here
    const response = await endpoint.get(`threads?page=${page}`);
    const data = response.data.threads.threads;
    const totalPages = response.data.threads.totalPages;
    res.status(200).json({ data, totalPages });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ data: [], totalPages: 1 });
  }
}
