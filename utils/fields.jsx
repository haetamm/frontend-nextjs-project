const { GiPadlockOpen } = require("react-icons/gi");
const { IoMdFingerPrint } = require("react-icons/io");

export const fieldsLogin = [
  {
    name: "username",
    type: "text",
    placeholder: "Username",
    icon: <IoMdFingerPrint className="h-5 w-5 text-gray-400" />,
  },
  {
    name: "password",
    type: "password",
    placeholder: "Password",
    icon: <GiPadlockOpen className="h-5 w-5 text-gray-400" />,
  },
];

export const inputProfileFields = [
  { name: "name", placeholder: "Contoh nama", readOnly: true, type: "text" },
  { name: "username", placeholder: "Username", readOnly: false, type: "text" },
  {
    name: "email",
    placeholder: "contoh@gmail.com",
    readOnly: true,
    type: "email",
  },
  {
    name: "password",
    placeholder: "New Password",
    readOnly: false,
    type: "password",
  },
  {
    name: "address",
    placeholder: "Address / Street",
    readOnly: true,
    type: "text",
  },
  { name: "city", placeholder: "City", readOnly: true, type: "text" },
  { name: "country", placeholder: "Country", readOnly: true, type: "select" },
  { name: "state", placeholder: "State", readOnly: true, type: "select" },
  { name: "postalcode", placeholder: "Zip Code", readOnly: true, type: "text" },
];

export const fieldTable = ["USER", "JOINED", "STATUS", "ACTION"];
