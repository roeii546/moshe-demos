import"../modulepreload-polyfill-P2Xu9kJm.js";import{A as e,C as t,D as n,E as r,F as i,I as a,L as o,M as s,N as c,O as l,P as u,S as d,T as f,_ as p,a as m,b as h,c as g,d as _,f as v,g as y,i as b,j as x,k as S,l as C,m as w,n as T,o as E,p as D,r as O,s as k,t as A,u as j,v as M,w as N,x as P,y as F}from"../app-CtbY0W0U.js";var I=e=>_(`desert`,e),L=e=>String(e+1).padStart(2,`0`),R=(e,t,n=`btn`)=>`<a class="${n}" href="${p(e)}" target="_blank" rel="noopener">${g(`wa`)}<span>${t}</span></a>`,z=(e,t=0,r=!1)=>`<article class="card${r?` card--feature`:``}">
  <a class="card__link" href="#/watch/${e.id}">
    <div class="card__plinth">${M(e,r?{sizes:`(min-width: 900px) 60vw, 100vw`}:{})}</div>
    <div class="card__text">
      <span class="card__n">${L(t)}</span>
      <p class="card__style">${i(n(e.style)?.he??``)}</p>
      <h3 class="card__name">${u(e.name)}</h3>
      <p class="card__brand">${u(e.brand)}</p>
    </div>
  </a>
  ${b(e,`fav card__fav`)}
</article>`,B=(e,t=!1)=>`<ul class="grid" role="list" data-results>${e.map((e,n)=>`<li${t&&n===0?` class="grid__wide"`:``}>${z(e,n,t&&n===0)}</li>`).join(``)}</ul>`,V=e=>`<nav class="crumbs" aria-label="מיקום באתר">
  <a href="#/">בית</a>${e.map(([e,t])=>`<span aria-hidden="true">—</span>${t?`<a href="${t}">${u(e)}</a>`:`<span aria-current="page">${u(e)}</span>`}`).join(``)}
</nav>`,H=()=>`<ol class="steps" role="list">${t.map(([e,t],n)=>`<li data-reveal>
  <span class="steps__n">${L(n)}</span><div><h3>${e}</h3><p>${t}</p></div></li>`).join(``)}</ol>`,U=(e,t=``)=>`<form class="form" data-wa-form data-wa-intro="היי משה, הגעתי מהאתר." novalidate>
  <div class="field"><label for="${e}-name">שם</label>
    <input id="${e}-name" name="name" required autocomplete="name" data-label="שם" data-msg="איך לפנות אליכם?" aria-describedby="${e}-e-name">
    <p class="field__err" id="${e}-e-name" data-error-for="name"></p></div>
  <div class="field"><label for="${e}-want">מה אתם מחפשים</label>
    <input id="${e}-want" name="want" value="${i(t)}" data-label="מחפש/ת" placeholder="דגם מהאוסף, או משהו אחר"></div>
  <div class="field"><label for="${e}-offer">מה יש לכם להציע</label>
    <textarea id="${e}-offer" name="offer" rows="3" required data-label="יש לי להציע" data-msg="ספרו בקצרה איזה שעון יש לכם" aria-describedby="${e}-e-offer"></textarea>
    <p class="field__err" id="${e}-e-offer" data-error-for="offer"></p></div>
  <button class="btn btn--terra" type="submit">${g(`wa`)}<span>הכנת הודעה בוואטסאפ</span></button>
  <p class="form__status" data-form-status role="status"></p>
  <p class="fine">הטופס לא שולח דבר לשרת. הוא מכין הודעה בוואטסאפ, ורק אתם מחליטים אם לשלוח.</p>
</form>`;function W(){return`<section class="hero">
    <img class="hero__bg" src="${I(`scene2`)}" alt="" width="768" height="1376" fetchpriority="high">
    <div class="hero__in">
      <p class="hero__kicker">אוסף שעונים פרטי · להחלפות בין חובבים</p>
      <h1 class="hero__title">${a}</h1>
      <a class="hero__cta" href="#/collection">לאוסף <span class="hero__arrow">${g(`arrow`)}</span></a>
    </div>
  </section>

  <section class="look" aria-labelledby="h-look">
    <div class="look__head">
      <h2 class="h2" id="h-look">לוקבוק</h2>
      <p class="look__hint">החליקו לצפייה ${g(`arrow`)}</p>
    </div>
    <div class="look__frame" data-gallery>
      <ul class="look__track" role="list" data-gallery-track tabindex="0" aria-label="השעונים באוסף">
        ${N.map((e,t)=>`<li class="look__slide" data-gallery-slide>
          <a class="look__link" href="#/watch/${e.id}">
            <div class="look__plinth">${M(e,{sizes:`(min-width: 900px) 45vw, 86vw`,eager:t===0})}</div>
            <span class="look__n" dir="ltr">${L(t)} / ${L(N.length-1)}</span>
            <span class="look__name">${u(e.name)}</span>
            <span class="look__meta">${u(e.brand)} · ${i(n(e.style)?.he??``)}</span>
          </a>
        </li>`).join(``)}
      </ul>
      <div class="look__nav">
        <button class="round" type="button" data-gallery-prev aria-label="הקודם">${g(`back`)}</button>
        <span class="look__count" data-gallery-count dir="ltr"></span>
        <button class="round" type="button" data-gallery-next aria-label="הבא">${g(`arrow`)}</button>
      </div>
    </div>
  </section>

  <section class="index" aria-labelledby="h-index">
    <h2 class="h2" id="h-index">מפתח הקולקציות</h2>
    <ol class="index__list" role="list">
      ${d.map((e,t)=>`<li><a class="index__row" href="#/collection/${e.slug}">
        <span class="index__n">${L(t)}</span><span class="index__name">${e.he}</span>
        <span class="index__blurb">${e.blurb}</span><span class="index__count">${f(e.slug)}</span></a></li>`).join(``)}
      <li><a class="index__row" href="#/collection"><span class="index__n">${L(d.length)}</span><span class="index__name">כל האוסף</span>
        <span class="index__blurb">${h.map(e=>e.name).join(` · `)}</span><span class="index__count">${N.length}</span></a></li>
    </ol>
  </section>

  <section class="dusk" aria-labelledby="h-dusk">
    <img class="dusk__bg" src="${I(`hero-far`)}" alt="" width="768" height="1376" loading="lazy" decoding="async">
    <div class="dusk__in" data-reveal>
      <p class="kicker">על האוסף</p>
      <h2 class="dusk__title" id="h-dusk">${e}</h2>
      <p class="dusk__text">${S}</p>
      <a class="text-link" href="#/about">עוד על האוסף ${g(`arrow`)}</a>
    </div>
  </section>

  <section class="sec" aria-labelledby="h-steps"><h2 class="h2" id="h-steps">החלפה, בשלושה צעדים</h2>${H()}</section>

  <section class="sec request" aria-labelledby="h-req">
    <div class="request__head"><h2 class="h2" id="h-req">${c}</h2><p class="lead">${s}</p></div>
    ${U(`home`)}
  </section>`}function G(e){let t=E(e),r=n(t.style),a=k(t);return`<section class="page-head">
    ${V(r?[[`האוסף`,`#/collection`],[r.he]]:[[`האוסף`]])}
    <h1 class="h1">${r?r.he:`האוסף`}</h1>
    <p class="lead">${r?r.blurb:`כל השעונים, אחד אחרי השני.`}</p>
  </section>
  <div class="bar">
    <nav class="tabs" aria-label="קטגוריות">
      <a href="${O({style:``},t)}" data-replace ${t.style?``:`aria-current="page"`}>הכל <sup>${N.length}</sup></a>
      ${d.map(e=>`<a href="${O({style:e.slug},t)}" data-replace ${t.style===e.slug?`aria-current="page"`:``}>${e.he} <sup>${f(e.slug)}</sup></a>`).join(``)}
    </nav>
    <form class="bar__selects" data-filter-form data-style="${t.style}">
      <label class="select"><span class="sr-only">מותג</span>
        <select name="brand" data-autosubmit><option value="">כל המותגים</option>${h.map(e=>`<option value="${e.slug}" ${t.brands[0]===e.slug?`selected`:``}>${i(e.name)}</option>`).join(``)}</select>${g(`chevron`)}</label>
      <label class="select"><span class="sr-only">מיון</span>
        <select name="sort" data-autosubmit>${A.map(([e,n])=>`<option value="${e}" ${t.sort===e?`selected`:``}>${n}</option>`).join(``)}</select>${g(`chevron`)}</label>
    </form>
  </div>
  <div class="wrap">${a.length?B(a,!0):`<div class="empty"><p>אין שעונים שמתאימים לבחירה הזו.</p><a class="btn btn--terra" href="#/collection" data-replace>לכל האוסף</a></div>`}</div>`}function K(e){let t=l(e.params.id),r=n(t.style),a=N.indexOf(t),o=N[(a+1)%N.length],s=N[(a-1+N.length)%N.length];return`<article class="pdp">
    <div class="pdp__media">
      <div class="gallery" data-gallery>
        <div class="gallery__track" data-gallery-track tabindex="0" aria-label="תמונות של ${i(t.name)}">
          <figure class="gallery__slide" data-gallery-slide><button class="gallery__zoom" type="button" data-zoom="${C(t)}" data-alt="${i(t.name)}" aria-label="הגדלת התמונה">${M(t,{large:!0,eager:!0})}</button></figure>
          <figure class="gallery__slide" data-gallery-slide><button class="gallery__zoom" type="button" data-zoom="${F(t)}" data-alt="${i(t.name)}, תקריב" aria-label="הגדלת התקריב"><img src="${F(t)}" width="1000" height="1000" alt="${i(t.name)}, תקריב של הלוח" loading="lazy" decoding="async"></button></figure>
        </div>
        <div class="gallery__nav">
          <button class="round" type="button" data-gallery-prev aria-label="התמונה הקודמת">${g(`back`)}</button>
          <span data-gallery-count dir="ltr"></span>
          <button class="round" type="button" data-gallery-next aria-label="התמונה הבאה">${g(`arrow`)}</button>
        </div>
      </div>
    </div>
    <div class="pdp__info">
      ${V([[`האוסף`,`#/collection`],[r.he,`#/collection/${r.slug}`]])}
      <p class="kicker">${u(t.brand)}</p>
      <h1 class="pdp__name">${u(t.name)}</h1>
      <p class="pdp__story">${u(t.short)}</p>
      <div class="pdp__cta">
        ${R(y(t),`להצעת החלפה`,`btn btn--terra btn--lg`)}
        <span class="pdp__save">${b(t,`fav fav--text`)}<span aria-hidden="true">שמירה</span></span>
      </div>
      <dl class="specs">
        <div><dt>קטגוריה</dt><dd><a href="#/collection/${r.slug}">${r.he}</a></dd></div>
        ${t.details.map(([e,t])=>`<div><dt>${e}</dt><dd>${u(t)}</dd></div>`).join(``)}
      </dl>
      <p class="pdp__ask">רוצים עוד תמונות או פרט מסוים? ${R(T(t),`שאלו את משה`,`text-link`)}</p>
      <p class="fine">${x}</p>
    </div>
  </article>
  <nav class="pager" aria-label="שעונים נוספים">
    <a class="pager__link" href="#/watch/${s.id}"><span class="kicker">הקודם</span><span class="pager__name">${u(s.name)}</span></a>
    <a class="pager__link pager__link--next" href="#/watch/${o.id}"><span class="kicker">הבא</span><span class="pager__name">${u(o.name)}</span></a>
  </nav>`}function q(){return`<section class="page-head">${V([[`אודות`]])}<h1 class="h1">אודות</h1></section>
  <section class="essay">
    <figure class="essay__img"><img src="${I(`scene3`)}" alt="" width="768" height="1376" loading="lazy" decoding="async"></figure>
    <div class="essay__text">
      <p class="essay__quote">„${e}”</p>
      <p>${S}</p>
      <p class="fine">${x}</p>
    </div>
  </section>
  <section class="sec" aria-labelledby="h-steps"><h2 class="h2" id="h-steps">החלפה, בשלושה צעדים</h2>${H()}</section>
  <section class="sec" aria-labelledby="h-faq"><h2 class="h2" id="h-faq">שאלות</h2>
    <div class="faq">${P.map(([e,t],n)=>`<details class="acc"><summary><span class="acc__n">${L(n)}</span>${e}${g(`chevron`)}</summary><p>${t}</p></details>`).join(``)}</div>
  </section>`}function J(e){let t=l(e.query.get(`w`)??``);return`<section class="page-head">${V([[`יצירת קשר`]])}<h1 class="h1">כתבו למשה</h1>
    <p class="lead">הצעת החלפה, שאלה על שעון או דגם שאתם מחפשים.</p></section>
  <div class="contact">
    ${R(`היי משה, `,`וואטסאפ ישיר`,`contact__wa`)}
    <p class="contact__or">או מלאו כמה פרטים ונכין לכם הודעה:</p>
    ${U(`c`,t?.name??``)}
  </div>`}function Y(){let e=m();return`<section class="page-head">${V([[`המועדפים`]])}<h1 class="h1">המועדפים</h1>
    <p class="lead">${e.length?`${j(e.length)} שמורים במכשיר הזה.`:`עוד לא שמרתם שעונים. הלב שבכל כרטיס שומר אותו כאן.`}</p></section>
  ${e.length?`<div class="fav-bar"><button class="btn btn--terra" type="button" data-wa-list>${g(`wa`)}<span>שליחת הרשימה למשה</span></button>
      <button class="text-link" type="button" data-fav-clear>ניקוי הרשימה</button></div>
    <div class="wrap">${B(e)}</div>`:`<div class="empty"><a class="btn btn--terra" href="#/collection">לאוסף</a></div>`}`}function X(e){let t=e.query.get(`q`)??``,n=v(t);return`<section class="page-head">${V([[`חיפוש`]])}<h1 class="sr-only">חיפוש באוסף</h1>
    <form class="bigsearch" data-search-form role="search"><label class="sr-only" for="s-q">חיפוש באוסף</label>
      <input id="s-q" name="q" type="search" value="${i(t)}" placeholder="חפשו באוסף" autocomplete="off" data-live-search>${g(`search`)}</form>
    <p class="lead" data-count>${D(t,n.length)}</p></section>
  <div class="wrap">${B(n)}</div>`}var Z=e=>{let t=r(e.params.slug);return`<article class="legal">${V([[t.title]])}<h1 class="h1">${t.title}</h1><div class="legal__body">${t.body}</div></article>`},Q=()=>`<section class="page-head nf"><p class="kicker">404</p><h1 class="h1">כאן אין כלום, רק חול.</h1>
  <p class="lead">ייתכן שהקישור השתנה.</p><a class="btn btn--terra" href="#/collection">לאוסף</a></section>`;function $(){return`<a class="skip-link" href="#main" data-skip>דלג לתוכן</a>
  <header class="hd">
    <a class="hd__logo" href="#/" aria-label="Moshe, דף הבית">${o(`compact`,{decorative:!0})}</a>
    <div class="hd__end">
      <a class="hd__fav" href="#/favorites" data-nav="favorites" aria-label="המועדפים">${g(`heart`)}<span class="hd__count" data-fav-count hidden></span></a>
      <button class="hd__menu" type="button" data-open="menu" aria-label="פתיחת התפריט"><span>תפריט</span><span class="hd__lines" aria-hidden="true"></span></button>
    </div>
  </header>
  <dialog class="side" id="menu" aria-label="תפריט">
    <div class="side__in">
      <button class="side__close" type="button" data-close aria-label="סגירת התפריט">${g(`close`)}</button>
      <nav aria-label="ניווט ראשי"><ol class="side__nav" role="list">${[[`#/`,`home`,`בית`],[`#/collection`,`collection`,`האוסף`],[`#/about`,`about`,`אודות`],[`#/contact`,`contact`,`כתבו למשה`],[`#/favorites`,`favorites`,`המועדפים`]].map(([e,t,n],r)=>`<li><a href="${e}" data-nav="${t}"><span>${L(r)}</span>${n}</a></li>`).join(``)}</ol></nav>
      <div class="side__cats"><p class="kicker">קולקציות</p>${d.map(e=>`<a href="#/collection/${e.slug}">${e.he}</a>`).join(``)}<a href="#/search">חיפוש ${g(`search`)}</a></div>
      <div class="side__foot"><span class="side__mark" data-live-clock>${o(`mark`,{decorative:!0})}</span><p>${a}</p></div>
    </div>
  </dialog>
  <main id="main" tabindex="-1"></main>
  <footer class="ft">
    <p class="ft__slogan">${a}</p>
    <nav class="ft__nav" aria-label="ניווט תחתון">
      <a href="#/collection">האוסף</a><a href="#/about">אודות</a><a href="#/contact">כתבו למשה</a><a href="#/search">חיפוש</a>
      <a href="#/page/accessibility">הצהרת נגישות</a><a href="#/page/privacy">מדיניות פרטיות</a>
    </nav>
    <div class="ft__base"><span class="ft__logo">${o(`compact`,{decorative:!0})}</span>
      <p>${x}</p><p>הדגמת עיצוב · <a href="../../index.html">לכל הכיוונים</a></p></div>
  </footer>`}w({layout:$,views:{home:W,collection:G,watch:K,about:q,contact:J,favorites:Y,search:X,page:Z,notfound:Q},list:e=>e.map((e,t)=>`<li>${z(e,t)}</li>`).join(``)});