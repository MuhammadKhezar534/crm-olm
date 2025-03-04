import { isEmpty } from "lodash";
import MCheckbox from "../components/MCheckbox";
import ActionBtn from "../components/ActionBtn";

export const customerActivity = [
  {
    name: "Normal",
    data: [0, 2000, 0, 0, 0, 0, 0, 700, 5, 100, 0, 0],
  },
  {
    name: "Loyalty",
    data: [0, 0, 3000, 0, 1000, 0, 0, 5, 8, 5, 0, 0],
  },
  {
    name: "Credit",
    data: [1000, 0, 0, 0, 3330, 0, 0, 500, 8, 5, 0, 0],
  },
];

export const customerSatisfaction = [
  {
    name: "Last Month",
    data: [100, 300, 250, 900, 600, 40, 90, 440, 200, 433, 702, 1000],
    color: "#07E098",
  },
  {
    name: "This Month",
    data: [50, 200, 30, 440, 120, 300, 920, 100, 550, 900, 0, 200],
    color: "#0095FF",
  },
];

export const onboardingData = [
  {
    name: "Home Decor Range",
    popularity: "80",
  },
  {
    name: "Disney Princess Pink Bag 18",
    popularity: "29",
  },
  {
    name: "Bathroom Essentials",
    popularity: "18",
  },
  {
    name: "Apple Smartwatches",
    popularity: "25",
  },
];

export const colorsForOnboarding = {
  "Home Decor Range": ["#0095FF", "#F0F9FF"],
  "Disney Princess Pink Bag 18": ["#00E096", "#F0FDF4"],
  "Bathroom Essentials": ["#884DFF", "#FBF1FF"],
  "Apple Smartwatches": ["#FF8F0D", "#FEF6E6"],
};

export const customerStatData = [
  {
    cTitle: "Total Customers",
    isTrending: true,
    value: 125141,
    subtext: "Employee",
    trendValue: 10.0,
  },
  {
    cTitle: "Number of Email",
    isTrending: true,
    value: 3342,
    subtext: "Viewers",
    trendValue: 22.0,
  },
  {
    cTitle: "Total Promotions",
    isTrending: true,
    value: 77,
    subtext: "Customers",
    trendValue: 22.0,
  },
  {
    cTitle: "Total redeemed",
    isTrending: false,
    value: 17,
    subtext: "Coupons",
    trendValue: 7.0,
  },
  {
    cTitle: "Total Generated",
    isTrending: false,
    value: 17,
    subtext: "Coupons",
    trendValue: 10.0,
  },
  {
    cTitle: "Total Customers",
    isTrending: false,
    value: 17,
    subtext: "Joined today",
    trendValue: 10.0,
  },
  {
    cTitle: "Total Customers",
    isTrending: false,
    value: 3342,
    subtext: "Joined within this week",
    trendValue: 10.0,
  },
  {
    cTitle: "Total Customers",
    isTrending: false,
    value: 17,
    subtext: "Joined within this Month",
    trendValue: 10.0,
  },
  {
    cTitle: "Total Customers",
    isTrending: false,
    value: 17,
    subtext: "Joined within this Year",
    trendValue: 10.0,
  },
  {
    cTitle: "Total Customers",
    isTrending: false,
    value: 17,
    subtext: "Generated",
    trendValue: 10.0,
  },
];

export const loginFields = [
  {
    type: "email",
    placeholder: "Your Email Address",
    required: true,
    name: "email",
    label: "Email",
    icon: false,
  },
  {
    type: "password",
    placeholder: "Your Password",
    required: true,
    name: "password",
    label: "Password",
    icon: false,
  },
];

export const onboardingData2 = [
  {
    name: "Home Decor Range",
    popularity: "80",
  },
  {
    name: "Disney Princess Pink Bag 18",
    popularity: "29",
  },
  {
    name: "Bathroom Essentials",
    popularity: "18",
  },
  {
    name: "Apple Smartwatches",
    popularity: "25",
  },
];

