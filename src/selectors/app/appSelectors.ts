import { IAppState } from "reducers/app/appReducer.d";
import { createSelector } from "reselect";
import { IRootState } from 'stores/rootReducers.d'

export const themeSelector = createSelector(
    (state: IRootState) => state.app,
    (app: IAppState) => app.theme
)