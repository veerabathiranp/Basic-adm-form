function getrd(t1,t2)
{
    var rd;
    if(t1.checked==true)
        rd=t1.value;
    else if(t2.checked==true)
        rd=t2.value
    else
        rd="Null"
    return rd;
}
function disp()
{
    var a=document.getElementById("tname").value;
    var b= document.getElementById("tfname").value;
    var e=document.getElementById("phone").value;
    var f=document.getElementById("taddress").value;
    var g=document.getElementById("temp").value;
    //alert(g);
    var r1=document.getElementById("rd1");
    var r2=document.getElementById("rd2");
    var c=getrd(r1,r2);
    
    var dd=document.getElementById("specalization");
    var d= dd.options[dd.selectedIndex].value;
    
    document.getElementById("outp").innerText="Name: "+a+"\nFather's Name: "+b+"\nGender: "+c+"\nSpecialization: "+d+"\nPhone no: "+e+"\nAddress: "+f+"\nEmail: "+g;    
}

/*function passval()
{
    var a=document.getElementById("tname").value;
    var b= document.getElementById("tfname").value;
    var e=document.getElementById("phone").value;
    var f=document.getElementById("taddress").value;
    var g=document.getElementById("temp").value;
    //alert(g);
    document.getElementById("resp").innerText="Name: "+a+"\nFather's Name: "+b+"\nPhone no: "+e+"\nAddress: "+f+"\nEmail: "+g;    
}*/



function passval()
{
    var name1=document.getElementById("tname").value;
    localStorage.setItem("a1",name1);
    var b= document.getElementById("tfname").value;
    localStorage.setItem("b1",b);
    var e=document.getElementById("phone").value;
    localStorage.setItem("e1",e);
    var f=document.getElementById("taddress").value;
    localStorage.setItem("f1",f);
    var g=document.getElementById("temp").value;
    localStorage.setItem("g1",g);

    var r1=document.getElementById("rd1");
    var r2=document.getElementById("rd2");
    var c=getrd(r1,r2);
    localStorage.setItem("c1",c);

    var dd=document.getElementById("specalization");
    var d= dd.options[dd.selectedIndex].value;
    localStorage.setItem("d1",d);
}

function dispres()   
{
    var a2=localStorage.getItem("a1");
    var b2=localStorage.getItem("b1");
    var c2=localStorage.getItem("c1");
    var d2=localStorage.getItem("d1");
    var e2=localStorage.getItem("e1");
    var f2=localStorage.getItem("f1");
    var g2=localStorage.getItem("g1");
    
    document.getElementById("resp").innerText ="Name: "+a2+"\nFather's Name: "+b2+"\nGender: "+c2+"\nSpecialization: "+d2+"\nPhone no: "+e2+"\nAddress: "+f2+"\nEmail: "+g2; 
}


/*
function preview() {
   var pname= document.getElementById("tname").value;
   //var fname= document.getElementById("tfname").value;
   //var Gender= document.getElementById("").value;
   //var spz= document.getElementById("specalization").value;
   //var phone= document.getElementById("pno").value;
   v//ar address= document.getElementById("taddress").value;
   //var email=docmen.getElementById("temail").value;
   result(pname);
}

function result(a){
    //var z=a+b;
    //var z= "Name:"+a+"\n"+"Father's name"+b+"\n";
    //var p="phone No:"+e+"\n"+"Address:"+f+"\n";
    //var s="Email"+g+"\n";
    document.getElementById("outpu").innerText=a; //+"\n"+"Father's name"+b+"\n";
}

*/