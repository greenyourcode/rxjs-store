export class ProfileState {
  name: string;
  id: string;
  settings: ProfileSettingsState;
}

export class ProfileSettingsState {
  privateProfile: string;
  themeColor: string;
}
