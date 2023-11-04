import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { ContactModel } from "../../models";
import "./ContactItemCard.css";

interface DetailInfo {
  label: string;
  value: string;
}

const ContactItemCard = (props: { contact: ContactModel }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleCardItem = () => {
    setShowDetails(!showDetails);
  };
  const { name, picture, cell, email, location } = props.contact;
  const details: DetailInfo[] = [
    {
      label: "Mobile",
      value: cell,
    },
    {
      label: "Email",
      value: email,
    },
    {
      label: "State",
      value: location.state,
    },
  ];

  return (
    <div className="card" style={{ marginBottom: "10px" }} key={name.first}>
      <div className="card-content">
        <div className="media" style={{ alignItems: "center" }}>
          <div
            className="media-left"
            style={{
              paddingRight: "20px",
              marginRight: "20px",
              borderRight: "2px solid rgba(10, 10, 10, 0.2)",
            }}
          >
            <figure className="image avatar">
              <img
                src={picture.thumbnail}
                alt={name.first}
                style={{ borderRadius: "50%" }}
              />
            </figure>
          </div>
          <div className="media-content" style={{ overflow: "hidden" }}>
            <p className="title ">
              {name.first + " " + name.last}
              <span
                className={showDetails ? "arrow rotate" : "arrow"}
                onClick={toggleCardItem}
              />
            </p>

            <p className="subtitle">
              {location.city}, {location.state}
            </p>
          </div>
        </div>
      </div>
      <div className="card" style={{ width: "auto" }}>
        {showDetails && (
          <div className="card-content">
            {details.map((info) => (
              <div key={info.label} className="panel-block">
                <div className="content">
                  <label
                    className="label"
                    style={{
                      display: "inline-block",
                      width: "50px",
                      paddingRight: "20px",
                      marginRight: "20px",
                      marginBottom: "0",
                      textAlign: "right",
                    }}
                  >
                    {info.label}:
                  </label>{" "}
                  <p>{info.value}</p>
                </div>
                <FontAwesomeIcon
                  icon={faCheck}
                  style={{ float: "right", color: "hsl(171, 100%, 41%)" }}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactItemCard;
