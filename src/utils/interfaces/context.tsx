export interface User {
  id: string;
  name: string;
  email: string;
  image: string;
  provider: string;
}

export interface UserSession {
  user: User;
}

export interface IAuthContext {
  user: UserSession | null;
  setUser: (user: UserSession) => void;
  logout: () => void;
}

export interface IUserSession {
  user: User;
}

export interface AuthPrividerProps {
  children: React.ReactNode;
}
