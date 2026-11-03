import"../modulepreload-polyfill-P2Xu9kJm.js";import{A as e,C as t,D as n,E as r,F as i,I as a,L as o,M as s,N as c,O as l,P as u,R as d,S as f,T as p,a as m,b as h,c as g,d as _,f as v,g as y,h as b,i as x,j as S,k as C,l as w,m as T,n as E,o as D,p as O,r as k,s as A,t as j,u as M,v as N,w as P,x as F,y as I,z as L}from"../app-C30nBnBc.js";var R=e=>O(`snow`,e),z=(e,t,n=`btn btn--primary`)=>`<a class="${n}" href="${N(e)}" target="_blank" rel="noopener">${g(`wa`)}<span>${t}</span></a>`,B=e=>o(C(e.style)?.he??``),V=e=>`<article class="card">
  <a class="card__link" href="#/watch/${e.id}">
    <div class="card__img">${I(e)}</div>
    <div class="card__body">
      <p class="card__brand">${a(e.brand)}</p>
      <h3 class="card__name">${a(e.name)}</h3>
      <p class="card__meta">${B(e)}</p>
    </div>
  </a>
  ${x(e,`fav card__fav`)}
</article>`,H=e=>`<article class="row">
  <a class="row__link" href="#/watch/${e.id}">
    <div class="row__img">${I(e,{sizes:`8rem`})}</div>
    <div class="row__body">
      <p class="card__brand">${a(e.brand)}</p>
      <h3 class="card__name">${a(e.name)}</h3>
      <ul class="row__specs" role="list">${[`לוח`,`צמיד`].map(t=>l(e,t)?`<li><span>${t}</span> ${a(l(e,t)??``)}</li>`:``).join(``)}</ul>
    </div>
  </a>
  ${x(e,`fav row__fav`)}
</article>`,U=(e,t=`grid`)=>t===`list`?`<ul class="rows" role="list" data-results>${e.map(e=>`<li>${H(e)}</li>`).join(``)}</ul>`:`<ul class="grid" role="list" data-results>${e.map(e=>`<li>${V(e)}</li>`).join(``)}</ul>`,W=e=>`<nav class="crumbs" aria-label="מיקום באתר">
  <a href="#/">בית</a>${e.map(([e,t])=>`${g(`chevron`,`crumbs__sep`)}${t?`<a href="${t}">${a(e)}</a>`:`<span aria-current="page">${a(e)}</span>`}`).join(``)}
</nav>`,G=()=>`<section class="banner">
  <img src="${R(`scene3`)}" alt="" width="768" height="1376" loading="lazy" decoding="async">
  <div class="banner__in">
    <h2 class="h2">${i}</h2>
    <p>${u}</p>
    <a class="btn btn--light" href="#/contact">לבקשת שעון</a>
  </div>
</section>`;function K(){return`<section class="hero">
    <div class="hero__media"><img src="${R(`scene2`)}" alt="" width="768" height="1376" fetchpriority="high"></div>
    <div class="hero__body">
      <div class="hero__logo" data-live-clock>${L(`mark`,{decorative:!0})}</div>
      <h1 class="h1">קטלוג השעונים</h1>
      <form class="searchbar" data-search-form role="search">
        <label class="sr-only" for="hq">חיפוש בקטלוג</label>
        ${g(`search`)}<input id="hq" name="q" type="search" placeholder="חיפוש לפי שם, מותג או תיאור" autocomplete="off">
        <button class="btn btn--primary btn--sm" type="submit">חיפוש</button>
      </form>
      <div class="chips" aria-label="מותגים">${h.map(e=>`<a class="chip" href="${k({brands:[e.slug]})}">${a(e.name)}</a>`).join(``)}</div>
    </div>
  </section>

  <section class="sec" aria-labelledby="h-cat">
    <div class="sec__head"><h2 class="h2" id="h-cat">קטגוריות</h2><a class="link" href="#/collection">כל הקטלוג ${g(`arrow`)}</a></div>
    <ul class="tiles" role="list">${t.map(e=>{let t=P.find(t=>t.style===e.slug);return`<li><a class="tile" href="#/collection/${e.slug}">
        <span class="tile__img">${t?I(t,{sizes:`30vw`}):``}</span>
        <span class="tile__name">${e.he}</span><span class="tile__count">${_(r(e.slug))}</span>
      </a></li>`}).join(``)}
      <li><a class="tile tile--all" href="#/collection"><span class="tile__name">כל הקטלוג</span><span class="tile__count">${_(P.length)}</span>${g(`arrow`)}</a></li>
    </ul>
  </section>

  <section class="sec" aria-labelledby="h-new">
    <div class="sec__head"><h2 class="h2" id="h-new">שעונים נבחרים</h2><a class="link" href="#/collection">לכל השעונים ${g(`arrow`)}</a></div>
    ${U(P.slice(0,4))}
  </section>

  <section class="sec sec--tint" aria-labelledby="h-about">
    <div class="about-strip"><h2 class="h2" id="h-about">${s}</h2><p>${S}</p></div>
  </section>
  ${G()}`}function q(e,n,i,o=0){let s=i?` data-autosubmit`:``,c=P.filter(t=>!e.style||t.style===e.style);return`<form class="filters" data-filter-form data-style="${e.style}" aria-label="סינון">
    <fieldset><legend>קטגוריה</legend>
      <label class="opt"><input type="radio" name="style" value="" ${e.style?``:`checked`}${s}><span>הכל</span><span class="opt__n">${P.length}</span></label>
      ${t.map(t=>`<label class="opt"><input type="radio" name="style" value="${t.slug}" ${e.style===t.slug?`checked`:``}${s}><span>${t.he}</span><span class="opt__n">${r(t.slug)}</span></label>`).join(``)}
    </fieldset>
    <fieldset><legend>מותג</legend>
      ${h.map(t=>`<label class="opt"><input type="checkbox" name="brand" value="${t.slug}" ${e.brands.includes(t.slug)?`checked`:``}${s}><span>${a(t.name)}</span><span class="opt__n">${c.filter(e=>e.brandSlug===t.slug).length}</span></label>`).join(``)}
    </fieldset>
    <input type="hidden" name="sort" value="${e.sort}"><input type="hidden" name="view" value="${e.view}">
    <div class="filters__foot">
      <a class="btn btn--ghost btn--sm" href="${k({view:e.view})}" data-replace id="${n}-clear">ניקוי</a>
      ${i?``:`<button class="btn btn--primary" type="submit">הצגת התוצאות${o?` (${o})`:``}</button>`}
    </div>
  </form>`}function J(e){let t=D(e),n=C(t.style),r=A(t),i=[...n?[[n.he,k({style:``},t)]]:[],...t.brands.map(e=>[h.find(t=>t.slug===e)?.name??e,k({brands:t.brands.filter(t=>t!==e)},t)])];return`<section class="page-head">
    ${W(n?[[`הקטלוג`,`#/collection`],[n.he]]:[[`הקטלוג`]])}
    <h1 class="h1">${n?n.he:`הקטלוג`}</h1>
    ${n?``:`<p class="lead">${F}</p>`}
  </section>
  <div class="catalog">
    <aside class="catalog__side" aria-label="סינון">${q(t,`side`,!0)}</aside>
    <div class="catalog__main">
      <div class="toolbar">
        <button class="btn btn--ghost btn--sm toolbar__filter" type="button" data-open="filter-dlg">${g(`filter`)}<span>סינון</span></button>
        <p class="toolbar__count" aria-live="polite">${_(r.length)}</p>
        <form class="toolbar__sort" data-filter-form data-style="${t.style}">
          ${t.brands.map(e=>`<input type="hidden" name="brand" value="${e}">`).join(``)}
          <input type="hidden" name="view" value="${t.view}">
          <label class="sr-only" for="sort">מיון</label>
          <select id="sort" name="sort" data-autosubmit>${j.map(([e,n])=>`<option value="${e}" ${t.sort===e?`selected`:``}>מיון: ${n}</option>`).join(``)}</select>
        </form>
        <div class="view" role="group" aria-label="תצוגה">
          <a class="view__btn" href="${k({view:`grid`},t)}" data-replace aria-label="תצוגת רשת" ${t.view===`grid`?`aria-current="true"`:``}>${g(`grid`)}</a>
          <a class="view__btn" href="${k({view:`list`},t)}" data-replace aria-label="תצוגת רשימה" ${t.view===`list`?`aria-current="true"`:``}>${g(`list`)}</a>
        </div>
      </div>
      ${i.length?`<div class="active" aria-label="סינון פעיל">${i.map(([e,t])=>`<a class="active__chip" href="${t}" data-replace aria-label="הסרת ${o(e)}">${a(e)} ${g(`close`)}</a>`).join(``)}</div>`:``}
      ${r.length?U(r,t.view):`<div class="empty"><p>אין שעונים שמתאימים לסינון הזה.</p><a class="btn btn--primary" href="#/collection" data-replace>לכל הקטלוג</a></div>`}
    </div>
  </div>
  <dialog class="drawer drawer--filters" id="filter-dlg" aria-labelledby="fd-t">
    <div class="drawer__in">
      <div class="drawer__head"><h2 id="fd-t">סינון</h2><button class="icon-btn" type="button" data-close aria-label="סגירה">${g(`close`)}</button></div>
      ${q(t,`dlg`,!1,r.length)}
    </div>
  </dialog>`}function Y(t){let n=e(t.params.id),r=C(n.style),i=P.filter(e=>e.id!==n.id&&(e.style===n.style||e.brandSlug===n.brandSlug)),s=i.length?i:P.filter(e=>e.id!==n.id);return`<article class="pdp">
    ${W([[`הקטלוג`,`#/collection`],[r.he,`#/collection/${r.slug}`],[n.name]])}
    <div class="pdp__grid">
      <div class="gallery" data-gallery>
        <div class="gallery__track" data-gallery-track tabindex="0" aria-label="תמונות של ${o(n.name)}">
          <figure class="gallery__slide" data-gallery-slide><button class="gallery__zoom" type="button" data-zoom="${w(n)}" data-alt="${o(n.name)}" aria-label="הגדלת התמונה">${I(n,{large:!0,eager:!0})}</button></figure>
          <figure class="gallery__slide gallery__slide--photo" data-gallery-slide><button class="gallery__zoom" type="button" data-zoom="${M(n)}" data-alt="${o(n.name)}" aria-label="הגדלת התמונה"><img src="${M(n)}" width="900" height="1200" alt="${o(n.name)}, תמונה נוספת" loading="lazy" decoding="async"></button></figure>
        </div>
        <span class="gallery__count" data-gallery-count dir="ltr">1 / 2</span>
        <div class="gallery__thumbs">
          <button type="button" data-gallery-go="0" aria-label="תמונה ראשית">${I(n,{sizes:`5rem`})}</button>
          <button type="button" data-gallery-go="1" aria-label="תמונה נוספת"><img src="${M(n)}" alt="" width="900" height="1200" loading="lazy" decoding="async"></button>
        </div>
      </div>
      <div class="pdp__info">
        <p class="card__brand">${a(n.brand)}</p>
        <h1 class="pdp__name">${a(n.name)}</h1>
        <p class="pdp__style"><a href="#/collection/${r.slug}">${r.he}</a> ${E(n)}</p>
        <p class="pdp__short">${a(n.description)}</p>
        <p class="note">${f}</p>
        <div class="pdp__cta">
          ${z(v(n),`אני מעוניין בשעון הזה`,`btn btn--primary btn--lg`)}
          <div class="pdp__sub">
            ${x(n,`btn btn--ghost fav-btn`)}
            <a class="btn btn--ghost" href="#/contact?w=${n.id}">${g(`list`)}<span>טופס פנייה</span></a>
            <button class="btn btn--ghost" type="button" data-share>${g(`share`)}<span>שיתוף</span></button>
          </div>
        </div>
        <table class="spec-table"><caption class="sr-only">מפרט השעון</caption><tbody>
          ${n.specs.map(e=>`<tr><th scope="row">${e.label}</th><td>${a(e.value)}</td></tr>`).join(``)}
        </tbody></table>
      </div>
    </div>
  </article>
  <section class="sec" aria-labelledby="h-sim">
    <div class="sec__head"><h2 class="h2" id="h-sim">${i.length?`שעונים דומים`:`שעונים נוספים`}</h2></div>
    ${U(s.slice(0,4))}
  </section>`}function X(){return`<section class="page-head">${W([[`אודות`]])}<h1 class="h1">אודות</h1></section>
  <section class="about">
    <img class="about__img" src="${R(`cornice`)}" alt="" width="768" height="1376" loading="lazy" decoding="async">
    <div class="about__body">
      <h2 class="h2">${s}</h2>
      <p>${S}</p>
    </div>
  </section>
  ${G()}`}function Z(t){let n=e(t.query.get(`w`)??``);return`<section class="page-head">${W([[`יצירת קשר`]])}<h1 class="h1">יצירת קשר ובקשת שעון</h1>
    <p class="lead">${i} ${u}</p></section>
  <div class="contact">
    <form class="form card-box" data-wa-form data-wa-intro="היי, פנייה מהאתר:" novalidate>
      <h2 class="h3">בקשת שעון</h2>
      <div class="form__row">
        <div class="field"><label for="c-name">שם מלא</label>
          <input id="c-name" name="name" required autocomplete="name" data-label="שם" data-msg="איך לפנות אליכם?" aria-describedby="e-name">
          <p class="field__err" id="e-name" data-error-for="name"></p></div>
        <div class="field"><label for="c-want">שעון מהקטלוג</label>
          <select id="c-want" name="want" data-label="שעון מהקטלוג"><option value="">בחרו שעון</option>
            ${P.map(e=>`<option ${n?.id===e.id?`selected`:``}>${o(e.name)}</option>`).join(``)}</select></div>
      </div>
      <div class="field"><label for="c-desc">תיאור השעון שמחפשים: מותג, דגם ותקציב <span class="muted">(לא חובה)</span></label>
        <input id="c-desc" name="desc" data-label="תיאור השעון"></div>
      <div class="field"><label for="c-msg">הודעה <span class="muted">(לא חובה)</span></label>
        <textarea id="c-msg" name="msg" rows="3" data-label="הודעה"></textarea></div>
      <button class="btn btn--primary btn--lg" type="submit">${g(`wa`)}<span>שליחה בוואטסאפ</span></button>
      <p class="form__status" data-form-status role="status"></p>
      <p class="note">הטופס לא שולח דבר לשרת. הוא מכין הודעה בוואטסאפ, ורק אתם מחליטים אם לשלוח.</p>
    </form>
    <aside class="contact__side">
      <a class="card-box contact__wa" href="${N(p)}" target="_blank" rel="noopener">${g(`wa`)}<span><strong>כתבו לנו בוואטסאפ</strong></span></a>
    </aside>
  </div>`}function Q(){let e=m();return`<section class="page-head">${W([[`המועדפים שלי`]])}<h1 class="h1">המועדפים שלי</h1>
    <p class="lead">${e.length?`${_(e.length)} שמורים במכשיר הזה.`:`עוד לא שמרתם שעונים.`}</p></section>
  ${e.length?`<div class="fav-bar">
      <button class="btn btn--primary" type="button" data-wa-list>${g(`wa`)}<span>שליחת הרשימה למשה</span></button>
      <button class="btn btn--ghost" type="button" data-fav-clear>${g(`trash`)}<span>ניקוי</span></button>
    </div><div class="wrap">${U(e,`list`)}</div>`:`<div class="empty"><p>לחצו על הלב בכל שעון כדי לשמור אותו כאן.</p><a class="btn btn--primary" href="#/collection">לקטלוג</a></div>`}`}function $(e){let t=e.query.get(`q`)??``,n=T(t);return`<section class="page-head">${W([[`חיפוש`]])}<h1 class="h1">חיפוש</h1>
    <form class="searchbar" data-search-form role="search"><label class="sr-only" for="s-q">חיפוש בקטלוג</label>
      ${g(`search`)}<input id="s-q" name="q" type="search" value="${o(t)}" placeholder="חיפוש לפי שם, מותג או תיאור" autocomplete="off" data-live-search></form>
    <p class="muted" data-count>${b(t,n.length)}</p></section>
  <div class="wrap">${U(n)}</div>`}var ee=e=>{let t=n(e.params.slug);return`<article class="legal">${W([[t.title]])}<h1 class="h1">${t.title}</h1><div class="legal__body">${t.body}</div></article>`},te=()=>`<section class="empty empty--page"><p class="muted">404</p><h1 class="h1">העמוד לא נמצא</h1>
  <p>ייתכן שהקישור השתנה.</p><a class="btn btn--primary" href="#/collection">לכל הקטלוג</a></section>`;function ne(){let e=[[`#/`,`home`,`בית`],[`#/collection`,`collection`,`קטלוג`],[`#/about`,`about`,`אודות`],[`#/contact`,`contact`,`קשר`]];return`<a class="skip-link" href="#main" data-skip>דלג לתוכן</a>
  <header class="hd">
    <div class="hd__util"><span>${d}</span>${z(p,`וואטסאפ`,`hd__util-wa`)}</div>
    <div class="hd__bar">
      <button class="icon-btn hd__menu" type="button" data-open="nav-dlg" aria-label="פתיחת התפריט">${g(`menu`)}</button>
      <a class="hd__logo" href="#/" aria-label="Moshe, דף הבית">${L(`compact`,{decorative:!0})}</a>
      <nav class="hd__nav" aria-label="ניווט ראשי">${e.map(([e,t,n])=>`<a href="${e}" data-nav="${t}">${n}</a>`).join(``)}</nav>
      <form class="hd__search" data-search-form role="search"><label class="sr-only" for="hd-q">חיפוש</label>${g(`search`)}<input id="hd-q" name="q" type="search" placeholder="חיפוש בקטלוג" autocomplete="off"></form>
      <div class="hd__icons">
        <a class="icon-btn hd__search-btn" href="#/search" data-nav="search" aria-label="חיפוש">${g(`search`)}</a>
        <a class="icon-btn" href="#/favorites" data-nav="favorites" aria-label="המועדפים שלי">${g(`heart`)}<span class="badge" data-fav-count hidden></span></a>
      </div>
    </div>
    <nav class="cats" aria-label="קטגוריות">
      <a href="#/collection" data-cat="">הכל</a>${t.map(e=>`<a href="#/collection/${e.slug}" data-cat="${e.slug}">${e.he}</a>`).join(``)}
    </nav>
  </header>

  <dialog class="drawer" id="nav-dlg" aria-label="תפריט">
    <div class="drawer__in">
      <div class="drawer__head"><span class="drawer__logo">${L(`compact`,{decorative:!0})}</span><button class="icon-btn" type="button" data-close aria-label="סגירת התפריט">${g(`close`)}</button></div>
      <nav class="drawer__nav" aria-label="ניווט ראשי">${e.map(([e,t,n])=>`<a href="${e}" data-nav="${t}">${n}${g(`arrow`)}</a>`).join(``)}
        <a href="#/favorites" data-nav="favorites">המועדפים <span class="badge badge--inline" data-fav-count hidden></span>${g(`arrow`)}</a></nav>
      <p class="drawer__label">קטגוריות</p>
      <ul class="drawer__cats" role="list">${t.map(e=>`<li><a href="#/collection/${e.slug}">${e.he}<span>${r(e.slug)}</span></a></li>`).join(``)}</ul>
      ${z(p,`כתבו למשה בוואטסאפ`,`btn btn--primary drawer__wa`)}
    </div>
  </dialog>

  <main id="main" tabindex="-1"></main>

  <footer class="ft">
    <div class="ft__grid">
      <div class="ft__brand"><span class="ft__logo">${L(`compact`,{decorative:!0})}</span><p>${d}</p></div>
      <div><h2 class="ft__h">קטלוג</h2><ul role="list">${t.map(e=>`<li><a href="#/collection/${e.slug}">${e.he}</a></li>`).join(``)}<li><a href="#/collection">כל השעונים</a></li></ul></div>
      <div><h2 class="ft__h">מידע</h2><ul role="list"><li><a href="#/about">אודות</a></li><li><a href="#/contact">יצירת קשר</a></li><li><a href="#/favorites">מועדפים</a></li></ul></div>
      <div><h2 class="ft__h">מדיניות</h2><ul role="list"><li><a href="#/page/accessibility">הצהרת נגישות</a></li><li><a href="#/page/privacy">מדיניות פרטיות</a></li></ul></div>
    </div>
    <div class="ft__base"><p>${c}</p><p>הדגמת עיצוב · <a href="../../index.html">לכל הכיוונים</a></p></div>
  </footer>`}y({layout:ne,views:{home:K,collection:J,watch:Y,about:X,contact:Z,favorites:Q,search:$,page:ee,notfound:te},list:(e,t)=>t===`favorites`?e.map(e=>`<li>${H(e)}</li>`).join(``):e.map(e=>`<li>${V(e)}</li>`).join(``),afterRender(t){let n=t.name===`collection`?t.params.style??``:t.name===`watch`?e(t.params.id)?.style??null:null;document.querySelectorAll(`.cats [data-cat]`).forEach(e=>{n!==null&&e.dataset.cat===n?e.setAttribute(`aria-current`,`page`):e.removeAttribute(`aria-current`)})}});