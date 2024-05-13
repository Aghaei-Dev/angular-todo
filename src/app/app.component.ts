import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ItemComponent } from './item/item.component'
import { Item } from '../Item'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  componentTitle = 'My To Do List'

  filter: 'all' | 'active' | 'important' | 'done' = 'all'

  allItems: Item[] = [
    { description: 'eat', isDone: true, isImportant: false },
    { description: 'sleep', isDone: false, isImportant: false },
    { description: 'play', isDone: false, isImportant: false },
    { description: 'laugh', isDone: false, isImportant: false },
  ]

  addItem(description: string) {
    if (!description) return

    this.allItems.unshift({
      description,
      isDone: false,
      isImportant: false,
    })
  }
  remove(item: Item) {
    this.allItems.splice(this.allItems.indexOf(item), 1)
  }
  get items() {
    if (this.filter === 'all') {
      return this.allItems
    }
    return this.allItems.filter((item) =>
      this.filter === 'important'
        ? item.isImportant
        : this.filter === 'done'
        ? item.isDone
        : !item.isDone
    )
  }
}
