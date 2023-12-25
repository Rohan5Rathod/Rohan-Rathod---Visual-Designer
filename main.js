function testPageUp() {
  var tl = gsap.timeline({ defaults: { ease: 'power1.out' } });

  tl.to(
    '.c-loader',
    { y: '-100%', duration: 0.9, pointerEvents: 'none' },
    '-=0.8'
  ).to('.c-loader:nth-child(3)', {
    y: '-2%',
    delay: -0.6,
    pointerEvents: 'none',
  });
}

// testPageUp()

function revealToSpan() {
  document.querySelectorAll('.reveal').forEach((elem) => {
    var line_parent = document.createElement('span');
    var line_child = document.createElement('span');
    line_parent.classList.add('line-parent');
    line_child.classList.add('line-child');

    line_child.innerHTML = elem.innerHTML;
    line_parent.appendChild(line_child);

    elem.innerHTML = '';
    elem.appendChild(line_parent);
  });
}

function valueSetters() {
  gsap.set('nav a', { y: '-100%', opacity: 0 });
  gsap.set('.c-title__row span .line-child', { y: '100%' });
  gsap.set('.c-title__row .c-title__svg img', { opacity: 0 });
  document.querySelectorAll('#Visual>g').forEach((e) => {
    var character = e.childNodes[1].childNodes[1];
    character.style.strokeDasharray = character.getTotalLength() + 'px';
    character.style.strokeDashoffset = character.getTotalLength() + 'px';
  });
}

function loaderAnimation() {
  var tl = gsap.timeline();

  tl.from('.c-loader .line-child span', {
    x: '100',
    duration: 1.4,
    stagger: 0.2,
    ease: Power3,
  })
    .to('.c-loader .line-parent .line-child', {
      y: '-100%',
      duration: 2,
      ease: Expo.easeInOut,
    })
    .to(
      '.c-loader',
      {
        height: '0',
        duration: 0.89,
        pointerEvents: 'none',
      },
      '-=0.2'
    )
    .to(
      '.c-loader:nth-child(2)',
      {
        height: '100%',
        top: '0%',
        duration: 0.95,
        pointerEvents: 'none',
      },
      '-=0.95'
    )
    .to(
      '.c-loader:nth-child(2)',
      {
        height: '0%',
        duration: 0.95,
        top: 0,
        pointerEvents: 'none',
        ease: 'elastic.inOut(1,0.3)',
      },
      '<'
    )
    .to(
      '.c-loaderr',
      {
        height: '0',
        top: '0%',
        duration: 0.85,
        delay: 0.5,
        pointerEvents: 'none',
        onComplete: function () {
          homePageAnimate();
        },
      },
      '<'
    );
}

function homePageAnimate() {
  var tl = gsap.timeline();

  tl.to('nav a', {
    y: 0,
    opacity: 1,
    stagger: 0.5,
  })
    .to('.c-title__row .line-parent .line-child', {
      y: 0,
      duration: 1.8,
      stagger: 0.1,
    })
    .to('.c-title__row .c-title__svg img', {
      opacity: 1,
      onComplete: function () {
        svgAnimate();
      },
    });
}

function svgAnimate() {
  gsap.to('#Visual>g>g>path, #Visual>g>g>polyline', {
    strokeDashoffset: 0,
    duration: 2,
    ease: Expo.easeInOut,
  });
}

function cardss(){
  
let timeIn = gsap.timeline({
  scrollTrigger:{
    trigger:".c-about",
    end: 'bottom 0',
    ease: 'Power0.easeNone',
    scrub: true,
  }
})
timeIn.addLabel(".c-about-cards > div:first-child");
timeIn.from(".c-about-cards > div:first-child",{
  y: '-18%',
  duration: 2.8,
  rotate: '-20deg',
});
timeIn.from(".c-about-cards > div:nth-child(2)",{
  y: '-12%',
  duration: 2.8,
  rotate: '-10deg',
})
timeIn.addLabel(".c-about-cards > div:nth-child(2)");
timeIn.from(".c-about-cards > div:nth-child(3)",{
  y: '-6%',
  duration: 2.8,
  rotate: '-5deg',
})
timeIn.addLabel(".c-about-cards > div:nth-child(3)");
}
function cardsFinal(){
  
document.addEventListener("DOMContentLoaded", function () {
  const t = document.querySelectorAll('.c-about-cards > div');
  
  gsap.registerPlugin(ScrollTrigger);

  const timeIn = gsap.timeline({
    scrollTrigger: {
      trigger: ".c-about",
      end: 'bottom 0',
      ease: 'Power0.easeNone',
      scrub: true,
    }
  });

  timeIn.from(t[0], {
    y: '-18%',
    duration: 2.8,
    rotate: '-20deg',
  });

  timeIn.from(t[1], {
    y: '-12%',
    duration: 2.8,
    rotate: '-10deg',
  }, "<"); // "<" indicates the animation should start right after the previous one

  timeIn.from(t[2], {
    y: '-6%',
    duration: 2.8,
    rotate: '-5deg',
  }, "<"); // "<" indicates the animation should start right after the previous one
});
}
revealToSpan();
valueSetters();
loaderAnimation();
cardsFinal();
