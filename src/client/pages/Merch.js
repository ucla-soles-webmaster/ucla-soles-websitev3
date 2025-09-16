import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./Merch.css"

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
    }, []);

    return (
      <div>
          {loading ? (
              <div>Loading merch items...</div>
          ) : (
              merch.length > 0 ? (
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {merch.map(merch_item => (
                        <li key={merch_item._id} style={{ marginBottom: '20px' }}>
                            <h3>{merch_item.Name}</h3>
                            <p>Cost: ${merch_item.Cost}</p>
                            <img src={merch_item.Image_Url}
                                alt="merch image"
                                style={{ width: '200px', height: 'auto' }} 
                            />
                        </li>
                    ))}
                  </ul>
              ) : (
                  <div>No merch items found.</div>
              )
          )}
      </div>
  );  
}