function toggleActive() {
  const shareLinks = document.querySelector('.share-links');
  const profile = document.querySelector('.profile');
  const textDown = document.querySelector('.text-down');

  shareLinks.classList.toggle('active');

  if (window.innerWidth >= 700) {
    if (shareLinks.classList.contains('active')) {
      shareLinks.style.display = 'flex';
      shareLinks.setAttribute('tabindex', '-1');
      shareLinks.focus();
    } else {
      shareLinks.style.display = 'none';
      shareLinks.removeAttribute('tabindex');
    }
  } else {
    profile.classList.toggle('hidden');
    if (shareLinks.classList.contains('active')) {
      shareLinks.style.display = 'flex';
      profile.style.display = 'none';
      textDown.style.background = "#48556a";
      shareLinks.setAttribute('tabindex', '-1');
      shareLinks.focus();
    } else {
      shareLinks.style.display = 'none';
      profile.style.display = 'flex';
      textDown.style.background = '';
      shareLinks.removeAttribute('tabindex');
    }
  }
}