import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover: string = 'https://artefinalhq.com.br/wp/wp-content/uploads/2022/01/Homem-De-Ferro-Robert-Downey2.jpeg'
  contentTitle: string = 'NOTICIA EXEMPLO'
  contentDescription: string = 'bla blabl  abla'

  constructor() { }

  ngOnInit(): void {
  }

}
