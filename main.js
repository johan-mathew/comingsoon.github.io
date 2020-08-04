function FadeOut(){
  document.getElementById('AboutExcel').classList.add('fade-out');
  document.getElementById('AboutExcel').classList.remove('fade-in');
}
function FadeIn(){
  document.getElementById('AboutExcel').classList.remove('fade-out');
  document.getElementById('AboutExcel').classList.add('fade-in');

}
anime({
    targets: '#Right-Light-Stroke-Group>path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: true
  });
  anime({
    targets: '#Left-Light-Stroke-Group>path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: true
  });
  anime({
    targets: '#Right-Dark-Stroke-Group>polyline',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 2500,
    delay: function(el, i) { return i * 150 },
    direction: 'alternate',
    loop: true
  });
  anime({
    targets: '#Left-Dark-Stroke-Group>polyline',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 2500,
    delay: function(el, i) { return i * 150 },
    direction: 'alternate',
    loop: true
  });
  anime({
    targets: '#Left-Circles-Grey-Fill-Big-Group>circle',
    easing: 'easeInOutSine',
    duration: 500,
    opacity:0,
    delay: function(el, i) { return i * 150 },
    direction: 'alternate',
    loop: true
  });
  anime({
    targets: '#Right-Circles-Grey-Fill-Big-Group>circle',
    easing: 'easeInOutSine',
    duration: 500,
    opacity:0,
    delay: function(el, i) { return i * 150 },
    direction: 'alternate',
    loop: true
  });
  

  anime({
    targets: '#Left-Circles-Grey-Fill-Small-Group>circle',
    easing: 'easeInOutSine',
    duration: 500,
    opacity:0,
    delay: function(el, i) { return i * 150 },
    direction: 'alternate',
    loop: true
  });
  anime({
    targets: '#Right-Circles-Grey-Fill-Small-Group>circle',
    easing: 'easeInOutSine',
    duration: 500,
    opacity:0,
    delay: function(el, i) { return i * 150 },
    direction: 'alternate',
    loop: true
  });
  anime({
    targets: '#Left-Circles-White-Fill-Grey-Stroke-Group>circle',
    easing: 'easeInOutSine',
    duration: 500,
    opacity:0,
    delay: function(el, i) { return i * 150 },
    direction: 'alternate',
    loop: true
  });
  anime({
    targets: '#Right-Circles-White-Fill-Grey-Stroke-Group>circle',
    easing: 'easeInOutSine',
    duration: 500,
    opacity:0,
    delay: function(el, i) { return i * 150 },
    direction: 'alternate',
    loop: true
  });
  anime({
    targets: '#Left-Top-Circles-Group>circle',
    easing: 'easeInOutSine',
    duration: 500,
    opacity:0,
    delay: function(el, i) { return i * 150 },
    direction: 'alternate',
    loop: true
  });
  anime({
    targets: '#Right-Top-Circles-Group>circle',
    easing: 'easeInOutSine',
    duration: 500,
    opacity:0,
    delay: function(el, i) { return i * 150 },
    direction: 'alternate',
    loop: true
  });
  anime({
    targets: '#Left-Top-Circles-Group>circle',
    easing: 'easeInOutSine',
    duration: 500,
    opacity:0,
    delay: function(el, i) { return i * 150 },
    direction: 'alternate',
    loop: true
  });

gsap.set("#Right-Cog-3-Group",{transformOrigin: "47% 49%"});
gsap.to("#Right-Cog-3-Group",{duration: 9, rotation:360,repeat:-1,ease:'linear'});
gsap.set("#Left-Cog-3-Group",{transformOrigin: "47% 49%"});
gsap.to("#Left-Cog-3-Group",{duration: 9, rotation:360,repeat:-1,ease:'linear'});
gsap.set("#Center-Gears-Group",{transformOrigin: "47% 49%"});
gsap.to("#Center-Gears-Group",{duration: 12, rotation:-360,repeat:-1,ease:'linear'});
gsap.set("#Right-Cog-1",{transformOrigin: "47% 49%"});
gsap.to("#Right-Cog-1",{duration: 11, rotation:360,repeat:-1,ease:'linear'});
gsap.set("#Left-Cog-1",{transformOrigin: "47% 49%"});
gsap.to("#Left-Cog-1",{duration:11, rotation:360,repeat:-1,ease:'linear'});
gsap.set("#Right-Cog-2",{transformOrigin: "47% 49%"});
gsap.to("#Right-Cog-2",{duration: 6, rotation:360,repeat:-1,ease:'linear'});
gsap.set("#Left-Cog-2",{transformOrigin: "47% 49%"});
gsap.to("#Left-Cog-2",{duration: 6, rotation:360,repeat:-1,ease:'linear'});
gsap.to("#Right-Cog-3-Circuit",{duration:1,opacity:0,repeat:-1,repeatDelay:5,yoyo:true });
gsap.to("#Left-Cog-3-Circuit",{duration:1,opacity:0,repeat:-1,repeatDelay:5,yoyo:true });
gsap.to("#Center-Cog-Circuit",{duration:1,opacity:0,repeat:-1,repeatDelay:2,yoyo:true });

var timeline = anime.timeline({
  duration:1000,
  easing:'easeInSine',
  loop:true
});
timeline.add({
  targets:'#Excel-Title-Group',
  opacity:1
})
.add({
  targets:'#Excel-Title-Group' ,
  opacity:0,
  delay:4000
})
.add({
  targets:'#Coming-Soon-Group',
  opacity:1
})
.add({
  targets:'#Coming-Soon-Group',
  opacity:0,
  delay:4000
})