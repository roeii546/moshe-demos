import"../modulepreload-polyfill-P2Xu9kJm.js";import{A as e,C as t,D as n,E as r,F as i,I as a,L as o,M as s,N as c,P as l,R as u,S as d,T as f,_ as p,a as m,b as h,c as g,d as _,f as v,g as y,h as b,i as x,j as S,k as C,l as w,m as T,n as E,o as D,p as O,r as k,s as A,t as j,u as M,v as N,w as P,x as F,y as I,z as L}from"../app-C30nBnBc.js";var R=e=>O(`stars`,e),z=(e,t,n=`btn btn--gold`)=>`<a class="${n}" href="${N(e)}" target="_blank" rel="noopener">${g(`wa`)}<span>${t}</span></a>`,B=e=>`<article class="card">
  <a class="card__link" href="#/watch/${e.id}">
    <div class="card__tile">${I(e)}</div>
    <p class="card__brand">${a(e.brand)}</p>
    <h3 class="card__name">${a(e.name)}</h3>
    <p class="card__style">${o(C(e.style)?.he??``)}</p>
  </a>
  ${x(e,`fav card__fav`)}
</article>`,V=e=>e.map(e=>`<li>${B(e)}</li>`).join(``),H=e=>`<nav class="crumbs" aria-label="מיקום באתר">
  <a href="#/">בית</a>${e.map(([e,t])=>`<span aria-hidden="true">/</span>${t?`<a href="${t}">${a(e)}</a>`:`<span aria-current="page">${a(e)}</span>`}`).join(``)}
</nav>`,U=()=>`<section class="request" data-reveal aria-labelledby="req-t">
  <h2 class="h2" id="req-t">${i}</h2>
  <p>${l}</p>
  <a class="btn btn--gold" href="#/contact">לבקשת שעון</a>
</section>`;function W(){return`<section class="hero">
    <img class="hero__bg" src="${R(`hero-far`)}" alt="" width="768" height="1376" fetchpriority="high">
    <div class="hero__stars" aria-hidden="true"></div>
    <div class="hero__in">
      <h1 class="hero__logo" data-live-clock><span class="sr-only">Moshe · ${u}</span>${L(`full`,{decorative:!0})}</h1>
      <div class="hero__cta">
        <a class="btn btn--gold" href="#/collection">לקטלוג השעונים</a>
        <a class="btn btn--ghost" href="#/contact">לבקשת שעון</a>
      </div>
    </div>
  </section>

  <section class="sec" aria-labelledby="h-cols">
    <div class="sec__head"><h2 class="h2" id="h-cols">קטגוריות</h2></div>
    <ul class="cats" role="list">${t.map(e=>`<li>
      <a class="cat" href="#/collection/${e.slug}">
        <span class="cat__thumbs" aria-hidden="true">${P.filter(t=>t.style===e.slug).slice(0,3).map(e=>`<span class="cat__thumb">${I(e,{sizes:`4rem`})}</span>`).join(``)}</span>
        <span class="cat__name">${e.he}</span>
        <span class="cat__count">${_(r(e.slug))}</span>
        ${g(`arrow`)}
      </a></li>`).join(``)}
    </ul>
  </section>

  <section class="sec" aria-labelledby="h-feat">
    <div class="sec__head sec__head--row">
      <h2 class="h2" id="h-feat">שעונים נבחרים</h2>
      <a class="link" href="#/collection">לכל הקטלוג ${g(`arrow`)}</a>
    </div>
    <ul class="rail" role="list">${V(P)}</ul>
  </section>

  <section class="story" aria-labelledby="h-story">
    <img class="story__bg" src="${R(`blue-hour`)}" alt="" width="768" height="1376" loading="lazy" decoding="async">
    <div class="story__in" data-reveal>
      <h2 class="h2" id="h-story">${s}</h2>
      <p>${S}</p>
    </div>
  </section>

  ${U()}`}function G(e){let n=D(e),r=C(n.style),i=A(n),o=n.brands.length+(n.sort===`featured`?0:1);return`<section class="page-head">
    ${H(r?[[`הקטלוג`,`#/collection`],[r.he]]:[[`הקטלוג`]])}
    <h1 class="h1">${r?r.he:`הקטלוג`}</h1>
    ${r?``:`<p class="lead">${F}</p>`}
  </section>
  <div class="toolbar">
    <nav class="pills" aria-label="קטגוריות">
      <a class="pill" href="${k({style:``},n)}" data-replace ${n.style?``:`aria-current="page"`}>הכל</a>
      ${t.map(e=>`<a class="pill" href="${k({style:e.slug},n)}" data-replace ${n.style===e.slug?`aria-current="page"`:``}>${e.he}</a>`).join(``)}
    </nav>
    <div class="toolbar__row">
      <p class="count">${_(i.length)}</p>
      <button class="btn btn--line btn--sm" type="button" data-open="filters">${g(`filter`)}<span>סינון ומיון${o?` · ${o}`:``}</span></button>
    </div>
  </div>
  ${i.length?`<ul class="grid" role="list">${V(i)}</ul>`:`<div class="empty"><p>אין שעונים שמתאימים לסינון הזה.</p><a class="btn btn--ghost" href="${k({style:n.style})}" data-replace>ניקוי הסינון</a></div>`}
  <dialog class="sheet" id="filters" aria-labelledby="f-title">
    <form class="sheet__in" data-filter-form data-style="${n.style}">
      <div class="sheet__head"><h2 id="f-title">סינון ומיון</h2><button type="button" class="icon-btn" data-close aria-label="סגירה">${g(`close`)}</button></div>
      <fieldset><legend>מותג</legend>${h.map(e=>`<label class="check">
        <input type="checkbox" name="brand" value="${e.slug}" ${n.brands.includes(e.slug)?`checked`:``}>
        <span>${a(e.name)}</span><span class="check__n">${P.filter(t=>t.brandSlug===e.slug&&(!n.style||t.style===n.style)).length}</span>
      </label>`).join(``)}</fieldset>
      <fieldset><legend>מיון</legend>${j.map(([e,t])=>`<label class="check">
        <input type="radio" name="sort" value="${e}" ${n.sort===e?`checked`:``}><span>${t}</span></label>`).join(``)}</fieldset>
      <div class="sheet__foot">
        <a class="btn btn--ghost" href="${k({style:n.style})}" data-replace>ניקוי</a>
        <button class="btn btn--gold" type="submit">הצגת התוצאות</button>
      </div>
    </form>
  </dialog>`}function K(t){let n=e(t.params.id),r=C(n.style),i=P.filter(e=>e.id!==n.id);return`<article class="pdp">
    ${H([[`הקטלוג`,`#/collection`],[r.he,`#/collection/${r.slug}`],[n.name]])}
    <div class="pdp__grid">
      <div class="gallery" data-gallery>
        <div class="gallery__track" data-gallery-track tabindex="0" aria-label="תמונות של ${o(n.name)}">
          <figure class="gallery__slide" data-gallery-slide>
            <button class="gallery__zoom" type="button" data-zoom="${w(n)}" data-alt="${o(n.name)}" aria-label="הגדלת התמונה">${I(n,{large:!0,eager:!0})}</button>
          </figure>
          <figure class="gallery__slide gallery__slide--photo" data-gallery-slide>
            <button class="gallery__zoom" type="button" data-zoom="${M(n)}" data-alt="${o(n.name)}" aria-label="הגדלת התמונה">
              <img src="${M(n)}" width="900" height="1200" alt="${o(n.name)}, תמונה נוספת" loading="lazy" decoding="async">
            </button>
          </figure>
        </div>
        <div class="gallery__dots">
          <button type="button" data-gallery-go="0" aria-label="תמונה 1"></button>
          <button type="button" data-gallery-go="1" aria-label="תמונה 2"></button>
        </div>
      </div>
      <div class="pdp__info">
        <p class="card__brand">${a(n.brand)}</p>
        <h1 class="pdp__name">${a(n.name)}</h1>
        <div class="pdp__meta"><a class="tag" href="#/collection/${r.slug}">${r.he}</a>${E(n)}</div>
        <p class="pdp__short">${a(n.description)}</p>
        <p class="note">${d}</p>
        <div class="pdp__cta" id="pdp-cta">
          ${z(v(n),`אני מעוניין בשעון הזה`,`btn btn--gold btn--lg`)}
          ${x(n,`fav fav--lg`)}
          <button class="icon-btn icon-btn--line" type="button" data-share aria-label="שיתוף השעון">${g(`share`)}</button>
        </div>
        <dl class="specs">${n.specs.map(e=>`<div><dt>${e.label}</dt><dd>${a(e.value)}</dd></div>`).join(``)}</dl>
      </div>
    </div>
  </article>
  ${i.length?`<section class="sec" aria-labelledby="h-more">
    <div class="sec__head"><h2 class="h2" id="h-more">שעונים נוספים</h2></div>
    <ul class="rail" role="list">${V(i)}</ul>
  </section>`:``}
  <div class="sticky-cta" data-sticky-cta aria-hidden="true">
    <p class="sticky-cta__name">${a(n.name)}</p>
    ${z(v(n),`אני מעוניין בשעון הזה`,`btn btn--gold btn--sm`)}
  </div>`}function q(){return`<section class="page-head">
    ${H([[`אודות`]])}
    <h1 class="h1">אודות</h1>
  </section>
  <section class="about">
    <figure class="about__img"><img src="${R(`scene2`)}" alt="" width="768" height="1376" loading="lazy" decoding="async"></figure>
    <div class="about__text" data-reveal>
      <h2 class="h2">${s}</h2>
      <p>${S}</p>
    </div>
  </section>
  ${U()}`}function J(t){let n=e(t.query.get(`w`)??``);return`<section class="page-head">
    ${H([[`יצירת קשר`]])}
    <h1 class="h1">יצירת קשר ובקשת שעון</h1>
    <p class="lead">${i} ${l}</p>
  </section>
  <div class="contact">
    <a class="contact__wa" href="${N(f)}" target="_blank" rel="noopener">
      ${g(`wa`)}<span><strong>כתבו לנו בוואטסאפ</strong></span>
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
          ${P.map(e=>`<option ${n?.id===e.id?`selected`:``}>${o(e.name)}</option>`).join(``)}
          
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
      <button class="btn btn--gold btn--lg" type="submit">${g(`wa`)}<span>שליחה בוואטסאפ</span></button>
      <p class="form__status" data-form-status role="status"></p>
      <p class="form__fine">הטופס לא שולח דבר לשרת. הוא מכין הודעה בוואטסאפ, ורק אתם מחליטים אם לשלוח.</p>
    </form>
  </div>`}function Y(){let e=m();return`<section class="page-head">
    ${H([[`המועדפים שלי`]])}
    <h1 class="h1">המועדפים שלי</h1>
    <p class="lead">${e.length?`${_(e.length)} שמורים במכשיר הזה.`:`עוד לא שמרתם שעונים.`}</p>
  </section>
  ${e.length?`<div class="fav-actions">
      <button class="btn btn--gold" type="button" data-wa-list>${g(`wa`)}<span>שליחת הרשימה למשה</span></button>
      <button class="btn btn--ghost" type="button" data-fav-clear>${g(`trash`)}<span>ניקוי הרשימה</span></button>
    </div>
    <ul class="grid" role="list" data-results>${V(e)}</ul>`:`<div class="empty"><p>לחצו על הלב בכל שעון כדי לשמור אותו כאן.</p><a class="btn btn--gold" href="#/collection">לקטלוג</a></div>`}`}function X(e){let t=e.query.get(`q`)??``,n=T(t);return`<section class="page-head">
    ${H([[`חיפוש`]])}
    <h1 class="h1">חיפוש</h1>
    <form class="search-inline" data-search-form role="search">
      <label class="sr-only" for="s-q">חיפוש בקטלוג</label>
      ${g(`search`)}<input id="s-q" name="q" type="search" value="${o(t)}" placeholder="חיפוש לפי שם, מותג או תיאור" autocomplete="off" data-live-search>
    </form>
    <p class="count" data-count>${b(t,n.length)}</p>
  </section>
  <ul class="grid" role="list" data-results>${V(n)}</ul>`}function Z(e){let t=n(e.params.slug);return`<article class="legal">${H([[t.title]])}<h1 class="h1">${t.title}</h1><div class="legal__body">${t.body}</div></article>`}var Q=()=>`<section class="nf"><p class="eyebrow">404</p><h1 class="h1">העמוד לא נמצא</h1>
  <p>ייתכן שהקישור השתנה.</p>
  <div class="hero__cta"><a class="btn btn--gold" href="#/collection">לקטלוג</a><a class="btn btn--ghost" href="#/">לדף הבית</a></div></section>`;function $(){return`<a class="skip-link" href="#main" data-skip>דלג לתוכן</a>
  <header class="hd">
    <div class="hd__bar">
      <button class="icon-btn" type="button" data-open="menu" aria-label="פתיחת התפריט">${g(`menu`)}</button>
      <a class="hd__logo" href="#/" aria-label="Moshe, דף הבית">${L(`compact`,{decorative:!0})}</a>
      <div class="hd__end">
        <button class="icon-btn" type="button" data-open="search-dlg" aria-label="חיפוש">${g(`search`)}</button>
        <a class="icon-btn hd__fav" href="#/favorites" data-nav="favorites" aria-label="המועדפים שלי">${g(`heart`)}<span class="badge" data-fav-count hidden></span></a>
      </div>
    </div>
  </header>

  <dialog class="menu" id="menu" aria-label="תפריט">
    <div class="menu__in">
      <div class="menu__top">
        <span class="menu__mark">${L(`mark`,{decorative:!0})}</span>
        <button class="icon-btn" type="button" data-close aria-label="סגירת התפריט">${g(`close`)}</button>
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
        <ul role="list">${t.map(e=>`<li><a href="#/collection/${e.slug}">${e.he}<span>${r(e.slug)}</span></a></li>`).join(``)}</ul>
      </div>
      ${z(f,`כתבו למשה בוואטסאפ`,`btn btn--line menu__wa`)}
    </div>
  </dialog>

  <dialog class="search" id="search-dlg" aria-label="חיפוש">
    <form class="search__form" data-search-form role="search">
      <label class="sr-only" for="dq">חיפוש בקטלוג</label>
      ${g(`search`)}<input id="dq" name="q" type="search" placeholder="חיפוש לפי שם, מותג או תיאור" autocomplete="off" autofocus>
      <button class="icon-btn" type="button" data-close aria-label="סגירת החיפוש">${g(`close`)}</button>
    </form>
    <div class="search__quick">
      <p class="eyebrow">חיפוש מהיר</p>
      <div class="chips">${h.map(e=>`<a class="pill" href="${k({brands:[e.slug]})}">${a(e.name)}</a>`).join(``)}${t.map(e=>`<a class="pill" href="#/collection/${e.slug}">${e.he}</a>`).join(``)}</div>
    </div>
  </dialog>

  <main id="main" tabindex="-1"></main>

  <footer class="ft">
    <div class="ft__sign">${L(`mark`,{decorative:!0})}<p class="ft__slogan">${u}</p></div>
    <nav class="ft__nav" aria-label="ניווט תחתון">
      <a href="#/collection">קטלוג</a><a href="#/about">אודות</a><a href="#/contact">קשר</a><a href="#/favorites">מועדפים</a>
      <a href="#/page/accessibility">הצהרת נגישות</a><a href="#/page/privacy">מדיניות פרטיות</a>
    </nav>
    <p class="ft__note">${c}</p>
    <p class="ft__demo">הדגמת עיצוב · <a href="../../index.html">לכל הכיוונים</a></p>
  </footer>
  <a class="wa-float" href="${N(f)}" target="_blank" rel="noopener" aria-label="כתבו למשה בוואטסאפ">${g(`wa`)}</a>`}y({layout:$,views:{home:W,collection:G,watch:K,about:q,contact:J,favorites:Y,search:X,page:Z,notfound:Q},list:e=>V(e),afterRender(e,t){if(e.name!==`watch`)return;let n=t.querySelector(`[data-sticky-cta]`),r=t.querySelector(`#pdp-cta`);!n||!r||p(new IntersectionObserver(([e])=>{let t=!e.isIntersecting&&e.boundingClientRect.top<0;n.classList.toggle(`is-on`,t),n.setAttribute(`aria-hidden`,String(!t))})).observe(r)}});