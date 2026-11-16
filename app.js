(function(){
'use strict';
var D=window.GCF, $=function(s,r){return (r||document).querySelector(s)}, $$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
var VISIT='https://leslita06.github.io/cecilefakhoury-mivekannin/';
var IG='https://www.instagram.com/galeriececilefakhoury', FB='https://www.facebook.com/galeriececilefakhoury/';
var L=(new URLSearchParams(location.search).get('lang'))||localStorage.getItem('gcf-lang')||'fr'; if(L!=='en')L='fr';
var T={
fr:{demo:'Maquette de démonstration',artists:'Artistes',expos:'Expositions',fairs:'Foires',news:'Actualités',editions:'Éditions',collect:'Collectionner',about:'À propos',visit:'Visite en ligne',
now:'Exposition en cours',discover:"Découvrir l'exposition",visitBtn:'Visite en ligne',scroll:'Défiler',upcoming:'À venir',recent:'Récemment',current:'En cours',past:'Passées',all:'Toutes',
seeAll:'Tout voir',gallery:'Artistes de la galerie',collab:'Collaborations',bio:'Biographie',works:'Œuvres',views:"Vues d'exposition",press:'Presse',exhib:'Expositions',
cv:"Télécharger le CV de l'artiste",ask:'Demander le dossier des œuvres',askWork:'Demander des informations',rdv:'Prendre rendez-vous',infos:'Informations',
place:'Lieu',dates:'Dates',read:"Lire l'article",onsite:'Voir sur le site actuel',agenda:'Agenda',fairsPast:'Foires précédentes',year:'Année',
booksLead:'Les catalogues et monographies publiés par la galerie et ses partenaires. Prix publics affichés sur le site de la galerie.',order:'Commander',
collectLead:"La galerie accompagne les collectionneurs, institutions et conseillers en art à Abidjan, Dakar et au showroom de Paris.",
o1:'Dossier des œuvres',o1t:"Recevez sous 48 h le dossier des œuvres disponibles d'un artiste ou d'une exposition : visuels, dimensions, techniques, prix sur demande.",
o2:'Rendez-vous privé',o2t:"Une visite accompagnée à la galerie d'Abidjan, à Dakar ou au showroom de Paris, sur rendez-vous uniquement.",
o3:'Avant-premières',o3t:'Soyez prévenu avant l’ouverture des expositions et des foires, et accédez aux nouvelles œuvres en premier.',
fName:'Nom et prénom',fMail:'Courriel',fTel:'Téléphone (facultatif)',fWant:'Je souhaite',fArtist:"Artiste ou exposition d'intérêt",fWhere:'Lieu du rendez-vous',fMsg:'Message',
any:'Pas de préférence',send:'Envoyer la demande',ok:'Démonstration : votre demande n’a pas été envoyée. Dans la version en ligne, elle arrivera directement à l’équipe de la galerie.',
nlT:'Joignez-vous à notre liste d’envoi',nlP:'Recevez nos actualités, expositions et invitations aux vernissages.',first:'Prénom',last:'Nom',sub:"S'inscrire",
nlOk:'Démonstration : aucune inscription n’est enregistrée.',spaces:'Nos trois espaces',map:'Carte',route:'Itinéraire',byApp:'Showroom, sur rendez-vous uniquement',
aboutLead:'La Galerie Cécile Fakhoury a ouvert ses portes à Abidjan en septembre 2012. Elle est aujourd’hui présente à Abidjan, Dakar et Paris.',
inProgress:'En ce moment',outside:'Hors les murs',pressNews:'Dans la presse',collectT:'Collectionner avec la galerie',collectP:'Dossier des œuvres, rendez-vous privé, avant-premières : une rubrique nouvelle, pensée pour les collectionneurs.',
from:'Du',until:'au',worksAvail:'Œuvres disponibles sur demande.',back:'Retour',close:'Fermer',menu:'Menu',follow:'Suivre la galerie',
city:'Ville',allCities:'Toutes les villes',textOn:'Texte de l’exposition',notFound:'Page introuvable.',home:'Accueil',fairsLead:'La galerie participe chaque année aux grandes foires internationales.',
next:'Prochains rendez-vous',newsLead:'Expositions hors les murs, biennales, musées et revue de presse des artistes.'},
en:{demo:'Demonstration mock-up',artists:'Artists',expos:'Exhibitions',fairs:'Art fairs',news:'News',editions:'Publications',collect:'Collect',about:'About',visit:'Online viewing room',
now:'Current exhibition',discover:'Discover the exhibition',visitBtn:'Online viewing room',scroll:'Scroll',upcoming:'Forthcoming',recent:'Recently',current:'Current',past:'Past',all:'All',
seeAll:'View all',gallery:'Gallery artists',collab:'Collaborations',bio:'Biography',works:'Works',views:'Installation views',press:'Press',exhib:'Exhibitions',
cv:"Download artist's CV",ask:'Request the works portfolio',askWork:'Enquire',rdv:'Book an appointment',infos:'Information',
place:'Venue',dates:'Dates',read:'Read the article',onsite:'See on the current website',agenda:'Calendar',fairsPast:'Past art fairs',year:'Year',
booksLead:'Catalogues and monographs published by the gallery and its partners. Public prices as listed on the gallery website.',order:'Order',
collectLead:'The gallery works with collectors, institutions and art advisors in Abidjan, Dakar and at the Paris showroom.',
o1:'Works portfolio',o1t:"Receive within 48 hours the portfolio of available works by an artist or from an exhibition: images, dimensions, media, prices on request.",
o2:'Private appointment',o2t:'A guided visit at the Abidjan gallery, in Dakar or at the Paris showroom, by appointment only.',
o3:'Previews',o3t:'Hear before exhibitions and fairs open, and see new works first.',
fName:'Full name',fMail:'Email',fTel:'Phone (optional)',fWant:'I would like',fArtist:'Artist or exhibition of interest',fWhere:'Appointment venue',fMsg:'Message',
any:'No preference',send:'Send request',ok:'Demonstration: your request has not been sent. On the live website it will go straight to the gallery team.',
nlT:'Join our mailing list',nlP:'Receive updates on our exhibitions, news, and opening invitations.',first:'First name',last:'Last name',sub:'Sign up',
nlOk:'Demonstration: no subscription is recorded.',spaces:'Our three spaces',map:'Map',route:'Directions',byApp:'Showroom, by appointment only',
aboutLead:'Galerie Cécile Fakhoury opened in Abidjan in September 2012. Today it is present in Abidjan, Dakar and Paris.',
inProgress:'Now on view',outside:'Beyond the gallery',pressNews:'In the press',collectT:'Collect with the gallery',collectP:'Works portfolio, private appointment, previews: a new section designed for collectors.',
from:'From',until:'to',worksAvail:'Works available on request.',back:'Back',close:'Close',menu:'Menu',follow:'Follow the gallery',
city:'City',allCities:'All cities',textOn:'Exhibition text',notFound:'Page not found.',home:'Home',fairsLead:'Every year the gallery takes part in the major international art fairs.',
next:'Upcoming',newsLead:'Exhibitions beyond the gallery, biennials, museums and the artists’ press coverage.'}};
function t(k){return T[L][k]||k}
function esc(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function pick(o,k){return (L==='en'&&o[k+'_en']&&o[k+'_en'].length)?o[k+'_en']:(o[k+'_fr']&&o[k+'_fr'].length?o[k+'_fr']:(o[k+'_en']||''))}
function paras(a){return (a||[]).map(function(p){return '<p>'+esc(p)+'</p>'}).join('')}
function img(src,alt,cls){return '<img src="'+esc(src)+'" alt="'+esc(alt||'')+'" loading="lazy"'+(cls?' class="'+cls+'"':'')+'>'}
var EX=D.expos, CUR=EX.filter(function(e){return e.status==='current'})[0], FOR=EX.filter(function(e){return e.status==='forthcoming'});
function exById(id){return EX.filter(function(e){return e.id===id})[0]}
function arById(id){return D.artists.filter(function(a){return a.id===id})[0]}
function cityLabel(c){return c==='Abidjan'||c==='Dakar'||c==='Paris'?c:c}
function exCard(e,tag){if(typeof tag!=='string')tag='';return '<a class="card reveal" href="#/exposition/'+e.id+'">'+(tag?'<span class="tag">'+tag+'</span>':'')+'<div class="ph">'+img(e.img,e.title)+'</div><div class="t">'+esc(e.title)+'</div><div class="s">'+esc(e.artist)+(e.city?' · '+esc(e.city):'')+'</div><div class="d">'+esc(L==='en'?e.date_en:e.date_fr)+'</div></a>'}

/* ---------- pages ---------- */
function home(){
 var e=CUR;
 var h='<section class="hero"><img src="'+e.hero+'" alt="'+esc(e.title)+'"><div class="in"><div class="kick">'+t('now')+' · '+esc(e.city)+'</div><h1>'+esc(e.title)+'<small>'+esc(e.artist)+'</small></h1><div class="meta">'+esc(L==='en'?e.date_en:e.date_fr)+' · Galerie Cécile Fakhoury, '+esc(e.city)+'</div><div class="ctas"><a class="btn" href="#/exposition/'+e.id+'">'+t('discover')+'</a><a class="btn ghost" href="'+VISIT+'" target="_blank" rel="noopener">'+t('visitBtn')+' ↗</a></div></div><div class="scrollcue">'+t('scroll')+'</div></section>';
 // en cours + a venir
 h+='<section class="blk"><div class="wrap"><div class="head"><h2 class="sec">'+t('inProgress')+'</h2><a class="more" href="#/expositions">'+t('seeAll')+'</a></div><div class="split reveal"><a class="ph" href="#/exposition/'+e.id+'">'+img('img/o06.jpg',e.title)+'</a><div><span class="tag">'+t('current')+'</span><p class="lead">'+esc(pick(e,'text')[0]||'')+'</p><p style="margin-top:22px"><a class="more" href="#/exposition/'+e.id+'">'+t('discover')+'</a></p></div></div>';
 h+='<div class="head" style="margin-top:clamp(60px,8vw,110px)"><h2 class="sec">'+t('upcoming')+' · '+t('recent')+'</h2><a class="more" href="#/expositions?s=past">'+t('past')+'</a></div><div class="grid g2">'+FOR.slice(0,1).map(function(x){return exCard(x,t('upcoming'))}).join('')+exCard(EX.filter(function(x){return x.status==='past'})[0],t('recent'))+'</div>';
 h+='</div></section>';
 // hors les murs
 var ev=D.news.filter(function(n){return n.type==='event'});
 h+='<section class="blk soft"><div class="wrap"><div class="head"><h2 class="sec">'+t('outside')+'</h2><a class="more" href="#/actualites">'+t('seeAll')+'</a></div><div class="grid g4">'+ev.map(function(n){return '<a class="card reveal" href="'+n.src+'" target="_blank" rel="noopener"><div class="ph">'+img(n.img,n.title)+'</div><div class="t">'+esc(n.title)+'</div><div class="s">'+esc(n.sub)+'</div><div class="d">'+esc(n.date)+'</div></a>'}).join('')+'</div></div></section>';
 // collectionner
 h+='<section class="blk"><div class="wrap split reveal"><div class="ph">'+img(D.spaces_img[3],'Showroom Paris')+'</div><div><span class="tag">'+t('collect')+'</span><h2 class="sec" style="margin:8px 0 18px">'+t('collectT')+'</h2><p class="lead">'+t('collectP')+'</p><div class="ctas" style="display:flex;gap:12px;flex-wrap:wrap;margin-top:26px"><a class="btn" href="#/collectionner">'+t('ask')+'</a><a class="btn ghost" href="#/collectionner?want=rdv">'+t('rdv')+'</a></div></div></div></section>';
 // foires (agenda)
 h+='<section class="blk soft"><div class="wrap"><div class="head"><h2 class="sec">'+t('fairs')+'</h2><a class="more" href="#/foires">'+t('agenda')+'</a></div><div class="grid g3">'+D.fairs.slice(0,3).map(function(f){return '<a class="card reveal" href="#/foires"><div class="ph">'+img(f.img,f.title)+'</div><div class="t">'+esc(f.title)+'</div><div class="s">'+esc(f.artist)+'</div><div class="d">'+esc(L==='en'?f.date_en:f.date_fr)+'</div></a>'}).join('')+'</div></div></section>';
 h+=spacesBlock();
 return h;
}
function spacesBlock(){
 var S=[['Abidjan','Cocody, boulevard Latrille, entre la SODEMI et l’immeuble Carbone','+225 27 22 44 66 77','abidjan@cecilefakhoury.com',D.spaces_img[0],'Galerie Cécile Fakhoury Abidjan Boulevard Latrille'],
 ['Dakar',L==='en'?'Senegal':'Sénégal','+221 33 842 90 91','dakar@cecilefakhoury.com',D.spaces_img[2],'Galerie Cécile Fakhoury Dakar'],
 ['Paris',t('byApp'),'+33 (0)7 62 06 36 20','paris@cecilefakhoury.com',D.spaces_img[3],'']];
 var pins={Paris:[59,13],Dakar:[17.8,75.1],Abidjan:[45.8,92.1]};
 var ln='<svg class="routes" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path d="M59 13 Q30 40 17.8 75.1 M17.8 75.1 Q30 90 45.8 92.1 M45.8 92.1 Q62 50 59 13" fill="none" stroke="#010101" stroke-width=".35" stroke-dasharray="1.2 1.2" vector-effect="non-scaling-stroke"/></svg>';
 var h='<section class="blk" id="espaces"><div class="wrap"><div class="head"><h2 class="sec">'+t('spaces')+'</h2></div><div class="smap"><div class="map reveal"><img src="img/carte.svg" alt="'+t('map')+'">'+ln+Object.keys(pins).map(function(k){return '<a class="pin" href="#sp-'+k+'" data-jump style="left:'+pins[k][0]+'%;top:'+pins[k][1]+'%"><i></i><b>'+k+'</b></a>'}).join('')+'</div><div class="spaces">';
 h+=S.map(function(s){return '<div class="space reveal" id="sp-'+s[0]+'"><div class="ph">'+img(s[4],s[0])+'</div><div><h3>'+s[0]+'</h3><p>'+esc(s[1])+'<br>t. '+s[2]+'<br><a href="mailto:'+s[3]+'">'+s[3]+'</a></p><div class="links">'+(s[5]?'<a href="https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(s[5])+'" target="_blank" rel="noopener">'+t('route')+' ↗</a>':'')+'<a href="#/collectionner?want=rdv&where='+s[0]+'">'+t('rdv')+'</a></div></div></div>'}).join('');
 return h+'</div></div></div></section>';
}
function expos(q){
 var st=q.get('s')||'current', city=q.get('city')||'';
 var list=EX.filter(function(e){return (st==='current'?(e.status==='current'||e.status==='forthcoming'):e.status===st)&&(!city||e.city===city)});
 var cities=['Abidjan','Dakar','Paris'];
 var h='<div class="wrap ptitle"><div class="crumb"><a href="#/">'+t('home')+'</a> / '+t('expos')+'</div><h1>'+t('expos')+'</h1></div><div class="wrap"><div class="tabs">';
 h+=[['current',t('current')+' · '+t('upcoming')],['past',t('past')]].map(function(b){return '<button data-s="'+b[0]+'" class="'+(st===b[0]?'on':'')+'">'+b[1]+'</button>'}).join('');
 h+='<span style="flex:1"></span>'+['',].concat(cities).map(function(c){return '<button data-c="'+c+'" class="'+(city===c?'on':'')+'">'+(c||t('allCities'))+'</button>'}).join('')+'</div>';
 h+='<div class="grid '+(st==='current'?'g2':'g3')+'">'+list.map(exCard).join('')+'</div></div><div style="height:100px"></div>';
 setTimeout(function(){
  $$('.tabs [data-s]').forEach(function(b){b.onclick=function(){go('#/expositions?s='+b.dataset.s+(city?'&city='+city:''))}});
  $$('.tabs [data-c]').forEach(function(b){b.onclick=function(){go('#/expositions?s='+st+(b.dataset.c?'&city='+b.dataset.c:''))}});
 });
 return h;
}
function cartel(w,artist,full){
 return '<div class="cartel"><div class="n">'+esc(artist)+'</div><div class="ti">'+esc(w.title)+(w.year?', '+esc(w.year):'')+'</div>'+(full?'<div>'+esc(L==='en'?w.medium_en:w.medium_fr)+'</div><div>'+esc(w.dim)+' · '+esc(w.dim_in)+'</div>':'')+'<a class="btn ghost" href="#/collectionner?want=dossier&artist='+encodeURIComponent(artist)+'&work='+encodeURIComponent(w.title)+'">'+t('askWork')+'</a></div>';
}
function expo(id){
 var e=exById(id); if(!e)return nf();
 var txt=pick(e,'text');
 var h='<section class="fhero"><img src="'+e.hero+'" alt="'+esc(e.title)+'"><div class="in"><div class="crumb" style="color:#fff"><a href="#/expositions">'+t('expos')+'</a> / '+esc(e.city)+'</div><h1>'+esc(e.title)+'</h1><div class="meta">'+esc(e.artist)+' · '+esc(L==='en'?e.date_en:e.date_fr)+' · '+esc(e.city)+'</div></div></section>';
 h+='<nav class="subnav"><div class="wrap"><a href="#txt" data-jump>'+t('textOn')+'</a>'+(e.works?'<a href="#oeuvres" data-jump>'+t('works')+'</a>':'')+(e.views&&e.views.length?'<a href="#vues" data-jump>'+t('views')+'</a>':'')+(e.visit?'<a href="'+e.visit+'" target="_blank" rel="noopener">'+t('visit')+' ↗</a>':'')+'<a href="#/collectionner?want=dossier&artist='+encodeURIComponent(e.artist||e.title)+'">'+t('ask')+'</a></div></nav>';
 h+='<section class="blk" id="txt"><div class="wrap cols"><div class="prose reveal">'+paras(txt)+'</div><aside class="aside"><div class="box"><h3>'+t('infos')+'</h3><p>'+esc(L==='en'?e.date_en:e.date_fr)+'<br>Galerie Cécile Fakhoury, '+esc(e.city)+'</p></div>'+(e.visit?'<div class="box"><h3>'+t('visit')+'</h3><p>'+(L==='en'?'Walk through the exhibition room by room, works and labels.':'Parcourez l’exposition salle par salle, œuvres et cartels.')+'</p><a class="btn" href="'+e.visit+'" target="_blank" rel="noopener">'+t('visitBtn')+' ↗</a></div>':'')+'<div class="box"><h3>'+t('collect')+'</h3><p>'+t('o1t')+'</p><a class="btn ghost" href="#/collectionner?want=dossier&artist='+encodeURIComponent(e.artist||e.title)+'">'+t('ask')+'</a></div></aside></div></section>';
 if(e.works){h+='<section class="blk soft" id="oeuvres"><div class="wrap"><div class="head"><h2 class="sec">'+t('works')+'</h2><span class="small">'+e.works.length+'</span></div><div class="works">'+e.works.map(function(w){return '<div class="work reveal"><div class="ph">'+img(w.img,w.title,'zoom')+'</div>'+cartel(w,e.artist,true)+'</div>'}).join('')+'</div></div></section>'}
 if(e.views&&e.views.length){h+='<section class="blk" id="vues"><div class="wrap"><div class="head"><h2 class="sec">'+t('views')+'</h2></div><div class="views">'+e.views.map(function(v){return img(v,t('views'),'zoom')}).join('')+'</div></div></section>'}
 var ar=D.artists.filter(function(a){return e.artist&&a.name.indexOf(e.artist.split(',')[0])===0})[0];
 if(ar&&ar.press.length){h+='<section class="blk soft"><div class="wrap"><div class="head"><h2 class="sec">'+t('press')+'</h2></div><div class="press">'+pressList(ar.press.slice(0,4))+'</div></div></section>'}
 return h+newsletter();
}
function pressList(p){return p.map(function(x){return '<a href="'+esc(x.href)+'" target="_blank" rel="noopener"><div><div class="pt">'+esc(x.title)+'</div><div class="ps">'+esc(x.source)+'</div></div><div class="arr">↗</div></a>'}).join('')}
function artists(){
 var g=function(k){return D.artists.filter(function(a){return a.group===k}).map(function(a){return '<a href="#/artiste/'+a.id+'"><span>'+esc(a.name)+'</span>'+img(a.thumb,a.name)+'</a>'}).join('')};
 return '<div class="wrap ptitle"><div class="crumb"><a href="#/">'+t('home')+'</a> / '+t('artists')+'</div><h1>'+t('artists')+'</h1></div><div class="wrap"><div class="agroup">'+t('gallery')+'</div><div class="alist">'+g('gallery')+'</div><div class="agroup">'+t('collab')+'</div><div class="alist">'+g('collab')+'</div></div><div style="height:110px"></div>';
}
function artist(id){
 var a=arById(id); if(!a)return nf();
 var bio=pick(a,'bio');
 var ex=a.expos.map(exById).filter(Boolean);
 var h='<section class="fhero"><img src="'+a.hero+'" alt="'+esc(a.name)+'"><div class="in"><div class="crumb" style="color:#fff"><a href="#/artistes">'+t('artists')+'</a></div><h1>'+esc(a.name)+'</h1></div></section>';
 h+='<nav class="subnav"><div class="wrap"><a href="#bio" data-jump>'+t('bio')+'</a>'+(a.works.length?'<a href="#oeuvres" data-jump>'+t('works')+'</a>':'')+(ex.length?'<a href="#expos" data-jump>'+t('exhib')+'</a>':'')+(a.press.length?'<a href="#presse" data-jump>'+t('press')+'</a>':'')+'<a href="#/collectionner?want=dossier&artist='+encodeURIComponent(a.name)+'">'+t('ask')+'</a></div></nav>';
 h+='<section class="blk" id="bio"><div class="wrap cols"><div class="prose reveal">'+(bio.length?paras(bio):'<p>'+t('worksAvail')+'</p>')+'</div><aside class="aside">'+(a.cv?'<div class="box"><h3>CV</h3><a class="btn ghost" href="'+a.cv+'" target="_blank" rel="noopener">'+t('cv')+'</a></div>':'')+'<div class="box"><h3>'+t('collect')+'</h3><p>'+t('o1t')+'</p><a class="btn" href="#/collectionner?want=dossier&artist='+encodeURIComponent(a.name)+'">'+t('ask')+'</a><a class="btn ghost" href="#/collectionner?want=rdv&artist='+encodeURIComponent(a.name)+'">'+t('rdv')+'</a></div></aside></div></section>';
 if(a.works.length){h+='<section class="blk soft" id="oeuvres"><div class="wrap"><div class="head"><h2 class="sec">'+t('works')+'</h2></div><div class="works">'+a.works.slice(0,2).map(function(w){return '<div class="work reveal"><div class="ph">'+img(w.img,w.title,'zoom')+'</div>'+cartel(w,a.name)+'</div>'}).join('')+'</div><div class="wgrid" style="margin-top:clamp(56px,8vw,110px)">'+a.works.slice(2).map(function(w){return '<div class="reveal"><div class="ph">'+img(w.img,w.title,'zoom')+'</div>'+cartel(w,a.name)+'</div>'}).join('')+'</div></div></section>'}
 if(ex.length){h+='<section class="blk" id="expos"><div class="wrap"><div class="head"><h2 class="sec">'+t('exhib')+'</h2></div><div class="grid g3">'+ex.map(exCard).join('')+'</div></div></section>'}
 if(a.press.length){h+='<section class="blk soft" id="presse"><div class="wrap"><div class="head"><h2 class="sec">'+t('press')+'</h2></div><div class="press">'+pressList(a.press)+'</div></div></section>'}
 return h+newsletter();
}
function fairs(){
 var up=D.news.filter(function(n){return n.type==='event'});
 var by={};D.fairs.forEach(function(f){(by[f.year]=by[f.year]||[]).push(f)});
 var yrs=Object.keys(by).sort().reverse();
 var h='<div class="wrap ptitle"><div class="crumb"><a href="#/">'+t('home')+'</a> / '+t('fairs')+'</div><h1>'+t('fairs')+'</h1><p class="lead" style="margin-top:18px">'+t('fairsLead')+'</p></div>';
 h+='<section class="blk soft" style="padding-top:60px"><div class="wrap"><div class="head"><h2 class="sec">'+t('next')+'</h2></div><div class="agenda">'+up.map(function(n){return '<a class="row reveal" href="'+n.src+'" target="_blank" rel="noopener">'+img(n.img,n.title)+'<div class="t">'+esc(n.title)+'</div><div class="d c3">'+esc(n.sub)+'</div><div class="d c4">'+esc(n.date)+'</div></a>'}).join('')+'</div></div></section>';
 h+='<section class="blk"><div class="wrap"><div class="head"><h2 class="sec">'+t('fairsPast')+'</h2></div><div class="agenda">'+yrs.map(function(y){return '<div class="yr">'+y+'</div>'+by[y].map(function(f){return '<a class="row" href="'+f.src+'" target="_blank" rel="noopener">'+img(f.img,f.title)+'<div class="t">'+esc(f.title)+'</div><div class="d c3">'+esc(f.artist)+'</div><div class="d c4">'+esc(L==='en'?f.date_en:f.date_fr)+'</div></a>'}).join('')}).join('')+'</div></div></section>';
 return h;
}
function news(){
 var ev=D.news.filter(function(n){return n.type==='event'}), pr=D.news.filter(function(n){return n.type==='press'});
 return '<div class="wrap ptitle"><div class="crumb"><a href="#/">'+t('home')+'</a> / '+t('news')+'</div><h1>'+t('news')+'</h1><p class="lead" style="margin-top:18px">'+t('newsLead')+'</p></div><section class="blk" style="padding-top:30px"><div class="wrap"><div class="head"><h2 class="sec">'+t('outside')+'</h2></div><div class="grid g2">'+ev.map(function(n){return '<a class="card reveal" href="'+n.src+'" target="_blank" rel="noopener"><div class="ph">'+img(n.img,n.title)+'</div><div class="t">'+esc(n.title)+'</div><div class="s">'+esc(n.sub)+' · '+esc(n.date)+'</div><p class="small" style="margin-top:8px">'+esc(n.text)+'</p></a>'}).join('')+'</div></div></section><section class="blk soft"><div class="wrap"><div class="head"><h2 class="sec">'+t('pressNews')+'</h2></div><div class="press">'+pr.map(function(n){return '<a href="'+n.src+'" target="_blank" rel="noopener"><div><div class="pt">'+esc(n.title)+'</div><div class="ps">'+esc(n.sub)+' · '+esc(n.date)+'</div></div><div class="arr">↗</div></a>'}).join('')+'</div></div></section>'+newsletter();
}
function editions(){
 return '<div class="wrap ptitle"><div class="crumb"><a href="#/">'+t('home')+'</a> / '+t('editions')+'</div><h1>'+t('editions')+'</h1><p class="lead" style="margin-top:18px">'+t('booksLead')+'</p></div><div class="wrap"><div class="books">'+D.pubs.map(function(b){return '<div class="book reveal"><div class="ph">'+img(b.img,b.title)+'</div><div class="t">'+esc(b.title)+'</div><div class="s">'+esc(b.by)+(b.authors?' · '+esc(b.authors):'')+'</div><div class="p"><span>'+esc(b.price)+'</span><a href="'+b.src+'" target="_blank" rel="noopener"><button type="button">'+t('order')+' ↗</button></a></div></div>'}).join('')+'</div></div><div style="height:110px"></div>';
}
function collect(q){
 var want=q.get('want')||'dossier', ar=q.get('artist')||'', wk=q.get('work')||'', wh=q.get('where')||'';
 var opts=['<option value="">'+t('any')+'</option>'].concat([CUR.title+' · '+CUR.artist].concat(D.artists.map(function(a){return a.name})).map(function(n){return '<option'+(ar&&n.indexOf(ar)===0?' selected':'')+'>'+esc(n)+'</option>'}));
 var ch=function(v,l){return '<label><input type="checkbox" name="want" value="'+v+'"'+(want===v?' checked':'')+'> '+l+'</label>'};
 var h='<section class="fhero" style="height:56vh"><img src="'+D.spaces_img[1]+'" alt="Galerie Cécile Fakhoury"><div class="in"><div class="crumb" style="color:#fff">'+t('home')+' / '+t('collect')+'</div><h1>'+t('collect')+'</h1></div></section>';
 h+='<section class="blk"><div class="wrap"><p class="lead" style="margin-bottom:46px">'+t('collectLead')+'</p><div class="offers">'+[['01',t('o1'),t('o1t')],['02',t('o2'),t('o2t')],['03',t('o3'),t('o3t')]].map(function(o){return '<div class="offer reveal"><div class="num">'+o[0]+'</div><h3>'+o[1]+'</h3><p>'+o[2]+'</p></div>'}).join('')+'</div></div></section>';
 h+='<section class="blk soft" id="form"><div class="wrap cols"><form class="f" id="cform"><div class="full"><label>'+t('fWant')+'</label><div class="chips">'+ch('dossier',t('o1'))+ch('rdv',t('o2'))+ch('preview',t('o3'))+'</div></div><div><label for="n">'+t('fName')+'</label><input id="n" required autocomplete="name"></div><div><label for="m">'+t('fMail')+'</label><input id="m" type="email" required autocomplete="email"></div><div><label for="p">'+t('fTel')+'</label><input id="p" type="tel" autocomplete="tel"></div><div><label for="w">'+t('fWhere')+'</label><select id="w"><option value="">'+t('any')+'</option>'+['Abidjan','Dakar','Paris (showroom)'].map(function(c){return '<option'+(wh&&c.indexOf(wh)===0?' selected':'')+'>'+c+'</option>'}).join('')+'</select></div><div class="full"><label for="a">'+t('fArtist')+'</label><select id="a">'+opts.join('')+'</select></div><div class="full"><label for="x">'+t('fMsg')+'</label><textarea id="x">'+(wk?esc(wk):'')+'</textarea></div><div class="full"><button class="btn" type="submit">'+t('send')+'</button><div class="ok" id="cok">'+t('ok')+'</div></div></form><aside class="aside"><div class="box"><h3>Abidjan</h3><p>+225 27 22 44 66 77<br><a href="mailto:abidjan@cecilefakhoury.com">abidjan@cecilefakhoury.com</a></p></div><div class="box"><h3>Dakar</h3><p>+221 33 842 90 91<br><a href="mailto:dakar@cecilefakhoury.com">dakar@cecilefakhoury.com</a></p></div><div class="box"><h3>Paris</h3><p>'+t('byApp')+'<br>+33 (0)7 62 06 36 20<br><a href="mailto:paris@cecilefakhoury.com">paris@cecilefakhoury.com</a></p></div></aside></div></section>';
 setTimeout(function(){var f=$('#cform');if(f)f.onsubmit=function(ev){ev.preventDefault();$('#cok').classList.add('show')}});
 return h;
}
function about(){
 var txt=L==='en'?['Galerie Cécile Fakhoury opened its doors in Abidjan, Côte d’Ivoire, in September 2012. In 2018, it inaugurated a new space in Dakar, Senegal, and a showroom in Paris, France. From March 2020, it developed the Project Space in Abidjan, dedicated to forward-looking programming. In October 2021, the gallery opened a new exhibition space in the Matignon district and is now based in a showroom in the 7th arrondissement, accessible by appointment.','The gallery promotes contemporary art from Africa and the Diaspora by providing visibility to the artistic diversity and creative spirit from the continent, through solo and group exhibitions, participation in international art fairs and biennales, and collaborations with international galleries.']:['La Galerie Cécile Fakhoury a ouvert ses portes à Abidjan en Côte d’Ivoire en septembre 2012. En 2018, elle inaugure un nouvel espace à Dakar au Sénégal et un showroom à Paris en France. A partir de mars 2020, elle développe le Project Space à Abidjan, espace dédié à une programmation prospective. En octobre 2021, la Galerie Cécile Fakhoury ouvre un nouvel espace d’exposition dans le quartier Matignon et est établie désormais dans un showroom, dans le 7ème arrondissement, accessible sur rendez-vous.','La galerie œuvre à la promotion de l’art contemporain sur le continent africain. Elle offre une visibilité à la créativité et à la diversité artistique contemporaine en Afrique à travers sa programmation d’expositions monographiques et collectives, mais aussi par sa participation aux foires et biennales internationales et par ses collaborations avec des galeries étrangères.'];
 return '<section class="fhero" style="height:62vh"><img src="'+D.spaces_img[0]+'" alt="Galerie Cécile Fakhoury, Abidjan"><div class="in"><h1>'+t('about')+'</h1></div></section><section class="blk"><div class="wrap cols"><div class="prose reveal">'+paras(txt)+'</div><aside class="aside"><div class="box"><h3>'+t('follow')+'</h3><p><a href="'+IG+'" target="_blank" rel="noopener">Instagram ↗</a><br><a href="'+FB+'" target="_blank" rel="noopener">Facebook ↗</a></p></div><div class="box"><h3>'+t('collect')+'</h3><a class="btn" href="#/collectionner?want=rdv">'+t('rdv')+'</a></div></aside></div></section>'+spacesBlock()+newsletter();
}
function newsletter(){
 return '<section class="blk news" id="lettre"><div class="wrap"><div><h2>'+t('nlT')+'</h2><p>'+t('nlP')+'</p></div><form id="nl"><input placeholder="'+t('first')+' *" required aria-label="'+t('first')+'"><input placeholder="'+t('last')+' *" required aria-label="'+t('last')+'"><input class="full" type="email" placeholder="'+t('fMail')+' *" required aria-label="'+t('fMail')+'"><div class="full"><button class="btn" type="submit">'+t('sub')+'</button><div class="ok" id="nlok">'+t('nlOk')+'</div></div></form></div></section>';
}
function nf(){return '<div class="wrap ptitle"><h1>'+t('notFound')+'</h1><p style="margin-top:20px"><a class="more" href="#/">'+t('home')+'</a></p></div>'}

/* ---------- coque ---------- */
var NAV=[['#/artistes','artists'],['#/expositions','expos'],['#/foires','fairs'],['#/actualites','news'],['#/editions','editions'],['#/collectionner','collect'],['#/a-propos','about']];
function shell(){
 document.documentElement.lang=L;
 $('#demo').textContent=t('demo');
 $('#nav').innerHTML=NAV.map(function(n){return '<a href="'+n[0]+'"'+(n[1]==='collect'?' class="new"':'')+'>'+t(n[1])+'</a>'}).join('')+'<a href="'+VISIT+'" target="_blank" rel="noopener">'+t('visit')+' ↗</a>';
 $('#mnav').innerHTML=NAV.map(function(n){return '<a href="'+n[0]+'">'+t(n[1])+'</a>'}).join('')+'<a href="'+VISIT+'" target="_blank" rel="noopener">'+t('visit')+' ↗</a><a class="btn" href="#/collectionner">'+t('ask')+'</a>';
 $$('.lang button').forEach(function(b){b.classList.toggle('on',b.dataset.l===L)});
 $('#burger').setAttribute('aria-label',t('menu'));
 $('#foot').innerHTML='<div class="wrap"><div class="cols4"><div><img src="img/logo.png" alt="Galerie Cécile Fakhoury" style="height:40px;width:auto;margin-bottom:16px"><p>'+t('aboutLead')+'</p></div><div><h4>Abidjan</h4><p>Cocody, boulevard Latrille<br>+225 27 22 44 66 77<br><a href="mailto:abidjan@cecilefakhoury.com">abidjan@cecilefakhoury.com</a></p></div><div><h4>Dakar</h4><p>+221 33 842 90 91<br><a href="mailto:dakar@cecilefakhoury.com">dakar@cecilefakhoury.com</a></p></div><div><h4>Paris</h4><p>'+t('byApp')+'<br>+33 (0)7 62 06 36 20<br><a href="mailto:paris@cecilefakhoury.com">paris@cecilefakhoury.com</a></p></div></div><div class="base"><span>© 2026 Galerie Cécile Fakhoury · '+t('demo')+'</span><span><a href="'+IG+'" target="_blank" rel="noopener">Instagram</a> · <a href="'+FB+'" target="_blank" rel="noopener">Facebook</a> · <a href="#lettre" data-jump>'+t('nlT')+'</a></span></div></div>';
}
function go(h){location.hash=h}
function route(){
 document.body.classList.remove('menu');
 var hs=location.hash.replace(/^#/,'')||'/', parts=hs.split('?'), p=parts[0].split('/').filter(Boolean), q=new URLSearchParams(parts[1]||'');
 if(p[0]&&!/^(artistes|artiste|expositions|exposition|foires|actualites|editions|collectionner|a-propos)$/.test(p[0])){var el=document.getElementById(p[0]);if(el){el.scrollIntoView();return}}
 var v;
 switch(p[0]){case 'expositions':v=expos(q);break;case 'exposition':v=expo(p[1]);break;case 'artistes':v=artists();break;case 'artiste':v=artist(p[1]);break;case 'foires':v=fairs();break;case 'actualites':v=news();break;case 'editions':v=editions();break;case 'collectionner':v=collect(q);break;case 'a-propos':v=about();break;default:v=home()+newsletter()}
 $('#app').innerHTML=v;
 $$('#nav a').forEach(function(a){a.classList.toggle('on',p[0]&&a.getAttribute('href').indexOf('#/'+p[0].replace(/e$/,''))===0)});
 window.scrollTo(0,0); wire();
}
function wire(){
 var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{rootMargin:'0px 0px -40px 0px'});
 $$('.reveal').forEach(function(el){io.observe(el)});
 var nl=$('#nl'); if(nl)nl.onsubmit=function(e){e.preventDefault();$('#nlok').classList.add('show')};
 $$('[data-jump]').forEach(function(a){a.onclick=function(e){e.preventDefault();var el=$(a.getAttribute('href'));if(el)window.scrollTo({top:el.getBoundingClientRect().top+window.scrollY-140,behavior:'smooth'})}});
 $$('img.zoom').forEach(function(im){im.onclick=function(){$('#lbimg').src=im.src;$('#lbcap').textContent=im.alt;$('#lb').classList.add('show')}});
}
document.addEventListener('DOMContentLoaded',function(){
 shell(); route();
 window.addEventListener('hashchange',route);
 $$('.lang button').forEach(function(b){b.onclick=function(){L=b.dataset.l;localStorage.setItem('gcf-lang',L);shell();route()}});
 $('#burger').onclick=function(){document.body.classList.toggle('menu')};
 $('#lb').onclick=function(){$('#lb').classList.remove('show')};
 window.addEventListener('scroll',function(){$('header.top').classList.toggle('scrolled',window.scrollY>10)},{passive:true});
});
})();
