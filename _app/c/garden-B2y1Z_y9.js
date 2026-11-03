import"../modulepreload-polyfill-P2Xu9kJm.js";import{B as e,C as t,D as n,E as r,F as i,H as a,I as o,L as s,M as c,N as l,O as u,P as ee,S as d,T as f,V as p,_ as te,a as m,b as h,c as g,f as _,g as v,h as y,i as b,j as x,k as ne,l as S,m as re,o as C,p as w,r as T,s as E,t as D,u as ie,v as O,w as k,x as A,z as j}from"../app-BCOJKLs9.js";var M=(e,t=!1)=>`<img class="scene scene--${e}" src="${y(`garden`,e)}" alt="" width="768" height="1376" ${t?`fetchpriority="high"`:`loading="lazy"`} decoding="async">`,N=e=>`<svg class="i" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${e}</svg>`,P=N(`<path d="M12 20.5V12"/><path d="M12 14.6C11.7 9.9 8.8 6.9 4.3 6.6c.2 4.6 3.1 7.6 7.7 8Z"/><path d="M12 11.8c.3-4.3 3-7.2 7.4-7.5-.2 4.4-3 7.2-7.4 7.5Z"/>`),ae=N(`<path d="M5.5 9.5h13M8.5 14.5h7"/>`),oe=N(`<path d="M6 12.5l3.8 3.8L18 8"/>`),F=e=>e===`sprout`?P:S(e),I=[[`#/`,`home`,`home`,`בית`],[`#/collection`,`collection`,`watch`,`קטלוג`],[`#/search`,`search`,`search`,`חיפוש`],[`#/favorites`,`favorites`,`heart`,`מועדפים`],[`#/about`,`about`,`sprout`,`אודות`],[`#/contact`,`contact`,`wa`,`קשר`]],L=(e,t,n=`btn btn--deep`)=>`<a class="${n}" href="${h(e)}" target="_blank" rel="noopener">${S(`wa`)}<span>${t}</span></a>`,R=(e,t,n=`btn btn--deep`)=>`<a class="${n}" href="${e}"><span>${t}</span>${S(`arrow`)}</a>`,z=(e,t)=>`<a class="more" href="${e}"><span>${t}</span>${S(`arrow`)}</a>`,B=e=>r.filter(t=>t.style===e),V=(e,t)=>`<span class="pebbles" aria-hidden="true">${e.map(e=>`<span class="pebble">${A(e,{sizes:t})}</span>`).join(``)}</span>`,H=(e=[])=>`<nav class="crumbs" aria-label="מיקום באתר"><a href="#/">בית</a>${e.map(([e,t])=>`${S(`chevron`,`crumbs__sep`)}<a href="${t}">${j(e)}</a>`).join(``)}</nav>`,U=(e,t,n=``)=>`<div class="sec__head"><h2 class="sec__t" id="${e}">${P}<span>${t}</span></h2>${n}</div>`,W=[`tall`,`arch`,`round`,`square`],G=[`tall`,`round`,`arch`,`square`,`round`,`tall`];function K(e,t,n,r=W){let i=r[t%r.length];return`<article class="card card--${i}">
    <a class="card__link" href="#/watch/${e.id}">
      <div class="card__img">${A(e)}${e.available?``:T(e)}</div>
      <div class="card__body">
        <p class="card__brand">${j(e.brand)}</p>
        <${n} class="card__name">${j(e.name)}</${n}>
        ${i===`square`?``:`<p class="card__short">${j(e.short)}</p>`}
      </div>
    </a>
    ${m(e,`fav card__fav`)}
  </article>`}var q=(e,t,n=W)=>e.map((e,r)=>`<li>${K(e,r,t,n)}</li>`),J=(e,t=``,n=!1)=>`<ul class="masonry${t?` ${t}`:``}" role="list"${n?` data-results`:``}>${e.join(``)}</ul>`,se=()=>`<li><aside class="invite" aria-labelledby="h-invite">
  <div class="invite__arch arch">${M(`scene3`)}</div>
  <h2 class="invite__t" id="h-invite">${s}</h2>
  <p class="invite__p">${o}</p>
  ${R(`#/contact`,`לבקשת שעון`,`btn btn--ivory btn--sm`)}
