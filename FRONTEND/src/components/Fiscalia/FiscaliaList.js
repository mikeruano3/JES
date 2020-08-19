import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import dataServiceCommon from "../../services/rawdata.service";
import { deployPrefix } from "../../config";
const dataService = new dataServiceCommon('data/global_vars');

const FiscaliaList = props => {
    const [fiscalias, setFiscalias] = useState([]);
    const [currentFiscalia, setCurrentFiscalia] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [searchName, setSearchName] = useState("");

    useEffect(() => {
        retrieveFiscalias();
    }, []);

    const onChangeSearchName = e => {
        const searchName = e.target.value;
        setSearchName(searchName);
    };

    const retrieveFiscalias = () => {
      dataService.findAll()
          .then(response => {
            setFiscalias(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    };

    const refreshList = () => {
        retrieveFiscalias();
        setCurrentFiscalia(null);
        setCurrentIndex(-1);
    };

    const setActiveFiscalia = (fiscalia, index) => {
        setCurrentFiscalia(fiscalia);
        setCurrentIndex(index);
    };

    const findByName = () => {
      dataService.findMany({ name: searchName})
          .then(response => {
            setFiscalias(response.data.data);
          })
          .catch(e => {
            console.log(e);
          });
    };

    return (
        <div className="container">
          <div className="col-md-8">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search by name"
                value={searchName}
                onChange={onChangeSearchName}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={findByName}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <h4>Fiscalia List</h4>
      
              <ul className="list-group">
                {fiscalias &&
                  fiscalias.map((fiscalia, index) => (
                    <li
                      className={
                        "list-group-item " + (index === currentIndex ? "active" : "")
                      }
                      onClick={() => setActiveFiscalia(fiscalia, index)}
                      key={index}
                    >
                      {fiscalia.name}
                    </li>
                  ))}
              </ul>
              <button
                className="m-3 btn btn-sm btn-danger"
                onClick={refreshList}
              >
                Refresh List
              </button>
            </div>
            <div className="col-md-3">
              {currentFiscalia ? (
                <div>
                  <h4>Fiscalia</h4>
                  <div>
                    <label>
                      <strong>Name:</strong>
                    </label>{" "}
                    {currentFiscalia.name}
                  </div>
                  <div>
                    <label>
                      <strong>Location:</strong>
                    </label>{" "}
                    {currentFiscalia.location}
                  </div>
                  <div>
                    <label>
                      <strong>Phone:</strong>
                    </label>{" "}
                    {currentFiscalia.phone}
                  </div>
                  <Link
                    to={`${deployPrefix}/fiscalia/` + currentFiscalia._id}
                    className="badge badge-warning"
                  >
                    Edit
                  </Link>
                </div>
              ) : (
                <div>
                  <br />
                  <p>Please click on a Fiscalia...</p>
                </div>
              )}
            </div>
          </div>
        </div>
    );
};

export default FiscaliaList;