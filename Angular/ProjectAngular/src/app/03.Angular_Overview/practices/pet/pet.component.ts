import { Component, OnInit } from '@angular/core';
export interface IPet {
  petName: string;
  petImage: string;
}
@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss']
})
export class PetComponent implements OnInit {
  pet: IPet = {
    petName: 'Nguyen Bao Phuc',
    petImage: 'http://yourdost-blog-images.s3-ap-southeast-1.amazonaws.com/wp-content/uploads/2016/01/03165939/Dogs.jpg'
  }
  constructor() { }

  ngOnInit(): void {
  }

  updateName(value: any) {
    this.pet.petName = value;
  }

  updateImage(value: any) {
    this.pet.petImage = value;
  }
}
