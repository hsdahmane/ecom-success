import {NgModule} from '@angular/core';
import {TranslateLoader, TranslateModule, TranslatePipe, TranslateService} from "@ngx-translate/core";
import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from "@ngx-translate/http-loader";


export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    imports: [
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            }
        })
    ],

    providers: [
        TranslateService,
        TranslatePipe
    ],

    exports: [
        TranslateModule
    ]
})
export class EcomTranslateModule {

}
