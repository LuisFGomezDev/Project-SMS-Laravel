$((function(){"use strict";let e=document.querySelectorAll(".bs-stepper"),t=$(".select2"),n=document.querySelector(".modern-wizard-example");if(void 0!==typeof e&&null!==e)for(let t=0;t<e.length;++t)e[t].addEventListener("show.bs-stepper",(function(e){let t=e.detail.indexStep,n=$(e.target).find(".step").length-1,o=$(e.target).find(".step");for(let e=0;e<t;e++){o[e].classList.add("crossed");for(let e=t;e<n;e++)o[e].classList.remove("crossed")}if(0===e.detail.to){for(let e=t;e<n;e++)o[e].classList.remove("crossed");o[0].classList.remove("crossed")}}));if(t.each((function(){let e=$(this);e.wrap('<div class="position-relative"></div>'),e.select2({dropdownAutoWidth:!0,width:"100%",dropdownParent:e.parent()})})),void 0!==typeof n&&null!==n){let e=new Stepper(n,{linear:!1});$(n).find(".btn-next").on("click",(function(){e.next()})),$(n).find(".btn-prev").on("click",(function(){e.previous()}))}}));
