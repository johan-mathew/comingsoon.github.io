// anime({
//     targets:'#Right-Cog-1',
//     rotate:'1turn',
//     easing:'linear',
//     loop:true,
//     duration:5000
// })
// anime({
//     targets:'#Right-Cog-2',
//     rotate:'1turn',
//     easing:'linear',
//     loop:true,
//     duration:5000
// })

// anime({
//     targets:'#Right-Cog-3-Group',
//     rotate:'1turn',
//     easing:'linear',
//     loop:true,
//     duration:5000
// })
// anime({
//     targets:'#Left-Cog-1',
//     rotate:'1turn',
//     easing:'linear',
//     loop:true,
//     duration:5000
// })
// anime({
//     targets:'#Left-Cog-2',
//     rotate:'1turn',
//     easing:'linear',
//     loop:true,
//     duration:5000
// })

// anime({
//     targets:'#Left-Cog-3-Group',
//     rotate:'1turn',
//     easing:'linear',
//     loop:true,
//     duration:5000
// })
// anime({
//     targets:'#Center-Gears-Group',
//     rotate:'1turn',
//     easing:'linear',
//     loop:true,
//     duration:5000
// })
// anime({
//     targets:'#Center-Boundary-Sectors-Group',
//     rotate:'1turn',
//     easing:'linear',
//     loop:true,
//     duration:5000,
//     direction:'reverse'
// })
// anime({
//     targets:'#Waveform-Path',
//     rotate:'1turn',
//     easing:'linear',
//     loop:true,
//     duration:5000,
//     direction:'reverse'
// })
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
gsap.set("#Right-Cog-3-Group",{transformOrigin: "47% 49%"});
gsap.to("#Right-Cog-3-Group",{duration: 5, rotation:360,repeat:-1,ease:'linear'});
gsap.set("#Left-Cog-3-Group",{transformOrigin: "47% 49%"});
gsap.to("#Left-Cog-3-Group",{duration: 5, rotation:360,repeat:-1,ease:'linear'});
gsap.set("#Center-Gears-Group",{transformOrigin: "50% 50%"});
gsap.to("#Center-Gears-Group",{duration: 7, rotation:-360,repeat:-1,ease:'linear'});
gsap.set("#Right-Cog-1",{transformOrigin: "47% 49%"});
gsap.to("#Right-Cog-1",{duration: 9, rotation:360,repeat:-1,ease:'linear'});
gsap.set("#Left-Cog-1",{transformOrigin: "47% 49%"});
gsap.to("#Left-Cog-1",{duration: 9, rotation:360,repeat:-1,ease:'linear'});
gsap.set("#Right-Cog-2",{transformOrigin: "47% 49%"});
gsap.to("#Right-Cog-2",{duration: 4, rotation:360,repeat:-1,ease:'linear'});
gsap.set("#Left-Cog-2",{transformOrigin: "47% 49%"});
gsap.to("#Left-Cog-2",{duration: 4, rotation:360,repeat:-1,ease:'linear'});
gsap.to("#Right-Cog-3-Circuit",{duration:1,opacity:0,repeat:-1,repeatDelay:5,yoyo:true });
gsap.to("#Left-Cog-3-Circuit",{duration:1,opacity:0,repeat:-1,repeatDelay:5,yoyo:true });
gsap.to("#Center-Cog-Circuit",{duration:1,opacity:0,repeat:-1,repeatDelay:2,yoyo:true });
gsap.set("#Waveform-Path",{transformOrigin: "50% 50%"});
gsap.to("#Waveform-Path",{duration: 7, rotation:-360,repeat:-1,ease:'linear'});