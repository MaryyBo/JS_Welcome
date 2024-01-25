/* 
У нас є 2 окремих класи: 

Клас авто
Клас паливо

Задача: порахувати загальну вагу автомобіля ( вага авто + вагапалива)
Щоб порахувати вагу палива потрібно об'єм * щільність
*/

class Fuel {
    constructor (volume, density) {
        this.volume = volume;
        this.density = density;
    }

    getWeight () {
        return this.volume * this.density;
    }
}

const benzin = new Fuel (50, 0.9);

class Auto {
    constructor (name, ownWeight, fuel) {
        this.name = name;
        this.ownWeight = ownWeight;
        this.fuel = fuel;
    }

    // мето , який обчислює повну вагу авто: його власна вага + вага палива (вага палива в класі Fuel)
 getFullWeght () {
    return this.ownWeight + this.fuel.getWeight(); // ЗАПИСАТИ сюди метод розрахунку з попереднього класу
 }


}

const bmw = new Auto ('BMW', 4000, benzin); 