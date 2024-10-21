function Ccompiler(){
    return "C compiler";
}
function javacompiler(){
    return "java compiler";
}
function selectlanguage(clbk,clbk2){
    console.log("hi you have selected "+clbk());
    console.log("hi you have selected "+clbk2());
}
selectlanguage(Ccompiler,javacompiler);