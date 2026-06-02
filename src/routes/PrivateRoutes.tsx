import { useEffect, useState, type ReactNode } from "react";
import { auth } from "../services/firebaseConnection";
import { onAuthStateChanged } from "firebase/auth";
import { Navigate } from "react-router-dom";

interface PrivateRoutesProps {
   children: ReactNode;
}

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
      return <div>Carregando...</div>;
   }

   if(!signed) {
      return <Navigate to="/login" />;
   }

   return children;
}