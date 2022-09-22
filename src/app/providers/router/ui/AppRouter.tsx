import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from '../config/routes';

export const AppRouter = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            {
                Object.values(routes).map(({ element, path }) => (
                    <Route
                        path={path}
                        key={path}
                        element={(
                            <div className="page-wrap">
                                {element}
                            </div>
                        )}
                    />
                ))
            }
        </Routes>
    </Suspense>
);
