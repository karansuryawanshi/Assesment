import React, { useState, useEffect } from "react";

const ServiceForm = ({
  addService,
  updateService,
  editableService,
  setEditableService,
}) => {
  const [serviceData, setServiceData] = useState({
    name: "",
    description: "",
    price: "",
  });

  useEffect(() => {
    if (editableService) {
      setServiceData(editableService);
    }
  }, [editableService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setServiceData({ ...serviceData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!serviceData.name || !serviceData.description || !serviceData.price) {
      alert("All fields are required.");
      return;
    }

    if (editableService) {
      updateService(serviceData);
      setEditableService(null);
    } else {
      addService(serviceData);
    }

    setServiceData({ name: "", description: "", price: "" });
  };

  return (
    <form className="service-form" onSubmit={handleSubmit}>
      <p>{editableService ? "Update Service" : "Add New Service"}</p>
      <input
        type="text"
        name="name"
        value={serviceData.name}
        placeholder="Service Name"
        onChange={handleChange}
      />
      <textarea
        name="description"
        value={serviceData.description}
        placeholder="Service Description"
        onChange={handleChange}
      />
      <input
        type="number"
        name="price"
        value={serviceData.price}
        placeholder="Service Price"
        onChange={handleChange}
      />
      <button type="submit">
        {editableService ? "Update Service" : "Add Service"}
      </button>
    </form>
  );
};

export default ServiceForm;
