AFRAME.registerComponent("play-on-click", {
schema:{
    isplaying:{type:"boolean",default:false}
},
init:function(){
this.videoe1=this.el.getAttribute("material").src
this.onclick=this.onclick.bind(this)


},
play:function(){
    window.addEventListener("click",this.onclick)
},
  onclick:function(evt){
  if(!this.videoe1){
    return
  } g
 var isplaying=this.el.getAttribute("play-on-click").isplaying
this.el.object3D.visible=true
if(!isplaying){
    this.el.setAttribute("play-on-click",{isplaying:true})
    this.videoe1.play()
}
else{
    this.el.setAttribute("play-on-click",{isplaying:false})
    this.videoe1.pause()
}
  }
});
