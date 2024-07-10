import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { Tema } from 'src/app/interfaces/tema.interface';
import { Usuario } from 'src/app/interfaces/usuairo.interface';
import { AuthService } from '../../../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit{

  lastTemas?: Tema[];
  //usuario: Usuario;

  constructor(
    private homeService: HomeService,
    private authService:AuthService,
    private router:Router
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
      alert('Necesitas estar registrado para crear un tema');
      this.router.navigate(['/auth/login']);
    }
  }


}
