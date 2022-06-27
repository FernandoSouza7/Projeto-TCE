import { Component, OnInit } from '@angular/core';
import { InterviewModule } from 'src/app/models/interview/interview.module';
import { InterviewService } from 'src/app/services/interview.service';

@Component({
  selector: 'app-interviews',
  templateUrl: './interviews.component.html',
  styleUrls: ['./interviews.component.css']
})
export class InterviewsComponent implements OnInit {

  interviews!: InterviewModule[];

  filteredname: string = "";

  selected = 'name';

  values= 'nome id projeto skills manager'.split(' ');

  constructor(private interviewService: InterviewService) { }

  ngOnInit(): void {
    this.findByManager();
  }

  onChange(newValue: string | null) {
    if (newValue != null) {
      this.selected = newValue;
    }

}

  findByManager():void{
    this.interviewService.findByManager().subscribe((response) =>{
      this.interviews = response;
    })
  }

}
