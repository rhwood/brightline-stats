import * as React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Brand } from '@patternfly/react-core/dist/dynamic/components/Brand'
import { Button } from '@patternfly/react-core/dist/dynamic/components/Button'
import {
  Masthead,
  MastheadBrand,
  MastheadLogo,
  MastheadMain,
  MastheadToggle
} from '@patternfly/react-core/dist/dynamic/components/Masthead'
import { Nav, NavExpandable, NavItem, NavList } from '@patternfly/react-core/dist/dynamic/components/Nav'
import { Page, PageSidebar, PageSidebarBody } from '@patternfly/react-core/dist/dynamic/components/Page'
import { SkipToContent } from '@patternfly/react-core/dist/dynamic/components/SkipToContent'
import { IAppRoute, IAppRouteGroup, routes } from '@app/routes';
import logo from '@app/bgimages/brightline-stats.svg';
import { BarsIcon } from '@patternfly/react-icons/dist/dynamic/icons/bars-icon'

interface IAppLayout {
  children: React.ReactNode;
}

const AppLayout: React.FunctionComponent<IAppLayout> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(true);
  const Header = (
    <Masthead>
      
      <MastheadMain><MastheadToggle>
        <Button icon={<BarsIcon />} variant="plain" onClick={() => setSidebarOpen(!sidebarOpen)} aria-label="Global navigation" />
      </MastheadToggle>
        <MastheadBrand data-codemods><MastheadLogo data-codemods>
          <Brand src={logo} alt="Brightline Statistics" heights={{ default: '36px' }} />
        </MastheadLogo></MastheadBrand>
      </MastheadMain>
    </Masthead>
  );

  const location = useLocation();

  const renderNavItem = (route: IAppRoute, index: number) => (
    <NavItem key={`${route.label}-${index}`} id={`${route.label}-${index}`} isActive={route.path === location.pathname}>
      <NavLink exact={route.exact} to={route.path}>
        {route.label}
      </NavLink>
    </NavItem>
  );

  const renderNavGroup = (group: IAppRouteGroup, groupIndex: number) => (
    <NavExpandable
      key={`${group.label}-${groupIndex}`}
      id={`${group.label}-${groupIndex}`}
      title={group.label}
      isActive={group.routes.some((route) => route.path === location.pathname)}
    >
      {group.routes.map((route, idx) => route.label && renderNavItem(route, idx))}
    </NavExpandable>
  );

  const Navigation = (
    <Nav id="nav-primary-simple" >
      <NavList id="nav-list-simple">
        {routes.map(
          (route, idx) => route.label && (!route.routes ? renderNavItem(route, idx) : renderNavGroup(route, idx))
        )}
      </NavList>
    </Nav>
  );

  const Sidebar = (
    <PageSidebar  >
      <PageSidebarBody>
        {Navigation}
      </PageSidebarBody>
    </PageSidebar>
  );

  const pageId = 'primary-app-container';

  const PageSkipToContent = (
    <SkipToContent onClick={(event) => {
      event.preventDefault();
      const primaryContentContainer = document.getElementById(pageId);
      if (primaryContentContainer !== null) {
        primaryContentContainer.focus();
      }
    }} href={`#${pageId}`}>
      Skip to Content
    </SkipToContent>
  );
  return (
    <Page
      mainContainerId={pageId}
      masthead={Header}
      sidebar={sidebarOpen && Sidebar}
      skipToContent={PageSkipToContent}>
      {children}
    </Page>
  );
};

export { AppLayout };
