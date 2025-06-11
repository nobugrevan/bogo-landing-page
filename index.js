document.querySelectorAll('input[type="radio"][name="bundle"]').forEach(radio => {
    radio.addEventListener('change', () => {
      document.querySelectorAll('.bundle-option').forEach(option => {
        option.classList.remove('selected');
        option.querySelector('.dropdowns').classList.add('hidden');
      });
  
      const selected = radio.closest('.bundle-option');
      selected.classList.add('selected');
      selected.querySelector('.dropdowns').classList.remove('hidden');
    });
  });
  