export function Spinner() {
  return (
    <div className="min-h-[30vh] w-full flex items-center justify-center flex-col gap-2">
      <div className="w-12 h-12 rounded-full border-4 border-primary border-t-blue-200 animate-spin" />
      <span className="font-medium text-sm">Carregando projetos</span>
    </div>
  );
}
