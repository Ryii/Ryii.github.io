import{ae as t,J as a,ab as z}from"./index-VZnMq_tR.js";const n=0;class r{init(e){const s=e.container,i=e.options.size,o=i.animation;o.enable&&(e.size.velocity=(e.retina.sizeAnimationSpeed??s.retina.sizeAnimationSpeed)/t*s.retina.reduceFactor,o.sync||(e.size.velocity*=a()))}isEnabled(e){return!e.destroyed&&!e.spawning&&e.size.enable&&((e.size.maxLoops??n)<=n||(e.size.maxLoops??n)>n&&(e.size.loops??n)<(e.size.maxLoops??n))}reset(e){e.size.loops=n}update(e,s){this.isEnabled(e)&&z(e,e.size,!0,e.options.size.animation.destroy,s)}}export{r as SizeUpdater};
