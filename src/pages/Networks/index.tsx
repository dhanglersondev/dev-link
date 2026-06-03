import { useState, type FormEvent } from "react";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { db } from "../../services/firebaseConnection";
import { doc, setDoc } from "firebase/firestore";

export function Networks() {
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [youtube, setYoutube] = useState("");

  function handleRegister(e: FormEvent) {
    e.preventDefault();

    setDoc(doc(db, "social", "link"), {
      facebook: facebook,
      instagram: instagram,
      linkedin: linkedin,
      github: github,
      youtube: youtube,
    })
    .then(() => {
      console.log("Cadastrados com Sucesso")
    })
    .catch((error) => {
      console.log("Erro ao tentar salvar" + error)
    })
  }

  return (
    <div className="flex items-center flex-col min-h-screen pb-7 px-2">
      <Header />

      <h1 className="text-white text-3xl font-medium mt-8 mb-8">
        Minhas Redes Sociais
      </h1>

      <form className="flex flex-col w-full max-w-xl" onSubmit={handleRegister}>
        <label className="text-white text-2xl mt-2 mb-2">
          Facebook
        </label>
        <Input
          type="url"
          placeholder="Digite a URL do Facebook..."
          value={facebook}
          onChange={(e) => setFacebook(e.target.value)}
        />

        <label className="text-white text-2xl mt-4 mb-2">
          Instagram
        </label>
        <Input
          type="url"
          placeholder="Digite a URL do Instagram..."
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
        />

        <label className="text-white text-2xl mt-4 mb-2">
          LinkedIn
        </label>
        <Input
          type="url"
          placeholder="Digite a URL do LinkedIn..."
          value={linkedin}
          onChange={(e) => setLinkedin(e.target.value)}
        />

        <label className="text-white text-2xl mt-4 mb-2">
          GitHub
        </label>
        <Input
          type="url"
          placeholder="Digite a URL do GitHub..."
          value={github}
          onChange={(e) => setGithub(e.target.value)}
        />

        <label className="text-white text-2xl mt-4 mb-2">
          YouTube
        </label>
        <Input
          type="url"
          placeholder="Digite a URL do GitHub..."
          value={youtube}
          onChange={(e) => setYoutube(e.target.value)}
        />

        <button
          type="submit"
          className="
            mt-4
            mb-8
            w-full
            rounded-md
            bg-purple-500
            px-4
            py-2
            font-semibold
            text-white
            transition-colors
            hover:bg-purple-600
            active:scale-[0.98]
            cursor-pointer
          "
        >
          Salvar Links
        </button>
      </form>
    </div>
  );
}