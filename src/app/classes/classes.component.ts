import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Stream } from '../stream';
import { ClassesService } from '../classes.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-classes',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.css'
})
export class ClassesComponent {

  streamsList: Stream[] = []

  classesService: ClassesService = inject(ClassesService)

  constructor() {
    this.classesService.getAllStreams().subscribe(
      (res: any) => {
        this.streamsList = res
      });
  }
}
