import"../modulepreload-polyfill-P2Xu9kJm.js";import{B as e,C as t,D as n,E as r,F as i,H as a,I as o,L as s,M as c,N as l,O as u,P as d,S as f,T as p,V as m,_ as h,a as g,b as _,c as v,f as y,g as b,h as x,i as S,j as C,k as w,l as T,m as E,o as D,p as O,r as k,s as A,t as j,u as M,v as N,w as P,x as F,y as I,z as L}from"../app-CoBIU5JU.js";var R=e=>x(`stars`,e),z=(e,t,n=`btn btn--gold`)=>`<a class="${n}" href="${_(e)}" target="_blank" rel="noopener">${T(`wa`)}<span>${t}</span></a>`,B=t=>`<article class="card">
  <a class="card__link" href="#/watch/${t.id}">
    <div class="card__tile">${F(t)}</div>
    <p class="card__brand">${L(t.brand)}</p>
    <h3 class="card__name">${L(t.name)}</h3>
    <p class="card__style">${e(C(t.style)?.he??``)}</p>
  </a>
  ${g(t,`fav card__fav`)}
</article>`,V=e=>e.map(e=>`<li>${B(e)}</li>`).join(``),H=e=>`<nav class="crumbs" aria-label="מיקום באתר">
  <a href="#/">בית</a>${e.map(([e,t])=>`<span aria-hidden="true">/</span>${t?`<a href="${t}">${L(e)}</a>`:`<span aria-current="page">${L(e)}</span>`}`).join(``)}
</nav>`,U=()=>`<section class="request" data-reveal aria-labelledby="req-t">
  <h2 class="h2" id="req-t">${s}</h2>
  <p>${o}</p>
  <a class="btn btn--gold" href="#/contact">לבקשת שעון</a>
</section>`;function W(){return`<section class="hero">
    <img class="hero__bg" src="${R(`hero-far`)}" alt="" width="768" height="1376" fetchpriority="high">
    <div class="hero__stars" aria-hidden="true"></div>
    <div class="hero__in">
      <h1 class="hero__logo" data-live-clock><span class="sr-only">Moshe · ${m}</span>${a(`full`,{decorative:!0})}</h1>
      <div class="hero__cta">
        <a class="btn btn--gold" href="#/collection">לקטלוג השעונים</a>
        <a class="btn btn--ghost" href="#/contact">לבקשת שעון</a>
      </div>
    </div>
  </section>

  <section class="sec" aria-labelledby="h-cols">
    <div class="sec__head"><h2 class="h2" id="h-cols">קטגוריות</h2></div>
    <ul class="cats" role="list">${p.map(e=>`<li>
      <a class="cat" href="#/collection/${e.slug}">
        <span class="cat__thumbs" aria-hidden="true">${r.filter(t=>t.style===e.slug).slice(0,3).map(e=>`<span class="cat__thumb">${F(e,{sizes:`4rem`})}</span>`).join(``)}</span>
        <span class="cat__name">${e.he}</span>
        <span class="cat__count">${O(u(e.slug))}</span>
        ${T(`arrow`)}
      </a></li>`).join(``)}
    </ul>
  </section>

  <section class="sec" aria-labelledby="h-feat">
    <div class="sec__head sec__head--row">
      <h2 class="h2" id="h-feat">שעונים נבחרים</h2>
      <a class="link" href="#/collection">לכל הקטלוג ${T(`arrow`)}</a>
    </div>
    <ul class="rail" role="list">${V(r)}</ul>
  </section>

  <section class="story" aria-labelledby="h-story">
    <img class="story__bg" src="${R(`blue-hour`)}" alt="" width="768" height="1376" loading="lazy" decoding="async">
    <div class="story__in" data-reveal>
      <h2 class="h2" id="h-story">${d}</h2>
      <p>${l}</p>
    </div>
  </section>

  ${U()}`}function G(e){let n=A(e),i=C(n.style),a=v(n),o=n.brands.length+(n.sort===`featured`?0:1);return`<section class="page-head">
    ${H(i?[[`הקטלוג`,`#/collection`],[i.he]]:[[`הקטלוג`]])}
    <h1 class="h1">${i?i.he:`הקטלוג`}</h1>
    ${i?``:`<p class="lead">${t}</p>`}
  </section>
  <div class="toolbar">
    <nav class="pills" aria-label="קטגוריות">
      <a class="pill" href="${S({style:``},n)}" data-replace ${n.style?``:`aria-current="page"`}>הכל</a>
      ${p.map(e=>`<a class="pill" href="${S({style:e.slug},n)}" data-replace ${n.style===e.slug?`aria-current="page"`:``}>${e.he}</a>`).join(``)}
    </nav>
    <div class="toolbar__row">
      <p class="count">${O(a.length)}</p>
      <button class="btn btn--line btn--sm" type="button" data-open="filters">${T(`filter`)}<span>סינון ומיון${o?` · ${o}`:``}</span></button>
    </div>
  </div>
  ${a.length?`<ul class="grid" role="list">${V(a)}</ul>`:`<div class="empty"><p>אין שעונים שמתאימים לסינון הזה.</p><a class="btn btn--ghost" href="${S({style:n.style})}" data-replace>ניקוי הסינון</a></div>`}
  <dialog class="sheet" id="filters" aria-labelledby="f-title">
    <form class="sheet__in" data-filter-form data-style="${n.style}">
      <div class="sheet__head"><h2 id="f-title">סינון ומיון</h2><button type="button" class="icon-btn" data-close aria-label="סגירה">${T(`close`)}</button></div>
      <fieldset><legend>מותג</legend>${f.map(e=>`<label class="check">
        <input type="checkbox" name="brand" value="${e.slug}" ${n.brands.includes(e.slug)?`checked`:``}>
        <span>${L(e.name)}</span><span class="check__n">${r.filter(t=>t.brandSlug===e.slug&&(!n.style||t.style===n.style)).length}</span>
      </label>`).join(``)}</fieldset>
      <fieldset><legend>מיון</legend>${j.map(([e,t])=>`<label class="check">
        <input type="radio" name="sort" value="${e}" ${n.sort===e?`checked`:``}><span>${t}</span></label>`).join(``)}</fieldset>
      <div class="sheet__foot">
        <a class="btn btn--ghost" href="${S({style:n.style})}" data-replace>ניקוי</a>
        <button class="btn btn--gold" type="submit">הצגת התוצאות</button>
      </div>
    </form>
  </dialog>`}function K(t){let n=c(t.params.id),i=C(n.style),a=r.filter(e=>e.id!==n.id);return`<article class="pdp">
    ${H([[`הקטלוג`,`#/collection`],[i.he,`#/collection/${i.slug}`],[n.name]])}
    <div class="pdp__grid">
      <div class="gallery" data-gallery>
        <div class="gallery__track" data-gallery-track tabindex="0" aria-label="תמונות של ${e(n.name)}">
          <figure class="gallery__slide" data-gallery-slide>
            <button class="gallery__zoom" type="button" data-zoom="${M(n)}" data-alt="${e(n.name)}" aria-label="הגדלת התמונה">${F(n,{large:!0,eager:!0})}</button>
          </figure>
          <figure class="gallery__slide gallery__slide--photo" data-gallery-slide>
            <button class="gallery__zoom" type="button" data-zoom="${y(n)}" data-alt="${e(n.name)}" aria-label="הגדלת התמונה">
              <img src="${y(n)}" width="900" height="1200" alt="${e(n.name)}, תמונה נוספת" loading="lazy" decoding="async">
            </button>
          </figure>
        </div>
        <div class="gallery__dots">
          <button type="button" data-gallery-go="0" aria-label="תמונה 1"></button>
          <button type="button" data-gallery-go="1" aria-label="תמונה 2"></button>
        </div>
      </div>
      <div class="pdp__info">
        <p class="card__brand">${L(n.brand)}</p>
        <h1 class="pdp__name">${L(n.name)}</h1>
        <div class="pdp__meta"><a class="tag" href="#/collection/${i.slug}">${i.he}</a>${k(n)}</div>
        <p class="pdp__short">${L(n.description)}</p>
        <p class="note">${P}</p>
        <div class="pdp__cta" id="pdp-cta">
          ${z(E(n),`אני מעוניין בשעון הזה`,`btn btn--gold btn--lg`)}
          ${g(n,`fav fav--lg`)}
          <button class="icon-btn icon-btn--line" type="button" data-share aria-label="שיתוף השעון">${T(`share`)}</button>
        </div>
        <dl class="specs">${n.specs.map(e=>`<div><dt>${e.label}</dt><dd>${L(e.value)}</dd></div>`).join(``)}</dl>
      </div>
    </div>
  </article>
  ${a.length?`<section class="sec" aria-labelledby="h-more">
    <div class="sec__head"><h2 class="h2" id="h-more">שעונים נוספים</h2></div>
    <ul class="rail" role="list">${V(a)}</ul>
  </section>`:``}
  <div class="sticky-cta" data-sticky-cta aria-hidden="true">
    <p class="sticky-cta__name">${L(n.name)}</p>
    ${z(E(n),`אני מעוניין בשעון הזה`,`btn btn--gold btn--sm`)}
  </div>`}function q(){return`<section class="page-head">
    ${H([[`אודות`]])}
    <h1 class="h1">אודות</h1>
  </section>
  <section class="about">
    <figure class="about__img"><img src="${R(`scene2`)}" alt="" width="768" height="1376" loading="lazy" decoding="async"></figure>
    <div class="about__text" data-reveal>
      <h2 class="h2">${d}</h2>
      <p>${l}</p>
    </div>
  </section>
  ${U()}`}function J(t){let i=c(t.query.get(`w`)??``);return`<section class="page-head">
    ${H([[`יצירת קשר`]])}
    <h1 class="h1">יצירת קשר ובקשת שעון</h1>
    <p class="lead">${s} ${o}</p>
  </section>
  <div class="contact">
    <a class="contact__wa" href="${_(n)}" target="_blank" rel="noopener">
      ${T(`wa`)}<span><strong>כתבו לנו בוואטסאפ</strong></span>
    </a>
    <form class="form" data-wa-form data-wa-intro="היי, פנייה מהאתר:" novalidate>
      <div class="field">
        <label for="c-name">שם מלא</label>
        <input id="c-name" name="name" required autocomplete="name" data-label="שם" data-msg="איך לפנות אליכם?" aria-describedby="e-name">
        <p class="field__err" id="e-name" data-error-for="name"></p>
      </div>
      <div class="field">
        <label for="c-want">שעון מהקטלוג</label>
        <select id="c-want" name="want" data-label="שעון מהקטלוג">
          <option value="">בחרו שעון</option>
          ${r.map(t=>`<option ${i?.id===t.id?`selected`:``}>${e(t.name)}</option>`).join(``)}
          
        </select>
      </div>
      <div class="field">
        <label for="c-desc">תיאור השעון שמחפשים: מותג, דגם ותקציב <span class="opt">(לא חובה)</span></label>
        <input id="c-desc" name="desc" data-label="תיאור השעון">
      </div>
      <div class="field">
        <label for="c-msg">הודעה <span class="opt">(לא חובה)</span></label>
        <textarea id="c-msg" name="msg" rows="3" data-label="הודעה"></textarea>
      </div>
      <button class="btn btn--gold btn--lg" type="submit">${T(`wa`)}<span>שליחה בוואטסאפ</span></button>
      <p class="form__status" data-form-status role="status"></p>
      <p class="form__fine">הטופס לא שולח דבר לשרת. הוא מכין הודעה בוואטסאפ, ורק אתם מחליטים אם לשלוח.</p>
    </form>
  </div>`}function Y(){let e=D();return`<section class="page-head">
    ${H([[`המועדפים שלי`]])}
    <h1 class="h1">המועדפים שלי</h1>
    <p class="lead">${e.length?`${O(e.length)} שמורים במכשיר הזה.`:`עוד לא שמרתם שעונים.`}</p>
  </section>
  ${e.length?`<div class="fav-actions">
      <button class="btn btn--gold" type="button" data-wa-list>${T(`wa`)}<span>שליחת הרשימה למשה</span></button>
      <button class="btn btn--ghost" type="button" data-fav-clear>${T(`trash`)}<span>ניקוי הרשימה</span></button>
    </div>
    <ul class="grid" role="list" data-results>${V(e)}</ul>`:`<div class="empty"><p>לחצו על הלב בכל שעון כדי לשמור אותו כאן.</p><a class="btn btn--gold" href="#/collection">לקטלוג</a></div>`}`}function X(t){let n=t.query.get(`q`)??``,r=b(n);return`<section class="page-head">
    ${H([[`חיפוש`]])}
    <h1 class="h1">חיפוש</h1>
    <form class="search-inline" data-search-form role="search">
      <label class="sr-only" for="s-q">חיפוש בקטלוג</label>
      ${T(`search`)}<input id="s-q" name="q" type="search" value="${e(n)}" placeholder="חיפוש לפי שם, מותג או תיאור" autocomplete="off" data-live-search>
    </form>
    <p class="count" data-count>${h(n,r.length)}</p>
  </section>
  <ul class="grid" role="list" data-results>${V(r)}</ul>`}function Z(e){let t=w(e.params.slug);return`<article class="legal">${H([[t.title]])}<h1 class="h1">${t.title}</h1><div class="legal__body">${t.body}</div></article>`}var Q=()=>`<section class="nf"><p class="eyebrow">404</p><h1 class="h1">העמוד לא נמצא</h1>
  <p>ייתכן שהקישור השתנה.</p>
  <div class="hero__cta"><a class="btn btn--gold" href="#/collection">לקטלוג</a><a class="btn btn--ghost" href="#/">לדף הבית</a></div></section>`;function $(){return`<a class="skip-link" href="#main" data-skip>דלג לתוכן</a>
  <header class="hd">
    <div class="hd__bar">
      <button class="icon-btn" type="button" data-open="menu" aria-label="פתיחת התפריט">${T(`menu`)}</button>
      <a class="hd__logo" href="#/" aria-label="Moshe, דף הבית">${a(`compact`,{decorative:!0})}</a>
      <div class="hd__end">
        <button class="icon-btn" type="button" data-open="search-dlg" aria-label="חיפוש">${T(`search`)}</button>
        <a class="icon-btn hd__fav" href="#/favorites" data-nav="favorites" aria-label="המועדפים שלי">${T(`heart`)}<span class="badge" data-fav-count hidden></span></a>
      </div>
    </div>
  </header>

  <dialog class="menu" id="menu" aria-label="תפריט">
    <div class="menu__in">
      <div class="menu__top">
        <span class="menu__mark">${a(`mark`,{decorative:!0})}</span>
        <button class="icon-btn" type="button" data-close aria-label="סגירת התפריט">${T(`close`)}</button>
      </div>
      <nav class="menu__nav" aria-label="ניווט ראשי">
        <a href="#/" data-nav="home">בית</a>
        <a href="#/collection" data-nav="collection">קטלוג</a>
        <a href="#/about" data-nav="about">אודות</a>
        <a href="#/contact" data-nav="contact">קשר</a>
        <a href="#/favorites" data-nav="favorites">המועדפים <span class="badge" data-fav-count hidden></span></a>
      </nav>
      <div class="menu__cats">
        <p class="eyebrow">קטגוריות</p>
        <ul role="list">${p.map(e=>`<li><a href="#/collection/${e.slug}">${e.he}<span>${u(e.slug)}</span></a></li>`).join(``)}</ul>
      </div>
      ${z(n,`כתבו למשה בוואטסאפ`,`btn btn--line menu__wa`)}
    </div>
  </dialog>

  <dialog class="search" id="search-dlg" aria-label="חיפוש">
    <form class="search__form" data-search-form role="search">
      <label class="sr-only" for="dq">חיפוש בקטלוג</label>
      ${T(`search`)}<input id="dq" name="q" type="search" placeholder="חיפוש לפי שם, מותג או תיאור" autocomplete="off" autofocus>
      <button class="icon-btn" type="button" data-close aria-label="סגירת החיפוש">${T(`close`)}</button>
    </form>
    <div class="search__quick">
      <p class="eyebrow">חיפוש מהיר</p>
      <div class="chips">${f.map(e=>`<a class="pill" href="${S({brands:[e.slug]})}">${L(e.name)}</a>`).join(``)}${p.map(e=>`<a class="pill" href="#/collection/${e.slug}">${e.he}</a>`).join(``)}</div>
    </div>
  </dialog>

  <main id="main" tabindex="-1"></main>

  <footer class="ft">
    <div class="ft__sign">${a(`mark`,{decorative:!0})}<p class="ft__slogan">${m}</p></div>
    <nav class="ft__nav" aria-label="ניווט תחתון">
      <a href="#/collection">קטלוג</a><a href="#/about">אודות</a><a href="#/contact">קשר</a><a href="#/favorites">מועדפים</a>
      <a href="#/page/accessibility">הצהרת נגישות</a><a href="#/page/privacy">מדיניות פרטיות</a>
    </nav>
    <p class="ft__note">${i}</p>
    <p class="ft__demo">הדגמת עיצוב · <a href="../../index.html">לכל הכיוונים</a></p>
  </footer>
  <a class="wa-float" href="${_(n)}" target="_blank" rel="noopener" aria-label="כתבו למשה בוואטסאפ">${T(`wa`)}</a>`}N({layout:$,views:{home:W,collection:G,watch:K,about:q,contact:J,favorites:Y,search:X,page:Z,notfound:Q},list:e=>V(e),afterRender(e,t){if(e.name!==`watch`)return;let n=t.querySelector(`[data-sticky-cta]`),r=t.querySelector(`#pdp-cta`);!n||!r||I(new IntersectionObserver(([e])=>{let t=!e.isIntersecting&&e.boundingClientRect.top<0;n.classList.toggle(`is-on`,t),n.setAttribute(`aria-hidden`,String(!t))})).observe(r)}});