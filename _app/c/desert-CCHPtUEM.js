import"../modulepreload-polyfill-P2Xu9kJm.js";import{A as e,C as t,D as n,E as r,M as i,N as a,O as o,P as s,S as c,T as l,_ as u,a as d,b as f,c as p,d as m,f as h,g,i as _,j as v,k as y,l as b,m as x,n as S,o as C,p as w,r as T,s as E,t as D,u as O,v as k,w as A,x as j,y as M}from"../app-AOygONBt.js";var N=e=>m(`desert`,e),P=e=>String(e+1).padStart(2,`0`),F=(e,t,n=`btn`)=>`<a class="${n}" href="${g(e)}" target="_blank" rel="noopener">${E(`wa`)}<span>${t}</span></a>`,I=(e,t=0,n=!1)=>`<article class="card${n?` card--feature`:``}">
  <a class="card__link" href="#/watch/${e.id}">
    <div class="card__plinth">${u(e,n?{sizes:`(min-width: 900px) 60vw, 100vw`}:{})}</div>
    <div class="card__text">
      <span class="card__n">${P(t)}</span>
      <p class="card__style">${i(A(e.style)?.he??``)}</p>
      <h3 class="card__name">${v(e.name)}</h3>
      <p class="card__brand">${v(e.brand)}</p>
    </div>
  </a>
  ${T(e,`fav card__fav`)}
</article>`,L=(e,t=!1)=>`<ul class="grid" role="list" data-results>${e.map((e,n)=>`<li${t&&n===0?` class="grid__wide"`:``}>${I(e,n,t&&n===0)}</li>`).join(``)}</ul>`,R=e=>`<nav class="crumbs" aria-label="מיקום באתר">
  <a href="#/">בית</a>${e.map(([e,t])=>`<span aria-hidden="true">—</span>${t?`<a href="${t}">${v(e)}</a>`:`<span aria-current="page">${v(e)}</span>`}`).join(``)}
</nav>`,z=(e,t=``)=>`<form class="form" data-wa-form data-wa-intro="היי משה, הגעתי מהאתר." novalidate>
  <div class="field"><label for="${e}-name">שם</label>
    <input id="${e}-name" name="name" required autocomplete="name" data-label="שם" data-msg="איך לפנות אליכם?" aria-describedby="${e}-e-name">
    <p class="field__err" id="${e}-e-name" data-error-for="name"></p></div>
  <div class="field"><label for="${e}-want">איזה שעון אתם מחפשים</label>
    <input id="${e}-want" name="want" value="${i(t)}" data-label="שעון מבוקש" placeholder="דגם, לוח, גוון"></div>
  <div class="field"><label for="${e}-msg">פרטים נוספים <span class="fine">(לא חובה)</span></label>
    <textarea id="${e}-msg" name="msg" rows="3" data-label="פרטים"></textarea></div>
  <button class="btn btn--terra" type="submit">${E(`wa`)}<span>שליחה בוואטסאפ</span></button>
  <p class="form__status" data-form-status role="status"></p>
  <p class="fine">הטופס לא שולח דבר לשרת. הוא מכין הודעה בוואטסאפ, ורק אתם מחליטים אם לשלוח.</p>
</form>`;function B(){return`<section class="hero">
    <img class="hero__bg" src="${N(`scene2`)}" alt="" width="768" height="1376" fetchpriority="high">
    <div class="hero__in">
      <h1 class="hero__title">${a}</h1>
      <a class="hero__cta" href="#/collection">לקטלוג השעונים <span class="hero__arrow">${E(`arrow`)}</span></a>
    </div>
  </section>

  <section class="look" aria-labelledby="h-look">
    <div class="look__head">
      <h2 class="h2" id="h-look">שעונים נבחרים</h2>
      <p class="look__hint">החליקו לצפייה ${E(`arrow`)}</p>
    </div>
    <div class="look__frame" data-gallery>
      <ul class="look__track" role="list" data-gallery-track tabindex="0" aria-label="שעונים נבחרים">
        ${j.map((e,t)=>`<li class="look__slide" data-gallery-slide>
          <a class="look__link" href="#/watch/${e.id}">
            <div class="look__plinth">${u(e,{sizes:`(min-width: 900px) 45vw, 86vw`,eager:t===0})}</div>
            <span class="look__n" dir="ltr">${P(t)} / ${P(j.length-1)}</span>
            <span class="look__name">${v(e.name)}</span>
            <span class="look__meta">${v(e.brand)} · ${i(A(e.style)?.he??``)}</span>
          </a>
        </li>`).join(``)}
      </ul>
      <div class="look__nav">
        <button class="round" type="button" data-gallery-prev aria-label="הקודם">${E(`back`)}</button>
        <span class="look__count" data-gallery-count dir="ltr"></span>
        <button class="round" type="button" data-gallery-next aria-label="הבא">${E(`arrow`)}</button>
      </div>
    </div>
  </section>

  <section class="index" aria-labelledby="h-index">
    <h2 class="h2" id="h-index">קטגוריות</h2>
    <ol class="index__list" role="list">
      ${f.map((e,t)=>`<li><a class="index__row" href="#/collection/${e.slug}">
        <span class="index__n">${P(t)}</span><span class="index__name">${e.he}</span><span class="index__count">${c(e.slug)}</span></a></li>`).join(``)}
      <li><a class="index__row" href="#/collection"><span class="index__n">${P(f.length)}</span><span class="index__name">כל הקטלוג</span>
        <span class="index__blurb">${M.map(e=>e.name).join(` · `)}</span><span class="index__count">${j.length}</span></a></li>
    </ol>
  </section>

  <section class="dusk" aria-labelledby="h-dusk">
    <img class="dusk__bg" src="${N(`hero-far`)}" alt="" width="768" height="1376" loading="lazy" decoding="async">
    <div class="dusk__in" data-reveal>
      <h2 class="dusk__title" id="h-dusk">${n}</h2>
      <p class="dusk__text">${r}</p>
    </div>
  </section>

  <section class="sec request" aria-labelledby="h-req">
    <div class="request__head"><h2 class="h2" id="h-req">${e}</h2><p class="lead">${y}</p></div>
    ${z(`home`)}
  </section>`}function V(e){let t=d(e),n=A(t.style),r=C(t);return`<section class="page-head">
    ${R(n?[[`הקטלוג`,`#/collection`],[n.he]]:[[`הקטלוג`]])}
    <h1 class="h1">${n?n.he:`הקטלוג`}</h1>
  </section>
  <div class="bar">
    <nav class="tabs" aria-label="קטגוריות">
      <a href="${S({style:``},t)}" data-replace ${t.style?``:`aria-current="page"`}>הכל <sup>${j.length}</sup></a>
      ${f.map(e=>`<a href="${S({style:e.slug},t)}" data-replace ${t.style===e.slug?`aria-current="page"`:``}>${e.he} <sup>${c(e.slug)}</sup></a>`).join(``)}
    </nav>
    <form class="bar__selects" data-filter-form data-style="${t.style}">
      <label class="select"><span class="sr-only">מותג</span>
        <select name="brand" data-autosubmit><option value="">כל המותגים</option>${M.map(e=>`<option value="${e.slug}" ${t.brands[0]===e.slug?`selected`:``}>${i(e.name)}</option>`).join(``)}</select>${E(`chevron`)}</label>
      <label class="select"><span class="sr-only">מיון</span>
        <select name="sort" data-autosubmit>${D.map(([e,n])=>`<option value="${e}" ${t.sort===e?`selected`:``}>${n}</option>`).join(``)}</select>${E(`chevron`)}</label>
    </form>
  </div>
  <div class="wrap">${r.length?L(r,!0):`<div class="empty"><p>אין שעונים שמתאימים לבחירה הזו.</p><a class="btn btn--terra" href="#/collection" data-replace>לכל הקטלוג</a></div>`}</div>`}function H(e){let t=l(e.params.id),n=A(t.style),r=j.indexOf(t),a=j[(r+1)%j.length],o=j[(r-1+j.length)%j.length];return`<article class="pdp">
    <div class="pdp__media">
      <div class="gallery" data-gallery>
        <div class="gallery__track" data-gallery-track tabindex="0" aria-label="תמונות של ${i(t.name)}">
          <figure class="gallery__slide" data-gallery-slide><button class="gallery__zoom" type="button" data-zoom="${p(t)}" data-alt="${i(t.name)}" aria-label="הגדלת התמונה">${u(t,{large:!0,eager:!0})}</button></figure>
          <figure class="gallery__slide" data-gallery-slide><button class="gallery__zoom" type="button" data-zoom="${k(t)}" data-alt="${i(t.name)}, תקריב" aria-label="הגדלת התקריב"><img src="${k(t)}" width="1000" height="1000" alt="${i(t.name)}, תקריב של הלוח" loading="lazy" decoding="async"></button></figure>
        </div>
        <div class="gallery__nav">
          <button class="round" type="button" data-gallery-prev aria-label="התמונה הקודמת">${E(`back`)}</button>
          <span data-gallery-count dir="ltr"></span>
          <button class="round" type="button" data-gallery-next aria-label="התמונה הבאה">${E(`arrow`)}</button>
        </div>
      </div>
    </div>
    <div class="pdp__info">
      ${R([[`הקטלוג`,`#/collection`],[n.he,`#/collection/${n.slug}`]])}
      <p class="kicker">${v(t.brand)}</p>
      <h1 class="pdp__name">${v(t.name)}</h1>
      <p class="pdp__story">${v(t.short)}</p>
      <div class="pdp__cta">
        ${F(O(t),`לבקשת השעון`,`btn btn--terra btn--lg`)}
        <span class="pdp__save">${T(t,`fav fav--text`)}<span aria-hidden="true">שמירה</span></span>
      </div>
      <dl class="specs">
        <div><dt>קטגוריה</dt><dd><a href="#/collection/${n.slug}">${n.he}</a></dd></div>
        ${t.details.map(([e,t])=>`<div><dt>${e}</dt><dd>${v(t)}</dd></div>`).join(``)}
      </dl>
    </div>
  </article>
  <nav class="pager" aria-label="שעונים נוספים">
    <a class="pager__link" href="#/watch/${o.id}"><span class="kicker">הקודם</span><span class="pager__name">${v(o.name)}</span></a>
    <a class="pager__link pager__link--next" href="#/watch/${a.id}"><span class="kicker">הבא</span><span class="pager__name">${v(a.name)}</span></a>
  </nav>`}function U(){return`<section class="page-head">${R([[`אודות`]])}<h1 class="h1">אודות</h1></section>
  <section class="essay">
    <figure class="essay__img"><img src="${N(`scene3`)}" alt="" width="768" height="1376" loading="lazy" decoding="async"></figure>
    <div class="essay__text">
      <p class="essay__quote">„${n}”</p>
      <p>${r}</p>
    </div>
  </section>
  <section class="sec request" aria-labelledby="h-req">
    <div class="request__head"><h2 class="h2" id="h-req">${e}</h2><p class="lead">${y}</p></div>
    ${z(`about`)}
  </section>`}function W(t){let n=l(t.query.get(`w`)??``);return`<section class="page-head">${R([[`יצירת קשר`]])}<h1 class="h1">כתבו למשה</h1>
    <p class="lead">${e} ${y}</p></section>
  <div class="contact">
    ${F(`היי משה, `,`וואטסאפ ישיר`,`contact__wa`)}
    <p class="contact__or">או מלאו כמה פרטים ונכין לכם הודעה:</p>
    ${z(`c`,n?.name??``)}
  </div>`}function G(){let e=_();return`<section class="page-head">${R([[`המועדפים`]])}<h1 class="h1">המועדפים</h1>
    <p class="lead">${e.length?`${b(e.length)} שמורים במכשיר הזה.`:`עוד לא שמרתם שעונים. הלב שבכל כרטיס שומר אותו כאן.`}</p></section>
  ${e.length?`<div class="fav-bar"><button class="btn btn--terra" type="button" data-wa-list>${E(`wa`)}<span>שליחת הרשימה למשה</span></button>
      <button class="text-link" type="button" data-fav-clear>ניקוי הרשימה</button></div>
    <div class="wrap">${L(e)}</div>`:`<div class="empty"><a class="btn btn--terra" href="#/collection">לקטלוג</a></div>`}`}function K(e){let t=e.query.get(`q`)??``,n=h(t);return`<section class="page-head">${R([[`חיפוש`]])}<h1 class="sr-only">חיפוש בקטלוג</h1>
    <form class="bigsearch" data-search-form role="search"><label class="sr-only" for="s-q">חיפוש בקטלוג</label>
      <input id="s-q" name="q" type="search" value="${i(t)}" placeholder="חפשו בקטלוג" autocomplete="off" data-live-search>${E(`search`)}</form>
    <p class="lead" data-count>${w(t,n.length)}</p></section>
  <div class="wrap">${L(n)}</div>`}var q=e=>{let n=t(e.params.slug);return`<article class="legal">${R([[n.title]])}<h1 class="h1">${n.title}</h1><div class="legal__body">${n.body}</div></article>`},J=()=>`<section class="page-head nf"><p class="kicker">404</p><h1 class="h1">כאן אין כלום, רק חול.</h1>
  <p class="lead">ייתכן שהקישור השתנה.</p><a class="btn btn--terra" href="#/collection">לקטלוג</a></section>`;function Y(){return`<a class="skip-link" href="#main" data-skip>דלג לתוכן</a>
  <header class="hd">
    <a class="hd__logo" href="#/" aria-label="Moshe, דף הבית">${s(`compact`,{decorative:!0})}</a>
    <div class="hd__end">
      <a class="hd__fav" href="#/favorites" data-nav="favorites" aria-label="המועדפים">${E(`heart`)}<span class="hd__count" data-fav-count hidden></span></a>
      <button class="hd__menu" type="button" data-open="menu" aria-label="פתיחת התפריט"><span>תפריט</span><span class="hd__lines" aria-hidden="true"></span></button>
    </div>
  </header>
  <dialog class="side" id="menu" aria-label="תפריט">
    <div class="side__in">
      <button class="side__close" type="button" data-close aria-label="סגירת התפריט">${E(`close`)}</button>
      <nav aria-label="ניווט ראשי"><ol class="side__nav" role="list">${[[`#/`,`home`,`בית`],[`#/collection`,`collection`,`הקטלוג`],[`#/about`,`about`,`אודות`],[`#/contact`,`contact`,`כתבו למשה`],[`#/favorites`,`favorites`,`המועדפים`]].map(([e,t,n],r)=>`<li><a href="${e}" data-nav="${t}"><span>${P(r)}</span>${n}</a></li>`).join(``)}</ol></nav>
      <div class="side__cats"><p class="kicker">קטגוריות</p>${f.map(e=>`<a href="#/collection/${e.slug}">${e.he}</a>`).join(``)}<a href="#/search">חיפוש ${E(`search`)}</a></div>
      <div class="side__foot"><span class="side__mark" data-live-clock>${s(`mark`,{decorative:!0})}</span><p>${a}</p></div>
    </div>
  </dialog>
  <main id="main" tabindex="-1"></main>
  <footer class="ft">
    <p class="ft__slogan">${a}</p>
    <nav class="ft__nav" aria-label="ניווט תחתון">
      <a href="#/collection">הקטלוג</a><a href="#/about">אודות</a><a href="#/contact">כתבו למשה</a><a href="#/search">חיפוש</a>
      <a href="#/page/accessibility">הצהרת נגישות</a><a href="#/page/privacy">מדיניות פרטיות</a>
    </nav>
    <div class="ft__base"><span class="ft__logo">${s(`compact`,{decorative:!0})}</span>
      <p>${o}</p><p>הדגמת עיצוב · <a href="../../index.html">לכל הכיוונים</a></p></div>
  </footer>`}x({layout:Y,views:{home:B,collection:V,watch:H,about:U,contact:W,favorites:G,search:K,page:q,notfound:J},list:e=>e.map((e,t)=>`<li>${I(e,t)}</li>`).join(``)});