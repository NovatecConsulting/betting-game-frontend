import AboutUs from '../components/AboutUs/AboutUs';
import Login from '../components/Login/Login';
import Matches from '../components/Matches/Matches';
import Standings from '../components/Standings/Standings';

export interface RouteProps {
  path: string;
  component: React.FC;
  isPrivate: boolean;
}

export const MATCHES: RouteProps = {
  path: '/matches',
  component: Matches,
  isPrivate: false,
};

export const STANDINGS: RouteProps = {
  path: '/standings',
  component: Standings,
  isPrivate: false,
};

export const ABOUTUS: RouteProps = {
  path: '/aboutus',
  component: AboutUs,
  isPrivate: false,
};

export const LOGIN: RouteProps = {
  path: '/login',
  component: Login,
  isPrivate: false,
};

export default [MATCHES, STANDINGS, ABOUTUS, LOGIN];
