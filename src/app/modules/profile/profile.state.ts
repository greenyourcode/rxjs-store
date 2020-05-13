export class ProfileSettingsState {
  privateProfile: string;
  themeColor = 'green';
}

export class ProfileState {
  name: string;
  id: string;
  settings = new ProfileSettingsState();
}
