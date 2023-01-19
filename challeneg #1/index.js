"use strict";
const average=function(arr)
{let sum=0
    for(let i=0;i<arr.length;i++)
    {
      sum+=arr[i];
    }
    return sum/arr.length;
}
const max=function(arr)
{let max=arr[0]
    for(let i=0;i<arr.length;i++)
    {if(arr[i]>max)
        {
            max=arr[i];
        }
      
    }
    return max;
}
const min=function(arr)
{let min=arr[0]
    for(let i=0;i<arr.length;i++)
    {if(arr[i]<min)
        {
            max=arr[i];
        }
      
    }
    return min;
}
function winner(){
    const Dolpins=[97,112,101];
    const Koalas=[89,91,110];
    const Daverage=average(Dolpins);
    const Kaverage=average(Koalas);
    const Dmax=max(Dolpins);
    const Kmin=min(Koalas);
    const Dmin=min(Dolpins);
    const Kmax=max(Koalas);
        if(Daverage>Kaverage)
        { 
           if(Daverage>=100 &&  Dmax>Kmax)
           return`Dolpins wins trophy` 
        }
        else if(Daverage<Kaverage )
        { 
           if(Kaverage>=100 &&  Dmax<Kmax)
           return`Koalas wins trophy` 
        }
        else if(Daverage==Kaverage && Kmax>=100 && Dmax>=100)
        {
            return`Draw wins trophy` 
        }

    return `non one wins`
}
console.log(winner(),'winner');