import { create } from "zustand";

import { persist } from "zustand/middleware";

const roleStore = create(
  persist(
    (set) => ({
      userRole: null,
      loggedUser: {},
      isAdmin: null,
      setUserRole: (role) => set((state) => ({ userRole: role })),
      checkRole: () =>
        set((state) => ({
          isAdmin: state.userRole === "SUPER_ADMIN" ? true : false,
        })),
      setLoggedUser: (detail) => set((state) => ({ loggedUser: detail })),
    }),
    {
      name: "zustand-storage",
      getStorage: () => localStorage,
    }
  )
);

export default roleStore;
