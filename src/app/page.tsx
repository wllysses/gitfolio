"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {

  const router = useRouter();

  const [input, setInput] = useState('');

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4">
      <h1 className="font-bold text-7xl animate-fade-right">
        Git<span className="text-primary">fólio</span>
      </h1>
      <p className="text-muted-foreground text-xs animate-fade-left">
        Crie o seu portfólio com apenas um clique
      </p>

      <div className="mt-6 flex w-full max-w-sm items-center space-x-2 animate-fade-up">
        <Input type="text" placeholder="ex: torvalds" onChange={(e) => setInput(e.target.value)} />
        <Button 
          size="icon" 
          onClick={() => router.push(`/portfolio/${input}`)} 
          disabled={!input}
          className="disabled:cursor-not-allowed"
        >
          <SearchIcon size={18} />
        </Button>
      </div>

      <footer className="text-muted-foreground text-xs fixed bottom-6">Desenvolvido por Wllysses Tavares</footer>
    </main>
  );
}
