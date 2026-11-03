import"../modulepreload-polyfill-P2Xu9kJm.js";import{A as e,C as t,D as n,E as r,M as i,N as a,O as o,P as s,S as c,T as l,_ as u,a as d,b as f,c as p,d as m,f as h,g,i as _,j as v,k as y,l as b,m as x,n as S,o as C,p as w,r as T,s as E,t as D,u as O,v as k,w as A,x as j,y as M}from"../app-AOygONBt.js";var N=e=>m(`snow`,e),P=(e,t,n=`btn btn--primary`)=>`<a class="${n}" href="${g(e)}" target="_blank" rel="noopener">${E(`wa`)}<span>${t}</span></a>`,F=e=>i(A(e.style)?.he??``),I=e=>`<article class="card">
  <a class="card__link" href="#/watch/${e.id}">
    <div class="card__img">${u(e)}</div>
    <div class="card__body">
      <p class="card__brand">${v(e.brand)}</p>
      <h3 class="card__name">${v(e.name)}</h3>
      <p class="card__meta">${F(e)}</p>
    </div>
  </a>
  ${T(e,`fav card__fav`)}
</article>`,L=e=>`<article class="row">
  <a class="row__link" href="#/watch/${e.id}">
    <div class="row__img">${u(e,{sizes:`8rem`})}</div>
    <div class="row__body">
      <p class="card__brand">${v(e.brand)}</p>
      <h3 class="card__name">${v(e.name)}</h3>
      <ul class="row__specs" role="list">${e.details.slice(0,3).map(([e,t])=>`<li><span>${e}</span> ${v(t)}</li>`).join(``)}</ul>
    </div>
  </a>
  ${T(e,`fav row__fav`)}
</article>`,R=(e,t=`grid`)=>t===`list`?`<ul class="rows" role="list" data-results>${e.map(e=>`<li>${L(e)}</li>`).join(``)}</ul>`:`<ul class="grid" role="list" data-results>${e.map(e=>`<li>${I(e)}</li>`).join(``)}</ul>`,z=e=>`<nav class="crumbs" aria-label="מיקום באתר">
  <a href="#/">בית</a>${e.map(([e,t])=>`${E(`chevron`,`crumbs__sep`)}${t?`<a href="${t}">${v(e)}</a>`:`<span aria-current="page">${v(e)}</span>`}`).join(``)}
</nav>`,B=()=>`<section class="banner">
  <img src="${N(`scene3`)}" alt="" width="768" height="1376" loading="lazy" decoding="async">
  <div class="banner__in">
    <h2 class="h2">${e}</h2>
    <p>${y}</p>
    <a class="btn btn--light" href="#/contact">לבקשת שעון</a>
  </div>
</section>`;function V(){return`<section class="hero">
    <div class="hero__media"><img src="${N(`scene2`)}" alt="" width="768" height="1376" fetchpriority="high"></div>
    <div class="hero__body">
      <div class="hero__logo" data-live-clock>${s(`mark`,{decorative:!0})}</div>
      <h1 class="h1">קטלוג השעונים</h1>
      <form class="searchbar" data-search-form role="search">
        <label class="sr-only" for="hq">חיפוש בקטלוג</label>
        ${E(`search`)}<input id="hq" name="q" type="search" placeholder="חיפוש לפי דגם, מותג או סגנון" autocomplete="off">
        <button class="btn btn--primary btn--sm" type="submit">חיפוש</button>
      </form>
      <div class="chips" aria-label="מותגים">${M.map(e=>`<a class="chip" href="${S({brands:[e.slug]})}">${v(e.name)}</a>`).join(``)}</div>
    </div>
  </section>

  <section class="sec" aria-labelledby="h-cat">
    <div class="sec__head"><h2 class="h2" id="h-cat">קטגוריות</h2><a class="link" href="#/collection">כל הקטלוג ${E(`arrow`)}</a></div>
    <ul class="tiles" role="list">${f.map(e=>{let t=j.find(t=>t.style===e.slug);return`<li><a class="tile" href="#/collection/${e.slug}">
        <span class="tile__img">${t?u(t,{sizes:`30vw`}):``}</span>
        <span class="tile__name">${e.he}</span><span class="tile__count">${b(c(e.slug))}</span>
      </a></li>`}).join(``)}
      <li><a class="tile tile--all" href="#/collection"><span class="tile__name">כל הקטלוג</span><span class="tile__count">${b(j.length)}</span>${E(`arrow`)}</a></li>
    </ul>
  </section>

  <section class="sec" aria-labelledby="h-new">
    <div class="sec__head"><h2 class="h2" id="h-new">שעונים נבחרים</h2><a class="link" href="#/collection">לכל השעונים ${E(`arrow`)}</a></div>
    ${R(j.slice(0,4))}
  </section>

  <section class="sec sec--tint" aria-labelledby="h-about">
    <div class="about-strip"><h2 class="h2" id="h-about">${n}</h2><p>${r}</p></div>
  </section>
  ${B()}`}function H(e,t,n,r=0){let i=n?` data-autosubmit`:``,a=j.filter(t=>!e.style||t.style===e.style);return`<form class="filters" data-filter-form data-style="${e.style}" aria-label="סינון">
    <fieldset><legend>קטגוריה</legend>
      <label class="opt"><input type="radio" name="style" value="" ${e.style?``:`checked`}${i}><span>הכל</span><span class="opt__n">${j.length}</span></label>
      ${f.map(t=>`<label class="opt"><input type="radio" name="style" value="${t.slug}" ${e.style===t.slug?`checked`:``}${i}><span>${t.he}</span><span class="opt__n">${c(t.slug)}</span></label>`).join(``)}
    </fieldset>
    <fieldset><legend>מותג</legend>
      ${M.map(t=>`<label class="opt"><input type="checkbox" name="brand" value="${t.slug}" ${e.brands.includes(t.slug)?`checked`:``}${i}><span>${v(t.name)}</span><span class="opt__n">${a.filter(e=>e.brandSlug===t.slug).length}</span></label>`).join(``)}
    </fieldset>
    <input type="hidden" name="sort" value="${e.sort}"><input type="hidden" name="view" value="${e.view}">
    <div class="filters__foot">
      <a class="btn btn--ghost btn--sm" href="${S({view:e.view})}" data-replace id="${t}-clear">ניקוי</a>
      ${n?``:`<button class="btn btn--primary" type="submit">הצגת התוצאות${r?` (${r})`:``}</button>`}
    </div>
  </form>`}function U(e){let t=d(e),n=A(t.style),r=C(t),a=[...n?[[n.he,S({style:``},t)]]:[],...t.brands.map(e=>[M.find(t=>t.slug===e)?.name??e,S({brands:t.brands.filter(t=>t!==e)},t)])];return`<section class="page-head">
    ${z(n?[[`הקטלוג`,`#/collection`],[n.he]]:[[`הקטלוג`]])}
    <h1 class="h1">${n?n.he:`קטלוג השעונים`}</h1>
  </section>
  <div class="catalog">
    <aside class="catalog__side" aria-label="סינון">${H(t,`side`,!0)}</aside>
    <div class="catalog__main">
      <div class="toolbar">
        <button class="btn btn--ghost btn--sm toolbar__filter" type="button" data-open="filter-dlg">${E(`filter`)}<span>סינון</span></button>
        <p class="toolbar__count" aria-live="polite">${b(r.length)}</p>
        <form class="toolbar__sort" data-filter-form data-style="${t.style}">
          ${t.brands.map(e=>`<input type="hidden" name="brand" value="${e}">`).join(``)}
          <input type="hidden" name="view" value="${t.view}">
          <label class="sr-only" for="sort">מיון</label>
          <select id="sort" name="sort" data-autosubmit>${D.map(([e,n])=>`<option value="${e}" ${t.sort===e?`selected`:``}>מיון: ${n}</option>`).join(``)}</select>
        </form>
        <div class="view" role="group" aria-label="תצוגה">
          <a class="view__btn" href="${S({view:`grid`},t)}" data-replace aria-label="תצוגת רשת" ${t.view===`grid`?`aria-current="true"`:``}>${E(`grid`)}</a>
          <a class="view__btn" href="${S({view:`list`},t)}" data-replace aria-label="תצוגת רשימה" ${t.view===`list`?`aria-current="true"`:``}>${E(`list`)}</a>
        </div>
      </div>
      ${a.length?`<div class="active" aria-label="סינון פעיל">${a.map(([e,t])=>`<a class="active__chip" href="${t}" data-replace aria-label="הסרת ${i(e)}">${v(e)} ${E(`close`)}</a>`).join(``)}</div>`:``}
      ${r.length?R(r,t.view):`<div class="empty"><p>אין שעונים שמתאימים לסינון הזה.</p><a class="btn btn--primary" href="#/collection" data-replace>לכל הקטלוג</a></div>`}
    </div>
  </div>
  <dialog class="drawer drawer--filters" id="filter-dlg" aria-labelledby="fd-t">
    <div class="drawer__in">
      <div class="drawer__head"><h2 id="fd-t">סינון</h2><button class="icon-btn" type="button" data-close aria-label="סגירה">${E(`close`)}</button></div>
      ${H(t,`dlg`,!1,r.length)}
    </div>
  </dialog>`}var W={לוח:`watch`,תצוגה:`search`};function G(e){let t=l(e.params.id),n=A(t.style),r=j.filter(e=>e.id!==t.id&&(e.style===t.style||e.brandSlug===t.brandSlug)),a=r.length?r:j.filter(e=>e.id!==t.id);return`<article class="pdp">
    ${z([[`הקטלוג`,`#/collection`],[n.he,`#/collection/${n.slug}`],[t.name]])}
    <div class="pdp__grid">
      <div class="gallery" data-gallery>
        <div class="gallery__track" data-gallery-track tabindex="0" aria-label="תמונות של ${i(t.name)}">
          <figure class="gallery__slide" data-gallery-slide><button class="gallery__zoom" type="button" data-zoom="${p(t)}" data-alt="${i(t.name)}" aria-label="הגדלת התמונה">${u(t,{large:!0,eager:!0})}</button></figure>
          <figure class="gallery__slide" data-gallery-slide><button class="gallery__zoom" type="button" data-zoom="${k(t)}" data-alt="${i(t.name)}, תקריב" aria-label="הגדלת התקריב"><img src="${k(t)}" width="1000" height="1000" alt="${i(t.name)}, תקריב של הלוח" loading="lazy" decoding="async"></button></figure>
        </div>
        <span class="gallery__count" data-gallery-count dir="ltr">1 / 2</span>
        <div class="gallery__thumbs">
          <button type="button" data-gallery-go="0" aria-label="תמונה ראשית">${u(t,{sizes:`5rem`})}</button>
          <button type="button" data-gallery-go="1" aria-label="תקריב"><img src="${k(t)}" alt="" width="1000" height="1000" loading="lazy" decoding="async"></button>
        </div>
      </div>
      <div class="pdp__info">
        <p class="card__brand">${v(t.brand)}</p>
        <h1 class="pdp__name">${v(t.name)}</h1>
        <p class="pdp__style"><a href="#/collection/${n.slug}">${n.he}</a></p>
        <p class="pdp__short">${v(t.short)}</p>
        <ul class="spec-tiles" role="list">${t.details.map(([e,t])=>`<li>${E(W[e]??`watch`)}<span class="spec-tiles__k">${e}</span><span class="spec-tiles__v">${v(t)}</span></li>`).join(``)}</ul>
        <div class="pdp__cta">
          ${P(O(t),`לבקשת השעון בוואטסאפ`,`btn btn--primary btn--lg`)}
          <div class="pdp__sub">
            ${T(t,`btn btn--ghost fav-btn`)}
            <a class="btn btn--ghost" href="#/contact?w=${t.id}">${E(`list`)}<span>טופס פנייה</span></a>
            <button class="btn btn--ghost" type="button" data-share>${E(`share`)}<span>שיתוף</span></button>
          </div>
        </div>
      </div>
    </div>
  </article>
  <section class="sec" aria-labelledby="h-sim">
    <div class="sec__head"><h2 class="h2" id="h-sim">${r.length?`שעונים דומים`:`שעונים נוספים`}</h2></div>
    ${R(a.slice(0,4))}
  </section>`}function K(){return`<section class="page-head">${z([[`אודות`]])}<h1 class="h1">אודות</h1></section>
  <section class="about">
    <img class="about__img" src="${N(`cornice`)}" alt="" width="768" height="1376" loading="lazy" decoding="async">
    <div class="about__body">
      <h2 class="h2">${n}</h2>
      <p>${r}</p>
    </div>
  </section>
  ${B()}`}function q(t){let n=l(t.query.get(`w`)??``);return`<section class="page-head">${z([[`יצירת קשר`]])}<h1 class="h1">יצירת קשר</h1>
    <p class="lead">${e} ${y}</p></section>
  <div class="contact">
    <form class="form card-box" data-wa-form data-wa-intro="היי משה, הגעתי מהאתר." novalidate>
      <h2 class="h3">בקשת שעון</h2>
      <div class="form__row">
        <div class="field"><label for="c-name">שם</label>
          <input id="c-name" name="name" required autocomplete="name" data-label="שם" data-msg="איך לפנות אליכם?" aria-describedby="e-name">
          <p class="field__err" id="e-name" data-error-for="name"></p></div>
        <div class="field"><label for="c-want">איזה שעון אתם מחפשים</label>
          <select id="c-want" name="want" data-label="שעון מבוקש"><option value="">עוד לא בחרתי</option>
            ${j.map(e=>`<option ${n?.id===e.id?`selected`:``}>${i(e.name)}</option>`).join(``)}<option>דגם שלא מופיע בקטלוג</option></select></div>
      </div>
      <div class="field"><label for="c-msg">פרטים נוספים <span class="muted">(לא חובה)</span></label>
        <textarea id="c-msg" name="msg" rows="3" data-label="פרטים"></textarea></div>
      <button class="btn btn--primary btn--lg" type="submit">${E(`wa`)}<span>שליחה בוואטסאפ</span></button>
      <p class="form__status" data-form-status role="status"></p>
      <p class="note">הטופס לא שולח דבר לשרת. הוא מכין הודעה בוואטסאפ, ורק אתם מחליטים אם לשלוח.</p>
    </form>
    <aside class="contact__side">
      <a class="card-box contact__wa" href="${g(`היי משה, `)}" target="_blank" rel="noopener">${E(`wa`)}<span><strong>וואטסאפ ישיר</strong><span>הדרך הכי מהירה להגיע למשה</span></span></a>
    </aside>
  </div>`}function J(){let e=_();return`<section class="page-head">${z([[`המועדפים שלי`]])}<h1 class="h1">המועדפים שלי</h1>
    <p class="lead">${e.length?`${b(e.length)} שמורים במכשיר הזה.`:`עוד לא שמרתם שעונים.`}</p></section>
  ${e.length?`<div class="fav-bar">
      <button class="btn btn--primary" type="button" data-wa-list>${E(`wa`)}<span>שליחת הרשימה למשה</span></button>
      <button class="btn btn--ghost" type="button" data-fav-clear>${E(`trash`)}<span>ניקוי</span></button>
    </div><div class="wrap">${R(e,`list`)}</div>`:`<div class="empty"><p>לחצו על הלב בכל שעון כדי לשמור אותו כאן.</p><a class="btn btn--primary" href="#/collection">לקטלוג</a></div>`}`}function Y(e){let t=e.query.get(`q`)??``,n=h(t);return`<section class="page-head">${z([[`חיפוש`]])}<h1 class="h1">חיפוש</h1>
    <form class="searchbar" data-search-form role="search"><label class="sr-only" for="s-q">חיפוש בקטלוג</label>
      ${E(`search`)}<input id="s-q" name="q" type="search" value="${i(t)}" placeholder="דגם, מותג או סגנון" autocomplete="off" data-live-search></form>
    <p class="muted" data-count>${w(t,n.length)}</p></section>
  <div class="wrap">${R(n)}</div>`}var X=e=>{let n=t(e.params.slug);return`<article class="legal">${z([[n.title]])}<h1 class="h1">${n.title}</h1><div class="legal__body">${n.body}</div></article>`},Z=()=>`<section class="empty empty--page"><p class="muted">404</p><h1 class="h1">העמוד לא נמצא</h1>
  <p>ייתכן שהקישור השתנה.</p><a class="btn btn--primary" href="#/collection">לכל הקטלוג</a></section>`;function Q(){let e=[[`#/`,`home`,`בית`],[`#/collection`,`collection`,`קטלוג`],[`#/about`,`about`,`אודות`],[`#/contact`,`contact`,`קשר`]];return`<a class="skip-link" href="#main" data-skip>דלג לתוכן</a>
  <header class="hd">
    <div class="hd__util"><span>${a}</span>${P(`היי משה, `,`וואטסאפ`,`hd__util-wa`)}</div>
    <div class="hd__bar">
      <button class="icon-btn hd__menu" type="button" data-open="nav-dlg" aria-label="פתיחת התפריט">${E(`menu`)}</button>
      <a class="hd__logo" href="#/" aria-label="Moshe, דף הבית">${s(`compact`,{decorative:!0})}</a>
      <nav class="hd__nav" aria-label="ניווט ראשי">${e.map(([e,t,n])=>`<a href="${e}" data-nav="${t}">${n}</a>`).join(``)}</nav>
      <form class="hd__search" data-search-form role="search"><label class="sr-only" for="hd-q">חיפוש</label>${E(`search`)}<input id="hd-q" name="q" type="search" placeholder="חיפוש בקטלוג" autocomplete="off"></form>
      <div class="hd__icons">
        <a class="icon-btn hd__search-btn" href="#/search" data-nav="search" aria-label="חיפוש">${E(`search`)}</a>
        <a class="icon-btn" href="#/favorites" data-nav="favorites" aria-label="המועדפים שלי">${E(`heart`)}<span class="badge" data-fav-count hidden></span></a>
      </div>
    </div>
    <nav class="cats" aria-label="קטגוריות">
      <a href="#/collection" data-cat="">הכל</a>${f.map(e=>`<a href="#/collection/${e.slug}" data-cat="${e.slug}">${e.he}</a>`).join(``)}
    </nav>
  </header>

  <dialog class="drawer" id="nav-dlg" aria-label="תפריט">
    <div class="drawer__in">
      <div class="drawer__head"><span class="drawer__logo">${s(`compact`,{decorative:!0})}</span><button class="icon-btn" type="button" data-close aria-label="סגירת התפריט">${E(`close`)}</button></div>
      <nav class="drawer__nav" aria-label="ניווט ראשי">${e.map(([e,t,n])=>`<a href="${e}" data-nav="${t}">${n}${E(`arrow`)}</a>`).join(``)}
        <a href="#/favorites" data-nav="favorites">המועדפים <span class="badge badge--inline" data-fav-count hidden></span>${E(`arrow`)}</a></nav>
      <p class="drawer__label">קטגוריות</p>
      <ul class="drawer__cats" role="list">${f.map(e=>`<li><a href="#/collection/${e.slug}">${e.he}<span>${c(e.slug)}</span></a></li>`).join(``)}</ul>
      ${P(`היי משה, `,`כתבו למשה בוואטסאפ`,`btn btn--primary drawer__wa`)}
    </div>
  </dialog>

  <main id="main" tabindex="-1"></main>

  <footer class="ft">
    <div class="ft__grid">
      <div class="ft__brand"><span class="ft__logo">${s(`compact`,{decorative:!0})}</span><p>${a}</p></div>
      <div><h2 class="ft__h">קטלוג</h2><ul role="list">${f.map(e=>`<li><a href="#/collection/${e.slug}">${e.he}</a></li>`).join(``)}<li><a href="#/collection">כל השעונים</a></li></ul></div>
      <div><h2 class="ft__h">מידע</h2><ul role="list"><li><a href="#/about">אודות</a></li><li><a href="#/contact">יצירת קשר</a></li><li><a href="#/favorites">מועדפים</a></li></ul></div>
      <div><h2 class="ft__h">מדיניות</h2><ul role="list"><li><a href="#/page/accessibility">הצהרת נגישות</a></li><li><a href="#/page/privacy">מדיניות פרטיות</a></li></ul></div>
    </div>
    <div class="ft__base"><p>${o}</p><p>הדגמת עיצוב · <a href="../../index.html">לכל הכיוונים</a></p></div>
  </footer>`}x({layout:Q,views:{home:V,collection:U,watch:G,about:K,contact:q,favorites:J,search:Y,page:X,notfound:Z},list:(e,t)=>t===`favorites`?e.map(e=>`<li>${L(e)}</li>`).join(``):e.map(e=>`<li>${I(e)}</li>`).join(``),afterRender(e){let t=e.name===`collection`?e.params.style??``:e.name===`watch`?l(e.params.id)?.style??null:null;document.querySelectorAll(`.cats [data-cat]`).forEach(e=>{t!==null&&e.dataset.cat===t?e.setAttribute(`aria-current`,`page`):e.removeAttribute(`aria-current`)})}});