import { useParams } from "react-router-dom";

const PropertyDetailsPage = ({ houses }) => {
  const { id } = useParams();
  const property = houses.find((house) => house.id === parseInt(id));

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <div>
      <h1>Property Details</h1>
      <div>
        <p>Property Name: {property.name}</p>
        <p>Location: {property.location}</p>
        {/* Add other details here */}
      </div>
    </div>
  );
};

export default PropertyDetailsPage;
