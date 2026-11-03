import"../modulepreload-polyfill-P2Xu9kJm.js";import{A as e,C as t,D as n,E as r,F as i,I as a,L as o,M as s,N as c,P as l,R as u,S as d,T as f,a as p,b as m,c as h,d as g,f as _,g as v,h as y,i as b,j as x,k as S,l as C,m as w,n as T,o as E,p as D,r as O,s as k,t as A,u as j,v as M,w as N,x as P,y as F,z as I}from"../app-C30nBnBc.js";var L=e=>D(`desert`,e),R=e=>String(e+1).padStart(2,`0`),z=(e,t,n=`btn`)=>`<a class="${n}" href="${M(e)}" target="_blank" rel="noopener">${h(`wa`)}<span>${t}</span></a>`,B=(e,t=0,n=!1)=>`<article class="card${n?` card--feature`:``}">
  <a class="card__link" href="#/watch/${e.id}">
    <div class="card__plinth">${F(e,n?{sizes:`(min-width: 900px) 60vw, 100vw`}:{})}</div>
    <div class="card__text">
      <span class="card__n">${R(t)}</span>
      <p class="card__style">${o(S(e.style)?.he??``)}</p>
      <h3 class="card__name">${a(e.name)}</h3>
      <p class="card__brand">${a(e.brand)}</p>
    </div>
  </a>
  ${b(e,`fav card__fav`)}
</article>`,V=(e,t=!1)=>`<ul class="grid" role="list" data-results>${e.map((e,n)=>`<li${t&&n===0?` class="grid__wide"`:``}>${B(e,n,t&&n===0)}</li>`).join(``)}</ul>`,H=e=>`<nav class="crumbs" aria-label="מיקום באתר">
  <a href="#/">בית</a>${e.map(([e,t])=>`<span aria-hidden="true">—</span>${t?`<a href="${t}">${a(e)}</a>`:`<span aria-current="page">${a(e)}</span>`}`).join(``)}
</nav>`,U=(e,t=``)=>`<form class="form" data-wa-form data-wa-intro="היי, פנייה מהאתר:" novalidate>
  <div class="field"><label for="${e}-name">שם מלא</label>
    <input id="${e}-name" name="name" required autocomplete="name" data-label="שם" data-msg="איך לפנות אליכם?" aria-describedby="${e}-e-name">
    <p class="field__err" id="${e}-e-name" data-error-for="name"></p></div>
  <div class="field"><label for="${e}-want">שעון מהקטלוג</label>
    <select id="${e}-want" name="want" data-label="שעון מהקטלוג"><option value="">בחרו שעון</option>
      ${N.map(e=>`<option ${t===e.name?`selected`:``}>${o(e.name)}</option>`).join(``)}</select></div>
  <div class="field"><label for="${e}-desc">תיאור השעון שמחפשים: מותג, דגם ותקציב <span class="fine">(לא חובה)</span></label>
    <input id="${e}-desc" name="desc" data-label="תיאור השעון"></div>
  <div class="field"><label for="${e}-msg">הודעה <span class="fine">(לא חובה)</span></label>
    <textarea id="${e}-msg" name="msg" rows="3" data-label="הודעה"></textarea></div>
  <button class="btn btn--terra" type="submit">${h(`wa`)}<span>שליחה בוואטסאפ</span></button>
  <p class="form__status" data-form-status role="status"></p>
  <p class="fine">הטופס לא שולח דבר לשרת. הוא מכין הודעה בוואטסאפ, ורק אתם מחליטים אם לשלוח.</p>
</form>`;function W(){return`<section class="hero">
    <img class="hero__bg" src="${L(`scene2`)}" alt="" width="768" height="1376" fetchpriority="high">
    <div class="hero__in">
      <h1 class="hero__title">${u}</h1>
      <a class="hero__cta" href="#/collection">לקטלוג השעונים <span class="hero__arrow">${h(`arrow`)}</span></a>
    </div>
  </section>

  <section class="look" aria-labelledby="h-look">
    <div class="look__head">
      <h2 class="h2" id="h-look">שעונים נבחרים</h2>
      <p class="look__hint">החליקו לצפייה ${h(`arrow`)}</p>
    </div>
    <div class="look__frame" data-gallery>
      <ul class="look__track" role="list" data-gallery-track tabindex="0" aria-label="שעונים נבחרים">
        ${N.map((e,t)=>`<li class="look__slide" data-gallery-slide>
          <a class="look__link" href="#/watch/${e.id}">
            <div class="look__plinth">${F(e,{sizes:`(min-width: 900px) 45vw, 86vw`,eager:t===0})}</div>
            <span class="look__n" dir="ltr">${R(t)} / ${R(N.length-1)}</span>
            <span class="look__name">${a(e.name)}</span>
            <span class="look__meta">${a(e.brand)} · ${o(S(e.style)?.he??``)}</span>
          </a>
        </li>`).join(``)}
      </ul>
      <div class="look__nav">
        <button class="round" type="button" data-gallery-prev aria-label="הקודם">${h(`back`)}</button>
        <span class="look__count" data-gallery-count dir="ltr"></span>
        <button class="round" type="button" data-gallery-next aria-label="הבא">${h(`arrow`)}</button>
      </div>
    </div>
  </section>

  <section class="index" aria-labelledby="h-index">
    <h2 class="h2" id="h-index">קטגוריות</h2>
    <ol class="index__list" role="list">
      ${t.map((e,t)=>`<li><a class="index__row" href="#/collection/${e.slug}">
        <span class="index__n">${R(t)}</span><span class="index__name">${e.he}</span><span class="index__count">${r(e.slug)}</span></a></li>`).join(``)}
      <li><a class="index__row" href="#/collection"><span class="index__n">${R(t.length)}</span><span class="index__name">כל הקטלוג</span>
        <span class="index__blurb">${m.map(e=>e.name).join(` · `)}</span><span class="index__count">${N.length}</span></a></li>
    </ol>
  </section>

  <section class="dusk" aria-labelledby="h-dusk">
    <img class="dusk__bg" src="${L(`hero-far`)}" alt="" width="768" height="1376" loading="lazy" decoding="async">
    <div class="dusk__in" data-reveal>
      <h2 class="dusk__title" id="h-dusk">${s}</h2>
      <p class="dusk__text">${x}</p>
    </div>
  </section>

  <section class="sec request" aria-labelledby="h-req">
    <div class="request__head"><h2 class="h2" id="h-req">${i}</h2><p class="lead">${l}</p></div>
    ${U(`home`)}
  </section>`}function G(e){let n=E(e),i=S(n.style),a=k(n);return`<section class="page-head">
    ${H(i?[[`הקטלוג`,`#/collection`],[i.he]]:[[`הקטלוג`]])}
    <h1 class="h1">${i?i.he:`הקטלוג`}</h1>
    ${i?``:`<p class="lead">${P}</p>`}
  </section>
  <div class="bar">
    <nav class="tabs" aria-label="קטגוריות">
      <a href="${O({style:``},n)}" data-replace ${n.style?``:`aria-current="page"`}>הכל <sup>${N.length}</sup></a>
      ${t.map(e=>`<a href="${O({style:e.slug},n)}" data-replace ${n.style===e.slug?`aria-current="page"`:``}>${e.he} <sup>${r(e.slug)}</sup></a>`).join(``)}
    </nav>
    <form class="bar__selects" data-filter-form data-style="${n.style}">
      <label class="select"><span class="sr-only">מותג</span>
        <select name="brand" data-autosubmit><option value="">כל המותגים</option>${m.map(e=>`<option value="${e.slug}" ${n.brands[0]===e.slug?`selected`:``}>${o(e.name)}</option>`).join(``)}</select>${h(`chevron`)}</label>
      <label class="select"><span class="sr-only">מיון</span>
        <select name="sort" data-autosubmit>${A.map(([e,t])=>`<option value="${e}" ${n.sort===e?`selected`:``}>${t}</option>`).join(``)}</select>${h(`chevron`)}</label>
    </form>
  </div>
  <div class="wrap">${a.length?V(a,!0):`<div class="empty"><p>אין שעונים שמתאימים לבחירה הזו.</p><a class="btn btn--terra" href="#/collection" data-replace>לכל הקטלוג</a></div>`}</div>`}function K(t){let n=e(t.params.id),r=S(n.style),i=N.indexOf(n),s=N[(i+1)%N.length],c=N[(i-1+N.length)%N.length];return`<article class="pdp">
    <div class="pdp__media">
      <div class="gallery" data-gallery>
        <div class="gallery__track" data-gallery-track tabindex="0" aria-label="תמונות של ${o(n.name)}">
          <figure class="gallery__slide" data-gallery-slide><button class="gallery__zoom" type="button" data-zoom="${C(n)}" data-alt="${o(n.name)}" aria-label="הגדלת התמונה">${F(n,{large:!0,eager:!0})}</button></figure>
          <figure class="gallery__slide gallery__slide--photo" data-gallery-slide><button class="gallery__zoom" type="button" data-zoom="${j(n)}" data-alt="${o(n.name)}" aria-label="הגדלת התמונה"><img src="${j(n)}" width="900" height="1200" alt="${o(n.name)}, תמונה נוספת" loading="lazy" decoding="async"></button></figure>
        </div>
        <div class="gallery__nav">
          <button class="round" type="button" data-gallery-prev aria-label="התמונה הקודמת">${h(`back`)}</button>
          <span data-gallery-count dir="ltr"></span>
          <button class="round" type="button" data-gallery-next aria-label="התמונה הבאה">${h(`arrow`)}</button>
        </div>
      </div>
    </div>
    <div class="pdp__info">
      ${H([[`הקטלוג`,`#/collection`],[r.he,`#/collection/${r.slug}`]])}
      <p class="kicker">${a(n.brand)}</p>
      <h1 class="pdp__name">${a(n.name)}</h1>
      <p>${T(n)}</p>
      <p class="pdp__story">${a(n.description)}</p>
        <p class="fine">${d}</p>
      <div class="pdp__cta">
        ${z(_(n),`אני מעוניין בשעון הזה`,`btn btn--terra btn--lg`)}
        <span class="pdp__save">${b(n,`fav fav--text`)}<span aria-hidden="true">שמירה</span></span>
      </div>
      <dl class="specs">
        <div><dt>קטגוריה</dt><dd><a href="#/collection/${r.slug}">${r.he}</a></dd></div>
        ${n.specs.map(e=>`<div><dt>${e.label}</dt><dd>${a(e.value)}</dd></div>`).join(``)}
      </dl>
    </div>
  </article>
  <nav class="pager" aria-label="שעונים נוספים">
    <a class="pager__link" href="#/watch/${c.id}"><span class="kicker">הקודם</span><span class="pager__name">${a(c.name)}</span></a>
    <a class="pager__link pager__link--next" href="#/watch/${s.id}"><span class="kicker">הבא</span><span class="pager__name">${a(s.name)}</span></a>
  </nav>`}function q(){return`<section class="page-head">${H([[`אודות`]])}<h1 class="h1">אודות</h1></section>
  <section class="essay">
    <figure class="essay__img"><img src="${L(`scene3`)}" alt="" width="768" height="1376" loading="lazy" decoding="async"></figure>
    <div class="essay__text">
      <p class="essay__quote">„${s}”</p>
      <p>${x}</p>
    </div>
  </section>
  <section class="sec request" aria-labelledby="h-req">
    <div class="request__head"><h2 class="h2" id="h-req">${i}</h2><p class="lead">${l}</p></div>
    ${U(`about`)}
  </section>`}function J(t){let n=e(t.query.get(`w`)??``);return`<section class="page-head">${H([[`יצירת קשר`]])}<h1 class="h1">יצירת קשר ובקשת שעון</h1>
    <p class="lead">${i} ${l}</p></section>
  <div class="contact">
    ${z(f,`כתבו לנו בוואטסאפ`,`contact__wa`)}
    ${U(`c`,n?.name??``)}
  </div>`}function Y(){let e=p();return`<section class="page-head">${H([[`המועדפים`]])}<h1 class="h1">המועדפים</h1>
    <p class="lead">${e.length?`${g(e.length)} שמורים במכשיר הזה.`:`עוד לא שמרתם שעונים. הלב שבכל כרטיס שומר אותו כאן.`}</p></section>
  ${e.length?`<div class="fav-bar"><button class="btn btn--terra" type="button" data-wa-list>${h(`wa`)}<span>שליחת הרשימה למשה</span></button>
      <button class="text-link" type="button" data-fav-clear>ניקוי הרשימה</button></div>
    <div class="wrap">${V(e)}</div>`:`<div class="empty"><a class="btn btn--terra" href="#/collection">לקטלוג</a></div>`}`}function X(e){let t=e.query.get(`q`)??``,n=w(t);return`<section class="page-head">${H([[`חיפוש`]])}<h1 class="sr-only">חיפוש בקטלוג</h1>
    <form class="bigsearch" data-search-form role="search"><label class="sr-only" for="s-q">חיפוש בקטלוג</label>
      <input id="s-q" name="q" type="search" value="${o(t)}" placeholder="חיפוש לפי שם, מותג או תיאור" autocomplete="off" data-live-search>${h(`search`)}</form>
    <p class="lead" data-count>${y(t,n.length)}</p></section>
  <div class="wrap">${V(n)}</div>`}var Z=e=>{let t=n(e.params.slug);return`<article class="legal">${H([[t.title]])}<h1 class="h1">${t.title}</h1><div class="legal__body">${t.body}</div></article>`},Q=()=>`<section class="page-head nf"><p class="kicker">404</p><h1 class="h1">כאן אין כלום, רק חול.</h1>
  <p class="lead">ייתכן שהקישור השתנה.</p><a class="btn btn--terra" href="#/collection">לקטלוג</a></section>`;function $(){return`<a class="skip-link" href="#main" data-skip>דלג לתוכן</a>
  <header class="hd">
    <a class="hd__logo" href="#/" aria-label="Moshe, דף הבית">${I(`compact`,{decorative:!0})}</a>
    <div class="hd__end">
      <a class="hd__fav" href="#/favorites" data-nav="favorites" aria-label="המועדפים">${h(`heart`)}<span class="hd__count" data-fav-count hidden></span></a>
      <button class="hd__menu" type="button" data-open="menu" aria-label="פתיחת התפריט"><span>תפריט</span><span class="hd__lines" aria-hidden="true"></span></button>
    </div>
  </header>
  <dialog class="side" id="menu" aria-label="תפריט">
    <div class="side__in">
      <button class="side__close" type="button" data-close aria-label="סגירת התפריט">${h(`close`)}</button>
      <nav aria-label="ניווט ראשי"><ol class="side__nav" role="list">${[[`#/`,`home`,`בית`],[`#/collection`,`collection`,`הקטלוג`],[`#/about`,`about`,`אודות`],[`#/contact`,`contact`,`כתבו למשה`],[`#/favorites`,`favorites`,`המועדפים`]].map(([e,t,n],r)=>`<li><a href="${e}" data-nav="${t}"><span>${R(r)}</span>${n}</a></li>`).join(``)}</ol></nav>
      <div class="side__cats"><p class="kicker">קטגוריות</p>${t.map(e=>`<a href="#/collection/${e.slug}">${e.he}</a>`).join(``)}<a href="#/search">חיפוש ${h(`search`)}</a></div>
      <div class="side__foot"><span class="side__mark" data-live-clock>${I(`mark`,{decorative:!0})}</span><p>${u}</p></div>
    </div>
  </dialog>
  <main id="main" tabindex="-1"></main>
  <footer class="ft">
    <p class="ft__slogan">${u}</p>
    <nav class="ft__nav" aria-label="ניווט תחתון">
      <a href="#/collection">הקטלוג</a><a href="#/about">אודות</a><a href="#/contact">כתבו למשה</a><a href="#/search">חיפוש</a>
      <a href="#/page/accessibility">הצהרת נגישות</a><a href="#/page/privacy">מדיניות פרטיות</a>
    </nav>
    <div class="ft__base"><span class="ft__logo">${I(`compact`,{decorative:!0})}</span>
      <p>${c}</p><p>הדגמת עיצוב · <a href="../../index.html">לכל הכיוונים</a></p></div>
  </footer>`}v({layout:$,views:{home:W,collection:G,watch:K,about:q,contact:J,favorites:Y,search:X,page:Z,notfound:Q},list:e=>e.map((e,t)=>`<li>${B(e,t)}</li>`).join(``)});