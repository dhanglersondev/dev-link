import { useState, type FormEvent } from "react";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { FiTrash } from "react-icons/fi";
import { db } from "../../services/firebaseConnection";
import {
  addDoc,
  collection,
} from "firebase/firestore";

export function Admin() {
  const [titulo, setTitulo] = useState("");
  const [url, setUrl] = useState("");
  const [colorInput, setColorInput] = useState("#ec069b");
  const [bgColorInput, setBgColorInput] = useState("#0c0c0c");

  function handleRegister(event: FormEvent) {

    event.preventDefault();

    if(titulo === "" || url === "") {
      alert("Preencha todos os campos")
      return;
    }

    addDoc(collection(db, "links"), {
      titulo: titulo,
      url: url,
      bg: bgColorInput,
      color: colorInput,
      created: new Date()
    })
    .then(() => {
      setTitulo("")
      setUrl("")
      console.log("CADASTRADO COM SUCESSO!")
    })
    .catch((error) => {
      console.log("ERRO AO CADASTRAR NO BANCO" + error)
    })
  }

  return (
    <div className="flex items-center flex-col min-h-screen pb-7 px-2">
      <Header />

      <form className="flex flex-col mt-12 mb-3 px-3 w-full max-w-xl" onSubmit={handleRegister}>
        <label className="text-white font-medium">
          Título do link
        </label>

        <Input
          placeholder="Digite o título do link..."
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />

        <label className="text-white font-medium mt-4">
          Link URL
        </label>

        <Input
          type="url"
          placeholder="Digite a URL..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        <section className="flex my-4 gap-5">
          <div className="flex items-center gap-2">
            <label className="text-white font-medium">
              Cor do link
            </label>

            <input
              className="h-8"
              type="color"
              value={colorInput}
              onChange={(e) => setColorInput(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-2">
            <label className="text-white font-medium">
              Fundo do link
            </label>

            <input
              className="h-8"
              type="color"
              value={bgColorInput}
              onChange={(e) => setBgColorInput(e.target.value)}
            />
          </div>
        </section>

        {titulo !== "" && (
          <div className="flex items-center justify-start flex-col mb-7 p-1 border-purple-200/25 border rounded-md">
            <label className="text-white font-medium mb-3 mt-3">
              Veja os detalhes
            </label>

            <article
              className="w-11/12 max-w-lg flex flex-col items-center justify-between bg-gray-900 rounded px-1 py-3"
              style={{
                marginBottom: 8,
                marginTop: 8,
                backgroundColor: bgColorInput,
              }}
            >
              <p
                className="font-medium"
                style={{
                  marginBottom: 8,
                  marginTop: 8,
                  color: colorInput,
                }}
              >
                {titulo}
              </p>
            </article>
          </div>
        )}

        <button
          type="submit"
          className="
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
          Cadastrar
        </button>
      </form>

      <div className="w-full max-w-xl px-3 flex flex-col items-center">
        <h2 className="font-medium text-white mb-2 text-2xl">
          Meus Links
        </h2>

        <article
          className="flex items-center justify-between w-full rounded-md px-4 py-3"
          style={{ backgroundColor: "#FFF", color: "#000" }}
        >
          <p style={{ fontSize: 14, fontWeight: "bold" }}>Canal do YouTube</p>

          <button type="button">
            <FiTrash size={18} color="#000" />
          </button>
        </article>
      </div>
    </div>
  );
}