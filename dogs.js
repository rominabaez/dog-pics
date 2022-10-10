const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const dogs = document.getElementById("dog-target");

function addNewDog() {
    const promise = fetch(DOG_URL);
    promise
    .then(function (response) {
        const processingPromise = response.text();
        return processingPromise;
    }) 
    .then(function (processedResponse) {
        const dogObject = JSON.parse(processedResponse);
        const img = document.createElement("img");
        img.src = dogObject.message;
        img.alt = "Cute dog";
        dogs.appendChild(img);
    }).catch(function(error) {
        alert('something went wrong')
    });
}

document.getElementById("dog-btn").addEventListener("click", addNewDog);