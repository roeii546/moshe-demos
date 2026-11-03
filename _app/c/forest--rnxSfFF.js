import"../modulepreload-polyfill-P2Xu9kJm.js";import{B as e,C as t,D as n,E as r,F as i,H as a,I as o,L as s,M as c,N as l,O as u,P as d,S as f,T as p,V as m,_ as h,a as g,b as _,c as v,f as y,g as b,h as x,i as S,j as C,k as w,l as T,m as E,o as D,p as O,r as k,s as A,t as j,u as M,v as N,w as P,x as F,z as I}from"../app-BCOJKLs9.js";var L=e=>x(`forest`,e),R=(e,t,n=`btn btn--green`)=>`<a class="${n}" href="${_(e)}" target="_blank" rel="noopener">${T(`wa`)}<span>${t}</span></a>`,z=()=>{let e=new Date().getHours();return e<5?`לילה טוב`:e<12?`בוקר טוב`:e<17?`צהריים טובים`:e<21?`ערב טוב`:`לילה טוב`},B=()=>r[Math.floor(Date.now()/6048e5)%r.length],V=e=>`<article class="card">
  <a class="card__link" href="#/watch/${e.id}">
    <div class="card__img">${F(e)}</div>
    <p class="card__brand">${I(e.brand)}</p>
    <h3 class="card__name">${I(e.name)}</h3>
  </a>
  ${g(e,`fav card__fav`)}
</article>`,H=e=>`<ul class="grid" role="list" data-results>${e.map(e=>`<li>${V(e)}</li>`).join(``)}</ul>`,U=(e,t)=>`<a class="back" href="${e}">${T(`back`)}<span>${t}</span></a>`;function W(){let e=B();return`<section class="greet">
    <div><p class="greet__hi">${z()}</p><h1 class="greet__title">ברוכים הבאים</h1></div>
    <span class="greet__clock" data-live-clock aria-hidden="true">${a(`mark`,{decorative:!0})}</span>
  </section>

  <a class="hero" href="#/collection">
    <img src="${L(`scene3`)}" alt="" width="768" height="1376" fetchpriority="high">
    <span class="hero__in">
      <span class="hero__slogan">${m}</span>
      <span class="hero__cta">לקטלוג השעונים ${T(`arrow`)}</span>
    </span>
  </a>

  <nav class="brands" aria-label="מותגים">${f.map(e=>`<a class="brand" href="${S({brands:[e.slug]})}"><span class="brand__name">${I(e.name)}</span><span class="brand__n">${r.filter(t=>t.brandSlug===e.slug).length}</span></a>`).join(``)}</nav>

  <section class="sec" aria-labelledby="h-pick">
    <div class="sec__head"><h2 class="h2" id="h-pick">בחירת השבוע</h2></div>
    <article class="pick">
      <a class="pick__link" href="#/watch/${e.id}">
        <div class="pick__img">${F(e,{sizes:`(min-width: 900px) 40vw, 90vw`})}</div>
        <div class="pick__body">
          <p class="card__brand">${I(e.brand)}</p>
          <h3 class="pick__name">${I(e.name)}</h3>
          <p class="pick__short">${I(e.short)}</p>
          <span class="pick__cta">לפרטים ${T(`arrow`)}</span>
        </div>
      </a>
      ${g(e,`fav card__fav`)}
    </article>
  </section>

  <section class="sec" aria-labelledby="h-cats">
    <div class="sec__head"><h2 class="h2" id="h-cats">קטגוריות</h2></div>
    <ul class="cats" role="list">${p.map(e=>{let t=r.find(t=>t.style===e.slug);return`<li><a class="cat" href="#/collection/${e.slug}">
        <span class="cat__img">${t?F(t,{sizes:`(min-width: 960px) 13rem, 30vw`}):``}</span>
        <span class="cat__name">${e.he}</span><span class="cat__n">${u(e.slug)}</span></a></li>`}).join(``)}</ul>
  </section>

  <section class="sec" aria-labelledby="h-all">
    <div class="sec__head"><h2 class="h2" id="h-all">שעונים נבחרים</h2><a class="more" href="#/collection">הכל ${T(`arrow`)}</a></div>
    ${H(r.slice(0,4))}
  </section>

  <section class="sec" aria-labelledby="h-about">
    <div class="panel"><h2 class="h2" id="h-about">${d}</h2><p class="muted">${l}</p></div>
  </section>

  <section class="sec">
    <div class="talk">
      <h2 class="h2">${s}</h2>
      <p>${o}</p>
      <div class="talk__cta">${R(n,`כתבו למשה`,`btn btn--gold`)}<a class="btn btn--ghost-light" href="#/contact">לטופס</a></div>
    </div>
  </section>`}function G(e){let n=A(e),r=C(n.style),i=v(n);return`<section class="top">
    <h1 class="h1">${r?r.he:`הקטלוג`}</h1>
    <p class="muted">${r?``:`${t} · `}${O(i.length)}</p>
  </section>
  <nav class="seg" aria-label="קטגוריות">
    <a href="${S({style:``},n)}" data-replace ${n.style?``:`aria-current="page"`}>הכל</a>
    ${p.map(e=>`<a href="${S({style:e.slug},n)}" data-replace ${n.style===e.slug?`aria-current="page"`:``}>${e.he}</a>`).join(``)}
  </nav>
  <div class="filters">
    ${f.map(e=>{let t=n.brands.includes(e.slug),r=t?n.brands.filter(t=>t!==e.slug):[...n.brands,e.slug];return`<a class="toggle" href="${S({brands:r},n)}" data-replace ${t?`aria-current="true"`:``}>${t?T(`close`):``}${I(e.name)}</a>`}).join(``)}
    <form class="sort" data-filter-form data-style="${n.style}">
      ${n.brands.map(e=>`<input type="hidden" name="brand" value="${e}">`).join(``)}
      <label class="sr-only" for="sort">מיון</label>
      <select id="sort" name="sort" data-autosubmit>${j.map(([e,t])=>`<option value="${e}" ${n.sort===e?`selected`:``}>${t}</option>`).join(``)}</select>
    </form>
  </div>
  <div class="pad">${i.length?H(i):`<div class="empty"><p>אין שעונים שמתאימים לבחירה הזו.</p><a class="btn btn--green" href="#/collection" data-replace>הצגת הכל</a></div>`}</div>`}function K(t){let n=c(t.params.id),i=C(n.style),a=r.filter(e=>e.id!==n.id);return`<div class="pdp">
    <div class="pdp__top">${U(`#/collection`,`הקטלוג`)}<button class="icon-btn" type="button" data-share aria-label="שיתוף השעון">${T(`share`)}</button></div>
    <div class="gallery" data-gallery>
      <div class="gallery__track" data-gallery-track tabindex="0" aria-label="תמונות של ${e(n.name)}">
        <figure class="gallery__slide" data-gallery-slide><button class="gallery__zoom" type="button" data-zoom="${M(n)}" data-alt="${e(n.name)}" aria-label="הגדלת התמונה">${F(n,{large:!0,eager:!0})}</button></figure>
        <figure class="gallery__slide gallery__slide--photo" data-gallery-slide><button class="gallery__zoom" type="button" data-zoom="${y(n)}" data-alt="${e(n.name)}" aria-label="הגדלת התמונה"><img src="${y(n)}" width="900" height="1200" alt="${e(n.name)}, תמונה נוספת" loading="lazy" decoding="async"></button></figure>
      </div>
      <div class="gallery__dots"><button type="button" data-gallery-go="0" aria-label="תמונה 1"></button><button type="button" data-gallery-go="1" aria-label="תמונה 2"></button></div>
    </div>
    <div class="pdp__body">
      <p class="card__brand">${I(n.brand)}</p>
      <h1 class="pdp__name">${I(n.name)}</h1>
      <div class="pdp__chips"><a class="chip" href="#/collection/${i.slug}">${i.he}</a>${k(n)}</div>
      <p class="pdp__short">${I(n.description)}</p>
        <p class="fine">${P}</p>
      <div class="pdp__cta-desk">${R(E(n),`אני מעוניין בשעון הזה`)}${g(n,`fav fav--bar`)}</div>
      <section class="panel" aria-labelledby="h-det"><h2 class="panel__h" id="h-det">פרטים</h2>
        <dl class="details">${n.specs.map(e=>`<div><dt>${e.label}</dt><dd>${I(e.value)}</dd></div>`).join(``)}</dl></section>
    </div>
    <section class="sec" aria-labelledby="h-more"><div class="sec__head"><h2 class="h2" id="h-more">שעונים נוספים</h2></div>
      <ul class="rail" role="list">${a.map(e=>`<li>${V(e)}</li>`).join(``)}</ul></section>
  </div>
  <div class="actionbar">${g(n,`fav fav--bar`)}${R(E(n),`אני מעוניין בשעון הזה`,`btn btn--green actionbar__cta`)}</div>`}function q(){return`<section class="top">${U(`#/`,`בית`)}<h1 class="h1">אודות</h1></section>
  <div class="pad">
    <div class="about-card">
      <img src="${L(`scene2`)}" alt="" width="768" height="1376" loading="lazy" decoding="async">
      <div class="about-card__body"><span class="about-card__mark">${a(`mark`,{decorative:!0})}</span>
        <h2 class="h2">${d}</h2><p>${l}</p></div>
    </div>
  </div>`}function J(t){let i=c(t.query.get(`w`)??``);return`<section class="top"><h1 class="h1">יצירת קשר ובקשת שעון</h1><p class="muted">${s} ${o}</p></section>
  <div class="pad contact">
    <a class="wa-card" href="${_(n)}" target="_blank" rel="noopener">
      <span class="wa-card__icon">${T(`wa`)}</span><span><strong>כתבו לנו בוואטסאפ</strong></span>${T(`arrow`)}
    </a>
    <form class="panel form" data-wa-form data-wa-intro="היי, פנייה מהאתר:" novalidate>
      <h2 class="panel__h">בקשת שעון</h2>
      <div class="field"><label for="c-name">שם מלא</label>
        <input id="c-name" name="name" required autocomplete="name" data-label="שם" data-msg="איך לפנות אליכם?" aria-describedby="e-name">
        <p class="field__err" id="e-name" data-error-for="name"></p></div>
      <div class="field"><label for="c-want">שעון מהקטלוג</label>
        <select id="c-want" name="want" data-label="שעון מהקטלוג"><option value="">בחרו שעון</option>
          ${r.map(t=>`<option ${i?.id===t.id?`selected`:``}>${e(t.name)}</option>`).join(``)}</select></div>
      <div class="field"><label for="c-desc">תיאור השעון שמחפשים: מותג, דגם ותקציב (לא חובה)</label>
        <input id="c-desc" name="desc" data-label="תיאור השעון"></div>
      <div class="field"><label for="c-msg">הודעה (לא חובה)</label>
        <textarea id="c-msg" name="msg" rows="3" data-label="הודעה"></textarea></div>
      <button class="btn btn--green btn--block" type="submit">${T(`wa`)}<span>שליחה בוואטסאפ</span></button>
      <p class="form__status" data-form-status role="status"></p>
      <p class="fine">הטופס לא שולח דבר לשרת. הוא מכין הודעה בוואטסאפ, ורק אתם מחליטים אם לשלוח.</p>
    </form>
  </div>`}function Y(){let e=D();return`<section class="top"><h1 class="h1">מועדפים</h1><p class="muted">${e.length?`${O(e.length)} שמורים במכשיר הזה`:`עוד אין כאן כלום`}</p></section>
  ${e.length?`<div class="pad"><ul class="list" role="list" data-results>${e.map(e=>`<li>${X(e)}</li>`).join(``)}</ul>
    <div class="fav-actions"><button class="btn btn--green btn--block" type="button" data-wa-list>${T(`wa`)}<span>שליחת הרשימה למשה</span></button>
    <button class="btn btn--plain" type="button" data-fav-clear>${T(`trash`)}<span>ניקוי</span></button></div></div>`:`<div class="pad"><div class="empty">${T(`heart`,`empty__icon`)}<p>לחצו על הלב בכל שעון כדי לשמור אותו כאן.</p><a class="btn btn--green" href="#/collection">לקטלוג</a></div></div>`}`}var X=t=>`<article class="item">
  <a class="item__link" href="#/watch/${t.id}">
    <span class="item__img">${F(t,{sizes:`5rem`})}</span>
    <span class="item__body"><span class="card__brand">${I(t.brand)}</span><span class="item__name">${I(t.name)}</span><span class="muted">${e(C(t.style)?.he??``)}</span></span>
  </a>
  ${g(t,`fav item__fav`)}
</article>`;function Z(t){let n=t.query.get(`q`)??``,r=b(n);return`<section class="top"><h1 class="h1">חיפוש</h1>
    <form class="searchbox" data-search-form role="search"><label class="sr-only" for="s-q">חיפוש בקטלוג</label>
      ${T(`search`)}<input id="s-q" name="q" type="search" value="${e(n)}" placeholder="חיפוש לפי שם, מותג או תיאור" autocomplete="off" data-live-search ${n?``:`autofocus`}></form>
    <div class="quick">${f.map(e=>`<a class="chip" href="${S({brands:[e.slug]})}">${I(e.name)}</a>`).join(``)}${p.map(e=>`<a class="chip" href="#/collection/${e.slug}">${e.he}</a>`).join(``)}</div>
    <p class="muted" data-count>${h(n,r.length)}</p></section>
  <div class="pad">${H(r)}</div>`}var Q=e=>{let t=w(e.params.slug);return`<article class="legal">${U(`#/`,`בית`)}<h1 class="h1">${t.title}</h1><div class="legal__body panel">${t.body}</div></article>`},$=()=>`<div class="pad"><div class="empty empty--page">${T(`watch`,`empty__icon`)}<h1 class="h1">העמוד לא נמצא</h1>
  <p>ייתכן שהקישור השתנה.</p><a class="btn btn--green" href="#/">לדף הבית</a></div></div>`;function ee(){let e=[[`#/`,`home`,`home`,`בית`],[`#/collection`,`collection`,`watch`,`קטלוג`],[`#/search`,`search`,`search`,`חיפוש`],[`#/favorites`,`favorites`,`heart`,`מועדפים`],[`#/contact`,`contact`,`wa`,`קשר`]];return`<a class="skip-link" href="#main" data-skip>דלג לתוכן</a>
  <header class="hd">
    <a class="hd__logo" href="#/" aria-label="Moshe, דף הבית">${a(`compact`,{decorative:!0})}</a>
    <nav class="hd__nav" aria-label="ניווט ראשי">${e.map(([e,t,,n])=>`<a href="${e}" data-nav="${t}">${n}</a>`).join(``)}<a href="#/about" data-nav="about">אודות</a></nav>
  </header>
  <main id="main" tabindex="-1"></main>
  <footer class="ft">
    <span class="ft__logo">${a(`compact`,{decorative:!0})}</span>
    <nav class="ft__nav" aria-label="ניווט תחתון"><a href="#/about">אודות</a><a href="#/page/accessibility">הצהרת נגישות</a><a href="#/page/privacy">מדיניות פרטיות</a></nav>
    <p>${i}</p>
    <p>הדגמת עיצוב · <a href="../../index.html">לכל הכיוונים</a></p>
  </footer>
  <nav class="tabbar" aria-label="ניווט">${e.map(([e,t,n,r])=>`<a href="${e}" data-nav="${t}">${T(n)}<span>${r}</span>${t===`favorites`?`<span class="tabbar__badge" data-fav-count hidden></span>`:``}</a>`).join(``)}</nav>`}N({layout:ee,views:{home:W,collection:G,watch:K,about:q,contact:J,favorites:Y,search:Z,page:Q,notfound:$},list:(e,t)=>t===`favorites`?e.map(e=>`<li>${X(e)}</li>`).join(``):e.map(e=>`<li>${V(e)}</li>`).join(``)});