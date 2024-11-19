import { FuseRouteConfigType } from '@fuse/utils/FuseUtils';
import authRoles from '../../auth/authRoles';
import HomePage from './HomePage';

const HomeConfig: FuseRouteConfigType = {
	settings: {
		layout: {
			config: {
				navbar: {
					display: false
				},
				toolbar: {
					display: false
				},
				footer: {
					display: false
				},
				leftSidePanel: {
					display: false
				},
				rightSidePanel: {
					display: false
				}
			}
		}
	},
	routes: [
		{
			path: 'home',
			element: <HomePage />
		}
	]
};

export default HomeConfig;
