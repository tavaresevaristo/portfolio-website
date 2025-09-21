import { Navbar } from "@/components/molecules/navbar";

export default function Home() {
  return (
    <div className="font-sans">
      <Navbar />
      <main className="items-center justify-center">
        <div className="mt-20 text-center">
          <h1 className="text-3xl font-bold">Bem-vindo</h1>
          <p>Este conteúdo tem padding e max-width definidos pelo container.</p>
        </div>
      </main>
    </div>
  );
}
