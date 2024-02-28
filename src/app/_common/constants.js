export const constants = {
  goldiamCrafters: `Goldiam Crafters`,
  welcomeBack: `Welcome Back`,
  loginSubTitle: `Please login to your account to proceed`,
};

export const statusEnums = {
    pending: `Pending`,
    processing: `Processing`,
    complete: `Complete`
}

export const timePeriods = [
  {
    name: `Day`,
    isActive: true,
  },
  {
    name: `Week`,
    isActive: false,
  },
  {
    name: `Month`,
    isActive: false,
  },
  {
    name: `Year`,
    isActive: false,
  },
];

export const dashboardBadges = [
    {
        name: `Total Sales`,
        amount: 0,
        isCurrency: true
    },
    {
        name: `Today's Orders`,
        amount: 0,
        isCurrency: false
    },
    {
        name: `Orders Completed`,
        amount: 0,
        isCurrency: false
    },
    {
        name: `Orders in making`,
        amount: 0,
        isCurrency: false
    },
    {
        name: `Total Staff`,
        amount: 0,
        isCurrency: false
    }
]

export const orderHeaders = [
  {
    name: "Item",
  },
  {
    name: "OrderBy",
  },
  {
    name: "CompanyName",
  },
  {
    name: "OrderDate",
  },
  {
    name: "UrgencyLevel",
  },
  {
    name: "Qty",
  },
  {
    name: "Status",
  },
  {
    name: "Actions",
  },
];
