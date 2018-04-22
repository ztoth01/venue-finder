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

}