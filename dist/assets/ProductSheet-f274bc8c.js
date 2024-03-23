import{_,N as m,F as h,C as b,m as v,a as g,r as o,o as f,c as y,b as a,d as t,e as n,t as l,f as C,g as k}from"./index-3cb81dcb.js";const x={name:"ProductSheet",data(){return{article:{}}},components:{Navbar:m,FooterVue:h,Caddy:b},mounted(){this.loadDetails();const e=document.querySelector(".add-btn");e.addEventListener("click",()=>{e.innerHTML="Articlé ajouté au panier",setTimeout(()=>{e.innerHTML="Ajouter au panier"},800)})},methods:{...v(["addToCaddy"]),loadDetails(){const e=this.$route.params.id;console.log(e),g.get("https://dito-pro.direct.quickconnect.to:3005/api/cameras/"+e).then(s=>{this.article=s.data}).catch(s=>{console.log(s)})},returnBack(){this.$router.go(-1)}}},N={class:"container productsheet-ctr"},B={class:"row productsheet"},S={class:"col-12 btn-back"},V=t("i",{class:"bi bi-caret-left-fill"},null,-1),q={class:"col-12 col-xl-6 imgs"},w=["src"],F={class:"col-12 col-xl-6 dscpt"},T={class:"row title"},D={class:"row price"},L=k('<span class="row order-info"><div class="col-12"><p class="shipping"><i class="bi bi-shop"></i> Livraison en point relais</p><p class="text-muted">Expédition sous 12h, réception sous 48h,à partir de 3,99€</p></div><div class="col-12"><p class="shipping"><i class="bi bi-truck"></i> Livraison à domicile</p><p class="text-muted">Dés mardi, à partir de 2,99€</p></div></span><hr>',2),A={class:"row informations"},E=t("div",{class:"list-group",id:"list-tab",role:"tablist"},[t("a",{class:"list-group-item-action active",id:"list-home-list","data-bs-toggle":"list",href:"#list-home",role:"tab","aria-controls":"list-home"},"Description"),t("a",{class:"list-group-item-action",id:"list-profile-list","data-bs-toggle":"list",href:"#list-profile",role:"tab","aria-controls":"list-profile"},"Performance"),t("a",{class:"list-group-item-action",id:"list-messages-list","data-bs-toggle":"list",href:"#list-messages",role:"tab","aria-controls":"list-messages"},"Informations complémentaires")],-1),P={class:"col-12 contents"},j={class:"tab-content",id:"nav-tabContent"},K={class:"tab-pane fade show active",id:"list-home",role:"tabpanel","aria-labelledby":"list-home-list"},M=t("div",{class:"tab-pane fade",id:"list-profile",role:"tabpanel","aria-labelledby":"list-profile-list"},[t("ul",null,[t("li",null,"Visée à l'écran : Non"),t("li",null,"Connectivité : Wi-Fi"),t("li",null,"Etanche : Non"),t("li",null,"Type de viseur : optique, permet d'obtenir une vue directe et naturelle de la scène et ne nécessite pas d'alimentation."),t("li",null,"Connectiques : Sortie USB")])],-1),H=t("div",{class:"tab-pane fade",id:"list-messages",role:"tabpanel","aria-labelledby":"list-messages-list"},[t("ul",null,[t("li",null,"Fabriqué en : Birmanie"),t("li",null,"Garantie : 2 ans"),t("li",null,"Marque : KODAKK")])],-1),I={class:"row btn-shop"},Q=t("input",{type:"number",class:"col-2 qty",id:"inputQty",name:"inputQty",value:"1"},null,-1);function U(e,s,G,O,i,c){const r=o("Navbar"),d=o("Caddy"),p=o("FooterVue");return f(),y(C,null,[a(r),a(d),t("div",N,[t("div",B,[t("div",S,[t("button",{onClick:s[0]||(s[0]=u=>c.returnBack()),class:"btn"},[V,n(" Retour")])]),t("div",q,[t("img",{src:i.article.imageUrl,alt:""},null,8,w)]),t("div",F,[t("span",T,[t("h2",null,l(i.article.name),1),t("p",null,"réf. produit: "+l(i.article._id),1)]),t("span",D,[t("p",null,l(i.article.price/100+" € "),1)]),L,t("span",A,[E,t("div",P,[t("div",j,[t("div",K,[t("p",null,l(i.article.description),1),t("span",null,[n("Lentilles disponibles pour ce modèle : "),t("p",null,l(i.article.lenses),1)])]),M,H])])]),t("div",I,[Q,t("button",{onClick:s[1]||(s[1]=u=>e.addToCaddy(i.article)),class:"btn add-btn col-6"},"Ajouter au panier")])])])]),a(p)],64)}const W=_(x,[["render",U]]);export{W as default};
