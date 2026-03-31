// ─── WhatsApp ────────────────────────────────────────────────
function whatsappURL(productName) {
  var msg = encodeURIComponent(
    'Hola, me interesa el reloj *' + productName + '*. ¿Podría darme más información y el precio actualizado?'
  );
  return 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + msg;
}

// ─── SVGs reutilizables ──────────────────────────────────────
var WATCH_PLACEHOLDER_SVG = '<svg class="card__placeholder-icon" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">'
  + '<circle cx="40" cy="40" r="26" stroke="#b8922a" stroke-width="1.5" opacity="0.5"/>'
  + '<circle cx="40" cy="40" r="20" stroke="#b8922a" stroke-width="1" opacity="0.3"/>'
  + '<line x1="40" y1="24" x2="40" y2="20" stroke="#b8922a" stroke-width="1.5" opacity="0.6"/>'
  + '<line x1="40" y1="60" x2="40" y2="56" stroke="#b8922a" stroke-width="1.5" opacity="0.6"/>'
  + '<line x1="24" y1="40" x2="20" y2="40" stroke="#b8922a" stroke-width="1.5" opacity="0.6"/>'
  + '<line x1="60" y1="40" x2="56" y2="40" stroke="#b8922a" stroke-width="1.5" opacity="0.6"/>'
  + '<line x1="40" y1="40" x2="40" y2="29" stroke="#b8922a" stroke-width="1.5" stroke-linecap="round" opacity="0.8"/>'
  + '<line x1="40" y1="40" x2="48" y2="40" stroke="#b8922a" stroke-width="1.5" stroke-linecap="round" opacity="0.8"/>'
  + '<circle cx="40" cy="40" r="2" fill="#b8922a" opacity="0.8"/>'
  + '<rect x="34" y="10" width="12" height="6" rx="2" fill="none" stroke="#b8922a" stroke-width="1" opacity="0.3"/>'
  + '<rect x="34" y="64" width="12" height="6" rx="2" fill="none" stroke="#b8922a" stroke-width="1" opacity="0.3"/>'
  + '</svg>';

var WA_ICON_SVG = '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">'
  + '<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>'
  + '</svg>';

// ─── Product card HTML ───────────────────────────────────────
function cardHTML(product, index) {
  var badge = product.badge
    ? '<span class="card__badge">' + product.badge + '</span>'
    : '';

  // Image: first photo with SVG fallback
  var firstImage = product.images && product.images.length ? product.images[0] : null;
  var imageHTML = '';
  if (firstImage) {
    imageHTML = '<img'
      + ' src="' + firstImage + '"'
      + ' alt="' + product.name + '"'
      + ' class="card__image"'
      + ' loading="lazy"'
      + ' onerror="this.style.display=\'none\';this.parentElement.classList.add(\'card__image-wrapper--fallback\')"'
      + '/>'
      + '<div class="card__img-fallback">' + WATCH_PLACEHOLDER_SVG + '</div>';
  } else {
    imageHTML = '<div class="card__img-fallback card__img-fallback--only">' + WATCH_PLACEHOLDER_SVG + '</div>';
  }

  var stockBadge = product.inStock !== false
    ? '<span class="stock-badge stock-badge--in">En Stock</span>'
    : '<span class="stock-badge stock-badge--out">Sin Stock</span>';

  return '<article class="product-card reveal" data-category="' + product.category + '" style="--delay:' + (index * 80) + 'ms" role="listitem">'
    + '<a href="producto.html?id=' + product.id + '" class="card__link" aria-label="Ver detalles de ' + product.name + '">'
    +   '<div class="card__image-wrapper">'
    +     imageHTML
    +     '<span class="card__category-tag">' + product.category + '</span>'
    +     badge
    +   '</div>'
    +   '<div class="card__body">'
    +     '<h3 class="card__name">' + product.name + '</h3>'
    +     '<div class="card__footer">'
    +       '<span class="card__price">' + product.price + '</span>'
    +       stockBadge
    +     '</div>'
    +   '</div>'
    + '</a>'
    + '</article>';
}

var PRODUCTS_PER_PAGE = 6;

// ─── Render products ─────────────────────────────────────────
function renderProducts(container, filter, page) {
  page = page || 1;
  var list = (!filter || filter === 'all')
    ? products
    : products.filter(function(p) { return p.category === filter; });

  var total = list.length;
  var start = (page - 1) * PRODUCTS_PER_PAGE;
  var pageItems = list.slice(start, start + PRODUCTS_PER_PAGE);

  container.innerHTML = pageItems.map(function(p, i) { return cardHTML(p, i); }).join('');
  observeReveal(container.querySelectorAll('.reveal'));
  return total;
}

