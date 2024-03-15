import{_,N as m,F as h,C as b,m as v,a as g,r as o,o as f,c as y,b as a,d as s,e as n,t as i,f as C,g as N}from"./index-5f174998.js";const k={name:"ProductSheet",data(){return{article:{}}},components:{Navbar:m,FooterVue:h,Caddy:b},mounted(){this.loadDetails()},methods:{...v(["addToCaddy"]),loadDetails(){const l=this.$route.params.id;console.log(l),g.get("http://localhost:3000/api/cameras/"+l).then(t=>{this.article=t.data}).catch(t=>{console.log(t)})},returnBack(){this.$router.go(-1)}}},x={class:"container productsheet-ctr"},V={class:"row productsheet"},w={class:"col-12 btn-back"},B=s("i",{class:"bi bi-caret-left-fill"},null,-1),F={class:"col-6 imgs"},S=["src"],D={class:"col-6 dscpt"},q={class:"row title"},P={class:"row price"},T=N('<span class="row order-info"><div class="col-12"><p class="shipping"><i class="bi bi-shop"></i> Livraison en point relais</p><p class="text-muted">Expédition sous 12h, réception sous 48h,à partir de 3,99€</p></div><div class="col-12"><p class="shipping"><i class="bi bi-truck"></i> Livraison à domicile</p><p class="text-muted">Dés mardi, à partir de 2,99€</p></div></span><hr>',2),A={class:"row informations"},E=s("div",{class:"list-group",id:"list-tab",role:"tablist"},[s("a",{class:"list-group-item-action active",id:"list-home-list","data-bs-toggle":"list",href:"#list-home",role:"tab","aria-controls":"list-home"},"Description"),s("a",{class:"list-group-item-action",id:"list-profile-list","data-bs-toggle":"list",href:"#list-profile",role:"tab","aria-controls":"list-profile"},"Performance"),s("a",{class:"list-group-item-action",id:"list-messages-list","data-bs-toggle":"list",href:"#list-messages",role:"tab","aria-controls":"list-messages"},"Informations complémentaires")],-1),K={class:"col-12 contents"},L={class:"tab-content",id:"nav-tabContent"},I={class:"tab-pane fade show active",id:"list-home",role:"tabpanel","aria-labelledby":"list-home-list"},Q=s("div",{class:"tab-pane fade",id:"list-profile",role:"tabpanel","aria-labelledby":"list-profile-list"},[s("ul",null,[s("li",null,"Visée à l'écran : Non"),s("li",null,"Connectivité : Wi-Fi"),s("li",null,"Etanche : Non"),s("li",null,"Type de viseur : optique, permet d'obtenir une vue directe et naturelle de la scène et ne nécessite pas d'alimentation."),s("li",null,"Connectiques : Sortie USB")])],-1),U=s("div",{class:"tab-pane fade",id:"list-messages",role:"tabpanel","aria-labelledby":"list-messages-list"},[s("ul",null,[s("li",null,"Fabriqué en : Birmanie"),s("li",null,"Garantie : 2 ans"),s("li",null,"Marque : KODAKK")])],-1),j={class:"row btn-shop"},G=s("input",{type:"number",class:"col-2 qty",id:"inputQty",name:"inputQty",value:"1"},null,-1);function M(l,t,O,R,e,c){const r=o("Navbar"),d=o("Caddy"),p=o("FooterVue");return f(),y(C,null,[a(r),a(d),s("div",x,[s("div",V,[s("div",w,[s("button",{onClick:t[0]||(t[0]=u=>c.returnBack()),class:"btn"},[B,n(" Retour")])]),s("div",F,[s("img",{src:e.article.imageUrl,alt:""},null,8,S)]),s("div",D,[s("span",q,[s("h2",null,i(e.article.name),1),s("p",null,"réf. produit: "+i(e.article._id),1)]),s("span",P,[s("p",null,i(e.article.price/100+" € "),1)]),T,s("span",A,[E,s("div",K,[s("div",L,[s("div",I,[s("p",null,i(e.article.description),1),s("span",null,[n("Lentilles disponibles pour ce modèle : "),s("p",null,i(e.article.lenses),1)])]),Q,U])])]),s("div",j,[G,s("button",{onClick:t[1]||(t[1]=u=>l.addToCaddy(e.article)),class:"btn col-6"},"Ajouter au panier")])])])]),a(p)],64)}const z=_(k,[["render",M]]);export{z as default};
