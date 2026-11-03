import"../modulepreload-polyfill-P2Xu9kJm.js";import{A as e,C as t,D as n,E as r,F as i,I as a,L as o,M as s,N as c,O as l,P as u,S as d,T as f,_ as p,a as m,b as h,c as g,d as _,f as v,g as y,i as b,j as x,k as S,l as C,m as w,n as T,o as E,p as D,r as O,s as k,t as A,u as j,v as M,w as N,x as P,y as F}from"../app-CtbY0W0U.js";var I=e=>_(`forest`,e),L=(e,t,n=`btn btn--green`)=>`<a class="${n}" href="${p(e)}" target="_blank" rel="noopener">${g(`wa`)}<span>${t}</span></a>`,R=()=>{let e=new Date().getHours();return e<5?`לילה טוב`:e<12?`בוקר טוב`:e<17?`צהריים טובים`:e<21?`ערב טוב`:`לילה טוב`},z=()=>N[Math.floor(Date.now()/6048e5)%N.length],B=e=>`<article class="card">
  <a class="card__link" href="#/watch/${e.id}">
    <div class="card__img">${M(e)}</div>
    <p class="card__brand">${u(e.brand)}</p>
    <h3 class="card__name">${u(e.name)}</h3>
  </a>
  ${b(e,`fav card__fav`)}
</article>`,V=e=>`<ul class="grid" role="list" data-results>${e.map(e=>`<li>${B(e)}</li>`).join(``)}</ul>`,H=(e,t)=>`<a class="back" href="${e}">${g(`back`)}<span>${t}</span></a>`,U=[`heart`,`wa`,`swap`],W=()=>`<ol class="steps" role="list">${t.map(([e,t],n)=>`<li class="steps__card">
  <span class="steps__icon">${g(U[n])}</span><h3>${e}</h3><p>${t}</p></li>`).join(``)}</ol>`,G=[`scene2`,`hero-far`,`hero-near`];function K(){let e=z();return`<section class="greet">
    <div><p class="greet__hi">${R()}</p><h1 class="greet__title">ברוכים הבאים לאוסף</h1></div>
    <span class="greet__clock" data-live-clock aria-hidden="true">${o(`mark`,{decorative:!0})}</span>
  </section>

  <a class="hero" href="#/collection">
    <img src="${I(`scene3`)}" alt="" width="768" height="1376" fetchpriority="high">
    <span class="hero__in">
      <span class="hero__slogan">${a}</span>
      <span class="hero__sub">אוסף שעונים פרטי · להחלפות בין חובבים</span>
      <span class="hero__cta">לאוסף ${g(`arrow`)}</span>
    </span>
  </a>

  <nav class="brands" aria-label="מותגים">${h.map(e=>`<a class="brand" href="${O({brands:[e.slug]})}"><span class="brand__name">${u(e.name)}</span><span class="brand__n">${N.filter(t=>t.brandSlug===e.slug).length}</span></a>`).join(``)}</nav>

  <section class="sec" aria-labelledby="h-pick">
    <div class="sec__head"><h2 class="h2" id="h-pick">בחירת השבוע</h2></div>
    <article class="pick">
      <a class="pick__link" href="#/watch/${e.id}">
        <div class="pick__img">${M(e,{sizes:`(min-width: 900px) 40vw, 90vw`})}</div>
        <div class="pick__body">
          <p class="card__brand">${u(e.brand)}</p>
          <h3 class="pick__name">${u(e.name)}</h3>
          <p class="pick__short">${u(e.short)}</p>
          <span class="pick__cta">לפרטים ${g(`arrow`)}</span>
        </div>
      </a>
      ${b(e,`fav card__fav`)}
    </article>
  </section>

  <section class="sec" aria-labelledby="h-cats">
    <div class="sec__head"><h2 class="h2" id="h-cats">קטגוריות</h2></div>
    <ul class="cats" role="list">${d.map((e,t)=>`<li><a class="cat" href="#/collection/${e.slug}">
      <img src="${I(G[t%G.length])}" alt="" width="768" height="1376" loading="lazy" decoding="async">
      <span class="cat__name">${e.he}</span><span class="cat__n">${f(e.slug)}</span></a></li>`).join(``)}</ul>
  </section>

  <section class="sec" aria-labelledby="h-all">
    <div class="sec__head"><h2 class="h2" id="h-all">כל האוסף</h2><a class="more" href="#/collection">הכל ${g(`arrow`)}</a></div>
    ${V(N.slice(0,4))}
  </section>

  <section class="sec" aria-labelledby="h-how">
    <div class="sec__head"><h2 class="h2" id="h-how">איך מציעים החלפה</h2></div>
    ${W()}
  </section>

  <section class="sec">
    <div class="talk">
      <h2 class="h2">${c}</h2>
      <p>${s}</p>
      <div class="talk__cta">${L(`היי משה, `,`כתבו למשה`,`btn btn--gold`)}<a class="btn btn--ghost-light" href="#/contact">לטופס</a></div>
    </div>
  </section>`}function q(e){let t=E(e),r=n(t.style),i=k(t);return`<section class="top">
    <h1 class="h1">${r?r.he:`האוסף`}</h1>
    <p class="muted">${j(i.length)}${r?` · ${r.blurb}`:``}</p>
  </section>
  <nav class="seg" aria-label="קטגוריות">
    <a href="${O({style:``},t)}" data-replace ${t.style?``:`aria-current="page"`}>הכל</a>
    ${d.map(e=>`<a href="${O({style:e.slug},t)}" data-replace ${t.style===e.slug?`aria-current="page"`:``}>${e.he}</a>`).join(``)}
  </nav>
  <div class="filters">
    ${h.map(e=>{let n=t.brands.includes(e.slug),r=n?t.brands.filter(t=>t!==e.slug):[...t.brands,e.slug];return`<a class="toggle" href="${O({brands:r},t)}" data-replace ${n?`aria-current="true"`:``}>${n?g(`close`):``}${u(e.name)}</a>`}).join(``)}
    <form class="sort" data-filter-form data-style="${t.style}">
      ${t.brands.map(e=>`<input type="hidden" name="brand" value="${e}">`).join(``)}
      <label class="sr-only" for="sort">מיון</label>
      <select id="sort" name="sort" data-autosubmit>${A.map(([e,n])=>`<option value="${e}" ${t.sort===e?`selected`:``}>${n}</option>`).join(``)}</select>
    </form>
  </div>
  <div class="pad">${i.length?V(i):`<div class="empty"><p>אין שעונים שמתאימים לבחירה הזו.</p><a class="btn btn--green" href="#/collection" data-replace>הצגת הכל</a></div>`}</div>`}function J(e){let r=l(e.params.id),a=n(r.style),o=N.filter(e=>e.id!==r.id);return`<div class="pdp">
    <div class="pdp__top">${H(`#/collection`,`האוסף`)}<button class="icon-btn" type="button" data-share aria-label="שיתוף השעון">${g(`share`)}</button></div>
    <div class="gallery" data-gallery>
      <div class="gallery__track" data-gallery-track tabindex="0" aria-label="תמונות של ${i(r.name)}">
        <figure class="gallery__slide" data-gallery-slide><button class="gallery__zoom" type="button" data-zoom="${C(r)}" data-alt="${i(r.name)}" aria-label="הגדלת התמונה">${M(r,{large:!0,eager:!0})}</button></figure>
        <figure class="gallery__slide" data-gallery-slide><button class="gallery__zoom" type="button" data-zoom="${F(r)}" data-alt="${i(r.name)}, תקריב" aria-label="הגדלת התקריב"><img src="${F(r)}" width="1000" height="1000" alt="${i(r.name)}, תקריב של הלוח" loading="lazy" decoding="async"></button></figure>
      </div>
      <div class="gallery__dots"><button type="button" data-gallery-go="0" aria-label="תמונה 1"></button><button type="button" data-gallery-go="1" aria-label="תמונה 2: תקריב"></button></div>
    </div>
    <div class="pdp__body">
      <p class="card__brand">${u(r.brand)}</p>
      <h1 class="pdp__name">${u(r.name)}</h1>
      <div class="pdp__chips"><a class="chip" href="#/collection/${a.slug}">${a.he}</a><span class="chip chip--soft">להחלפה</span></div>
      <p class="pdp__short">${u(r.short)}</p>
      <div class="pdp__cta-desk">${L(y(r),`להצעת החלפה`)}${b(r,`fav fav--bar`)}</div>
      <section class="panel" aria-labelledby="h-det"><h2 class="panel__h" id="h-det">פרטים</h2>
        <dl class="details">${r.details.map(([e,t])=>`<div><dt>${e}</dt><dd>${u(t)}</dd></div>`).join(``)}</dl></section>
      <section class="panel" aria-labelledby="h-trade"><h2 class="panel__h" id="h-trade">איך מציעים החלפה</h2>
        <ol class="mini-steps">${t.map(([e,t])=>`<li><strong>${e}</strong><span>${t}</span></li>`).join(``)}</ol>
        <p class="muted">שאלה לפני? ${L(T(r),`שאלו את משה`,`inline-link`)}</p></section>
      <p class="fine">${x}</p>
    </div>
    <section class="sec" aria-labelledby="h-more"><div class="sec__head"><h2 class="h2" id="h-more">עוד מהאוסף</h2></div>
      <ul class="rail" role="list">${o.map(e=>`<li>${B(e)}</li>`).join(``)}</ul></section>
  </div>
  <div class="actionbar">${b(r,`fav fav--bar`)}${L(y(r),`להצעת החלפה`,`btn btn--green actionbar__cta`)}</div>`}function Y(){return`<section class="top">${H(`#/`,`בית`)}<h1 class="h1">אודות</h1></section>
  <div class="pad">
    <div class="about-card">
      <img src="${I(`scene2`)}" alt="" width="768" height="1376" loading="lazy" decoding="async">
      <div class="about-card__body"><span class="about-card__mark">${o(`mark`,{decorative:!0})}</span>
        <h2 class="h2">${e}</h2><p>${S}</p></div>
    </div>
    <p class="fine about-note">${x}</p>
  </div>
  <section class="sec"><div class="sec__head"><h2 class="h2">איך מציעים החלפה</h2></div>${W()}</section>
  <section class="sec"><div class="sec__head"><h2 class="h2">שאלות נפוצות</h2></div>
    <div class="panel panel--list">${P.map(([e,t])=>`<details class="acc"><summary>${e}${g(`chevron`)}</summary><p>${t}</p></details>`).join(``)}</div></section>`}function X(e){let t=l(e.query.get(`w`)??``);return`<section class="top"><h1 class="h1">יצירת קשר</h1><p class="muted">הצעת החלפה, שאלה או דגם שאתם מחפשים.</p></section>
  <div class="pad contact">
    <a class="wa-card" href="${p(`היי משה, `)}" target="_blank" rel="noopener">
      <span class="wa-card__icon">${g(`wa`)}</span><span><strong>וואטסאפ</strong><span>תשובה הכי מהירה</span></span>${g(`arrow`)}
    </a>
    <form class="panel form" data-wa-form data-wa-intro="היי משה, הגעתי מהאתר." novalidate>
      <h2 class="panel__h">הצעת החלפה</h2>
      <div class="field"><label for="c-name">שם</label>
        <input id="c-name" name="name" required autocomplete="name" data-label="שם" data-msg="איך לפנות אליכם?" aria-describedby="e-name">
        <p class="field__err" id="e-name" data-error-for="name"></p></div>
      <div class="field"><label for="c-want">השעון שמעניין אתכם</label>
        <select id="c-want" name="want" data-label="מעניין אותי"><option value="">עוד לא בחרתי</option>
          ${N.map(e=>`<option ${t?.id===e.id?`selected`:``}>${i(e.name)}</option>`).join(``)}<option>דגם שלא מופיע באוסף</option></select></div>
      <div class="field"><label for="c-offer">מה יש לכם להציע</label>
        <textarea id="c-offer" name="offer" rows="3" required data-label="יש לי להציע" data-msg="ספרו בקצרה איזה שעון יש לכם" aria-describedby="e-offer"></textarea>
        <p class="field__err" id="e-offer" data-error-for="offer"></p></div>
      <button class="btn btn--green btn--block" type="submit">${g(`wa`)}<span>הכנת הודעה בוואטסאפ</span></button>
      <p class="form__status" data-form-status role="status"></p>
      <p class="fine">הטופס לא שולח דבר לשרת. הוא מכין הודעה בוואטסאפ, ורק אתם מחליטים אם לשלוח.</p>
    </form>
    <div class="panel panel--list">${P.slice(0,2).map(([e,t])=>`<details class="acc"><summary>${e}${g(`chevron`)}</summary><p>${t}</p></details>`).join(``)}</div>
  </div>`}function Z(){let e=m();return`<section class="top"><h1 class="h1">מועדפים</h1><p class="muted">${e.length?`${j(e.length)} שמורים במכשיר הזה`:`עוד אין כאן כלום`}</p></section>
  ${e.length?`<div class="pad"><ul class="list" role="list" data-results>${e.map(e=>`<li>${Q(e)}</li>`).join(``)}</ul>
    <div class="fav-actions"><button class="btn btn--green btn--block" type="button" data-wa-list>${g(`wa`)}<span>שליחת הרשימה למשה</span></button>
    <button class="btn btn--plain" type="button" data-fav-clear>${g(`trash`)}<span>ניקוי</span></button></div></div>`:`<div class="pad"><div class="empty">${g(`heart`,`empty__icon`)}<p>לחצו על הלב בכל שעון כדי לשמור אותו כאן.</p><a class="btn btn--green" href="#/collection">לאוסף</a></div></div>`}`}var Q=e=>`<article class="item">
  <a class="item__link" href="#/watch/${e.id}">
    <span class="item__img">${M(e,{sizes:`5rem`})}</span>
    <span class="item__body"><span class="card__brand">${u(e.brand)}</span><span class="item__name">${u(e.name)}</span><span class="muted">${i(n(e.style)?.he??``)}</span></span>
  </a>
  ${b(e,`fav item__fav`)}
</article>`;function $(e){let t=e.query.get(`q`)??``,n=v(t);return`<section class="top"><h1 class="h1">חיפוש</h1>
    <form class="searchbox" data-search-form role="search"><label class="sr-only" for="s-q">חיפוש באוסף</label>
      ${g(`search`)}<input id="s-q" name="q" type="search" value="${i(t)}" placeholder="דגם, מותג או סגנון" autocomplete="off" data-live-search ${t?``:`autofocus`}></form>
    <div class="quick">${h.map(e=>`<a class="chip" href="${O({brands:[e.slug]})}">${u(e.name)}</a>`).join(``)}${d.map(e=>`<a class="chip" href="#/collection/${e.slug}">${e.he}</a>`).join(``)}</div>
    <p class="muted" data-count>${D(t,n.length)}</p></section>
  <div class="pad">${V(n)}</div>`}var ee=e=>{let t=r(e.params.slug);return`<article class="legal">${H(`#/`,`בית`)}<h1 class="h1">${t.title}</h1><div class="legal__body panel">${t.body}</div></article>`},te=()=>`<div class="pad"><div class="empty empty--page">${g(`watch`,`empty__icon`)}<h1 class="h1">העמוד לא נמצא</h1>
  <p>ייתכן שהקישור השתנה.</p><a class="btn btn--green" href="#/">לדף הבית</a></div></div>`;function ne(){let e=[[`#/`,`home`,`home`,`בית`],[`#/collection`,`collection`,`watch`,`האוסף`],[`#/search`,`search`,`search`,`חיפוש`],[`#/favorites`,`favorites`,`heart`,`מועדפים`],[`#/contact`,`contact`,`wa`,`קשר`]];return`<a class="skip-link" href="#main" data-skip>דלג לתוכן</a>
  <header class="hd">
    <a class="hd__logo" href="#/" aria-label="Moshe, דף הבית">${o(`compact`,{decorative:!0})}</a>
    <nav class="hd__nav" aria-label="ניווט ראשי">${e.map(([e,t,,n])=>`<a href="${e}" data-nav="${t}">${n}</a>`).join(``)}<a href="#/about" data-nav="about">אודות</a></nav>
  </header>
  <main id="main" tabindex="-1"></main>
  <footer class="ft">
    <span class="ft__logo">${o(`compact`,{decorative:!0})}</span>
    <nav class="ft__nav" aria-label="ניווט תחתון"><a href="#/about">אודות</a><a href="#/page/accessibility">הצהרת נגישות</a><a href="#/page/privacy">מדיניות פרטיות</a></nav>
    <p>${x}</p>
    <p>הדגמת עיצוב · <a href="../../index.html">לכל הכיוונים</a></p>
  </footer>
  <nav class="tabbar" aria-label="ניווט">${e.map(([e,t,n,r])=>`<a href="${e}" data-nav="${t}">${g(n)}<span>${r}</span>${t===`favorites`?`<span class="tabbar__badge" data-fav-count hidden></span>`:``}</a>`).join(``)}</nav>`}w({layout:ne,views:{home:K,collection:q,watch:J,about:Y,contact:X,favorites:Z,search:$,page:ee,notfound:te},list:(e,t)=>t===`favorites`?e.map(e=>`<li>${Q(e)}</li>`).join(``):e.map(e=>`<li>${B(e)}</li>`).join(``)});