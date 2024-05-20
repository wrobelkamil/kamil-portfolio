import React from 'react';
import Navbar from '../components/navigation/navbar'; // Adjust the path according to your structure
import '../styles/globals.css'; // Ensure this path is correct and the file exists

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
