import { Page } from "@/components/blocks";

export default function Home() {

  return (
    <>
      <Navigation />
      <Page />
    </>
  );
}

const Navigation = () => {
  return (
    <nav className="w-full z-10 h-12 shadow-lg sticky top-0 bg-slate-100 shadow-lg font-mono flex justify-center items-center rounded">
      <div>
        <p className="text-xl font-bold">TUNGA</p>
      </div>
    </nav>
  );
};
