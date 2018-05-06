interface State{
  recruitApplication: RecruitApplication;
  cancelApp();
  verifyPayment();
  shipApplication();
}

class RecruitApplication{
  public cancellAppState: State;
  public paymentPendingState: State;
  public appShippedState: State;
  public appInPrepearState: State;
  public currentState: State;
  constructor(){
    this.cancellAppState = new CancellAppState(this);
    this.paymentPendingState = new PaymentPendingState(this);
    this.appShippedState = new AppShippedState(this);
    this.appInPrepearState = new AppInPrepearState(this);
    this.setState(this.paymentPendingState);
  }
  public setState(state: State){
    this.currentState = state;
  }
  public getState(): State{
    return this.currentState;
  }
}

class PaymentPendingState implements State {
  public recruitApplication: RecruitApplication;
  constructor(recruitApplication: RecruitApplication){
    this.recruitApplication = recruitApplication;
  }
  cancelApp() {
    console.log('cancelling application..');
    this.recruitApplication.setState(this.recruitApplication.cancellAppState);
  }
  verifyPayment() {
    console.log('payment OK. Shiping soon..');
    this.recruitApplication.setState(this.recruitApplication.appInPrepearState);
  }
  shipApplication() {
    console.log('waiting for payment..');
  }
}
class CancellAppState implements State {
  public recruitApplication: RecruitApplication;
  constructor(recruitApplication: RecruitApplication){
    this.recruitApplication = recruitApplication;
  }
  cancelApp() {
    console.log('already cancelled');
  }
  verifyPayment() {
    console.log('cancelled app - can not verifyPayment');
  }
  shipApplication() {
    console.log('can not ship cancelled App');
  }
}
class AppInPrepearState implements State {
  public recruitApplication: RecruitApplication;
  constructor(recruitApplication: RecruitApplication){
    this.recruitApplication = recruitApplication;
  }
  cancelApp() {
    console.log('cancelling application..');
    this.recruitApplication.setState(this.recruitApplication.cancellAppState);
  }
  verifyPayment() {
    console.log('already verified');
  }
  shipApplication() {
    console.log('shipping..');
    this.recruitApplication.setState(this.recruitApplication.appShippedState);
  }
}
class AppShippedState implements State {
  public recruitApplication: RecruitApplication;
  constructor(recruitApplication: RecruitApplication){
    this.recruitApplication = recruitApplication;
  }
  cancelApp() {
    console.log('can not cancell shipped application');
  }
  verifyPayment() {
    console.log('can not verify shipped application');
  }
  shipApplication() {
    console.log('can not ship shipped application');
  }
}


let recruitApplication = new RecruitApplication();
recruitApplication.getState().verifyPayment();
recruitApplication.getState().shipApplication();
console.log(`Application state: ${(<any> recruitApplication.getState()).constructor.name}`);
