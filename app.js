let apnelog=[
    {Name:"Sonakshi",Age:"23", Address:"Pune", Marks:{physics:63,chemistry:78,maths:87}},
    {Name:"Swastik",Age:"26",Address:"Kolkata",Marks:{physics:60,chemistry:87,maths:43}},
    {Name:"Vrijraj",Age:"25",Address:"Rajasthan",Marks:{physics:45,chemistry:23,maths:20}},
    {Name:"varsha",Age:"24",Address:"Banaras",Marks:{physics:87,chemistry:87,maths:90}}
]
document.getElementById('AddDataBtn').addEventListener('click',addData)

function addData(){
    let name= document.getElementById('name').value
    let age= parseInt (document.getElementById('age').value)
    let address= document.getElementById('address').value
    let p1 = parseInt (document.getElementById('physics').value)
    let c1 = parseInt (document.getElementById('chemistry').value)
    let m1 = parseInt (document.getElementById('maths').value)

    if(name.length>0){
    let datatoadd = {
        Name: name,
        Age: age,
        Address: address,
        Marks:{
            physics:p1,
            chemistry: c1,
            maths:m1
            }

        }
    apnelog.unshift(datatoadd)
    printdata()
    }
    else{
        alert("Add some data") 
    }

}
printdata()
function printdata(){
    document.getElementById('res').innerHTML=``
    for(let i=0;i<apnelog.length;i++){
        document.getElementById('res').innerHTML+=`
            <tr>
                <td>${apnelog[i].Name}</td>
                <td>${apnelog[i].Age}</td>
                <td>${apnelog[i].Address}</td>
                <td>${apnelog[i].Marks.physics}</td>
                <td>${apnelog[i].Marks.chemistry}</td>
                <td>${apnelog[i].Marks.maths}</td>
                <td>
                    ${apnelog[i].Marks.physics+apnelog[i].Marks.chemistry+apnelog[i].Marks.maths}
                </td>
                <td>
                ${((apnelog[i].Marks.physics+apnelog[i].Marks.chemistry+apnelog[i].Marks.maths)/3).toFixed(2)}
                </td>
                <td>
                ${getstatus(((apnelog[i].Marks.physics+apnelog[i].Marks.chemistry+apnelog[i].Marks.maths)/3).toFixed(2))}
                </td>
                <td>
                <button onClick="deleteData(${i})"> Delete</button>
                </td>
                </tr> 


        `
    }
}
function getstatus(x){
    if(x>85){
        return "very good"
    }
    else if(x>60&& x<85){
        return "good"
    }
    else if(x>40&& x<50){
        return "try hard"
    }
    else{
        return "fail"
    }
}

function deleteData(index){
    if (confirm('Do you really want to delete')){
        apnelog.splice(index,1)
        printdata()
    }
}