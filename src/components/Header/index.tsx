import { signOut } from "firebase/auth";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";
import { auth } from "../../services/firebaseConnection";

export function Header() {

   async function handleLogout() {

      await signOut(auth)
   }

  return (
    <header className="w-full max-w-3xl mt-4 px-2">
      <nav className="w-full bg-purple-200 h-12 flex items-center justify-between rounded-md px-3">
         <div className="flex gap-4 font-bold text-lg">
            <Link to="/">Home</Link>
            <Link to="/admin">Links</Link>
            <Link to="/admin/social">Midias</Link>
         </div>

         <button className="cursor-pointer" onClick={handleLogout}>
            <BiLogOut size={28} color="#ec069b"/>
         </button>
      </nav>
    </header>
  );
}