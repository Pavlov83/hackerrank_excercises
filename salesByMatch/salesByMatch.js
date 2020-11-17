/*Alex works at a clothing store. There is a large pile of socks 
that must be paired by color for sale. Given an array 
of integers representing the color of each sock, determine 
how many pairs of socks with matching colors there are.

For example, there are n=7 socks with colors ar=[1,2,1,2,1,3,2]There is one pair 
from color 1 and one of color 2 there are three odd socks.The number of pairs is two */


//Sample input      socks=[10,20,20,10,20,10,30,50];
 function sockMerchant(n, ar) {
        let socksCount = {}
        let sum=0
    for(let x of ar){

         if(socksCount[x]){
              socksCount[x]+=1
            }
        else{
              socksCount[x]=1
            }
        if(socksCount[x]%2==0)
            {
              sum+=1
            }
        }
        
        return sum
}