export const headersForCustomer = {
  "All Customers": [
    {
      Header: <MCheckbox className="header-class" />,
      accessor: "checkbox",
    },
    {
      Header: "Mobile",
      accessor: "mobile",
    },
    {
      Header: "First Name",
      accessor: "firstName",
    },
    {
      Header: "Last Name",
      accessor: "lastName",
    },
    {
      Header: "Gender",
      accessor: "gender",
    },
    {
      Header: "Email id",
      accessor: "email",
    },
    {
      Header: "Birthday",
      accessor: "birthday",
    },
    {
      Header: "Birth Month",
      accessor: "birthMonth",
    },
    {
      Header: "Action",
      accessor: "action",
    },
  ],
  Transactions: [
    {
      Header: <MCheckbox className="header-class" />,
      accessor: "checkbox",
    },
    {
      Header: "Mobile",
      accessor: "mobile",
    },
    {
      Header: "First Name",
      accessor: "firstName",
    },
    {
      Header: "Last Name",
      accessor: "lastName",
    },
    {
      Header: "Location",
      accessor: "location",
    },
    {
      Header: "Quantity",
      accessor: "quantity",
    },
    {
      Header: "Bill Amount",
      accessor: "billAmount",
    },
    {
      Header: "Action",
      accessor: "action",
    },
  ],
};

export const headersForCampaign = [
  {
    Header: <MCheckbox className="header-class" />,
    accessor: "checkbox",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Subject",
    accessor: "subject",
  },
  {
    Header: "Created By",
    accessor: "createdby",
  },
  {
    Header: "Created on",
    accessor: "createdOn",
  },
  {
    Header: "Actions",
    accessor: "action",
  },
];

export const customerData = [
  {
    mobile: "+9714 14141 ",
    firstName: "John",
    lastName: "Doe",
    gender: "Male",
    email: "John.doe@gmail.com",
    birthday: 14,
    birthMonth: "March",
    location: "Main Branch",
    quantity: 7,
    billAmount: "150 AED",
    action: <span>Action</span>,
  },
  {
    mobile: "+9714 14141 ",
    firstName: "John",
    lastName: "Doe",
    gender: "Male",
    email: "John.doe@gmail.com",
    birthday: 14,
    location: "Main Branch",
    quantity: 7,
    billAmount: "150 AED",
    birthMonth: "March",
  },
];

export const campaignData = [
  {
    name: "Investment",
    subject: "Investment",
    createdby: "John",
    createdOn: "4/10/2023",
  },
  {
    name: "Investment",
    subject: "Investment",
    createdby: "John",
    createdOn: "4/10/2023",
  },
  {
    name: "Investment",
    subject: "Investment",
    createdby: "John",
    createdOn: "4/10/2023",
  },
  {
    name: "Investment",
    subject: "Investment",
    createdby: "John",
    createdOn: "4/10/2023",
  },
];

export const makeShapeForCampaign = (data) => {
  if (!isEmpty(data)) {
    return data.map((dat) => {
      return {
        checkbox: <MCheckbox />,
        name: dat?.name,
        subject: dat?.subject,
        createdby: dat?.createdby,
        createdOn: dat?.createdOn,
        action: (
          <span className="flex">
            <ActionBtn title="EDIT" />
            <ActionBtn title="DELETE" />
          </span>
        ),
      };
    });
  } else return [];
};

export const makeCustomerDataShape = (data, tab) => {
  if (!isEmpty(data)) {
    return data.map((dat) => {
      return {
        checkbox: <MCheckbox />,
        mobile: <span>{dat?.mobile}</span>,
        firstName: <span>{dat?.firstName}</span>,
        lastName: <span>{dat?.lastName}</span>,
        gender: <span>{dat?.gender}</span>,
        email: <span>{dat?.email}</span>,
        birthday: <span>{dat?.birthday}</span>,
        birthMonth: <span>{dat?.birthMonth}</span>,
        quantity: <span>{dat?.quantity}</span>,
        billAmount: <span>{dat?.billAmount}</span>,
        location: <span>{dat?.location}</span>,

        action: (
          <span className="flex">
            {tab !== "Transactions" ? (
              <>
                <ActionBtn title="EDIT" />
                <ActionBtn title="DELETE" />
              </>
            ) : (
              <ActionBtn title="VIEW" />
            )}
          </span>
        ),
      };
    });
  } else return [];
};

