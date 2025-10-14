import { Component, OnInit, ChangeDetectorRef} from '@angular/core';
import { HomeService } from '../../services/home.service';
import { Tema } from 'src/app/interfaces/tema.interface';
import { Usuario } from 'src/app/interfaces/usuairo.interface';
import { AuthService } from '../../../auth/services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import Swiper, { Autoplay, Navigation } from 'swiper';
Swiper.use([Autoplay, Navigation]);

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit{

  lastTemas?: Tema[];
  swiperInitialized = false;
  //usuario: Usuario;

  constructor(
    private homeService: HomeService,
    private authService:AuthService,
    private router:Router,
    private cdr: ChangeDetectorRef
  ){}

  ngOnInit(): void {
    this.homeService.getLastTemas()
    .subscribe(lastTemas => {
      this.lastTemas = lastTemas;
    });
  }


  navigateToNewTema(): void {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/tema/home/new']);
    } else {
      this.alertaSwal("error", 'Necesita estar registrado para crear un tema');
      this.router.navigate(['/auth/login']);
    }
  }

  alertaSwal = (icon: any, title: any) =>{
    Swal.fire({
      position: "center",
      icon: icon ,
      title: title,
      showConfirmButton: false,
      timer: 2500
    });
  }

ngAfterViewInit(): void {
  setTimeout(() => {
    if (this.lastTemas && this.lastTemas.length > 0 && !this.swiperInitialized) {
      const swiper = new Swiper('.mySwiper', {
        slidesPerView: 5,
        spaceBetween: 20,
        loop: true,
        grabCursor: true,
        speed: 800,
        autoplay: {
          delay: 1800,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        observer: true,
        observeParents: true,
      });
      swiper.autoplay.start(); // ✅ Reinicia si se pausa
      this.swiperInitialized = true;
      this.cdr.detectChanges();
    }
  }, 300);
}


}
