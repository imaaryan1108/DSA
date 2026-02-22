var isAnagram = function(s, t) {
    if(s.length !== t.length) return false
    
    const map = new Map()
    for(let i=0;i<s.length;i++){
        const strVal =  s[i]
        if(map.has(strVal)){
            let currentVal = map.get(strVal)
            map.set(strVal,currentVal+1)
        }else{
            map.set(strVal,1)
        }
    }
     for(let i=0;i<s.length;i++){
        const strVal2 = t[i]
        if(map.has(strVal2)){
            let currentVal = map.get(strVal2)
            map.set(strVal2,currentVal-1)
        }else{
            map.set(strVal2,1)
        }
    }
    for(let i=0;i<s.length;i++){
        const val = map.get(s[i])
        if(val!== 0) return false
    }
    return true

};