import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Dashboard } from '@app/Dashboard/Dashboard';
import { Support } from '@app/Support/Support';
import { Sources } from '@app/Sources/Sources';
import { Long } from '@app/Trip/Long';
import { Short } from '@app/Trip/Short';
import { Ridership } from '@app/Ridership/Ridership';
import { Fares } from '@app/Fares/Fares';
import { Revenues } from '@app/Revenues/Revenues';
import { NotFound } from '@app/NotFound/NotFound';

const BASE_PATH = process.env.BASE_PATH || '/';

export interface IAppRoute {
  label?: string; // Excluding the label will exclude the route from the nav sidebar in AppLayout
  /* eslint-disable @typescript-eslint/no-explicit-any */
  element: React.ReactElement;
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
    element: <Dashboard />,
    exact: true,
    label: 'Overall',
    path: BASE_PATH,
    title: 'Brightline Ridership | Overall',
  },
  {
    label: 'Trip Length',
    routes: [
      {
        element: <Short />,
        exact: true,
        label: 'Short Distance',
        path: BASE_PATH + 'trip/short',
        title: 'Brightline Ridership | Short Distance Trips'
      },
      {
        element: <Long />,
        exact: true,
        label: 'Long Distance',
        path: BASE_PATH + 'trip/long',
        title: 'Brightline Ridership | Long Distance Trips'
      }
    ]
  },
  {
    element: <Ridership />,
    exact: true,
    label: 'Ridership',
    path: BASE_PATH + 'ridership',
    title: 'Brightline Ridership | Ridership'
  },
  {
    element: <Fares />,
    exact: true,
    label: 'Average Fare per Passenger',
    path: BASE_PATH + 'fares',
    title: 'Brightline Ridership | Average Fare per Passenger'
  },
  {
    element: <Revenues />,
    exact: true,
    label: 'Revenues',
    path: BASE_PATH + 'revenues',
    title: 'Brightline Ridership | Revenues'
  },
  {
    element: <Sources />,
    exact: true,
    label: 'Sources',
    path: BASE_PATH + 'sources',
    title: 'Brightline Ridership | Sources',
  },
  {
    element: <Support />,
    exact: true,
    label: 'Support',
    path: BASE_PATH + 'support',
    title: 'Brightline Ridership | Support',
  },
];

const flattenedRoutes: IAppRoute[] = routes.reduce(
  (flattened, route) => [...flattened, ...(route.routes ? route.routes : [route])],
  [] as IAppRoute[]
);

const AppRoutes = (): React.ReactElement => (
  <Routes>
    {flattenedRoutes.map(({ path, element }, idx) => (
      <Route path={path} element={element} key={idx} />
    ))}
    <Route element={<NotFound />} />
  </Routes>
);

export { AppRoutes, routes };
