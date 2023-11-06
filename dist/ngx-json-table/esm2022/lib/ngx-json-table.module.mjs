import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxJsonTableComponent } from './ngx-json-table.component';
import { SanitizeHtmlPipe } from './pipes/sanitize-html.pipe';
import { NgxJsonTableTbodyComponent } from './components/tbody/tbody.component';
import { NgxJsonTableTrowComponent } from './components/tbody/trow/trow.component';
import { NgxJsonTableKeyComponent } from './components/tbody/key/key.component';
import { NgxJsonTableValueComponent } from './components/tbody/value/value.component';
import { NgxJsonTableTheadComponent } from './components/thead/thead.component';
import * as i0 from "@angular/core";
const COMPONENTS = [
    NgxJsonTableTbodyComponent,
    NgxJsonTableTrowComponent,
    NgxJsonTableKeyComponent,
    NgxJsonTableValueComponent,
    NgxJsonTableTheadComponent,
    NgxJsonTableComponent,
    SanitizeHtmlPipe
];
export class NgxJsonTableModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxJsonTableModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: NgxJsonTableModule, declarations: [NgxJsonTableTbodyComponent,
            NgxJsonTableTrowComponent,
            NgxJsonTableKeyComponent,
            NgxJsonTableValueComponent,
            NgxJsonTableTheadComponent,
            NgxJsonTableComponent,
            SanitizeHtmlPipe], imports: [CommonModule,
            FormsModule,
            ReactiveFormsModule], exports: [NgxJsonTableTbodyComponent,
            NgxJsonTableTrowComponent,
            NgxJsonTableKeyComponent,
            NgxJsonTableValueComponent,
            NgxJsonTableTheadComponent,
            NgxJsonTableComponent,
            SanitizeHtmlPipe] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxJsonTableModule, imports: [CommonModule,
            FormsModule,
            ReactiveFormsModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxJsonTableModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                    ],
                    declarations: [...COMPONENTS],
                    exports: [...COMPONENTS],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWpzb24tdGFibGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWpzb24tdGFibGUvc3JjL2xpYi9uZ3gtanNvbi10YWJsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWxFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzlELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ25GLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDOztBQUVoRixNQUFNLFVBQVUsR0FBRztJQUNqQiwwQkFBMEI7SUFDMUIseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUN4QiwwQkFBMEI7SUFDMUIsMEJBQTBCO0lBQzFCLHFCQUFxQjtJQUNyQixnQkFBZ0I7Q0FDakIsQ0FBQztBQVdGLE1BQU0sT0FBTyxrQkFBa0I7K0dBQWxCLGtCQUFrQjtnSEFBbEIsa0JBQWtCLGlCQWxCN0IsMEJBQTBCO1lBQzFCLHlCQUF5QjtZQUN6Qix3QkFBd0I7WUFDeEIsMEJBQTBCO1lBQzFCLDBCQUEwQjtZQUMxQixxQkFBcUI7WUFDckIsZ0JBQWdCLGFBS2QsWUFBWTtZQUNaLFdBQVc7WUFDWCxtQkFBbUIsYUFickIsMEJBQTBCO1lBQzFCLHlCQUF5QjtZQUN6Qix3QkFBd0I7WUFDeEIsMEJBQTBCO1lBQzFCLDBCQUEwQjtZQUMxQixxQkFBcUI7WUFDckIsZ0JBQWdCO2dIQVlMLGtCQUFrQixZQVAzQixZQUFZO1lBQ1osV0FBVztZQUNYLG1CQUFtQjs7NEZBS1Ysa0JBQWtCO2tCQVQ5QixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLFdBQVc7d0JBQ1gsbUJBQW1CO3FCQUNwQjtvQkFDRCxZQUFZLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQztvQkFDN0IsT0FBTyxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUM7aUJBQ3pCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgTmd4SnNvblRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9uZ3gtanNvbi10YWJsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2FuaXRpemVIdG1sUGlwZSB9IGZyb20gJy4vcGlwZXMvc2FuaXRpemUtaHRtbC5waXBlJztcbmltcG9ydCB7IE5neEpzb25UYWJsZVRib2R5Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3Rib2R5L3Rib2R5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hKc29uVGFibGVUcm93Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3Rib2R5L3Ryb3cvdHJvdy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4SnNvblRhYmxlS2V5Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3Rib2R5L2tleS9rZXkuY29tcG9uZW50JztcbmltcG9ydCB7IE5neEpzb25UYWJsZVZhbHVlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3Rib2R5L3ZhbHVlL3ZhbHVlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hKc29uVGFibGVUaGVhZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90aGVhZC90aGVhZC5jb21wb25lbnQnO1xuXG5jb25zdCBDT01QT05FTlRTID0gW1xuICBOZ3hKc29uVGFibGVUYm9keUNvbXBvbmVudCxcbiAgTmd4SnNvblRhYmxlVHJvd0NvbXBvbmVudCxcbiAgTmd4SnNvblRhYmxlS2V5Q29tcG9uZW50LFxuICBOZ3hKc29uVGFibGVWYWx1ZUNvbXBvbmVudCxcbiAgTmd4SnNvblRhYmxlVGhlYWRDb21wb25lbnQsXG4gIE5neEpzb25UYWJsZUNvbXBvbmVudCxcbiAgU2FuaXRpemVIdG1sUGlwZVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QT05FTlRTXSxcbiAgZXhwb3J0czogWy4uLkNPTVBPTkVOVFNdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hKc29uVGFibGVNb2R1bGUge1xufVxuIl19