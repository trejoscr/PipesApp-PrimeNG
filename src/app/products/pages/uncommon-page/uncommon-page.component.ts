import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = 'Andres';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',

  }

  changeClient():void {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  // i18n Plural
  public clients: string[] = ['Maria', 'Pedro', 'Fernando', 'Eduardo', 'Hernando', 'Melissa', 'Natalia'];
  public clientsMaps = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 personas esperando.',
    'other': 'tenemos # clientes esperando.',
  }

  delelteClient(): void {
    this.clients.shift();
  }

  // KeyValue
  public person = {
    'name': 'Andres',
    'age': 31,
    'address': 'guanacaste, cr'
  }

  // Async
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap( value => console.log( 'tab:', value ) )
  );

  public promiseValue: Promise<string> = new  Promise( ( resolve, reject ) => {
    setTimeout( () => {
      resolve( 'Tenemos data en la promesa' );
      console.log( 'Tenemos data en la promesa' );
      this.person.name = 'Otro nombre';
    }, 3500 );
  } );

}
