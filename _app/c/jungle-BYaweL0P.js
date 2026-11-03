import"../modulepreload-polyfill-P2Xu9kJm.js";import{B as e,C as t,D as n,E as r,F as i,H as a,I as o,L as s,M as c,N as l,P as u,R as d,S as f,T as p,V as m,_ as h,a as g,b as _,c as v,f as y,g as b,h as x,i as S,j as C,k as w,l as T,m as E,o as D,p as O,r as k,s as A,t as j,u as M,v as N,w as P,x as F,z as I}from"../app-BCOJKLs9.js";var L=(e,t=``,n=!1)=>`<img class="${t}" src="${x(`jungle`,e)}" alt="" width="768" height="1376" ${n?`fetchpriority="high"`:`loading="lazy"`} decoding="async">`,R=(e,t,n=`btn btn--lime`)=>`<a class="${n}" href="${_(e)}" target="_blank" rel="noopener">${T(`wa`)}<span>${t}</span></a>`,z=t=>e(C(t.style)?.he??``),B=e=>`<span>${e}</span>${T(`arrow`)}`,V=(e,t,n=!1)=>`<span class="cap"${n?` aria-hidden="true"`:``}>${F(e,{sizes:t})}</span>`,H=`(min-width: 1040px) 15rem, (min-width: 700px) 28vw, 42vw`,U=(e,t=`h2`)=>`<article class="card">
  <a class="card__link" href="#/watch/${e.id}">
    ${V(e,H,!0)}
    <div class="card__body">
      <p class="card__brand">${I(e.brand)}</p>
      <${t} class="card__name">${I(e.name)}</${t}>
      <p class="card__meta">${z(e)}${e.available?``:` ${k(e)}`}</p>
    </div>
  </a>
  ${g(e,`fav card__fav`)}
</article>`,W=(e,t=`h2`)=>e.map(e=>`<li>${U(e,t)}</li>`).join(``),G=(t,n=``,r=!1)=>`<form class="sfield" data-search-form role="search">
  <label class="sr-only" for="${t}">חיפוש</label>
  ${T(`search`)}
  <input id="${t}" name="q" type="search" value="${e(n)}" placeholder="חיפוש לפי שם, מותג או תיאור" autocomplete="off" enterkeyhint="search"${r?` data-live-search`:``}>
  ${r?``:`<button class="sfield__go" type="submit" aria-label="חיפוש">${T(`arrow`)}</button>`}
</form>`,K=(e=``)=>`<div class="tile t-req ${e}" data-reveal>
  ${L(`scene2`,`tile__bg`)}
  <div class="t-req__body">
    <h2 class="t-title t-title--xl">${s}</h2>
    <p>${o}</p>
    <a class="btn btn--lime" href="#/contact">${B(`לבקשת שעון`)}</a>
  </div>
</div>`,q=(e=``)=>`<a class="tile t-wa ${e}" href="${_(n)}" target="_blank" rel="noopener" data-reveal>
  ${L(`scene3`,`tile__bg`)}
  <span class="t-wa__icon">${T(`wa`)}</span>
  <span class="t-wa__label">כתבו לנו בוואטסאפ</span>
</a>`,J=(e,t=``,n=``)=>`<div class="tile ph">
  ${L(`hero-near`,`ph__img`)}
  <h1 class="ph__title">${e}</h1>
  ${t?`<p class="lead">${t}</p>`:``}${n}
</div>`;function Y(){let e=d.map(e=>c(e.id)).filter(e=>!!e&&e.style!==`openworked`).slice(0,3),t=(e,t,n)=>{let i=C(e),a=r.filter(t=>t.style===e);if(!i)return``;let o=a.length>2?`(min-width: 880px) 11rem, 26vw`:`(min-width: 880px) 15rem, 34vw`;return`<a class="tile t-cat ${t}" href="#/collection/${e}" data-reveal style="--i:${n}">
      <div class="t-cat__head"><h2 class="t-title">${i.he}</h2><span class="round" aria-hidden="true">${T(`arrow`)}</span></div>
      <div class="t-cat__caps t-cat__caps--${a.length}" aria-hidden="true">${a.map(e=>V(e,o)).join(``)}</div>
    </a>`},n=(e,t,n)=>`<article class="tile t-feat ${t}" data-reveal style="--i:${n}">
    <a class="t-feat__link" href="#/watch/${e.id}">
      ${V(e,`(min-width: 880px) 14rem, 40vw`,!0)}
      <div class="t-feat__body"><p class="card__brand">${I(e.brand)}</p><h3 class="t-feat__name">${I(e.name)}</h3></div>
    </a>
    ${g(e,`fav t-feat__fav`)}
  </article>`;return`<div class="bento bento--home">
    <div class="tile t-hero a-hero">
      ${L(`hero-far`,`tile__bg t-hero__bg`,!0)}
      <span class="t-hero__mist" aria-hidden="true"></span>
      <h1 class="t-hero__title">
        <span class="t-hero__logo" data-live-clock>${a(`compact`,{decorative:!0})}</span>
        <span class="sr-only">Moshe · </span><span class="t-hero__slogan">${m}</span>
      </h1>
      <a class="btn btn--lime btn--lg t-hero__cta" href="#/collection">${B(`לקטלוג השעונים`)}</a>
    </div>

    <div class="tile t-search a-search">
      ${G(`home-q`)}
      <div class="chips">${f.map(e=>`<a class="chip" href="${S({brands:[e.slug]})}">${I(e.name)}</a>`).join(``)}</div>
    </div>

    ${t(`sport`,`a-sport`,0)}

    <div class="tile t-label a-label" data-reveal>
      <h2 class="t-label__title">שעונים נבחרים</h2>
      <a class="t-label__link stretch" href="#/collection">${B(`לכל הקטלוג`)}</a>
    </div>
    ${e.map((e,t)=>n(e,`a-f${t+1}`,t+1)).join(``)}

    ${t(`openworked`,`a-open`,0)}
    ${q(`a-wa`)}
    <a class="tile t-favs a-favs" href="#/favorites" data-reveal style="--i:1">
      ${T(`heart`,`t-favs__art`)}
      <span class="t-favs__icon">${T(`heart`)}<span class="badge" data-fav-count hidden></span></span>
      <span class="t-favs__label">המועדפים שלי</span>
    </a>

    ${t(`classic`,`a-classic`,0)}

    <div class="tile t-about a-about" data-reveal>
      <div class="t-about__media" aria-hidden="true">${L(`hero-near`)}</div>
      <div class="t-about__body"><h2 class="t-title t-title--xl">${u}</h2><p>${l}</p></div>
    </div>
    ${K(`a-req`)}
  </div>`}function X(e){let n=A(e),r=C(n.style),i=v(n),a=[[``,`הכל`],...p.map(e=>[e.slug,e.he])];return`<div class="bento bento--top">
    ${J(r?r.he:`הקטלוג`,r?``:t,`<p class="ph__count" aria-live="polite">${O(i.length)}</p>`)}
    <div class="tile controls">
      <nav class="seg" aria-label="קטגוריות">${a.map(([e,t])=>`<a href="${S({style:e},n)}" data-replace${n.style===e?` aria-current="page"`:``}>${t}</a>`).join(``)}</nav>
      <div class="controls__row">
        <div class="toggles" role="group" aria-labelledby="flt-l"><span class="controls__label" id="flt-l">סינון</span>
          ${f.map(e=>{let t=n.brands.includes(e.slug),r=t?n.brands.filter(t=>t!==e.slug):[...n.brands,e.slug];return`<a class="toggle" href="${S({brands:r},n)}" data-replace${t?` aria-current="true"`:``}>${t?T(`close`):``}${I(e.name)}</a>`}).join(``)}
        </div>
        <form class="sort" data-filter-form data-style="${n.style}">
          ${n.brands.map(e=>`<input type="hidden" name="brand" value="${e}">`).join(``)}
          <label class="sr-only" for="sort">מיון</label>
          <select id="sort" name="sort" data-autosubmit>${j.map(([e,t])=>`<option value="${e}"${n.sort===e?` selected`:``}>מיון: ${t}</option>`).join(``)}</select>
        </form>
      </div>
    </div>
  </div>
  ${i.length?`<ul class="grid" role="list">${W(i)}</ul>`:`<div class="tile empty">${T(`watch`,`empty__icon`)}
        <div class="empty__cta">${n.brands.length?`<a class="btn btn--ghost" href="${S({style:n.style})}" data-replace>ניקוי</a>`:``}<a class="btn btn--lime" href="#/collection" data-replace>${B(`לכל הקטלוג`)}</a></div></div>`}
  ${K(`t-req--band`)}`}function Z(t){let n=c(t.params.id),i=C(n.style),a=r.filter(e=>e.id!==n.id),o=[...a.filter(e=>e.style===n.style),...a.filter(e=>e.style!==n.style)].slice(0,4),[s,l]=n.n===7?[1200,783]:[930,1200],u=e(n.name);return`<article class="pdp">
    <div class="gallery stage" data-gallery>
      ${L(`hero-near`,`stage__bg`)}
      <div class="gallery__track" data-gallery-track tabindex="0" aria-label="תמונות של ${u}">
        <figure class="gallery__slide" data-gallery-slide>
          <button class="gallery__zoom" type="button" data-zoom="${M(n)}" data-alt="${u}" aria-label="הגדלת התמונה">
            <span class="cap cap--stage">${F(n,{large:!0,eager:!0,sizes:`(min-width: 880px) 34vw, 92vw`})}</span>
            <span class="stage__hint" aria-hidden="true">${T(`zoom`)}</span>
          </button>
        </figure>
        <figure class="gallery__slide gallery__slide--photo" data-gallery-slide>
          <button class="gallery__zoom" type="button" data-zoom="${y(n)}" data-alt="${u}" aria-label="הגדלת התמונה">
            <img class="stage__photo" src="${y(n)}" width="${s}" height="${l}" alt="${u}, תמונה נוספת" loading="lazy" decoding="async">
            <span class="stage__hint" aria-hidden="true">${T(`zoom`)}</span>
          </button>
        </figure>
      </div>
      <div class="stage__bar">
        <button class="stage__thumb stage__thumb--cap" type="button" data-gallery-go="0" aria-label="תמונה 1">${F(n,{sizes:`3rem`})}</button>
        <button class="stage__thumb" type="button" data-gallery-go="1" aria-label="תמונה 2"><img src="${y(n)}" alt="" width="${s}" height="${l}" loading="lazy" decoding="async"></button>
        <span class="stage__count" data-gallery-count dir="ltr">1 / 2</span>
      </div>
    </div>

    <div class="pdp__info">
      <div class="tile pdp__head">
        <p class="pdp__brand">${I(n.brand)}</p>
        <h1 class="pdp__name" id="pdp-name">${I(n.name)}</h1>
        <div class="pdp__tags"><a class="chip" href="#/collection/${i.slug}">${i.he}</a>${k(n)}</div>
        <div class="pdp__cta">${R(E(n),`אני מעוניין בשעון הזה`,`btn btn--lime btn--lg pdp__wa`)}${g(n,`fav fav--lg`)}</div>
      </div>

      <div class="tile pdp__tabs" data-tabs data-active="0">
        <div class="tabs" role="tablist" aria-labelledby="pdp-name">
          <span class="tabs__thumb" aria-hidden="true"></span>
          <button class="tabs__tab" type="button" role="tab" id="tab-d" aria-controls="tp-d" aria-selected="true">תיאור</button>
          <button class="tabs__tab" type="button" role="tab" id="tab-s" aria-controls="tp-s" aria-selected="false" tabindex="-1">מפרט</button>
        </div>
        <div class="tabs__panel" role="tabpanel" id="tp-d" aria-labelledby="tab-d" tabindex="0">
          <p class="pdp__desc">${I(n.description)}</p>
        </div>
        <div class="tabs__panel" role="tabpanel" id="tp-s" aria-labelledby="tab-s" tabindex="0" hidden>
          <table class="spec"><caption class="sr-only">מפרט</caption><tbody>
            ${n.specs.map(e=>`<tr><th scope="row">${e.label}</th><td>${I(e.value)}</td></tr>`).join(``)}
          </tbody></table>
        </div>
        <p class="pdp__note">${P}</p>
      </div>
    </div>
  </article>

  <section class="more" aria-labelledby="h-more">
    <div class="sec-head"><h2 class="t-title t-title--xl" id="h-more">שעונים נוספים</h2><a class="more__all" href="#/collection">${B(`לכל הקטלוג`)}</a></div>
    <ul class="grid" role="list">${W(o,`h3`)}</ul>
  </section>`}function Q(){return`<div class="bento bento--about">
    <div class="tile ph ph--scene a-head">${L(`hero-far`,`tile__bg`)}<h1 class="ph__title">אודות</h1></div>
    <div class="tile t-about t-about--page a-text" data-reveal>
      <div class="t-about__body"><h2 class="t-title t-title--xl">${u}</h2><p>${l}</p></div>
    </div>
    <div class="tile t-dial a-dial" data-reveal aria-hidden="true">
      <span class="t-dial__mark" data-live-clock>${a(`mark`,{decorative:!0})}</span>
    </div>
    <div class="tile t-scene a-scene" data-reveal aria-hidden="true">${L(`scene3`,`tile__bg`)}</div>
    <a class="tile t-cat t-cat--all a-all" href="#/collection" data-reveal>
      <div class="t-cat__head"><h2 class="t-title">לקטלוג השעונים</h2><span class="round" aria-hidden="true">${T(`arrow`)}</span></div>
      <div class="t-cat__caps t-cat__caps--3" aria-hidden="true">${r.slice(0,3).map(e=>V(e,`(min-width: 880px) 11rem, 26vw`)).join(``)}</div>
    </a>
    ${K(`a-req`)}
  </div>`}function $(t){let n=c(t.query.get(`w`)??``);return`<div class="bento bento--contact">
    <div class="tile ph ph--scene a-head">${L(`scene2`,`tile__bg`)}<h1 class="ph__title">יצירת קשר ובקשת שעון</h1><p class="lead">${s} ${o}</p></div>
    <form class="tile form a-form" data-wa-form data-wa-intro="היי, פנייה מהאתר:" novalidate>
      <h2 class="t-title">בקשת שעון</h2>
      <div class="form__row">
        <div class="field"><label for="c-name">שם מלא</label>
          <input id="c-name" name="name" required autocomplete="name" data-label="שם" data-msg="איך לפנות אליכם?" aria-describedby="e-name">
          <p class="field__err" id="e-name" data-error-for="name"></p></div>
        <div class="field"><label for="c-want">שעון מהקטלוג</label>
          <select id="c-want" name="want" data-label="שעון מהקטלוג"><option value="">בחרו שעון</option>
            ${r.map(t=>`<option ${n?.id===t.id?`selected`:``}>${e(t.name)}</option>`).join(``)}</select></div>
      </div>
      <div class="field"><label for="c-desc">תיאור השעון שמחפשים: מותג, דגם ותקציב <span class="muted">(לא חובה)</span></label>
        <input id="c-desc" name="desc" data-label="תיאור השעון"></div>
      <div class="field"><label for="c-msg">הודעה <span class="muted">(לא חובה)</span></label>
        <textarea id="c-msg" name="msg" rows="3" data-label="הודעה"></textarea></div>
      <button class="btn btn--lime btn--lg" type="submit">${T(`wa`)}<span>שליחה בוואטסאפ</span></button>
      <p class="form__status" data-form-status role="status"></p>
      <p class="note">הטופס לא שולח דבר לשרת. הוא מכין הודעה בוואטסאפ, ורק אתם מחליטים אם לשלוח.</p>
    </form>
    ${q(`a-wa`)}
    ${n?`<a class="tile t-pre a-pre" href="#/watch/${n.id}">${V(n,`(min-width: 880px) 12rem, 30vw`,!0)}<span class="t-pre__body"><span class="card__brand">${I(n.brand)}</span><span class="t-pre__name">${I(n.name)}</span></span></a>`:`<div class="tile t-dial a-pre" aria-hidden="true"><span class="t-dial__mark" data-live-clock>${a(`mark`,{decorative:!0})}</span></div>`}
  </div>`}function ee(){let e=D();return`<div class="bento bento--top">
    ${J(`המועדפים שלי`,``,e.length?`<p class="ph__count">${O(e.length)}</p>`:``)}
    ${e.length?`<div class="tile favbar">
          <button class="btn btn--lime" type="button" data-wa-list>${T(`wa`)}<span>שליחת הרשימה למשה</span></button>
          <button class="btn btn--ghost" type="button" data-fav-clear>${T(`trash`)}<span>ניקוי</span></button>
        </div>`:`<div class="tile empty">${T(`heart`,`empty__icon`)}<div class="empty__cta"><a class="btn btn--lime" href="#/collection">${B(`לכל הקטלוג`)}</a></div></div>`}
  </div>
  ${e.length?`<ul class="grid" role="list" data-results>${W(e)}</ul>`:``}`}function te(e){let t=e.query.get(`q`)??``,n=b(t);return`<div class="bento bento--top">
    ${J(`חיפוש`,``,`${G(`s-q`,t,!0)}<p class="ph__count" data-count aria-live="polite">${h(t,n.length)}</p>`)}
    <div class="tile controls">
      <nav class="seg" aria-label="קטגוריות">${[[``,`הכל`],...p.map(e=>[e.slug,e.he])].map(([e,t])=>`<a href="${e?`#/collection/${e}`:`#/collection`}">${t}</a>`).join(``)}</nav>
      <div class="controls__row"><div class="toggles">${f.map(e=>`<a class="toggle" href="${S({brands:[e.slug]})}">${I(e.name)}</a>`).join(``)}</div></div>
    </div>
  </div>
  <ul class="grid" role="list" data-results>${W(n)}</ul>`}var ne=e=>{let t=w(e.params.slug);return`<article class="legal">${J(t.title)}<div class="tile legal__body">${t.body}</div></article>`},re=()=>`<div class="tile nf">
  <span class="nf__mark" data-live-clock aria-hidden="true">${a(`mark`,{decorative:!0})}</span>
  <h1 class="ph__title">העמוד לא נמצא</h1>
  <p class="lead">ייתכן שהקישור השתנה.</p>
  <a class="btn btn--lime btn--lg" href="#/collection">${B(`לכל הקטלוג`)}</a>
</div>`;function ie(){let e=new Date,t={hourAngle:e.getHours()%12*30+e.getMinutes()*.5,minuteAngle:e.getMinutes()*6},r=[[`#/`,`home`,`בית`],[`#/collection`,`collection`,`קטלוג`],[`#/about`,`about`,`אודות`],[`#/contact`,`contact`,`קשר`]];return`<a class="skip-link" href="#main" data-skip>דלג לתוכן</a>
  <header class="hd">
    <div class="pill">
      <button class="pill__btn pill__menu" type="button" data-open="menu" aria-haspopup="dialog" aria-controls="menu" aria-label="תפריט">${T(`menu`)}</button>
      <a class="pill__logo" href="#/" aria-label="Moshe, דף הבית" data-live-clock>${a(`compact`,{decorative:!0,...t})}</a>
      <nav class="pill__nav" aria-label="ניווט ראשי">${r.map(([e,t,n])=>`<a href="${e}" data-nav="${t}">${n}</a>`).join(``)}</nav>
      <a class="pill__btn pill__search" href="#/search" data-nav="search" aria-label="חיפוש">${T(`search`)}</a>
      <a class="pill__btn pill__fav" href="#/favorites" data-nav="favorites" aria-label="המועדפים שלי">${T(`heart`)}<span class="badge" data-fav-count hidden></span></a>
    </div>
  </header>

  <dialog class="menu" id="menu" aria-label="תפריט">
    <div class="menu__card">
      <div class="menu__top">
        <button class="pill__btn" type="button" data-close aria-label="סגירה" autofocus>${T(`close`)}</button>
        <a class="pill__logo" href="#/" aria-label="Moshe, דף הבית" data-live-clock>${a(`compact`,{decorative:!0,...t})}</a>
        <a class="pill__btn" href="#/favorites" data-nav="favorites" aria-label="המועדפים שלי">${T(`heart`)}<span class="badge" data-fav-count hidden></span></a>
      </div>
      ${G(`menu-q`)}
      <nav class="menu__nav" aria-label="ניווט ראשי">
        ${r.map(([e,t,n])=>`<a href="${e}" data-nav="${t}"><span>${n}</span>${T(`arrow`)}</a>`).join(``)}
        <a href="#/favorites" data-nav="favorites"><span>המועדפים שלי</span>${T(`arrow`)}</a>
      </nav>
      <p class="menu__label">קטגוריות</p>
      <div class="menu__cats">
        <a href="#/collection">הכל</a>${p.map(e=>`<a href="#/collection/${e.slug}">${e.he}</a>`).join(``)}
      </div>
      ${R(n,`כתבו לנו בוואטסאפ`,`btn btn--lime menu__wa`)}
    </div>
  </dialog>

  <main id="main" tabindex="-1"></main>

  <footer class="ft">
    <div class="ft__grid">
      <a class="ft__brand" href="#/" aria-label="Moshe, דף הבית">
        ${L(`scene3`,`ft__img`)}
        <span class="ft__logo" data-live-clock>${a(`full`,{decorative:!0,...t})}</span>
      </a>
      <nav class="ft__nav" aria-label="ניווט תחתון">
        <a href="#/collection">קטלוג</a><a href="#/about">אודות</a><a href="#/contact">קשר</a><a href="#/favorites">מועדפים</a>
        <a href="#/page/accessibility">הצהרת נגישות</a><a href="#/page/privacy">מדיניות פרטיות</a>
      </nav>
    </div>
    <div class="ft__base">
      <p>${i}</p>
      <p>הדגמת עיצוב · <a href="../../index.html">לכל הכיוונים</a></p>
    </div>
  </footer>`}function ae(e){e.querySelectorAll(`[data-tabs]`).forEach(e=>{let t=[...e.querySelectorAll(`[role="tab"]`)],n=(n,r)=>{t.forEach((e,t)=>{let r=n===t;e.setAttribute(`aria-selected`,String(r)),e.tabIndex=r?0:-1,document.getElementById(e.getAttribute(`aria-controls`)??``)?.toggleAttribute(`hidden`,!r)}),e.dataset.active=String(n),r&&t[n]?.focus()};t.forEach((r,i)=>{r.addEventListener(`click`,()=>n(i,!1)),r.addEventListener(`keydown`,r=>{let a=getComputedStyle(e).direction===`rtl`?`ArrowRight`:`ArrowLeft`,o=t.length,s;if(r.key===`ArrowLeft`||r.key===`ArrowRight`)s=(i+(r.key===a?-1:1)+o)%o;else if(r.key===`Home`)s=0;else if(r.key===`End`)s=o-1;else return;r.preventDefault(),n(s,!0)})})})}N({layout:ie,views:{home:Y,collection:X,watch:Z,about:Q,contact:$,favorites:ee,search:te,page:ne,notfound:re},list:e=>W(e),mount(){matchMedia(`(min-width: 880px)`).addEventListener(`change`,e=>{let t=document.getElementById(`menu`);e.matches&&t instanceof HTMLDialogElement&&t.open&&t.close()})},afterRender(e,t){e.name===`watch`&&ae(t)}});