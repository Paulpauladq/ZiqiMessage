(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{Yj9t:function(t,n,e){"use strict";e.r(n),e.d(n,"AuthModule",(function(){return M}));var i=e("ofXK"),a=e("3Pt+"),o=e("rhD1"),s=e("tyNb"),r=e("fXoL"),c=e("qXBG"),u=e("Wp6s"),b=e("Xa2L"),m=e("kmnG"),l=e("qFsG"),d=e("bTqV");function f(t,n){1&t&&r.Lb(0,"mat-spinner")}function p(t,n){1&t&&(r.Pb(0,"mat-error"),r.tc(1,"Please enter a valid email."),r.Ob())}function g(t,n){1&t&&(r.Pb(0,"mat-error"),r.tc(1,"Please enter a valid password."),r.Ob())}function h(t,n){1&t&&(r.Pb(0,"button",9),r.tc(1,"Login"),r.Ob())}function I(t,n){if(1&t){const t=r.Qb();r.Pb(0,"form",2,3),r.Wb("submit",(function(){r.kc(t);const n=r.ic(1);return r.ac().onLogin(n)})),r.Pb(2,"mat-form-field"),r.Lb(3,"input",4,5),r.sc(5,p,2,0,"mat-error",0),r.Ob(),r.Pb(6,"mat-form-field"),r.Lb(7,"input",6,7),r.sc(9,g,2,0,"mat-error",0),r.Ob(),r.sc(10,h,2,0,"button",8),r.Ob()}if(2&t){const t=r.ic(4),n=r.ic(8),e=r.ac();r.zb(5),r.fc("ngIf",t.invalid),r.zb(4),r.fc("ngIf",n.invalid),r.zb(1),r.fc("ngIf",!e.isLoading)}}function P(t,n){1&t&&r.Lb(0,"mat-spinner")}function v(t,n){1&t&&(r.Pb(0,"mat-error"),r.tc(1,"Please enter a valid email."),r.Ob())}function L(t,n){1&t&&(r.Pb(0,"mat-error"),r.tc(1,"Please enter a valid password."),r.Ob())}function w(t,n){1&t&&(r.Pb(0,"button",9),r.tc(1,"Signup"),r.Ob())}function O(t,n){if(1&t){const t=r.Qb();r.Pb(0,"form",2,3),r.Wb("submit",(function(){r.kc(t);const n=r.ic(1);return r.ac().onSignup(n)})),r.Pb(2,"mat-form-field"),r.Lb(3,"input",4,5),r.sc(5,v,2,0,"mat-error",0),r.Ob(),r.Pb(6,"mat-form-field"),r.Lb(7,"input",6,7),r.sc(9,L,2,0,"mat-error",0),r.Ob(),r.sc(10,w,2,0,"button",8),r.Ob()}if(2&t){const t=r.ic(4),n=r.ic(8),e=r.ac();r.zb(5),r.fc("ngIf",t.invalid),r.zb(4),r.fc("ngIf",n.invalid),r.zb(1),r.fc("ngIf",!e.isLoading)}}const y=[{path:"login",component:(()=>{class t{constructor(t){this.authService=t,this.isLoading=!1}ngOnInit(){this.authStatusSub=this.authService.getAuthStatusListener().subscribe(t=>{this.isLoading=!1})}onLogin(t){t.invalid||(this.isLoading=!0,this.authService.login(t.value.email,t.value.password))}ngOnDestroy(){this.authStatusSub.unsubscribe()}}return t.\u0275fac=function(n){return new(n||t)(r.Kb(c.a))},t.\u0275cmp=r.Eb({type:t,selectors:[["ng-component"]],decls:3,vars:2,consts:[[4,"ngIf"],[3,"submit",4,"ngIf"],[3,"submit"],["loginForm","ngForm"],["matInput","","name","email","ngModel","","type","email","placeholder","E-Mail","required","","email",""],["emailInput","ngModel"],["type","password","name","password","ngModel","","matInput","","placeholder","Password","required",""],["passwordInput","ngModel"],["mat-raised-button","","color","accent","type","submit",4,"ngIf"],["mat-raised-button","","color","accent","type","submit"]],template:function(t,n){1&t&&(r.Pb(0,"mat-card"),r.sc(1,f,1,0,"mat-spinner",0),r.sc(2,I,11,3,"form",1),r.Ob()),2&t&&(r.zb(1),r.fc("ngIf",n.isLoading),r.zb(1),r.fc("ngIf",!n.isLoading))},directives:[u.a,i.k,b.b,a.p,a.j,a.k,m.c,l.a,a.a,a.i,a.l,a.n,a.b,m.b,d.b],styles:["mat-form-field[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{width:100%}mat-spinner[_ngcontent-%COMP%]{margin:auto}"]}),t})()},{path:"signup",component:(()=>{class t{constructor(t){this.authService=t,this.isLoading=!1}ngOnInit(){this.authStatusSub=this.authService.getAuthStatusListener().subscribe(t=>{this.isLoading=!1})}onSignup(t){t.invalid||(this.isLoading=!0,this.authService.createUser(t.value.email,t.value.password))}ngOnDestroy(){this.authStatusSub.unsubscribe()}}return t.\u0275fac=function(n){return new(n||t)(r.Kb(c.a))},t.\u0275cmp=r.Eb({type:t,selectors:[["ng-component"]],decls:3,vars:2,consts:[[4,"ngIf"],[3,"submit",4,"ngIf"],[3,"submit"],["signupForm","ngForm"],["matInput","","name","email","ngModel","","type","email","placeholder","E-Mail","required","","email",""],["emailInput","ngModel"],["type","password","name","password","ngModel","","matInput","","placeholder","Password","required",""],["passwordInput","ngModel"],["mat-raised-button","","color","accent","type","submit",4,"ngIf"],["mat-raised-button","","color","accent","type","submit"]],template:function(t,n){1&t&&(r.Pb(0,"mat-card"),r.sc(1,P,1,0,"mat-spinner",0),r.sc(2,O,11,3,"form",1),r.Ob()),2&t&&(r.zb(1),r.fc("ngIf",n.isLoading),r.zb(1),r.fc("ngIf",!n.isLoading))},directives:[u.a,i.k,b.b,a.p,a.j,a.k,m.c,l.a,a.a,a.i,a.l,a.n,a.b,m.b,d.b],styles:["mat-form-field[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{width:100%}mat-spinner[_ngcontent-%COMP%]{margin:auto}"]}),t})()}];let S=(()=>{class t{}return t.\u0275mod=r.Ib({type:t}),t.\u0275inj=r.Hb({factory:function(n){return new(n||t)},imports:[[s.e.forChild(y)],s.e]}),t})(),M=(()=>{class t{}return t.\u0275mod=r.Ib({type:t}),t.\u0275inj=r.Hb({factory:function(n){return new(n||t)},imports:[[i.c,o.a,a.g,S]]}),t})()}}]);