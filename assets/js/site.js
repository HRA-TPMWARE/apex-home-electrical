
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('form[data-mailto]').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const data = new FormData(form);
      const subject = encodeURIComponent('Website quote enquiry - ' + (data.get('postcode') || 'Halifax'));
      const body = encodeURIComponent(
        'Name: ' + (data.get('name') || '') + '\n' +
        'Phone: ' + (data.get('phone') || '') + '\n' +
        'Email: ' + (data.get('email') || '') + '\n' +
        'Postcode: ' + (data.get('postcode') || '') + '\n\n' +
        'Job details:\n' + (data.get('details') || '')
      );
      window.location.href = `mailto:Richie@apexhomeelectrical.co.uk?subject=${subject}&body=${body}`;
    });
  });
});
