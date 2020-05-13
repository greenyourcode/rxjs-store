import { Injectable } from '@angular/core';
import { StoreService } from 'src/app/core/store.service';
import { ProfileState } from './profile.state';

@Injectable({ providedIn: 'root' })
export class ProfileStore extends StoreService<ProfileState> {
    constructor() {
        super(new ProfileState());
    }

    dispatch(params) {
        // mapping
        const { settings: { privateProfile, themeColor } } = params;
        // setState
        this.setState({
            ...this.state,
            settings: {
                ...this.state.settings,
                privateProfile,
                themeColor
            }
        });
    }
}
