import"../modulepreload-polyfill-P2Xu9kJm.js";import{A as e,B as t,C as n,D as r,E as i,F as a,H as o,I as s,L as c,M as l,N as u,O as d,P as f,S as p,T as m,V as h,_ as g,a as _,b as v,c as y,d as b,f as x,g as ee,h as te,i as S,j as C,k as w,l as T,m as E,o as D,p as O,r as k,s as A,t as j,u as ne,v as re,w as ie,x as M,z as N}from"../app-CoBIU5JU.js";var ae=e=>te(`lake`,e),P=(e,t,n=!1)=>`<img class="${t}" src="${ae(e)}" alt="" width="768" height="1376" ${n?`fetchpriority="high"`:`loading="lazy"`} decoding="async">`,F=(e,t,n=`btn btn--rose`)=>`<a class="${n}" href="${v(e)}" target="_blank" rel="noopener">${T(`wa`)}<span>${t}</span></a>`,I=e=>p.find(t=>t.slug===e)?.name??e,L=[`לוח`,`צמיד`],R=(t,n=3)=>`<article class="row">
  <a class="row__link" href="#/watch/${t.id}">
    <span class="row__thumb">${M(t,{sizes:`(min-width: 1000px) 6.5rem, 5.25rem`})}</span>
    <div class="row__body">
      <p class="row__brand">${N(t.brand)}${t.available?``:k(t)}</p>
      <h${n} class="row__name">${N(t.name)}</h${n}>
      <p class="row__specs">${L.map(n=>`<span class="row__spec"><span class="row__k">${n}</span> ${N(e(t,n)??``)}</span>`).join(``)}</p>
    </div>
    ${T(`chevron`,`row__chev`)}
  </a>
  ${_(t,`fav fav--light row__fav`)}
</article>`,z=(e,t=3)=>`<article class="tile">
  <a class="tile__link" href="#/watch/${e.id}">
    <span class="tile__img mirror">${M(e)}</span>
    <p class="tile__brand">${N(e.brand)}${e.available?``:k(e)}</p>
    <h${t} class="tile__name">${N(e.name)}</h${t}>
  </a>
  ${_(e,`fav fav--light tile__fav`)}
</article>`,B=(e,t=3,n=``)=>`<ul class="rows" role="list"${n}>${e.map(e=>`<li>${R(e,t)}</li>`).join(``)}</ul>`,V=(e,t=3)=>`<ul class="tiles" role="list">${e.map(e=>`<li>${z(e,t)}</li>`).join(``)}</ul>`,H=e=>`<span class="mosaic mosaic--${Math.min(e.length,4)}" aria-hidden="true">${e.slice(0,4).map(e=>`<span class="mosaic__cell">${M(e,{sizes:`(min-width: 1000px) 15rem, 30vw`})}</span>`).join(``)}</span>`,U=(e=3)=>`<ul class="folders" role="list">${m.map(t=>{let n=i.filter(e=>e.style===t.slug);return`<li><a class="folder" href="#/collection/${t.slug}">${H(n)}
    <h${e} class="folder__name">${t.he}</h${e}><span class="folder__n">${O(n.length)}</span>${T(`chevron`,`folder__chev`)}</a></li>`}).join(``)}</ul>`,W=()=>`<section class="about" aria-labelledby="h-about" data-reveal>
  <div class="about__media">${P(`scene2`,`about__img`)}</div>
  <div class="about__body"><h2 class="h2" id="h-about">${f}</h2><p>${u}</p></div>
</section>`,G=()=>`<section class="ask" aria-labelledby="h-ask" data-reveal>
  <div class="ask__media" aria-hidden="true">${P(`reeds`,`ask__img`)}</div>
  <div class="ask__in">
    <h2 class="h2" id="h-ask">${c}</h2>
    <p>${s}</p>
    <div class="ask__cta"><a class="btn btn--rose" href="#/contact">לבקשת שעון</a>${F(r,`כתבו לנו בוואטסאפ`,`btn btn--line`)}</div>
  </div>
</section>`,K=e=>`<a class="more" href="#/collection">${e} ${T(`arrow`)}</a>`;function q(){return`<section class="hero">
    <div class="hero__media" aria-hidden="true">${P(`hero-far`,`hero__img`,!0)}</div>
    <div class="hero__in">
      <h1 class="hero__logo" data-live-clock><span class="sr-only">Moshe · ${h}</span>${o(`full`,{decorative:!0})}</h1>
      <div class="hero__foot">
        <p class="hero__lead">${n}</p>
        <div class="hero__cta"><a class="btn btn--rose" href="#/collection">לקטלוג השעונים</a><a class="btn btn--line" href="#/contact">לבקשת שעון</a></div>
      </div>
    </div>
  </section>

  <section class="sec" aria-labelledby="h-feat">
    <div class="sec__head"><h2 class="h2" id="h-feat">שעונים נבחרים</h2>${K(`לכל הקטלוג`)}</div>
    ${V(i.slice(0,4))}
  </section>

  <section class="sec" aria-labelledby="h-cats" data-reveal>
    <div class="sec__head"><h2 class="h2" id="h-cats">קטגוריות</h2></div>
    ${U()}
  </section>

  ${W()}
  ${G()}`}function oe(e){let r=A(e),i=C(r.style),a=y(r),o=r.view===`list`;return`<header class="head">
    <div class="head__top"><h1 class="h1">${i?i.he:`הקטלוג`}</h1><span class="head__n">${O(a.length)}</span></div>
    ${i?``:`<p class="lead">${n}</p>`}
  </header>
  <div class="tools">
    <div class="tools__chips">${r.brands.map(e=>`<a class="chip" href="${S({brands:r.brands.filter(t=>t!==e)},r)}" data-replace aria-label="הסרת ${t(I(e))}">${N(I(e))}${T(`close`)}</a>`).join(``)}</div>
    <form class="sort" data-filter-form data-style="${r.style}">
      ${r.brands.map(e=>`<input type="hidden" name="brand" value="${e}">`).join(``)}
      <input type="hidden" name="view" value="${r.view}">
      <label class="sort__l" for="sort">מיון</label>
      <span class="select"><select id="sort" name="sort" data-autosubmit data-keep-focus="sort">${j.map(([e,t])=>`<option value="${e}"${r.sort===e?` selected`:``}>${t}</option>`).join(``)}</select>${T(`chevron`)}</span>
    </form>
    <div class="views" role="group" aria-label="תצוגה">
      <a class="views__b" href="${S({view:`grid`},r)}" data-replace data-keep-focus="v-rows" aria-label="תצוגת רשימה"${o?``:` aria-current="true"`}>${T(`list`)}</a>
      <a class="views__b" href="${S({view:`list`},r)}" data-replace data-keep-focus="v-tiles" aria-label="תצוגת רשת"${o?` aria-current="true"`:``}>${T(`grid`)}</a>
    </div>
  </div>
  ${a.length?o?V(a,2):B(a,2):`<div class="empty"><p>אין שעונים שמתאימים לסינון הזה.</p><a class="btn btn--line" href="${S({style:r.style,view:r.view})}" data-replace>ניקוי</a></div>`}`}function se(e,t){let n=e.specs.map(e=>e.label);return t?.specs.forEach((e,r)=>{if(n.includes(e.label))return;let i=t.specs.slice(0,r).reverse().find(e=>n.includes(e.label));n.splice(i?n.indexOf(i.label)+1:0,0,e.label)}),n}function J(n,r){let i=e=>`<td>${e?N(e):`<span class="spec__none">—</span>`}</td>`,a=r?`<thead><tr><td></td>${[n,r].map(e=>`<th scope="col"><span class="spec__thumb" aria-hidden="true">${M(e,{sizes:`2.75rem`})}</span><span class="spec__who">${N(e.name)}</span></th>`).join(``)}</tr></thead>`:``,o=se(n,r).map(t=>{let a=e(n,t),o=r?e(r,t):void 0;return`<tr${r?` class="${a===o?`is-same`:`is-diff`}"`:``}><th scope="row">${t}</th>${i(a)}${r?i(o):``}</tr>`}).join(``);return`<caption class="sr-only">מפרט · ${t(n.name)}${r?` · ${t(r.name)}`:``}</caption>
    <colgroup><col class="spec__ck"><col>${r?`<col>`:``}</colgroup>${a}<tbody>${o}</tbody>`}function ce(e){let n=l(e.params.id),r=C(n.style),a=[...i.filter(e=>e.id!==n.id&&e.style===n.style),...i.filter(e=>e.style!==n.style)].slice(0,4);return`<article class="pdp">
    <a class="up" href="#/collection/${r.slug}">${T(`back`)}<span>${r.he}</span></a>
    <div class="pdp__grid">
      <div class="gallery" data-gallery>
        <div class="gallery__frame mirror">
          <div class="gallery__track" data-gallery-track tabindex="0" aria-label="תמונות של ${t(n.name)}">
            <figure class="gallery__slide" data-gallery-slide><button class="gallery__zoom" type="button" data-zoom="${ne(n)}" data-alt="${t(n.name)}" aria-label="הגדלת התמונה">${M(n,{large:!0,eager:!0})}</button></figure>
            <figure class="gallery__slide gallery__slide--photo" data-gallery-slide><button class="gallery__zoom" type="button" data-zoom="${x(n)}" data-alt="${t(n.name)}" aria-label="הגדלת התמונה"><img src="${x(n)}" width="900" height="1200" alt="${t(n.name)}, תמונה נוספת" loading="lazy" decoding="async"></button></figure>
          </div>
          <span class="gallery__count" data-gallery-count dir="ltr">1 / 2</span>
          <div class="gallery__thumbs">
            <button type="button" data-gallery-go="0" aria-label="תמונה ראשית">${M(n,{sizes:`3rem`})}</button>
            <button class="thumb--photo" type="button" data-gallery-go="1" aria-label="תמונה נוספת"><img src="${x(n)}" alt="" width="900" height="1200" loading="lazy" decoding="async"></button>
          </div>
        </div>
      </div>
      <div class="pdp__info">
        <div class="pdp__top"><p class="pdp__brand">${N(n.brand)}</p>${k(n)}</div>
        <h1 class="pdp__name">${N(n.name)}</h1>
        <p class="pdp__desc">${N(n.description)}</p>
        <div class="pdp__cta">${F(E(n),`אני מעוניין בשעון הזה`,`btn btn--rose btn--lg`)}${_(n,`fav fav--lg`)}</div>
        <p class="note">${ie}</p>
      </div>
    </div>
    <section class="spec" aria-labelledby="h-spec">
      <div class="spec__head">
        <h2 class="h2" id="h-spec">מפרט</h2>
        <span class="select select--cmp">${T(`swap`)}<select data-compare="${n.id}" aria-label="השוואת המפרט לשעון אחר">
          <option value="">בחרו שעון</option>${i.filter(e=>e.id!==n.id).map(e=>`<option value="${e.id}">${t(e.name)}</option>`).join(``)}
        </select>${T(`chevron`)}</span>
      </div>
      <div class="spec__wrap"><table class="spec__t" data-spec>${J(n)}</table></div>
    </section>
  </article>
  <section class="sec" aria-labelledby="h-more">
    <div class="sec__head"><h2 class="h2" id="h-more">שעונים נוספים</h2>${K(`לכל הקטלוג`)}</div>
    ${B(a)}
  </section>`}function le(){return`<header class="head"><h1 class="h1">אודות</h1></header>
  ${W()}
  ${G()}`}function ue(e){let n=l(e.query.get(`w`)??``);return`<header class="head"><h1 class="h1">יצירת קשר ובקשת שעון</h1><p class="lead">${c} ${s}</p></header>
  <div class="contact">
    <form class="form panel" data-wa-form data-wa-intro="היי, פנייה מהאתר:" novalidate>
      <h2 class="h3">בקשת שעון</h2>
      <div class="form__row">
        <div class="field"><label for="c-name">שם מלא</label>
          <input id="c-name" name="name" required autocomplete="name" data-label="שם" data-msg="איך לפנות אליכם?" aria-describedby="e-name">
          <p class="field__err" id="e-name" data-error-for="name"></p></div>
        <div class="field"><label for="c-want">שעון מהקטלוג</label>
          <span class="select select--field"><select id="c-want" name="want" data-label="שעון מהקטלוג"><option value="">בחרו שעון</option>
            ${i.map(e=>`<option ${n?.id===e.id?`selected`:``}>${t(e.name)}</option>`).join(``)}</select>${T(`chevron`)}</span></div>
      </div>
      <div class="field"><label for="c-desc">תיאור השעון שמחפשים: מותג, דגם ותקציב <span class="muted">(לא חובה)</span></label>
        <input id="c-desc" name="desc" data-label="תיאור השעון"></div>
      <div class="field"><label for="c-msg">הודעה <span class="muted">(לא חובה)</span></label>
        <textarea id="c-msg" name="msg" rows="3" data-label="הודעה"></textarea></div>
      <button class="btn btn--rose btn--lg" type="submit">${T(`wa`)}<span>שליחה בוואטסאפ</span></button>
      <p class="form__status" data-form-status role="status"></p>
      <p class="note">הטופס לא שולח דבר לשרת. הוא מכין הודעה בוואטסאפ, ורק אתם מחליטים אם לשלוח.</p>
    </form>
    <a class="wa-card" href="${v(r)}" target="_blank" rel="noopener">
      ${P(`scene3`,`wa-card__img`)}
      <span class="wa-card__in">${T(`wa`)}<strong>כתבו לנו בוואטסאפ</strong>${T(`arrow`)}</span>
    </a>
  </div>`}function de(){let e=D();return`<header class="head"><div class="head__top"><h1 class="h1">המועדפים שלי</h1>${e.length?`<span class="head__n">${O(e.length)}</span>`:``}</div></header>
  ${e.length?`${B(e,2)}
    <div class="fav-bar">
      <button class="btn btn--rose" type="button" data-wa-list>${T(`wa`)}<span>שליחת הרשימה למשה</span></button>
      <button class="btn btn--line" type="button" data-fav-clear>${T(`trash`)}<span>ניקוי</span></button>
    </div>`:`<div class="empty">${T(`heart`,`empty__i`)}<p>לחצו על הלב בכל שעון כדי לשמור אותו כאן.</p><a class="btn btn--rose" href="#/collection">לקטלוג השעונים</a></div>`}`}function fe(e){let t=e.query.get(`q`)??``,n=ee(t);return`<header class="head"><h1 class="h1">חיפוש</h1><p class="lead" data-count>${g(t,n.length)}</p></header>
  ${B(n,2,` data-results`)}
  <section class="browse" aria-labelledby="h-browse">
    <div class="sec__head"><h2 class="h2" id="h-browse">קטגוריות</h2>${K(`לכל הקטלוג`)}</div>
    ${U()}
  </section>`}var pe=e=>{let t=w(e.params.slug);return`<article class="legal"><header class="head"><h1 class="h1">${t.title}</h1></header><div class="legal__body panel">${t.body}</div></article>`},me=()=>`<section class="lost">
  ${P(`scene3`,`lost__img`)}
  <div class="lost__in"><h1 class="h1">העמוד לא נמצא</h1><p>ייתכן שהקישור השתנה.</p><a class="btn btn--rose" href="#/collection">לכל הקטלוג</a></div>
</section>`;function Y(e,t){let n=(e,t,n)=>`<a class="dl__a" ${e}><span class="dl__t">${t}</span><span class="dl__n">${n}</span></a>`;return`<p class="dl__h" id="${e}-cats">קטגוריות</p>
  <ul class="dl__list" role="list" aria-labelledby="${e}-cats">
    <li>${n(`href="#/collection" data-dir-style=""`,`הכל`,i.length)}</li>
    ${m.map(e=>`<li data-dir-group="${e.slug}">${n(`href="#/collection/${e.slug}" data-dir-style="${e.slug}"`,e.he,d(e.slug))}
      ${t?`<ul class="dl__sub" role="list">${i.filter(t=>t.style===e.slug).map(e=>`<li><a class="dl__w" href="#/watch/${e.id}" data-dir-watch="${e.id}" data-brand="${e.brandSlug}">${N(e.name)}</a></li>`).join(``)}</ul>`:``}
    </li>`).join(``)}
  </ul>
  <p class="dl__h" id="${e}-brands">מותג</p>
  <ul class="dl__list" role="list" aria-labelledby="${e}-brands">
    ${p.map(e=>`<li>${n(`href="${S({brands:[e.slug]})}" data-dir-brand="${e.slug}"`,N(e.name),i.filter(t=>t.brandSlug===e.slug).length)}</li>`).join(``)}
  </ul>`}function he(){return`<a class="skip-link" href="#main" data-skip>דלג לתוכן</a>
  <header class="hd">
    <div class="hd__top">
      <a class="hd__logo" href="#/" aria-label="Moshe, דף הבית">${o(`compact`,{decorative:!0})}</a>
      <nav class="hd__nav" aria-label="ניווט ראשי">${[[`#/`,`home`,`בית`],[`#/collection`,`collection`,`קטלוג`],[`#/about`,`about`,`אודות`],[`#/contact`,`contact`,`קשר`]].map(([e,t,n])=>`<a href="${e}" data-nav="${t}"${t===`home`?` class="hd__home"`:``}>${n}</a>`).join(``)}</nav>
      <a class="hd__fav" href="#/favorites" data-nav="favorites">${T(`heart`)}<span class="hd__fav-t">מועדפים</span><span class="badge" data-fav-count hidden></span></a>
    </div>
    <div class="hd__bar">
      <button class="pick" type="button" data-open="dir-dlg" aria-haspopup="dialog">
        <span class="pick__k">קטגוריות</span><span class="pick__v" data-pick>הכל</span>${T(`chevron`,`pick__i`)}
      </button>
      <form class="find" data-search-form role="search">
        <label class="sr-only" for="find-q">חיפוש</label>
        ${T(`search`)}<input id="find-q" name="q" type="search" placeholder="חיפוש לפי שם, מותג או תיאור" autocomplete="off" enterkeyhint="search" data-find>
      </form>
    </div>
  </header>

  <div class="frame">
    <nav class="dir" aria-label="קטגוריות">
      ${Y(`side`,!0)}
      <div class="dir__foot">
        <a class="dl__a dir__fav" href="#/favorites" data-nav="favorites">${T(`heart`)}<span class="dl__t">המועדפים שלי</span><span class="dl__n" data-fav-count hidden></span></a>
        ${F(r,`כתבו לנו בוואטסאפ`,`btn btn--line dir__wa`)}
      </div>
    </nav>
    <main id="main" tabindex="-1"></main>
  </div>

  <footer class="ft">
    <div class="ft__scene" aria-hidden="true">${P(`hero-near`,`ft__img`)}</div>
    <div class="ft__in">
      <a class="ft__logo" href="#/" aria-label="Moshe, דף הבית">${o(`full`,{decorative:!0})}</a>
      <nav class="ft__nav" aria-label="ניווט תחתון">
        <a href="#/collection">קטלוג</a><a href="#/about">אודות</a><a href="#/contact">קשר</a><a href="#/favorites">מועדפים</a><a href="#/search" data-nav="search">חיפוש</a>
      </nav>
      <nav class="ft__legal" aria-label="מדיניות"><a href="#/page/accessibility">הצהרת נגישות</a><a href="#/page/privacy">מדיניות פרטיות</a></nav>
      <p class="ft__disc">${a}</p>
      <p class="ft__demo">הדגמת עיצוב · <a href="../../index.html">לכל הכיוונים</a></p>
    </div>
  </footer>

  <dialog class="dd" id="dir-dlg" aria-labelledby="dlg-cats">
    <div class="dd__in">
      <button class="dd__x" type="button" data-close aria-label="סגירה">${T(`close`)}</button>
      <nav class="dd__list" aria-labelledby="dlg-cats">${Y(`dlg`,!1)}</nav>
    </div>
  </dialog>`}var X=(e,t,n)=>(!t||e.style===t)&&(!n.length||n.includes(e.brandSlug));function Z(e,t,n,r){t?(e.setAttribute(`href`,t),e.removeAttribute(`aria-disabled`),e.removeAttribute(`role`)):(e.removeAttribute(`href`),e.setAttribute(`aria-disabled`,`true`),e.setAttribute(`role`,`link`)),r?e.setAttribute(`aria-current`,r):e.removeAttribute(`aria-current`);let i=e.querySelector(`.dl__n`);i&&(i.textContent=String(n))}function ge(e){let n=e.name===`collection`?A(e):null,r=e.name===`watch`?l(e.params.id):void 0,a=n?.brands??[],o=n?.style??``,s=n?n.style:r?.style??``;document.querySelectorAll(`[data-dir-style]`).forEach(e=>{let t=e.dataset.dirStyle??``,o=i.filter(e=>X(e,t,a)).length,s=n&&n.style===t?`page`:!n&&r&&t===r.style?`true`:null;Z(e,o?S({style:t},n??void 0):null,o,s)}),document.querySelectorAll(`[data-dir-brand]`).forEach(e=>{let t=e.dataset.dirBrand??``,r=a.includes(t),s=i.filter(e=>X(e,o,[t])).length,c=n?S({brands:r?a.filter(e=>e!==t):[t]},n):S({brands:[t]});Z(e,s?c:null,s,r?`true`:null)}),document.querySelectorAll(`[data-dir-group]`).forEach(e=>e.toggleAttribute(`data-open`,!!s&&e.dataset.dirGroup===s)),document.querySelectorAll(`[data-dir-watch]`).forEach(e=>{r&&e.dataset.dirWatch===r.id?e.setAttribute(`aria-current`,`page`):e.removeAttribute(`aria-current`),e.parentElement.hidden=a.length>0&&!a.includes(e.dataset.brand??``)});let c=a.map(I).join(`, `),u=`<span class="pick__s">${t(C(s)?.he??`הכל`)}</span>${c?`<span class="pick__sep" aria-hidden="true">·</span><span class="pick__b" dir="ltr">${t(c)}</span>`:``}`;document.querySelectorAll(`[data-pick]`).forEach(e=>{e.innerHTML=u,e.closest(`.pick`)?.toggleAttribute(`data-wide`,!!c)})}var Q=``;function $(e,t){ge(e);let n=document.querySelector(`[data-find]`);if(n){let t=e.name===`search`?e.query.get(`q`)??``:``;n.value.trim()!==t&&(n.value=t),n.toggleAttribute(`data-live-search`,e.name===`search`)}Q&&t.querySelector(`[data-keep-focus="${Q}"]`)?.focus({preventScroll:!0}),Q=``}function _e(){let e=document.documentElement,t=document.querySelector(`.hd__top`),n=document.querySelector(`.hd__bar`),r=document.getElementById(`dir-dlg`),i=e=>{let t=e.target instanceof Element?e.target.closest(`[data-keep-focus]`)?.getAttribute(`data-keep-focus`):null;t&&(Q=t)};document.addEventListener(`click`,i,!0),document.addEventListener(`change`,i,!0),document.addEventListener(`click`,e=>{n&&r&&e.target instanceof Element&&e.target.closest(`[data-open="dir-dlg"]`)&&r.style.setProperty(`--dd-top`,`${Math.round(n.getBoundingClientRect().bottom+6)}px`)}),document.addEventListener(`input`,t=>{let n=t.target;if(!(n instanceof HTMLInputElement)||!n.matches(`[data-find]`)||e.dataset.route===`search`)return;let r=n.value.trim();r&&(b(`#/search?q=${encodeURIComponent(r)}`,{keepScroll:!0}),scrollTo(0,0))}),document.addEventListener(`change`,e=>{let t=e.target;if(!(t instanceof HTMLSelectElement)||!t.matches(`[data-compare]`))return;let n=l(t.dataset.compare??``),r=document.querySelector(`#main [data-spec]`);if(!n||!r)return;let i=l(t.value);r.innerHTML=J(n,i),r.classList.toggle(`is-cmp`,!!i)});let a=scrollY,o=0;addEventListener(`scroll`,()=>{o||=requestAnimationFrame(()=>{o=0;let n=scrollY;Math.abs(n-a)<8||(e.toggleAttribute(`data-tuck`,n>a&&n>180&&!t?.contains(document.activeElement)),a=n)})},{passive:!0})}re({layout:he,views:{home:q,collection:oe,watch:ce,about:le,contact:ue,favorites:de,search:fe,page:pe,notfound:me},list:e=>e.map(e=>`<li>${R(e,2)}</li>`).join(``),mount:_e,afterRender:$});