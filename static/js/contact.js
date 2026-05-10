const CONTACT_API = 'https://swnao2guhk.execute-api.ap-south-1.amazonaws.com/contact';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactform');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('[type="submit"]');
    const originalText = submitBtn.textContent || submitBtn.value;

    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    const getValue = (name) => {
      const el = form.querySelector(`[name="${name}"]`);
      return el ? el.value.trim() : '';
    };

    // Pack extra fields into message
    const parts = [];
    const phone = getValue('phone');
    const companyType = getValue('company_type');
    const numClients = getValue('num_clients');
    if (phone) parts.push(`Phone: ${phone}`);
    if (companyType) parts.push(`Business type: ${companyType}`);
    if (numClients) parts.push(`ERP: ${numClients}`);

    const data = {
      name: getValue('name'),
      email: getValue('email'),
      company: getValue('company'),
      message: parts.join('\n'),
    };

    try {
      const response = await fetch(CONTACT_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        form.innerHTML = '<div class="demo-success"><h3>Thank you!</h3><p>We\'ll be in touch within 24 hours to set up a conversation.</p></div>';
      } else {
        const err = await response.json().catch(() => ({}));
        alert(err.error || 'Something went wrong. Please try again.');
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }
    } catch {
      alert('Network error. Please try again.');
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
  });
});
