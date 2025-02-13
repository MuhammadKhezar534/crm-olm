import React, { Fragment, useState } from "react";
import AddressBox from "../AddressBox";
import OutlineButton from "../OutlineButton";
import MButton from "../MButton";
import AddNewAddress from "../AddNewAddress";
import "./styles.scss";

const ContactAddress = () => {
  const [isNewAddress, setNewAddress] = useState(false);

  const toggleAddressScreen = () => {
    setNewAddress((prev) => !prev);
  };

  return (
    <div className="mt-24">
      {!isNewAddress && (
        <Fragment>
          <div className="flex sp-b mb-16">
            <h3>Default Address</h3>
            <div className="flex">
              <OutlineButton />
              <MButton
                btnText="ADD NEW ADDRESS"
                simpBtn={true}
                onClick={toggleAddressScreen}
              />
            </div>
          </div>
          <AddressBox />

          <div className="mt-32">
            <h3 className="mb-16">Other address</h3>
            <AddressBox />
            <AddressBox />
          </div>
        </Fragment>
      )}
      {isNewAddress && (
        <AddNewAddress toggleAddressScreen={toggleAddressScreen} />
      )}
    </div>
  );
};

export default ContactAddress;
