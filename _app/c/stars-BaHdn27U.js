import"../modulepreload-polyfill-P2Xu9kJm.js";import{A as e,C as t,D as n,E as r,F as i,I as a,L as o,M as s,N as c,O as l,P as u,S as d,T as f,_ as p,a as m,b as h,c as g,d as _,f as v,g as y,h as b,i as x,j as S,k as C,l as w,m as T,n as E,o as D,p as O,r as k,s as A,t as j,u as M,v as N,w as P,x as F,y as I}from"../app-CtbY0W0U.js";var L=e=>_(`stars`,e),R=[`I`,`II`,`III`,`IV`,`V`,`VI`,`VII`,`VIII`,`IX`,`X`],z=(e,t,n=`btn btn--gold`)=>`<a class="${n}" href="${p(e)}" target="_blank" rel="noopener">${g(`wa`)}<span>${t}</span></a>`,B=e=>`<article class="card">
  <a class="card__link" href="#/watch/${e.id}">
    <div class="card__tile">${N(e)}</div>
    <p class="card__brand">${u(e.brand)}</p>
    <h3 class="card__name">${u(e.name)}</h3>
    <p class="card__style">${i(n(e.style)?.he??``)}</p>
  </a>
  ${x(e,`fav card__fav`)}
</article>`,V=e=>e.map(e=>`<li>${B(e)}</li>`).join(``),H=e=>`<nav class="crumbs" aria-label="מיקום באתר">
  <a href="#/">בית</a>${e.map(([e,t])=>`<span aria-hidden="true">/</span>${t?`<a href="${t}">${u(e)}</a>`:`<span aria-current="page">${u(e)}</span>`}`).join(``)}
</nav>`,U=()=>`<ol class="steps" role="list">${t.map(([e,t],n)=>`<li data-reveal>
  <span class="steps__n">${R[n]}</span><h3>${e}</h3><p>${t}</p></li>`).join(``)}</ol>`,W=()=>`<section class="request" data-reveal aria-labelledby="req-t">
  <h2 class="h2" id="req-t">${c}</h2>
  <p>${s}</p>
  <a class="btn btn--gold" href="#/contact">לבקשת שעון</a>
</section>`;function G(){let t=[`scene2`,`scene3`,`blue-hour`];return`<section class="hero">
    <img class="hero__bg" src="${L(`hero-far`)}" alt="" width="768" height="1376" fetchpriority="high">
    <div class="hero__stars" aria-hidden="true"></div>
    <div class="hero__in">
      <h1 class="hero__logo" data-live-clock><span class="sr-only">Moshe · ${a}</span>${o(`full`,{decorative:!0})}</h1>
      <p class="hero__lead">אוסף שעונים פרטי, נבחר עד הפרט האחרון. עוברים על האוסף ומציעים החלפה.</p>
      <div class="hero__cta">
        <a class="btn btn--gold" href="#/collection">לאוסף השעונים</a>
        <a class="btn btn--ghost" href="#/about">איך זה עובד</a>
      </div>
    </div>
  </section>

  <section class="sec" aria-labelledby="h-cols">
    <div class="sec__head"><p class="eyebrow">קטגוריות</p><h2 class="h2" id="h-cols">הקולקציות</h2></div>
    <ul class="rail rail--cols" role="list">${d.map((e,n)=>`<li>
      <a class="col" href="#/collection/${e.slug}">
        <img src="${L(t[n%t.length])}" alt="" width="768" height="1376" loading="lazy" decoding="async">
        <span class="col__in"><span class="col__n">${R[n]}</span><span class="col__name">${e.he}</span><span class="col__count">${M(f(e.slug))}</span></span>
      </a></li>`).join(``)}
    </ul>
  </section>

  <section class="sec" aria-labelledby="h-feat">
    <div class="sec__head sec__head--row">
      <div><p class="eyebrow">מהאוסף</p><h2 class="h2" id="h-feat">שעונים נבחרים</h2></div>
      <a class="link" href="#/collection">לכל האוסף ${g(`arrow`)}</a>
    </div>
    <ul class="rail" role="list">${V(P)}</ul>
  </section>

  <section class="story" aria-labelledby="h-story">
    <img class="story__bg" src="${L(`blue-hour`)}" alt="" width="768" height="1376" loading="lazy" decoding="async">
    <div class="story__in" data-reveal>
      <p class="eyebrow">על האוסף</p>
      <h2 class="h2" id="h-story">${e}</h2>
      <p>${C}</p>
      <a class="link" href="#/about">עוד על האוסף ${g(`arrow`)}</a>
    </div>
  </section>

  <section class="sec" aria-labelledby="h-steps">
    <div class="sec__head"><p class="eyebrow">שלושה צעדים</p><h2 class="h2" id="h-steps">איך עובדת החלפה</h2></div>
    ${U()}
  </section>
  ${W()}`}function K(e){let t=D(e),r=n(t.style),i=A(t),a=t.brands.length+(t.sort===`featured`?0:1);return`<section class="page-head">
    ${H(r?[[`האוסף`,`#/collection`],[r.he]]:[[`האוסף`]])}
    <h1 class="h1">${r?r.he:`האוסף`}</h1>
    <p class="lead">${r?r.blurb:`כל השעונים באוסף. סננו לפי קטגוריה ומותג.`}</p>
  </section>
  <div class="toolbar">
    <nav class="pills" aria-label="קטגוריות">
      <a class="pill" href="${k({style:``},t)}" data-replace ${t.style?``:`aria-current="page"`}>הכל</a>
      ${d.map(e=>`<a class="pill" href="${k({style:e.slug},t)}" data-replace ${t.style===e.slug?`aria-current="page"`:``}>${e.he}</a>`).join(``)}
    </nav>
    <div class="toolbar__row">
      <p class="count">${M(i.length)}</p>
      <button class="btn btn--line btn--sm" type="button" data-open="filters">${g(`filter`)}<span>סינון ומיון${a?` · ${a}`:``}</span></button>
    </div>
  </div>
  ${i.length?`<ul class="grid" role="list">${V(i)}</ul>`:`<div class="empty"><p>אין שעונים שמתאימים לסינון הזה.</p><a class="btn btn--ghost" href="${k({style:t.style})}" data-replace>ניקוי הסינון</a></div>`}
  <dialog class="sheet" id="filters" aria-labelledby="f-title">
    <form class="sheet__in" data-filter-form data-style="${t.style}">
      <div class="sheet__head"><h2 id="f-title">סינון ומיון</h2><button type="button" class="icon-btn" data-close aria-label="סגירה">${g(`close`)}</button></div>
      <fieldset><legend>מותג</legend>${h.map(e=>`<label class="check">
        <input type="checkbox" name="brand" value="${e.slug}" ${t.brands.includes(e.slug)?`checked`:``}>
        <span>${u(e.name)}</span><span class="check__n">${P.filter(n=>n.brandSlug===e.slug&&(!t.style||n.style===t.style)).length}</span>
      </label>`).join(``)}</fieldset>
      <fieldset><legend>מיון</legend>${j.map(([e,n])=>`<label class="check">
        <input type="radio" name="sort" value="${e}" ${t.sort===e?`checked`:``}><span>${n}</span></label>`).join(``)}</fieldset>
      <div class="sheet__foot">
        <a class="btn btn--ghost" href="${k({style:t.style})}" data-replace>ניקוי</a>
        <button class="btn btn--gold" type="submit">הצגת התוצאות</button>
      </div>
    </form>
  </dialog>`}function q(e){let r=l(e.params.id),a=n(r.style),o=P.filter(e=>e.id!==r.id);return`<article class="pdp">
    ${H([[`האוסף`,`#/collection`],[a.he,`#/collection/${a.slug}`],[r.name]])}
    <div class="pdp__grid">
      <div class="gallery" data-gallery>
        <div class="gallery__track" data-gallery-track tabindex="0" aria-label="תמונות של ${i(r.name)}">
          <figure class="gallery__slide" data-gallery-slide>
            <button class="gallery__zoom" type="button" data-zoom="${w(r)}" data-alt="${i(r.name)}" aria-label="הגדלת התמונה">${N(r,{large:!0,eager:!0})}</button>
          </figure>
          <figure class="gallery__slide" data-gallery-slide>
            <button class="gallery__zoom" type="button" data-zoom="${I(r)}" data-alt="${i(r.name)}, תקריב" aria-label="הגדלת התקריב">
              <img src="${I(r)}" width="1000" height="1000" alt="${i(r.name)}, תקריב של הלוח" loading="lazy" decoding="async">
            </button>
          </figure>
        </div>
        <div class="gallery__dots">
          <button type="button" data-gallery-go="0" aria-label="תמונה 1"></button>
          <button type="button" data-gallery-go="1" aria-label="תמונה 2: תקריב"></button>
        </div>
      </div>
      <div class="pdp__info">
        <p class="card__brand">${u(r.brand)}</p>
        <h1 class="pdp__name">${u(r.name)}</h1>
        <a class="tag" href="#/collection/${a.slug}">${a.he}</a>
        <p class="pdp__short">${u(r.short)}</p>
        <div class="pdp__cta" id="pdp-cta">
          ${z(y(r),`להצעת החלפה`,`btn btn--gold btn--lg`)}
          ${x(r,`fav fav--lg`)}
          <button class="icon-btn icon-btn--line" type="button" data-share aria-label="שיתוף השעון">${g(`share`)}</button>
        </div>
        <dl class="specs">${r.details.map(([e,t])=>`<div><dt>${e}</dt><dd>${u(t)}</dd></div>`).join(``)}</dl>
        <details class="acc"><summary>איך עובדת החלפה ${g(`chevron`)}</summary>
          <ol class="acc__list">${t.map(([e,t])=>`<li><strong>${e}.</strong> ${t}</li>`).join(``)}</ol>
        </details>
        <details class="acc"><summary>שאלה על השעון ${g(`chevron`)}</summary>
          <p>רוצים עוד תמונות או פרט מסוים? ${z(E(r),`שאלו את משה`,`link`)}</p>
        </details>
        <p class="note">${S}</p>
      </div>
    </div>
  </article>
  ${o.length?`<section class="sec" aria-labelledby="h-more">
    <div class="sec__head"><h2 class="h2" id="h-more">עוד מהאוסף</h2></div>
    <ul class="rail" role="list">${V(o)}</ul>
  </section>`:``}
  <div class="sticky-cta" data-sticky-cta aria-hidden="true">
    <p class="sticky-cta__name">${u(r.name)}</p>
    ${z(y(r),`להצעת החלפה`,`btn btn--gold btn--sm`)}
  </div>`}function J(){return`<section class="page-head">
    ${H([[`אודות`]])}
    <h1 class="h1">אודות</h1>
    <p class="lead">אוסף פרטי של שעונים, שנאסף בסבלנות ונבחר עד הפרט האחרון.</p>
  </section>
  <section class="about">
    <figure class="about__img"><img src="${L(`scene2`)}" alt="" width="768" height="1376" loading="lazy" decoding="async"></figure>
    <div class="about__text" data-reveal>
      <h2 class="h2">${e}</h2>
      <p>${C}</p>
      <p class="note">${S}</p>
    </div>
  </section>
  <section class="sec" aria-labelledby="h-steps"><div class="sec__head"><h2 class="h2" id="h-steps">איך עובדת החלפה</h2></div>${U()}</section>
  <section class="sec faq" aria-labelledby="h-faq"><div class="sec__head"><h2 class="h2" id="h-faq">שאלות נפוצות</h2></div>
    ${F.map(([e,t])=>`<details class="acc"><summary>${e} ${g(`chevron`)}</summary><p>${t}</p></details>`).join(``)}
  </section>
  ${W()}`}function Y(e){let t=l(e.query.get(`w`)??``);return`<section class="page-head">
    ${H([[`יצירת קשר`]])}
    <h1 class="h1">יצירת קשר</h1>
    <p class="lead">רוצים להציע החלפה או מחפשים דגם מסוים? כתבו למשה.</p>
  </section>
  <div class="contact">
    <a class="contact__wa" href="${p(`היי משה, `)}" target="_blank" rel="noopener">
      ${g(`wa`)}<span><strong>וואטסאפ</strong><span>הדרך הכי מהירה להגיע למשה</span></span>
    </a>
    <form class="form" data-wa-form data-wa-intro="היי משה, הגעתי מהאתר." novalidate>
      <div class="field">
        <label for="c-name">שם</label>
        <input id="c-name" name="name" required autocomplete="name" data-label="שם" data-msg="איך לפנות אליכם?" aria-describedby="e-name">
        <p class="field__err" id="e-name" data-error-for="name"></p>
      </div>
      <div class="field">
        <label for="c-want">איזה שעון מעניין אתכם</label>
        <select id="c-want" name="want" data-label="מעניין אותי">
          <option value="">עוד לא בחרתי</option>
          ${P.map(e=>`<option ${t?.id===e.id?`selected`:``}>${i(e.name)}</option>`).join(``)}
          <option>דגם שלא מופיע באוסף</option>
        </select>
      </div>
      <div class="field">
        <label for="c-offer">מה יש לכם להציע</label>
        <textarea id="c-offer" name="offer" rows="3" required data-label="יש לי להציע" data-msg="ספרו בקצרה איזה שעון יש לכם" aria-describedby="e-offer"></textarea>
        <p class="field__err" id="e-offer" data-error-for="offer"></p>
      </div>
      <div class="field">
        <label for="c-msg">הערות <span class="opt">(לא חובה)</span></label>
        <textarea id="c-msg" name="msg" rows="2" data-label="הערות"></textarea>
      </div>
      <button class="btn btn--gold btn--lg" type="submit">${g(`wa`)}<span>הכנת הודעה בוואטסאפ</span></button>
      <p class="form__status" data-form-status role="status"></p>
      <p class="form__fine">הטופס לא שולח דבר לשרת. הוא מכין הודעה בוואטסאפ, ורק אתם מחליטים אם לשלוח.</p>
    </form>
  </div>`}function X(){let e=m();return`<section class="page-head">
    ${H([[`המועדפים שלי`]])}
    <h1 class="h1">המועדפים שלי</h1>
    <p class="lead">${e.length?`${M(e.length)} שמורים במכשיר הזה.`:`עוד לא שמרתם שעונים.`}</p>
  </section>
  ${e.length?`<div class="fav-actions">
      <button class="btn btn--gold" type="button" data-wa-list>${g(`wa`)}<span>שליחת הרשימה למשה</span></button>
      <button class="btn btn--ghost" type="button" data-fav-clear>${g(`trash`)}<span>ניקוי הרשימה</span></button>
    </div>
    <ul class="grid" role="list" data-results>${V(e)}</ul>`:`<div class="empty"><p>לחצו על הלב בכל שעון כדי לשמור אותו כאן.</p><a class="btn btn--gold" href="#/collection">לאוסף</a></div>`}`}function Z(e){let t=e.query.get(`q`)??``,n=v(t);return`<section class="page-head">
    ${H([[`חיפוש`]])}
    <h1 class="h1">חיפוש</h1>
    <form class="search-inline" data-search-form role="search">
      <label class="sr-only" for="s-q">חיפוש באוסף</label>
      ${g(`search`)}<input id="s-q" name="q" type="search" value="${i(t)}" placeholder="דגם, מותג או סגנון" autocomplete="off" data-live-search>
    </form>
    <p class="count" data-count>${O(t,n.length)}</p>
  </section>
  <ul class="grid" role="list" data-results>${V(n)}</ul>`}function Q(e){let t=r(e.params.slug);return`<article class="legal">${H([[t.title]])}<h1 class="h1">${t.title}</h1><div class="legal__body">${t.body}</div></article>`}var $=()=>`<section class="nf"><p class="eyebrow">404</p><h1 class="h1">העמוד לא נמצא</h1>
  <p>ייתכן שהקישור השתנה. אפשר לחזור לאוסף או לדף הבית.</p>
  <div class="hero__cta"><a class="btn btn--gold" href="#/collection">לאוסף</a><a class="btn btn--ghost" href="#/">לדף הבית</a></div></section>`;function ee(){return`<a class="skip-link" href="#main" data-skip>דלג לתוכן</a>
  <header class="hd">
    <div class="hd__bar">
      <button class="icon-btn" type="button" data-open="menu" aria-label="פתיחת התפריט">${g(`menu`)}</button>
      <a class="hd__logo" href="#/" aria-label="Moshe, דף הבית">${o(`compact`,{decorative:!0})}</a>
      <div class="hd__end">
        <button class="icon-btn" type="button" data-open="search-dlg" aria-label="חיפוש">${g(`search`)}</button>
        <a class="icon-btn hd__fav" href="#/favorites" data-nav="favorites" aria-label="המועדפים שלי">${g(`heart`)}<span class="badge" data-fav-count hidden></span></a>
      </div>
    </div>
  </header>

  <dialog class="menu" id="menu" aria-label="תפריט">
    <div class="menu__in">
      <div class="menu__top">
        <span class="menu__mark">${o(`mark`,{decorative:!0})}</span>
        <button class="icon-btn" type="button" data-close aria-label="סגירת התפריט">${g(`close`)}</button>
      </div>
      <nav class="menu__nav" aria-label="ניווט ראשי">
        <a href="#/" data-nav="home">בית</a>
        <a href="#/collection" data-nav="collection">האוסף</a>
        <a href="#/about" data-nav="about">אודות</a>
        <a href="#/contact" data-nav="contact">יצירת קשר</a>
        <a href="#/favorites" data-nav="favorites">המועדפים <span class="badge" data-fav-count hidden></span></a>
      </nav>
      <div class="menu__cats">
        <p class="eyebrow">קטגוריות</p>
        <ul role="list">${d.map(e=>`<li><a href="#/collection/${e.slug}">${e.he}<span>${f(e.slug)}</span></a></li>`).join(``)}</ul>
      </div>
      ${z(`היי משה, `,`כתבו למשה בוואטסאפ`,`btn btn--line menu__wa`)}
    </div>
  </dialog>

  <dialog class="search" id="search-dlg" aria-label="חיפוש">
    <form class="search__form" data-search-form role="search">
      <label class="sr-only" for="dq">חיפוש באוסף</label>
      ${g(`search`)}<input id="dq" name="q" type="search" placeholder="דגם, מותג או סגנון" autocomplete="off" autofocus>
      <button class="icon-btn" type="button" data-close aria-label="סגירת החיפוש">${g(`close`)}</button>
    </form>
    <div class="search__quick">
      <p class="eyebrow">חיפוש מהיר</p>
      <div class="chips">${h.map(e=>`<a class="pill" href="${k({brands:[e.slug]})}">${u(e.name)}</a>`).join(``)}${d.map(e=>`<a class="pill" href="#/collection/${e.slug}">${e.he}</a>`).join(``)}</div>
    </div>
  </dialog>

  <main id="main" tabindex="-1"></main>

  <footer class="ft">
    <div class="ft__sign">${o(`mark`,{decorative:!0})}<p class="ft__slogan">${a}</p></div>
    <nav class="ft__nav" aria-label="ניווט תחתון">
      <a href="#/collection">האוסף</a><a href="#/about">אודות</a><a href="#/contact">יצירת קשר</a><a href="#/favorites">מועדפים</a>
      <a href="#/page/accessibility">הצהרת נגישות</a><a href="#/page/privacy">מדיניות פרטיות</a>
    </nav>
    <p class="ft__note">${S}</p>
    <p class="ft__demo">הדגמת עיצוב · <a href="../../index.html">לכל הכיוונים</a></p>
  </footer>
  <a class="wa-float" href="${p(`היי משה, `)}" target="_blank" rel="noopener" aria-label="כתבו למשה בוואטסאפ">${g(`wa`)}</a>`}T({layout:ee,views:{home:G,collection:K,watch:q,about:J,contact:Y,favorites:X,search:Z,page:Q,notfound:$},list:e=>V(e),afterRender(e,t){if(e.name!==`watch`)return;let n=t.querySelector(`[data-sticky-cta]`),r=t.querySelector(`#pdp-cta`);!n||!r||b(new IntersectionObserver(([e])=>{let t=!e.isIntersecting&&e.boundingClientRect.top<0;n.classList.toggle(`is-on`,t),n.setAttribute(`aria-hidden`,String(!t))})).observe(r)}});