import { create } from "zustand";

const useStore = create((set) => ({
  loading: false,
  sidebarIsOpen: false,
  setLoading: (bool) => set((state) => ({ loading: bool })),
  toggleSideBar: () =>
    set((state) => ({ sidebarIsOpen: !state.sidebarIsOpen })),
}));

export default useStore;
