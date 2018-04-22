export default class ApiHandler{
    
    constructor() {
        this.id = 'IL3AJEL031WZEPKFYMGHT3PRZVGAQUJMFZSUKY5LWFHAGGFJ';
        this.api_key = 'JYMOK3SHG1I02PH03RYFG0LG3MNFRSQEYMC4CJC4VC3HH32K';
        this.today = this.getToday()
    }

    // Get current day
    getToday() {
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1;
        let yyyy = today.getFullYear();
        if (dd < 10) { dd = '0' + dd }
        if (mm < 10) { mm = '0' + mm };
        today = `${yyyy}${mm}${dd}`;
        return today;
    }

}