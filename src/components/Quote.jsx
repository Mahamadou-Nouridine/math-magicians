/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import fetchQuote from '../logic/apiRequest';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const callFecthApi = async () => {
      try {
        const fetchedQuote = await fetchQuote();
        setQuote(fetchedQuote[0].quote);
      } catch (error) {
        setError(error.message);
      }
    };
    callFecthApi();
  }, [setQuote, setError]);
  return (
    <>
      {!quote && !error ? <p>...loading</p> : error && !quote ? <p>{error}</p> : <p>{quote}</p>}
    </>
  );
};

export default Quote;
