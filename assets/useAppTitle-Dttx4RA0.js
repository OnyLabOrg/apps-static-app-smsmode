const s=()=>({getShortTitle:(r,n=10)=>{if(!r)return r;const t=r.split(" ");if(t.length===1)return r;const e=t.slice(0,2).join(" ");return e.length<=n?e:t[0]}});export{s as u};
