import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { IdleTimeoutService } from '../../services/timeout/idle-timeout.service';

@Injectable({
  providedIn: 'root'
})
export class ScreensaverService {
  private interval_id;
  private THREE_MINUTES = 3 * 60;
  private FIVE_MINUTES = 5 * 60;
  private TEN_MINUTES = 10 * 60;
  private TWENTY_MINUTES = 20 * 60;
  private three_on = false;
  private five_on = false;
  private ten_on = false;
  private twenty_on = false;
  private _idleThree: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private _idleFive: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private _idleTen: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private _idleTwenty: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public readonly idleThree: Observable<boolean> = this._idleThree.asObservable();
  public readonly idleFive: Observable<boolean> = this._idleFive.asObservable();
  public readonly idleTen: Observable<boolean> = this._idleTen.asObservable();
  public readonly idleTwenty: Observable<boolean> = this._idleTwenty.asObservable();

  constructor(private idleTimeout: IdleTimeoutService) {
    let t = this;
    this.interval_id = setInterval(function() { t.checkIdleTimer(); }, 1000);
  }

  updateIdleThree(){
    this._idleThree.next(this.three_on);
  }
  updateIdleFive(){
    this._idleFive.next(this.five_on);
  }

  updateIdleTen(){
    this._idleTen.next(this.ten_on);
  }

  updateIdleTwenty(){
    this._idleTwenty.next(this.twenty_on);
  }

  // need to figure out these timings
  // when 5 timer is on, it stays on after the screensaver is off
  checkIdleTimer() {
    let timer_value = this.idleTimeout.getIdleTimer();
    if(this.three_on == true){
      if(timer_value < this.THREE_MINUTES){
        this.three_on = false;
        this.updateIdleThree();
      }
    } else if(timer_value > this.THREE_MINUTES) {
      this.three_on = true;
      this.updateIdleThree();
    }

    if(this.five_on == true){
      if(timer_value < this.FIVE_MINUTES){
        this.five_on = false;
        this.updateIdleFive();
      }
    } else if(timer_value > this.FIVE_MINUTES) {
      this.five_on = true;
      this.updateIdleFive();
    }

    if(this.ten_on == true){
      if(timer_value < this.TEN_MINUTES){
        this.ten_on = false;
        this.updateIdleTen();
      }
    } else if(timer_value > this.TEN_MINUTES) {
      this.ten_on = true;
      this.updateIdleTen();
    }

    if(this.twenty_on == true){
      if(timer_value < this.TWENTY_MINUTES){
        this.twenty_on = false;
        this.updateIdleTwenty();
      }
    } else if(timer_value > this.TWENTY_MINUTES) {
      this.twenty_on = true;
      this.updateIdleTwenty();
    }
  }
}
