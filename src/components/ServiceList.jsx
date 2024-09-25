import React from "react";

const ServiceList = ({ services, deleteService, handleEdit }) => {
  return (
    <div>
      <p className="ServiceList-Heading">Service List</p>
      {services.length === 0 ? (
        <p>No services available.</p>
      ) : (
        <div>
          {services.map((service) => (
            <div className="service-list" key={service.id}>
              <div className="service-list-data">
                <p>
                  <span>Name :- </span>
                  {service.name}
                </p>
                <p>
                  <span>Description:- </span>
                  {service.description}
                </p>
                <p>
                  <span>Price :-</span> ${service.price}
                </p>
              </div>
              <div className="service-list-buttons">
                <button onClick={() => handleEdit(service)}>Edit</button>
                <button onClick={() => deleteService(service.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServiceList;
