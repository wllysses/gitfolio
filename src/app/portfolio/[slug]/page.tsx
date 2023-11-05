import Link from "next/link";
import { getUserData } from "@/services/api";
import { cn } from "@/lib/utils";
import { Header } from "../components/header";
import { buttonVariants } from "@/components/ui/button";
import { Projects } from "../components/projects";

interface ParamsProps {
  params: {
    slug: string;
  };
}

export default async function Portfolio({ params: { slug } }: ParamsProps) {
  const user = await getUserData(slug);

  return (
    <>
      <Header />
      <main className="container mx-auto mt-28 max-sm:mt-20">
        <section
          id="hero"
          className="w-full grid grid-cols-2 gap-8 p-4 max-sm:grid-cols-1"
        >
          <div className="flex flex-col justify-center gap-2 pl-24 max-sm:p-0 animate-fade-right">
            <span className="text-xl text-slate-300">Olá. Eu me chamo</span>
            <h2 className="font-bold text-5xl">{user.name}</h2>
            <p className="text-slate-400">{user.bio ?? ""}</p>
            <Link
              href={!user.blog ? `https://github.com/${slug}` : user.blog}
              target="_blank"
              className={cn(
                buttonVariants({ variant: "default" }),
                "text-white max-w-[150px] mt-4"
              )}
            >
              Entre em contato
            </Link>
          </div>
          <img
            src={user.avatar_url}
            alt="Github profile avatar"
            loading="lazy"
            className="rounded-full border-4 border-primary max-w-xs w-full max-sm:mx-auto animate-fade-left"
          />
        </section>

        <Projects slug={slug} totalRepos={user.public_repos} />
      </main>
      <footer className="p-4 text-center bg-primary text-sm">
        <p>&copy; Todos os direitos reservados</p>
      </footer>
    </>
  );
}
