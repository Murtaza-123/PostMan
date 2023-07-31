import FormData = require("form-data");
import axios from 'axios';
const fs = require('fs');


async function sendFile() {
  const formData = new FormData();
  formData.append('file', fs.createReadStream('1GB.bin'));

  try {
    const response = await axios.post('http://localhost:3000/uploads/send-large-data', formData, {
      headers: formData.getHeaders(),
    });
    console.log(formData.getHeaders());
    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

sendFile();
