(function () {
  "use strict";

  function initOutline() {
    const outline = document.querySelector("nav[data-saga-outline]");
    if (!outline) return;

    const links = Array.from(outline.querySelectorAll('a[href^="#"]'));
    const sections = links.reduce(function (items, link) {
      let id;
      try {
        id = decodeURIComponent(link.getAttribute("href").slice(1));
      } catch (_) {
        return items;
      }

      const target = id && document.getElementById(id);
      if (target) items.push({ link: link, target: target });
      return items;
    }, []);

    if (!sections.length) return;

    let activeLink = null;
    let framePending = false;

    function update() {
      framePending = false;
      let current = sections[0];

      // Read live positions so expanding related work cannot stale the outline.
      sections.forEach(function (section) {
        const scrollMargin = parseFloat(window.getComputedStyle(section.target).scrollMarginTop) || 0;
        const activationOffset = Math.max(110, scrollMargin) + 2;
        if (section.target.getBoundingClientRect().top <= activationOffset) {
          current = section;
        }
      });

      const root = document.documentElement;
      const pageHeight = Math.max(root.scrollHeight, document.body ? document.body.scrollHeight : 0);
      if (window.scrollY + window.innerHeight >= pageHeight - 2) {
        current = sections[sections.length - 1];
      }

      if (current.link !== activeLink) {
        activeLink = current.link;
        links.forEach(function (link) {
          const active = link === activeLink;
          link.classList.toggle("is-active", active);
          if (active) {
            link.setAttribute("aria-current", "location");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      }

      // Keep the mobile outline readable without moving the page itself.
      if (outline.scrollWidth > outline.clientWidth) {
        const outlineRect = outline.getBoundingClientRect();
        const linkRect = activeLink.getBoundingClientRect();
        const visibleLeft = outlineRect.left + outline.clientLeft;
        const visibleRight = visibleLeft + outline.clientWidth;
        if (linkRect.left < visibleLeft || linkRect.width > outline.clientWidth) {
          outline.scrollLeft += linkRect.left - visibleLeft;
        } else if (linkRect.right > visibleRight) {
          outline.scrollLeft += linkRect.right - visibleRight;
        }
      }
    }

    function scheduleUpdate() {
      if (framePending) return;
      framePending = true;
      window.requestAnimationFrame(update);
    }

    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate, { passive: true });
    window.addEventListener("hashchange", scheduleUpdate);
    window.addEventListener("load", scheduleUpdate);
    document.addEventListener("toggle", scheduleUpdate, true);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(scheduleUpdate);
    scheduleUpdate();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initOutline, { once: true });
  } else {
    initOutline();
  }
})();
