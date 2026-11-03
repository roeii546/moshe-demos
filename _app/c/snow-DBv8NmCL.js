import"../modulepreload-polyfill-P2Xu9kJm.js";import{A as e,B as t,C as n,D as r,E as i,F as a,H as o,I as s,L as c,M as l,N as u,O as d,P as f,S as p,T as m,V as h,_ as g,a as _,b as v,c as y,f as b,g as x,h as S,i as C,j as w,k as T,l as E,m as D,o as O,p as k,r as A,s as j,t as M,u as N,v as P,w as F,x as I,z as L}from"../app-BCOJKLs9.js";var R=e=>S(`snow`,e),z=(e,t,n=`btn btn--primary`)=>`<a class="${n}" href="${v(e)}" target="_blank" rel="noopener">${E(`wa`)}<span>${t}</span></a>`,B=e=>t(w(e.style)?.he??``),V=e=>`<article class="card">
  <a class="card__link" href="#/watch/${e.id}">
    <div class="card__img">${I(e)}</div>
    <div class="card__body">
      <p class="card__brand">${L(e.brand)}</p>
      <h3 class="card__name">${L(e.name)}</h3>
      <p class="card__meta">${B(e)}</p>
    </div>
  </a>
  ${_(e,`fav card__fav`)}
</article>`,H=t=>`<article class="row">
  <a class="row__link" href="#/watch/${t.id}">
    <div class="row__img">${I(t,{sizes:`8rem`})}</div>
    <div class="row__body">
      <p class="card__brand">${L(t.brand)}</p>
      <h3 class="card__name">${L(t.name)}</h3>
      <ul class="row__specs" role="list">${[`לוח`,`צמיד`].map(n=>e(t,n)?`<li><span>${n}</span> ${L(e(t,n)??``)}</li>`:``).join(``)}</ul>
    </div>
  </a>
  ${_(t,`fav row__fav`)}
</article>`,U=(e,t=`grid`)=>t===`list`?`<ul class="rows" role="list" data-results>${e.map(e=>`<li>${H(e)}</li>`).join(``)}</ul>`:`<ul class="grid" role="list" data-results>${e.map(e=>`<li>${V(e)}</li>`).join(``)}</ul>`,W=e=>`<nav class="crumbs" aria-label="מיקום באתר">
  <a href="#/">בית</a>${e.map(([e,t])=>`${E(`chevron`,`crumbs__sep`)}${t?`<a href="${t}">${L(e)}</a>`:`<span aria-current="page">${L(e)}</span>`}`).join(``)}
</nav>`,G=()=>`<section class="banner">
  <img src="${R(`scene3`)}" alt="" width="768" height="1376" loading="lazy" decoding="async">
  <div class="banner__in">
    <h2 class="h2">${c}</h2>
    <p>${s}</p>
    <a class="btn btn--light" href="#/contact">לבקשת שעון</a>
  </div>
</section>`;function K(){return`<section class="hero">
    <div class="hero__media"><img src="${R(`scene2`)}" alt="" width="768" height="1376" fetchpriority="high"></div>
    <div class="hero__body">
      <div class="hero__logo" data-live-clock>${o(`mark`,{decorative:!0})}</div>
      <h1 class="h1">קטלוג השעונים</h1>
      <form class="searchbar" data-search-form role="search">
        <label class="sr-only" for="hq">חיפוש בקטלוג</label>
        ${E(`search`)}<input id="hq" name="q" type="search" placeholder="חיפוש לפי שם, מותג או תיאור" autocomplete="off">
        <button class="btn btn--primary btn--sm" type="submit">חיפוש</button>
      </form>
      <div class="chips" aria-label="מותגים">${p.map(e=>`<a class="chip" href="${C({brands:[e.slug]})}">${L(e.name)}</a>`).join(``)}</div>
    </div>
  </section>

  <section class="sec" aria-labelledby="h-cat">
    <div class="sec__head"><h2 class="h2" id="h-cat">קטגוריות</h2><a class="link" href="#/collection">כל הקטלוג ${E(`arrow`)}</a></div>
    <ul class="tiles" role="list">${m.map(e=>{let t=i.find(t=>t.style===e.slug);return`<li><a class="tile" href="#/collection/${e.slug}">
        <span class="tile__img">${t?I(t,{sizes:`30vw`}):``}</span>
        <span class="tile__name">${e.he}</span><span class="tile__count">${k(d(e.slug))}</span>
      </a></li>`}).join(``)}
      <li><a class="tile tile--all" href="#/collection"><span class="tile__name">כל הקטלוג</span><span class="tile__count">${k(i.length)}</span>${E(`arrow`)}</a></li>
    </ul>
  </section>

  <section class="sec" aria-labelledby="h-new">
    <div class="sec__head"><h2 class="h2" id="h-new">שעונים נבחרים</h2><a class="link" href="#/collection">לכל השעונים ${E(`arrow`)}</a></div>
    ${U(i.slice(0,4))}
  </section>

  <section class="sec sec--tint" aria-labelledby="h-about">
    <div class="about-strip"><h2 class="h2" id="h-about">${f}</h2><p>${u}</p></div>
  </section>
  ${G()}`}function q(e,t,n,r=0){let a=n?` data-autosubmit`:``,o=i.filter(t=>!e.style||t.style===e.style);return`<form class="filters" data-filter-form data-style="${e.style}" aria-label="סינון">
    <fieldset><legend>קטגוריה</legend>
      <label class="opt"><input type="radio" name="style" value="" ${e.style?``:`checked`}${a}><span>הכל</span><span class="opt__n">${i.length}</span></label>
      ${m.map(t=>`<label class="opt"><input type="radio" name="style" value="${t.slug}" ${e.style===t.slug?`checked`:``}${a}><span>${t.he}</span><span class="opt__n">${d(t.slug)}</span></label>`).join(``)}
    </fieldset>
    <fieldset><legend>מותג</legend>
      ${p.map(t=>`<label class="opt"><input type="checkbox" name="brand" value="${t.slug}" ${e.brands.includes(t.slug)?`checked`:``}${a}><span>${L(t.name)}</span><span class="opt__n">${o.filter(e=>e.brandSlug===t.slug).length}</span></label>`).join(``)}
    </fieldset>
    <input type="hidden" name="sort" value="${e.sort}"><input type="hidden" name="view" value="${e.view}">
    <div class="filters__foot">
      <a class="btn btn--ghost btn--sm" href="${C({view:e.view})}" data-replace id="${t}-clear">ניקוי</a>
      ${n?``:`<button class="btn btn--primary" type="submit">הצגת התוצאות${r?` (${r})`:``}</button>`}
    </div>
  </form>`}function J(e){let r=j(e),i=w(r.style),a=y(r),o=[...i?[[i.he,C({style:``},r)]]:[],...r.brands.map(e=>[p.find(t=>t.slug===e)?.name??e,C({brands:r.brands.filter(t=>t!==e)},r)])];return`<section class="page-head">
    ${W(i?[[`הקטלוג`,`#/collection`],[i.he]]:[[`הקטלוג`]])}
    <h1 class="h1">${i?i.he:`הקטלוג`}</h1>
    ${i?``:`<p class="lead">${n}</p>`}
  </section>
  <div class="catalog">
    <aside class="catalog__side" aria-label="סינון">${q(r,`side`,!0)}</aside>
    <div class="catalog__main">
      <div class="toolbar">
        <button class="btn btn--ghost btn--sm toolbar__filter" type="button" data-open="filter-dlg">${E(`filter`)}<span>סינון</span></button>
        <p class="toolbar__count" aria-live="polite">${k(a.length)}</p>
        <form class="toolbar__sort" data-filter-form data-style="${r.style}">
          ${r.brands.map(e=>`<input type="hidden" name="brand" value="${e}">`).join(``)}
          <input type="hidden" name="view" value="${r.view}">
          <label class="sr-only" for="sort">מיון</label>
          <select id="sort" name="sort" data-autosubmit>${M.map(([e,t])=>`<option value="${e}" ${r.sort===e?`selected`:``}>מיון: ${t}</option>`).join(``)}</select>
        </form>
        <div class="view" role="group" aria-label="תצוגה">
          <a class="view__btn" href="${C({view:`grid`},r)}" data-replace aria-label="תצוגת רשת" ${r.view===`grid`?`aria-current="true"`:``}>${E(`grid`)}</a>
          <a class="view__btn" href="${C({view:`list`},r)}" data-replace aria-label="תצוגת רשימה" ${r.view===`list`?`aria-current="true"`:``}>${E(`list`)}</a>
        </div>
      </div>
      ${o.length?`<div class="active" aria-label="סינון פעיל">${o.map(([e,n])=>`<a class="active__chip" href="${n}" data-replace aria-label="הסרת ${t(e)}">${L(e)} ${E(`close`)}</a>`).join(``)}</div>`:``}
      ${a.length?U(a,r.view):`<div class="empty"><p>אין שעונים שמתאימים לסינון הזה.</p><a class="btn btn--primary" href="#/collection" data-replace>לכל הקטלוג</a></div>`}
    </div>
  </div>
  <dialog class="drawer drawer--filters" id="filter-dlg" aria-labelledby="fd-t">
    <div class="drawer__in">
      <div class="drawer__head"><h2 id="fd-t">סינון</h2><button class="icon-btn" type="button" data-close aria-label="סגירה">${E(`close`)}</button></div>
      ${q(r,`dlg`,!1,a.length)}
    </div>
  </dialog>`}function Y(e){let n=l(e.params.id),r=w(n.style),a=i.filter(e=>e.id!==n.id&&(e.style===n.style||e.brandSlug===n.brandSlug)),o=a.length?a:i.filter(e=>e.id!==n.id);return`<article class="pdp">
    ${W([[`הקטלוג`,`#/collection`],[r.he,`#/collection/${r.slug}`],[n.name]])}
    <div class="pdp__grid">
      <div class="gallery" data-gallery>
        <div class="gallery__track" data-gallery-track tabindex="0" aria-label="תמונות של ${t(n.name)}">
          <figure class="gallery__slide" data-gallery-slide><button class="gallery__zoom" type="button" data-zoom="${N(n)}" data-alt="${t(n.name)}" aria-label="הגדלת התמונה">${I(n,{large:!0,eager:!0})}</button></figure>
          <figure class="gallery__slide gallery__slide--photo" data-gallery-slide><button class="gallery__zoom" type="button" data-zoom="${b(n)}" data-alt="${t(n.name)}" aria-label="הגדלת התמונה"><img src="${b(n)}" width="900" height="1200" alt="${t(n.name)}, תמונה נוספת" loading="lazy" decoding="async"></button></figure>
        </div>
        <span class="gallery__count" data-gallery-count dir="ltr">1 / 2</span>
        <div class="gallery__thumbs">
          <button type="button" data-gallery-go="0" aria-label="תמונה ראשית">${I(n,{sizes:`5rem`})}</button>
          <button type="button" data-gallery-go="1" aria-label="תמונה נוספת"><img src="${b(n)}" alt="" width="900" height="1200" loading="lazy" decoding="async"></button>
        </div>
      </div>
      <div class="pdp__info">
        <p class="card__brand">${L(n.brand)}</p>
        <h1 class="pdp__name">${L(n.name)}</h1>
        <p class="pdp__style"><a href="#/collection/${r.slug}">${r.he}</a> ${A(n)}</p>
        <p class="pdp__short">${L(n.description)}</p>
        <p class="note">${F}</p>
        <div class="pdp__cta">
          ${z(D(n),`אני מעוניין בשעון הזה`,`btn btn--primary btn--lg`)}
          <div class="pdp__sub">
            ${_(n,`btn btn--ghost fav-btn`)}
            <a class="btn btn--ghost" href="#/contact?w=${n.id}">${E(`list`)}<span>טופס פנייה</span></a>
            <button class="btn btn--ghost" type="button" data-share>${E(`share`)}<span>שיתוף</span></button>
          </div>
        </div>
        <table class="spec-table"><caption class="sr-only">מפרט השעון</caption><tbody>
          ${n.specs.map(e=>`<tr><th scope="row">${e.label}</th><td>${L(e.value)}</td></tr>`).join(``)}
        </tbody></table>
      </div>
    </div>
  </article>
  <section class="sec" aria-labelledby="h-sim">
    <div class="sec__head"><h2 class="h2" id="h-sim">${a.length?`שעונים דומים`:`שעונים נוספים`}</h2></div>
    ${U(o.slice(0,4))}
  </section>`}function X(){return`<section class="page-head">${W([[`אודות`]])}<h1 class="h1">אודות</h1></section>
  <section class="about">
    <img class="about__img" src="${R(`cornice`)}" alt="" width="768" height="1376" loading="lazy" decoding="async">
    <div class="about__body">
      <h2 class="h2">${f}</h2>
      <p>${u}</p>
    </div>
  </section>
  ${G()}`}function Z(e){let n=l(e.query.get(`w`)??``);return`<section class="page-head">${W([[`יצירת קשר`]])}<h1 class="h1">יצירת קשר ובקשת שעון</h1>
    <p class="lead">${c} ${s}</p></section>
  <div class="contact">
    <form class="form card-box" data-wa-form data-wa-intro="היי, פנייה מהאתר:" novalidate>
      <h2 class="h3">בקשת שעון</h2>
      <div class="form__row">
        <div class="field"><label for="c-name">שם מלא</label>
          <input id="c-name" name="name" required autocomplete="name" data-label="שם" data-msg="איך לפנות אליכם?" aria-describedby="e-name">
          <p class="field__err" id="e-name" data-error-for="name"></p></div>
        <div class="field"><label for="c-want">שעון מהקטלוג</label>
          <select id="c-want" name="want" data-label="שעון מהקטלוג"><option value="">בחרו שעון</option>
            ${i.map(e=>`<option ${n?.id===e.id?`selected`:``}>${t(e.name)}</option>`).join(``)}</select></div>
      </div>
      <div class="field"><label for="c-desc">תיאור השעון שמחפשים: מותג, דגם ותקציב <span class="muted">(לא חובה)</span></label>
        <input id="c-desc" name="desc" data-label="תיאור השעון"></div>
      <div class="field"><label for="c-msg">הודעה <span class="muted">(לא חובה)</span></label>
        <textarea id="c-msg" name="msg" rows="3" data-label="הודעה"></textarea></div>
      <button class="btn btn--primary btn--lg" type="submit">${E(`wa`)}<span>שליחה בוואטסאפ</span></button>
      <p class="form__status" data-form-status role="status"></p>
      <p class="note">הטופס לא שולח דבר לשרת. הוא מכין הודעה בוואטסאפ, ורק אתם מחליטים אם לשלוח.</p>
    </form>
    <aside class="contact__side">
      <a class="card-box contact__wa" href="${v(r)}" target="_blank" rel="noopener">${E(`wa`)}<span><strong>כתבו לנו בוואטסאפ</strong></span></a>
    </aside>
  </div>`}function Q(){let e=O();return`<section class="page-head">${W([[`המועדפים שלי`]])}<h1 class="h1">המועדפים שלי</h1>
    <p class="lead">${e.length?`${k(e.length)} שמורים במכשיר הזה.`:`עוד לא שמרתם שעונים.`}</p></section>
  ${e.length?`<div class="fav-bar">
      <button class="btn btn--primary" type="button" data-wa-list>${E(`wa`)}<span>שליחת הרשימה למשה</span></button>
      <button class="btn btn--ghost" type="button" data-fav-clear>${E(`trash`)}<span>ניקוי</span></button>
    </div><div class="wrap">${U(e,`list`)}</div>`:`<div class="empty"><p>לחצו על הלב בכל שעון כדי לשמור אותו כאן.</p><a class="btn btn--primary" href="#/collection">לקטלוג</a></div>`}`}function $(e){let n=e.query.get(`q`)??``,r=x(n);return`<section class="page-head">${W([[`חיפוש`]])}<h1 class="h1">חיפוש</h1>
    <form class="searchbar" data-search-form role="search"><label class="sr-only" for="s-q">חיפוש בקטלוג</label>
      ${E(`search`)}<input id="s-q" name="q" type="search" value="${t(n)}" placeholder="חיפוש לפי שם, מותג או תיאור" autocomplete="off" data-live-search></form>
    <p class="muted" data-count>${g(n,r.length)}</p></section>
  <div class="wrap">${U(r)}</div>`}var ee=e=>{let t=T(e.params.slug);return`<article class="legal">${W([[t.title]])}<h1 class="h1">${t.title}</h1><div class="legal__body">${t.body}</div></article>`},te=()=>`<section class="empty empty--page"><p class="muted">404</p><h1 class="h1">העמוד לא נמצא</h1>
  <p>ייתכן שהקישור השתנה.</p><a class="btn btn--primary" href="#/collection">לכל הקטלוג</a></section>`;function ne(){let e=[[`#/`,`home`,`בית`],[`#/collection`,`collection`,`קטלוג`],[`#/about`,`about`,`אודות`],[`#/contact`,`contact`,`קשר`]];return`<a class="skip-link" href="#main" data-skip>דלג לתוכן</a>
  <header class="hd">
    <div class="hd__util"><span>${h}</span>${z(r,`וואטסאפ`,`hd__util-wa`)}</div>
    <div class="hd__bar">
      <button class="icon-btn hd__menu" type="button" data-open="nav-dlg" aria-label="פתיחת התפריט">${E(`menu`)}</button>
      <a class="hd__logo" href="#/" aria-label="Moshe, דף הבית">${o(`compact`,{decorative:!0})}</a>
      <nav class="hd__nav" aria-label="ניווט ראשי">${e.map(([e,t,n])=>`<a href="${e}" data-nav="${t}">${n}</a>`).join(``)}</nav>
      <form class="hd__search" data-search-form role="search"><label class="sr-only" for="hd-q">חיפוש</label>${E(`search`)}<input id="hd-q" name="q" type="search" placeholder="חיפוש בקטלוג" autocomplete="off"></form>
      <div class="hd__icons">
        <a class="icon-btn hd__search-btn" href="#/search" data-nav="search" aria-label="חיפוש">${E(`search`)}</a>
        <a class="icon-btn" href="#/favorites" data-nav="favorites" aria-label="המועדפים שלי">${E(`heart`)}<span class="badge" data-fav-count hidden></span></a>
      </div>
    </div>
    <nav class="cats" aria-label="קטגוריות">
      <a href="#/collection" data-cat="">הכל</a>${m.map(e=>`<a href="#/collection/${e.slug}" data-cat="${e.slug}">${e.he}</a>`).join(``)}
    </nav>
  </header>

  <dialog class="drawer" id="nav-dlg" aria-label="תפריט">
    <div class="drawer__in">
      <div class="drawer__head"><span class="drawer__logo">${o(`compact`,{decorative:!0})}</span><button class="icon-btn" type="button" data-close aria-label="סגירת התפריט">${E(`close`)}</button></div>
      <nav class="drawer__nav" aria-label="ניווט ראשי">${e.map(([e,t,n])=>`<a href="${e}" data-nav="${t}">${n}${E(`arrow`)}</a>`).join(``)}
        <a href="#/favorites" data-nav="favorites">המועדפים <span class="badge badge--inline" data-fav-count hidden></span>${E(`arrow`)}</a></nav>
      <p class="drawer__label">קטגוריות</p>
      <ul class="drawer__cats" role="list">${m.map(e=>`<li><a href="#/collection/${e.slug}">${e.he}<span>${d(e.slug)}</span></a></li>`).join(``)}</ul>
      ${z(r,`כתבו למשה בוואטסאפ`,`btn btn--primary drawer__wa`)}
    </div>
  </dialog>

  <main id="main" tabindex="-1"></main>

  <footer class="ft">
    <div class="ft__grid">
      <div class="ft__brand"><span class="ft__logo">${o(`compact`,{decorative:!0})}</span><p>${h}</p></div>
      <div><h2 class="ft__h">קטלוג</h2><ul role="list">${m.map(e=>`<li><a href="#/collection/${e.slug}">${e.he}</a></li>`).join(``)}<li><a href="#/collection">כל השעונים</a></li></ul></div>
      <div><h2 class="ft__h">מידע</h2><ul role="list"><li><a href="#/about">אודות</a></li><li><a href="#/contact">יצירת קשר</a></li><li><a href="#/favorites">מועדפים</a></li></ul></div>
      <div><h2 class="ft__h">מדיניות</h2><ul role="list"><li><a href="#/page/accessibility">הצהרת נגישות</a></li><li><a href="#/page/privacy">מדיניות פרטיות</a></li></ul></div>
    </div>
    <div class="ft__base"><p>${a}</p><p>הדגמת עיצוב · <a href="../../index.html">לכל הכיוונים</a></p></div>
  </footer>`}P({layout:ne,views:{home:K,collection:J,watch:Y,about:X,contact:Z,favorites:Q,search:$,page:ee,notfound:te},list:(e,t)=>t===`favorites`?e.map(e=>`<li>${H(e)}</li>`).join(``):e.map(e=>`<li>${V(e)}</li>`).join(``),afterRender(e){let t=e.name===`collection`?e.params.style??``:e.name===`watch`?l(e.params.id)?.style??null:null;document.querySelectorAll(`.cats [data-cat]`).forEach(e=>{t!==null&&e.dataset.cat===t?e.setAttribute(`aria-current`,`page`):e.removeAttribute(`aria-current`)})}});