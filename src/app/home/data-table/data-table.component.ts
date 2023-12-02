import { Component } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent {
  data: any[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
    { id: 3, name: 'Bob Smith', email: 'bob@example.com' },
  ];

  newId: number = this.data.length + 1;
  newName: string = '';
  newEmail: string = '';

  addNewItem() {
    const newItem = {
      id: this.newId++,
      name: this.newName,
      email: this.newEmail,
    };

    console.log(this.newName,this.newEmail)

    this.data.push(newItem);
    this.clearForm();
  }

  removeItem(index: number) {
    this.data.splice(index, 1);
  }

  private clearForm() {
    this.newName = '';
    this.newEmail = '';
  }

}
