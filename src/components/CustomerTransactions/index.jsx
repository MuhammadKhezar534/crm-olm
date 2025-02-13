import React from "react";
import TableBox from "../../hoc/TableBox";
import Table from "../Table";
import {
  customerData,
  headersForCustomer,
  makeCustomerDataShape,
} from "../../utilities/mock";
import "./styles.scss";

const CustomerTransactuons = () => {
  return (
    <div className="customer-transaction-ctn mt-48">
      <TableBox>
        <Table
          enablePagination={true}
          data={makeCustomerDataShape(customerData, "")}
          headers={headersForCustomer["Transactions"]}
        />
      </TableBox>
    </div>
  );
};

export default CustomerTransactuons;
