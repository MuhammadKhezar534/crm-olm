import React, { useState } from "react";
import OutlineButton from "../OutlineButton";
import MButton from "../MButton";
import "./styles.scss";
import AddCard from "../AddCard";

const CardDetail = () => {
  const [isCard, setCard] = useState(false);

  const toggleCard = () => {
    setCard((prev) => !prev);
  };
  return (
    <div className="mt-24 card-detail-ctn">
      <div className="flex sp-b mb-16">
        {!isCard && <h3>Card Details</h3>}
        &nbsp;
        {!isCard && (
          <div className="flex" style={{ justifyContent: "end" }}>
            <OutlineButton />
            <MButton
              btnText="Create Card"
              simpBtn={true}
              onClick={toggleCard}
            />
          </div>
        )}
      </div>

      {!isCard && (
        <div className="card-box-ctn">
          <div className="flex mt-24">
            <div className="flex-d mr-8">
              <span>CARD NUMBER</span>
              <span>Name</span>
              <span>Expiry</span>
            </div>
            <div className="flex-d">
              <span className="c-no">123415151515</span>
              <span className="c-no name ">John Doe</span>
              <span>Jul, 2026</span>
            </div>
          </div>

          <div className="flex" style={{ justifyContent: "end" }}>
            <span className="t-under">EDIT</span>
            <span className="t-under">DELETE</span>
          </div>
        </div>
      )}
      {isCard && <AddCard toggleCard={toggleCard} />}
    </div>
  );
};

export default CardDetail;
