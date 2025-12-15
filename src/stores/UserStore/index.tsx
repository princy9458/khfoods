"use client";

import { create } from "zustand";

import { type UserData } from "./types";

type UserState = {
  user: UserData;
  setUser: (userData: UserData) => void;
  clearUser: () => void;
  isAuthenticated: () => boolean;
  updateUser: (updates: Partial<UserData>) => void;
};

const useUserStore = create<UserState>((set, get) => ({
  user: null,

  setUser: (userData: UserData) => {
    set({ user: userData });
  },

  clearUser: () => {
    set({ user: null });
  },

  isAuthenticated: () => {
    return get().user !== null;
  },

  updateUser: (updates: Partial<UserData>) => {
    const currentUser = get().user;
    if (currentUser) {
      set({ user: { ...currentUser, ...updates } as UserData });
    }
  },
}));

export const useUser = () => {
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);
  const clearUser = useUserStore((state) => state.clearUser);
  const isAuthenticated = useUserStore((state) => state.isAuthenticated);
  const updateUser = useUserStore((state) => state.updateUser);

  return {
    user,
    setUser,
    clearUser,
    isAuthenticated,
    updateUser,
  };
};

export default useUserStore;
