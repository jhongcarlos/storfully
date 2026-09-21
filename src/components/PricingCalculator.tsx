import { useMemo, useState } from 'preact/hooks';

type PackageKey = '5x5' | '10x10' | '10x20';

// Published pricing from the content package, Section 2 and Section 8 rulings.
// Nothing here is estimated or invented — these are the approved rates.
const PACKAGES: Record<PackageKey, { label: string; base: number; additional: number; setupFirst: number; setupAdditional: number }> = {
  '5x5': { label: '5x5', base: 500, additional: 350, setupFirst: 2500, setupAdditional: 500 },
  '10x10': { label: '10x10', base: 1000, additional: 750, setupFirst: 2500, setupAdditional: 500 },
  '10x20': { label: '10x20', base: 1500, additional: 1200, setupFirst: 2500, setupAdditional: 500 },
};

const currency = (n: number) =>
  n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

export default function PricingCalculator() {
  const [pkg, setPkg] = useState<PackageKey>('10x10');
  const [facilities, setFacilities] = useState(1);

  const result = useMemo(() => {
    const p = PACKAGES[pkg];
    const count = Math.max(1, facilities);
    const monthly = p.base + p.additional * (count - 1);
    const setup = p.setupFirst + p.setupAdditional * (count - 1);
    return { monthly, setup };
  }, [pkg, facilities]);

  return (
    <div class="pricing-calculator">
      <div class="pricing-calculator__controls">
        <label class="pricing-calculator__field">
          <span>Package</span>
          <select value={pkg} onChange={(e) => setPkg((e.currentTarget as HTMLSelectElement).value as PackageKey)}>
            {Object.entries(PACKAGES).map(([key, p]) => (
              <option value={key}>{p.label}</option>
            ))}
          </select>
        </label>

        <label class="pricing-calculator__field">
          <span>Number of facilities</span>
          <input
            type="number"
            min="1"
            step="1"
            value={facilities}
            onInput={(e) => {
              const target = e.currentTarget as HTMLInputElement;
              const value = parseInt(target.value, 10);
              const clamped = Number.isNaN(value) || value < 1 ? 1 : value;
              // Force the field back in sync even when the clamped value equals
              // the current state (e.g. typing "0" while already at 1), since a
              // no-op state update won't trigger Preact to touch the DOM value.
              if (String(clamped) !== target.value) target.value = String(clamped);
              setFacilities(clamped);
            }}
          />
        </label>
      </div>

      <div class="pricing-calculator__result">
        <div>
          <span class="pricing-calculator__result-label">Monthly package fee</span>
          <span class="pricing-calculator__result-value">{currency(result.monthly)}/month</span>
        </div>
        <div>
          <span class="pricing-calculator__result-label">One-time setup</span>
          <span class="pricing-calculator__result-value">{currency(result.setup)}</span>
        </div>
      </div>

      <p class="pricing-calculator__note">
        Ad spend is separate, billed directly to your card by Google and Meta, and isn't
        included above. This covers the package fee and setup only.
      </p>

      {/* TODO: wire "Get this package" to whatever intake flow the /audit or /book
          form eventually posts to — no backend yet. */}
      <a class="pricing-calculator__cta" href="/audit">
        Get your free visibility audit
      </a>
    </div>
  );
}
