(function(window, document) {
  'use strict';
  const fileIcons = '/assets/img/sprite-icons.svg';
  // const fileFragments = '/assets/img/sprite-fragments.svg';
  const revisionIcons = INLINE_SVG_ICONS_REVISION;
  // const revisionFragments = INLINE_SVG_FRAGMENTS_REVISION;
  if (
    !document.createElementNS ||
    !document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect
  )
    return true;

  const isLocalStorage =
    'localStorage' in window && window['localStorage'] !== null;
  const insertIT = function(data) {
    document.body.insertAdjacentHTML('afterbegin', data);
  };
  const insert = function(data) {
    if (document.body) insertIT(data);
    else document.addEventListener('DOMContentLoaded', insertIT);
  };

  if (
    isLocalStorage &&
    localStorage.getItem('inlineSVGIconsRev') == revisionIcons
    //&& localStorage.getItem('inlineSVGFragmentsRev') == revisionFragments
  ) {
    const iconsData = localStorage.getItem('inlineSVGIconsData');
    // const fragmentsData = localStorage.getItem('inlineSVGFragmentsData');
    if (iconsData) {
      insert(iconsData);
    }
    // if (fragmentsData) {
    //   insert(fragmentsData);
    // }

    return true;
  }

  try {
    const requestIcons = new XMLHttpRequest();
    // const requestFragments = new XMLHttpRequest();
    requestIcons.open('GET', fileIcons, true);
    // requestFragments.open('GET', fileFragments, true);

    requestIcons.onload = function() {
      if (requestIcons.status >= 200 && requestIcons.status < 400) {
        const dataIcons = requestIcons.responseText;
        insert(dataIcons);
        if (isLocalStorage) {
          localStorage.setItem('inlineSVGIconsData', dataIcons);
          localStorage.setItem('inlineSVGIconsRev', revisionIcons);
        }
      }
    };
    requestIcons.send();

    // requestFragments.onload = function() {
    //   if (requestFragments.status >= 200 && requestFragments.status < 400) {
    //     const dataFragments = requestFragments.responseText;
    //     insert(dataFragments);
    //     if (isLocalStorage) {
    //       localStorage.setItem('inlineSVGFragmentsData', dataFragments);
    //       localStorage.setItem('inlineSVGFragmentsRev', revisionFragments);
    //     }
    //   }
    // };
    // requestFragments.send();
  } catch (e) {
    console.log(e);
  }
})(window, document);
