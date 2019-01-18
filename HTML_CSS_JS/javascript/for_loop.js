for(i=1;i<=100;i++){
    if(i%2!=0)
    console.log(i);
}

//nested forloop
for(i=1;i<=3;i++){
    console.log(i);
    for(j=1;j<=10;j++){
        console.log(j);
    }
}

//loop controlling statements
for(i=0;i<10;i++){
    if(i==5){
        break;
    }

    console.log(i);
}