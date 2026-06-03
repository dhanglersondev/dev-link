import { useEffect, useState, type ReactNode } from "react";
import { auth } from "../services/firebaseConnection";
import { onAuthStateChanged } from "firebase/auth";
import { Navigate } from "react-router-dom";

interface PrivateRoutesProps {
   children: ReactNode;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function PrivateRoutes({ children }: PrivateRoutesProps): any {
   const [loading, setLoading] = useState(true);
   const [signed, setSigned] = useState(false);

   useEffect(() => {

      const unsub = onAuthStateChanged(auth, (user) => {
         if (user) {
            const userData = {
               uid: user.uid,
               email: user.email
            }

            localStorage.setItem("@devlink", JSON.stringify(userData));

            setLoading(false);
            setSigned(true);
            console.log("Usuário logado: ", userData);
         } else {
            setLoading(false);
            setSigned(false);
            console.log("Nenhum usuário logado");
         }
         setLoading(false);

      });

      return () => unsub();
   }, []);

   if (loading) {
      return <div className="flex flex-col h-screen items-center justify-center text-3xl font-bold text-purple-500"><br />
         Carregando...
         <p style={{ fontSize: "50px" }}>🔄</p>
      </div>
   }

   if (!signed) {
      return <Navigate to="/login" />;
   }

   return children;
}