import { IAppActionCreator, IAppActionTypes, IAppState } from './appReducer.d'
const initialState: IAppState = {
    theme: 'light'
}

const appReducer = (state = initialState, { type, payload }: IAppActionCreator) => {
    switch (type) {
        case IAppActionTypes.SET_THEME_MODE:
            return {
                ...state,
                theme: payload
            }
        default:
            return state;
    }
}
export default appReducer;