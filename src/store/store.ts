import { create } from 'zustand';

interface ToastState {
  state: boolean;
  value?: string;
}

interface PopState {
  state: boolean;
  value?: string;
}

interface storeType {
  isPop: {
    state: boolean,
    value?: string
  },
  setIsPop:(pop: PopState) => void,
  isToast: {
    state: boolean,
    value?: string
  },
  setIsToast:(toast: ToastState) => void;
}

const useStore = create<storeType>()((set) => ({
  isPop: {
    state: false,
    value: '' 
  },
  setIsPop: (pop: PopState) => set({
    isPop: {
      state: pop.state,
      value: pop.value
    }
  }),
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