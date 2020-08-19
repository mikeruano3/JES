import React, { useState } from "react";
import dataServiceRaw from "../../services/rawdata.service";
const dataService = new dataServiceRaw()

const AddFiscalia = () => {
    const initialFiscaliaState = {
      id: null,
      name: "",
      location: "",
      phone: ""
    };
    const [fiscalia, setFiscalia] = useState(initialFiscaliaState);
    const [submitted, setSubmitted] = useState(false);
  
    const handleInputChange = event => {
      const { name, value } = event.target;
      setFiscalia({ ...fiscalia, [name]: value });
    };
  
    const saveFiscalia = () => {
      var data = {
        name: fiscalia.name,
        location: fiscalia.location,
        phone: fiscalia.phone
      };
  
      dataService.insertOne(data)
        .then(response => {
          setFiscalia({
            id: response.data.id,
            name: response.data.name,
            location: response.data.location,
            phone: response.data.phone
          });
          setSubmitted(true);
        })
        .catch(e => {
          console.log(e);
        });
    };
  
    const newFiscalia = () => {
      setFiscalia(initialFiscaliaState);
      setSubmitted(false);
    };
  
    return (
        <div className="submit-form">
          {submitted ? (
            <div>
              <h4>You submitted successfully!</h4>
              <button className="btn btn-success" onClick={newFiscalia}>
                Add
              </button>
            </div>
          ) : (
            <div>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  required
                  value={fiscalia.name}
                  onChange={handleInputChange}
                  name="name"
                />
              </div>
    
              <div className="form-group">
                <label htmlFor="location">location</label>
                <input
                  type="text"
                  className="form-control"
                  id="location"
                  required
                  value={fiscalia.location}
                  onChange={handleInputChange}
                  name="location"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  required
                  value={fiscalia.phone}
                  onChange={handleInputChange}
                  name="phone"
                />
              </div>
    
              <button onClick={saveFiscalia} className="btn btn-success">
                Submit
              </button>
            </div>
          )}
        </div>
    );
};
  
export default AddFiscalia;