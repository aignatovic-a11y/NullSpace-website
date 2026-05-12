import { motion } from 'framer-motion';
import { Icon } from '../Icon';

type Product = {
  name: string;
  price: string;
  cadence: string;
  locations: string;
};

const products: Product[] = [
  { name: 'Elite', price: '€200.00', cadence: 'per month', locations: "A'DAM Tower, Sporthallen Zuid, Olympic Stadium +1 more" },
  { name: 'Premium', price: '€100.00', cadence: 'per month', locations: "A'DAM Tower, Sporthallen Zuid, Olympic Stadium +1 more" },
  { name: 'Basic', price: '€50.00', cadence: 'per month', locations: "A'DAM Tower, Sporthallen Zuid, Olympic Stadium +1 more" },
];

export function ProductsMockup() {
  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-black">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
        <div className="flex items-center gap-3">
          <h3 className="text-2xl font-bold tracking-tight text-white">Products</h3>
          <span className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] font-semibold text-ink-muted">
            3 active
          </span>
        </div>
        <button className="inline-flex items-center gap-1.5 rounded-full bg-[#A855F7] px-3 py-1.5 text-xs font-semibold text-white">
          <Icon name="plus" size={12} />
          New product
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-white/10 px-6 py-3">
        <button className="rounded-full border border-[#A855F7]/40 bg-[#A855F7]/10 px-3 py-1 text-xs font-semibold text-[#A855F7]">
          Active
        </button>
        <button className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-ink-muted">
          Archived
        </button>
        <button className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-ink-muted">
          All
        </button>
      </div>

      {/* Table header */}
      <div className="grid grid-cols-[1fr_72px_2fr_90px_90px_24px] gap-4 border-b border-white/10 px-6 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-ink-subtle">
        <div>Name</div>
        <div>Status</div>
        <div>Prices</div>
        <div>Created</div>
        <div>Updated</div>
        <div />
      </div>

      {/* Rows */}
      {products.map((p, i) => (
        <motion.div
          key={p.name}
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 + i * 0.07 }}
          className="grid grid-cols-[1fr_72px_2fr_90px_90px_24px] items-center gap-4 border-b border-white/8 px-6 py-4 transition-colors last:border-b-0 hover:bg-white/[0.02]"
        >
          <div className="text-base font-semibold text-white">{p.name}</div>
          <div>
            <span className="inline-flex items-center gap-1 rounded-full border border-[#22F58F]/30 bg-[#22F58F]/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#22F58F]">
              <span className="h-1 w-1 rounded-full bg-[#22F58F]" />
              Active
            </span>
          </div>
          <div className="text-xs text-ink-muted">
            <span className="text-white">{p.price}</span> {p.cadence}
            <span className="text-ink-subtle"> at {p.locations}</span>
          </div>
          <div className="text-xs text-ink-muted">14 Jun 2024</div>
          <div className="text-xs text-ink-muted">14 Jun 2024</div>
          <button className="inline-flex h-6 w-6 items-center justify-center rounded-md text-ink-subtle hover:bg-white/5 hover:text-white">
            <span className="text-base leading-none">⋮</span>
          </button>
        </motion.div>
      ))}

      {/* Footer hint */}
      <div className="flex items-center justify-between border-t border-white/10 px-6 py-3 text-[11px] text-ink-subtle">
        <span>Showing 3 of 3</span>
        <span className="inline-flex items-center gap-1.5">
          <Icon name="sparkles" size={11} className="text-[#A855F7]" />
          Customers self-serve from your branded portal
        </span>
      </div>
    </div>
  );
}