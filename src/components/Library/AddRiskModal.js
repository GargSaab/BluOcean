import React, { useState } from "react";
import "./AddRiskModal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { TextField } from "@mui/material";

const AddRiskModal = ({ onClose, onSave }) => {
  const [riskScenario, setRiskScenario] = useState("");
  const [riskDescription, setRiskDescription] = useState("");
  const [riskFields, setRiskFields] = useState([{ key: "", value: "" }]);
  const [risk1, setRisk1] = useState("");
  const [risk2, setRisk2] = useState("");

  const handleAddField = () => {
    setRiskFields([...riskFields, { key: "", value: "" }]);
  };

  const handleFieldChange = (index, key, value) => {
    const updatedFields = [...riskFields];
    updatedFields[index] = { key, value };
    setRiskFields(updatedFields);
  };

  const handleSave = () => {
    onSave({
      riskScenario,
      riskDescription,
      riskFields,
    });
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>Add Risk Scenario</h2>
          <button onClick={onClose}>&times;</button>
        </div>
        <div className="modal-body">
          <form>
            <div className="form-group">
              {/* <label>Risk Scenario</label> */}
              <TextField
                fullWidth
                id="riskScenario"
                label="Risk Scenario"
                value={riskScenario}
                placeholder="Enter Risk Scenario"
                onChange={(e) => setRiskScenario(e.target.value)}
              />
            </div>
            <div className="form-group">
              <TextField
                fullWidth
                id="riskDescription"
                label="Risk Description"
                value={riskDescription}
                placeholder="Enter Risk Description"
                onChange={(e) => setRiskDescription(e.target.value)}
              />
            </div>
            <div className="form-group-kv">
              <TextField
                id="risk1"
                label="Risk Field 1"
                value={risk1}
                onChange={(e) => setRisk1(e.target.value)}
                placeholder="Enter Risk Field 1"
                style={{ width: "48%" }}
              />

              <TextField
                id="risk2"
                label="Risk Field 2"
                value={risk2}
                onChange={(e) => setRisk2(e.target.value)}
                placeholder="Enter Risk Field 2"
                style={{ width: "48%" }}
              />
            </div>
            {riskFields.map((field, index) => (
              <div className="form-group-kv" key={index}>
                <TextField
                  label="Key"
                  value={field.value}
                  onChange={(e) =>
                    handleFieldChange(index, field.key, e.target.value)
                  }
                  placeholder="Enter Key"
                  style={{ width: "48%" }}
                />
                <TextField
                  label="Value"
                  value={field.value}
                  onChange={(e) =>
                    handleFieldChange(index, field.key, e.target.value)
                  }
                  placeholder="Enter value"
                  style={{ width: "48%" }}
                />
              </div>
            ))}
            <div onClick={handleAddField} className="add-btn-box">
              <FontAwesomeIcon
                icon={faPlus}
                style={{ color: "#04139a", marginRight: 10 }}
              />
              <button type="button" className="button">
                Add New Key
              </button>
            </div>
          </form>
        </div>
        <hr />
        <div className="modal-footer">
          <div className="cancel-btn">
            <button onClick={onClose}>Cancel</button>
          </div>
          <div className="save-btn">
            <button onClick={handleSave}>Save as Draft</button>
            <button onClick={handleSave}>Publish</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRiskModal;
