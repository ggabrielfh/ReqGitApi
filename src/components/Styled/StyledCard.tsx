import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 400px;
  padding: 1.5rem;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.5rem;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #1d4ed8;
  }
`;

const Card = styled.div`
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-top: 1.5rem;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Avatar = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 9999px;
  margin: 0 auto 1rem auto;
  display: block;
`;

const Name = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
`;

const Bio = styled.p`
  color: #4b5563;
  margin-bottom: 0.5rem;
`;

const RepoCount = styled.p`
  margin-top: 0.5rem;
`;

const Link = styled.a`
  color: #3b82f6;
  display: inline-block;
  margin-top: 0.5rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const ErrorMessage = styled.p`
  color: #ef4444;
  margin-top: 0.75rem;
  text-align: center;
  padding: 0.5rem;
  border-radius: 0.375rem;
  background-color: #fee2e2;
`;

export default function StyledCard() {
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
    <Container>
      <Input
        placeholder="Digite o nome do usuário"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Button onClick={fetchUser}>Buscar</Button>

      {error && <ErrorMessage>{error}</ErrorMessage>}

      {user && (
        <Card>
          <Avatar src={user.avatar_url} alt={user.login} />
          <Name>{user.login}</Name>
          <Bio>{user.bio || "Sem bio disponível"}</Bio>
          <RepoCount>Repositórios Públicos: {user.public_repos}</RepoCount>
          <Link href={user.html_url} target="_blank">
            Ver perfil no GitHub
          </Link>
        </Card>
      )}
    </Container>
  );
}
