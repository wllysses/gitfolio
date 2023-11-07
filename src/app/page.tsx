"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getUserData } from "@/services/api";
import { useQuery } from "react-query";
import { ModeToggle } from "@/components/ui/theme-toggle";

export default function Home() {
  const router = useRouter();

  const [input, setInput] = useState<string>("");

  const { isLoading, isError, refetch } = useQuery(
    ["user"],
    async () => getUserData(input),
    { enabled: false }
  );

  async function handleUserExists() {
    const fetchData = await refetch();

    if (fetchData.data.message) {
      if (fetchData.data.message === "Not Found") {
        toast.error("Usuário não existe.");
        return;
      }
      if (fetchData.data.message.includes("API rate limit exceeded")) {
        toast.error(
          "Número de requisições excedida. Tente novamente mais tarde."
        );
        return;
      }
    }

    router.push(`/portfolio/${input}`);
  }

  if (isError) return <div>Algo deu errado...</div>;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4">
      <header className="fixed top-4 right-4">
        <ModeToggle />
      </header>

      <h1 className="font-bold text-7xl animate-fade-right">
        Git<span className="text-primary">fólio</span>
      </h1>
      <p className="text-muted-foreground text-xs animate-fade-left">
        Crie o seu portfólio com apenas um clique
      </p>

      <div className="mt-6 flex w-full max-w-sm items-center space-x-2 animate-fade-up">
        <Input
          type="text"
          placeholder="ex: torvalds"
          onChange={(e) => setInput(e.target.value)}
          disabled={isLoading}
        />
        <Button
          size="icon"
          onClick={handleUserExists}
          disabled={!input || isLoading}
          className="disabled:cursor-not-allowed"
        >
          <SearchIcon size={18} />
        </Button>
      </div>

      <footer className="text-muted-foreground text-xs fixed bottom-6">
        Desenvolvido por Wllysses Tavares
      </footer>
    </main>
  );
}
