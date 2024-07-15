import React, { useState, useEffect } from 'react';

const ArticleList = (props) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://content.guardianapis.com/tags?q=${props}&section=${props}&api-key=test`
        );
        if (!response.ok) {
          throw new Error('Netzwerkantwort war nicht ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Laden...</div>;
  }

  if (error) {
    return <div>Fehler: {error.message}</div>;
  }

  return (
    <div>
      <h1>{props} Tags</h1>
      <ul>
        {data.response.results.map((tag) => (
          <li key={tag.id}>{tag.webTitle}</li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;