</aside></li>`,ce=e=>{let t=B(e.slug);return`<li><a class="cat" href="#/collection/${e.slug}">
    ${V(t.slice(0,3),`6rem`)}
    <span class="cat__text"><span class="cat__name">${e.he}</span><span class="cat__n">${w(t.length)}</span></span>
    <span class="cat__go" aria-hidden="true">${S(`arrow`)}</span>
  </a></li>`},Y=e=>`<section class="story wrap" aria-labelledby="h-story"${e?``:` data-reveal`}>
  <div class="story__media framed"><div class="arch">${M(`scene2`)}</div></div>
  <div class="story__text">
    <h2 class="sec__t" id="h-story">${P}<span>${ee}</span></h2>
    <p class="story__p">${l}</p>
    ${e?R(`#/collection`,`לקטלוג השעונים`):z(`#/about`,`אודות`)}
  </div>
</section>`,X=()=>`<section class="ask wrap" aria-labelledby="h-ask" data-reveal>
  <div class="ask__in">
    <div class="ask__media framed"><div class="arch">${M(`hero-near`)}</div></div>
    <div class="ask__text">
      <h2 class="ask__t" id="h-ask">${s}</h2>
      <p class="ask__p">${o}</p>
      <div class="ask__cta">${R(`#/contact`,`לבקשת שעון`,`btn btn--ivory`)}${L(n,`כתבו לנו בוואטסאפ`,`btn btn--glass`)}</div>
    </div>
  </div>
