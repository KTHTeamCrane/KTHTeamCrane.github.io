"use strict";(self.webpackChunkjsx=self.webpackChunkjsx||[]).push([[231],{231:(o,i,e)=>{e.d(i,{StrokeColorUpdater:()=>l});var t=e(4409);class l{constructor(o){this.container=o}init(o){var i,e,l;const n=this.container,r=o.options,s=(0,t.TA)(r.stroke,o.id,r.reduceDuplicates);o.strokeWidth=(0,t.VG)(s.width)*n.retina.pixelRatio,o.strokeOpacity=(0,t.VG)(null!==(i=s.opacity)&&void 0!==i?i:1),o.strokeAnimation=null===(e=s.color)||void 0===e?void 0:e.animation;const a=null!==(l=(0,t.R5)(s.color))&&void 0!==l?l:o.getFillColor();a&&(o.strokeColor=(0,t.pz)(a,o.strokeAnimation,n.retina.reduceFactor))}isEnabled(o){const i=o.strokeAnimation,{strokeColor:e}=o;return!o.destroyed&&!o.spawning&&!!i&&(void 0!==(null===e||void 0===e?void 0:e.h.value)&&e.h.enable||void 0!==(null===e||void 0===e?void 0:e.s.value)&&e.s.enable||void 0!==(null===e||void 0===e?void 0:e.l.value)&&e.l.enable)}update(o,i){this.isEnabled(o)&&(0,t.Jv)(o.strokeColor,i)}}}}]);
//# sourceMappingURL=231.6f6fe71e.chunk.js.map