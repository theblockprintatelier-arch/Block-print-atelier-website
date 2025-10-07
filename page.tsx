\"use client\";
import Link from "next/link";

function MarketBar({ label, value, max=120, note }:{label:string, value:number, max?:number, note?:string}){
  const pct = Math.min(100, (value/max)*100);
  return (
    <div className="space-y-1">
      <div className="flex items-end justify-between">
        <span className="text-sm text-neutral-600">{label}</span>
        <span className="text-sm font-medium">${value}B</span>
      </div>
      <div className="h-2 rounded-full bg-neutral-200 overflow-hidden">
        <div className="h-full bg-indigo-800" style={{width: pct+"%"}} />
      </div>
      {note && <p className="text-xs text-neutral-500">{note}</p>}
    </div>
  );
}

export default function InvestorsPage(){
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <section className="border-b bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="uppercase tracking-[0.2em] text-xs text-neutral-500">Investors</p>
          <h1 className="font-serif text-4xl mt-2">Block Print Atelier Collective</h1>
          <p className="mt-4 max-w-2xl text-neutral-600">Custodian of authentic Indian block printing. Limited editions with provenance verification, GI alignment and museum/UN positioning.</p>
          <div className="mt-6 flex gap-3">
            <a href="/#contact" className="rounded-full bg-indigo-800 text-white px-5 py-3 text-sm font-medium hover:bg-indigo-900">Request Deck</a>
            <Link href="/" className="rounded-full border px-5 py-3 text-sm font-medium hover:bg-neutral-50">Back to Site</Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <h2 className="font-serif text-2xl">Market Opportunity</h2>
            <MarketBar label="Luxury Fashion" value={115} note="Growing with demand for authenticity" />
            <MarketBar label="Sustainable Fashion" value={43} note="~8.9% CAGR" />
            <MarketBar label="Artisanal Luxury" value={4.7} note="Premium for handcrafted, limited editions" />
          </div>
          <div className="space-y-4">
            <h2 className="font-serif text-2xl">Investment Thesis</h2>
            <ul className="list-disc pl-5 text-sm text-neutral-700 space-y-2">
              <li>First-mover custodian brand for block printing with dual protection: GI + BPAC provenance.</li>
              <li>High-margin limited editions; museum/UN credibility unlocks global demand.</li>
              <li>Scalable platform model across clusters and future crafts.</li>
            </ul>
            <div className="mt-4 grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border p-4"><p className="text-xs text-neutral-500">Seed Ask</p><p className="text-2xl font-semibold">$1.5M</p><p className="text-xs text-neutral-500">Brand, tech, first master collection</p></div>
              <div className="rounded-2xl border p-4"><p className="text-xs text-neutral-500">Grants</p><p className="text-2xl font-semibold">$750K</p><p className="text-xs text-neutral-500">Documentation, archives, education</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl">Investor FAQ</h2>
          <div className="mt-6 divide-y">
            {[
              ["What exactly is the BPAC Provenance Seal?", "A certification emblem and digital record that verifies artisan, cluster, process and edition for each piece; aligned with GI where applicable."],
              ["How does BPAC make money?", "High-margin limited editions (D2C + select retail), certification/provenance services bundled into pricing, collaborations, and a patrons/membership tier."],
              ["What prevents copycats?", "Trademarked brand + certification mark, GI alignment, defensible storytelling, and deep cluster relationships."],
              ["Where are funds used?", "40% artisan partnerships & atelier, 30% brand/e-comm, 20% provenance tech, 10% showcases."],
              ["What is the 6–12 month roadmap?", "Launch identity + capsule, press, foundation registration, first showcase; begin GI strengthening and investor conversations."],
            ].map(([q,a], i) => (
              <details key={i} className="py-4 group">
                <summary className="cursor-pointer list-none flex items-center justify-between">
                  <span className="font-medium">{q}</span>
                  <span className="text-neutral-400 group-open:rotate-180 transition">⌄</span>
                </summary>
                <p className="mt-2 text-sm text-neutral-700">{a}</p>
              </details>
            ))}
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl border p-6">
            <h3 className="font-serif text-xl">Request Investor Deck</h3>
            <p className="mt-2 text-sm text-neutral-600">We’ll share our full pitch, financial model and impact plan.</p>
            <a href="/#contact" className="mt-4 inline-block rounded-full bg-indigo-800 text-white px-5 py-3 text-sm font-medium hover:bg-indigo-900">Contact Us</a>
          </div>
          <div className="rounded-3xl border p-6">
            <h3 className="font-serif text-xl">Book a Call</h3>
            <p className="mt-2 text-sm text-neutral-600">Discuss alignment, diligence and collaboration models.</p>
            <a href="https://calendly.com/theblockprintatelier" target="_blank" className="mt-4 inline-block rounded-full border px-5 py-3 text-sm font-medium hover:bg-neutral-50">Schedule</a>
          </div>
        </div>
      </section>
    </main>
  );
}
