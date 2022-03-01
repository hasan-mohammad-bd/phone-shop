const findPhone = () => {
  const inputField = document.getElementById("input-field").value;
  const phone = inputField;
  const url = `https://openapi.programming-hero.com/api/phones?search=${phone}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showPhones(data.data));
};

const showPhones = (phones) => {
  // console.log(phones);
  const detailsContainer = document.getElementById("display-section");
  phones.slice(0, 20).forEach((phone) => {
    console.log(phone);
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
    <img src="${phone.image}" class="card-img-top w-50 mx-auto" alt="...">
  <div class="card-body">
    <h5 class="card-title">${phone.phone_name}</h5>
    <p class="card-text">Brand: ${phone.brand}</p>
    <button onClick="showDetails('${phone.slug}')" class="btn btn-success">Details</button>
    `;
    detailsContainer.appendChild(div);
  });
};

const showDetails = (id) => {
  const url = `https://openapi.programming-hero.com/api/phone/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showSpec(data.data));
};

const showSpec = (phone) => {
    console.log(phone);
  const detailsAreaContainer = document.getElementById(
    "details-area-container"
  );
  const div = document.createElement("div");
  div.classList.add("row");

  div.innerHTML = `
    <div class="col text-center">
    <img src="${phone.image}" alt="">
    <h4 class="py-3">${phone.name}</h4>
    <p class="py-2">${phone.releaseDate ? phone.releaseDate :"Release date is not available"}</p>
    
  </div>
  <div class="col card">
    <h5 class="fw-bolder">Main Features</h5>
    <p><span class="fw-bold">Chip Set:</span> ${phone.mainFeatures.chipSet}</p>
    <p><span class="fw-bold">Display Size:</span> ${phone.mainFeatures.displaySize}</p>
    <p><span class="fw-bold">Memory:</span> ${phone.mainFeatures.memory}</p>
    <h5 class="fw-bolder">Others</h5>
    <p><span class="fw-bold py-1">Bluetooth:</span> ${phone.others.Bluetooth}</p>
    <p><span class="fw-bold py-1">GPS:</span> ${phone.others.GPS}</p>
    <p><span class="fw-bold py-1">NFC:</span> ${phone.others.NFC}</p>
    <p><span class="fw-bold py-1">Radio:</span> ${phone.others.Radio}</p>
    <p><span class="fw-bold py-1">USB:</span> ${phone.others.USB}</p>
  </div>
  <div class="col">
  <h5 class="fw-bolder">Sensors</h5>

  </div>
    `;

    detailsAreaContainer.appendChild(div);
};
