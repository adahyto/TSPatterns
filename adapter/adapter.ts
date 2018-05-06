interface IPhone{
  useLightning();
}
interface Android{
  useMicroUSB();
}

class iPhone implements IPhone{
  useLightning(){
    console.log('using lightning port.')
  }
}
class Samsung implements Android{
  useMicroUSB(){
    console.log('using microUSB port.')
  }
}

class LightningToMicroUSBAdapter implements Android{
  iPhoneDevice: IPhone;
  constructor(iphone: IPhone){
    this.iPhoneDevice = iphone;
  }
  public useMicroUSB(){
    console.log('converting to lightning..');
    this.iPhoneDevice.useLightning();
  }
}

let iphone = new iPhone();
let chargeAdapter = new LightningToMicroUSBAdapter(iphone);
chargeAdapter.useMicroUSB();
