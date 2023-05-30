const apiKey = 'ZNHqPa5HvAih0eg9pVsxvw==v66RlmHuPRrafjrr';
const baseUrl = 'https://api.api-ninjas.com/v1/quotes';
const category = 'happiness';
const url = `${baseUrl}?category=${category}`;

const fetchQuote = async () => {
  const response = await fetch(url, {
    headers: {
      'X-Api-Key': apiKey,
    },
  });
  const quotes = await response.json();
  return quotes;
};

export default fetchQuote;
