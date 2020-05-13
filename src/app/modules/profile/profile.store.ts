import { Injectable } from '@angular/core';
import { StoreService } from 'src/app/core/store.service';
import { ProfileState } from './profile.state';

@Injectable({ providedIn: 'root' })
export class LiveStore extends StoreService<ProfileState> {
    constructor() {
        super(new ProfileState());
    }
}
