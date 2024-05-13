import { Component, Input, Output, EventEmitter } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Item } from '../../Item'

@Component({
  selector: 'app-item',

  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  editable = false

  @Input() item!: Item
  @Output() remove = new EventEmitter<Item>()

  logger() {
    console.log(this.item)
  }
  saveItem(description: string) {
    if (!description) return

    this.editable = false
    this.item.description = description
  }
}
