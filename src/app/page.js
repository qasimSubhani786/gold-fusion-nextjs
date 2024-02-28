'use client'
import { useEffect } from "react";
import axios from "axios";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

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
    <> </>
  );
}
