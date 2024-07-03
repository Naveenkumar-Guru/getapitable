let option = {
  method: "GET",
};

const tbody = document.getElementById("tbody");

function serverdata(jsondata) {
  for (let i of jsondata.data) {
    const trElement = document.createElement("tr");

    const td1 = document.createElement("td");
    td1.textContent = i.name;

    const td2 = document.createElement("td");
    td2.textContent = i.email;

    const td3 = document.createElement("td");
    td3.textContent = i.gender;

    trElement.appendChild(td1);
    trElement.appendChild(td2);
    trElement.appendChild(td3);

    tbody.appendChild(trElement);
  }
}

fetch("https://gorest.co.in/public-api/users", option)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsondata) {
    return serverdata(jsondata);
  });
