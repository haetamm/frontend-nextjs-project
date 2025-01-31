import { create } from "zustand";

export const useModalStore = create((set) => ({
  isOpen: false,
  type: "",
  id: "",
  commentId: "",

  openModalLogout: () => {
    set({ isOpen: true, type: "logout" });
  },

  openModalDeleteThread: (id) => {
    set({ isOpen: true, type: "deleteThread", id });
  },

  openModalDeleteComment: (id, commentId) => {
    set({ isOpen: true, type: "deleteComment", id, commentId });
  },

  openModalActivate: (id) => {
    set({ isOpen: true, type: "activateUser", id });
  },

  openModalDeactivate: (id) => {
    set({ isOpen: true, type: "deactivateUser", id });
  },

  closeModal: () => {
    set({ isOpen: false, type: "", id: "" });
  },
}));
