'use client'
import { useEffect } from "react";
import axios from "axios";

export default function Home() {

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/customers');

      //const responseData = await response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>Welcome Home!</h1>
    </div>
  );
}
