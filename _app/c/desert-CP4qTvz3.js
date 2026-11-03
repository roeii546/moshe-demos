import"../modulepreload-polyfill-P2Xu9kJm.js";import{A as e,B as t,C as n,D as r,E as i,F as a,I as o,M as s,N as c,O as l,P as u,R as d,S as f,T as p,V as m,_ as h,a as g,b as _,c as v,d as y,f as b,g as x,h as S,i as C,j as w,l as T,m as E,o as D,p as O,r as k,s as A,t as j,u as M,w as N,x as P,y as F,z as I}from"../app-7QaXeBqF.js";var L=e=>E(`desert`,e),R=e=>String(e+1).padStart(2,`0`),z=(e,t,n=`btn`)=>`<a class="${n}" href="${F(e)}" target="_blank" rel="noopener">${T(`wa`)}<span>${t}</span></a>`,B=(t,n=0,r=!1)=>`<article class="card${r?` card--feature`:``}">
  <a class="card__link" href="#/watch/${t.id}">
    <div class="card__plinth">${_(t,r?{sizes:`(min-width: 900px) 60vw, 100vw`}:{})}</div>
    <div class="card__text">
      <span class="card__n">${R(n)}</span>
      <p class="card__style">${I(e(t.style)?.he??``)}</p>
      <h3 class="card__name">${d(t.name)}</h3>
      <p class="card__brand">${d(t.brand)}</p>
    </div>
  </a>
  ${g(t,`fav card__fav`)}
</article>`,V=(e,t=!1)=>`<ul class="grid" role="list" data-results>${e.map((e,n)=>`<li${t&&n===0?` class="grid__wide"`:``}>${B(e,n,t&&n===0)}</li>`).join(``)}</ul>`,H=e=>`<nav class="crumbs" aria-label="מיקום באתר">
  <a href="#/">בית</a>${e.map(([e,t])=>`<span aria-hidden="true">—</span>${t?`<a href="${t}">${d(e)}</a>`:`<span aria-current="page">${d(e)}</span>`}`).join(``)}
</nav>`,U=(e,t=``)=>`<form class="form" data-wa-form data-wa-intro="היי, פנייה מהאתר:" novalidate>
  <div class="field"><label for="${e}-name">שם מלא</label>
    <input id="${e}-name" name="name" required autocomplete="name" data-label="שם" data-msg="איך לפנות אליכם?" aria-describedby="${e}-e-name">
    <p class="field__err" id="${e}-e-name" data-error-for="name"></p></div>
  <div class="field"><label for="${e}-want">שעון מהקטלוג</label>
    <select id="${e}-want" name="want" data-label="שעון מהקטלוג"><option value="">בחרו שעון</option>
      ${p.map(e=>`<option ${t===e.name?`selected`:``}>${I(e.name)}</option>`).join(``)}</select></div>
  <div class="field"><label for="${e}-desc">תיאור השעון שמחפשים: מותג, דגם ותקציב <span class="fine">(לא חובה)</span></label>
    <input id="${e}-desc" name="desc" data-label="תיאור השעון"></div>
  <div class="field"><label for="${e}-msg">הודעה <span class="fine">(לא חובה)</span></label>
    <textarea id="${e}-msg" name="msg" rows="3" data-label="הודעה"></textarea></div>
  <button class="btn btn--terra" type="submit">${T(`wa`)}<span>שליחה בוואטסאפ</span></button>
  <p class="form__status" data-form-status role="status"></p>
  <p class="fine">הטופס לא שולח דבר לשרת. הוא מכין הודעה בוואטסאפ, ורק אתם מחליטים אם לשלוח.</p>
</form>`;function W(){return`<section class="hero">
    <img class="hero__bg" src="${L(`scene2`)}" alt="" width="768" height="1376" fetchpriority="high">
    <div class="hero__in">
      <h1 class="hero__title">${t}</h1>
      <a class="hero__cta" href="#/collection">לקטלוג השעונים <span class="hero__arrow">${T(`arrow`)}</span></a>
    </div>
  </section>

  <section class="look" aria-labelledby="h-look">
    <div class="look__head">
      <h2 class="h2" id="h-look">שעונים נבחרים</h2>
      <p class="look__hint">החליקו לצפייה ${T(`arrow`)}</p>
    </div>
    <div class="look__frame" data-gallery>
      <ul class="look__track" role="list" data-gallery-track tabindex="0" aria-label="שעונים נבחרים">
        ${p.map((t,n)=>`<li class="look__slide" data-gallery-slide>
          <a class="look__link" href="#/watch/${t.id}">
            <div class="look__plinth">${_(t,{sizes:`(min-width: 900px) 45vw, 86vw`,eager:n===0})}</div>
            <span class="look__n" dir="ltr">${R(n)} / ${R(p.length-1)}</span>
            <span class="look__name">${d(t.name)}</span>
            <span class="look__meta">${d(t.brand)} · ${I(e(t.style)?.he??``)}</span>
          </a>
        </li>`).join(``)}
      </ul>
      <div class="look__nav">
        <button class="round" type="button" data-gallery-prev aria-label="הקודם">${T(`back`)}</button>
        <span class="look__count" data-gallery-count dir="ltr"></span>
        <button class="round" type="button" data-gallery-next aria-label="הבא">${T(`arrow`)}</button>
      </div>
    </div>
  </section>

  <section class="index" aria-labelledby="h-index">
    <h2 class="h2" id="h-index">קטגוריות</h2>
    <ol class="index__list" role="list">
      ${N.map((e,t)=>`<li><a class="index__row" href="#/collection/${e.slug}">
        <span class="index__n">${R(t)}</span><span class="index__name">${e.he}</span><span class="index__count">${r(e.slug)}</span></a></li>`).join(``)}
      <li><a class="index__row" href="#/collection"><span class="index__n">${R(N.length)}</span><span class="index__name">כל הקטלוג</span>
        <span class="index__blurb">${P.map(e=>e.name).join(` · `)}</span><span class="index__count">${p.length}</span></a></li>
    </ol>
  </section>

  <section class="dusk" aria-labelledby="h-dusk">
    <img class="dusk__bg" src="${L(`hero-far`)}" alt="" width="768" height="1376" loading="lazy" decoding="async">
    <div class="dusk__in" data-reveal>
      <h2 class="dusk__title" id="h-dusk">${c}</h2>
      <p class="dusk__text">${s}</p>
    </div>
  </section>

  <section class="sec request" aria-labelledby="h-req">
    <div class="request__head"><h2 class="h2" id="h-req">${o}</h2><p class="lead">${a}</p></div>
    ${U(`home`)}
  </section>`}function G(t){let n=A(t),i=e(n.style),a=v(n);return`<section class="page-head">
    ${H(i?[[`הקטלוג`,`#/collection`],[i.he]]:[[`הקטלוג`]])}
    <h1 class="h1">${i?i.he:`הקטלוג`}</h1>
    ${i?``:`<p class="lead">${f}</p>`}
  </section>
  <div class="bar">
    <nav class="tabs" aria-label="קטגוריות">
      <a href="${C({style:``},n)}" data-replace ${n.style?``:`aria-current="page"`}>הכל <sup>${p.length}</sup></a>
      ${N.map(e=>`<a href="${C({style:e.slug},n)}" data-replace ${n.style===e.slug?`aria-current="page"`:``}>${e.he} <sup>${r(e.slug)}</sup></a>`).join(``)}
    </nav>
    <form class="bar__selects" data-filter-form data-style="${n.style}">
      <label class="select"><span class="sr-only">מותג</span>
        <select name="brand" data-autosubmit><option value="">כל המותגים</option>${P.map(e=>`<option value="${e.slug}" ${n.brands[0]===e.slug?`selected`:``}>${I(e.name)}</option>`).join(``)}</select>${T(`chevron`)}</label>
      <label class="select"><span class="sr-only">מיון</span>
        <select name="sort" data-autosubmit>${j.map(([e,t])=>`<option value="${e}" ${n.sort===e?`selected`:``}>${t}</option>`).join(``)}</select>${T(`chevron`)}</label>
    </form>
  </div>
  <div class="wrap">${a.length?V(a,!0):`<div class="empty"><p>אין שעונים שמתאימים לבחירה הזו.</p><a class="btn btn--terra" href="#/collection" data-replace>לכל הקטלוג</a></div>`}</div>`}function K(t){let r=w(t.params.id),i=e(r.style),a=p.indexOf(r),o=p[(a+1)%p.length],s=p[(a-1+p.length)%p.length];return`<article class="pdp">
    <div class="pdp__media">
      <div class="gallery" data-gallery>
        <div class="gallery__track" data-gallery-track tabindex="0" aria-label="תמונות של ${I(r.name)}">
          <figure class="gallery__slide" data-gallery-slide><button class="gallery__zoom" type="button" data-zoom="${M(r)}" data-alt="${I(r.name)}" aria-label="הגדלת התמונה">${_(r,{large:!0,eager:!0})}</button></figure>
          <figure class="gallery__slide gallery__slide--photo" data-gallery-slide><button class="gallery__zoom" type="button" data-zoom="${y(r)}" data-alt="${I(r.name)}" aria-label="הגדלת התמונה"><img src="${y(r)}" width="900" height="1200" alt="${I(r.name)}, תמונה נוספת" loading="lazy" decoding="async"></button></figure>
        </div>
        <div class="gallery__nav">
          <button class="round" type="button" data-gallery-prev aria-label="התמונה הקודמת">${T(`back`)}</button>
          <span data-gallery-count dir="ltr"></span>
          <button class="round" type="button" data-gallery-next aria-label="התמונה הבאה">${T(`arrow`)}</button>
        </div>
      </div>
    </div>
    <div class="pdp__info">
      ${H([[`הקטלוג`,`#/collection`],[i.he,`#/collection/${i.slug}`]])}
      <p class="kicker">${d(r.brand)}</p>
      <h1 class="pdp__name">${d(r.name)}</h1>
      <p>${k(r)}</p>
      <p class="pdp__story">${d(r.description)}</p>
        <p class="fine">${n}</p>
      <div class="pdp__cta">
        ${z(O(r),`אני מעוניין בשעון הזה`,`btn btn--terra btn--lg`)}
        <span class="pdp__save">${g(r,`fav fav--text`)}<span aria-hidden="true">שמירה</span></span>
      </div>
      <dl class="specs">
        <div><dt>קטגוריה</dt><dd><a href="#/collection/${i.slug}">${i.he}</a></dd></div>
        ${r.specs.map(e=>`<div><dt>${e.label}</dt><dd>${d(e.value)}</dd></div>`).join(``)}
      </dl>
    </div>
  </article>
  <nav class="pager" aria-label="שעונים נוספים">
    <a class="pager__link" href="#/watch/${s.id}"><span class="kicker">הקודם</span><span class="pager__name">${d(s.name)}</span></a>
    <a class="pager__link pager__link--next" href="#/watch/${o.id}"><span class="kicker">הבא</span><span class="pager__name">${d(o.name)}</span></a>
  </nav>`}function q(){return`<section class="page-head">${H([[`אודות`]])}<h1 class="h1">אודות</h1></section>
  <section class="essay">
    <figure class="essay__img"><img src="${L(`scene3`)}" alt="" width="768" height="1376" loading="lazy" decoding="async"></figure>
    <div class="essay__text">
      <p class="essay__quote">„${c}”</p>
      <p>${s}</p>
    </div>
  </section>
  <section class="sec request" aria-labelledby="h-req">
    <div class="request__head"><h2 class="h2" id="h-req">${o}</h2><p class="lead">${a}</p></div>
    ${U(`about`)}
  </section>`}function J(e){let t=w(e.query.get(`w`)??``);return`<section class="page-head">${H([[`יצירת קשר`]])}<h1 class="h1">יצירת קשר ובקשת שעון</h1>
    <p class="lead">${o} ${a}</p></section>
  <div class="contact">
    ${z(i,`כתבו לנו בוואטסאפ`,`contact__wa`)}
    ${U(`c`,t?.name??``)}
  </div>`}function Y(){let e=D();return`<section class="page-head">${H([[`המועדפים`]])}<h1 class="h1">המועדפים</h1>
    <p class="lead">${e.length?`${b(e.length)} שמורים במכשיר הזה.`:`עוד לא שמרתם שעונים. הלב שבכל כרטיס שומר אותו כאן.`}</p></section>
  ${e.length?`<div class="fav-bar"><button class="btn btn--terra" type="button" data-wa-list>${T(`wa`)}<span>שליחת הרשימה למשה</span></button>
      <button class="text-link" type="button" data-fav-clear>ניקוי הרשימה</button></div>
    <div class="wrap">${V(e)}</div>`:`<div class="empty"><a class="btn btn--terra" href="#/collection">לקטלוג</a></div>`}`}function X(e){let t=e.query.get(`q`)??``,n=S(t);return`<section class="page-head">${H([[`חיפוש`]])}<h1 class="sr-only">חיפוש בקטלוג</h1>
    <form class="bigsearch" data-search-form role="search"><label class="sr-only" for="s-q">חיפוש בקטלוג</label>
      <input id="s-q" name="q" type="search" value="${I(t)}" placeholder="חיפוש לפי שם, מותג או תיאור" autocomplete="off" data-live-search>${T(`search`)}</form>
    <p class="lead" data-count>${x(t,n.length)}</p></section>
  <div class="wrap">${V(n)}</div>`}var Z=e=>{let t=l(e.params.slug);return`<article class="legal">${H([[t.title]])}<h1 class="h1">${t.title}</h1><div class="legal__body">${t.body}</div></article>`},Q=()=>`<section class="page-head nf"><p class="kicker">404</p><h1 class="h1">כאן אין כלום, רק חול.</h1>
  <p class="lead">ייתכן שהקישור השתנה.</p><a class="btn btn--terra" href="#/collection">לקטלוג</a></section>`;function $(){return`<a class="skip-link" href="#main" data-skip>דלג לתוכן</a>
  <header class="hd">
    <a class="hd__logo" href="#/" aria-label="Moshe, דף הבית">${m(`compact`,{decorative:!0})}</a>
    <div class="hd__end">
      <a class="hd__fav" href="#/favorites" data-nav="favorites" aria-label="המועדפים">${T(`heart`)}<span class="hd__count" data-fav-count hidden></span></a>
      <button class="hd__menu" type="button" data-open="menu" aria-label="פתיחת התפריט"><span>תפריט</span><span class="hd__lines" aria-hidden="true"></span></button>
    </div>
  </header>
  <dialog class="side" id="menu" aria-label="תפריט">
    <div class="side__in">
      <button class="side__close" type="button" data-close aria-label="סגירת התפריט">${T(`close`)}</button>
      <nav aria-label="ניווט ראשי"><ol class="side__nav" role="list">${[[`#/`,`home`,`בית`],[`#/collection`,`collection`,`הקטלוג`],[`#/about`,`about`,`אודות`],[`#/contact`,`contact`,`כתבו למשה`],[`#/favorites`,`favorites`,`המועדפים`]].map(([e,t,n],r)=>`<li><a href="${e}" data-nav="${t}"><span>${R(r)}</span>${n}</a></li>`).join(``)}</ol></nav>
      <div class="side__cats"><p class="kicker">קטגוריות</p>${N.map(e=>`<a href="#/collection/${e.slug}">${e.he}</a>`).join(``)}<a href="#/search">חיפוש ${T(`search`)}</a></div>
      <div class="side__foot"><span class="side__mark" data-live-clock>${m(`mark`,{decorative:!0})}</span><p>${t}</p></div>
    </div>
  </dialog>
  <main id="main" tabindex="-1"></main>
  <footer class="ft">
    <p class="ft__slogan">${t}</p>
    <nav class="ft__nav" aria-label="ניווט תחתון">
      <a href="#/collection">הקטלוג</a><a href="#/about">אודות</a><a href="#/contact">כתבו למשה</a><a href="#/search">חיפוש</a>
      <a href="#/page/accessibility">הצהרת נגישות</a><a href="#/page/privacy">מדיניות פרטיות</a>
    </nav>
    <div class="ft__base"><span class="ft__logo">${m(`compact`,{decorative:!0})}</span>
      <p>${u}</p><p>הדגמת עיצוב · <a href="../../index.html">לכל הכיוונים</a></p></div>
  </footer>`}h({layout:$,views:{home:W,collection:G,watch:K,about:q,contact:J,favorites:Y,search:X,page:Z,notfound:Q},list:e=>e.map((e,t)=>`<li>${B(e,t)}</li>`).join(``)});