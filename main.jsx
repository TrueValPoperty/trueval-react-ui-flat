const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Example fetch request:
fetch(`${API_BASE_URL}/`)
  .then((res) => res.json())
  .then((data) => console.log(data));
