const findPhone = () => {
    const inputField = document.getElementById("input-field").value;
    const phone = inputField;
    const url = `https://openapi.programming-hero.com/api/phones?search=${phone}`;
    fetch(url)
    .then(res => res.json())
    .then(data => showPhones(data.data))

}

const showPhones = phones => {
    // console.log(phones);
    const detailsContainer = document.getElementById("display-section");
    phones.slice(0,20).forEach(phone => {
    console.log(phone);
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
    <img src="${phone.image}" class="card-img-top w-50 mx-auto" alt="...">
  <div class="card-body">
    <h5 class="card-title">${phone.phone_name}</h5>
    <p class="card-text">Brand: ${phone.brand}</p>
    <button onClick="showDetails('${phone.slug}')" class="btn btn-success">Details</button>
    `
    detailsContainer.appendChild(div)
    })
}

const showDetails = id => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data.data))

}

const showSpec = phones => {
    
}

