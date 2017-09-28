import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./app.component.css']
})

export class CourseComponent
{
    myCourses : string[];
    constructor(courseService : CourseService)
    {
    this.myCourses = courseService.getCourseService();
    console.log("myCourses " + this.myCourses);
    }
}