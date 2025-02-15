import lazyWithReducer from 'app/store/lazyWithReducer';
import reducer from './store';

const ProjectDashboardApp = lazyWithReducer('projectDashboardApp', () => import('./ProjectDashboardApp'), reducer);

/**
 * The ProjectDashboardApp configuration.
 */
const ProjectDashboardAppConfig = {
	settings: {
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
	},
	routes: [
		{
			path: 'dashboards/project',
			element: <ProjectDashboardApp />
		}
	]
};

export default ProjectDashboardAppConfig;
