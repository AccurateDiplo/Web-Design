/*let my_image=document.querySelector(`#my_image`)
console.log(my_image);
my_image.src=`./images/samurai-katana-warrior-immortal-sun-silhouette-black-1920x1080-7471.png`
console.log(my_image);*/
/*let demo=document.querySelector(`div.demo`)
let p=document.createElement(`p`)
demo.append(p)
p.setAttribute(`class`,`paragraph`)
p.innerHTML='hello-world'
let btn=document.querySelector(`button.btn`)
btn.addEventListener(`mouseenter`,function(){
   btn.style.backgroundColor=`blue` 
})
btn.addEventListener(`mouseleave`,function() {
   btn.style.backgroundColor=`crimson`
})*/
let demo=document.querySelector(`.demo`)
let btn=document.createElement(`button`)
//appending
demo.append(btn)
btn.innerText=`click me`
btn.classList=`btn`
console.log(btn);
let show=()=>{
   let show=document.createElement(`div`)
   show.setAttribute(`id`,`show`)
   demo.append(show)
   let closedd=document.createElement(`button`)
   closedd.setAttribute(`class`,`close`)
   show.append(closedd)
   closedd.innerHTML=`exit`
   closedd.addEventListener(`click`,function(){
      closedd.parentElement.remove()
   })
}
btn.addEventListener(`click`,function(){
   show()
   closedd()
})

