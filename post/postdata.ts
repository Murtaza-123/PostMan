async function postJSON(data) {
    try {
      const response = await fetch("http://localhost:3000/uploads/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "name":"murtaza",
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
      console.log(response.headers);
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  
  const data = { customer_name: "example" , CNIC:43252435 , address:  "new multan" , email: "murtazazidi@" , phoneNo: "32723821831"};
  postJSON(data);
  