

class LandingPage {

    get allMenu() {return $$(`//ul/li/a[@class=" waves-effect"]`)}
    get languageMenu() {return $(`[id="languages"]`)}
    get languageList() {return $$(`//ul[@aria-labelledby="languages"] /li/a[@class="dropdown-item waves-effect"]`)}

    get currencyMenu() {return $(`id="currency"`)}
    get currencyList () {return $$(`//ul[@aria-labelledby="currency"] /li/a[@class="dropdown-item waves-effect"]`)}

    get supplier() {return $(`id="supplier"`)}
    get supplierList() {return $$(`//ul[@aria-labelledby="supplier"] /li/a[@class="dropdown-item waves-effect"]`)}

    get agents() {return $(`id="agents"`)}
    get agentsList() {return $$(`//ul[@aria-labelledby="agents"] /li/a[@class="dropdown-item waves-effect"]`)}

    get signUpButton() {return $(`//a[@href="https://www.phptravels.net/signup"]`)}
    get loginButton() {return $(`href="https://www.phptravels.net/login"`)}


//--------- Hotels Tab options

    get search () {return $(`[role="searchbox"]`)}
    get checkin() {return $(`id="checkin"`)}
    //[class=" table-condensed"] tr td[class="day  active"]

    get () {return $(`//span[@class='guest_hotels']`)}
    get () {return $$(`[class="la la-plus"]`)}
    get () {return $$(`[class="la la-minus"]`)}
    get () {return $(`[id="ages1"]`)}
    get () {return $$(`[id="submit"]`)}
    get () {return $(``)}
    get () {return $(``)}
    get () {return $(``)}
    get () {return $(``)}


    async clickMenu(index){
        await this.allMenu[index].click()
    }

    async clickLanguageMenu(){
        await this.languageMenu.click()
    }

    async clickLanguageList(index){
        await this.languageList[index].click()
    }
        
    async clickCurrencyMenu(){
        await this.currencyMenu.click()
    }
    async clickCurrencyList(index){
        await this.currencyList[index].click()
    }

    async clickSupplierMenu(){
        await this.supplier.click()
    }

    async clickSupplierList(index){
        await this.supplierList[index].click()
    }

    async clickAgents(){
        await this.agents.click()
    }

    async clickAgentsList(index){
        await this.agentsList[index].click()
    }


    

    async click(index){
        await this.click()
    }

    

    async click(){
        await this.click()
    }
}

export default new LandingPage()