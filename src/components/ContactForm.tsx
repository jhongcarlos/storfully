import { useState } from 'preact/hooks';

interface FormState {
  name: string;
  email: string;
  facility: string;
  message: string;
}

const initialState: FormState = {
  name: '',
  email: '',
  facility: '',
  message: '',
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle');
  const [error, setError] = useState<string | null>(null);

  const update = (field: keyof FormState) => (e: Event) => {
    const target = e.currentTarget as HTMLInputElement | HTMLTextAreaElement;
    setForm((prev) => ({ ...prev, [field]: target.value }));
  };

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    setError(null);

    if (!form.name || !form.email || !form.message) {
      setError('Name, email and message are required.');
      return;
    }

    setStatus('submitting');

    // TODO: POST to the contact intake endpoint once it exists (no backend yet).
    // Expected shape: { name, email, facility, message }
    // Likely destination: routes to the team inbox with a one-business-day response
    // commitment, per the /contact page copy.
    await new Promise((resolve) => setTimeout(resolve, 600));

    setStatus('submitted');
  };

  if (status === 'submitted') {
    return (
      <div class="contact-form contact-form--done" role="status">
        <p>
          Thanks, {form.name}. Your message is on its way. We respond within one business
          day at {form.email}.
        </p>
      </div>
    );
  }

  return (
    <form class="contact-form" onSubmit={handleSubmit} noValidate>
      <label class="contact-form__field">
        <span>Name *</span>
        <input
          type="text"
          name="name"
          value={form.name}
          onInput={update('name')}
          required
          autocomplete="name"
        />
      </label>

      <label class="contact-form__field">
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

      <label class="contact-form__field">
        <span>Facility (optional)</span>
        <input
          type="text"
          name="facility"
          value={form.facility}
          onInput={update('facility')}
          autocomplete="organization"
        />
      </label>

      <label class="contact-form__field">
        <span>Message *</span>
        <textarea
          name="message"
          value={form.message}
          onInput={update('message')}
          required
        />
      </label>

      {error && (
        <p class="contact-form__error" role="alert">
          {error}
        </p>
      )}

      <button type="submit" class="contact-form__submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  );
}
