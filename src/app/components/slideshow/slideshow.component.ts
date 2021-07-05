import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartelera-response';
import { Swiper } from 'swiper';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, AfterViewInit{
  @Input()   movies: Movie[] = [];

  public mySwiper!: Swiper;
  
  constructor() { }
  
  ngAfterViewInit(): void {

  this.mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
    loop: true,
});
    // moviemiento del slide
  }

  ngOnInit(): void {

    console.log(this.movies);
  }

  onSlideNext(){ // adelante
this.mySwiper.slideNext();
  }

  onSlidePrev(){ // atrás 
   this.mySwiper.slidePrev();
  }
}
 