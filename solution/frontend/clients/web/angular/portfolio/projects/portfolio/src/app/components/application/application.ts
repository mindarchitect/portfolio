import {Component, signal, WritableSignal} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {NgClass, NgTemplateOutlet} from '@angular/common';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {NavigationMenuItemModel} from '../../core/components/application/navigation-menu-item-model';

@Component({
    selector: 'app-root',
    imports: [
        RouterOutlet,
        NgTemplateOutlet,
        TranslatePipe,
        RouterLink,
        NgClass
    ],
    templateUrl: './application.html',
    styleUrl: './application.scss'
})
export class Application {
    protected readonly title = signal('portfolio');
    private readonly currentYear: WritableSignal<number> = signal(new Date().getFullYear());

    private readonly navigationMenuItems: NavigationMenuItemModel[] = [
        { id: 1, value: 'home', displayValue: 'app.components.application.menu-items.home-menu-item' },
        { id: 2, value: 'projects', displayValue: 'app.components.application.menu-items.projects-menu-item' }
    ];

    private selectedNavigationMenuItem: NavigationMenuItemModel = this.navigationMenuItems[0];
    private selectedLanguage: WritableSignal<string> = signal("en");

    constructor(private router: Router,
                private translateService: TranslateService) {
        this.translateService.addLangs(['en', 'de']);
        this.translateService.setFallbackLang('en');
        this.translateService.use('en');
    }

    protected get CurrentYear(): WritableSignal<number> {
        return this.currentYear;
    }

    protected get NavigationMenuItems(): NavigationMenuItemModel[] {
        return this.navigationMenuItems;
    }

    protected get SelectedNavigationMenuItem(): NavigationMenuItemModel {
        return this.selectedNavigationMenuItem;
    }

    protected get SelectedLanguage(): WritableSignal<string> {
        return this.selectedLanguage;
    }

    protected onClickNavigationMenuItem(index: number): void {
        const navigationMenuItemModel: NavigationMenuItemModel = this.navigationMenuItems[index];

        this.selectedNavigationMenuItem = navigationMenuItemModel;
        this.router.navigate([navigationMenuItemModel.value]);
    }
}
