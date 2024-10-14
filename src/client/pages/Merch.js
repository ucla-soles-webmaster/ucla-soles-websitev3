import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function Merch() {
    const [merch, setMerch] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:5555/merch/getItems')
            .then(res => {
                setMerch(res.data);
                setLoading(false);
                
            })
            .catch(error => {
              console.error('Error fetching data: ', error);
              setLoading(false);
          });
    }, [merch]);

    return (
      <div>
          {loading ? (
              <div>Loading merch items...</div>
          ) : (
              merch.length > 0 ? (
                  <ul>
                      {merch.map(merch_item => (
                          <li key={merch_item._id}>{merch_item.Name}</li>
                      ))}
                  </ul>
              ) : (
                  <div>No merch items found.</div>
              )
          )}
      </div>
  );  
}