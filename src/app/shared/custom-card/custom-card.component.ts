import { Component, Input, OnInit } from '@angular/core';
import { ActionService } from 'src/app/services/action-service/action.service';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.css'],
})
export class CustomCardComponent implements OnInit {
  @Input() data: any;

  constructor(private actionService: ActionService) {}

  ngOnInit(): void {}

  executeAction() {
    this.actionService.triggerAction();
  }
}
