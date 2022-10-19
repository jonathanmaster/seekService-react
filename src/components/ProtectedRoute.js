import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import './loading.css'

export function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <span className="loader"></span>;

  if (!user) return <Navigate to="/login" />;

  return <>{children}</>;
}
