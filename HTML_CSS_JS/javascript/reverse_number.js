var num =12345;
var rev = 0;
while(num!=0){
    temp = num%10;
    rev = (rev*10)+temp;
    num = parseInt(num/10);
}
console.log(rev);