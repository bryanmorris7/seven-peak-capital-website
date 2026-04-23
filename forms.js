/* Seven Peak Capital — GHL form wiring
   Routes all site forms to a single GoHighLevel inbound webhook.
   Branch by form_type inside the GHL workflow. */
(function () {
  'use strict';

  var WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/JjqgX84cb8KHmiwwnsn8/webhook-trigger/433f24a3-c5ec-4d2b-bbfb-697e8b60f952';

  function getPageName() {
    var path = window.location.pathname || '';
    var last = path.split('/').pop() || '';
    return last.replace('.html', '') || 'index';
  }

  function getUtmParams() {
    var params = new URLSearchParams(window.location.search);
    var keys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid'];
    var out = {};
    keys.forEach(function (k) {
      var v = params.get(k);
      if (v) out[k] = v;
    });
    return out;
  }

  function showMessage(form, type, text) {
    var existing = form.querySelector('.form-message');
    if (existing) existing.remove();

    var msg = document.createElement('div');
    msg.className = 'form-message form-message--' + type;
    msg.setAttribute('role', 'status');
    msg.setAttribute('aria-live', 'polite');

    var base = 'margin-top:20px;padding:16px 20px;font-family:"DM Sans",sans-serif;font-size:14px;letter-spacing:0.02em;line-height:1.55;';
    if (type === 'success') {
      msg.style.cssText = base + 'background:rgba(137,97,1,0.08);border-left:2px solid var(--gold,#896101);color:var(--navy,#0A0F1E);';
    } else {
      msg.style.cssText = base + 'background:rgba(180,40,40,0.06);border-left:2px solid #b42828;color:#b42828;';
    }
    msg.textContent = text;
    form.appendChild(msg);
  }

  function attach(form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Honeypot — if filled, silently drop
      var honeypot = form.querySelector('input[name="bot-field"]');
      if (honeypot && honeypot.value) return;

      var submitBtn = form.querySelector('button[type="submit"]');
      var originalText = submitBtn ? submitBtn.textContent : '';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending…';
      }

      var formName = form.getAttribute('name') || 'unknown';
      var data = {
        form_type: formName,
        page: getPageName(),
        submitted_at: new Date().toISOString(),
        source_url: window.location.href
      };

      var utm = getUtmParams();
      for (var uk in utm) data[uk] = utm[uk];

      var fd = new FormData(form);
      fd.forEach(function (value, key) {
        if (key === 'bot-field' || key === 'form-name') return;
        data[key] = value;
      });

      fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        mode: 'cors'
      })
        .then(function (res) {
          if (!res.ok) throw new Error('HTTP ' + res.status);
          var successMsg = formName === 'investor-list'
            ? "You're on the list. Expect updates from Seven Peak Capital shortly."
            : "Message received. We'll be in touch within one business day.";
          showMessage(form, 'success', successMsg);
          form.reset();
          // Hide form fields after success for the inquiry form (keep the message)
          if (formName === 'investor-inquiry') {
            Array.prototype.forEach.call(form.children, function (child) {
              if (!child.classList || !child.classList.contains('form-message')) {
                child.style.display = 'none';
              }
            });
          }
        })
        .catch(function () {
          showMessage(form, 'error', 'Something went wrong. Please email bryan@sevenpeakcapital.com directly and we\'ll take it from there.');
        })
        .finally(function () {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
          }
        });
    });
  }

  function init() {
    var forms = document.querySelectorAll('form[name="investor-inquiry"], form[name="investor-list"]');
    Array.prototype.forEach.call(forms, attach);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
