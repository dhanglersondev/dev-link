import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { useState, type FormEvent } from "react";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    console.log({
      email,
      password,
    });
  }

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center px-4 py-6">
      <Link to="/">
        <h1 className="text-center text-4xl font-bold text-white sm:text-5xl">
          Dev
          <span className="bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Link
          </span>
        </h1>
      </Link>

      <form
        onSubmit={handleSubmit}
        className="mt-6 flex w-full max-w-xl flex-col gap-3"
      >
        <Input
          placeholder="Seu email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          placeholder="********"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="
            w-full
            rounded-md
            bg-purple-500
            px-4
            py-2.5
            font-semibold
            text-white
            transition-colors
            hover:bg-purple-600
            active:scale-[0.98]
            cursor-pointer
          "
        >
          Acessar
        </button>
      </form>
    </div>
  );
}