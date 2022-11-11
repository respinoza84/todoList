import { Component } from '@angular/core';
import {JSOPlacerholderService} from './services/jsoplacerholder.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoList';
  count : any;
  data:Array<any>
  constructor(private JSOPlacerholder:JSOPlacerholderService){
    this.data = new Array<any>()
  }
  ngOnInit() {
    this.JSOPlacerholder.getData().subscribe((data) => {
      console.log(data);
      this.data = data;
      this.count = this.data.filter((item: any) => item).length;
      console.log('showing ' + this.count + ' items')
    })
  }
  getDataFromApi = () => {
    console.log('click');
    
  }
}
