import { ActionReducerMap } from "@ngrx/store";
import { ChatReducer, ChatState } from "./chat/chat.reducer";
import { layoutReducer, LayoutState } from "./layouts/layout-reducers";
import { CRMReducer, CRMState } from "./CRM/crm.reducer";
import { RealReducer, RealState } from "./RealEstate/realEstate.reducer";


export interface RootReducerState {
    layout: LayoutState,
    Chatmessage: ChatState;
    CRMlist: CRMState;
    Realist: RealState;
}

export const rootReducer: ActionReducerMap<RootReducerState> = {
    layout: layoutReducer,
    Chatmessage: ChatReducer,
    CRMlist: CRMReducer,
    Realist: RealReducer,
}