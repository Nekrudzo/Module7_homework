function Device (name, power){
    this.name = name;
    this.power = power;
    this.isPlugged = false;
  }
  
  Device.prototype.plugIn = function (){
    console.log(this.name + 'is Pluged!'); 
    this.isPlugged = true;
  }
  
  Device.prototype.getPowerUsed = function (){
    return this.isPlugged ? this.power : 0;
  }
  
  const lamp = new Device('lamp', 50);
  const tv = new Device('tv', 450);
  const pc = new Device('pc', 760)
  
  console.log(lamp.getPowerUsed() + tv.getPowerUsed() + pc.getPowerUsed());
  
  lamp.plugIn();
  console.log(lamp.getPowerUsed() + tv.getPowerUsed() + pc.getPowerUsed())
  
  tv.plugIn();
  console.log(lamp.getPowerUsed() + tv.getPowerUsed() + pc.getPowerUsed())
  
  pc.plugIn();
  console.log(lamp.getPowerUsed() + tv.getPowerUsed() + pc.getPowerUsed())