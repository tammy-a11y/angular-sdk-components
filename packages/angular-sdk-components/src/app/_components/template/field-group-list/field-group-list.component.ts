import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-field-group-list',
  templateUrl: './field-group-list.component.html',
  styleUrls: ['./field-group-list.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class FieldGroupListComponent implements OnInit {
  @Input() item;
  @Input() heading;

  fields: any = [];

  ngOnInit(): void {}

  ngOnChanges(changes) {
    if (changes && changes.item) {
      const item = changes.item;
      if (item.currentValue !== item.previousValue) {
        this.fields = [];
        for (const label in this.item) {
          if (label !== 'classID') {
            this.fields.push({ label, value: this.item[label] || '---' });
          }
        }
      }
    }
  }
}
