import { create } from 'zustand';

interface storeType {
  isPop:boolean,
  setIsPop:() => void,
}

const useStore = create<storeType>()((set) => ({
  isPop: false,
  setIsPop: () => set(() => ({isPop: true}))
}))

export default useStore;