</section>`,Z=(e,t={})=>`<header class="phead wrap">
    <div class="phead__text">
      ${H(t.trail)}
      <h1 class="phead__t">${e}</h1>
      ${t.lead?`<p class="phead__lead">${t.lead}</p>`:``}
    </div>
    ${t.arch?`<div class="phead__arch framed" aria-hidden="true"><div class="arch">${M(t.arch)}</div></div>`:``}
  </header>`;function Q(){return`<section class="hero" aria-labelledby="h-home">
    <div class="hero__media">
      <div class="hero__frame framed"><div class="arch">${M(`hero-far`,!0)}</div></div>
      <div class="hero__bud" aria-hidden="true"><div class="arch">${M(`scene3`)}</div></div>
      <span class="hero__clock" data-live-clock aria-hidden="true">${a(`mark`,{decorative:!0})}</span>
    </div>
    <div class="hero__text">
      <span class="hero__logo" aria-hidden="true">${a(`compact`,{decorative:!0})}</span>
      <h1 class="hero__title" id="h-home">${p}</h1>
      <p class="hero__lead">${t}</p>
      <div class="hero__cta">${R(`#/collection`,`לקטלוג השעונים`)}${L(n,`כתבו לנו בוואטסאפ`,`btn btn--line hero__wa`)}</div>
    </div>
  </section>

  <section class="sec wrap" aria-labelledby="h-cats" data-reveal>
    ${U(`h-cats`,`קטגוריות`)}
    <ul class="cats" role="list">${f.map(ce).join(``)}</ul>
  </section>

  <section class="sec wrap" aria-labelledby="h-picks">
    ${U(`h-picks`,`שעונים נבחרים`,z(`#/collection`,`לכל הקטלוג`))}
    ${J(q(r.slice(0,6),`h3`,G),`masonry--3`)}
  </section>
  ${Y(!1)}
  ${X()}`}function le(e){let n=E(e),i=x(n.style),a=g(n),o=n.brands.length>0||n.sort!==`featured`,s=(e,t,r,i)=>`<a class="catnav__a" href="${b({style:e},n)}" data-replace${n.style===e?` aria-current="page"`:``}>${V(r,`3rem`)}<span class="catnav__l">${t}</span><span class="catnav__n">${i}</span></a>`,c=q(a,`h2`);return c.length&&c.push(se()),`${Z(i?i.he:`הקטלוג`,{trail:i?[[`הקטלוג`,`#/collection`]]:[],lead:i?``:t,arch:`scene2`})}
  <div class="wrap">
    <nav class="catnav" aria-label="קטגוריות">
      ${s(``,`הכל`,[r[0],r[2]],r.length)}
      ${f.map(e=>s(e.slug,e.he,B(e.slug).slice(0,2),u(e.slug))).join(``)}
    </nav>
    <div class="tools">
      <p class="tools__n">${w(a.length)}</p>
      <form class="tools__form" data-filter-form data-style="${n.style}" aria-label="סינון">
        <fieldset class="tools__brands"><legend class="sr-only">מותג</legend>
          ${d.map(e=>`<label class="toggle"><input type="checkbox" id="f-${e.slug}" name="brand" value="${e.slug}"${n.brands.includes(e.slug)?` checked`:``} data-autosubmit>${oe}<span>${j(e.name)}</span></label>`).join(``)}
          ${o?`<a class="toggle toggle--clear" href="${b({style:n.style})}" data-replace>${S(`close`)}<span>ניקוי</span></a>`:``}
        </fieldset>
        <label class="sort"><span class="sort__l">מיון</span>
          <select id="f-sort" name="sort" data-autosubmit>${D.map(([e,t])=>`<option value="${e}"${n.sort===e?` selected`:``}>${t}</option>`).join(``)}</select>
        </label>
      </form>
    </div>
    ${a.length?J(c):`<div class="empty"><span class="empty__ic">${P}</span>
      <div class="empty__cta"><a class="btn btn--line" href="${b({style:n.style})}" data-replace>${S(`close`)}<span>ניקוי</span></a>${R(`#/collection`,`לכל הקטלוג`)}</div></div>`}
  </div>`}function ue(t){let n=c(t.params.id),i=x(n.style),a=r.filter(e=>e.id!==n.id),o=[...a.filter(e=>e.style===n.style),...a.filter(e=>e.style!==n.style)].slice(0,4),s=(t,r)=>`<button class="gallery__zoom" type="button" data-zoom="${t}" data-alt="${e(n.name)}" aria-label="הגדלת התמונה">${r}<span class="gallery__hint" aria-hidden="true">${S(`zoom`)}</span></button>`;return`<article class="pdp wrap">
    ${H([[`הקטלוג`,`#/collection`],[i.he,`#/collection/${i.slug}`]])}
    <div class="pdp__grid">
      <div class="gallery" data-gallery>
        <div class="gallery__stage">
          <div class="gallery__track" data-gallery-track tabindex="0" aria-label="תמונות של ${e(n.name)}">
            <figure class="gallery__slide" data-gallery-slide>${s(ie(n),A(n,{large:!0,eager:!0}))}</figure>
            <figure class="gallery__slide gallery__slide--photo" data-gallery-slide>${s(_(n),`<img src="${_(n)}" width="900" height="1200" alt="${e(n.name)}, תמונה נוספת" loading="lazy" decoding="async">`)}</figure>
          </div>
          <span class="gallery__count" data-gallery-count dir="ltr">1 / 2</span>
        </div>
        <div class="gallery__thumbs">
          <button type="button" data-gallery-go="0" aria-label="תמונה ראשית">${A(n,{sizes:`6rem`})}</button>
          <button type="button" data-gallery-go="1" aria-label="תמונה נוספת"><img src="${_(n)}" alt="" width="900" height="1200" loading="lazy" decoding="async"></button>
        </div>
      </div>
      <div class="pdp__info">
        <p class="pdp__brand">${j(n.brand)}</p>
        <h1 class="pdp__name">${j(n.name)}</h1>
        <div class="pdp__tags">${T(n)}<a class="tag" href="#/collection/${i.slug}">${i.he}</a></div>
        <p class="pdp__desc">${j(n.description)}</p>
        <div class="pdp__cta">${L(re(n),`אני מעוניין בשעון הזה`,`btn btn--deep btn--lg`)}${m(n,`fav fav--lg`)}</div>
        ${z(`#/contact?w=${n.id}`,`לבקשת שעון`)}
        <p class="pdp__note">${P}<span>${k}</span></p>
        <section class="specs" aria-labelledby="h-spec">
          <h2 class="specs__t" id="h-spec">מפרט</h2>
          <table class="specs__table"><tbody>
            ${n.specs.map(e=>`<tr><th scope="row">${e.label}</th><td>${j(e.value)}</td></tr>`).join(``)}
          </tbody></table>
        </section>
      </div>
    </div>
  </article>
  <section class="sec wrap" aria-labelledby="h-more">
    ${U(`h-more`,`שעונים נוספים`,z(`#/collection`,`לכל הקטלוג`))}
    ${J(q(o,`h3`))}
  </section>`}var de=()=>`${Z(`אודות`)}
  ${Y(!0)}
  ${X()}`;function fe(t){let i=c(t.query.get(`w`)??``);return`${Z(`יצירת קשר ובקשת שעון`,{lead:`${s} ${o}`})}
  <div class="contact wrap">
    <aside class="contact__side">
      <div class="contact__frame framed" aria-hidden="true"><div class="arch">${M(`scene3`)}</div></div>
      <a class="wa-card" href="${h(n)}" target="_blank" rel="noopener"><span class="wa-card__ic">${S(`wa`)}</span><strong>כתבו לנו בוואטסאפ</strong>${S(`arrow`)}</a>
    </aside>
    <form class="form" data-wa-form data-wa-intro="היי, פנייה מהאתר:" novalidate aria-label="יצירת קשר ובקשת שעון">
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
      <button class="btn btn--deep btn--lg" type="submit">${S(`wa`)}<span>שליחה בוואטסאפ</span></button>
      <p class="form__status" data-form-status role="status"></p>
      <p class="form__note">הטופס לא שולח דבר לשרת. הוא מכין הודעה בוואטסאפ, ורק אתם מחליטים אם לשלוח.</p>
    </form>
  </div>`}function pe(){let e=C();return`${Z(`המועדפים שלי`,{lead:e.length?w(e.length):``})}
  <div class="wrap">${e.length?`<div class="favbar">
      <button class="btn btn--deep" type="button" data-wa-list>${S(`wa`)}<span>שליחת הרשימה למשה</span></button>
      <button class="btn btn--line" type="button" data-fav-clear>${S(`trash`)}<span>ניקוי</span></button>
    </div>
    ${J(q(e,`h2`))}`:`<div class="empty"><span class="empty__ic">${S(`heart`)}</span>${R(`#/collection`,`לקטלוג השעונים`)}</div>`}
  </div>`}function me(t){let n=t.query.get(`q`)??``,r=v(n);return`${Z(`חיפוש`)}
  <div class="wrap">
    <form class="searchbox" data-search-form role="search">
      <label class="sr-only" for="s-q">חיפוש</label>${S(`search`)}
      <input id="s-q" name="q" type="search" value="${e(n)}" placeholder="חיפוש לפי שם, מותג או תיאור" autocomplete="off" enterkeyhint="search" data-live-search>
    </form>
    <p class="search__n" data-count>${te(n,r.length)}</p>
    <div class="quick">
      <nav class="quick__row" aria-label="קטגוריות">${f.map(e=>`<a class="chip" href="#/collection/${e.slug}">${V(B(e.slug).slice(0,1),`2.5rem`)}<span>${e.he}</span></a>`).join(``)}</nav>
      <nav class="quick__row" aria-label="מותג">${d.map(e=>`<a class="chip chip--brand" href="${b({brands:[e.slug]})}">${j(e.name)}</a>`).join(``)}</nav>
    </div>
    ${J(q(r,`h2`),``,!0)}
  </div>`}var he=e=>{let t=ne(e.params.slug);return`<article class="legal">${Z(t.title)}<div class="wrap"><div class="legal__body">${t.body}</div></div></article>`},ge=()=>`<section class="lost wrap">
  <div class="lost__frame framed" aria-hidden="true"><div class="arch">${M(`scene2`)}</div></div>
  <h1 class="phead__t">העמוד לא נמצא</h1>
  <p class="phead__lead">ייתכן שהקישור השתנה.</p>
  ${R(`#/collection`,`לכל הקטלוג`)}
</section>`;function _e(){let e=(e,t)=>e===`favorites`?`<span class="${t}" data-fav-count hidden></span>`:``;return`<a class="skip-link" href="#main" data-skip>דלג לתוכן</a>
  <header class="topbar">
    <a class="topbar__logo" href="#/" aria-label="Moshe, דף הבית">${a(`compact`,{decorative:!0})}</a>
  </header>
  <button class="fab" type="button" data-open="menu" aria-label="פתיחת התפריט" aria-haspopup="dialog" aria-controls="menu">${ae}<span class="fab__badge" data-fav-count hidden></span></button>

  <nav class="rail" aria-label="ניווט ראשי">
    <a class="rail__mark" href="#/" aria-label="Moshe, דף הבית" data-live-clock>${a(`mark`,{decorative:!0})}</a>
    <ul class="rail__list" role="list">${I.map(([t,n,r,i])=>`<li><a class="rail__a" href="${t}" data-nav="${n}"><span class="rail__ic">${F(r)}${e(n,`dot`)}</span><span class="rail__l">${i}</span></a></li>`).join(``)}</ul>
    <a class="rail__wa" href="${h(n)}" target="_blank" rel="noopener" aria-label="כתבו לנו בוואטסאפ">${S(`wa`)}</a>
  </nav>

  <main id="main" tabindex="-1"></main>

  <footer class="ft">
    <div class="ft__in wrap">
      <a class="ft__logo" href="#/" aria-label="Moshe, דף הבית">${a(`full`,{decorative:!0})}</a>
      <nav class="ft__nav" aria-label="ניווט תחתון"><ul role="list">${I.map(([e,,,t])=>`<li><a href="${e}">${t}</a></li>`).join(``)}</ul></nav>
      <nav class="ft__nav ft__nav--cats" aria-label="קטגוריות"><ul role="list">${f.map(e=>`<li><a href="#/collection/${e.slug}">${e.he}</a></li>`).join(``)}<li><a href="#/collection">לכל הקטלוג</a></li></ul></nav>
      ${L(n,`כתבו לנו בוואטסאפ`,`btn btn--deep btn--sm ft__wa`)}
      <div class="ft__base">
        <p class="ft__disc">${i}</p>
        <p class="ft__legal"><a href="#/page/accessibility">הצהרת נגישות</a><span aria-hidden="true">·</span><a href="#/page/privacy">מדיניות פרטיות</a></p>
        <p class="ft__demo">הדגמת עיצוב · <a href="../../index.html">לכל הכיוונים</a></p>
      </div>
    </div>
  </footer>

  <dialog class="sheet" id="menu" aria-label="תפריט">
    <div class="sheet__in">
      <div class="sheet__head">
        <a class="sheet__logo" href="#/" aria-label="Moshe, דף הבית">${a(`compact`,{decorative:!0})}</a>
        <button class="round" type="button" data-close aria-label="סגירת התפריט" autofocus>${S(`close`)}</button>
      </div>
      <form class="searchbox searchbox--sheet" data-search-form role="search">
        <label class="sr-only" for="m-q">חיפוש</label>${S(`search`)}
        <input id="m-q" name="q" type="search" placeholder="חיפוש לפי שם, מותג או תיאור" autocomplete="off" enterkeyhint="search">
      </form>
      <nav aria-label="ניווט ראשי"><ul class="sheet__nav" role="list">${I.map(([t,n,r,i])=>`<li><a class="sheet__a" href="${t}" data-nav="${n}"><span class="sheet__ic">${F(r)}${e(n,`dot`)}</span><span>${i}</span></a></li>`).join(``)}</ul></nav>
      <section class="sheet__cats" aria-labelledby="m-cats">
        <h2 class="sheet__h" id="m-cats">קטגוריות</h2>
        <ul role="list">${f.map(e=>`<li><a class="sheet__cat" href="#/collection/${e.slug}">${V(B(e.slug).slice(0,2),`3rem`)}<span class="sheet__cl">${e.he}</span><span class="sheet__cn">${u(e.slug)}</span>${S(`arrow`)}</a></li>`).join(``)}</ul>
      </section>
      ${L(n,`כתבו לנו בוואטסאפ`,`btn btn--deep btn--block`)}
    </div>
  </dialog>`}function ve(e){let t=new Date,n=t.getMinutes(),r=t.getHours()%12*30+n*.5;e.querySelectorAll(`[data-live-clock]`).forEach(e=>{e.querySelectorAll(`.moshe-hour-hand`).forEach(e=>e.setAttribute(`transform`,`rotate(${r} 136 288)`)),e.querySelectorAll(`.moshe-minute-hand`).forEach(e=>e.setAttribute(`transform`,`rotate(${n*6} 136 288)`))})}var $=``;O({layout:_e,views:{home:Q,collection:le,watch:ue,about:de,contact:fe,favorites:pe,search:me,page:he,notfound:ge},list:e=>q(e,`h2`).join(``),mount(e){ve(e);let t=e.querySelector(`#menu`),n=-1;t?.addEventListener(`touchstart`,e=>{n=t.scrollTop<=0?e.touches[0].clientY:-1},{passive:!0}),t?.addEventListener(`touchend`,e=>{n>=0&&e.changedTouches[0].clientY-n>72&&t.close(),n=-1},{passive:!0}),document.addEventListener(`change`,e=>{let t=e.target;t instanceof HTMLElement&&t.matches(`[data-autosubmit]`)&&t.id&&($=t.id)},!0)},afterRender(e,t){if(!$)return;let n=document.getElementById($);$=``,n&&t.contains(n)&&n.focus({preventScroll:!0})}});