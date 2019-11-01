/* eslint-disable indent */
//event listener to capture the amount of pics 
let dogBreed;
function howMany() {
    $('.getDogs').submit(event => {
        event.preventDefault();
        dogBreed = document.getElementById('breed').value;
        getDogImages();
    })
}
//get statement to get the dog picture urls
function getDogImages() {

    fetch(`https://dog.ceo/api/breed/${dogBreed}/images`)
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error(response.statusText);})
    .then(responseJson => displayPics(responseJson))
    .then(responseJson => checkBreed(responseJson))
    .catch(error => {
        $('.error-message').text(`Something went wrong: ${error.message}`)
});
}

//function to populate the dog images in the page

function displayPics(responseJson) {
    let imgArr = responseJson.message;
    $('.picList').empty();
    $('.picList').append(`<img src="${imgArr[1]}" class="dogImage">`);
    $('.dogs').removeClass('hidden');

}


howMany();