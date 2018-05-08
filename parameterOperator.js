
  function addCalculation(a,b,c,d)
  {
         return a+b+c+d;
  }

 var sum1 = addCalculation(15,18,25,30);
 
 console.log(sum1);
 
 var ages = [25,28,22,24,34];
 
 var sum2 = addCalculation(...ages)
 
 console.log(sum2);
 
 var batsman = ['rohith','dhawan','kohili','dhoni','raina','hardik'];
 var bowler =  ['chahal','bumrah','harbajan','hardik'];
 
 for( i=0;i<=batsman.length;i++ )
 { 
     if(i=0)
     {
         var playerOfTheMatch = batsman[0];
     }
 }
 
 
 var teamIndia = ['man of the match :'playerOfTheMatch, ...batsman, ...bowler];
 
 console.log(teamIndia);
