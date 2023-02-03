// Add your code here

function submitData (nameV, emailV){

    const data = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: nameV,
          email: emailV,
        }),
      };
      
      return fetch("http://localhost:3000/users", data)
      .then(function (response) {
        return response.json();
      })
      .then(function (object) {
        document.body.append(object.id);
      })
      .catch(function (error) {
        alert("Fetch Error");
        document.body.append(error.message);
      });
}