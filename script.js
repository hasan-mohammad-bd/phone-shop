const findPhone = () => {
    const inputField = document.getElementById("input-field").value;
    const phone = inputField;
    const url = `https://openapi.programming-hero.com/api/phones?search=${phone}`;
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data.data.slice(0,20)))

}

const showPhones = phones => {
    console.log(phones);
    phones.forEach(phone => {
    
    })
}