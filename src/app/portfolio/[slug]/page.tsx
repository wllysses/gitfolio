import Image from "next/image";
import Link from "next/link";
import { getUserData } from "@/services/api";
import { cn } from "@/lib/utils";
import { Header } from "../components/header";
import { Button, buttonVariants } from "@/components/ui/button";
import { Projects } from "../components/projects";
import Languages from "../components/languages";
import { ShareButton } from "../components/share-button";

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
            <Languages slug={slug} />
            <div className="mt-5 flex items-center gap-2">
              <Link
                href={!user.blog ? `https://github.com/${slug}` : user.blog}
                target="_blank"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "text-white max-w-[150px]"
                )}
              >
                Entre em contato
              </Link>
              <ShareButton
                url={`https://my-gitfolio.vercel.app/portfolio/${slug}`}
              />
            </div>
          </div>
          <Image
            src={user.avatar_url}
            alt="Github profile avatar"
            loading="lazy"
            width={340}
            height={340}
            className="rounded-full border-4 border-primary max-sm:mx-auto animate-fade-left"
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
