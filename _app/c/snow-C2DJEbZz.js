import"../modulepreload-polyfill-P2Xu9kJm.js";import{A as e,C as t,D as n,E as r,F as i,I as a,L as o,M as s,N as c,O as l,P as u,S as d,T as f,_ as p,a as m,b as h,c as g,d as _,f as v,g as y,i as b,j as x,k as S,l as C,m as w,n as T,o as E,p as D,r as O,s as k,t as A,u as j,v as M,w as N,x as P,y as F}from"../app-CtbY0W0U.js";var I=e=>_(`snow`,e),L=(e,t,n=`btn btn--primary`)=>`<a class="${n}" href="${p(e)}" target="_blank" rel="noopener">${g(`wa`)}<span>${t}</span></a>`,R=e=>i(n(e.style)?.he??``),z=e=>`<article class="card">
  <a class="card__link" href="#/watch/${e.id}">
    <div class="card__img">${M(e)}</div>
    <div class="card__body">
      <p class="card__brand">${u(e.brand)}</p>
      <h3 class="card__name">${u(e.name)}</h3>
      <p class="card__meta">${R(e)}</p>
    </div>
  </a>
  ${b(e,`fav card__fav`)}
</article>`,B=e=>`<article class="row">
  <a class="row__link" href="#/watch/${e.id}">
    <div class="row__img">${M(e,{sizes:`8rem`})}</div>
    <div class="row__body">
      <p class="card__brand">${u(e.brand)}</p>
      <h3 class="card__name">${u(e.name)}</h3>
      <ul class="row__specs" role="list">${e.details.slice(0,3).map(([e,t])=>`<li><span>${e}</span> ${u(t)}</li>`).join(``)}</ul>
    </div>
  </a>
  ${b(e,`fav row__fav`)}
</article>`,V=(e,t=`grid`)=>t===`list`?`<ul class="rows" role="list" data-results>${e.map(e=>`<li>${B(e)}</li>`).join(``)}</ul>`:`<ul class="grid" role="list" data-results>${e.map(e=>`<li>${z(e)}</li>`).join(``)}</ul>`,H=e=>`<nav class="crumbs" aria-label="מיקום באתר">
  <a href="#/">בית</a>${e.map(([e,t])=>`${g(`chevron`,`crumbs__sep`)}${t?`<a href="${t}">${u(e)}</a>`:`<span aria-current="page">${u(e)}</span>`}`).join(``)}
</nav>`,U=[`search`,`wa`,`swap`],W=()=>`<ol class="steps" role="list">${t.map(([e,t],n)=>`<li class="steps__item">
  <span class="steps__icon">${g(U[n])}</span><div><h3>${n+1}. ${e}</h3><p>${t}</p></div></li>`).join(``)}</ol>`,G=()=>`<div class="faq">${P.map(([e,t])=>`<details class="acc"><summary>${e}${g(`chevron`)}</summary><p>${t}</p></details>`).join(``)}</div>`,K=()=>`<section class="banner">
  <img src="${I(`scene3`)}" alt="" width="768" height="1376" loading="lazy" decoding="async">
  <div class="banner__in">
    <h2 class="h2">${c}</h2>
    <p>${s}</p>
    <a class="btn btn--light" href="#/contact">לבקשת שעון</a>
  </div>
</section>`;function q(){return`<section class="hero">
    <div class="hero__media"><img src="${I(`scene2`)}" alt="" width="768" height="1376" fetchpriority="high"></div>
    <div class="hero__body">
      <div class="hero__logo" data-live-clock>${o(`mark`,{decorative:!0})}</div>
      <h1 class="h1">האוסף של משה</h1>
      <p class="lead">אוסף שעונים פרטי, מסודר לפי סגנון ומותג. מוצאים, שומרים ומציעים החלפה.</p>
      <form class="searchbar" data-search-form role="search">
        <label class="sr-only" for="hq">חיפוש באוסף</label>
        ${g(`search`)}<input id="hq" name="q" type="search" placeholder="חיפוש לפי דגם, מותג או סגנון" autocomplete="off">
        <button class="btn btn--primary btn--sm" type="submit">חיפוש</button>
      </form>
      <div class="chips" aria-label="מותגים">${h.map(e=>`<a class="chip" href="${O({brands:[e.slug]})}">${u(e.name)}</a>`).join(``)}</div>
    </div>
  </section>

  <section class="sec" aria-labelledby="h-cat">
    <div class="sec__head"><h2 class="h2" id="h-cat">קטגוריות</h2><a class="link" href="#/collection">כל האוסף ${g(`arrow`)}</a></div>
    <ul class="tiles" role="list">${d.map(e=>{let t=N.find(t=>t.style===e.slug);return`<li><a class="tile" href="#/collection/${e.slug}">
        <span class="tile__img">${t?M(t,{sizes:`30vw`}):``}</span>
        <span class="tile__name">${e.he}</span><span class="tile__count">${j(f(e.slug))}</span>
      </a></li>`}).join(``)}
      <li><a class="tile tile--all" href="#/collection"><span class="tile__name">כל האוסף</span><span class="tile__count">${j(N.length)}</span>${g(`arrow`)}</a></li>
    </ul>
  </section>

  <section class="sec" aria-labelledby="h-new">
    <div class="sec__head"><h2 class="h2" id="h-new">באוסף עכשיו</h2><a class="link" href="#/collection">לכל השעונים ${g(`arrow`)}</a></div>
    ${V(N.slice(0,4))}
  </section>

  <section class="sec sec--tint" aria-labelledby="h-how">
    <div class="sec__head"><h2 class="h2" id="h-how">איך עובדת החלפה</h2></div>
    ${W()}
  </section>

  <section class="sec sec--split" aria-labelledby="h-faq">
    <div class="sec__head sec__head--col"><h2 class="h2" id="h-faq">שאלות נפוצות</h2><p class="muted">${x}</p></div>
    ${G()}
  </section>
  ${K()}`}function J(e,t,n,r=0){let i=n?` data-autosubmit`:``,a=N.filter(t=>!e.style||t.style===e.style);return`<form class="filters" data-filter-form data-style="${e.style}" aria-label="סינון">
    <fieldset><legend>קטגוריה</legend>
      <label class="opt"><input type="radio" name="style" value="" ${e.style?``:`checked`}${i}><span>הכל</span><span class="opt__n">${N.length}</span></label>
      ${d.map(t=>`<label class="opt"><input type="radio" name="style" value="${t.slug}" ${e.style===t.slug?`checked`:``}${i}><span>${t.he}</span><span class="opt__n">${f(t.slug)}</span></label>`).join(``)}
    </fieldset>
    <fieldset><legend>מותג</legend>
      ${h.map(t=>`<label class="opt"><input type="checkbox" name="brand" value="${t.slug}" ${e.brands.includes(t.slug)?`checked`:``}${i}><span>${u(t.name)}</span><span class="opt__n">${a.filter(e=>e.brandSlug===t.slug).length}</span></label>`).join(``)}
    </fieldset>
    <input type="hidden" name="sort" value="${e.sort}"><input type="hidden" name="view" value="${e.view}">
    <div class="filters__foot">
      <a class="btn btn--ghost btn--sm" href="${O({view:e.view})}" data-replace id="${t}-clear">ניקוי</a>
      ${n?``:`<button class="btn btn--primary" type="submit">הצגת התוצאות${r?` (${r})`:``}</button>`}
    </div>
  </form>`}function Y(e){let t=E(e),r=n(t.style),a=k(t),o=[...r?[[r.he,O({style:``},t)]]:[],...t.brands.map(e=>[h.find(t=>t.slug===e)?.name??e,O({brands:t.brands.filter(t=>t!==e)},t)])];return`<section class="page-head">
    ${H(r?[[`האוסף`,`#/collection`],[r.he]]:[[`האוסף`]])}
    <h1 class="h1">${r?r.he:`כל האוסף`}</h1>
    <p class="lead">${r?r.blurb:`כל השעונים באוסף, עם סינון לפי קטגוריה ומותג.`}</p>
  </section>
  <div class="catalog">
    <aside class="catalog__side" aria-label="סינון">${J(t,`side`,!0)}</aside>
    <div class="catalog__main">
      <div class="toolbar">
        <button class="btn btn--ghost btn--sm toolbar__filter" type="button" data-open="filter-dlg">${g(`filter`)}<span>סינון</span></button>
        <p class="toolbar__count" aria-live="polite">${j(a.length)}</p>
        <form class="toolbar__sort" data-filter-form data-style="${t.style}">
          ${t.brands.map(e=>`<input type="hidden" name="brand" value="${e}">`).join(``)}
          <input type="hidden" name="view" value="${t.view}">
          <label class="sr-only" for="sort">מיון</label>
          <select id="sort" name="sort" data-autosubmit>${A.map(([e,n])=>`<option value="${e}" ${t.sort===e?`selected`:``}>מיון: ${n}</option>`).join(``)}</select>
        </form>
        <div class="view" role="group" aria-label="תצוגה">
          <a class="view__btn" href="${O({view:`grid`},t)}" data-replace aria-label="תצוגת רשת" ${t.view===`grid`?`aria-current="true"`:``}>${g(`grid`)}</a>
          <a class="view__btn" href="${O({view:`list`},t)}" data-replace aria-label="תצוגת רשימה" ${t.view===`list`?`aria-current="true"`:``}>${g(`list`)}</a>
        </div>
      </div>
      ${o.length?`<div class="active" aria-label="סינון פעיל">${o.map(([e,t])=>`<a class="active__chip" href="${t}" data-replace aria-label="הסרת ${i(e)}">${u(e)} ${g(`close`)}</a>`).join(``)}</div>`:``}
      ${a.length?V(a,t.view):`<div class="empty"><p>אין שעונים שמתאימים לסינון הזה.</p><a class="btn btn--primary" href="#/collection" data-replace>לכל האוסף</a></div>`}
    </div>
  </div>
  <dialog class="drawer drawer--filters" id="filter-dlg" aria-labelledby="fd-t">
    <div class="drawer__in">
      <div class="drawer__head"><h2 id="fd-t">סינון</h2><button class="icon-btn" type="button" data-close aria-label="סגירה">${g(`close`)}</button></div>
      ${J(t,`dlg`,!1,a.length)}
    </div>
  </dialog>`}var X={לוח:`watch`,תצוגה:`search`};function Z(e){let r=l(e.params.id),a=n(r.style),o=N.filter(e=>e.id!==r.id&&(e.style===r.style||e.brandSlug===r.brandSlug)),s=o.length?o:N.filter(e=>e.id!==r.id);return`<article class="pdp">
    ${H([[`האוסף`,`#/collection`],[a.he,`#/collection/${a.slug}`],[r.name]])}
    <div class="pdp__grid">
      <div class="gallery" data-gallery>
        <div class="gallery__track" data-gallery-track tabindex="0" aria-label="תמונות של ${i(r.name)}">
          <figure class="gallery__slide" data-gallery-slide><button class="gallery__zoom" type="button" data-zoom="${C(r)}" data-alt="${i(r.name)}" aria-label="הגדלת התמונה">${M(r,{large:!0,eager:!0})}</button></figure>
          <figure class="gallery__slide" data-gallery-slide><button class="gallery__zoom" type="button" data-zoom="${F(r)}" data-alt="${i(r.name)}, תקריב" aria-label="הגדלת התקריב"><img src="${F(r)}" width="1000" height="1000" alt="${i(r.name)}, תקריב של הלוח" loading="lazy" decoding="async"></button></figure>
        </div>
        <span class="gallery__count" data-gallery-count dir="ltr">1 / 2</span>
        <div class="gallery__thumbs">
          <button type="button" data-gallery-go="0" aria-label="תמונה ראשית">${M(r,{sizes:`5rem`})}</button>
          <button type="button" data-gallery-go="1" aria-label="תקריב"><img src="${F(r)}" alt="" width="1000" height="1000" loading="lazy" decoding="async"></button>
        </div>
      </div>
      <div class="pdp__info">
        <p class="card__brand">${u(r.brand)}</p>
        <h1 class="pdp__name">${u(r.name)}</h1>
        <p class="pdp__style"><a href="#/collection/${a.slug}">${a.he}</a></p>
        <p class="pdp__short">${u(r.short)}</p>
        <ul class="spec-tiles" role="list">${r.details.map(([e,t])=>`<li>${g(X[e]??`watch`)}<span class="spec-tiles__k">${e}</span><span class="spec-tiles__v">${u(t)}</span></li>`).join(``)}</ul>
        <div class="pdp__cta">
          ${L(y(r),`להצעת החלפה בוואטסאפ`,`btn btn--primary btn--lg`)}
          <div class="pdp__sub">
            ${b(r,`btn btn--ghost fav-btn`)}
            <a class="btn btn--ghost" href="#/contact?w=${r.id}">${g(`swap`)}<span>טופס החלפה</span></a>
            <button class="btn btn--ghost" type="button" data-share>${g(`share`)}<span>שיתוף</span></button>
          </div>
        </div>
        <details class="acc" open><summary>איך עובדת החלפה${g(`chevron`)}</summary>
          <ol class="acc__steps">${t.map(([e,t])=>`<li><strong>${e}</strong> · ${t}</li>`).join(``)}</ol></details>
        <details class="acc"><summary>שאלה על השעון${g(`chevron`)}</summary>
          <p>רוצים עוד תמונות או פרט מסוים? ${L(T(r),`כתבו למשה`,`link`)}</p></details>
        <p class="note">${x}</p>
      </div>
    </div>
  </article>
  <section class="sec" aria-labelledby="h-sim">
    <div class="sec__head"><h2 class="h2" id="h-sim">${o.length?`שעונים דומים`:`עוד מהאוסף`}</h2></div>
    ${V(s.slice(0,4))}
  </section>`}function Q(){return`<section class="page-head">${H([[`אודות`]])}<h1 class="h1">אודות האוסף</h1>
    <p class="lead">שעונים שנבחרו אחד־אחד, ומקום מסודר להציג אותם לחובבים.</p></section>
  <section class="about">
    <img class="about__img" src="${I(`cornice`)}" alt="" width="768" height="1376" loading="lazy" decoding="async">
    <div class="about__body">
      <h2 class="h2">${e}</h2>
      <p>${S}</p>
      <ul class="facts" role="list">
        <li><strong>${N.length}</strong><span>שעונים באוסף</span></li>
        <li><strong>${h.length}</strong><span>מותגים</span></li>
        <li><strong>${d.length}</strong><span>קטגוריות</span></li>
      </ul>
      <p class="note">${x}</p>
    </div>
  </section>
  <section class="sec sec--tint" aria-labelledby="h-how"><div class="sec__head"><h2 class="h2" id="h-how">איך עובדת החלפה</h2></div>${W()}</section>
  <section class="sec sec--split" aria-labelledby="h-faq"><div class="sec__head sec__head--col"><h2 class="h2" id="h-faq">שאלות נפוצות</h2></div>${G()}</section>`}function $(e){let t=l(e.query.get(`w`)??``);return`<section class="page-head">${H([[`יצירת קשר`]])}<h1 class="h1">יצירת קשר</h1>
    <p class="lead">הצעת החלפה, שאלה על שעון או דגם שאתם מחפשים. הכל עובר בוואטסאפ.</p></section>
  <div class="contact">
    <form class="form card-box" data-wa-form data-wa-intro="היי משה, הגעתי מהאתר." novalidate>
      <h2 class="h3">הצעת החלפה</h2>
      <div class="form__row">
        <div class="field"><label for="c-name">שם</label>
          <input id="c-name" name="name" required autocomplete="name" data-label="שם" data-msg="איך לפנות אליכם?" aria-describedby="e-name">
          <p class="field__err" id="e-name" data-error-for="name"></p></div>
        <div class="field"><label for="c-want">השעון שמעניין אתכם</label>
          <select id="c-want" name="want" data-label="מעניין אותי"><option value="">עוד לא בחרתי</option>
            ${N.map(e=>`<option ${t?.id===e.id?`selected`:``}>${i(e.name)}</option>`).join(``)}<option>דגם שלא מופיע באוסף</option></select></div>
      </div>
      <div class="field"><label for="c-offer">מה יש לכם להציע</label>
        <textarea id="c-offer" name="offer" rows="3" required data-label="יש לי להציע" data-msg="ספרו בקצרה איזה שעון יש לכם" aria-describedby="e-offer" placeholder="דגם, לוח, מצב, מה כלול"></textarea>
        <p class="field__err" id="e-offer" data-error-for="offer"></p></div>
      <div class="field"><label for="c-msg">הערות <span class="muted">(לא חובה)</span></label>
        <textarea id="c-msg" name="msg" rows="2" data-label="הערות"></textarea></div>
      <button class="btn btn--primary btn--lg" type="submit">${g(`wa`)}<span>הכנת הודעה בוואטסאפ</span></button>
      <p class="form__status" data-form-status role="status"></p>
      <p class="note">הטופס לא שולח דבר לשרת. הוא מכין הודעה בוואטסאפ, ורק אתם מחליטים אם לשלוח.</p>
    </form>
    <aside class="contact__side">
      <a class="card-box contact__wa" href="${p(`היי משה, `)}" target="_blank" rel="noopener">${g(`wa`)}<span><strong>וואטסאפ ישיר</strong><span>הדרך הכי מהירה להגיע למשה</span></span></a>
      <div class="card-box"><h2 class="h3">לפני שכותבים</h2>${W()}</div>
    </aside>
  </div>`}function ee(){let e=m();return`<section class="page-head">${H([[`המועדפים שלי`]])}<h1 class="h1">המועדפים שלי</h1>
    <p class="lead">${e.length?`${j(e.length)} שמורים במכשיר הזה.`:`עוד לא שמרתם שעונים.`}</p></section>
  ${e.length?`<div class="fav-bar">
      <button class="btn btn--primary" type="button" data-wa-list>${g(`wa`)}<span>שליחת הרשימה למשה</span></button>
      <button class="btn btn--ghost" type="button" data-fav-clear>${g(`trash`)}<span>ניקוי</span></button>
    </div><div class="wrap">${V(e,`list`)}</div>`:`<div class="empty"><p>לחצו על הלב בכל שעון כדי לשמור אותו כאן.</p><a class="btn btn--primary" href="#/collection">לאוסף</a></div>`}`}function te(e){let t=e.query.get(`q`)??``,n=v(t);return`<section class="page-head">${H([[`חיפוש`]])}<h1 class="h1">חיפוש</h1>
    <form class="searchbar" data-search-form role="search"><label class="sr-only" for="s-q">חיפוש באוסף</label>
      ${g(`search`)}<input id="s-q" name="q" type="search" value="${i(t)}" placeholder="דגם, מותג או סגנון" autocomplete="off" data-live-search></form>
    <p class="muted" data-count>${D(t,n.length)}</p></section>
  <div class="wrap">${V(n)}</div>`}var ne=e=>{let t=r(e.params.slug);return`<article class="legal">${H([[t.title]])}<h1 class="h1">${t.title}</h1><div class="legal__body">${t.body}</div></article>`},re=()=>`<section class="empty empty--page"><p class="muted">404</p><h1 class="h1">העמוד לא נמצא</h1>
  <p>ייתכן שהקישור השתנה.</p><a class="btn btn--primary" href="#/collection">לכל האוסף</a></section>`;function ie(){let e=[[`#/`,`home`,`בית`],[`#/collection`,`collection`,`האוסף`],[`#/about`,`about`,`אודות`],[`#/contact`,`contact`,`יצירת קשר`]];return`<a class="skip-link" href="#main" data-skip>דלג לתוכן</a>
  <header class="hd">
    <div class="hd__util"><span>${x}</span>${L(`היי משה, `,`וואטסאפ`,`hd__util-wa`)}</div>
    <div class="hd__bar">
      <button class="icon-btn hd__menu" type="button" data-open="nav-dlg" aria-label="פתיחת התפריט">${g(`menu`)}</button>
      <a class="hd__logo" href="#/" aria-label="Moshe, דף הבית">${o(`compact`,{decorative:!0})}</a>
      <nav class="hd__nav" aria-label="ניווט ראשי">${e.map(([e,t,n])=>`<a href="${e}" data-nav="${t}">${n}</a>`).join(``)}</nav>
      <form class="hd__search" data-search-form role="search"><label class="sr-only" for="hd-q">חיפוש</label>${g(`search`)}<input id="hd-q" name="q" type="search" placeholder="חיפוש באוסף" autocomplete="off"></form>
      <div class="hd__icons">
        <a class="icon-btn hd__search-btn" href="#/search" data-nav="search" aria-label="חיפוש">${g(`search`)}</a>
        <a class="icon-btn" href="#/favorites" data-nav="favorites" aria-label="המועדפים שלי">${g(`heart`)}<span class="badge" data-fav-count hidden></span></a>
      </div>
    </div>
    <nav class="cats" aria-label="קטגוריות">
      <a href="#/collection" data-cat="">הכל</a>${d.map(e=>`<a href="#/collection/${e.slug}" data-cat="${e.slug}">${e.he}</a>`).join(``)}
    </nav>
  </header>

  <dialog class="drawer" id="nav-dlg" aria-label="תפריט">
    <div class="drawer__in">
      <div class="drawer__head"><span class="drawer__logo">${o(`compact`,{decorative:!0})}</span><button class="icon-btn" type="button" data-close aria-label="סגירת התפריט">${g(`close`)}</button></div>
      <nav class="drawer__nav" aria-label="ניווט ראשי">${e.map(([e,t,n])=>`<a href="${e}" data-nav="${t}">${n}${g(`arrow`)}</a>`).join(``)}
        <a href="#/favorites" data-nav="favorites">המועדפים <span class="badge badge--inline" data-fav-count hidden></span>${g(`arrow`)}</a></nav>
      <p class="drawer__label">קטגוריות</p>
      <ul class="drawer__cats" role="list">${d.map(e=>`<li><a href="#/collection/${e.slug}">${e.he}<span>${f(e.slug)}</span></a></li>`).join(``)}</ul>
      ${L(`היי משה, `,`כתבו למשה בוואטסאפ`,`btn btn--primary drawer__wa`)}
    </div>
  </dialog>

  <main id="main" tabindex="-1"></main>

  <footer class="ft">
    <div class="ft__grid">
      <div class="ft__brand"><span class="ft__logo">${o(`compact`,{decorative:!0})}</span><p>${a}</p></div>
      <div><h2 class="ft__h">האוסף</h2><ul role="list">${d.map(e=>`<li><a href="#/collection/${e.slug}">${e.he}</a></li>`).join(``)}<li><a href="#/collection">כל השעונים</a></li></ul></div>
      <div><h2 class="ft__h">מידע</h2><ul role="list"><li><a href="#/about">אודות</a></li><li><a href="#/contact">יצירת קשר</a></li><li><a href="#/favorites">מועדפים</a></li></ul></div>
      <div><h2 class="ft__h">מדיניות</h2><ul role="list"><li><a href="#/page/accessibility">הצהרת נגישות</a></li><li><a href="#/page/privacy">מדיניות פרטיות</a></li></ul></div>
    </div>
    <div class="ft__base"><p>${x}</p><p>הדגמת עיצוב · <a href="../../index.html">לכל הכיוונים</a></p></div>
  </footer>`}w({layout:ie,views:{home:q,collection:Y,watch:Z,about:Q,contact:$,favorites:ee,search:te,page:ne,notfound:re},list:(e,t)=>t===`favorites`?e.map(e=>`<li>${B(e)}</li>`).join(``):e.map(e=>`<li>${z(e)}</li>`).join(``),afterRender(e){let t=e.name===`collection`?e.params.style??``:e.name===`watch`?l(e.params.id)?.style??null:null;document.querySelectorAll(`.cats [data-cat]`).forEach(e=>{t!==null&&e.dataset.cat===t?e.setAttribute(`aria-current`,`page`):e.removeAttribute(`aria-current`)})}});