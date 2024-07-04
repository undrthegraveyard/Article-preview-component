function toggleActive() {
  const shareLinks = document.querySelector('.share-links');
  const profile = document.querySelector('.profile');
  
  if (window.innerWidth >= 700) {
    shareLinks.classList.toggle('active');
    if (shareLinks.classList.contains('active')) {
      shareLinks.style.display = 'flex';
    } else {
      shareLinks.style.display = 'none';
    }
  } else {
    profile.classList.toggle('hidden');
    shareLinks.classList.toggle('active');
    if (shareLinks.classList.contains('active')) {
      shareLinks.style.display = 'flex';
      profile.style.display = 'none';
    } else {
      shareLinks.style.display = 'none';
      profile.style.display = 'flex';
    }
  }
}