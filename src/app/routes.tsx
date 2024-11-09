import * as React from 'react';
import { Route, RouteComponentProps, Switch, useLocation } from 'react-router-dom';
import { Dashboard } from '@app/Dashboard/Dashboard';
import { Support } from '@app/Support/Support';
import { Sources } from '@app/Sources/Sources';
import { Long } from '@app/Trip/Long';
import { Short } from '@app/Trip/Short';
import { Ridership } from '@app/Ridership/Ridership';
import { Fares } from '@app/Fares/Fares';
import { Revenues } from '@app/Revenues/Revenues';
import { NotFound } from '@app/NotFound/NotFound';
import { useDocumentTitle } from '@app/utils/useDocumentTitle';

const BASE_PATH = process.env.BASE_PATH || '/';

let routeFocusTimer: number;
export interface IAppRoute {
  label?: string; // Excluding the label will exclude the route from the nav sidebar in AppLayout
  /* eslint-disable @typescript-eslint/no-explicit-any */
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
  /* eslint-enable @typescript-eslint/no-explicit-any */
  exact?: boolean;
  path: string;
  title: string;
  routes?: undefined;
}

export interface IAppRouteGroup {
  label: string;
  routes: IAppRoute[];
}

export type AppRouteConfig = IAppRoute | IAppRouteGroup;

const routes: AppRouteConfig[] = [
  {
    component: Dashboard,
    exact: true,
    label: 'Overall',
    path: BASE_PATH,
    title: 'Brightline Ridership | Overall',
  },
  {
    label: 'Trip Length',
    routes: [
      {
        component: Short,
        exact: true,
        label: 'Short Distance',
        path: BASE_PATH + 'trip/short',
        title: 'Brightline Ridership | Short Distance Trips'
      },
      {
        component: Long,
        exact: true,
        label: 'Long Distance',
        path: BASE_PATH + 'trip/long',
        title: 'Brightline Ridership | Long Distance Trips'
      }
    ]
  },
  {
    component: Ridership,
    exact: true,
    label: 'Ridership',
    path: BASE_PATH + 'ridership',
    title: 'Brightline Ridership | Ridership'
  },
  {
    component: Fares,
    exact: true,
    label: 'Fares per Passenger',
    path: BASE_PATH + 'fares',
    title: 'Brightline Ridership | Fares per Passenger'
  },
  {
    component: Revenues,
    exact: true,
    label: 'Revenues',
    path: BASE_PATH + 'revenues',
    title: 'Brightline Ridership | Revenues'
  },
  {
    component: Sources,
    exact: true,
    label: 'Sources',
    path: BASE_PATH + 'sources',
    title: 'Brightline Ridership | Sources',
  },
  {
    component: Support,
    exact: true,
    label: 'Support',
    path: BASE_PATH + 'support',
    title: 'Brightline Ridership | Support',
  },
];

// a custom hook for sending focus to the primary content container
// after a view has loaded so that subsequent press of tab key
// sends focus directly to relevant content
// may not be necessary if https://github.com/ReactTraining/react-router/issues/5210 is resolved
const useA11yRouteChange = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    routeFocusTimer = window.setTimeout(() => {
      const mainContainer = document.getElementById('primary-app-container');
      if (mainContainer) {
        mainContainer.focus();
      }
    }, 50);
    return () => {
      window.clearTimeout(routeFocusTimer);
    };
  }, [pathname]);
};

const RouteWithTitleUpdates = ({ component: Component, title, ...rest }: IAppRoute) => {
  useA11yRouteChange();
  useDocumentTitle(title);

  function routeWithTitle(routeProps: RouteComponentProps) {
    return <Component {...rest} {...routeProps} />;
  }

  return <Route render={routeWithTitle} {...rest} />;
};

const PageNotFound = ({ title }: { title: string }) => {
  useDocumentTitle(title);
  return <Route component={NotFound} />;
};

const flattenedRoutes: IAppRoute[] = routes.reduce(
  (flattened, route) => [...flattened, ...(route.routes ? route.routes : [route])],
  [] as IAppRoute[]
);

const AppRoutes = (): React.ReactElement => (
  <Switch>
    {flattenedRoutes.map(({ path, exact, component, title }, idx) => (
      <RouteWithTitleUpdates path={path} exact={exact} component={component} key={idx} title={title} />
    ))}
    <PageNotFound title="404 Page Not Found" />
  </Switch>
);

export { AppRoutes, routes };
