

// error message function
const errorMsg1 = form =>{
  document.getElementById("error-msg1").style.display = form;
}

// spinner function
const spinner = form => {
  document.getElementById("spinner").style.display = form;
}

errorMsg1("none");
spinner("none");



const findPhone = () => {
  const inputField = document.getElementById("input-field").value.toLowerCase();
  const phone = inputField;
  
  //error handling
  if(document.getElementById("input-field").value === ""){
    errorMsg1("block");
    document.getElementById("display-section").textContent="";
    document.getElementById("details-area-container").textContent="";

  }

  else{
    // clearing input field
    document.getElementById("input-field").value = "";
    spinner("block")

    const url = `https://openapi.programming-hero.com/api/phones?search=${phone}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => showPhones(data.data));
  }

};
const showPhones = phones => {

  // clearing Text
  const detailsContainer = document.getElementById("display-section");
  detailsContainer.textContent = "";
  document.getElementById("details-area-container").textContent="";
  document.getElementById("hiding").textContent="";

  //error handling
  if(phones == false){
    errorMsg1("block");
    spinner("none");
  } 
  else{
    phones.forEach(phone => {
      const div = document.createElement("div");
      div.classList.add("card");
      div.innerHTML = `
      <img src="${phone.image}" class="card-img-top w-50 mx-auto" alt="...">
      <div class="card-body">
      <h5 class="card-title">${phone.phone_name}</h5>
      <p class="card-text">Brand: ${phone.brand}</p>
      <button onClick="showDetails('${phone.slug}')" class="btn btn-dark px-1"><a id="up-btn" class="btn btn-dark px-4" href="#details-area-container">Details</a></button>
      `;
      detailsContainer.appendChild(div);
      errorMsg1("none");
      spinner("none");

      // hiding card
      const hidingCard = document.querySelectorAll("#display-section .card:nth-child(1n + 21)")
      hidingCard.forEach(card =>{
      card.style.display = "none"
    })
     
    });

    //adding see more button
    const div2 = document.createElement("div");
    div2.classList.add("see-more");
    div2.innerHTML = `
    <button id="see-more-btn" onClick="seeMore()" class="btn mb-5 mt-4 btn-dark px-4 d-flex justify-content-center">Show More</button>
    `;
    document.getElementById("hiding").appendChild(div2);
  }


};



const showDetails = (id) => {
  const url = `https://openapi.programming-hero.com/api/phone/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showSpec(data.data));
};

const showSpec = (phone) => {
  const detailsAreaContainer = document.getElementById(
    "details-area-container"
  );
  detailsAreaContainer.textContent = "";
  const div = document.createElement("div");
  div.classList.add("row");

  div.innerHTML = `
    <div class="col text-center p-5 card">
    <img src="${phone.image}" alt="">
    <h4 class="py-3 text-success fw-bolder">${phone.name}</h4>
    <p class="py-2">${phone.releaseDate ? phone.releaseDate :"Release date is not available"}</p>
    
  </div>
  <div class="col card p-4">
    <h5 class="fw-bolder pt-4 text-success">Main Features</h5>
    <p><span class="fw-bold">Chip Set:</span> ${phone.mainFeatures.chipSet}</p>
    <p><span class="fw-bold">Display Size:</span> ${phone.mainFeatures.displaySize}</p>
    <p><span class="fw-bold">Memory:</span> ${phone.mainFeatures.memory}</p>
    <h5 class="fw-bolder pt-4 text-success">Others</h5>
    <p><span class="fw-bold py-1">Bluetooth:</span> ${phone.others?.Bluetooth ? phone.others.Bluetooth:"Data is not available"}</p>
    <p><span class="fw-bold py-1">GPS:</span> ${phone.others?.GPS ? phone.others.GPS:"Data is not available" }</p>
    <p><span class="fw-bold py-1">NFC:</span> ${phone.others?.NFC ? phone.others.NFC:"Data is not available"}</p>
    <p><span class="fw-bold py-1">Radio:</span> ${phone.others?.Radio ? phone.others.Radio:"Data is not available"}</p>
    <p><span class="fw-bold py-1">USB:</span> ${phone.others?.USB ? phone.others.USB:"Data is not available"}</p>
  </div>
  <div class="col card p-4">
  <h5 class="fw-bolder text-success pt-4">Sensors</h5>
  <ul id="sensor-list" class="p-0">

  </ul>
  <button onClick="closeBtn()" class="btn btn-dark px-3">Close This Tab</button>
  </div>

    `;
    detailsAreaContainer.appendChild(div);

  const ulList = document.getElementById("sensor-list");
  ulList.textContent =""
  phone.mainFeatures.sensors.forEach(sensor => {

      const li = document.createElement("li");
      const p = document.createElement("p");
      li.appendChild(p);
      p.innerText = sensor;

    ulList.appendChild(li)
    })
};

// close button
const closeBtn = () => {
  document.getElementById("details-area-container").textContent="";
}

//show more button
const seeMore = () =>{
  document.getElementById("hiding").textContent="";
  const hidingCard = document.querySelectorAll("#display-section .card:nth-child(1n + 21)");
  hidingCard.forEach(card =>{
  card.style.display = "block";
  
})
}

