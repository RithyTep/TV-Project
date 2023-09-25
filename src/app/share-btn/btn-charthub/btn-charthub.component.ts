import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-charthub',
  templateUrl: './btn-charthub.component.html',
  styleUrls: ['./btn-charthub.component.scss']
})
export class BtnCharthubComponent {
  @Input() items!: any;
  @Input() activeLocalChannel!: number;
  // Other logic for the button component
}