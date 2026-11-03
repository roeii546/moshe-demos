import"../modulepreload-polyfill-P2Xu9kJm.js";import{A as e,B as t,C as n,D as r,E as i,F as a,H as o,I as s,L as c,M as l,N as u,O as d,P as f,S as p,T as m,V as h,_ as g,a as _,b as v,c as ee,f as y,g as te,h as b,i as x,j as S,k as ne,l as C,m as w,o as re,p as T,r as E,s as D,t as O,u as k,v as A,w as j,x as M,z as N}from"../app-CoBIU5JU.js";var P=(e,t,n=!1)=>`<img class="${t}" src="${b(`sea`,e)}" alt="" width="768" height="1376" ${n?`fetchpriority="high"`:`loading="lazy"`} decoding="async">`,F=(e,t,n=`btn btn--ink`)=>`<a class="${n}" href="${v(e)}" target="_blank" rel="noopener">${C(`wa`)}<span>${t}</span></a>`,I=e=>`<svg class="wave ${e}" viewBox="0 0 1440 48" preserveAspectRatio="none" aria-hidden="true" focusable="false">
  <path class="wave__fill" d="M0 24C170 10 340 8 530 19S890 40 1090 29 1350 12 1440 17V48H0Z"/>
  <path class="wave__foam" d="M0 18C170 4 340 2 530 13S890 34 1090 23 1350 6 1440 11"/>
</svg>`,L=[[`#/`,`home`,`בית`],[`#/collection`,`collection`,`קטלוג`],[`#/about`,`about`,`אודות`],[`#/contact`,`contact`,`קשר`]],R=(t,n)=>{let r=e(t,n);return r?`<div><dt>${n}</dt><dd>${N(r)}</dd></div>`:``},z=(e,t)=>`<article class="card">
  <div class="card__img">${M(e,{sizes:`(min-width: 1000px) 20vw, 40vw`})}</div>
  <div class="card__body">
    <p class="card__brand">${N(e.brand)}</p>
    <h${t} class="card__name"><a class="card__link" href="#/watch/${e.id}">${N(e.name)}</a></h${t}>
    <p class="card__short">${N(e.short)}</p>
    <dl class="card__specs">${R(e,`לוח`)}${R(e,`צמיד`)}</dl>
  </div>
  ${_(e,`fav card__fav`)}
</article>`,B=(e,t=2,n=!1)=>e.map(e=>`<li${n?` data-reveal`:``}>${z(e,t)}</li>`).join(``),V=(e,t=2,n=!1)=>`<ul class="list" role="list" data-results>${B(e,t,n)}</ul>`,H=e=>i.filter(t=>t.style===e).at(-1),U=()=>`<ul class="pebbles" role="list">${m.map((e,t)=>{let n=H(e.slug);return`<li><a class="pebble pebble--${t+1}" href="#/collection/${e.slug}">
    <span class="pebble__stone" aria-hidden="true">${n?M(n,{sizes:`(min-width: 1000px) 15rem, 30vw`}):``}</span>
    <span class="pebble__name">${e.he}</span>
    <span class="pebble__n">${T(d(e.slug))}</span>
  </a></li>`}).join(``)}</ul>`,W=()=>`<section class="tide" aria-labelledby="h-req">
  ${P(`shore`,`tide__img`)}
  <div class="tide__in" data-reveal>
    <h2 class="h2" id="h-req">${c}</h2>
    <p class="tide__text">${s}</p>
    <div class="tide__cta"><a class="btn btn--ink" href="#/contact">לבקשת שעון</a>${F(r,`כתבו לנו בוואטסאפ`,`btn btn--line`)}</div>
  </div>
</section>`;function G(){let e=m.map(e=>H(e.slug)?.id),t=i.filter(t=>t.available&&!e.includes(t.id)).slice(0,4);return`<section class="hero">
    <div class="hero__media">${P(`hero-far`,`hero__img`,!0)}</div>
    <h1 class="hero__logo" data-live-clock><span class="sr-only">Moshe · ${h}</span>${o(`full`,{decorative:!0})}</h1>
    <a class="btn btn--sand hero__cta" href="#/collection"><span>לקטלוג השעונים</span>${C(`arrow`)}</a>
    ${I(`hero__wave`)}
  </section>

  <section class="sec sec--center" aria-labelledby="h-cats">
    <div class="sec__head"><h2 class="h2" id="h-cats">קטגוריות</h2></div>
    ${U()}
  </section>

  <section class="sec" aria-labelledby="h-feat">
    <div class="sec__head"><h2 class="h2" id="h-feat">שעונים נבחרים</h2><a class="sec__link" href="#/collection">לכל הקטלוג ${C(`arrow`)}</a></div>
    ${V(t,3,!0)}
    <div class="sec__more"><a class="btn btn--line" href="#/collection"><span>לכל הקטלוג</span>${C(`arrow`)}</a></div>
  </section>

  <section class="shore" aria-labelledby="h-about">
    <div class="shore__media">${P(`scene3`,`shore__img`)}</div>
    <div class="shore__sheet" data-reveal>
      <h2 class="h2" id="h-about">${f}</h2>
      <p class="shore__text">${u}</p>
    </div>
  </section>

  ${W()}`}var K=null;function q(e){let t=D(e),r=S(t.style),a=ee(t),o=i.filter(e=>!t.style||e.style===t.style),s=p.filter(e=>t.brands.includes(e.slug)||o.some(t=>t.brandSlug===e.slug)),c=t.brands.length+(t.sort===`featured`?0:1),l=K??c>0,u=(e,n)=>`<a class="tab" href="${x({style:e},t)}" data-replace data-fkey="tab-${e||`all`}"${t.style===e?` aria-current="page"`:``}>${n}</a>`,d=(e,t,n,r,i)=>`<label class="pill"><input type="${e}" name="${t}" value="${n}" data-autosubmit data-fkey="${t}-${n}"${r?` checked`:``}><span>${i}</span></label>`;return`<section class="head">
    <h1 class="h1">${r?r.he:`הקטלוג`}</h1>
    ${r?``:`<p class="lead">${n}</p>`}
  </section>
  <nav class="tabs" aria-label="קטגוריות"><div class="tabs__in">${u(``,`הכל`)}${m.map(e=>u(e.slug,e.he)).join(``)}</div></nav>
  <div class="tools">
    <p class="tools__count">${T(a.length)}</p>
    <button class="tools__toggle" type="button" aria-expanded="${l}" aria-controls="refine" data-refine-toggle>${C(`filter`)}<span>סינון</span>${c?`<span class="tools__dot" aria-hidden="true"></span>`:``}</button>
  </div>
  <form class="refine" id="refine" data-filter-form data-style="${t.style}" aria-label="סינון"${l?``:` hidden`}>
    <div class="refine__in">
      <fieldset class="refine__set"><legend>מותג</legend>
        <div class="pills">${s.map(e=>d(`checkbox`,`brand`,e.slug,t.brands.includes(e.slug),N(e.name))).join(``)}</div></fieldset>
      <fieldset class="refine__set"><legend>מיון</legend>
        <div class="pills">${O.map(([e,n])=>d(`radio`,`sort`,e,t.sort===e,n)).join(``)}</div></fieldset>
      ${c?`<a class="refine__clear" href="${x({style:t.style})}" data-replace data-fkey="clear">${C(`close`)}<span>ניקוי</span></a>`:``}
    </div>
  </form>
  ${a.length?`<div class="wrap">${V(a,2,!0)}</div>`:`<div class="empty"><span class="stone" aria-hidden="true">${C(`watch`)}</span><a class="btn btn--ink" href="${x({style:t.style})}" data-replace data-fkey="clear">ניקוי</a></div>`}`}function J(e){let n=l(e.params.id),r=S(n.style),a=i.filter(e=>e.id!==n.id),o=[...a.filter(e=>e.style===n.style),...a.filter(e=>e.style!==n.style)].slice(0,3);return`<article class="pdp">
    <div class="stage">
      <div class="gallery" data-gallery>
        <div class="gallery__track" data-gallery-track tabindex="0" aria-label="תמונות של ${t(n.name)}">
          <figure class="gallery__slide" data-gallery-slide><button class="gallery__zoom" type="button" data-zoom="${k(n)}" data-alt="${t(n.name)}" aria-label="הגדלת התמונה">${M(n,{large:!0,eager:!0})}</button></figure>
          <figure class="gallery__slide gallery__slide--photo" data-gallery-slide><button class="gallery__zoom" type="button" data-zoom="${y(n)}" data-alt="${t(n.name)}" aria-label="הגדלת התמונה"><img src="${y(n)}" width="900" height="1200" alt="${t(n.name)}, תמונה נוספת" loading="lazy" decoding="async"></button></figure>
        </div>
        <div class="gallery__dots"><button type="button" data-gallery-go="0" aria-label="תמונה 1"></button><button type="button" data-gallery-go="1" aria-label="תמונה 2"></button></div>
        <span class="gallery__hint" aria-hidden="true">${C(`zoom`)}</span>
      </div>
      <a class="pdp__back" href="#/collection">${C(`back`)}<span>הקטלוג</span></a>
    </div>
    <div class="panel">
      <span class="panel__grab" aria-hidden="true"></span>
      <div class="panel__head">
        <p class="panel__brand">${N(n.brand)}</p>
        <h1 class="panel__name">${N(n.name)}</h1>
        <div class="panel__meta"><a class="chip" href="#/collection/${r.slug}">${r.he}</a>${E(n)}</div>
      </div>
      <div class="panel__cta">${F(w(n),`אני מעוניין בשעון הזה`,`btn btn--ink btn--lg`)}${_(n,`fav fav--ring`)}</div>
      <section class="panel__sec panel__sec--desc" aria-labelledby="h-desc">
        <h2 class="panel__h" id="h-desc">תיאור</h2>
        <p class="panel__desc">${N(n.description)}</p>
      </section>
      <section class="panel__sec panel__sec--spec" aria-labelledby="h-spec">
        <h2 class="panel__h" id="h-spec">מפרט</h2>
        <table class="specs"><tbody>${n.specs.map(e=>`<tr><th scope="row">${e.label}</th><td>${N(e.value)}</td></tr>`).join(``)}</tbody></table>
        <p class="note">${j}</p>
      </section>
    </div>
  </article>
  <section class="sec more" aria-labelledby="h-more">
    <div class="sec__head"><h2 class="h2" id="h-more">שעונים נוספים</h2><a class="sec__link" href="#/collection">לכל הקטלוג ${C(`arrow`)}</a></div>
    ${V(o,3)}
  </section>`}function Y(){return`<section class="band band--dark">
    ${P(`hero-near`,`band__img`,!0)}
    <div class="band__in"><h1 class="h1">אודות</h1></div>
  </section>
  <div class="lift"><div class="lift__sheet">
    <h2 class="h2">${f}</h2>
    <p class="lift__text">${u}</p>
    <div><a class="btn btn--ink" href="#/collection"><span>לקטלוג השעונים</span>${C(`arrow`)}</a></div>
  </div></div>
  ${W()}`}function ie(e){let n=l(e.query.get(`w`)??``);return`<section class="band band--light">
    ${P(`scene3`,`band__img`,!0)}
    <div class="band__in"><h1 class="h1">יצירת קשר ובקשת שעון</h1><p class="band__lead">${c} ${s}</p></div>
  </section>
  <div class="lift lift--wide"><div class="lift__sheet contact">
    <a class="wa-card" href="${v(r)}" target="_blank" rel="noopener"><span class="wa-card__icon">${C(`wa`)}</span><strong>כתבו לנו בוואטסאפ</strong>${C(`arrow`)}</a>
    <form class="form" data-wa-form data-wa-intro="היי, פנייה מהאתר:" novalidate>
      <h2 class="h3">בקשת שעון</h2>
      <div class="field"><label for="c-name">שם מלא</label>
        <input id="c-name" name="name" required autocomplete="name" data-label="שם" data-msg="איך לפנות אליכם?" aria-describedby="e-name">
        <p class="field__err" id="e-name" data-error-for="name"></p></div>
      <div class="field"><label for="c-want">שעון מהקטלוג</label>
        <select id="c-want" name="want" data-label="שעון מהקטלוג"><option value="">בחרו שעון</option>
          ${i.map(e=>`<option ${n?.id===e.id?`selected`:``}>${t(e.name)}</option>`).join(``)}</select></div>
      <div class="field"><label for="c-desc">תיאור השעון שמחפשים: מותג, דגם ותקציב <span class="muted">(לא חובה)</span></label>
        <input id="c-desc" name="desc" data-label="תיאור השעון"></div>
      <div class="field"><label for="c-msg">הודעה <span class="muted">(לא חובה)</span></label>
        <textarea id="c-msg" name="msg" rows="3" data-label="הודעה"></textarea></div>
      <button class="btn btn--ink btn--lg" type="submit">${C(`wa`)}<span>שליחה בוואטסאפ</span></button>
      <p class="form__status" data-form-status role="status"></p>
      <p class="note">הטופס לא שולח דבר לשרת. הוא מכין הודעה בוואטסאפ, ורק אתם מחליטים אם לשלוח.</p>
    </form>
  </div></div>`}function ae(){let e=re();return`<section class="head"><h1 class="h1">המועדפים שלי</h1>${e.length?`<p class="lead">${T(e.length)}</p>`:``}</section>
  ${e.length?`<div class="fav-actions">
        <button class="btn btn--ink" type="button" data-wa-list>${C(`wa`)}<span>שליחת הרשימה למשה</span></button>
        <button class="btn btn--line" type="button" data-fav-clear>${C(`trash`)}<span>ניקוי</span></button>
      </div>
      <div class="wrap">${V(e,2)}</div>`:`<div class="empty"><span class="stone" aria-hidden="true">${C(`heart`)}</span><a class="btn btn--ink" href="#/collection"><span>לקטלוג השעונים</span>${C(`arrow`)}</a></div>`}`}function X(e){let n=e.query.get(`q`)??``,r=te(n);return`<section class="head">
    <h1 class="h1">חיפוש</h1>
    <form class="searchbox" data-search-form role="search">
      <label class="sr-only" for="s-q">חיפוש</label>
      ${C(`search`)}<input id="s-q" name="q" type="search" value="${t(n)}" placeholder="חיפוש לפי שם, מותג או תיאור" autocomplete="off" enterkeyhint="search" data-live-search>
    </form>
    <p class="count" data-count>${g(n,r.length)}</p>
    <div class="quick">${p.map(e=>`<a class="chip" href="${x({brands:[e.slug]})}">${N(e.name)}</a>`).join(``)}${m.map(e=>`<a class="chip" href="#/collection/${e.slug}">${e.he}</a>`).join(``)}</div>
  </section>
  <div class="wrap">${V(r,2)}</div>`}var oe=e=>{let t=ne(e.params.slug);return`<article class="legal"><h1 class="h1">${t.title}</h1><div class="legal__body">${t.body}</div></article>`},se=()=>`<section class="nf">
  <span class="stone stone--mark" aria-hidden="true">${o(`mark`,{decorative:!0})}</span>
  <h1 class="h1">העמוד לא נמצא</h1>
  <p class="lead">ייתכן שהקישור השתנה.</p>
  <a class="btn btn--ink" href="#/collection"><span>לכל הקטלוג</span>${C(`arrow`)}</a>
</section>`;function ce(){let e=[[`#/collection`,`הכל`,i.length],...m.map(e=>[`#/collection/${e.slug}`,e.he,d(e.slug)])];return`<a class="skip-link" href="#main" data-skip>דלג לתוכן</a>
  <header class="hd">
    <div class="hd__bar">
      <button class="icon-btn hd__menu" type="button" aria-expanded="false" aria-controls="sheet" aria-label="פתיחת התפריט" data-sheet-toggle><span class="burger" aria-hidden="true"><span></span><span></span></span></button>
      <div class="sheet" id="sheet" inert>
        <div class="sheet__in">
          <form class="sheet__search" data-search-form role="search">
            <label class="sr-only" for="sheet-q">חיפוש</label>
            ${C(`search`)}<input id="sheet-q" name="q" type="search" placeholder="חיפוש לפי שם, מותג או תיאור" autocomplete="off" enterkeyhint="search">
          </form>
          <nav class="sheet__nav" aria-label="תפריט">
            ${L.map(([e,t,n])=>`<a href="${e}" data-nav="${t}"><span>${n}</span>${C(`arrow`)}</a>`).join(``)}
            <a href="#/favorites" data-nav="favorites"><span>המועדפים שלי <span class="badge badge--inline" data-fav-count hidden></span></span>${C(`arrow`)}</a>
          </nav>
          <div class="sheet__cats">
            <p class="sheet__label" id="sheet-cats">קטגוריות</p>
            <ul role="list" aria-labelledby="sheet-cats">${e.map(([e,t,n])=>`<li><a href="${e}">${t} <span>${n}</span></a></li>`).join(``)}</ul>
          </div>
          <div class="sheet__end">
            ${F(r,`כתבו לנו בוואטסאפ`,`btn btn--ink sheet__wa`)}
            <p class="sheet__verse">${h}</p>
          </div>
        </div>
      </div>
      <a class="hd__logo" href="#/" aria-label="Moshe, דף הבית" data-live-clock>${o(`compact`,{decorative:!0})}</a>
      <nav class="hd__nav" aria-label="ניווט ראשי">${L.map(([e,t,n])=>`<a href="${e}" data-nav="${t}">${n}</a>`).join(``)}</nav>
      <div class="hd__end">
        <a class="icon-btn" href="#/search" data-nav="search" aria-label="חיפוש">${C(`search`)}</a>
        <a class="icon-btn" href="#/favorites" data-nav="favorites" aria-label="המועדפים שלי">${C(`heart`)}<span class="badge" data-fav-count hidden></span></a>
      </div>
    </div>
  </header>
  <div class="scrim" data-scrim aria-hidden="true"></div>

  <main id="main" tabindex="-1"></main>

  <footer class="ft">
    ${I(`ft__wave`)}
    <div class="ft__in">
      <div class="ft__brand">
        <a class="ft__logo" href="#/" aria-label="Moshe, דף הבית" data-live-clock>${o(`compact`,{decorative:!0})}</a>
        <p class="ft__verse">${h}</p>
      </div>
      <nav class="ft__nav" aria-label="ניווט תחתון">
        <ul role="list">${L.slice(1).map(([e,,t])=>`<li><a href="${e}">${t}</a></li>`).join(``)}<li><a href="#/favorites">מועדפים</a></li><li><a href="#/search">חיפוש</a></li></ul>
        <ul role="list"><li><a href="#/page/accessibility">הצהרת נגישות</a></li><li><a href="#/page/privacy">מדיניות פרטיות</a></li></ul>
      </nav>
      <div class="ft__base">
        <p>${a}</p>
        <p>הדגמת עיצוב · <a href="../../index.html">לכל הכיוונים</a></p>
      </div>
    </div>
  </footer>`}function le(e){let t=new Date,n=t.getMinutes(),r=t.getHours()%12*30+n*.5;e.querySelectorAll(`[data-live-clock] .moshe-hour-hand`).forEach(e=>e.setAttribute(`transform`,`rotate(${r} 136 288)`)),e.querySelectorAll(`[data-live-clock] .moshe-minute-hand`).forEach(e=>e.setAttribute(`transform`,`rotate(${n*6} 136 288)`))}var Z=()=>{},Q=``,$=null;function ue(e){let t=document.documentElement,n=e.querySelector(`.hd`),r=e.querySelector(`[data-sheet-toggle]`),i=e.querySelector(`#sheet`);if(!n||!r||!i)return;let a=()=>t.dataset.sheet===`open`,o=(e,n=!1)=>{e!==a()&&(t.dataset.sheet=e?`open`:`closed`,i.inert=!e,r.setAttribute(`aria-expanded`,String(e)),r.setAttribute(`aria-label`,e?`סגירת התפריט`:`פתיחת התפריט`),n&&r.focus())};Z=()=>o(!1),r.addEventListener(`click`,()=>o(!a())),e.querySelector(`[data-scrim]`)?.addEventListener(`click`,()=>o(!1)),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&a()&&o(!1,!0)}),n.addEventListener(`focusout`,e=>{let t=e.relatedTarget;t&&!n.contains(t)&&o(!1)});let s=e=>{Q=e.target.closest(`[data-fkey]`)?.dataset.fkey??``};document.addEventListener(`click`,s,!0),document.addEventListener(`change`,s,!0),document.addEventListener(`click`,e=>{let t=e.target.closest(`[data-refine-toggle]`),n=document.getElementById(`refine`);if(!t||!n)return;let r=t.getAttribute(`aria-expanded`)!==`true`;K=r,t.setAttribute(`aria-expanded`,String(r)),n.hidden=!r,n.classList.toggle(`is-anim`,r)}),le(document)}function de(e,t){if(Z(),e.name===`collection`){let n=e.params.style??``;if($!==null&&$!==n){let e=t.querySelector(`.head`),n=document.querySelector(`.hd`);if(e&&n){let t=Math.round(e.getBoundingClientRect().bottom+scrollY-n.getBoundingClientRect().height);scrollY>t&&scrollTo(0,t)}}$=n}else $=null,K=null;Q&&=((t.querySelector(`[data-fkey="${Q}"]`)??(Q===`clear`?t.querySelector(`[data-refine-toggle]`):null))?.focus({preventScroll:!0}),``)}A({layout:ce,views:{home:G,collection:q,watch:J,about:Y,contact:ie,favorites:ae,search:X,page:oe,notfound:se},list:e=>B(e,2),mount:ue,afterRender:de});