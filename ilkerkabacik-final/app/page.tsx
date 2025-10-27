'use client';
import { Hero, About, Ventures, Health, Speaking, Contact } from "../components/Sections";
export default function Page(){
  return (
    <main>
      <Hero/>
      <About/>
      <Ventures/>
      <Health/>
      <Speaking/>
      <Contact/>
    </main>
  );
}
