import { useState } from "react";

export default function TailwindCard() {
  const [user, setUser] = useState<any>(null);
  const [username, setUsername] = useState("");
  const [error, setError] = useState<string | null>(null);

  const fetchUser = async () => {
    if (!username.trim()) {
      setError("Por favor, insira um nome de usuário");
      return;
    }

    try {
      setError(null);
      setUser(null);
      const res = await fetch(`https://api.github.com/users/${username}`);

      if (!res.ok) {
        if (res.status === 404) {
          setError(`Usuário "${username}" não encontrado`);
        } else {
          setError(`Erro ao buscar usuário: ${res.status}`);
        }
        return;
      }

      const data = await res.json();
      setUser(data);
    } catch (err) {
      setError("Erro ao conectar com a API do GitHub");
      console.error(err);
    }
  };

  return (
    <div className="w-full max-w-md p-6">
      <input
        type="text"
        className="w-full border border-gray-300 p-2 rounded-md mb-4"
        placeholder="Digite o nome do usuário"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button
        onClick={fetchUser}
        className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Buscar
      </button>

      {error && (
        <div className="mt-3 text-red-500 bg-red-50 p-2 rounded-md text-center">
          {error}
        </div>
      )}

      {user && (
        <div className="mt-6 bg-white rounded-lg shadow-md p-4 text-center">
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h2 className="text-xl font-bold">{user.login}</h2>
          <p className="text-gray-600">{user.bio || "Sem bio disponível"}</p>
          <p className="mt-2">Repositórios Públicos: {user.public_repos}</p>
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 mt-2 inline-block hover:underline"
          >
            Ver perfil no GitHub
          </a>
        </div>
      )}
    </div>
  );
}
