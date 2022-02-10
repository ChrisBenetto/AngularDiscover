import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{

  @Input() faceSnap!:FaceSnap;
  buttonMessage!:string;

  ngOnInit(){
      this.buttonMessage = "Cliquez pour liker !"
  }

  onAddLike(){
    if(this.faceSnap.snapped == false){
    this.faceSnap.snaps++;
    this.faceSnap.snapped = true;
    this.buttonMessage = "Déjà cliqué"
  } else {
    this.buttonMessage = "Cliquez pour liker !"
    this.faceSnap.snapped = false;
    this.faceSnap.snaps--;
  }
  }
}
