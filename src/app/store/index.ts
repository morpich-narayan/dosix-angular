import { ActionReducerMap } from "@ngrx/store";
import { ChatReducer, ChatState } from "./chat/chat.reducer";
import { layoutReducer, LayoutState } from "./layouts/layout-reducers";


export interface RootReducerState {
    layout: LayoutState,
    Chatmessage: ChatState;
}

export const rootReducer: ActionReducerMap<RootReducerState> = {
    layout: layoutReducer,
    Chatmessage: ChatReducer,
}