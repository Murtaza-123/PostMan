async function fetchData() {
  const response = await fetch("http://localhost:3000/health");

  const data = await response.json();
  console.log(response.status);
  console.log(data);
}

fetchData();
