import { Page } from "@/components/blocks";
import { useRef, useState } from "react";

export default function Home() {
  const [pageHeight, setPageHeight] = useState(0);
  const pageRef = useRef();

  return (
    <>
      <Navigation />
      <div>{pageHeight}</div>
      <Page pageRef={pageRef} setPageHeight={setPageHeight} />
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
