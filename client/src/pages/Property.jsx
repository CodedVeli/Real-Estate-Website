import React from 'react'
import { useEffect, useState } from "react";


function Property() {
  const [properties, setProperties] = useState([]);
  const [error, setError] = useState(null);
 
  
  useEffect(() => {
    fetch("https:/properties")
      .then((r) => {
        if (!r.ok) {
          throw new Error(`HTTP error! Status: ${r.status}`);
        }
        return r.json();
      })
      .then((data) => {
        console.log("Data from /properties:", data);
        setProperties(data);
      })
      .catch((err) => {
        console.error("Error fetching properties:", err.message);
        setError(err.message);
      });
  }, []);

  console.log(":", properties);
  console.log("Error:", error);

  
  return (
    <div>
      <h2>All Properties</h2>
      <ul>
        {properties.map((property) => (
          <li key={property.id}>
            Property Name: {property.title} 
            Desciption: {property.description}
            Price: {property.price}
            Location: {property.location}
            {property.image_url}
            {property.created_at}</li>

        ))}
      </ul>

      
    </div>
  );
}



export default Property;           