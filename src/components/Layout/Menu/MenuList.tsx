import { Dashboard, PeopleAlt } from '@material-ui/icons';
import { ROUTESNAME } from '../../../routing';
export const sidebarList = [
  { id: 1, title: 'Dashboard', icon: <Dashboard />, link: `${ROUTESNAME.home}` },
  { id: 2, title: 'Products', icon: <PeopleAlt />, link: `${ROUTESNAME.product}` },
];
