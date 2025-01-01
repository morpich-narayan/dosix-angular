import { ActionReducerMap } from "@ngrx/store";
import { ChatReducer, ChatState } from "./chat/chat.reducer";
import { layoutReducer, LayoutState } from "./layouts/layout-reducers";
import { CRMReducer, CRMState } from "./CRM/crm.reducer";
import { RealReducer, RealState } from "./RealEstate/realEstate.reducer";
import { OrderReducer, OrderState } from "./Orders/order.reducer";
import { InvoiceReducer, InvoiceState } from "./Invoices/invoices.reducer";


export interface RootReducerState {
    layout: LayoutState,
    Chatmessage: ChatState;
    CRMlist: CRMState;
    Realist: RealState;
    Orderlist: OrderState;
    Invoice: InvoiceState;
}

export const rootReducer: ActionReducerMap<RootReducerState> = {
    layout: layoutReducer,
    Chatmessage: ChatReducer,
    CRMlist: CRMReducer,
    Realist: RealReducer,
    Orderlist: OrderReducer,
    Invoice: InvoiceReducer,
}