// ─── Pagination ───────────────────────────────────────────────
function renderPagination(paginationEl, total, currentPage, filter, gridEl) {
  var totalPages = Math.ceil(total / PRODUCTS_PER_PAGE);

  if (totalPages <= 1) {
    paginationEl.innerHTML = '';
    return;
  }

  var html = '<nav class="pagination" aria-label="Paginación de productos">';

  html += '<button class="pagination__btn pagination__btn--arrow"'
    + (currentPage === 1 ? ' disabled aria-disabled="true"' : '')
    + ' data-page="' + (currentPage - 1) + '" aria-label="Página anterior">&#8249;</button>';

  for (var i = 1; i <= totalPages; i++) {
    html += '<button class="pagination__btn pagination__num'
      + (i === currentPage ? ' pagination__num--active' : '') + '"'
      + ' data-page="' + i + '" aria-label="Página ' + i + '"'
      + (i === currentPage ? ' aria-current="page"' : '') + '>' + i + '</button>';
  }

  html += '<button class="pagination__btn pagination__btn--arrow"'
    + (currentPage === totalPages ? ' disabled aria-disabled="true"' : '')
    + ' data-page="' + (currentPage + 1) + '" aria-label="Página siguiente">&#8250;</button>';

  html += '</nav>';
  paginationEl.innerHTML = html;

  paginationEl.querySelectorAll('.pagination__btn:not([disabled])').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var page = parseInt(btn.dataset.page);

      gridEl.style.opacity = '0';
      gridEl.style.transform = 'translateY(8px)';

      setTimeout(function() {
        var newTotal = renderProducts(gridEl, filter, page);
        renderPagination(paginationEl, newTotal, page, filter, gridEl);
        gridEl.style.opacity = '1';
        gridEl.style.transform = 'translateY(0)';

        var section = document.getElementById('coleccion');
        if (section) {
          var top = section.getBoundingClientRect().top + window.scrollY - 70;
          window.scrollTo({ top: top, behavior: 'smooth' });
        }
      }, 200);
    });
  });
}

// ─── Filter buttons ──────────────────────────────────────────
function initFilters(filtersEl, gridEl, paginationEl) {
  filtersEl.addEventListener('click', function(e) {
    var btn = e.target.closest('.filter-btn');
    if (!btn) return;

    filtersEl.querySelectorAll('.filter-btn').forEach(function(b) { b.classList.remove('active'); });
    btn.classList.add('active');

    gridEl.style.opacity = '0';
    gridEl.style.transform = 'translateY(8px)';

    setTimeout(function() {
      var filter = btn.dataset.filter;
      var total = renderProducts(gridEl, filter, 1);
      renderPagination(paginationEl, total, 1, filter, gridEl);
      gridEl.style.opacity = '1';
      gridEl.style.transform = 'translateY(0)';
    }, 200);
  });
}

// ─── Scroll reveal ───────────────────────────────────────────
function observeReveal(elements) {
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (!entry.isIntersecting) return;
      var delayStr = entry.target.style.getPropertyValue('--delay') || '0ms';
      var delay = parseInt(delayStr) || 0;
      setTimeout(function() {
        entry.target.classList.add('reveal--visible');
      }, delay);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.1 });

  elements.forEach(function(el) { observer.observe(el); });
}

function initScrollAnimations() {
  observeReveal(document.querySelectorAll('.reveal'));
}

// ─── Navbar ──────────────────────────────────────────────────
function initNavbar() {
  var navbar    = document.getElementById('navbar');
  var hamburger = document.getElementById('hamburger');
  var navLinks  = document.getElementById('navLinks');
  var links     = navLinks.querySelectorAll('.nav-link');

  window.addEventListener('scroll', function() {
    navbar.classList.toggle('navbar--scrolled', window.scrollY > 50);
  }, { passive: true });

  hamburger.addEventListener('click', function() {
    var isOpen = navLinks.classList.toggle('navbar__links--open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
    hamburger.classList.toggle('hamburger--open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  links.forEach(function(link) {
    link.addEventListener('click', function() {
      navLinks.classList.remove('navbar__links--open');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.classList.remove('hamburger--open');
      document.body.style.overflow = '';
    });
  });

  // Active link highlight
  var sections = document.querySelectorAll('section[id]');
  var linkMap = {};
  links.forEach(function(l) {
    var id = l.getAttribute('href').replace('#', '');
    linkMap[id] = l;
  });

  var sectionObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        Object.values(linkMap).forEach(function(l) { l.classList.remove('active'); });
        if (linkMap[entry.target.id]) {
          linkMap[entry.target.id].classList.add('active');
        }
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(function(s) { sectionObserver.observe(s); });
}

// ─── Smooth scroll ───────────────────────────────────────────
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      var targetSel = anchor.getAttribute('href');
      var target = document.querySelector(targetSel);
      if (!target) return;
      e.preventDefault();
      var navHeight = 70;
      var top = target.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });
}

// ─── Init ────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function() {
  initNavbar();
  initSmoothScroll();

  var grid       = document.getElementById('productsGrid');
  var filters    = document.getElementById('productFilters');
  var pagination = document.getElementById('productsPagination');
  var total      = renderProducts(grid, 'all', 1);
  renderPagination(pagination, total, 1, 'all', grid);
  initFilters(filters, grid, pagination);

  initScrollAnimations();
});
