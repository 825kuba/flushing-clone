'use strict';

import '../../node_modules/bootstrap/dist/js/bootstrap.bundle';

// SCROLL TO FOR CTAs - will work for any number of btns
const addHandlerForCtaBtns = () => {
  document.addEventListener('click', e => {
    e.preventDefault();
    const btn = e.target.closest('#cta');
    if (!btn) return;
    const scrollTarget = btn.dataset.target;
    document.querySelector(`#${scrollTarget}`).scrollIntoView();
  });
};

addHandlerForCtaBtns();
