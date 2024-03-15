function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-Ba2z93sl.js","assets/index-VZnMq_tR.js","assets/index-w5WROUXu.css","assets/index-BgjI3Kdu.js","assets/index-rdGoqsix.js","assets/index-BrdzUZil.js","assets/index--vERkmk1.js","assets/index-CZu2ocl1.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-VZnMq_tR.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-Ba2z93sl.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-BgjI3Kdu.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-rdGoqsix.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-BrdzUZil.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index--vERkmk1.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-CZu2ocl1.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
