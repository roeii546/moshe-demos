import"../modulepreload-polyfill-P2Xu9kJm.js";import{B as e,C as t,D as n,E as r,F as i,H as a,I as o,L as s,M as c,N as l,P as u,S as d,T as f,V as p,_ as m,a as h,b as g,c as ee,f as _,g as v,h as y,i as b,j as x,k as S,l as C,m as w,o as te,p as T,r as E,s as D,t as ne,u as re,v as ie,w as ae,x as O,z as k}from"../app-CoBIU5JU.js";var A=e=>y(`fields`,e),j=document.documentElement,M=f.flatMap(e=>r.filter(t=>t.style===e.slug)),oe=new Map(M.map((e,t)=>[e.id,t+1])),N=e=>oe.get(e.id)??0,P=e=>[...e].sort((e,t)=>N(e)-N(t)),F=e=>String(e).padStart(2,`0`);function I(e){let t=e.map(N).sort((e,t)=>e-t),n=[];for(let e=0;e<t.length;e++){let r=e;for(;r+1<t.length&&t[r+1]===t[r]+1;)r++;n.push(r>e?`${F(t[e])}–${F(t[r])}`:F(t[e])),e=r}return n.length?`<bdi class="no" dir="ltr"><span class="no__l">No.</span> ${n.join(`, `)}</bdi>`:``}var L=e=>I([e]),R=`<svg class="orn" viewBox="0 0 120 12" aria-hidden="true" focusable="false"><path d="M2 6h41M77 6h41"/><path d="M60 1.4 64.6 6 60 10.6 55.4 6Z"/><circle cx="49" cy="6" r="1.25"/><circle cx="71" cy="6" r="1.25"/></svg>`,z=`<span class="dot" aria-hidden="true"></span>`,B=[[400,`ת`],[300,`ש`],[200,`ר`],[100,`ק`],[90,`צ`],[80,`פ`],[70,`ע`],[60,`ס`],[50,`נ`],[40,`מ`],[30,`ל`],[20,`כ`],[10,`י`],[9,`ט`],[8,`ח`],[7,`ז`],[6,`ו`],[5,`ה`],[4,`ד`],[3,`ג`],[2,`ב`],[1,`א`]];function V(e){let t=e%1e3,n=``;for(let[e,r]of B)for(;t>=e;){if(t===15||t===16){n+=t===15?`טו`:`טז`,t=0;break}n+=r,t-=e}return n.length>1?`${n.slice(0,-1)}״${n.slice(-1)}`:`${n}׳`}function H(e){let t=[new Intl.DateTimeFormat(`he-IL`,{weekday:`long`,day:`numeric`,month:`long`,year:`numeric`}).format(e)];try{t.push(new Intl.DateTimeFormat(`he-IL-u-ca-hebrew`,{day:`numeric`,month:`long`,year:`numeric`}).formatToParts(e).map(e=>{let t=Number(e.value);return(e.type===`day`||e.type===`year`)&&Number.isFinite(t)?V(t):e.value}).join(``))}catch{}return t}function U(e){let t=e.getMinutes();return{hourAngle:e.getHours()%12*30+t*.5,minuteAngle:t*6}}var W=(e,t,n=`btn btn--ink`)=>`<a class="${n}" href="${g(e)}" target="_blank" rel="noopener">${C(`wa`)}<span>${t}</span></a>`,G=(e,t=``)=>`<div class="runhead"><div class="runhead__in">
  <nav class="runhead__crumbs" aria-label="מיקום באתר"><a href="#/">בית</a>${e.map(([e,t])=>`<span class="runhead__sep" aria-hidden="true">·</span>${t?`<a href="${t}">${k(e)}</a>`:`<span aria-current="page">${k(e)}</span>`}`).join(``)}</nav>
  ${t?`<span class="runhead__end">${t}</span>`:``}
</div></div>`,K=(e,t,n=!1)=>`<figure class="plate ${t}"><span class="plate__in"><img src="${A(e)}" alt="" width="768" height="1376" ${n?`fetchpriority="high"`:`loading="lazy"`} decoding="async"></span></figure>`,q=(e,t,n=``)=>`<header class="sec-head">${R}<h2 class="sec-head__title" id="${e}">${t}</h2>${n?`<p class="sec-head__cap">${n}</p>`:``}</header>`,se=e=>`<article class="pcard">
  <a class="pcard__link" href="#/watch/${e.id}">
    <span class="pcard__no">${L(e)}</span>
    <span class="pcard__tile">${O(e,{sizes:`(min-width: 960px) 15rem, 44vw`})}</span>
    <span class="pcard__brand">${k(e.brand)}</span>
    <h3 class="pcard__name">${k(e.name)}</h3>
  </a>
  ${h(e,`fav pcard__fav`)}
</article>`,J=e=>`<ul class="pcards" role="list">${e.map(e=>`<li>${se(e)}</li>`).join(``)}</ul>`,ce=t=>`<article class="entry">
  <a class="entry__link" href="#/watch/${t.id}">
    <span class="entry__tile">${O(t,{sizes:`(min-width: 960px) 10rem, 7.5rem`})}</span>
    <div class="entry__body">
      <span class="entry__no">${L(t)}</span>
      <span class="entry__brand">${k(t.brand)}</span>
      <h3 class="entry__name">${k(t.name)}</h3>
      <p class="entry__short">${k(t.short)}</p>
      <p class="entry__meta"><span>${e(x(t.style)?.he??``)}</span>${t.available?``:E(t)}</p>
    </div>
  </a>
  ${h(t,`fav entry__fav`)}
</article>`,Y=e=>e.map(e=>`<li>${ce(e)}</li>`).join(``),X=(e,t=!1)=>`<ul class="entries" role="list"${t?` data-results`:``}>${Y(e)}</ul>`,Z=(e,t,n,r=``)=>n.length?`<section class="chapter" aria-labelledby="${e}">
  <header class="chapter__head">${R}
    <h2 class="chapter__title" id="${e}">${r?`<a href="${r}">${k(t)}</a>`:k(t)}</h2>
    <p class="chapter__cap"><span>${T(n.length)}</span>${z}${I(n)}</p>
  </header>
  ${X(n)}
</section>`:``,Q=e=>`<section class="toc" aria-labelledby="${e}">
  <header class="toc__head">${R}<h2 class="toc__title" id="${e}">קטגוריות</h2></header>
  <ol class="toc__list" role="list">
    ${f.map(e=>{let t=M.filter(t=>t.style===e.slug);return`<li><a class="toc__row" href="#/collection/${e.slug}">
        <span class="toc__name">${e.he}</span><span class="toc__dots" aria-hidden="true"></span><span class="toc__nos">${I(t)}</span>
        <span class="toc__foot"><span class="toc__thumbs" aria-hidden="true">${t.map(e=>`<span class="toc__thumb">${O(e,{sizes:`3.25rem`})}</span>`).join(``)}</span><span class="toc__count">${T(t.length)}</span></span>
      </a></li>`}).join(``)}
    <li><a class="toc__row toc__row--all" href="#/collection"><span class="toc__name">לכל הקטלוג</span><span class="toc__dots" aria-hidden="true"></span><span class="toc__nos">${I(M)}</span></a></li>
  </ol>
</section>`,$=()=>`<section class="reply" aria-labelledby="h-reply"><div class="reply__card" data-reveal>
  <figure class="reply__vignette"><img src="${A(`scene3`)}" alt="" width="768" height="1376" loading="lazy" decoding="async"></figure>
  <h2 class="reply__title" id="h-reply">${s}</h2>
  <p class="reply__text">${o}</p>
  <div class="reply__cta"><a class="btn btn--ink" href="#/contact">לבקשת שעון</a>${W(n,`כתבו לנו בוואטסאפ`,`btn btn--line`)}</div>
</div></section>`;function le(){let e=r.slice(0,4);return`<section class="title" aria-labelledby="h-title">
    <div class="title__text">
      <h1 class="title__h" id="h-title">הקטלוג</h1>
      <p class="title__lead">${t}</p>
      <div class="title__cta"><a class="btn btn--ink" href="#/collection">לקטלוג השעונים</a><a class="btn btn--line" href="#/contact">לבקשת שעון</a></div>
    </div>
    ${K(`hero-far`,`title__plate`,!0)}
    ${Q(`h-toc`)}
  </section>

  <section class="sel" aria-labelledby="h-sel">
    ${q(`h-sel`,`שעונים נבחרים`,I(e))}
    ${J(e)}
    <p class="sel__more"><a class="link" href="#/collection">לכל הקטלוג ${C(`arrow`)}</a></p>
  </section>

  <section class="essay" aria-labelledby="h-about">
    ${K(`scene2`,`essay__plate`)}
    <div class="essay__text" data-reveal>${R}<h2 class="essay__title" id="h-about">${u}</h2><p class="essay__p">${l}</p></div>
  </section>

  ${$()}`}function ue(e){let t=r.filter(t=>!e.style||t.style===e.style),n=r.filter(t=>!e.brands.length||e.brands.includes(t.brandSlug)),i=(e,t,n,r,i=`true`)=>r===0&&!n?`<span class="idx__off">${t}<sup class="idx__n">0</sup></span>`:`<a href="${e}" data-replace${n?` aria-current="${i}"`:``}>${t}${r===null?``:`<sup class="idx__n">${r}</sup>`}</a>`,a=[i(b({style:``},e),`הכל`,!e.style,n.length,`page`),...f.map(t=>i(b({style:t.slug},e),t.he,e.style===t.slug,n.filter(e=>e.style===t.slug).length,`page`))],o=d.map(n=>{let r=e.brands.includes(n.slug),a=r?e.brands.filter(e=>e!==n.slug):[...e.brands,n.slug];return i(b({brands:a},e),k(n.name),r,t.filter(e=>e.brandSlug===n.slug).length)}),s=ne.map(([t,n])=>i(b({sort:t},e),n,e.sort===t,null)),c=(e,t,n,r=``)=>`<div class="idx__row" role="group" aria-labelledby="${e}"><span class="idx__label" id="${e}">${t}</span><span class="idx__opts">${n.join(``)}</span>${r}</div>`,l=e.brands.length>0||e.sort!==`featured`;return`<div class="idx"><div class="idx__in">
    ${c(`idx-c`,`קטגוריות`,a)}
    ${c(`idx-b`,`מותג`,o)}
    ${c(`idx-s`,`מיון`,s,l?`<a class="idx__clear" href="${b({style:e.style})}" data-replace>${C(`close`)}<span>ניקוי</span></a>`:``)}
  </div></div>`}function de(e,t){return t.sort===`brand`?d.map(t=>Z(`ch-${t.slug}`,t.name,e.filter(e=>e.brandSlug===t.slug))).join(``):t.sort===`name`||t.style?X(e):f.map(n=>Z(`ch-${n.slug}`,n.he,e.filter(e=>e.style===n.slug),b({style:n.slug},t))).join(``)}function fe(e){let n=D(e),r=x(n.style),i=ee(n);return`${G(r?[[`הקטלוג`,`#/collection`],[r.he]]:[[`הקטלוג`]],I(i))}
  <div class="head">
    <h1 class="head__title">${r?r.he:`הקטלוג`}</h1>
    ${r?``:`<p class="head__lead">${t}</p>`}
    <p class="head__cap">${T(i.length)}</p>
  </div>
  ${ue(n)}
  <div class="pages">${i.length?de(i,n):`<div class="empty"><span class="empty__slot" aria-hidden="true">${C(`watch`)}</span><a class="btn btn--ink" href="#/collection" data-replace>לכל הקטלוג</a></div>`}</div>`}function pe(t){let n=c(t.params.id),r=x(n.style),i=e(n.name),a=M.indexOf(n),o=M[(a-1+M.length)%M.length],s=M[(a+1)%M.length],l=[...M.filter(e=>e.id!==n.id&&e.style===n.style),...M.filter(e=>e.style!==n.style)].slice(0,4);return`${G([[`הקטלוג`,`#/collection`],[r.he,`#/collection/${r.slug}`]],L(n))}
  <article class="spread">
    <header class="spread__head">
      <p class="pdp__brand">${k(n.brand)}</p>
      <h1 class="pdp__name">${k(n.name)}</h1>
      <p class="pdp__meta"><a href="#/collection/${r.slug}">${r.he}</a>${E(n)}</p>
    </header>
    <div class="spread__plate">
      <div class="spread__hold">
        <div class="gallery" data-gallery>
          <div class="gallery__frame">
            <div class="gallery__track" data-gallery-track tabindex="0" aria-label="תמונות של ${i}">
              <figure class="gallery__slide" data-gallery-slide><button class="gallery__zoom" type="button" data-zoom="${re(n)}" data-alt="${i}" aria-label="הגדלת התמונה">${O(n,{large:!0,eager:!0})}</button></figure>
              <figure class="gallery__slide gallery__slide--photo" data-gallery-slide><button class="gallery__zoom" type="button" data-zoom="${_(n)}" data-alt="${i}" aria-label="הגדלת התמונה"><img src="${_(n)}" width="900" height="1200" alt="${i}, תמונה נוספת" loading="lazy" decoding="async"></button></figure>
            </div>
          </div>
          <div class="gallery__bar">
            <div class="gallery__thumbs">
              <button type="button" data-gallery-go="0" aria-label="תמונה ראשית">${O(n,{sizes:`3.5rem`})}</button>
              <button type="button" data-gallery-go="1" aria-label="תמונה נוספת"><img src="${_(n)}" alt="" width="900" height="1200" loading="lazy" decoding="async"></button>
            </div>
            <span class="gallery__count" data-gallery-count dir="ltr">1 / 2</span>
          </div>
        </div>
        <p class="plate-cap" aria-hidden="true">${L(n)}${z}<span>${k(n.name)}</span></p>
      </div>
    </div>
    <div class="spread__body">
      ${R}
      <p class="pdp__desc">${k(n.description)}</p>
      <p class="pdp__note">${ae}</p>
      <div class="pdp__cta">${W(w(n),`אני מעוניין בשעון הזה`,`btn btn--ink btn--lg`)}${h(n,`fav fav--box`)}</div>
      <table class="spec">
        <caption>מפרט</caption>
        <tbody>${n.specs.map(e=>`<tr><th scope="row"><span>${e.label}</span></th><td>${k(e.value)}</td></tr>`).join(``)}</tbody>
      </table>
    </div>
  </article>
  <div class="pager">
    <a class="pager__a" href="#/watch/${o.id}">${C(`back`)}<span class="pager__t">${L(o)}<span>${k(o.name)}</span></span></a>
    <a class="pager__a pager__a--next" href="#/watch/${s.id}"><span class="pager__t">${L(s)}<span>${k(s.name)}</span></span>${C(`arrow`)}</a>
  </div>
  <section class="more" aria-labelledby="h-more">
    ${q(`h-more`,`שעונים נוספים`)}
    ${J(l)}
  </section>`}function me(){return`${G([[`אודות`]])}
  <div class="head"><h1 class="head__title">אודות</h1></div>
  <section class="essay essay--page" aria-labelledby="h-a">
    ${K(`hero-near`,`essay__plate`)}
    <div class="essay__text">${R}<h2 class="essay__title" id="h-a">${u}</h2><p class="essay__p">${l}</p></div>
  </section>
  ${$()}`}function he(t){let r=c(t.query.get(`w`)??``);return`${G([[`יצירת קשר`]])}
  <div class="head"><h1 class="head__title">יצירת קשר ובקשת שעון</h1><p class="head__lead">${s} ${o}</p></div>
  <div class="contact">
    <form class="form" data-wa-form data-wa-intro="היי, פנייה מהאתר:" novalidate>
      <h2 class="form__title">בקשת שעון</h2>
      <div class="field"><label for="c-name">שם מלא</label>
        <input id="c-name" name="name" required autocomplete="name" data-label="שם" data-msg="איך לפנות אליכם?" aria-describedby="e-name">
        <p class="field__err" id="e-name" data-error-for="name"></p></div>
      <div class="field"><label for="c-want">שעון מהקטלוג</label>
        <span class="select"><select id="c-want" name="want" data-label="שעון מהקטלוג"><option value="">בחרו שעון</option>
          ${M.map(t=>`<option ${r?.id===t.id?`selected`:``}>${e(t.name)}</option>`).join(``)}</select>${C(`chevron`)}</span></div>
      <div class="field"><label for="c-desc">תיאור השעון שמחפשים: מותג, דגם ותקציב <span class="muted">(לא חובה)</span></label>
        <input id="c-desc" name="desc" data-label="תיאור השעון"></div>
      <div class="field"><label for="c-msg">הודעה <span class="muted">(לא חובה)</span></label>
        <textarea id="c-msg" name="msg" rows="3" data-label="הודעה"></textarea></div>
      <button class="btn btn--ink btn--lg" type="submit">${C(`wa`)}<span>שליחה בוואטסאפ</span></button>
      <p class="form__status" data-form-status role="status"></p>
      <p class="note">הטופס לא שולח דבר לשרת. הוא מכין הודעה בוואטסאפ, ורק אתם מחליטים אם לשלוח.</p>
    </form>
    <aside class="contact__side">
      <a class="wa-line" href="${g(n)}" target="_blank" rel="noopener">${C(`wa`)}<span>כתבו לנו בוואטסאפ</span>${C(`arrow`)}</a>
      ${K(`scene3`,`contact__plate`)}
    </aside>
  </div>`}function ge(){let e=P(te());return`${G([[`המועדפים שלי`]],e.length?I(e):``)}
  <div class="head"><h1 class="head__title">המועדפים שלי</h1>${e.length?`<p class="head__cap">${T(e.length)}</p>`:``}</div>
  ${e.length?`<div class="favbar">
      <button class="btn btn--ink" type="button" data-wa-list>${C(`wa`)}<span>שליחת הרשימה למשה</span></button>
      <button class="btn btn--line" type="button" data-fav-clear>${C(`trash`)}<span>ניקוי</span></button>
    </div>
    <div class="pages">${X(e,!0)}</div>`:`<div class="empty"><span class="empty__slot" aria-hidden="true">${C(`heart`)}</span><a class="btn btn--ink" href="#/collection">לקטלוג השעונים</a></div>`}`}function _e(t){let n=t.query.get(`q`)??``,r=P(v(n));return`${G([[`חיפוש`]])}
  <div class="head"><h1 class="head__title">חיפוש</h1>
    <form class="find" data-search-form role="search"><label class="sr-only" for="s-q">חיפוש</label>
      ${C(`search`)}<input id="s-q" name="q" type="search" value="${e(n)}" placeholder="חיפוש לפי שם, מותג או תיאור" autocomplete="off" data-live-search></form>
    <p class="head__cap" data-count>${m(n,r.length)}</p></div>
  <div class="pages">${X(r,!0)}</div>
  <div class="find-toc">${Q(`h-find-toc`)}</div>`}var ve=e=>{let t=S(e.params.slug);return`${G([[t.title]])}<article class="legal"><div class="head"><h1 class="head__title">${t.title}</h1></div><div class="legal__body">${t.body}</div></article>`},ye=()=>`<section class="nf"><p class="nf__code" aria-hidden="true">404</p>${R}<h1 class="head__title">העמוד לא נמצא</h1>
  <p class="head__lead">ייתכן שהקישור השתנה.</p><a class="btn btn--ink" href="#/collection">לכל הקטלוג</a></section>`;function be(){let e=new Date,t=U(e),r=[[`#/`,`home`,`בית`],[`#/collection`,`collection`,`קטלוג`],[`#/about`,`about`,`אודות`],[`#/contact`,`contact`,`קשר`],[`#/search`,`search`,`חיפוש`],[`#/favorites`,`favorites`,`מועדפים`]];return`<a class="skip-link" href="#main" data-skip>דלג לתוכן</a>
  <header class="mast">
    <p class="mast__date">${H(e).map(e=>`<span>${e}</span>`).join(z)}</p>
    <div class="mast__rule" aria-hidden="true"></div>
    <a class="mast__logo" href="#/" aria-label="Moshe, דף הבית" data-live-clock>${a(`full`,{decorative:!0,...t})}</a>
  </header>
  <nav class="navrow" aria-label="ניווט ראשי"><div class="navrow__bar"><div class="navrow__in">
    ${r.map(([e,t,n])=>`<a href="${e}" data-nav="${t}">${n}${t===`favorites`?`<sup class="navrow__n" data-fav-count hidden></sup>`:``}</a>`).join(``)}
  </div></div></nav>

  <main id="main" tabindex="-1"></main>

  <footer class="colophon">
    <div class="colophon__rule" aria-hidden="true"></div>
    <div class="colophon__in">
      <a class="colophon__mark" href="#/" aria-label="Moshe, דף הבית" data-live-clock>${a(`mark`,{decorative:!0,...t})}</a>
      <p class="colophon__slogan">${p}</p>
      <nav class="colophon__nav" aria-label="ניווט תחתון">
        <a href="#/collection">קטלוג</a><a href="#/about">אודות</a><a href="#/contact">קשר</a><a href="#/favorites">מועדפים</a>
        <a href="${g(n)}" target="_blank" rel="noopener">כתבו לנו בוואטסאפ</a>
      </nav>
      ${R}
      <p class="colophon__disc">${i}</p>
      <p class="colophon__fine"><a href="#/page/accessibility">הצהרת נגישות</a>${z}<a href="#/page/privacy">מדיניות פרטיות</a></p>
      <p class="colophon__fine">הדגמת עיצוב · <a href="../../index.html">לכל הכיוונים</a></p>
    </div>
  </footer>`}function xe(){let e=document.querySelector(`.navrow__in`),t=e?.querySelector(`[aria-current="page"]`);if(!e||!t||e.scrollWidth<=e.clientWidth)return;let n=e.getBoundingClientRect(),r=t.getBoundingClientRect();r.left<n.left?e.scrollLeft-=n.left-r.left+24:r.right>n.right&&(e.scrollLeft+=r.right-n.right+24)}ie({layout:be,views:{home:le,collection:fe,watch:pe,about:me,contact:he,favorites:ge,search:_e,page:ve,notfound:ye},list:e=>Y(P(e)),mount(e){let t=e.querySelector(`.mast`);t&&`IntersectionObserver`in window&&new IntersectionObserver(([e])=>{j.dataset.stuck=String(!e.isIntersecting)}).observe(t)},afterRender:xe});