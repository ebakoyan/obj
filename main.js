MyData={
    login:"",
    Password:"",
    input(a,b){
        this.login=a;
        this.Password=b;
    },
    log(){
        console.log(this.login)
    }
};
let a =[];
const n=20;
for(i=0;i<n;++i){
    a[i]=MyData;
    a[i].input(`Login ${i}`,`Password ${i}`)
}
for(i=0;i<n;++i){
    a[i].log();
}

