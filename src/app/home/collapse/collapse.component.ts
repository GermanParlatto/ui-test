import { animate, AnimationEvent, state, style, transition, trigger} from '@angular/animations';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type CollapseState = 'visible' | 'hidden';

@Component({
  selector: 'collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss'],
  animations: [
    trigger('state', [
      state(
        'visible',
        style({
          opacity: '1',
          //height: '80px'
        })
      ),
      state(
        'hidden',
        style({
          opacity: '0',
          //height: '0px'
        })
      ),
      transition('* => visible', [animate('250ms')]),
      transition('visible => hidden', [animate('200ms')])
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CollapseComponent  {

  state: CollapseState;
  private _show: boolean;
  get show() {
    return this._show;
  }
  @Input()
  set show(value: boolean) {
    if (value) {
      this._show = value;
      this.state = 'visible';
    } else {
      this.state = 'hidden';
    }
  }

  animationDone(event: AnimationEvent) {
    if (event.fromState === 'visible' && event.toState === 'hidden') {
      this._show = false;
    }
  }
}
