import"../modulepreload-polyfill-P2Xu9kJm.js";import{B as e,C as t,D as n,E as r,F as i,H as a,I as o,L as s,M as c,N as l,O as u,P as d,S as f,T as p,V as m,_ as h,a as g,b as _,c as v,f as y,g as b,h as x,i as S,j as C,k as w,l as T,m as E,o as D,p as O,r as k,s as A,t as j,u as M,v as N,w as P,x as F,z as I}from"../app-BCOJKLs9.js";var L=e=>x(`canyon`,e),R={sport:`sand`,openworked:`turq`,classic:`rust`},z=e=>R[e]??`sand`,B=e=>String(e).padStart(2,`0`),V=(e,t,n)=>`<a class="${n}" href="${_(e)}" target="_blank" rel="noopener">${T(`wa`)}<span>${t}</span></a>`,H=(e,t)=>{let n=e.lastIndexOf(` `);return`${n<0?``:`${e.slice(0,n)} `}<span class="glue">${e.slice(n+1)}${t}</span>`},U=e=>{let t=e.indexOf(` — `);return t<0?[e,``]:[e.slice(0,t),e.slice(t+3)]},W=e=>`<nav class="crumbs" aria-label="מיקום באתר">
  <a href="#/">בית</a>${e.map(([e,t])=>`<span class="crumbs__sep" aria-hidden="true">/</span>${t?`<a href="${t}">${I(e)}</a>`:`<span aria-current="page">${I(e)}</span>`}`).join(``)}
</nav>`,G=(e,t,n={})=>`<div class="head block tone-${e}">
  <div class="head__in">
    ${n.top||n.n?`<div class="head__top">${n.top??`<span></span>`}${n.n?`<span class="head__n" aria-hidden="true">${n.n}</span>`:``}</div>`:``}
    <h1 class="head__title">${t}</h1>
    ${n.lead?`<p class="head__lead">${n.lead}</p>`:``}
    ${n.extra??``}
  </div>
</div>`,K=(t,n=2)=>`<article class="tile tone-${z(t.style)}">
  <a class="tile__link" href="#/watch/${t.id}">
    <span class="tile__block">
      <span class="arch">${F(t)}</span>
      <span class="tile__n" aria-hidden="true">${B(t.n)}</span>
    </span>
    <span class="tile__brand">${I(t.brand)}</span>
    <h${n} class="tile__name">${I(t.name)}</h${n}>
    <span class="tile__style">${e(C(t.style)?.he??``)}</span>
  </a>
  ${g(t,`fav tile__fav`)}
</article>`,q=(e,t=2)=>e.map(e=>`<li>${K(e,t)}</li>`).join(``),J=e=>`<ul class="grid" role="list" data-results>${q(e)}</ul>`;function Y(e,t){let n=r.filter(t=>t.style===e.slug);return`<section class="cat block tone-${z(e.slug)}" aria-labelledby="cat-${e.slug}">
    <div class="cat__in">
      <div class="cat__head">
        <span class="cat__n" aria-hidden="true">${B(t+1)}</span>
        <h3 class="cat__name" id="cat-${e.slug}"><a href="#/collection/${e.slug}">${H(e.he,T(`arrow`))}</a></h3>
        <p class="cat__count">${O(n.length)}</p>
      </div>
      <ul class="shelf shelf--${Math.min(n.length,4)}" role="list">${n.map((e,t)=>`<li class="shelf__item${t===0?` shelf__item--lead`:``}">
        <a class="stand" href="#/watch/${e.id}">
          <span class="arch">${F(e,{sizes:`(min-width: 960px) 18vw, 46vw`})}</span>
          <span class="stand__name">${I(e.name)}</span>
        </a></li>`).join(``)}</ul>
    </div>
  </section>`}var X=()=>`<section class="story" aria-labelledby="h-story">
  <div class="story__in">
    <figure class="story__arch"><img src="${L(`scene2`)}" alt="" width="768" height="1376" loading="lazy" decoding="async"></figure>
    <div class="story__text">
      <h2 class="story__title" id="h-story" data-reveal>${d}</h2>
      <p class="story__body" data-reveal>${l}</p>
    </div>
  </div>
</section>`,Z=()=>`<section class="req block tone-turq" aria-labelledby="h-req">
  <div class="req__in">
    <div class="req__text" data-reveal>
      <h2 class="req__title" id="h-req">${s}</h2>
      <p class="req__lead">${o}</p>
      <div class="req__cta"><a class="btn btn--ink" href="#/contact">לבקשת שעון ${T(`arrow`)}</a>${V(n,`כתבו לנו בוואטסאפ`,`btn btn--line`)}</div>
    </div>
    <figure class="req__frame"><img src="${L(`scene3`)}" alt="" width="768" height="1376" loading="lazy" decoding="async"></figure>
  </div>
</section>`;function Q(){return`<section class="poster block tone-rust" aria-labelledby="h-poster">
    <div class="poster__in">
      <h1 class="poster__title" id="h-poster"><span class="sr-only">Moshe · </span>${m.split(` `).map((e,t)=>`<span class="poster__w poster__w--${t+1}">${e}</span>`).join(` `)}</h1>
      <p class="poster__lead">${I(t)}</p>
      <div class="poster__cta"><a class="btn btn--ink btn--lg" href="#/collection">לקטלוג השעונים ${T(`arrow`)}</a></div>
      <figure class="poster__frame"><img src="${L(`hero-far`)}" alt="" width="768" height="1376" fetchpriority="high" decoding="async"></figure>
    </div>
  </section>

  <section class="cats" aria-labelledby="h-cats">
    <div class="sec-head"><h2 class="sec-title" id="h-cats">קטגוריות</h2><a class="link" href="#/collection">לכל הקטלוג ${T(`arrow`)}</a></div>
    ${p.map(Y).join(``)}
  </section>
  ${X()}
  ${Z()}`}function $(n){let i=A(n),a=C(i.style),o=v(i),s=r.filter(e=>!i.style||e.style===i.style),c=f.filter(e=>s.some(t=>t.brandSlug===e.slug)),l=(e,t,n)=>`<a class="toggle" href="${S({brands:t},i)}" data-replace ${n?`aria-current="true"`:``}>${e}</a>`;return`${G(a?z(a.slug):`cream`,a?a.he:`הקטלוג`,{top:W(a?[[`הקטלוג`,`#/collection`],[a.he]]:[[`הקטלוג`]]),n:a?B(p.indexOf(a)+1):void 0,lead:a?void 0:I(t)})}
  <div class="bar">
    <p class="bar__count">${O(o.length)}</p>
    <div class="bar__tools">
      ${c.length>1?`<div class="toggles" role="group" aria-labelledby="brand-l"><span class="bar__label" id="brand-l">מותג</span>
        ${l(`הכל`,[],!i.brands.length)}
        ${c.map(e=>{let t=i.brands.length===1&&i.brands[0]===e.slug;return l(I(e.name),t?[]:[e.slug],t)}).join(``)}
      </div>`:``}
      <form class="sort" data-filter-form data-style="${i.style}">
        ${i.brands.map(t=>`<input type="hidden" name="brand" value="${e(t)}">`).join(``)}
        <label class="bar__label" for="sort">מיון</label>
        <select id="sort" name="sort" data-autosubmit>${j.map(([e,t])=>`<option value="${e}" ${i.sort===e?`selected`:``}>${t}</option>`).join(``)}</select>
      </form>
    </div>
  </div>
  ${o.length?J(o):`<div class="empty"><a class="btn btn--turq" href="#/collection" data-replace>לכל הקטלוג</a></div>`}`}function ee(t){let n=c(t.params.id),i=C(n.style),a=r.filter(e=>e.id!==n.id),[o,s]=U(n.name);return`<article class="pdp">
    <div class="pdp__top block tone-${z(n.style)}">
      <div class="pdp__in">
        <div class="pdp__head">
          <div class="head__top">${W([[`הקטלוג`,`#/collection`],[i.he,`#/collection/${i.slug}`]])}<span class="head__n" aria-hidden="true">${B(n.n)}</span></div>
          <p class="pdp__brand">${I(n.brand)}</p>
          <h1 class="pdp__name"><span class="pdp__model">${I(o)}</span>${s?`<span class="sr-only"> — </span><span class="pdp__variant">${I(s)}</span>`:``}</h1>
          <div class="pdp__meta"><a class="tag" href="#/collection/${i.slug}">${i.he}</a>${k(n)}</div>
          <div class="cta-bar">
            <a class="cta-bar__go" href="${_(E(n))}" target="_blank" rel="noopener">${T(`wa`)}<span>אני מעוניין בשעון הזה</span></a>
            ${g(n,`fav cta-bar__fav`)}
          </div>
        </div>
        <div class="gallery" data-gallery>
          <div class="gallery__track" data-gallery-track tabindex="0" aria-label="תמונות של ${e(n.name)}">
            <figure class="gallery__slide" data-gallery-slide><button class="gallery__zoom" type="button" data-zoom="${M(n)}" data-alt="${e(n.name)}" aria-label="הגדלת התמונה">${F(n,{large:!0,eager:!0})}</button></figure>
            <figure class="gallery__slide gallery__slide--photo" data-gallery-slide><button class="gallery__zoom" type="button" data-zoom="${y(n)}" data-alt="${e(n.name)}" aria-label="הגדלת התמונה"><img src="${y(n)}" width="900" height="1200" alt="${e(n.name)}, תמונה נוספת" loading="lazy" decoding="async"></button></figure>
          </div>
          <div class="gallery__nav">
            <button class="sq sq--line" type="button" data-gallery-prev aria-label="התמונה הקודמת">${T(`back`)}</button>
            <span class="gallery__count" data-gallery-count dir="ltr">1 / 2</span>
            <button class="sq sq--line" type="button" data-gallery-next aria-label="התמונה הבאה">${T(`arrow`)}</button>
          </div>
        </div>
      </div>
    </div>
    <div class="pdp__body">
      <div class="pdp__copy">
        <p class="pdp__desc">${I(n.description)}</p>
        <p class="note">${P}</p>
      </div>
      <section class="pdp__specs" aria-labelledby="h-spec">
        <h2 class="pdp__h" id="h-spec">מפרט</h2>
        <dl class="specs">${n.specs.map(e=>`<div class="spec"><dt>${e.label}</dt><dd>${I(e.value)}</dd></div>`).join(``)}</dl>
      </section>
    </div>
  </article>
  <section class="more" aria-labelledby="h-more">
    <div class="sec-head"><h2 class="sec-title" id="h-more">שעונים נוספים</h2><a class="link" href="#/collection">לכל הקטלוג ${T(`arrow`)}</a></div>
    <ul class="rail" role="list">${q(a,3)}</ul>
  </section>`}function te(){return`${G(`sand`,`אודות`)}
  ${X()}
  ${Z()}`}function ne(t){let i=c(t.query.get(`w`)??``);return`${G(`rust`,`יצירת קשר ובקשת שעון`,{lead:`${s} ${o}`})}
  <div class="contact">
    <a class="wa-block" href="${_(n)}" target="_blank" rel="noopener">${T(`wa`)}<span>כתבו לנו בוואטסאפ</span>${T(`arrow`)}</a>
    <form class="form" data-wa-form data-wa-intro="היי, פנייה מהאתר:" novalidate>
      <h2 class="form__title">בקשת שעון</h2>
      <div class="form__row">
        <div class="field"><label for="c-name">שם מלא</label>
          <input id="c-name" name="name" required autocomplete="name" data-label="שם" data-msg="איך לפנות אליכם?" aria-describedby="e-name">
          <p class="field__err" id="e-name" data-error-for="name"></p></div>
        <div class="field"><label for="c-want">שעון מהקטלוג</label>
          <select id="c-want" name="want" data-label="שעון מהקטלוג"><option value="">בחרו שעון</option>
            ${r.map(t=>`<option ${i?.id===t.id?`selected`:``}>${e(t.name)}</option>`).join(``)}</select></div>
      </div>
      <div class="field"><label for="c-desc">תיאור השעון שמחפשים: מותג, דגם ותקציב <span class="muted">(לא חובה)</span></label>
        <input id="c-desc" name="desc" data-label="תיאור השעון"></div>
      <div class="field"><label for="c-msg">הודעה <span class="muted">(לא חובה)</span></label>
        <textarea id="c-msg" name="msg" rows="3" data-label="הודעה"></textarea></div>
      <button class="btn btn--turq btn--lg" type="submit">${T(`wa`)}<span>שליחה בוואטסאפ</span></button>
      <p class="form__status" data-form-status role="status"></p>
      <p class="note">הטופס לא שולח דבר לשרת. הוא מכין הודעה בוואטסאפ, ורק אתם מחליטים אם לשלוח.</p>
    </form>
  </div>`}function re(){let e=D();return`${G(`sand`,`המועדפים שלי`,{lead:O(e.length)})}
  ${e.length?`<div class="fav-bar">
      <button class="btn btn--turq" type="button" data-wa-list>${T(`wa`)}<span>שליחת הרשימה למשה</span></button>
      <button class="btn btn--line" type="button" data-fav-clear>${T(`trash`)}<span>ניקוי</span></button>
    </div>
    ${J(e)}`:`<div class="empty">${T(`heart`,`empty__icon`)}<a class="btn btn--turq" href="#/collection">לקטלוג השעונים ${T(`arrow`)}</a></div>`}`}function ie(t){let n=t.query.get(`q`)??``,r=b(n);return`${G(`cream`,`חיפוש`,{extra:`<form class="find" data-search-form role="search"><label class="sr-only" for="s-q">חיפוש</label>
      ${T(`search`)}<input id="s-q" name="q" type="search" value="${e(n)}" placeholder="חיפוש לפי שם, מותג או תיאור" autocomplete="off" data-live-search></form>
      <p class="find__count" data-count>${h(n,r.length)}</p>`})}
  ${J(r)}`}var ae=e=>{let t=w(e.params.slug);return`${G(`panel`,t.title)}<article class="legal"><div class="legal__body">${t.body}</div></article>`},oe=()=>`<section class="nf block tone-turq">
  <div class="nf__in">
    <p class="nf__n" aria-hidden="true">404</p>
    <h1 class="nf__title">העמוד לא נמצא</h1>
    <p class="nf__text">ייתכן שהקישור השתנה.</p>
    <a class="btn btn--ink btn--lg" href="#/collection">לכל הקטלוג ${T(`arrow`)}</a>
  </div>
</section>`;function se(){let e=[[`#/`,`home`,`בית`],[`#/collection`,`collection`,`קטלוג`],[`#/about`,`about`,`אודות`],[`#/contact`,`contact`,`קשר`]];return`<a class="skip-link" href="#main" data-skip>דלג לתוכן</a>
  <header class="hd">
    <div class="hd__bar">
      <a class="hd__logo" href="#/" aria-label="Moshe, דף הבית">${a(`compact`,{decorative:!0})}</a>
      <nav class="hd__nav" aria-label="ניווט ראשי">${e.map(([e,t,n])=>`<a href="${e}" data-nav="${t}">${n}</a>`).join(``)}</nav>
      <div class="hd__icons">
        <a class="sq" href="#/search" data-nav="search" aria-label="חיפוש">${T(`search`)}</a>
        <a class="sq" href="#/favorites" data-nav="favorites" aria-label="המועדפים שלי">${T(`heart`)}<span class="badge" data-fav-count hidden></span></a>
        <button class="sq hd__menu" type="button" data-open="menu" aria-label="פתיחת התפריט">${T(`menu`)}</button>
      </div>
    </div>
    <nav class="ticker" aria-label="קטגוריות">
      <ul class="ticker__list" role="list">
        <li><a class="tick block tone-cream" href="#/collection" data-cat="">הכל<span class="tick__n">${r.length}</span></a></li>
        ${p.map(e=>`<li><a class="tick block tone-${z(e.slug)}" href="#/collection/${e.slug}" data-cat="${e.slug}">${e.he}<span class="tick__n">${u(e.slug)}</span></a></li>`).join(``)}
      </ul>
    </nav>
  </header>

  <dialog class="menu" id="menu" aria-label="תפריט">
    <div class="menu__in">
      <div class="menu__top">
        <span class="menu__logo">${a(`compact`,{decorative:!0})}</span>
        <button class="sq" type="button" data-close aria-label="סגירת התפריט">${T(`close`)}</button>
      </div>
      <nav class="menu__nav" aria-label="תפריט">${e.map(([e,t,n])=>`<a class="menu__page" href="${e}" data-nav="${t}"><span>${n}</span>${T(`arrow`)}</a>`).join(``)}</nav>
      <p class="menu__label" id="menu-cats">קטגוריות</p>
      <ul class="menu__cats" role="list" aria-labelledby="menu-cats">${p.map(e=>`<li><a class="band block tone-${z(e.slug)}" href="#/collection/${e.slug}"><span>${e.he}</span><span class="tick__n">${u(e.slug)}</span></a></li>`).join(``)}</ul>
      <div class="menu__row">
        <a class="menu__link" href="#/favorites" data-nav="favorites">${T(`heart`)}<span>המועדפים שלי</span><span class="badge" data-fav-count hidden></span></a>
        <a class="menu__link" href="#/search" data-nav="search">${T(`search`)}<span>חיפוש</span></a>
      </div>
      ${V(n,`כתבו לנו בוואטסאפ`,`btn btn--turq btn--lg menu__wa`)}
    </div>
  </dialog>

  <main id="main" tabindex="-1"></main>

  <footer class="ft">
    <img class="ft__bg" src="${L(`hero-near`)}" alt="" width="768" height="1376" loading="lazy" decoding="async">
    <div class="ft__in">
      <p class="ft__slogan">${m}</p>
      <nav class="ft__nav" aria-label="ניווט תחתון">
        <a href="#/collection">קטלוג</a><a href="#/about">אודות</a><a href="#/contact">קשר</a><a href="#/favorites">מועדפים</a><a href="#/search">חיפוש</a>
      </nav>
      <div class="ft__base">
        <a class="ft__mark" href="#/" aria-label="Moshe, דף הבית" data-live-clock>${a(`mark`,{decorative:!0})}</a>
        <div class="ft__fine">
          <p class="ft__disc">${i}</p>
          <p class="ft__legal"><a href="#/page/accessibility">הצהרת נגישות</a><a href="#/page/privacy">מדיניות פרטיות</a></p>
          <p class="ft__demo">הדגמת עיצוב · <a href="../../index.html">לכל הכיוונים</a></p>
        </div>
      </div>
    </div>
    <div class="ft__strip" aria-hidden="true"><span class="tone-cream"></span><span class="tone-sand"></span><span class="tone-turq"></span><span class="tone-rust"></span></div>
  </footer>`}N({layout:se,views:{home:Q,collection:$,watch:ee,about:te,contact:ne,favorites:re,search:ie,page:ae,notfound:oe},list:e=>q(e),afterRender(e){let t=e.name===`collection`?e.params.style??``:e.name===`watch`?c(e.params.id)?.style??null:null;document.querySelectorAll(`.ticker [data-cat]`).forEach(n=>{t!==null&&n.dataset.cat===t?n.setAttribute(`aria-current`,e.name===`collection`?`page`:`true`):n.removeAttribute(`aria-current`)});let n=document.querySelector(`.ticker__list`),r=n?.querySelector(`[aria-current]`);if(n&&r){let e=n.getBoundingClientRect(),t=r.getBoundingClientRect();t.left<e.left?n.scrollBy({left:t.left-e.left-16}):t.right>e.right&&n.scrollBy({left:t.right-e.right+16})}else n&&(n.scrollLeft=0)}});