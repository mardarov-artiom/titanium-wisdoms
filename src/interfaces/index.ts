import React from 'react';

export interface WisdomInterface {
  id: number;
  verified?: boolean;
  image: string;
  content: {
    wisdom: string;
    author: string;
  }[];
}

export interface ActionInterface {
  type: string;
  payload: any;
}

export interface LinkInterface {
  to: string;
  children: React.ReactNode;
  blank: boolean;
  props?: any;
}

export interface TextComponentInterface {
  message: string;
  classes: string;
}

export interface StoreInterface {
  wisdoms: WisdomInterface[] | null;
  firstWisdomId: string | undefined;
  wisdomsMap: {
    prev: WisdomInterface | null;
    current: WisdomInterface | null;
    next: WisdomInterface | null;
  };
  isLoading: boolean;
  steps: number;
  shouldRedirect: boolean;
  homeAnimationCompleted: boolean;
  homePageMessages: {
    [key: number]: string;
  };
  addWisdomModalOpen: boolean;
}

export interface NotificationInterface {
  isLoading: boolean;
  status: number | null;
  isActive: boolean;
  disableSubmit: boolean;
}

export interface State {
  main: StoreInterface;
  notifications: NotificationInterface;
}

export interface DispatchInterface {
  type: string;
  payload: any;
}
