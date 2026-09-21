import { useState } from 'preact/hooks';

interface FormState {
  facilityName: string;
  address: string;
  website: string;
  email: string;
  phone: string;
  facilityCount: string;
  occupancy: string;
}

const initialState: FormState = {
  facilityName: '',
  address: '',
  website: '',
  email: '',
  phone: '',
  facilityCount: '',
  occupancy: '',
};

export default function AuditForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle');
  const [error, setError] = useState<string | null>(null);

  const update = (field: keyof FormState) => (e: Event) => {
    const target = e.currentTarget as HTMLInputElement;
    setForm((prev) => ({ ...prev, [field]: target.value }));
  };

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    setError(null);

    if (!form.facilityName || !form.address || !form.website || !form.email) {
      setError('Facility name, address, website and email are required.');
      return;
    }

    setStatus('submitting');

    // TODO: POST to the audit intake endpoint once it exists (no backend yet).
    // Expected shape: { facilityName, address, website, email, phone, facilityCount, occupancy }
    // Likely destinations: a serverless function that kicks off the rank-grid scan,
    // GBP score check and website check described in the /audit page copy, then
    // emails the report per Section 6 ("What happens after?").
    await new Promise((resolve) => setTimeout(resolve, 600));

    setStatus('submitted');
  };

  if (status === 'submitted') {
    return (
      <div class="audit-form audit-form--done" role="status">
        <p>
          Thanks, {form.facilityName}. Your audit is on its way. Most reports are ready in under
          fifteen minutes, and it'll land in your inbox at {form.email}.
        </p>
      </div>
    );
  }

  return (
    <form class="audit-form" onSubmit={handleSubmit} noValidate>
      <div class="audit-form__grid">
        <label class="audit-form__field">
          <span>Facility name *</span>
          <input
            type="text"
            name="facilityName"
            value={form.facilityName}
            onInput={update('facilityName')}
            required
            autocomplete="organization"
          />
        </label>

        <label class="audit-form__field">
          <span>Address *</span>
          <input
            type="text"
            name="address"
            value={form.address}
            onInput={update('address')}
            required
            autocomplete="street-address"
          />
        </label>

        <label class="audit-form__field">
          <span>Website *</span>
          <input
            type="url"
            name="website"
            value={form.website}
            onInput={update('website')}
            required
            placeholder="https://"
            autocomplete="url"
          />
        </label>

        <label class="audit-form__field">
          <span>Email *</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onInput={update('email')}
            required
            autocomplete="email"
          />
        </label>

        <label class="audit-form__field">
          <span>Phone</span>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onInput={update('phone')}
            autocomplete="tel"
          />
        </label>

        <label class="audit-form__field">
          <span>Number of facilities (optional)</span>
          <input
            type="number"
            name="facilityCount"
            min="1"
            step="1"
            value={form.facilityCount}
            onInput={update('facilityCount')}
          />
        </label>

        <label class="audit-form__field audit-form__field--full">
          <span>Current occupancy (optional)</span>
          <input
            type="text"
            name="occupancy"
            placeholder="e.g. 88%"
            value={form.occupancy}
            onInput={update('occupancy')}
          />
        </label>
      </div>

      {error && (
        <p class="audit-form__error" role="alert">
          {error}
        </p>
      )}

      <button type="submit" class="audit-form__submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : 'Get your free visibility audit'}
      </button>
    </form>
  );
}
