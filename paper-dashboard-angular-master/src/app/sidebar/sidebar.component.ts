import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/ambientes',     title: 'Ambientes',         icon:'nc-book-bookmark',       class: '' },
    { path: '/users',         title: 'Usuarios',             icon:'nc-badge',    class: '' },
    { path: '/equipamentos',          title: 'Equipamentos',              icon:'nc-laptop',      class: '' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
