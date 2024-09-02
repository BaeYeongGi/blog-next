import { create } from 'zustand';

interface ToastState {
  state: boolean;
  value?: string;
}

interface storeType {
  isPop:boolean,
  setIsPop:(value:boolean) => void,
  isToast: {
    state: boolean,
    value?: string
  },
  setIsToast:(toast: ToastState) => void;
}

const useStore = create<storeType>()((set) => ({
  isPop: false,
  setIsPop: (value: boolean) => set({isPop: value}),
  isToast: {
    state: false, 
    value: ''
  },
  setIsToast: (toast: ToastState) => set({
    isToast: {
      state: toast.state,
      value: toast.value
    }  
  })  
}))

export default useStore;