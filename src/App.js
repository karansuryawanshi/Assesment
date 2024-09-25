import React, { useState } from "react";
import ServiceForm from "./components/ServiceForm";
import ServiceList from "./components/ServiceList";
import "./index.css";

function App() {
  const [services, setServices] = useState([]);
  const [editableService, setEditableService] = useState(null);

  const addService = (service) => {
    setServices([...services, { ...service, id: Date.now() }]);
  };

  const deleteService = (id) => {
    setServices(services.filter((service) => service.id !== id));
  };

  const updateService = (updatedService) => {
    setServices(
      services.map((service) =>
        service.id === updatedService.id ? updatedService : service
      )
    );
  };

  const handleEdit = (service) => {
    setEditableService(service);
  };

  return (
    <div className="App">
      <h1>Healthcare Services Management</h1>
      <ServiceForm
        addService={addService}
        updateService={updateService}
        editableService={editableService}
        setEditableService={setEditableService}
      />
      <ServiceList
        services={services}
        deleteService={deleteService}
        handleEdit={handleEdit}
      />
    </div>
  );
}

export default App;
