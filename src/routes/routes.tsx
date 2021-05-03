import { RouteComponentProps, Switch, Route } from 'react-router-dom';
import ErrorBoundary from 'container/errorBoundary/ErrorBoundary';
import React, { Fragment, Suspense } from 'react';
import { Pages, RoutesString } from './routesString';
import Spinner from 'components/atoms/spinner/Spinner';

interface IRoute {
    layout?: React.FunctionComponent,
    path?: string,
    routes?: IRoute[],
    component?: any,
    exact?: boolean
}

const routes: IRoute[] = [{
    path: RoutesString.Home,
    exact: true,
    component: Pages.Home
}, {
    path: '*',
    component: Pages.PageNotFound
}]

const renderRoutes = (routes: IRoute[]) => {
    return routes &&
        <Suspense fallback={<Spinner />}>
            <Switch>
                {routes.map((route, index) => {
                    const Layout = route.layout || Fragment;
                    const Component = route.component || null;
                    return <Route
                        path={route.path}
                        exact={route.exact}
                        key={`route-${index}`}
                        render={(props: RouteComponentProps) => (
                            <Layout>
                                {route.routes ? renderRoutes(route.routes) :
                                    <Component {...props} />
                                }
                            </Layout>
                        )}
                    />
                })}
            </Switch>
        </Suspense>
}

const Routes: React.FC = () => {
    return <ErrorBoundary>
        {renderRoutes(routes)}
    </ErrorBoundary >;
}

export default Routes;