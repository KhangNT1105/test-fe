export const IAppActionTypes = {
    SET_THEME_MODE: "APP/SET_THEME_MODE"
}

export interface IAppState {
    theme: 'light' | 'dark',
}
export interface IAppActionCreator {
    payload: IAppState,
    type: string,
}