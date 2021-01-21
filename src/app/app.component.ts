import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'post-spammer';
  articles = new Array<string>();

  addSpam(testo : HTMLInputElement , numero : HTMLInputElement) : boolean
  {
    let t : string = testo.value; //qui prendo il testo della casella di testo 1
    let n : number = Number(numero.value); //qui prendo il numero nella casella di testo 2
    
    for (let index = 0; index < n; index++) {
         this.articles.push(t);  //this serve a ottenere l'oggetto che sta eseguendo il codice corrente 
         //push aggiunge un elemento al vettore  
    }

    //console.log(this.articles);
    return false;   //ritornare false evita di far ricaricare la pagina al browser
  }

}
