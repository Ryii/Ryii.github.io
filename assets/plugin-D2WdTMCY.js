function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LinksPlugin-B6zIcQu4.js","assets/index-VZnMq_tR.js","assets/index-w5WROUXu.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-VZnMq_tR.js";async function r(i,n=!0){const{LinksPlugin:t}=await o(()=>import("./LinksPlugin-B6zIcQu4.js"),__vite__mapDeps([0,1,2])),a=new t;await i.addPlugin(a,n)}export{r as loadLinksPlugin};
