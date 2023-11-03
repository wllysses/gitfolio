import { Button, buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { FolderOpenDotIcon, HomeIcon, MenuIcon } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <Card className="p-4 rounded-none">
      <header className="w-full container mx-auto flex items-center justify-between">
        <h1 className="font-semibold text-xl">
          &lt;Meu <span className="text-primary">Portfólio</span> /&gt;
        </h1>
        <nav className="max-sm:hidden">
          <ul className="flex items-center gap-4">
            <li>
              <Link href="#" className={buttonVariants({ variant: "ghost" })}>
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                className={buttonVariants({ variant: "ghost" })}
              >
                Projetos
              </Link>
            </li>
          </ul>
        </nav>

        <Sheet>
          <SheetTrigger asChild className="hidden max-sm:flex">
            <Button size="icon" variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>

          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>

            <div className="mt-6 flex flex-col gap-2">
              <Link
                href="#"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "w-full justify-start gap-2"
                )}
              >
                <HomeIcon size={16} />
                Home
              </Link>
              <Link
                href="#projects"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "w-full justify-start gap-2"
                )}
              >
                <FolderOpenDotIcon size={16} />
                Projetos
              </Link>
            </div>

            <div className="fixed bottom-0 py-2">
              <Link
                href="/"
                className={cn(
                  buttonVariants({ variant: "destructive" }),
                  "w-full"
                )}
              >
                Sair
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </header>
    </Card>
  );
}
