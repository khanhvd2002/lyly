import{a as g,b as _,c as k,d as w,V as y,_ as b}from"./VAlert-2d363162.js";import"./VAvatar-89ad20fc.js";import{_ as v,ah as x,C,y as T,o as c,f as F,d as e,w as t,P as r,i as f,e as I,j as S,L as j,p as B,l as N,h as i}from"./index-d8bdc496.js";import{r as $}from"./user-c43492e4.js";import{V as L,c as M,d as U,a as P}from"./VCard-1e8bcd02.js";import{V as m}from"./VImg-d0ac8ec7.js";import{V as Y}from"./VForm-85af3995.js";import{V as A}from"./VRow-a0998b98.js";import{V as p}from"./VCol-2f8f9c79.js";import{V as u}from"./VTextField-952090ec.js";import"./createSimpleFunctional-0b4fdfea.js";import"./VInput-bf41ae86.js";import"./index-3dc29f8e.js";import"./VCounter-f846fe82.js";const h=n=>(B("data-v-2540e6d1"),n=n(),N(),n),D={class:"auth-wrapper d-flex align-center justify-center pa-4"},E=h(()=>i("div",{class:"d-flex"},[i("img",{height:"100",width:"100",src:b,alt:""})],-1)),O=h(()=>i("div",{class:"d-flex align-center justify-space-between flex-wrap mt-1 mb-4"},[i("a",{class:"ms-2 mb-1",href:"/login"}," Có tài khoản, đăng nhập ")],-1)),R={data(){return{registerForm:{username:"",password:"",password_confirmation:""},error:!1}},mounted(){},methods:{handleSubmit(){let n=this.$loading.show();$(this.registerForm).then(d=>{this.error=!1,this.$moshaToast("Đăng ký tài khoản thành công",{type:"success",transition:"slide",timeout:3e3})}).catch(d=>{this.error=!0}),n.hide()}}},q=Object.assign(R,{__name:"register",setup(n){const d=x(),V=C(()=>d.global.name.value==="light"?g:_),a=T(!1);return(o,s)=>(c(),F("div",D,[e(L,{class:"auth-card pa-4 pt-7","max-width":"448"},{default:t(()=>[e(M,{class:"justify-center"},{prepend:t(()=>[E]),default:t(()=>[e(U,{class:"font-weight-semibold text-2xl text-uppercase"},{default:t(()=>[f(" LYLY Store ")]),_:1})]),_:1}),e(P,null,{default:t(()=>[e(Y,null,{default:t(()=>[e(A,null,{default:t(()=>[e(p,{cols:"12"},{default:t(()=>[e(u,{modelValue:o.registerForm.username,"onUpdate:modelValue":s[0]||(s[0]=l=>o.registerForm.username=l),label:"Tên đăng nhập",type:"text"},null,8,["modelValue"])]),_:1}),e(p,{cols:"12"},{default:t(()=>[e(u,{modelValue:o.registerForm.password,"onUpdate:modelValue":s[1]||(s[1]=l=>o.registerForm.password=l),label:"Mật khẩu",type:r(a)?"text":"password","append-inner-icon":r(a)?"mdi-eye-off-outline":"mdi-eye-outline","onClick:appendInner":s[2]||(s[2]=l=>a.value=!r(a))},null,8,["modelValue","type","append-inner-icon"])]),_:1}),e(p,{cols:"12"},{default:t(()=>[e(u,{modelValue:o.registerForm.password_confirmation,"onUpdate:modelValue":s[3]||(s[3]=l=>o.registerForm.password_confirmation=l),label:"Nhập lại mật khẩu",type:r(a)?"text":"password","append-inner-icon":r(a)?"mdi-eye-off-outline":"mdi-eye-outline","onClick:appendInner":s[4]||(s[4]=l=>a.value=!r(a))},null,8,["modelValue","type","append-inner-icon"]),o.error?(c(),I(y,{key:0,style:{"margin-top":"6px"},color:"error",text:"Sai tài khoản / mật khẩu"})):S("",!0),O,e(j,{block:"",onClick:o.handleSubmit},{default:t(()=>[f(" Đăng kí ngay ")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(m,{class:"auth-footer-start-tree d-none d-md-block",src:r(k),width:250},null,8,["src"]),e(m,{src:r(w),class:"auth-footer-end-tree d-none d-md-block",width:350},null,8,["src"]),e(m,{class:"auth-footer-mask d-none d-md-block",src:r(V),width:"400"},null,8,["src"])]))}}),oe=v(q,[["__scopeId","data-v-2540e6d1"]]);export{oe as default};