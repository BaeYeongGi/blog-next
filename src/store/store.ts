import { create } from 'zustand';

interface storeType {
  isPop:boolean,
  setIsPop:(value:boolean) => void,
  isToast: boolean,
  setIsToast:(value:boolean) => void,

}

const useStore = create<storeType>()((set) => ({
  isPop: false,
  setIsPop: (value: boolean) => set({isPop: value}),
  isToast: false,
  setIsToast: (value: boolean) => set({isToast: value})  
}))

export default useStore;