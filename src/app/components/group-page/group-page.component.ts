import { Component } from '@angular/core';
import { Group } from './group';
import { GROUPS } from './mock-groups';

@Component({
  selector: 'app-group-page',
  templateUrl: './group-page.component.html',
  styleUrls: ['./group-page.component.scss']
})

export class GroupPageComponent {

  Groups = GROUPS;
  selectedGroup?: Group;

  onSelect(group: Group): void {
    this.selectedGroup = group;
  }
}