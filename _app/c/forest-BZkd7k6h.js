import"../modulepreload-polyfill-P2Xu9kJm.js";import{A as e,B as t,C as n,D as r,E as i,F as a,I as o,M as s,N as c,O as l,P as u,R as d,S as f,T as p,V as m,_ as h,a as g,b as _,c as v,d as y,f as b,g as x,h as S,i as C,j as w,l as T,m as E,o as D,p as O,r as k,s as A,t as j,u as M,w as N,x as P,y as F,z as I}from"../app-7QaXeBqF.js";var L=e=>E(`forest`,e),R=(e,t,n=`btn btn--green`)=>`<a class="${n}" href="${F(e)}" target="_blank" rel="noopener">${T(`wa`)}<span>${t}</span></a>`,z=()=>{let e=new Date().getHours();return e<5?`לילה טוב`:e<12?`בוקר טוב`:e<17?`צהריים טובים`:e<21?`ערב טוב`:`לילה טוב`},B=()=>p[Math.floor(Date.now()/6048e5)%p.length],V=e=>`<article class="card">
  <a class="card__link" href="#/watch/${e.id}">
    <div class="card__img">${_(e)}</div>
    <p class="card__brand">${d(e.brand)}</p>
    <h3 class="card__name">${d(e.name)}</h3>
  </a>
  ${g(e,`fav card__fav`)}
</article>`,H=e=>`<ul class="grid" role="list" data-results>${e.map(e=>`<li>${V(e)}</li>`).join(``)}</ul>`,U=(e,t)=>`<a class="back" href="${e}">${T(`back`)}<span>${t}</span></a>`,W=[`scene2`,`hero-far`,`hero-near`];function G(){let e=B();return`<section class="greet">
    <div><p class="greet__hi">${z()}</p><h1 class="greet__title">ברוכים הבאים</h1></div>
    <span class="greet__clock" data-live-clock aria-hidden="true">${m(`mark`,{decorative:!0})}</span>
  </section>

  <a class="hero" href="#/collection">
    <img src="${L(`scene3`)}" alt="" width="768" height="1376" fetchpriority="high">
    <span class="hero__in">
      <span class="hero__slogan">${t}</span>
      <span class="hero__cta">לקטלוג השעונים ${T(`arrow`)}</span>
    </span>
  </a>

  <nav class="brands" aria-label="מותגים">${P.map(e=>`<a class="brand" href="${C({brands:[e.slug]})}"><span class="brand__name">${d(e.name)}</span><span class="brand__n">${p.filter(t=>t.brandSlug===e.slug).length}</span></a>`).join(``)}</nav>

  <section class="sec" aria-labelledby="h-pick">
    <div class="sec__head"><h2 class="h2" id="h-pick">בחירת השבוע</h2></div>
    <article class="pick">
      <a class="pick__link" href="#/watch/${e.id}">
        <div class="pick__img">${_(e,{sizes:`(min-width: 900px) 40vw, 90vw`})}</div>
        <div class="pick__body">
          <p class="card__brand">${d(e.brand)}</p>
          <h3 class="pick__name">${d(e.name)}</h3>
          <p class="pick__short">${d(e.short)}</p>
          <span class="pick__cta">לפרטים ${T(`arrow`)}</span>
        </div>
      </a>
      ${g(e,`fav card__fav`)}
    </article>
  </section>

  <section class="sec" aria-labelledby="h-cats">
    <div class="sec__head"><h2 class="h2" id="h-cats">קטגוריות</h2></div>
    <ul class="cats" role="list">${N.map((e,t)=>`<li><a class="cat" href="#/collection/${e.slug}">
      <img src="${L(W[t%W.length])}" alt="" width="768" height="1376" loading="lazy" decoding="async">
      <span class="cat__name">${e.he}</span><span class="cat__n">${r(e.slug)}</span></a></li>`).join(``)}</ul>
  </section>

  <section class="sec" aria-labelledby="h-all">
    <div class="sec__head"><h2 class="h2" id="h-all">שעונים נבחרים</h2><a class="more" href="#/collection">הכל ${T(`arrow`)}</a></div>
    ${H(p.slice(0,4))}
  </section>

  <section class="sec" aria-labelledby="h-about">
    <div class="panel"><h2 class="h2" id="h-about">${c}</h2><p class="muted">${s}</p></div>
  </section>

  <section class="sec">
    <div class="talk">
      <h2 class="h2">${o}</h2>
      <p>${a}</p>
      <div class="talk__cta">${R(i,`כתבו למשה`,`btn btn--gold`)}<a class="btn btn--ghost-light" href="#/contact">לטופס</a></div>
    </div>
  </section>`}function K(t){let n=A(t),r=e(n.style),i=v(n);return`<section class="top">
    <h1 class="h1">${r?r.he:`הקטלוג`}</h1>
    <p class="muted">${r?``:`${f} · `}${b(i.length)}</p>
  </section>
  <nav class="seg" aria-label="קטגוריות">
    <a href="${C({style:``},n)}" data-replace ${n.style?``:`aria-current="page"`}>הכל</a>
    ${N.map(e=>`<a href="${C({style:e.slug},n)}" data-replace ${n.style===e.slug?`aria-current="page"`:``}>${e.he}</a>`).join(``)}
  </nav>
  <div class="filters">
    ${P.map(e=>{let t=n.brands.includes(e.slug),r=t?n.brands.filter(t=>t!==e.slug):[...n.brands,e.slug];return`<a class="toggle" href="${C({brands:r},n)}" data-replace ${t?`aria-current="true"`:``}>${t?T(`close`):``}${d(e.name)}</a>`}).join(``)}
    <form class="sort" data-filter-form data-style="${n.style}">
      ${n.brands.map(e=>`<input type="hidden" name="brand" value="${e}">`).join(``)}
      <label class="sr-only" for="sort">מיון</label>
      <select id="sort" name="sort" data-autosubmit>${j.map(([e,t])=>`<option value="${e}" ${n.sort===e?`selected`:``}>${t}</option>`).join(``)}</select>
    </form>
  </div>
  <div class="pad">${i.length?H(i):`<div class="empty"><p>אין שעונים שמתאימים לבחירה הזו.</p><a class="btn btn--green" href="#/collection" data-replace>הצגת הכל</a></div>`}</div>`}function q(t){let r=w(t.params.id),i=e(r.style),a=p.filter(e=>e.id!==r.id);return`<div class="pdp">
    <div class="pdp__top">${U(`#/collection`,`הקטלוג`)}<button class="icon-btn" type="button" data-share aria-label="שיתוף השעון">${T(`share`)}</button></div>
    <div class="gallery" data-gallery>
      <div class="gallery__track" data-gallery-track tabindex="0" aria-label="תמונות של ${I(r.name)}">
        <figure class="gallery__slide" data-gallery-slide><button class="gallery__zoom" type="button" data-zoom="${M(r)}" data-alt="${I(r.name)}" aria-label="הגדלת התמונה">${_(r,{large:!0,eager:!0})}</button></figure>
        <figure class="gallery__slide gallery__slide--photo" data-gallery-slide><button class="gallery__zoom" type="button" data-zoom="${y(r)}" data-alt="${I(r.name)}" aria-label="הגדלת התמונה"><img src="${y(r)}" width="900" height="1200" alt="${I(r.name)}, תמונה נוספת" loading="lazy" decoding="async"></button></figure>
      </div>
      <div class="gallery__dots"><button type="button" data-gallery-go="0" aria-label="תמונה 1"></button><button type="button" data-gallery-go="1" aria-label="תמונה 2"></button></div>
    </div>
    <div class="pdp__body">
      <p class="card__brand">${d(r.brand)}</p>
      <h1 class="pdp__name">${d(r.name)}</h1>
      <div class="pdp__chips"><a class="chip" href="#/collection/${i.slug}">${i.he}</a>${k(r)}</div>
      <p class="pdp__short">${d(r.description)}</p>
        <p class="fine">${n}</p>
      <div class="pdp__cta-desk">${R(O(r),`אני מעוניין בשעון הזה`)}${g(r,`fav fav--bar`)}</div>
      <section class="panel" aria-labelledby="h-det"><h2 class="panel__h" id="h-det">פרטים</h2>
        <dl class="details">${r.specs.map(e=>`<div><dt>${e.label}</dt><dd>${d(e.value)}</dd></div>`).join(``)}</dl></section>
    </div>
    <section class="sec" aria-labelledby="h-more"><div class="sec__head"><h2 class="h2" id="h-more">שעונים נוספים</h2></div>
      <ul class="rail" role="list">${a.map(e=>`<li>${V(e)}</li>`).join(``)}</ul></section>
  </div>
  <div class="actionbar">${g(r,`fav fav--bar`)}${R(O(r),`אני מעוניין בשעון הזה`,`btn btn--green actionbar__cta`)}</div>`}function J(){return`<section class="top">${U(`#/`,`בית`)}<h1 class="h1">אודות</h1></section>
  <div class="pad">
    <div class="about-card">
      <img src="${L(`scene2`)}" alt="" width="768" height="1376" loading="lazy" decoding="async">
      <div class="about-card__body"><span class="about-card__mark">${m(`mark`,{decorative:!0})}</span>
        <h2 class="h2">${c}</h2><p>${s}</p></div>
    </div>
  </div>`}function Y(e){let t=w(e.query.get(`w`)??``);return`<section class="top"><h1 class="h1">יצירת קשר ובקשת שעון</h1><p class="muted">${o} ${a}</p></section>
  <div class="pad contact">
    <a class="wa-card" href="${F(i)}" target="_blank" rel="noopener">
      <span class="wa-card__icon">${T(`wa`)}</span><span><strong>כתבו לנו בוואטסאפ</strong></span>${T(`arrow`)}
    </a>
    <form class="panel form" data-wa-form data-wa-intro="היי, פנייה מהאתר:" novalidate>
      <h2 class="panel__h">בקשת שעון</h2>
      <div class="field"><label for="c-name">שם מלא</label>
        <input id="c-name" name="name" required autocomplete="name" data-label="שם" data-msg="איך לפנות אליכם?" aria-describedby="e-name">
        <p class="field__err" id="e-name" data-error-for="name"></p></div>
      <div class="field"><label for="c-want">שעון מהקטלוג</label>
        <select id="c-want" name="want" data-label="שעון מהקטלוג"><option value="">בחרו שעון</option>
          ${p.map(e=>`<option ${t?.id===e.id?`selected`:``}>${I(e.name)}</option>`).join(``)}</select></div>
      <div class="field"><label for="c-desc">תיאור השעון שמחפשים: מותג, דגם ותקציב (לא חובה)</label>
        <input id="c-desc" name="desc" data-label="תיאור השעון"></div>
      <div class="field"><label for="c-msg">הודעה (לא חובה)</label>
        <textarea id="c-msg" name="msg" rows="3" data-label="הודעה"></textarea></div>
      <button class="btn btn--green btn--block" type="submit">${T(`wa`)}<span>שליחה בוואטסאפ</span></button>
      <p class="form__status" data-form-status role="status"></p>
      <p class="fine">הטופס לא שולח דבר לשרת. הוא מכין הודעה בוואטסאפ, ורק אתם מחליטים אם לשלוח.</p>
    </form>
  </div>`}function X(){let e=D();return`<section class="top"><h1 class="h1">מועדפים</h1><p class="muted">${e.length?`${b(e.length)} שמורים במכשיר הזה`:`עוד אין כאן כלום`}</p></section>
  ${e.length?`<div class="pad"><ul class="list" role="list" data-results>${e.map(e=>`<li>${Z(e)}</li>`).join(``)}</ul>
    <div class="fav-actions"><button class="btn btn--green btn--block" type="button" data-wa-list>${T(`wa`)}<span>שליחת הרשימה למשה</span></button>
    <button class="btn btn--plain" type="button" data-fav-clear>${T(`trash`)}<span>ניקוי</span></button></div></div>`:`<div class="pad"><div class="empty">${T(`heart`,`empty__icon`)}<p>לחצו על הלב בכל שעון כדי לשמור אותו כאן.</p><a class="btn btn--green" href="#/collection">לקטלוג</a></div></div>`}`}var Z=t=>`<article class="item">
  <a class="item__link" href="#/watch/${t.id}">
    <span class="item__img">${_(t,{sizes:`5rem`})}</span>
    <span class="item__body"><span class="card__brand">${d(t.brand)}</span><span class="item__name">${d(t.name)}</span><span class="muted">${I(e(t.style)?.he??``)}</span></span>
  </a>
  ${g(t,`fav item__fav`)}
</article>`;function Q(e){let t=e.query.get(`q`)??``,n=S(t);return`<section class="top"><h1 class="h1">חיפוש</h1>
    <form class="searchbox" data-search-form role="search"><label class="sr-only" for="s-q">חיפוש בקטלוג</label>
      ${T(`search`)}<input id="s-q" name="q" type="search" value="${I(t)}" placeholder="חיפוש לפי שם, מותג או תיאור" autocomplete="off" data-live-search ${t?``:`autofocus`}></form>
    <div class="quick">${P.map(e=>`<a class="chip" href="${C({brands:[e.slug]})}">${d(e.name)}</a>`).join(``)}${N.map(e=>`<a class="chip" href="#/collection/${e.slug}">${e.he}</a>`).join(``)}</div>
    <p class="muted" data-count>${x(t,n.length)}</p></section>
  <div class="pad">${H(n)}</div>`}var $=e=>{let t=l(e.params.slug);return`<article class="legal">${U(`#/`,`בית`)}<h1 class="h1">${t.title}</h1><div class="legal__body panel">${t.body}</div></article>`},ee=()=>`<div class="pad"><div class="empty empty--page">${T(`watch`,`empty__icon`)}<h1 class="h1">העמוד לא נמצא</h1>
  <p>ייתכן שהקישור השתנה.</p><a class="btn btn--green" href="#/">לדף הבית</a></div></div>`;function te(){let e=[[`#/`,`home`,`home`,`בית`],[`#/collection`,`collection`,`watch`,`קטלוג`],[`#/search`,`search`,`search`,`חיפוש`],[`#/favorites`,`favorites`,`heart`,`מועדפים`],[`#/contact`,`contact`,`wa`,`קשר`]];return`<a class="skip-link" href="#main" data-skip>דלג לתוכן</a>
  <header class="hd">
    <a class="hd__logo" href="#/" aria-label="Moshe, דף הבית">${m(`compact`,{decorative:!0})}</a>
    <nav class="hd__nav" aria-label="ניווט ראשי">${e.map(([e,t,,n])=>`<a href="${e}" data-nav="${t}">${n}</a>`).join(``)}<a href="#/about" data-nav="about">אודות</a></nav>
  </header>
  <main id="main" tabindex="-1"></main>
  <footer class="ft">
    <span class="ft__logo">${m(`compact`,{decorative:!0})}</span>
    <nav class="ft__nav" aria-label="ניווט תחתון"><a href="#/about">אודות</a><a href="#/page/accessibility">הצהרת נגישות</a><a href="#/page/privacy">מדיניות פרטיות</a></nav>
    <p>${u}</p>
    <p>הדגמת עיצוב · <a href="../../index.html">לכל הכיוונים</a></p>
  </footer>
  <nav class="tabbar" aria-label="ניווט">${e.map(([e,t,n,r])=>`<a href="${e}" data-nav="${t}">${T(n)}<span>${r}</span>${t===`favorites`?`<span class="tabbar__badge" data-fav-count hidden></span>`:``}</a>`).join(``)}</nav>`}h({layout:te,views:{home:G,collection:K,watch:q,about:J,contact:Y,favorites:X,search:Q,page:$,notfound:ee},list:(e,t)=>t===`favorites`?e.map(e=>`<li>${Z(e)}</li>`).join(``):e.map(e=>`<li>${V(e)}</li>`).join(``)});