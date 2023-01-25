export const SHOW_FEED_DETAILS: "SHOW_FEED_DETAILS" = "SHOW_FEED_DETAILS";
export const CLOSE_FEED_DETAILS: "CLOSE_FEED_DETAILS" = "CLOSE_FEED_DETAILS";

export interface IFeed {
  readonly type: typeof SHOW_FEED_DETAILS;
}

export interface ICloseFeed {
  readonly type: typeof CLOSE_FEED_DETAILS;
}

export type ModalActions = IFeed | ICloseFeed;

type TOrderState = {
  showFeedModal: boolean;
};

export const initialState: TOrderState = {
  showFeedModal: false,
};

export const modalReducer = (state = initialState, actions: ModalActions) => {
  switch (actions.type) {
    case SHOW_FEED_DETAILS: {
      return { showFeedModal: true };
    }
    case CLOSE_FEED_DETAILS: {
      return { showFeedModal: false };
    }
    default: {
      return state;
    }
  }
};
