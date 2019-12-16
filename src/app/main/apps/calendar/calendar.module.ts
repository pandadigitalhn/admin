import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatStepperModule, MatAutocompleteModule } from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';
import { CalendarComponent } from './calendar.component';

const routes: Routes = [
    {
        path: '**',
        component: CalendarComponent
    }
];

@NgModule({
    declarations: [
        CalendarComponent
    ],
    imports: [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatStepperModule,
        FuseSharedModule,
        MatAutocompleteModule
    ],
    providers: [
    ],
    entryComponents: [
    ]
})
export class CalendarModule {
}
