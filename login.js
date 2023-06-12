const login = async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const data = { email: email, password: password };
    const response = await fetch("http://localhost:5000/api/users/login", {
      method: "POST", body: JSON.stringify(data), headers: { "Content-Type": "application/json"},});
    const json = await response.json();
    console.log(json)
    localStorage.setItem("token",json.token) 
    console.log(`Welcome ${json.first_name} ${json.last_name}`);
  };
  
