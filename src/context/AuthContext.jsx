import { createContext, useContext, useState, useCallback } from "react";
import { CURRENT_USER } from "@/data/dashboard";

const AuthContext = createContext(null);
const STORAGE_KEY = "tsu_auth_user";

const readStored = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

// Mock authentication — no real backend, persisted to localStorage so sessions survive reloads.
export function AuthProvider({ children }) {
  const [user, setUser] = useState(readStored);

  const persist = (u) => {
    setUser(u);
    try {
      if (u) localStorage.setItem(STORAGE_KEY, JSON.stringify(u));
      else localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore storage errors */
    }
  };

  const login = useCallback((email) => {
    const role = email?.toLowerCase().includes("admin") ? "admin" : "customer";
    persist({ ...CURRENT_USER, email: email || CURRENT_USER.email, role });
    return { role };
  }, []);

  const register = useCallback((data) => {
    persist({ ...CURRENT_USER, name: data.name, email: data.email, role: "customer" });
    return { role: "customer" };
  }, []);

  const logout = useCallback(() => persist(null), []);

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
