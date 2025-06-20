import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface IUser {
  username: string
  is_superuser: boolean
}

interface IAuthStore {
  isAuth: boolean
  token: string | null
  user: IUser | null
  setAuth: (token: string) => void
  setUser: (user: IUser) => void
  logout: () => void
}

const useAuthStore = create<IAuthStore>()(
  persist(
    (set) => ({
      isAuth: false,
      token: null,
      user: null,

      setAuth: (token) => set({ token, isAuth: !!token }),
      setUser: (user) => set({ user }),
      logout: () => set({ isAuth: false, token: null, user: null }),
    }),
    {
      name: 'auth-storage',
    }
  )
)

export default useAuthStore