export const createCustomerFields = [
  {
    label: "Contact Number",
    placeholder: "Enter Contact Number",
    type: "text",
    isFieldInput: true,
    name: "contact_number",
  },
  {
    label: "Customer Code",
    placeholder: "Enter Customer Code",
    type: "text",
    isFieldInput: true,
    name: "customer_code",
  },
  {
    label: "First Name",
    placeholder: "Enter First Name",
    type: "text",
    isFieldInput: true,
    name: "customer_code",
  },
  {
    label: "Last Name",
    placeholder: "Enter Last Name",
    type: "text",
    isFieldInput: true,
    name: "last_name",
  },
  {
    label: "Birth Day",
    placeholder: "Enter Birth Day",
    type: "text",
    isFieldInput: false,
    name: "birth_date",
    options: [{ label: "Text", value: "Text" }],
  },
  {
    label: "Birth Month",
    placeholder: "Enter Birth Month",
    type: "text",
    isFieldInput: false,
    name: "birth_month",
    options: [{ label: "Text", value: "Text" }],
  },
  {
    label: "Nationality",
    placeholder: "Enter Nationality",
    type: "text",
    isFieldInput: true,
    name: "nationality",
  },

  {
    label: "Enter Address",
    placeholder: "Enter Email Address",
    type: "text",
    isFieldInput: true,
    name: "email",
  },
  {
    label: "Gender",
    placeholder: "Enter Gender",
    isFieldInput: false,
    name: "gender",
    options: [{ label: "Text", value: "Text" }],
  },
  {
    label: "Special Day",
    placeholder: "Enter Special Day",
    type: "text",
    isFieldInput: false,
    name: "special_day",
    options: [{ label: "Text", value: "Text" }],
  },
  {
    label: "Location",
    placeholder: "Enter Location",
    type: "text",
    isFieldInput: false,
    name: "location",
    options: [{ label: "Text", value: "Text" }],
  },
  {
    label: "Category",
    placeholder: "Enter Category",
    type: "text",
    isFieldInput: false,
    name: "category",
    options: [{ label: "Text", value: "Text" }],
  },
];

export const addressFields = [
  {
    label: "No",
    placeholder: "Enter Number",
    type: "text",
    name: "number",
    respTag: {
      lg: 4,
      md: 4,
      sm: 6,
      xs: 12,
    },
  },
  {
    label: "Street Name",
    placeholder: "Enter Street Name",
    type: "text",
    name: "street",
    respTag: {
      lg: 8,
      md: 8,
      sm: 6,
      xs: 12,
    },
  },
  {
    label: "City",
    placeholder: "Enter City Name",
    type: "text",
    name: "city",
    respTag: {
      lg: 12,
      md: 12,
      sm: 12,
      xs: 12,
    },
  },
  {
    label: "Landmark",
    placeholder: "Enter Nearest Landmark",
    type: "text",
    name: "landmark",
    respTag: {
      lg: 12,
      md: 12,
      sm: 12,
      xs: 12,
    },
  },
  {
    label: "Building Name",
    placeholder: "Enter Building Number",
    type: "text",
    name: "building",
    respTag: {
      lg: 12,
      md: 12,
      sm: 12,
      xs: 12,
    },
  },
];

export const addCardFields = [
  {
    label: "Card Number",
    placeholder: "Enter Card Number",
    type: "text",
    name: "number",
  },
  {
    label: "Name",
    placeholder: "Enter Name",
    type: "text",
    name: "name",
  },
  {
    label: "Expiry Date",
    placeholder: "Select Date",
    type: "text",
    name: "date",
  },
];

export const templateList = [1, 2, 3, 4, 5, 6, 7, 8];
