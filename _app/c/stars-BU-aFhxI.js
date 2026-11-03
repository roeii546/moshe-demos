import"../modulepreload-polyfill-P2Xu9kJm.js";import{A as e,C as t,D as n,E as r,M as i,N as a,O as o,P as s,S as c,T as l,_ as u,a as d,b as f,c as p,d as m,f as h,g,h as _,i as v,j as y,k as b,l as x,m as S,n as C,o as w,p as T,r as E,s as D,t as O,u as k,v as A,w as j,x as M,y as N}from"../app-AOygONBt.js";var P=e=>m(`stars`,e),F=[`I`,`II`,`III`,`IV`,`V`,`VI`,`VII`,`VIII`,`IX`,`X`],I=(e,t,n=`btn btn--gold`)=>`<a class="${n}" href="${g(e)}" target="_blank" rel="noopener">${D(`wa`)}<span>${t}</span></a>`,L=e=>`<article class="card">
  <a class="card__link" href="#/watch/${e.id}">
    <div class="card__tile">${u(e)}</div>
    <p class="card__brand">${y(e.brand)}</p>
    <h3 class="card__name">${y(e.name)}</h3>
    <p class="card__style">${i(j(e.style)?.he??``)}</p>
  </a>
  ${E(e,`fav card__fav`)}
</article>`,R=e=>e.map(e=>`<li>${L(e)}</li>`).join(``),z=e=>`<nav class="crumbs" aria-label="מיקום באתר">
  <a href="#/">בית</a>${e.map(([e,t])=>`<span aria-hidden="true">/</span>${t?`<a href="${t}">${y(e)}</a>`:`<span aria-current="page">${y(e)}</span>`}`).join(``)}
</nav>`,B=()=>`<section class="request" data-reveal aria-labelledby="req-t">
  <h2 class="h2" id="req-t">${e}</h2>
  <p>${b}</p>
  <a class="btn btn--gold" href="#/contact">לבקשת שעון</a>
</section>`;function V(){let e=[`scene2`,`scene3`,`blue-hour`];return`<section class="hero">
    <img class="hero__bg" src="${P(`hero-far`)}" alt="" width="768" height="1376" fetchpriority="high">
    <div class="hero__stars" aria-hidden="true"></div>
    <div class="hero__in">
      <h1 class="hero__logo" data-live-clock><span class="sr-only">Moshe · ${a}</span>${s(`full`,{decorative:!0})}</h1>
      <div class="hero__cta">
        <a class="btn btn--gold" href="#/collection">לקטלוג השעונים</a>
        <a class="btn btn--ghost" href="#/contact">לבקשת שעון</a>
      </div>
    </div>
  </section>

  <section class="sec" aria-labelledby="h-cols">
    <div class="sec__head"><h2 class="h2" id="h-cols">קטגוריות</h2></div>
    <ul class="rail rail--cols" role="list">${f.map((t,n)=>`<li>
      <a class="col" href="#/collection/${t.slug}">
        <img src="${P(e[n%e.length])}" alt="" width="768" height="1376" loading="lazy" decoding="async">
        <span class="col__in"><span class="col__n">${F[n]}</span><span class="col__name">${t.he}</span><span class="col__count">${x(c(t.slug))}</span></span>
      </a></li>`).join(``)}
    </ul>
  </section>

  <section class="sec" aria-labelledby="h-feat">
    <div class="sec__head sec__head--row">
      <h2 class="h2" id="h-feat">שעונים נבחרים</h2>
      <a class="link" href="#/collection">לכל הקטלוג ${D(`arrow`)}</a>
    </div>
    <ul class="rail" role="list">${R(M)}</ul>
  </section>

  <section class="story" aria-labelledby="h-story">
    <img class="story__bg" src="${P(`blue-hour`)}" alt="" width="768" height="1376" loading="lazy" decoding="async">
    <div class="story__in" data-reveal>
      <h2 class="h2" id="h-story">${n}</h2>
      <p>${r}</p>
    </div>
  </section>

  ${B()}`}function H(e){let t=d(e),n=j(t.style),r=w(t),i=t.brands.length+(t.sort===`featured`?0:1);return`<section class="page-head">
    ${z(n?[[`הקטלוג`,`#/collection`],[n.he]]:[[`הקטלוג`]])}
    <h1 class="h1">${n?n.he:`קטלוג השעונים`}</h1>
  </section>
  <div class="toolbar">
    <nav class="pills" aria-label="קטגוריות">
      <a class="pill" href="${C({style:``},t)}" data-replace ${t.style?``:`aria-current="page"`}>הכל</a>
      ${f.map(e=>`<a class="pill" href="${C({style:e.slug},t)}" data-replace ${t.style===e.slug?`aria-current="page"`:``}>${e.he}</a>`).join(``)}
    </nav>
    <div class="toolbar__row">
      <p class="count">${x(r.length)}</p>
      <button class="btn btn--line btn--sm" type="button" data-open="filters">${D(`filter`)}<span>סינון ומיון${i?` · ${i}`:``}</span></button>
    </div>
  </div>
  ${r.length?`<ul class="grid" role="list">${R(r)}</ul>`:`<div class="empty"><p>אין שעונים שמתאימים לסינון הזה.</p><a class="btn btn--ghost" href="${C({style:t.style})}" data-replace>ניקוי הסינון</a></div>`}
  <dialog class="sheet" id="filters" aria-labelledby="f-title">
    <form class="sheet__in" data-filter-form data-style="${t.style}">
      <div class="sheet__head"><h2 id="f-title">סינון ומיון</h2><button type="button" class="icon-btn" data-close aria-label="סגירה">${D(`close`)}</button></div>
      <fieldset><legend>מותג</legend>${N.map(e=>`<label class="check">
        <input type="checkbox" name="brand" value="${e.slug}" ${t.brands.includes(e.slug)?`checked`:``}>
        <span>${y(e.name)}</span><span class="check__n">${M.filter(n=>n.brandSlug===e.slug&&(!t.style||n.style===t.style)).length}</span>
      </label>`).join(``)}</fieldset>
      <fieldset><legend>מיון</legend>${O.map(([e,n])=>`<label class="check">
        <input type="radio" name="sort" value="${e}" ${t.sort===e?`checked`:``}><span>${n}</span></label>`).join(``)}</fieldset>
      <div class="sheet__foot">
        <a class="btn btn--ghost" href="${C({style:t.style})}" data-replace>ניקוי</a>
        <button class="btn btn--gold" type="submit">הצגת התוצאות</button>
      </div>
    </form>
  </dialog>`}function U(e){let t=l(e.params.id),n=j(t.style),r=M.filter(e=>e.id!==t.id);return`<article class="pdp">
    ${z([[`הקטלוג`,`#/collection`],[n.he,`#/collection/${n.slug}`],[t.name]])}
    <div class="pdp__grid">
      <div class="gallery" data-gallery>
        <div class="gallery__track" data-gallery-track tabindex="0" aria-label="תמונות של ${i(t.name)}">
          <figure class="gallery__slide" data-gallery-slide>
            <button class="gallery__zoom" type="button" data-zoom="${p(t)}" data-alt="${i(t.name)}" aria-label="הגדלת התמונה">${u(t,{large:!0,eager:!0})}</button>
          </figure>
          <figure class="gallery__slide" data-gallery-slide>
            <button class="gallery__zoom" type="button" data-zoom="${A(t)}" data-alt="${i(t.name)}, תקריב" aria-label="הגדלת התקריב">
              <img src="${A(t)}" width="1000" height="1000" alt="${i(t.name)}, תקריב של הלוח" loading="lazy" decoding="async">
            </button>
          </figure>
        </div>
        <div class="gallery__dots">
          <button type="button" data-gallery-go="0" aria-label="תמונה 1"></button>
          <button type="button" data-gallery-go="1" aria-label="תמונה 2: תקריב"></button>
        </div>
      </div>
      <div class="pdp__info">
        <p class="card__brand">${y(t.brand)}</p>
        <h1 class="pdp__name">${y(t.name)}</h1>
        <a class="tag" href="#/collection/${n.slug}">${n.he}</a>
        <p class="pdp__short">${y(t.short)}</p>
        <div class="pdp__cta" id="pdp-cta">
          ${I(k(t),`לבקשת השעון`,`btn btn--gold btn--lg`)}
          ${E(t,`fav fav--lg`)}
          <button class="icon-btn icon-btn--line" type="button" data-share aria-label="שיתוף השעון">${D(`share`)}</button>
        </div>
        <dl class="specs">${t.details.map(([e,t])=>`<div><dt>${e}</dt><dd>${y(t)}</dd></div>`).join(``)}</dl>
      </div>
    </div>
  </article>
  ${r.length?`<section class="sec" aria-labelledby="h-more">
    <div class="sec__head"><h2 class="h2" id="h-more">שעונים נוספים</h2></div>
    <ul class="rail" role="list">${R(r)}</ul>
  </section>`:``}
  <div class="sticky-cta" data-sticky-cta aria-hidden="true">
    <p class="sticky-cta__name">${y(t.name)}</p>
    ${I(k(t),`לבקשת השעון`,`btn btn--gold btn--sm`)}
  </div>`}function W(){return`<section class="page-head">
    ${z([[`אודות`]])}
    <h1 class="h1">אודות</h1>
  </section>
  <section class="about">
    <figure class="about__img"><img src="${P(`scene2`)}" alt="" width="768" height="1376" loading="lazy" decoding="async"></figure>
    <div class="about__text" data-reveal>
      <h2 class="h2">${n}</h2>
      <p>${r}</p>
    </div>
  </section>
  ${B()}`}function G(t){let n=l(t.query.get(`w`)??``);return`<section class="page-head">
    ${z([[`יצירת קשר`]])}
    <h1 class="h1">יצירת קשר</h1>
    <p class="lead">${e} ${b}</p>
  </section>
  <div class="contact">
    <a class="contact__wa" href="${g(`היי משה, `)}" target="_blank" rel="noopener">
      ${D(`wa`)}<span><strong>וואטסאפ</strong><span>הדרך הכי מהירה להגיע למשה</span></span>
    </a>
    <form class="form" data-wa-form data-wa-intro="היי משה, הגעתי מהאתר." novalidate>
      <div class="field">
        <label for="c-name">שם</label>
        <input id="c-name" name="name" required autocomplete="name" data-label="שם" data-msg="איך לפנות אליכם?" aria-describedby="e-name">
        <p class="field__err" id="e-name" data-error-for="name"></p>
      </div>
      <div class="field">
        <label for="c-want">איזה שעון אתם מחפשים</label>
        <select id="c-want" name="want" data-label="שעון מבוקש">
          <option value="">עוד לא בחרתי</option>
          ${M.map(e=>`<option ${n?.id===e.id?`selected`:``}>${i(e.name)}</option>`).join(``)}
          <option>דגם שלא מופיע בקטלוג</option>
        </select>
      </div>
      <div class="field">
        <label for="c-msg">פרטים נוספים <span class="opt">(לא חובה)</span></label>
        <textarea id="c-msg" name="msg" rows="3" data-label="פרטים"></textarea>
      </div>
      <button class="btn btn--gold btn--lg" type="submit">${D(`wa`)}<span>שליחה בוואטסאפ</span></button>
      <p class="form__status" data-form-status role="status"></p>
      <p class="form__fine">הטופס לא שולח דבר לשרת. הוא מכין הודעה בוואטסאפ, ורק אתם מחליטים אם לשלוח.</p>
    </form>
  </div>`}function K(){let e=v();return`<section class="page-head">
    ${z([[`המועדפים שלי`]])}
    <h1 class="h1">המועדפים שלי</h1>
    <p class="lead">${e.length?`${x(e.length)} שמורים במכשיר הזה.`:`עוד לא שמרתם שעונים.`}</p>
  </section>
  ${e.length?`<div class="fav-actions">
      <button class="btn btn--gold" type="button" data-wa-list>${D(`wa`)}<span>שליחת הרשימה למשה</span></button>
      <button class="btn btn--ghost" type="button" data-fav-clear>${D(`trash`)}<span>ניקוי הרשימה</span></button>
    </div>
    <ul class="grid" role="list" data-results>${R(e)}</ul>`:`<div class="empty"><p>לחצו על הלב בכל שעון כדי לשמור אותו כאן.</p><a class="btn btn--gold" href="#/collection">לקטלוג</a></div>`}`}function q(e){let t=e.query.get(`q`)??``,n=h(t);return`<section class="page-head">
    ${z([[`חיפוש`]])}
    <h1 class="h1">חיפוש</h1>
    <form class="search-inline" data-search-form role="search">
      <label class="sr-only" for="s-q">חיפוש בקטלוג</label>
      ${D(`search`)}<input id="s-q" name="q" type="search" value="${i(t)}" placeholder="דגם, מותג או סגנון" autocomplete="off" data-live-search>
    </form>
    <p class="count" data-count>${T(t,n.length)}</p>
  </section>
  <ul class="grid" role="list" data-results>${R(n)}</ul>`}function J(e){let n=t(e.params.slug);return`<article class="legal">${z([[n.title]])}<h1 class="h1">${n.title}</h1><div class="legal__body">${n.body}</div></article>`}var Y=()=>`<section class="nf"><p class="eyebrow">404</p><h1 class="h1">העמוד לא נמצא</h1>
  <p>ייתכן שהקישור השתנה.</p>
  <div class="hero__cta"><a class="btn btn--gold" href="#/collection">לקטלוג</a><a class="btn btn--ghost" href="#/">לדף הבית</a></div></section>`;function X(){return`<a class="skip-link" href="#main" data-skip>דלג לתוכן</a>
  <header class="hd">
    <div class="hd__bar">
      <button class="icon-btn" type="button" data-open="menu" aria-label="פתיחת התפריט">${D(`menu`)}</button>
      <a class="hd__logo" href="#/" aria-label="Moshe, דף הבית">${s(`compact`,{decorative:!0})}</a>
      <div class="hd__end">
        <button class="icon-btn" type="button" data-open="search-dlg" aria-label="חיפוש">${D(`search`)}</button>
        <a class="icon-btn hd__fav" href="#/favorites" data-nav="favorites" aria-label="המועדפים שלי">${D(`heart`)}<span class="badge" data-fav-count hidden></span></a>
      </div>
    </div>
  </header>

  <dialog class="menu" id="menu" aria-label="תפריט">
    <div class="menu__in">
      <div class="menu__top">
        <span class="menu__mark">${s(`mark`,{decorative:!0})}</span>
        <button class="icon-btn" type="button" data-close aria-label="סגירת התפריט">${D(`close`)}</button>
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
        <ul role="list">${f.map(e=>`<li><a href="#/collection/${e.slug}">${e.he}<span>${c(e.slug)}</span></a></li>`).join(``)}</ul>
      </div>
      ${I(`היי משה, `,`כתבו למשה בוואטסאפ`,`btn btn--line menu__wa`)}
    </div>
  </dialog>

  <dialog class="search" id="search-dlg" aria-label="חיפוש">
    <form class="search__form" data-search-form role="search">
      <label class="sr-only" for="dq">חיפוש בקטלוג</label>
      ${D(`search`)}<input id="dq" name="q" type="search" placeholder="דגם, מותג או סגנון" autocomplete="off" autofocus>
      <button class="icon-btn" type="button" data-close aria-label="סגירת החיפוש">${D(`close`)}</button>
    </form>
    <div class="search__quick">
      <p class="eyebrow">חיפוש מהיר</p>
      <div class="chips">${N.map(e=>`<a class="pill" href="${C({brands:[e.slug]})}">${y(e.name)}</a>`).join(``)}${f.map(e=>`<a class="pill" href="#/collection/${e.slug}">${e.he}</a>`).join(``)}</div>
    </div>
  </dialog>

  <main id="main" tabindex="-1"></main>

  <footer class="ft">
    <div class="ft__sign">${s(`mark`,{decorative:!0})}<p class="ft__slogan">${a}</p></div>
    <nav class="ft__nav" aria-label="ניווט תחתון">
      <a href="#/collection">קטלוג</a><a href="#/about">אודות</a><a href="#/contact">קשר</a><a href="#/favorites">מועדפים</a>
      <a href="#/page/accessibility">הצהרת נגישות</a><a href="#/page/privacy">מדיניות פרטיות</a>
    </nav>
    <p class="ft__note">${o}</p>
    <p class="ft__demo">הדגמת עיצוב · <a href="../../index.html">לכל הכיוונים</a></p>
  </footer>
  <a class="wa-float" href="${g(`היי משה, `)}" target="_blank" rel="noopener" aria-label="כתבו למשה בוואטסאפ">${D(`wa`)}</a>`}S({layout:X,views:{home:V,collection:H,watch:U,about:W,contact:G,favorites:K,search:q,page:J,notfound:Y},list:e=>R(e),afterRender(e,t){if(e.name!==`watch`)return;let n=t.querySelector(`[data-sticky-cta]`),r=t.querySelector(`#pdp-cta`);!n||!r||_(new IntersectionObserver(([e])=>{let t=!e.isIntersecting&&e.boundingClientRect.top<0;n.classList.toggle(`is-on`,t),n.setAttribute(`aria-hidden`,String(!t))})).observe(r)}});