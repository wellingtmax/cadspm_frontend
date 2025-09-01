import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  // Mock de usuário logado (substituir por serviço de autenticação depois)
  userName = 'Usuário';
  userAvatar = 'https://ui-avatars.com/api/?name=Usuário';
}
