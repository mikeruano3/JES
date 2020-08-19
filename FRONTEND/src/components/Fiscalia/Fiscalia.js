import React, { useState, useEffect } from "react";
import dataServiceCommon from "../../services/rawdata.service";
const dataService = new dataServiceCommon('data/global_vars');

const Fiscalia = props => {
    const initialFiscaliaState = {
      _id: null,
      name: "",
      location: "",
      phone: ""
    };
    const [currentFiscalia, setCurrentFiscalia] = useState(initialFiscaliaState);
    const [message, setMessage] = useState("");
  
    const getFiscalia = id => {
      dataService.findOne(id)
        .then(response => {
          setCurrentFiscalia(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    };
  
    useEffect(() => {
        getFiscalia(props.match.params.id);
    }, [props.match.params.id]);
  
    const handleInputChange = event => {
      const { name, value } = event.target;
      setCurrentFiscalia({ ...currentFiscalia, [name]: value });
    };
  
    const updateFiscalia = () => {
      dataService.update({ id: currentFiscalia._id }, currentFiscalia)
        .then(response => {
          setMessage("The Fiscalia was updated successfully!");
        })
        .catch(e => {
          console.log(e);
        });
    };
  
    const deleteFiscalia = () => {
      dataService.remove({ id: currentFiscalia._id })
        .then(response => {
          props.history.push("/fiscaliaslist");
        })
        .catch(e => {
          console.log(e);
        });
    };
  
    return (
        <div>
          {currentFiscalia ? (
            <div className="edit-form">
              <h4>Fiscalia</h4>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={currentFiscalia.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="value">Location</label>
                  <input
                    type="text"
                    className="form-control"
                    id="location"
                    name="location"
                    value={currentFiscalia.location}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={currentFiscalia.phone}
                    onChange={handleInputChange}
                  />
                </div>
              </form>
              <button className="badge badge-danger mr-2" onClick={deleteFiscalia}>
                Delete
              </button>
    
              <button
                type="submit"
                className="badge badge-success"
                onClick={updateFiscalia}
              >
                Update
              </button>
              <p>{message}</p>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Fiscalia...</p>
            </div>
          )}
        </div>
    );    
};
  
export default Fiscalia;