import"../modulepreload-polyfill-P2Xu9kJm.js";import{A as e,B as t,C as n,D as r,E as i,F as a,I as o,M as s,N as c,O as l,P as u,R as d,S as ee,T as f,V as p,_ as m,a as h,b as g,c as _,d as v,f as y,g as b,h as te,i as x,j as S,k as C,l as w,m as ne,o as re,p as T,r as E,s as D,t as O,u as k,w as A,x as j,y as M,z as N}from"../app-7QaXeBqF.js";var P=(e,t,n=!1)=>`<img class="${t}" src="${ne(`sea`,e)}" alt="" width="768" height="1376" ${n?`fetchpriority="high"`:`loading="lazy"`} decoding="async">`,F=(e,t,n=`btn btn--ink`)=>`<a class="${n}" href="${M(e)}" target="_blank" rel="noopener">${w(`wa`)}<span>${t}</span></a>`,I=e=>`<svg class="wave ${e}" viewBox="0 0 1440 48" preserveAspectRatio="none" aria-hidden="true" focusable="false">
  <path class="wave__fill" d="M0 24C170 10 340 8 530 19S890 40 1090 29 1350 12 1440 17V48H0Z"/>
  <path class="wave__foam" d="M0 18C170 4 340 2 530 13S890 34 1090 23 1350 6 1440 11"/>
</svg>`,L=[[`#/`,`home`,`בית`],[`#/collection`,`collection`,`קטלוג`],[`#/about`,`about`,`אודות`],[`#/contact`,`contact`,`קשר`]],R=(e,t)=>{let n=C(e,t);return n?`<div><dt>${t}</dt><dd>${d(n)}</dd></div>`:``},z=(e,t)=>`<article class="card">
  <div class="card__img">${g(e,{sizes:`(min-width: 1000px) 20vw, 40vw`})}</div>
  <div class="card__body">
    <p class="card__brand">${d(e.brand)}</p>
    <h${t} class="card__name"><a class="card__link" href="#/watch/${e.id}">${d(e.name)}</a></h${t}>
    <p class="card__short">${d(e.short)}</p>
    <dl class="card__specs">${R(e,`לוח`)}${R(e,`צמיד`)}</dl>
  </div>
  ${h(e,`fav card__fav`)}
</article>`,B=(e,t=2,n=!1)=>e.map(e=>`<li${n?` data-reveal`:``}>${z(e,t)}</li>`).join(``),V=(e,t=2,n=!1)=>`<ul class="list" role="list" data-results>${B(e,t,n)}</ul>`,H=e=>f.filter(t=>t.style===e).at(-1),U=()=>`<ul class="pebbles" role="list">${A.map((e,t)=>{let n=H(e.slug);return`<li><a class="pebble pebble--${t+1}" href="#/collection/${e.slug}">
    <span class="pebble__stone" aria-hidden="true">${n?g(n,{sizes:`(min-width: 1000px) 15rem, 30vw`}):``}</span>
    <span class="pebble__name">${e.he}</span>
    <span class="pebble__n">${y(r(e.slug))}</span>
  </a></li>`}).join(``)}</ul>`,W=()=>`<section class="tide" aria-labelledby="h-req">
  ${P(`shore`,`tide__img`)}
  <div class="tide__in" data-reveal>
    <h2 class="h2" id="h-req">${o}</h2>
    <p class="tide__text">${a}</p>
    <div class="tide__cta"><a class="btn btn--ink" href="#/contact">לבקשת שעון</a>${F(i,`כתבו לנו בוואטסאפ`,`btn btn--line`)}</div>
  </div>
</section>`;function G(){let e=A.map(e=>H(e.slug)?.id),n=f.filter(t=>t.available&&!e.includes(t.id)).slice(0,4);return`<section class="hero">
    <div class="hero__media">${P(`hero-far`,`hero__img`,!0)}</div>
    <h1 class="hero__logo" data-live-clock><span class="sr-only">Moshe · ${t}</span>${p(`full`,{decorative:!0})}</h1>
    <a class="btn btn--sand hero__cta" href="#/collection"><span>לקטלוג השעונים</span>${w(`arrow`)}</a>
    ${I(`hero__wave`)}
  </section>

  <section class="sec sec--center" aria-labelledby="h-cats">
    <div class="sec__head"><h2 class="h2" id="h-cats">קטגוריות</h2></div>
    ${U()}
  </section>

  <section class="sec" aria-labelledby="h-feat">
    <div class="sec__head"><h2 class="h2" id="h-feat">שעונים נבחרים</h2><a class="sec__link" href="#/collection">לכל הקטלוג ${w(`arrow`)}</a></div>
    ${V(n,3,!0)}
    <div class="sec__more"><a class="btn btn--line" href="#/collection"><span>לכל הקטלוג</span>${w(`arrow`)}</a></div>
  </section>

  <section class="shore" aria-labelledby="h-about">
    <div class="shore__media">${P(`scene3`,`shore__img`)}</div>
    <div class="shore__sheet" data-reveal>
      <h2 class="h2" id="h-about">${c}</h2>
      <p class="shore__text">${s}</p>
    </div>
  </section>

  ${W()}`}var K=null;function q(t){let n=D(t),r=e(n.style),i=_(n),a=f.filter(e=>!n.style||e.style===n.style),o=j.filter(e=>n.brands.includes(e.slug)||a.some(t=>t.brandSlug===e.slug)),s=n.brands.length+(n.sort===`featured`?0:1),c=K??s>0,l=(e,t)=>`<a class="tab" href="${x({style:e},n)}" data-replace data-fkey="tab-${e||`all`}"${n.style===e?` aria-current="page"`:``}>${t}</a>`,u=(e,t,n,r,i)=>`<label class="pill"><input type="${e}" name="${t}" value="${n}" data-autosubmit data-fkey="${t}-${n}"${r?` checked`:``}><span>${i}</span></label>`;return`<section class="head">
    <h1 class="h1">${r?r.he:`הקטלוג`}</h1>
    ${r?``:`<p class="lead">${ee}</p>`}
  </section>
  <nav class="tabs" aria-label="קטגוריות"><div class="tabs__in">${l(``,`הכל`)}${A.map(e=>l(e.slug,e.he)).join(``)}</div></nav>
  <div class="tools">
    <p class="tools__count">${y(i.length)}</p>
    <button class="tools__toggle" type="button" aria-expanded="${c}" aria-controls="refine" data-refine-toggle>${w(`filter`)}<span>סינון</span>${s?`<span class="tools__dot" aria-hidden="true"></span>`:``}</button>
  </div>
  <form class="refine" id="refine" data-filter-form data-style="${n.style}" aria-label="סינון"${c?``:` hidden`}>
    <div class="refine__in">
      <fieldset class="refine__set"><legend>מותג</legend>
        <div class="pills">${o.map(e=>u(`checkbox`,`brand`,e.slug,n.brands.includes(e.slug),d(e.name))).join(``)}</div></fieldset>
      <fieldset class="refine__set"><legend>מיון</legend>
        <div class="pills">${O.map(([e,t])=>u(`radio`,`sort`,e,n.sort===e,t)).join(``)}</div></fieldset>
      ${s?`<a class="refine__clear" href="${x({style:n.style})}" data-replace data-fkey="clear">${w(`close`)}<span>ניקוי</span></a>`:``}
    </div>
  </form>
  ${i.length?`<div class="wrap">${V(i,2,!0)}</div>`:`<div class="empty"><span class="stone" aria-hidden="true">${w(`watch`)}</span><a class="btn btn--ink" href="${x({style:n.style})}" data-replace data-fkey="clear">ניקוי</a></div>`}`}function J(t){let r=S(t.params.id),i=e(r.style),a=f.filter(e=>e.id!==r.id),o=[...a.filter(e=>e.style===r.style),...a.filter(e=>e.style!==r.style)].slice(0,3);return`<article class="pdp">
    <div class="stage">
      <div class="gallery" data-gallery>
        <div class="gallery__track" data-gallery-track tabindex="0" aria-label="תמונות של ${N(r.name)}">
          <figure class="gallery__slide" data-gallery-slide><button class="gallery__zoom" type="button" data-zoom="${k(r)}" data-alt="${N(r.name)}" aria-label="הגדלת התמונה">${g(r,{large:!0,eager:!0})}</button></figure>
          <figure class="gallery__slide gallery__slide--photo" data-gallery-slide><button class="gallery__zoom" type="button" data-zoom="${v(r)}" data-alt="${N(r.name)}" aria-label="הגדלת התמונה"><img src="${v(r)}" width="900" height="1200" alt="${N(r.name)}, תמונה נוספת" loading="lazy" decoding="async"></button></figure>
        </div>
        <div class="gallery__dots"><button type="button" data-gallery-go="0" aria-label="תמונה 1"></button><button type="button" data-gallery-go="1" aria-label="תמונה 2"></button></div>
        <span class="gallery__hint" aria-hidden="true">${w(`zoom`)}</span>
      </div>
      <a class="pdp__back" href="#/collection">${w(`back`)}<span>הקטלוג</span></a>
    </div>
    <div class="panel">
      <span class="panel__grab" aria-hidden="true"></span>
      <div class="panel__head">
        <p class="panel__brand">${d(r.brand)}</p>
        <h1 class="panel__name">${d(r.name)}</h1>
        <div class="panel__meta"><a class="chip" href="#/collection/${i.slug}">${i.he}</a>${E(r)}</div>
      </div>
      <div class="panel__cta">${F(T(r),`אני מעוניין בשעון הזה`,`btn btn--ink btn--lg`)}${h(r,`fav fav--ring`)}</div>
      <section class="panel__sec panel__sec--desc" aria-labelledby="h-desc">
        <h2 class="panel__h" id="h-desc">תיאור</h2>
        <p class="panel__desc">${d(r.description)}</p>
      </section>
      <section class="panel__sec panel__sec--spec" aria-labelledby="h-spec">
        <h2 class="panel__h" id="h-spec">מפרט</h2>
        <table class="specs"><tbody>${r.specs.map(e=>`<tr><th scope="row">${e.label}</th><td>${d(e.value)}</td></tr>`).join(``)}</tbody></table>
        <p class="note">${n}</p>
      </section>
    </div>
  </article>
  <section class="sec more" aria-labelledby="h-more">
    <div class="sec__head"><h2 class="h2" id="h-more">שעונים נוספים</h2><a class="sec__link" href="#/collection">לכל הקטלוג ${w(`arrow`)}</a></div>
    ${V(o,3)}
  </section>`}function Y(){return`<section class="band band--dark">
    ${P(`hero-near`,`band__img`,!0)}
    <div class="band__in"><h1 class="h1">אודות</h1></div>
  </section>
  <div class="lift"><div class="lift__sheet">
    <h2 class="h2">${c}</h2>
    <p class="lift__text">${s}</p>
    <div><a class="btn btn--ink" href="#/collection"><span>לקטלוג השעונים</span>${w(`arrow`)}</a></div>
  </div></div>
  ${W()}`}function ie(e){let t=S(e.query.get(`w`)??``);return`<section class="band band--light">
    ${P(`scene3`,`band__img`,!0)}
    <div class="band__in"><h1 class="h1">יצירת קשר ובקשת שעון</h1><p class="band__lead">${o} ${a}</p></div>
  </section>
  <div class="lift lift--wide"><div class="lift__sheet contact">
    <a class="wa-card" href="${M(i)}" target="_blank" rel="noopener"><span class="wa-card__icon">${w(`wa`)}</span><strong>כתבו לנו בוואטסאפ</strong>${w(`arrow`)}</a>
    <form class="form" data-wa-form data-wa-intro="היי, פנייה מהאתר:" novalidate>
      <h2 class="h3">בקשת שעון</h2>
      <div class="field"><label for="c-name">שם מלא</label>
        <input id="c-name" name="name" required autocomplete="name" data-label="שם" data-msg="איך לפנות אליכם?" aria-describedby="e-name">
        <p class="field__err" id="e-name" data-error-for="name"></p></div>
      <div class="field"><label for="c-want">שעון מהקטלוג</label>
        <select id="c-want" name="want" data-label="שעון מהקטלוג"><option value="">בחרו שעון</option>
          ${f.map(e=>`<option ${t?.id===e.id?`selected`:``}>${N(e.name)}</option>`).join(``)}</select></div>
      <div class="field"><label for="c-desc">תיאור השעון שמחפשים: מותג, דגם ותקציב <span class="muted">(לא חובה)</span></label>
        <input id="c-desc" name="desc" data-label="תיאור השעון"></div>
      <div class="field"><label for="c-msg">הודעה <span class="muted">(לא חובה)</span></label>
        <textarea id="c-msg" name="msg" rows="3" data-label="הודעה"></textarea></div>
      <button class="btn btn--ink btn--lg" type="submit">${w(`wa`)}<span>שליחה בוואטסאפ</span></button>
      <p class="form__status" data-form-status role="status"></p>
      <p class="note">הטופס לא שולח דבר לשרת. הוא מכין הודעה בוואטסאפ, ורק אתם מחליטים אם לשלוח.</p>
    </form>
  </div></div>`}function ae(){let e=re();return`<section class="head"><h1 class="h1">המועדפים שלי</h1>${e.length?`<p class="lead">${y(e.length)}</p>`:``}</section>
  ${e.length?`<div class="fav-actions">
        <button class="btn btn--ink" type="button" data-wa-list>${w(`wa`)}<span>שליחת הרשימה למשה</span></button>
        <button class="btn btn--line" type="button" data-fav-clear>${w(`trash`)}<span>ניקוי</span></button>
      </div>
      <div class="wrap">${V(e,2)}</div>`:`<div class="empty"><span class="stone" aria-hidden="true">${w(`heart`)}</span><a class="btn btn--ink" href="#/collection"><span>לקטלוג השעונים</span>${w(`arrow`)}</a></div>`}`}function X(e){let t=e.query.get(`q`)??``,n=te(t);return`<section class="head">
    <h1 class="h1">חיפוש</h1>
    <form class="searchbox" data-search-form role="search">
      <label class="sr-only" for="s-q">חיפוש</label>
      ${w(`search`)}<input id="s-q" name="q" type="search" value="${N(t)}" placeholder="חיפוש לפי שם, מותג או תיאור" autocomplete="off" enterkeyhint="search" data-live-search>
    </form>
    <p class="count" data-count>${b(t,n.length)}</p>
    <div class="quick">${j.map(e=>`<a class="chip" href="${x({brands:[e.slug]})}">${d(e.name)}</a>`).join(``)}${A.map(e=>`<a class="chip" href="#/collection/${e.slug}">${e.he}</a>`).join(``)}</div>
  </section>
  <div class="wrap">${V(n,2)}</div>`}var oe=e=>{let t=l(e.params.slug);return`<article class="legal"><h1 class="h1">${t.title}</h1><div class="legal__body">${t.body}</div></article>`},se=()=>`<section class="nf">
  <span class="stone stone--mark" aria-hidden="true">${p(`mark`,{decorative:!0})}</span>
  <h1 class="h1">העמוד לא נמצא</h1>
  <p class="lead">ייתכן שהקישור השתנה.</p>
  <a class="btn btn--ink" href="#/collection"><span>לכל הקטלוג</span>${w(`arrow`)}</a>
</section>`;function ce(){let e=[[`#/collection`,`הכל`,f.length],...A.map(e=>[`#/collection/${e.slug}`,e.he,r(e.slug)])];return`<a class="skip-link" href="#main" data-skip>דלג לתוכן</a>
  <header class="hd">
    <div class="hd__bar">
      <button class="icon-btn hd__menu" type="button" aria-expanded="false" aria-controls="sheet" aria-label="פתיחת התפריט" data-sheet-toggle><span class="burger" aria-hidden="true"><span></span><span></span></span></button>
      <div class="sheet" id="sheet" inert>
        <div class="sheet__in">
          <form class="sheet__search" data-search-form role="search">
            <label class="sr-only" for="sheet-q">חיפוש</label>
            ${w(`search`)}<input id="sheet-q" name="q" type="search" placeholder="חיפוש לפי שם, מותג או תיאור" autocomplete="off" enterkeyhint="search">
          </form>
          <nav class="sheet__nav" aria-label="תפריט">
            ${L.map(([e,t,n])=>`<a href="${e}" data-nav="${t}"><span>${n}</span>${w(`arrow`)}</a>`).join(``)}
            <a href="#/favorites" data-nav="favorites"><span>המועדפים שלי <span class="badge badge--inline" data-fav-count hidden></span></span>${w(`arrow`)}</a>
          </nav>
          <div class="sheet__cats">
            <p class="sheet__label" id="sheet-cats">קטגוריות</p>
            <ul role="list" aria-labelledby="sheet-cats">${e.map(([e,t,n])=>`<li><a href="${e}">${t} <span>${n}</span></a></li>`).join(``)}</ul>
          </div>
          <div class="sheet__end">
            ${F(i,`כתבו לנו בוואטסאפ`,`btn btn--ink sheet__wa`)}
            <p class="sheet__verse">${t}</p>
          </div>
        </div>
      </div>
      <a class="hd__logo" href="#/" aria-label="Moshe, דף הבית" data-live-clock>${p(`compact`,{decorative:!0})}</a>
      <nav class="hd__nav" aria-label="ניווט ראשי">${L.map(([e,t,n])=>`<a href="${e}" data-nav="${t}">${n}</a>`).join(``)}</nav>
      <div class="hd__end">
        <a class="icon-btn" href="#/search" data-nav="search" aria-label="חיפוש">${w(`search`)}</a>
        <a class="icon-btn" href="#/favorites" data-nav="favorites" aria-label="המועדפים שלי">${w(`heart`)}<span class="badge" data-fav-count hidden></span></a>
      </div>
    </div>
  </header>
  <div class="scrim" data-scrim aria-hidden="true"></div>

  <main id="main" tabindex="-1"></main>

  <footer class="ft">
    ${I(`ft__wave`)}
    <div class="ft__in">
      <div class="ft__brand">
        <a class="ft__logo" href="#/" aria-label="Moshe, דף הבית" data-live-clock>${p(`compact`,{decorative:!0})}</a>
        <p class="ft__verse">${t}</p>
      </div>
      <nav class="ft__nav" aria-label="ניווט תחתון">
        <ul role="list">${L.slice(1).map(([e,,t])=>`<li><a href="${e}">${t}</a></li>`).join(``)}<li><a href="#/favorites">מועדפים</a></li><li><a href="#/search">חיפוש</a></li></ul>
        <ul role="list"><li><a href="#/page/accessibility">הצהרת נגישות</a></li><li><a href="#/page/privacy">מדיניות פרטיות</a></li></ul>
      </nav>
      <div class="ft__base">
        <p>${u}</p>
        <p>הדגמת עיצוב · <a href="../../index.html">לכל הכיוונים</a></p>
      </div>
    </div>
  </footer>`}function le(e){let t=new Date,n=t.getMinutes(),r=t.getHours()%12*30+n*.5;e.querySelectorAll(`[data-live-clock] .moshe-hour-hand`).forEach(e=>e.setAttribute(`transform`,`rotate(${r} 136 288)`)),e.querySelectorAll(`[data-live-clock] .moshe-minute-hand`).forEach(e=>e.setAttribute(`transform`,`rotate(${n*6} 136 288)`))}var Z=()=>{},Q=``,$=null;function ue(e){let t=document.documentElement,n=e.querySelector(`.hd`),r=e.querySelector(`[data-sheet-toggle]`),i=e.querySelector(`#sheet`);if(!n||!r||!i)return;let a=()=>t.dataset.sheet===`open`,o=(e,n=!1)=>{e!==a()&&(t.dataset.sheet=e?`open`:`closed`,i.inert=!e,r.setAttribute(`aria-expanded`,String(e)),r.setAttribute(`aria-label`,e?`סגירת התפריט`:`פתיחת התפריט`),n&&r.focus())};Z=()=>o(!1),r.addEventListener(`click`,()=>o(!a())),e.querySelector(`[data-scrim]`)?.addEventListener(`click`,()=>o(!1)),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&a()&&o(!1,!0)}),n.addEventListener(`focusout`,e=>{let t=e.relatedTarget;t&&!n.contains(t)&&o(!1)});let s=e=>{Q=e.target.closest(`[data-fkey]`)?.dataset.fkey??``};document.addEventListener(`click`,s,!0),document.addEventListener(`change`,s,!0),document.addEventListener(`click`,e=>{let t=e.target.closest(`[data-refine-toggle]`),n=document.getElementById(`refine`);if(!t||!n)return;let r=t.getAttribute(`aria-expanded`)!==`true`;K=r,t.setAttribute(`aria-expanded`,String(r)),n.hidden=!r,n.classList.toggle(`is-anim`,r)}),le(document)}function de(e,t){if(Z(),e.name===`collection`){let n=e.params.style??``;if($!==null&&$!==n){let e=t.querySelector(`.head`),n=document.querySelector(`.hd`);if(e&&n){let t=Math.round(e.getBoundingClientRect().bottom+scrollY-n.getBoundingClientRect().height);scrollY>t&&scrollTo(0,t)}}$=n}else $=null,K=null;Q&&=((t.querySelector(`[data-fkey="${Q}"]`)??(Q===`clear`?t.querySelector(`[data-refine-toggle]`):null))?.focus({preventScroll:!0}),``)}m({layout:ce,views:{home:G,collection:q,watch:J,about:Y,contact:ie,favorites:ae,search:X,page:oe,notfound:se},list:e=>B(e,2),mount:ue,afterRender:de});