import"../modulepreload-polyfill-P2Xu9kJm.js";import{A as e,C as t,D as n,E as r,M as i,N as a,O as o,P as s,S as c,T as l,_ as u,a as d,b as f,c as p,d as m,f as h,g,i as _,j as v,k as y,l as b,m as x,n as S,o as C,p as w,r as T,s as E,t as D,u as O,v as k,w as A,x as j,y as M}from"../app-AOygONBt.js";var N=e=>m(`forest`,e),P=(e,t,n=`btn btn--green`)=>`<a class="${n}" href="${g(e)}" target="_blank" rel="noopener">${E(`wa`)}<span>${t}</span></a>`,F=()=>{let e=new Date().getHours();return e<5?`לילה טוב`:e<12?`בוקר טוב`:e<17?`צהריים טובים`:e<21?`ערב טוב`:`לילה טוב`},I=()=>j[Math.floor(Date.now()/6048e5)%j.length],L=e=>`<article class="card">
  <a class="card__link" href="#/watch/${e.id}">
    <div class="card__img">${u(e)}</div>
    <p class="card__brand">${v(e.brand)}</p>
    <h3 class="card__name">${v(e.name)}</h3>
  </a>
  ${T(e,`fav card__fav`)}
</article>`,R=e=>`<ul class="grid" role="list" data-results>${e.map(e=>`<li>${L(e)}</li>`).join(``)}</ul>`,z=(e,t)=>`<a class="back" href="${e}">${E(`back`)}<span>${t}</span></a>`,B=[`scene2`,`hero-far`,`hero-near`];function V(){let t=I();return`<section class="greet">
    <div><p class="greet__hi">${F()}</p><h1 class="greet__title">ברוכים הבאים</h1></div>
    <span class="greet__clock" data-live-clock aria-hidden="true">${s(`mark`,{decorative:!0})}</span>
  </section>

  <a class="hero" href="#/collection">
    <img src="${N(`scene3`)}" alt="" width="768" height="1376" fetchpriority="high">
    <span class="hero__in">
      <span class="hero__slogan">${a}</span>
      <span class="hero__cta">לקטלוג השעונים ${E(`arrow`)}</span>
    </span>
  </a>

  <nav class="brands" aria-label="מותגים">${M.map(e=>`<a class="brand" href="${S({brands:[e.slug]})}"><span class="brand__name">${v(e.name)}</span><span class="brand__n">${j.filter(t=>t.brandSlug===e.slug).length}</span></a>`).join(``)}</nav>

  <section class="sec" aria-labelledby="h-pick">
    <div class="sec__head"><h2 class="h2" id="h-pick">בחירת השבוע</h2></div>
    <article class="pick">
      <a class="pick__link" href="#/watch/${t.id}">
        <div class="pick__img">${u(t,{sizes:`(min-width: 900px) 40vw, 90vw`})}</div>
        <div class="pick__body">
          <p class="card__brand">${v(t.brand)}</p>
          <h3 class="pick__name">${v(t.name)}</h3>
          <p class="pick__short">${v(t.short)}</p>
          <span class="pick__cta">לפרטים ${E(`arrow`)}</span>
        </div>
      </a>
      ${T(t,`fav card__fav`)}
    </article>
  </section>

  <section class="sec" aria-labelledby="h-cats">
    <div class="sec__head"><h2 class="h2" id="h-cats">קטגוריות</h2></div>
    <ul class="cats" role="list">${f.map((e,t)=>`<li><a class="cat" href="#/collection/${e.slug}">
      <img src="${N(B[t%B.length])}" alt="" width="768" height="1376" loading="lazy" decoding="async">
      <span class="cat__name">${e.he}</span><span class="cat__n">${c(e.slug)}</span></a></li>`).join(``)}</ul>
  </section>

  <section class="sec" aria-labelledby="h-all">
    <div class="sec__head"><h2 class="h2" id="h-all">שעונים נבחרים</h2><a class="more" href="#/collection">הכל ${E(`arrow`)}</a></div>
    ${R(j.slice(0,4))}
  </section>

  <section class="sec" aria-labelledby="h-about">
    <div class="panel"><h2 class="h2" id="h-about">${n}</h2><p class="muted">${r}</p></div>
  </section>

  <section class="sec">
    <div class="talk">
      <h2 class="h2">${e}</h2>
      <p>${y}</p>
      <div class="talk__cta">${P(`היי משה, `,`כתבו למשה`,`btn btn--gold`)}<a class="btn btn--ghost-light" href="#/contact">לטופס</a></div>
    </div>
  </section>`}function H(e){let t=d(e),n=A(t.style),r=C(t);return`<section class="top">
    <h1 class="h1">${n?n.he:`הקטלוג`}</h1>
    <p class="muted">${b(r.length)}</p>
  </section>
  <nav class="seg" aria-label="קטגוריות">
    <a href="${S({style:``},t)}" data-replace ${t.style?``:`aria-current="page"`}>הכל</a>
    ${f.map(e=>`<a href="${S({style:e.slug},t)}" data-replace ${t.style===e.slug?`aria-current="page"`:``}>${e.he}</a>`).join(``)}
  </nav>
  <div class="filters">
    ${M.map(e=>{let n=t.brands.includes(e.slug),r=n?t.brands.filter(t=>t!==e.slug):[...t.brands,e.slug];return`<a class="toggle" href="${S({brands:r},t)}" data-replace ${n?`aria-current="true"`:``}>${n?E(`close`):``}${v(e.name)}</a>`}).join(``)}
    <form class="sort" data-filter-form data-style="${t.style}">
      ${t.brands.map(e=>`<input type="hidden" name="brand" value="${e}">`).join(``)}
      <label class="sr-only" for="sort">מיון</label>
      <select id="sort" name="sort" data-autosubmit>${D.map(([e,n])=>`<option value="${e}" ${t.sort===e?`selected`:``}>${n}</option>`).join(``)}</select>
    </form>
  </div>
  <div class="pad">${r.length?R(r):`<div class="empty"><p>אין שעונים שמתאימים לבחירה הזו.</p><a class="btn btn--green" href="#/collection" data-replace>הצגת הכל</a></div>`}</div>`}function U(e){let t=l(e.params.id),n=A(t.style),r=j.filter(e=>e.id!==t.id);return`<div class="pdp">
    <div class="pdp__top">${z(`#/collection`,`הקטלוג`)}<button class="icon-btn" type="button" data-share aria-label="שיתוף השעון">${E(`share`)}</button></div>
    <div class="gallery" data-gallery>
      <div class="gallery__track" data-gallery-track tabindex="0" aria-label="תמונות של ${i(t.name)}">
        <figure class="gallery__slide" data-gallery-slide><button class="gallery__zoom" type="button" data-zoom="${p(t)}" data-alt="${i(t.name)}" aria-label="הגדלת התמונה">${u(t,{large:!0,eager:!0})}</button></figure>
        <figure class="gallery__slide" data-gallery-slide><button class="gallery__zoom" type="button" data-zoom="${k(t)}" data-alt="${i(t.name)}, תקריב" aria-label="הגדלת התקריב"><img src="${k(t)}" width="1000" height="1000" alt="${i(t.name)}, תקריב של הלוח" loading="lazy" decoding="async"></button></figure>
      </div>
      <div class="gallery__dots"><button type="button" data-gallery-go="0" aria-label="תמונה 1"></button><button type="button" data-gallery-go="1" aria-label="תמונה 2: תקריב"></button></div>
    </div>
    <div class="pdp__body">
      <p class="card__brand">${v(t.brand)}</p>
      <h1 class="pdp__name">${v(t.name)}</h1>
      <div class="pdp__chips"><a class="chip" href="#/collection/${n.slug}">${n.he}</a></div>
      <p class="pdp__short">${v(t.short)}</p>
      <div class="pdp__cta-desk">${P(O(t),`לבקשת השעון`)}${T(t,`fav fav--bar`)}</div>
      <section class="panel" aria-labelledby="h-det"><h2 class="panel__h" id="h-det">פרטים</h2>
        <dl class="details">${t.details.map(([e,t])=>`<div><dt>${e}</dt><dd>${v(t)}</dd></div>`).join(``)}</dl></section>
    </div>
    <section class="sec" aria-labelledby="h-more"><div class="sec__head"><h2 class="h2" id="h-more">שעונים נוספים</h2></div>
      <ul class="rail" role="list">${r.map(e=>`<li>${L(e)}</li>`).join(``)}</ul></section>
  </div>
  <div class="actionbar">${T(t,`fav fav--bar`)}${P(O(t),`לבקשת השעון`,`btn btn--green actionbar__cta`)}</div>`}function W(){return`<section class="top">${z(`#/`,`בית`)}<h1 class="h1">אודות</h1></section>
  <div class="pad">
    <div class="about-card">
      <img src="${N(`scene2`)}" alt="" width="768" height="1376" loading="lazy" decoding="async">
      <div class="about-card__body"><span class="about-card__mark">${s(`mark`,{decorative:!0})}</span>
        <h2 class="h2">${n}</h2><p>${r}</p></div>
    </div>
  </div>`}function G(t){let n=l(t.query.get(`w`)??``);return`<section class="top"><h1 class="h1">יצירת קשר</h1><p class="muted">${e} ${y}</p></section>
  <div class="pad contact">
    <a class="wa-card" href="${g(`היי משה, `)}" target="_blank" rel="noopener">
      <span class="wa-card__icon">${E(`wa`)}</span><span><strong>וואטסאפ</strong><span>תשובה הכי מהירה</span></span>${E(`arrow`)}
    </a>
    <form class="panel form" data-wa-form data-wa-intro="היי משה, הגעתי מהאתר." novalidate>
      <h2 class="panel__h">בקשת שעון</h2>
      <div class="field"><label for="c-name">שם</label>
        <input id="c-name" name="name" required autocomplete="name" data-label="שם" data-msg="איך לפנות אליכם?" aria-describedby="e-name">
        <p class="field__err" id="e-name" data-error-for="name"></p></div>
      <div class="field"><label for="c-want">איזה שעון אתם מחפשים</label>
        <select id="c-want" name="want" data-label="שעון מבוקש"><option value="">עוד לא בחרתי</option>
          ${j.map(e=>`<option ${n?.id===e.id?`selected`:``}>${i(e.name)}</option>`).join(``)}<option>דגם שלא מופיע בקטלוג</option></select></div>
      <div class="field"><label for="c-msg">פרטים נוספים (לא חובה)</label>
        <textarea id="c-msg" name="msg" rows="3" data-label="פרטים"></textarea></div>
      <button class="btn btn--green btn--block" type="submit">${E(`wa`)}<span>שליחה בוואטסאפ</span></button>
      <p class="form__status" data-form-status role="status"></p>
      <p class="fine">הטופס לא שולח דבר לשרת. הוא מכין הודעה בוואטסאפ, ורק אתם מחליטים אם לשלוח.</p>
    </form>
  </div>`}function K(){let e=_();return`<section class="top"><h1 class="h1">מועדפים</h1><p class="muted">${e.length?`${b(e.length)} שמורים במכשיר הזה`:`עוד אין כאן כלום`}</p></section>
  ${e.length?`<div class="pad"><ul class="list" role="list" data-results>${e.map(e=>`<li>${q(e)}</li>`).join(``)}</ul>
    <div class="fav-actions"><button class="btn btn--green btn--block" type="button" data-wa-list>${E(`wa`)}<span>שליחת הרשימה למשה</span></button>
    <button class="btn btn--plain" type="button" data-fav-clear>${E(`trash`)}<span>ניקוי</span></button></div></div>`:`<div class="pad"><div class="empty">${E(`heart`,`empty__icon`)}<p>לחצו על הלב בכל שעון כדי לשמור אותו כאן.</p><a class="btn btn--green" href="#/collection">לקטלוג</a></div></div>`}`}var q=e=>`<article class="item">
  <a class="item__link" href="#/watch/${e.id}">
    <span class="item__img">${u(e,{sizes:`5rem`})}</span>
    <span class="item__body"><span class="card__brand">${v(e.brand)}</span><span class="item__name">${v(e.name)}</span><span class="muted">${i(A(e.style)?.he??``)}</span></span>
  </a>
  ${T(e,`fav item__fav`)}
</article>`;function J(e){let t=e.query.get(`q`)??``,n=h(t);return`<section class="top"><h1 class="h1">חיפוש</h1>
    <form class="searchbox" data-search-form role="search"><label class="sr-only" for="s-q">חיפוש בקטלוג</label>
      ${E(`search`)}<input id="s-q" name="q" type="search" value="${i(t)}" placeholder="דגם, מותג או סגנון" autocomplete="off" data-live-search ${t?``:`autofocus`}></form>
    <div class="quick">${M.map(e=>`<a class="chip" href="${S({brands:[e.slug]})}">${v(e.name)}</a>`).join(``)}${f.map(e=>`<a class="chip" href="#/collection/${e.slug}">${e.he}</a>`).join(``)}</div>
    <p class="muted" data-count>${w(t,n.length)}</p></section>
  <div class="pad">${R(n)}</div>`}var Y=e=>{let n=t(e.params.slug);return`<article class="legal">${z(`#/`,`בית`)}<h1 class="h1">${n.title}</h1><div class="legal__body panel">${n.body}</div></article>`},X=()=>`<div class="pad"><div class="empty empty--page">${E(`watch`,`empty__icon`)}<h1 class="h1">העמוד לא נמצא</h1>
  <p>ייתכן שהקישור השתנה.</p><a class="btn btn--green" href="#/">לדף הבית</a></div></div>`;function Z(){let e=[[`#/`,`home`,`home`,`בית`],[`#/collection`,`collection`,`watch`,`קטלוג`],[`#/search`,`search`,`search`,`חיפוש`],[`#/favorites`,`favorites`,`heart`,`מועדפים`],[`#/contact`,`contact`,`wa`,`קשר`]];return`<a class="skip-link" href="#main" data-skip>דלג לתוכן</a>
  <header class="hd">
    <a class="hd__logo" href="#/" aria-label="Moshe, דף הבית">${s(`compact`,{decorative:!0})}</a>
    <nav class="hd__nav" aria-label="ניווט ראשי">${e.map(([e,t,,n])=>`<a href="${e}" data-nav="${t}">${n}</a>`).join(``)}<a href="#/about" data-nav="about">אודות</a></nav>
  </header>
  <main id="main" tabindex="-1"></main>
  <footer class="ft">
    <span class="ft__logo">${s(`compact`,{decorative:!0})}</span>
    <nav class="ft__nav" aria-label="ניווט תחתון"><a href="#/about">אודות</a><a href="#/page/accessibility">הצהרת נגישות</a><a href="#/page/privacy">מדיניות פרטיות</a></nav>
    <p>${o}</p>
    <p>הדגמת עיצוב · <a href="../../index.html">לכל הכיוונים</a></p>
  </footer>
  <nav class="tabbar" aria-label="ניווט">${e.map(([e,t,n,r])=>`<a href="${e}" data-nav="${t}">${E(n)}<span>${r}</span>${t===`favorites`?`<span class="tabbar__badge" data-fav-count hidden></span>`:``}</a>`).join(``)}</nav>`}x({layout:Z,views:{home:V,collection:H,watch:U,about:W,contact:G,favorites:K,search:J,page:Y,notfound:X},list:(e,t)=>t===`favorites`?e.map(e=>`<li>${q(e)}</li>`).join(``):e.map(e=>`<li>${L(e)}</li>`).join(``)});