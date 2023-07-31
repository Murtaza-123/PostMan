import axios from "axios";

const getRequest = async (data) => {
  const phoneNumbers = {
    "03226127621": "http://localhost:3000/api/v1/chat",
    "03356891058": "http://localhost:4000/api/v1/chat",
  };

  const phoneNumber = data.phoneNo;
  const url = phoneNumbers[phoneNumber];

  if (url) {
    try {
      const response = await axios.post(url, data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }
};

const data = {
  call_id: 123,
  message: "Show me the list of beef burgers",
  phoneNo: "03226127621",
};
getRequest(data);
