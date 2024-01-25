class Devices
{
  constructor(name, power)
  {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
  }
  
  plugIn()
  {
    console.log(this.name + " is plugged!");
    this.isPlugged = true;
  }
  
  getPowerUsed()
  {
    return this.isPlugged ? this.power : 0;
  }
}

const lampa = new Devices('lampa', 45);
const tv = new Devices('tv', 500);
const pc = new Devices('pc', 750);

console.log(lampa.getPowerUsed() + tv.getPowerUsed() + pc.getPowerUsed());

lampa.plugIn();
console.log(lampa.getPowerUsed() + tv.getPowerUsed() + pc.getPowerUsed());

tv.plugIn();
console.log(lampa.getPowerUsed() + tv.getPowerUsed() + pc.getPowerUsed());

pc.plugIn();
console.log(lampa.getPowerUsed() + tv.getPowerUsed() + pc.getPowerUsed());