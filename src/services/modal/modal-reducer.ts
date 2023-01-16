export const SHOW_FEED_DETAILS: "SHOW_FEED_DETAILS" = "SHOW_FEED_DETAILS";

export interface IFeed {
  readonly type: typeof SHOW_FEED_DETAILS;
}
type TOrderState = {
  showFeedModal: boolean;
};
const initialState: TOrderState = {
  showFeedModal: false,
};

export const modalReducer = (state = initialState, actions: IFeed) => {
  switch (actions.type) {
    case SHOW_FEED_DETAILS: {
      return { showFeedModal: !state.showFeedModal };
    }
    default: {
      return state;
    }
  }
 

};
