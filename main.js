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