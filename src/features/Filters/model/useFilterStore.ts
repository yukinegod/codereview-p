import { create } from 'zustand'

type Filter = {
  key: string
  value: string
}

interface FilterStore {
  filters: Filter[]
  isRemote: boolean
  isInternship: boolean
  toggleFilter: (key: string, value: string) => void
  toggleRemote: () => void
  toggleInternship: () => void
  isActive: (key: string, value: string) => boolean
  reset: () => void
}

const useFilterStore = create<FilterStore>((set, get) => ({
  filters: [],
  isRemote: false,
  isInternship: false,

  toggleFilter: (key, value) => {
    const { filters } = get()
    const exists = filters.some((f) => f.key === key && f.value === value)
    set({
      filters: exists
        ? filters.filter((f) => !(f.key === key && f.value === value))
        : [...filters, { key, value }],
    })
  },

  toggleRemote: () => set((state) => ({ isRemote: !state.isRemote })),
  toggleInternship: () =>
    set((state) => ({ isInternship: !state.isInternship })),

  isActive: (key, value) => {
    if (key === 'remote') return get().isRemote
    if (key === 'internship') return get().isInternship
    return get().filters.some((f) => f.key === key && f.value === value)
  },

  reset: () => set({ filters: [], isRemote: false, isInternship: false }),
}))

export default useFilterStore
