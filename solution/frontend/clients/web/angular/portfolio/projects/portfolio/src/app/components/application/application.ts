import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    templateUrl: './application.html',
    styleUrl: './application.scss'
})
export class Application {
    protected readonly title = signal('portfolio');
}
