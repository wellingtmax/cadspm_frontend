import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { AuthService } from './services/auth.service';
import { ApiService } from './services/api.service';
import { UsersService } from './services/users.service';
import { JobsService } from './services/jobs.service';
import { ForumService } from './services/forum.service';
import { GalleryService } from './services/gallery.service';
import { ChatService } from './services/chat.service';
import { LogsService } from './services/logs.service';

@NgModule({
	imports: [HttpClientModule],
	providers: [
		AuthService,
		ApiService,
		UsersService,
		JobsService,
		ForumService,
		GalleryService,
		ChatService,
		LogsService,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthInterceptor,
			multi: true
		}
	]
})
export class CoreModule {
	constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
		if (parentModule) {
			throw new Error('CoreModule já foi importado. Importe apenas no AppModule.');
		}
	}
}
