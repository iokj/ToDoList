import { Component,Input} from '@angular/core';

@Component({
selector: 'app-todo', //tag
  templateUrl: './todolist.component.html', //template path
  styleUrls: ['./todolist.component.css']
})
  
export class TodoComponent {
  newCourse : string = '';
  allCourses  = [];
  
  // Function to add course
  addCourse(){
      this.allCourses.push(this.newCourse);
      //Reset input
    this.newCourse = '';
    console.log(this.allCourses)
  }
  delCourse(value) {
    const index: number = this.allCourses.indexOf(value);

    this.allCourses.splice(index, 1);
   
}
 
  constructor() { }

}