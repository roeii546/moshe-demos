import"../modulepreload-polyfill-P2Xu9kJm.js";import{B as e,C as t,D as n,E as r,F as i,H as a,I as o,L as s,M as c,N as l,P as u,S as d,T as f,V as ee,_ as p,a as m,b as h,c as te,f as g,g as _,h as v,i as y,j as b,k as ne,l as x,m as re,n as ie,o as ae,p as S,r as C,s as oe,t as w,u as se,v as ce,w as le,x as T,y as E,z as D}from"../app-BCOJKLs9.js";var O=e=>v(`mountains`,e),ue=ie(`assets/mountains/hero-near-cut.webp`),k=e=>r.filter(t=>t.style===e),de=`<svg class="i chip__check" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>`,A=(e,t,n=`btn btn--copper`)=>`<a class="${n}" href="${h(e)}" target="_blank" rel="noopener">${x(`wa`)}<span>${t}</span></a>`,j=(e,t,n=`lazy`)=>`<img class="${t}" src="${e===`cut`?ue:O(e)}" alt="" width="768" height="1376"${n===`high`?` fetchpriority="high"`:n===`lazy`?` loading="lazy"`:``} decoding="async">`,M=``;function N(e=`topo`){if(!M){let e=e=>e.toFixed(1),t=[];for(let n=0;n<9;n++){let r=30+n*29,i=[];for(let e=0;e<32;e++){let t=e/32*Math.PI*2,a=1+.09*Math.sin(3*t+n*.45)+.05*Math.cos(5*t-n*.7)+.025*Math.sin(8*t+n*1.3);i.push([300+n*5+r*a*Math.cos(t),300-n*4+r*.74*a*Math.sin(t)])}let a=`M${e(i[0][0])} ${e(i[0][1])}`;for(let t=0;t<32;t++){let n=i[(t+32-1)%32],r=i[t],o=i[(t+1)%32],s=i[(t+2)%32];a+=`C${e(r[0]+(o[0]-n[0])/6)} ${e(r[1]+(o[1]-n[1])/6)} ${e(o[0]-(s[0]-r[0])/6)} ${e(o[1]-(s[1]-r[1])/6)} ${e(o[0])} ${e(o[1])}`}t.push(`<path d="${a}Z"/>`)}M=t.join(``)}return`<svg class="${e}" viewBox="0 0 600 600" fill="none" aria-hidden="true" focusable="false">${M}</svg>`}var P=`M0 40 L70 31 L120 36 L180 20 L230 29 L300 14 L350 25 L420 18 L480 30 L540 16 L600 27 L660 12 L720 26 L790 19 L850 33 L910 17 L980 28 L1040 22 L1110 34 L1160 27 L1200 31`,F=`M0 52 L60 44 L95 48 L150 30 L195 41 L245 22 L290 37 L340 29 L395 45 L445 26 L490 36 L545 9 L600 38 L650 30 L705 47 L760 28 L810 39 L860 33 L915 50 L975 25 L1025 38 L1075 31 L1135 46 L1170 39 L1200 47`,I=e=>`<svg class="${e}" viewBox="0 0 1200 56" preserveAspectRatio="none" aria-hidden="true" focusable="false">
  <path class="ridge__far" d="${P}" fill="none" vector-effect="non-scaling-stroke"/>
  <path class="ridge__near" d="${F}" fill="none" vector-effect="non-scaling-stroke"/></svg>`,L=(t,n=`h3`)=>`<article class="card">
  <a class="card__link" href="#/watch/${t.id}">
    <div class="card__tile">${T(t,{sizes:`(min-width: 1100px) 30vw, (min-width: 640px) 46vw, 86vw`})}</div>
    <div class="card__body">
      <p class="card__brand">${D(t.brand)}</p>
      <${n} class="card__name">${D(t.name)}</${n}>
      <p class="card__short">${D(t.short)}</p>
      <p class="card__meta"><span>${e(b(t.style)?.he??``)}</span>${t.available?``:C(t)}${x(`arrow`)}</p>
    </div>
  </a>
  ${m(t,`fav card__fav`)}
</article>`,R=(e,t=`h3`,n=`cards cards--grid`,r=``)=>`<ul class="${n}" role="list"${r}>${e.map(e=>`<li>${L(e,t)}</li>`).join(``)}</ul>`,z=e=>`<a class="mini" href="#/watch/${e.id}">
  <span class="mini__tile">${T(e,{sizes:`5rem`})}</span>
  <span class="mini__text"><span class="mini__brand">${D(e.brand)}</span><span class="mini__name">${D(e.name)}</span></span>
  ${x(`arrow`,`mini__go`)}
</a>`,B=e=>`<nav class="crumbs" aria-label="מיקום באתר">
  <a href="#/">בית</a>${e.map(([e,t])=>`<span class="crumbs__sep" aria-hidden="true"></span>${t?`<a href="${t}">${D(e)}</a>`:`<span aria-current="page">${D(e)}</span>`}`).join(``)}
</nav>`,V=(e,t)=>`<a class="more" href="${e}"><span>${t}</span>${x(`arrow`)}</a>`,H=e=>`<div class="req">
  <h2 class="h2" id="${e}">${s}</h2>
  <p class="req__text">${o}</p>
  <div class="req__cta"><a class="btn btn--copper" href="#/contact">לבקשת שעון</a>${A(n,`כתבו לנו בוואטסאפ`,`btn btn--ghost`)}</div>
</div>`;function fe(){return`<div class="split split--home" data-stage="far">
    <div class="split__media stage" aria-hidden="true">
      ${j(`hero-far`,`stage__far`,`high`)}
      ${j(`cut`,`stage__near`,`eager`)}
      ${j(`scene2`,`stage__scene stage__scene--mist`)}
      ${j(`scene3`,`stage__scene stage__scene--valley`)}
      <span class="stage__shade"></span>
    </div>
    <div class="split__body">
      <section class="hero" data-scene="far" aria-labelledby="h-hero">
        ${N(`topo hero__topo`)}
        <div class="hero__top">
          <span class="hero__mark" data-live-clock>${a(`mark`,{decorative:!0})}</span>
          <h1 class="hero__title" id="h-hero">${ee}</h1>
          <span class="hero__rule" aria-hidden="true"></span>
          <p class="hero__lead">${t}</p>
        </div>
        <div class="hero__cta">
          <a class="btn btn--copper btn--lg" href="#/collection"><span>לקטלוג השעונים</span>${x(`arrow`)}</a>
          <a class="btn btn--ghost btn--lg" href="#/contact">לבקשת שעון</a>
        </div>
      </section>

      <section class="sec sec--feat" data-scene="far" aria-labelledby="h-feat">
        <div class="sec__head"><h2 class="h2" id="h-feat">שעונים נבחרים</h2>${V(`#/collection`,`לכל הקטלוג`)}</div>
        ${R(r.slice(0,4),`h3`,`cards cards--rail`)}
      </section>

      <section class="sec sec--cats" data-scene="far" aria-labelledby="h-cats">
        <div class="sec__head"><h2 class="h2" id="h-cats">קטגוריות</h2></div>
        <div class="tabs" data-tabs>
          <div class="tabs__list" role="tablist" aria-labelledby="h-cats">${f.map((e,t)=>`<button class="tabs__tab" type="button" role="tab" id="tab-${e.slug}" aria-controls="tp-${e.slug}" aria-selected="${t===0}" tabindex="${t===0?0:-1}">${e.he}</button>`).join(``)}</div>
          ${f.map((e,t)=>{let n=k(e.slug);return`<div class="tabs__panel" role="tabpanel" id="tp-${e.slug}" aria-labelledby="tab-${e.slug}"${t?` hidden`:``}>
            <ul class="minis" role="list">${n.map(e=>`<li>${z(e)}</li>`).join(``)}</ul>
            ${V(`#/collection/${e.slug}`,`${e.he} · ${S(n.length)}`)}
          </div>`}).join(``)}
        </div>
      </section>

      <section class="band band--mist" data-scene="mist" aria-labelledby="h-about">
        ${j(`scene2`,`band__bg`)}
        <div class="band__in">
          <h2 class="h2" id="h-about">${u}</h2>
          <p class="band__text">${l}</p>
        </div>
      </section>

      <section class="band band--valley" data-scene="valley" aria-labelledby="h-req">
        ${j(`scene3`,`band__bg`)}
        <div class="band__in">${H(`h-req`)}</div>
      </section>
    </div>
  </div>`}function pe(e){let n=oe(e),r=b(n.style),i=te(n);return`<section class="phead">
    ${N(`topo phead__topo`)}
    ${B(r?[[`הקטלוג`,`#/collection`],[r.he]]:[[`הקטלוג`]])}
    <h1 class="h1">${r?r.he:`הקטלוג`}</h1>
    ${r?``:`<p class="lead">${t}</p>`}
  </section>
  <div class="catalog">
    <nav class="cattabs" aria-label="קטגוריות">
      <a href="${y({style:``},n)}"${n.style?``:` aria-current="page"`}>הכל</a>
      ${f.map(e=>`<a href="${y({style:e.slug},n)}"${n.style===e.slug?` aria-current="page"`:``}>${e.he}</a>`).join(``)}
    </nav>
    <form class="controls" data-filter-form data-style="${n.style}" aria-label="סינון">
      <div class="controls__brands" role="group" aria-labelledby="f-brand-l">
        <span class="controls__label" id="f-brand-l">מותג</span>
        ${d.map(e=>`<label class="chip"><input type="checkbox" id="f-${e.slug}" name="brand" value="${e.slug}"${n.brands.includes(e.slug)?` checked`:``} data-autosubmit>${de}<span>${D(e.name)}</span></label>`).join(``)}
      </div>
      <div class="controls__end">
        <p class="controls__count">${S(i.length)}</p>
        <label class="sort"><span class="controls__label">מיון</span>
          <span class="sort__box"><select id="f-sort" name="sort" data-autosubmit>${w.map(([e,t])=>`<option value="${e}"${n.sort===e?` selected`:``}>${t}</option>`).join(``)}</select>${x(`chevron`)}</span>
        </label>
      </div>
    </form>
    ${i.length?R(i,`h2`):`<div class="empty">
      <span class="empty__mark">${x(`watch`)}</span>
      <div class="empty__cta"><a class="btn btn--ghost" href="${y({style:n.style})}" data-replace>ניקוי</a><a class="btn btn--copper" href="#/collection">לכל הקטלוג</a></div>
    </div>`}
  </div>`}function me(t){let n=c(t.params.id),i=b(n.style),a=r.filter(e=>e.id!==n.id),o=[...a.filter(e=>e.style===n.style),...a.filter(e=>e.style!==n.style)].slice(0,3);return`<div class="split split--pdp">
    <div class="split__media pdp__media">
      <div class="gallery" data-gallery>
        <div class="gallery__track" data-gallery-track tabindex="0" aria-label="תמונות של ${e(n.name)}">
          <figure class="gallery__slide gallery__slide--tile" data-gallery-slide><button class="gallery__zoom" type="button" data-zoom="${se(n)}" data-alt="${e(n.name)}" aria-label="הגדלת התמונה">${T(n,{large:!0,eager:!0})}</button></figure>
          <figure class="gallery__slide gallery__slide--photo" data-gallery-slide><button class="gallery__zoom" type="button" data-zoom="${g(n)}" data-alt="${e(n.name)}" aria-label="הגדלת התמונה"><img src="${g(n)}" width="900" height="1200" alt="${e(n.name)}, תמונה נוספת" loading="lazy" decoding="async"></button></figure>
        </div>
        <div class="gallery__bar">
          <div class="gallery__steps"><button type="button" data-gallery-go="0" aria-label="תמונה 1"></button><button type="button" data-gallery-go="1" aria-label="תמונה 2"></button></div>
          <span class="gallery__count" data-gallery-count dir="ltr">1 / 2</span>
          <div class="gallery__arrows">
            <button class="icon-btn icon-btn--line" type="button" data-gallery-prev aria-label="התמונה הקודמת">${x(`back`)}</button>
            <button class="icon-btn icon-btn--line" type="button" data-gallery-next aria-label="התמונה הבאה">${x(`arrow`)}</button>
          </div>
        </div>
      </div>
    </div>
    <article class="split__body pdp" aria-labelledby="h-w">
      ${B([[`הקטלוג`,`#/collection`],[i.he,`#/collection/${i.slug}`]])}
      <p class="pdp__brand">${D(n.brand)}</p>
      <h1 class="pdp__name" id="h-w">${D(n.name)}</h1>
      <div class="pdp__meta"><a class="tag" href="#/collection/${i.slug}">${i.he}</a>${C(n)}
        <button class="icon-btn icon-btn--line pdp__share" type="button" data-share aria-label="שיתוף">${x(`share`)}</button></div>
      <p class="pdp__desc">${D(n.description)}</p>
      <div class="pdp__cta">
        ${A(re(n),`אני מעוניין בשעון הזה`,`btn btn--copper btn--lg pdp__wa`)}
        ${m(n,`fav fav--sq`)}
      </div>
      <p class="pdp__note">${le}</p>
      <section class="specs" aria-labelledby="h-spec">
        <h2 class="specs__title" id="h-spec">מפרט</h2>
        <table class="specs__table"><tbody>
          ${n.specs.map(e=>`<tr><th scope="row">${e.label}</th><td>${D(e.value)}</td></tr>`).join(``)}
        </tbody></table>
      </section>
      ${V(`#/contact?w=${n.id}`,`לבקשת שעון`)}
    </article>
  </div>
  <section class="sec sec--more" aria-labelledby="h-more">
    <div class="sec__head"><h2 class="h2" id="h-more">שעונים נוספים</h2>${V(`#/collection`,`לכל הקטלוג`)}</div>
    ${R(o,`h3`,`cards cards--rail cards--three`)}
  </section>`}var U=(e,t)=>`<div class="split split--page">
  <div class="split__media pane" aria-hidden="true">${j(e,`pane__img`)}</div>
  <div class="split__body page">${t}</div>
</div>`,W=()=>U(`scene2`,`${B([[`אודות`]])}
  <h1 class="h1">אודות</h1>
  <div class="page__block">
    <h2 class="h2">${u}</h2>
    <p class="page__text">${l}</p>
  </div>
  <div class="page__block page__block--req">${H(`h-req`)}</div>`);function he(t){let i=c(t.query.get(`w`)??``);return U(`scene3`,`${B([[`קשר`]])}
  <h1 class="h1">יצירת קשר ובקשת שעון</h1>
  <p class="lead">${s} ${o}</p>
  <a class="wa-line" href="${h(n)}" target="_blank" rel="noopener"><span class="wa-line__icon">${x(`wa`)}</span><strong>כתבו לנו בוואטסאפ</strong>${x(`arrow`)}</a>
  <form class="form" data-wa-form data-wa-intro="היי, פנייה מהאתר:" novalidate>
    <div class="form__row">
      <div class="field"><label for="c-name">שם מלא</label>
        <input id="c-name" name="name" required autocomplete="name" data-label="שם" data-msg="איך לפנות אליכם?" aria-describedby="e-name">
        <p class="field__err" id="e-name" data-error-for="name"></p></div>
      <div class="field"><label for="c-want">שעון מהקטלוג</label>
        <span class="select"><select id="c-want" name="want" data-label="שעון מהקטלוג"><option value="">בחרו שעון</option>
          ${r.map(t=>`<option${i?.id===t.id?` selected`:``}>${e(t.name)}</option>`).join(``)}</select>${x(`chevron`)}</span></div>
    </div>
    <div class="field"><label for="c-desc">תיאור השעון שמחפשים: מותג, דגם ותקציב <span class="muted">(לא חובה)</span></label>
      <input id="c-desc" name="desc" data-label="תיאור השעון"></div>
    <div class="field"><label for="c-msg">הודעה <span class="muted">(לא חובה)</span></label>
      <textarea id="c-msg" name="msg" rows="4" data-label="הודעה"></textarea></div>
    <button class="btn btn--copper btn--lg form__send" type="submit">${x(`wa`)}<span>שליחה בוואטסאפ</span></button>
    <p class="form__status" data-form-status role="status"></p>
    <p class="note">הטופס לא שולח דבר לשרת. הוא מכין הודעה בוואטסאפ, ורק אתם מחליטים אם לשלוח.</p>
  </form>`)}function ge(){let e=ae(),t=`<section class="phead">
    ${N(`topo phead__topo`)}
    ${B([[`המועדפים שלי`]])}
    <h1 class="h1">המועדפים שלי</h1>
    ${e.length?`<p class="lead">${S(e.length)}</p>`:``}
  </section>`;return e.length?`${t}
  <div class="wrap">
    <div class="fav-actions">
      <button class="btn btn--copper" type="button" data-wa-list>${x(`wa`)}<span>שליחת הרשימה למשה</span></button>
      <button class="btn btn--ghost" type="button" data-fav-clear>${x(`trash`)}<span>ניקוי</span></button>
    </div>
    ${R(e,`h2`)}
  </div>`:`${t}
    <div class="empty empty--fav">
      <span class="empty__mark">${x(`heart`)}</span>
      <a class="btn btn--copper btn--lg" href="#/collection"><span>לקטלוג השעונים</span>${x(`arrow`)}</a>
    </div>
    <section class="sec sec--more" aria-labelledby="h-pick">
      <div class="sec__head"><h2 class="h2" id="h-pick">שעונים נבחרים</h2></div>
      ${R(r.slice(0,3),`h3`,`cards cards--rail cards--three`)}
    </section>`}function _e(t){let n=t.query.get(`q`)??``,r=_(n);return`<section class="phead">
    ${N(`topo phead__topo`)}
    ${B([[`חיפוש`]])}
    <h1 class="h1">חיפוש</h1>
    <form class="searchbox" data-search-form role="search">
      <label class="sr-only" for="s-q">חיפוש</label>${x(`search`)}
      <input id="s-q" name="q" type="search" value="${e(n)}" placeholder="חיפוש לפי שם, מותג או תיאור" autocomplete="off" data-live-search>
    </form>
    <p class="phead__count" data-count>${p(n,r.length)}</p>
    <div class="quick">${d.map(e=>`<a class="pill" href="${y({brands:[e.slug]})}">${D(e.name)}</a>`).join(``)}${f.map(e=>`<a class="pill" href="#/collection/${e.slug}">${e.he}</a>`).join(``)}</div>
  </section>
  <div class="wrap">${R(r,`h2`,`cards cards--grid`,` data-results`)}</div>`}var ve=e=>{let t=ne(e.params.slug);return`<article class="legal">
    ${B([[t.title]])}
    <h1 class="h1">${t.title}</h1>
    <div class="legal__body">${t.body}</div>
  </article>`},ye=()=>`<section class="nf">
  <span class="nf__mark" data-live-clock>${a(`mark`,{decorative:!0})}</span>
  <h1 class="h1">העמוד לא נמצא</h1>
  <p class="lead">ייתכן שהקישור השתנה.</p>
  <a class="btn btn--copper btn--lg" href="#/collection"><span>לכל הקטלוג</span>${x(`arrow`)}</a>
</section>`,be=()=>`<div class="mega" id="mega" data-mega hidden>
  <div class="mega__in">
    <p class="mega__label">קטגוריות</p>
    <div class="mega__cats">${f.map(e=>{let t=k(e.slug);return`<div class="mega__col">
        <a class="mega__cat" href="#/collection/${e.slug}"><span class="mega__cat-name">${e.he}</span><span class="mega__n">${S(t.length)}</span>${x(`arrow`)}</a>
        <ul class="mega__list" role="list">${t.map(e=>`<li><a class="mega__w" href="#/watch/${e.id}"><span class="mega__thumb">${T(e,{sizes:`4.5rem`})}</span><span class="mega__w-text"><span class="mega__brand">${D(e.brand)}</span><span class="mega__name">${D(e.name)}</span></span></a></li>`).join(``)}</ul>
      </div>`}).join(``)}</div>
    <div class="mega__side">
      <a class="btn btn--copper mega__all" href="#/collection" data-nav="collection"><span>לכל הקטלוג</span>${x(`arrow`)}</a>
      <div class="mega__brands"><span class="mega__label">מותג</span>${d.map(e=>`<a href="${y({brands:[e.slug]})}">${D(e.name)}</a>`).join(``)}</div>
      <ul class="mega__more" role="list">
        <li><a href="#/" data-nav="home">בית</a></li><li><a href="#/about" data-nav="about">אודות</a></li><li><a href="#/contact" data-nav="contact">קשר</a></li><li><a href="#/favorites" data-nav="favorites">מועדפים</a></li><li><a href="#/search" data-nav="search">חיפוש</a></li>
      </ul>
    </div>
  </div>
</div>`,xe=()=>`<footer class="ft">
  ${I(`ridge ft__ridge`)}
  <div class="ft__in">
    <a class="ft__logo" href="#/" aria-label="Moshe, דף הבית">${a(`full`,{decorative:!0})}</a>
    <ul class="ft__nav" role="list">
      <li><a href="#/">בית</a></li><li><a href="#/collection">הקטלוג</a></li>${f.map(e=>`<li><a href="#/collection/${e.slug}">${e.he}</a></li>`).join(``)}<li><a href="#/about">אודות</a></li><li><a href="#/contact">קשר</a></li><li><a href="#/favorites">מועדפים</a></li>
    </ul>
    <div class="ft__base">
      <p class="ft__disc">${i}</p>
      <p class="ft__legal"><a href="#/page/accessibility">הצהרת נגישות</a><span aria-hidden="true">·</span><a href="#/page/privacy">מדיניות פרטיות</a></p>
      <p class="ft__demo">הדגמת עיצוב · <a href="../../index.html">לכל הכיוונים</a></p>
    </div>
  </div>
</footer>`;function Se(){return`<a class="skip-link" href="#main" data-skip>דלג לתוכן</a>
  <header class="hd" data-hd>
    <div class="hd__bar">
      <a class="hd__logo" href="#/" aria-label="Moshe, דף הבית">${a(`compact`,{decorative:!0})}</a>
      <nav class="hd__nav" aria-label="ניווט ראשי">
        <ul class="hd__menu" role="list">
          <li class="hd__item hd__item--wide"><a class="hd__link" href="#/" data-nav="home">בית</a></li>
          <li class="hd__item"><button class="hd__link hd__cat" type="button" id="mega-btn" aria-expanded="false" aria-controls="mega" data-mega-toggle><span>קטלוג</span>${x(`chevron`)}</button>${be()}</li>
          <li class="hd__item hd__item--wide"><a class="hd__link" href="#/about" data-nav="about">אודות</a></li>
          <li class="hd__item hd__item--wide"><a class="hd__link" href="#/contact" data-nav="contact">קשר</a></li>
        </ul>
      </nav>
      <div class="hd__tools">
        <a class="icon-btn" href="#/search" data-nav="search" aria-label="חיפוש">${x(`search`)}</a>
        <a class="icon-btn" href="#/favorites" data-nav="favorites" aria-label="המועדפים שלי">${x(`heart`)}<span class="badge" data-fav-count hidden></span></a>
      </div>
    </div>
  </header>
  <div class="scrim" data-mega-scrim aria-hidden="true" hidden></div>
  <main id="main" tabindex="-1"></main>
  ${xe()}`}var G=document.documentElement,K=null,q=null,J=null,Y=0,X=()=>K?.getAttribute(`aria-expanded`)===`true`;function Ce(){!K||!q||!J||(clearTimeout(Y),q.hidden=!1,J.hidden=!1,q.offsetWidth,K.setAttribute(`aria-expanded`,`true`),G.dataset.mega=`open`,q.classList.add(`is-open`),J.classList.add(`is-open`))}function Z(e){if(!K||!q||!J||!X())return;K.setAttribute(`aria-expanded`,`false`),delete G.dataset.mega,q.classList.remove(`is-open`),J.classList.remove(`is-open`);let t=q,n=J;Y=window.setTimeout(()=>{t.hidden=!0,n.hidden=!0},240),e&&K.focus()}function Q(e,t){let n=e.closest(`[role="tablist"]`);n&&(n.querySelectorAll(`[role="tab"]`).forEach(t=>{let n=t===e;t.setAttribute(`aria-selected`,String(n)),t.tabIndex=n?0:-1;let r=document.getElementById(t.getAttribute(`aria-controls`)??``);r&&(r.hidden=!n)}),t&&e.focus())}var we={ArrowLeft:(e,t)=>(e+1)%t,ArrowRight:(e,t)=>(e-1+t)%t,Home:()=>0,End:(e,t)=>t-1},$=``;function Te(e){K=e.querySelector(`[data-mega-toggle]`),q=e.querySelector(`[data-mega]`),J=e.querySelector(`[data-mega-scrim]`);let t=e.querySelector(`[data-hd]`);document.addEventListener(`click`,e=>{let n=e.target;if(n.closest(`[data-mega-toggle]`)){X()?Z(!1):Ce();return}X()&&t&&!t.contains(n)&&Z(!1);let r=n.closest(`[data-tabs] [role="tab"]`);r&&Q(r,!1)}),document.addEventListener(`keydown`,e=>{if(e.key===`Escape`&&X()){Z(!0);return}let t=e.target instanceof Element?e.target.closest(`[data-tabs] [role="tab"]`):null,n=we[e.key];if(!t||!n)return;let r=[...t.parentElement?.querySelectorAll(`[role="tab"]`)??[]];e.preventDefault(),Q(r[n(r.indexOf(t),r.length)],!0)}),t?.addEventListener(`focusout`,e=>{let n=e.relatedTarget;X()&&n instanceof Node&&!t.contains(n)&&Z(!1)}),document.addEventListener(`change`,e=>{let t=e.target;t.closest(`[data-filter-form]`)&&t.id&&($=t.id)},!0)}function Ee(e){let t=e.querySelector(`.split--home`);if(!t||!(`IntersectionObserver`in window))return;let n=E(new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(t.dataset.stage=e.target.dataset.scene??`far`)})},{rootMargin:`-45% 0px -50% 0px`}));e.querySelectorAll(`[data-scene]`).forEach(e=>n.observe(e))}ce({layout:Se,views:{home:fe,collection:pe,watch:me,about:W,contact:he,favorites:ge,search:_e,page:ve,notfound:ye},list:e=>e.map(e=>`<li>${L(e,`h2`)}</li>`).join(``),mount:Te,afterRender(e,t){Z(!1),$&&=(document.getElementById($)?.focus({preventScroll:!0}),``),e.name===`home`&&Ee(t)}});