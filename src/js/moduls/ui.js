export default class Ui{
    
    constructor() {
        this.profile = document.getElementById('api-response');
    }

    // Show Alert message
    showAlert(message, className) {
        //First clear alert to make sure there is only one alert at the time
        this.clearAlert();
        //Create an element
        const div = document.createElement('div');
        //Add class name
        div.className = className;
        //Add message
        div.appendChild(document.createTextNode(message));
        //Get parent
        const parent = document.querySelector('.searchContainer');
        //Get search box
        const search = document.querySelector('.search');
        //insert
        parent.insertBefore(div, search);

        //Add animation class
        setTimeout(() => {
            div.classList.add('fadeOutUp');
        }, 2500);
        //Remove element from the DOM
        setTimeout(() => {
            div.remove();
        }, 3000);
    }

    //Clear alert popup
    clearAlert() {
        const alert = document.querySelector('.alert') || false;
        if (alert) {
            alert.remove();
        }
    }

    //Clear input field text
    clearInputField(elem){
        elem.value = '';
    }

    //Method to display the location data in the Ui
    displayVenues(locationData, searchlocation) {
        //variable for the placeholder
        const container = document.getElementById('api-result');
        //Generating html markup using ES6 template string
        let output = `
            <div class="col-md-10 col-lg-8 mx-auto" id="result-inner">
                <div class="page-header">
                    <h2 id="tables" class="my-2 mt-md-4 mb-md-2">Results for: ${searchlocation}</h2>
                </div>
                `;
                //Using forEach to loop through api result
                locationData.forEach((location, index) => {
                    //Using the modulus operator to asign different class names to even and odd elements
                    const className = index % 2 === 0 ? 'bg-light' : 'text-white bg-secondary';
                    output += `
                        <div class="card ${className} mb-3" >
                            <div class="card-header">
                                <h3>${location.venue.name}</h3>
                            </div>
                            <div class="card-body">
                                <h4 class="card-title">Additional inforamtion</h4>
                                <p class="card-text">Additional information</p>
                            </div>
                        </div>
                    `;
                });
                output += `
            </div>
        `;
        //update placeholder html
        container.innerHTML = output;
    }

}