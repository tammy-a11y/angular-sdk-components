import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentMapperComponent } from '../../../_bridge/component-mapper/component-mapper.component';

@Component({
  selector: 'app-field-group-list',
  templateUrl: './field-group-list.component.html',
  styleUrls: ['./field-group-list.component.scss'],
  standalone: true,
  imports: [CommonModule, forwardRef(() => ComponentMapperComponent)]
})
export class FieldGroupListComponent implements OnInit {
  @Input() item;
  @Input() heading;
  @Input() formGroup$;

  fields: any = [];

  ngOnInit(): void {}

  ngOnChanges() {}
}
