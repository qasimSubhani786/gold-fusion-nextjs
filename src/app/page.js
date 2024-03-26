'use client'
import { useEffect } from "react";
import axios from "axios";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Script from "next/script";

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
    <>
      <Script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossOrigin="anonymous"/>
      <Script src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js" crossOrigin="anonymous" />
      <Script src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js" crossOrigin="anonymous" />
     </>
  );
}
