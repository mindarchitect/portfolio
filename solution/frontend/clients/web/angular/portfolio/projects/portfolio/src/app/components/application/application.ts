import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NgTemplateOutlet} from '@angular/common';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, NgTemplateOutlet, TranslatePipe],
    templateUrl: './application.html',
    styleUrl: './application.scss'
})
export class Application {
    protected readonly title = signal('portfolio');
    protected readonly currentYear = signal(new Date().getFullYear());
}
