import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn:'root'
})
export class FaceSnapService {
    faceSnaps:FaceSnap[] = [
        {
      title: "TestPhoto",
      description: "Une photo géniale",
      createdDate: new Date(),
      imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      snaps: 200,
      snapped: false,
      location:"Paris"
      },
      {
        title: "Seconde photo",
        description: "Une photo exceptionnelle",
        createdDate: new Date(),
        imageUrl: 'https://cdn.pixabay.com/photo/2013/10/15/09/12/flower-195893_960_720.jpg',
        snaps: 50,
        snapped:false
      }
    ];

}