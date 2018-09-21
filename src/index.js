/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    var c=0,c1=0,c2=0,c3=0,t=0,cou_c=0;cou_c1=0;
    var cou=[];
    var f=preferences.length;
    for (var j=0;j<f;j++) {cou[j]=0;preferences[j]=preferences[j]-1;}
    for (var i=0;i<f;i++)  
    {   
        c2=0;
        if (cou[i]===1) c2++;
        cou_c=cou[i];
        cou[i]=1;                       
        if (preferences[i]<0) continue;
        c=preferences[i];                
        if (cou[c]===1) c2++;
        cou_c1=cou[c];
        cou[c]=1;
        c1=preferences[c];            
        if (preferences[c]<0) continue; 
        if (cou[c1]===1) c2++;
        if (c2===3) 
        {
            c2=0;
            c3++; 
            continue;
        }
        if (preferences[i]===i) continue; 
        if (preferences[c1]<0) continue; 
        if (preferences[c1]===i) {t++;cou[c1]=1;}
        else {cou[i]=cou_c;cou[c]=cou_c1;}  
        c2=0;               
                        
    }
    return t;
};
