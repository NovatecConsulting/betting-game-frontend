import { ABOUTUS, MATCHES, STANDINGS } from '../../config/routes';

export interface NavbarButtonProps {
  buttonText: string;
  buttonURL: string;
  buttonTestIdPrefix: string;
}

export const navbarButtons: NavbarButtonProps[] = [
  {
    buttonURL: MATCHES.path,
    buttonText: 'Matches',
    buttonTestIdPrefix: 'Matches',
  },
  {
    buttonURL: STANDINGS.path,
    buttonText: 'Standings',
    buttonTestIdPrefix: 'Standings',
  },
  {
    buttonURL: ABOUTUS.path,
    buttonText: 'About us',
    buttonTestIdPrefix: 'AboutUs',
  },
];
