(function initIntro() {
  const overlay = document.getElementById('intro-overlay');
  if (!overlay) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) {
    overlay.remove();
    return;
  }

  document.documentElement.style.overflow = 'hidden';

  setTimeout(() => overlay.classList.add('wipe'), 1700);
  setTimeout(() => {
    overlay.remove();
    document.documentElement.style.overflow = '';
  }, 1700 + 900 + 150);
})();

(function initScrollSpy() {
  const sections = Array.from(document.querySelectorAll('main .section'));
  const navLinks = Array.from(document.querySelectorAll('.nav-link'));

  const setActive = (id) => {
    navLinks.forEach((link) => {
      link.classList.toggle('active', link.dataset.section === id);
    });
  };

  // Reference line 30% down the viewport: the active section is
  // whichever one's top has most recently scrolled past it. Computed
  // directly from section positions on every scroll instead of relying
  // on IntersectionObserver enter/exit events, which only fire on state
  // changes and can miss sections taller than the trigger band.
  const updateActive = () => {
    const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
    if (atBottom) {
      setActive(sections[sections.length - 1].id);
      return;
    }

    const line = window.innerHeight * 0.3;
    let current = sections[0].id;
    sections.forEach((section) => {
      if (section.getBoundingClientRect().top <= line) {
        current = section.id;
      }
    });
    setActive(current);
  };

  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      updateActive();
      ticking = false;
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', updateActive);
  updateActive();
})();

(function initNavScroll() {
  const navLinks = Array.from(document.querySelectorAll('.nav-link'));
  const DURATION = 450;

  const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

  const scrollToY = (targetY) => {
    const startY = window.scrollY;
    const distance = targetY - startY;
    const startTime = performance.now();

    const step = (now) => {
      const progress = Math.min((now - startTime) / DURATION, 1);
      window.scrollTo({ top: startY + distance * easeInOutCubic(progress), left: 0, behavior: 'auto' });
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const target = document.getElementById(link.dataset.section);
      if (!target) return;
      e.preventDefault();

      const scrollMarginTop = parseFloat(getComputedStyle(target).scrollMarginTop) || 0;
      const targetY = target.getBoundingClientRect().top + window.scrollY - scrollMarginTop;
      const maxScrollY = document.documentElement.scrollHeight - window.innerHeight;

      scrollToY(Math.min(targetY, maxScrollY));
      history.replaceState(null, '', '#' + link.dataset.section);
    });
  });
})();
