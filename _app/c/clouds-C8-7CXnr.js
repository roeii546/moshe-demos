import"../modulepreload-polyfill-P2Xu9kJm.js";import{B as e,C as t,D as n,E as r,F as i,H as a,I as o,L as s,M as c,N as l,P as ee,S as u,T as d,V as f,_ as p,a as m,b as h,c as g,d as _,f as v,g as te,h as ne,i as y,j as b,k as x,l as S,m as C,o as w,p as T,r as E,s as D,t as O,u as k,v as A,w as re,x as j,y as M,z as N}from"../app-CoBIU5JU.js";var P=document.documentElement,F=()=>matchMedia(`(prefers-reduced-motion: reduce)`).matches,I=(e,t,n=!1)=>`<img class="${t}" src="${ne(`clouds`,e)}" alt="" width="768" height="1376" ${n?`fetchpriority="high"`:`loading="lazy"`} decoding="async">`,L=(e,t,n=`btn btn--ink`)=>`<a class="${n}" href="${h(e)}" target="_blank" rel="noopener">${S(`wa`)}<span>${t}</span></a>`,R=e=>e.replace(/([A-Za-z]+-[A-Za-z]+)/g,`<span class="nobr">$1</span>`),z=()=>{let e=new Date,t=e.getMinutes();return{hourAngle:e.getHours()%12*30+t*.5,minuteAngle:t*6}},B=(e,t=`std`)=>`<article class="card${t===`std`?``:` card--wide card--${t}`}">
  <a class="card__link" href="#/watch/${e.id}">
    <div class="card__img">${j(e,t===`std`?{}:{sizes:`(min-width: 1024px) 26vw, (min-width: 640px) 46vw, 92vw`})}</div>
    <div class="card__body">
      <p class="card__brand">${N(e.brand)}</p>
      <h3 class="card__name">${R(N(e.name))}</h3>
      ${t===`std`?``:`<p class="card__short">${N(t===`feature`?e.description:e.short)}</p>`}
      ${e.available?``:E(e)}
      ${t===`std`?``:`<span class="card__more">לפרטים ${S(`arrow`)}</span>`}
    </div>
  </a>
  ${m(e,`round card__fav`)}
</article>`,V=(e,t=!1)=>{let n=e.length%2==1,r=t=>!n||t?`std`:e.length===1?`feature`:`wide`;return`<ul class="shelf${e.length===1?` shelf--one`:``}" role="list">${e.map((e,i)=>`<li${n&&i===0?` class="shelf__lead"`:``}${t?` data-reveal style="--i:${i}"`:``}>${B(e,r(i))}</li>`).join(``)}</ul>`},H=(e,t,n=!1)=>`<section class="cat" id="sec-${e.slug}" data-cat="${e.slug}" tabindex="-1" aria-labelledby="h-${e.slug}">
  <div class="cat__head"${n?` data-reveal`:``}><h2 class="cat__title" id="h-${e.slug}">${e.he}</h2><span class="cat__count">${T(t.length)}</span></div>
  ${V(t,n)}
</section>`,U=e=>`<ul class="grid" role="list" data-results>${e.map(e=>`<li>${B(e)}</li>`).join(``)}</ul>`,W=e=>`<nav class="crumbs" aria-label="מיקום באתר"><a href="#/">בית</a>${e.map(([e,t])=>`<span class="crumbs__sep" aria-hidden="true">/</span>${t?`<a href="${t}">${N(e)}</a>`:`<span aria-current="page">${N(e)}</span>`}`).join(``)}</nav>`,G=(e,t)=>`<figure class="porthole ${t}" aria-hidden="true">${I(e,`porthole__img`)}</figure>`,K=()=>`<section class="about" aria-labelledby="h-about">
  ${G(`scene2`,`about__window`)}
  <div class="about__body" data-reveal>
    <h2 class="sec-title" id="h-about">${ee}</h2>
    <p class="about__text">${l}</p>
  </div>
</section>`,q=()=>`<section class="request" aria-labelledby="h-req" data-reveal>
  <div class="request__sky" aria-hidden="true">${I(`scene3`,`request__img`)}</div>
  <div class="request__in">
    <h2 class="sec-title" id="h-req">${s}</h2>
    <p class="request__text">${o}</p>
    <div class="request__cta"><a class="btn btn--ink" href="#/contact">לבקשת שעון</a>${L(n,`כתבו לנו בוואטסאפ`,`btn btn--glass`)}</div>
  </div>
</section>`;function J(){return`<section class="hero" aria-labelledby="hero-t">
    <div class="hero__sky" aria-hidden="true">${I(`hero-far`,`hero__img`,!0)}</div>
    ${G(`hero-far`,`hero__win hero__win--a`)}
    ${G(`hero-mid`,`hero__win hero__win--b`)}
    <h1 class="hero__title" id="hero-t">
      <span class="hero__logo" data-live-clock>${a(`compact`,{label:`Moshe`})}</span>
      <span class="hero__slogan">${f}</span>
    </h1>
    <button class="btn btn--ink hero__cta" type="button" data-jump="${d[0].slug}"><span>לקטלוג השעונים</span>${S(`chevron`)}</button>
  </section>

  <div class="catalog">
    <nav class="jump" aria-label="קטגוריות"><div class="jump__in">${d.map(e=>`<button class="pill" type="button" data-jump="${e.slug}" aria-controls="sec-${e.slug}">${e.he}</button>`).join(``)}</div></nav>
    <p class="catalog__lead">${N(t)}</p>
    ${d.map(e=>H(e,r.filter(t=>t.style===e.slug),!0)).join(``)}
  </div>
  ${K()}
  ${q()}`}function Y(e){let n=D(e),r=b(n.style),i=g(n),a=d.map(e=>({s:e,ws:i.filter(t=>t.style===e.slug)})).filter(e=>e.ws.length),o=i.length?`<div class="wrap">${r?`<div class="flat">${V(i)}</div>`:a.map(e=>H(e.s,e.ws)).join(``)}</div>`:`<div class="empty"><p>אין שעונים שמתאימים לסינון הזה.</p><a class="btn btn--ink" href="#/collection" data-replace>לכל הקטלוג</a></div>`;return`<section class="head">
    ${W(r?[[`הקטלוג`,`#/collection`],[r.he]]:[[`הקטלוג`]])}
    <h1 class="h1">${r?r.he:`הקטלוג`}</h1>
    ${r?``:`<p class="lead">${N(t)}</p>`}
  </section>
  <div class="tools">
    <nav class="seg" aria-label="קטגוריות">
      <a class="pill" href="${y({style:``},n)}" data-replace${n.style?``:` aria-current="page"`}>הכל</a>
      ${d.map(e=>`<a class="pill" href="${y({style:e.slug},n)}" data-replace${n.style===e.slug?` aria-current="page"`:``}>${e.he}</a>`).join(``)}
    </nav>
    <div class="tools__row">
      <div class="toggles" role="group" aria-label="סינון">${u.map(e=>{let t=n.brands.includes(e.slug),r=t?n.brands.filter(t=>t!==e.slug):[...n.brands,e.slug];return`<a class="chip toggle" href="${y({brands:r},n)}" data-replace${t?` aria-current="true"`:``}>${t?S(`close`):``}${N(e.name)}</a>`}).join(``)}</div>
      <form class="sort" data-filter-form data-style="${n.style}">
        ${n.brands.map(e=>`<input type="hidden" name="brand" value="${e}">`).join(``)}
        <input type="hidden" name="view" value="${n.view}">
        <label class="sort__label" for="sort">מיון</label>
        <select class="select" id="sort" name="sort" data-autosubmit>${O.map(([e,t])=>`<option value="${e}"${n.sort===e?` selected`:``}>${t}</option>`).join(``)}</select>
      </form>
    </div>
    <p class="tools__count" aria-live="polite">${T(i.length)}</p>
  </div>
  ${o}`}function ie(t){let n=c(t.params.id),i=b(n.style),a=r.filter(e=>e.id!==n.id),o=[...a.filter(e=>e.style===n.style),...a.filter(e=>e.style!==n.style)].slice(0,4);return`<article class="pdp">
    ${W([[`הקטלוג`,`#/collection`],[i.he,`#/collection/${i.slug}`]])}
    <div class="pdp__grid">
      <div class="gallery" data-gallery>
        <div class="gallery__track" data-gallery-track tabindex="0" aria-label="תמונות של ${e(n.name)}">
          <figure class="gallery__slide" data-gallery-slide><button class="gallery__zoom" type="button" data-zoom="${k(n)}" data-alt="${e(n.name)}" aria-label="הגדלת התמונה">${j(n,{large:!0,eager:!0})}</button></figure>
          <figure class="gallery__slide gallery__slide--photo" data-gallery-slide><button class="gallery__zoom" type="button" data-zoom="${v(n)}" data-alt="${e(n.name)}" aria-label="הגדלת התמונה"><img src="${v(n)}" width="900" height="1200" alt="${e(n.name)}, תמונה נוספת" loading="lazy" decoding="async"></button></figure>
        </div>
        <span class="gallery__count" data-gallery-count dir="ltr">1 / 2</span>
        <div class="gallery__thumbs">
          <button type="button" data-gallery-go="0" aria-label="תמונה ראשית">${j(n,{sizes:`4rem`})}</button>
          <button type="button" data-gallery-go="1" aria-label="תמונה נוספת"><img src="${v(n)}" alt="" width="900" height="1200" loading="lazy" decoding="async"></button>
        </div>
      </div>
      <div class="pdp__info">
        <p class="pdp__brand">${N(n.brand)}</p>
        <h1 class="pdp__name">${R(N(n.name))}</h1>
        <div class="pdp__meta"><a class="chip" href="#/collection/${i.slug}">${i.he}</a>${E(n)}</div>
        <p class="pdp__desc">${N(n.description)}</p>
        <div class="pdp__cta">${L(C(n),`אני מעוניין בשעון הזה`,`btn btn--ink btn--lg pdp__wa`)}${m(n,`round round--lg`)}<button class="round round--lg" type="button" data-share aria-label="שיתוף">${S(`share`)}</button></div>
        <p class="note">${re}</p>
        <section class="specs" aria-labelledby="h-specs">
          <h2 class="specs__title" id="h-specs">מפרט</h2>
          <table class="specs__table"><tbody>${n.specs.map(e=>`<tr><th scope="row">${e.label}</th><td>${N(e.value)}</td></tr>`).join(``)}</tbody></table>
        </section>
      </div>
    </div>
  </article>
  <section class="more" aria-labelledby="h-more">
    <h2 class="sec-title" id="h-more">שעונים נוספים</h2>
    <ul class="rail" role="list">${o.map(e=>`<li>${B(e)}</li>`).join(``)}</ul>
  </section>`}var ae=()=>`<section class="head">${W([[`אודות`]])}<h1 class="h1">אודות</h1></section>
  ${K()}
  ${q()}`;function oe(t){let i=c(t.query.get(`w`)??``);return`<section class="head">${W([[`יצירת קשר`]])}<h1 class="h1">יצירת קשר ובקשת שעון</h1>
    <p class="lead">${s} ${o}</p></section>
  <div class="contact">
    <form class="form panel" data-wa-form data-wa-intro="היי, פנייה מהאתר:" novalidate>
      <h2 class="panel__title">בקשת שעון</h2>
      <div class="form__row">
        <div class="field"><label for="c-name">שם מלא</label>
          <input id="c-name" name="name" required autocomplete="name" data-label="שם" data-msg="איך לפנות אליכם?" aria-describedby="e-name">
          <p class="field__err" id="e-name" data-error-for="name"></p></div>
        <div class="field"><label for="c-want">שעון מהקטלוג</label>
          <select class="select" id="c-want" name="want" data-label="שעון מהקטלוג"><option value="">בחרו שעון</option>
            ${r.map(t=>`<option ${i?.id===t.id?`selected`:``}>${e(t.name)}</option>`).join(``)}</select></div>
      </div>
      <div class="field"><label for="c-desc">תיאור השעון שמחפשים: מותג, דגם ותקציב <span class="muted">(לא חובה)</span></label>
        <input id="c-desc" name="desc" data-label="תיאור השעון"></div>
      <div class="field"><label for="c-msg">הודעה <span class="muted">(לא חובה)</span></label>
        <textarea id="c-msg" name="msg" rows="3" data-label="הודעה"></textarea></div>
      <button class="btn btn--ink btn--lg" type="submit">${S(`wa`)}<span>שליחה בוואטסאפ</span></button>
      <p class="form__status" data-form-status role="status"></p>
      <p class="note">הטופס לא שולח דבר לשרת. הוא מכין הודעה בוואטסאפ, ורק אתם מחליטים אם לשלוח.</p>
    </form>
    <aside class="contact__side">
      ${G(`scene3`,`contact__window`)}
      <a class="panel contact__wa" href="${h(n)}" target="_blank" rel="noopener">${S(`wa`)}<strong>כתבו לנו בוואטסאפ</strong></a>
    </aside>
  </div>`}function se(){let e=w();return`<section class="head">${W([[`המועדפים שלי`]])}<h1 class="h1">המועדפים שלי</h1>
    <p class="lead">${e.length?`${T(e.length)} שמורים במכשיר הזה.`:`עוד לא שמרתם שעונים.`}</p></section>
  ${e.length?`<div class="wrap"><div class="flat">${V(e)}</div>
      <div class="fav-bar">
        <button class="btn btn--ink" type="button" data-wa-list>${S(`wa`)}<span>שליחת הרשימה למשה</span></button>
        <button class="btn btn--glass" type="button" data-fav-clear>${S(`trash`)}<span>ניקוי</span></button>
      </div></div>`:`<div class="empty">${S(`heart`,`empty__icon`)}<p>לחצו על הלב בכל שעון כדי לשמור אותו כאן.</p><a class="btn btn--ink" href="#/">לקטלוג השעונים</a></div>`}`}function ce(t){let n=t.query.get(`q`)??``,r=te(n);return`<section class="head">${W([[`חיפוש`]])}<h1 class="h1">חיפוש</h1>
    <form class="searchbar" data-search-form role="search"><label class="sr-only" for="s-q">חיפוש בקטלוג</label>
      ${S(`search`)}<input id="s-q" name="q" type="search" value="${e(n)}" placeholder="חיפוש לפי שם, מותג או תיאור" autocomplete="off" data-live-search></form>
    <div class="quick">${d.map(e=>`<a class="chip" href="#/collection/${e.slug}">${e.he}</a>`).join(``)}${u.map(e=>`<a class="chip" href="${y({brands:[e.slug]})}">${N(e.name)}</a>`).join(``)}</div>
    <p class="muted" data-count>${p(n,r.length)}</p></section>
  <div class="wrap">${U(r)}</div>`}var le=e=>{let t=x(e.params.slug);return`<article class="legal">${W([[t.title]])}<h1 class="h1">${t.title}</h1><div class="legal__body">${t.body}</div></article>`},X=()=>`<section class="lost">
  ${G(`hero-mid`,`lost__window`)}
  <h1 class="h1">העמוד לא נמצא</h1>
  <p class="lead">ייתכן שהקישור השתנה.</p>
  <a class="btn btn--ink" href="#/">לקטלוג השעונים</a>
</section>`;function ue(){let e=z(),t=[[`#/collection`,`collection`,`קטלוג`],[`#/about`,`about`,`אודות`],[`#/contact`,`contact`,`קשר`]];return`<a class="skip-link" href="#main" data-skip>דלג לתוכן</a>
  <header class="hd">
    <div class="hd__bar">
      <div class="hd__start">
        <button class="icon-btn hd__menu" type="button" data-open="menu" aria-haspopup="dialog" aria-label="פתיחת התפריט">${S(`menu`)}</button>
        <nav class="hd__nav" aria-label="ניווט ראשי">${t.map(([e,t,n])=>`<a href="${e}" data-nav="${t}">${n}</a>`).join(``)}</nav>
      </div>
      <a class="hd__logo" href="#/" data-nav="home" aria-label="Moshe, דף הבית"><span data-live-clock>${a(`compact`,{decorative:!0,...e})}</span></a>
      <div class="hd__end">
        <a class="icon-btn hd__search" href="#/search" data-nav="search" aria-label="חיפוש">${S(`search`)}</a>
        <a class="icon-btn" href="#/favorites" data-nav="favorites" aria-label="המועדפים שלי">${S(`heart`)}<span class="badge" data-fav-count hidden></span></a>
      </div>
    </div>
  </header>

  <dialog class="menu" id="menu" aria-labelledby="menu-t">
    <div class="menu__card">
      <div class="menu__top">
        <span class="menu__mark" data-live-clock>${a(`mark`,{decorative:!0,...e})}</span>
        <h2 class="sr-only" id="menu-t">תפריט</h2>
        <button class="icon-btn menu__close" type="button" data-close aria-label="סגירת התפריט">${S(`close`)}</button>
      </div>
      <form class="searchbar" data-search-form role="search"><label class="sr-only" for="m-q">חיפוש בקטלוג</label>
        ${S(`search`)}<input id="m-q" name="q" type="search" placeholder="חיפוש לפי שם, מותג או תיאור" autocomplete="off"></form>
      <nav class="menu__nav" aria-label="ניווט ראשי">
        <a href="#/" data-nav="home">בית</a>
        ${t.map(([e,t,n])=>`<a href="${e}" data-nav="${t}">${n}</a>`).join(``)}
        <a href="#/favorites" data-nav="favorites">המועדפים שלי<span class="badge badge--inline" data-fav-count hidden></span></a>
      </nav>
      <div class="menu__cats">
        <p class="menu__label">קטגוריות</p>
        <div class="menu__chips">${d.map(e=>`<button class="chip" type="button" data-jump="${e.slug}">${e.he}</button>`).join(``)}</div>
      </div>
      ${L(n,`כתבו לנו בוואטסאפ`,`btn btn--ink menu__wa`)}
    </div>
  </dialog>

  <main id="main" tabindex="-1"></main>

  <footer class="ft">
    <div class="ft__in">
      <a class="ft__logo" href="#/" aria-label="Moshe, דף הבית"><span data-live-clock>${a(`mark`,{decorative:!0,...e})}</span></a>
      <p class="ft__slogan">${f}</p>
      <nav class="ft__nav" aria-label="ניווט תחתון">${t.map(([e,,t])=>`<a href="${e}">${t}</a>`).join(``)}<a href="#/favorites">מועדפים</a><a href="#/search">חיפוש</a></nav>
      <nav class="ft__legal" aria-label="מדיניות"><a href="#/page/accessibility">הצהרת נגישות</a><a href="#/page/privacy">מדיניות פרטיות</a></nav>
      <p class="ft__disc">${i}</p>
      <p class="ft__demo">הדגמת עיצוב · <a href="../../index.html">לכל הכיוונים</a></p>
    </div>
  </footer>`}var Z=``;function Q(e){document.querySelectorAll(`.jump [data-jump]`).forEach(t=>{t.dataset.jump===e?t.setAttribute(`aria-current`,`true`):t.removeAttribute(`aria-current`)})}function $(e,t){let n=document.getElementById(`sec-${e}`);n&&(n.focus({preventScroll:!0}),n.scrollIntoView({behavior:t&&!F()?`smooth`:`auto`,block:`start`}),Q(e))}function de(){document.addEventListener(`click`,e=>{let t=e.target.closest(`[data-jump]`);if(!t)return;let n=t.dataset.jump??``;t.closest(`dialog`)?.close(),P.dataset.route===`home`?$(n,!0):(Z=n,_(`#/`))})}function fe(e,t){let n=`IntersectionObserver`in window,r=t.querySelector(`.hero__logo`);if(P.dataset.heroLogo=r?`on`:`off`,r&&n){let e=document.querySelector(`.hd`)?.getBoundingClientRect().height??60;M(new IntersectionObserver(([e])=>{P.dataset.heroLogo=e.isIntersecting?`on`:`off`},{rootMargin:`-${Math.round(e)}px 0px 0px 0px`})).observe(r)}let i=[...t.querySelectorAll(`.catalog .cat`)];if(i.length&&n){let e=M(new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&Q(e.target.dataset.cat??``)}),i[0].getBoundingClientRect().top>innerHeight*.42&&Q(``)},{rootMargin:`-40% 0px -58% 0px`}));i.forEach(t=>e.observe(t))}if(e.name===`home`&&Z){let e=Z;Z=``,requestAnimationFrame(()=>$(e,!1))}}A({layout:ue,views:{home:J,collection:Y,watch:ie,about:ae,contact:oe,favorites:se,search:ce,page:le,notfound:X},list:e=>e.map(e=>`<li>${B(e)}</li>`).join(``),mount:de,afterRender:fe});