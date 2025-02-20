const Car={
    Brand: "Honda",
    Model: "Camry",
    Year: "2021",
    Owner: {
        Name: "Alex",
        Contact:{
            Phone: "112-334-4556",
            Email: "alex@gmail.com"
        }
    },
    Features: ["Air Conditioning", "Bluetooth", "Sunroof", "Backup Camera"],

    getCarDetails: function(){
    console.log (`Car Details:
    Brand: ${this.Brand}
    Model: ${this.Model}
    Year: ${this.Year}`);
},
updateOwnerContact: function(Phone, Email){
    this.Owner.Contact.Phone= Phone;
    this.Owner.Contact.Email= Email;
    console.log(`Owner contact has been updated:
    Phone: ${this.Owner.Contact.Phone}
    Email: ${this.Owner.Contact.Email}`);
},
addFeatures: function(Features){
    this.Features.push(Features);
    console.log(`New Feature Added: ${Features}`);
    console.log(`Updated Feature: ${this.Features}`);
}
};

Car.getCarDetails();
Car.updateOwnerContact("112-334-4556","alex@gmail.com");
Car.addFeatures("Sunroof");



const Smartphone={
    Brand: "Samsung",
    Model: "S24 ultra",
    Specification: {
        RAM: "12GB",
        Storage: "256G",
        Battery: "5000mAh"
    },
    Price: "1400",
    availableColors: ["Blue", "Black", "Grey"],
    
    getSpecs: function(){
        console.log(`Specification:
        RAM: ${this.Specification.RAM}
        Storage: ${this.Specification.Storage}
        Battery: ${this.Specification.Battery}`);
    },
    updatedPrice: function(newprice){
        this.Price= newprice;
        console.log(`The price is updated to: ${this.Price}`);
    },
    addColor: function(color){
        this.availableColors.push(color);
        console.log(`New colors are added: ${color}`);
        console.log(`These are the updated color: ${this.availableColors}`);
    }
};

Smartphone.getSpecs();
Smartphone.updatedPrice(1350);
Smartphone.addColor("Yellow")