let counter=0;
let dicescore=[];
let attempts=1
let overallscore=0;

function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

document.getElementById("profileformimg").addEventListener('click',()=>{
    try{
        if(document.getElementById('profileform').className=='main-form-inactive'){
            document.getElementById('profileform').className='main-form-active'
        }
        else if(document.getElementById('profileform').className=='main-form-active'){
            document.getElementById('profileform').className='main-form-inactive'
        }


    }catch(e){
        console.log(e)
    }
})

document.getElementById("profilecoupon").addEventListener('click',()=>{
    try{
        if(document.getElementById('profileform').className=='main-form-disabled' &&
         document.getElementById('profile').className=='main-form-disabled' && 
          document.getElementById('dice').className=='main-form-disabled' && 
           document.getElementById('coupon').className!='main-form-active'){
            document.getElementById('coupon').className='main-form-active';
            document.getElementById('couponid').innerHTML=`Coupon : ${makeid(12)}`
         }
       

    }catch(e){
        console.log(e)
    }
})

document.getElementById("profiledice").addEventListener('click',()=>{
    if(document.getElementById("dice").className!='main-form-disabled'){
        document.getElementById('profile').className='main-form-disabled';
    document.getElementById('dice').className='main-form-active';
    }
})


document.getElementById("diceroll").addEventListener('click',()=>{
    
    document.getElementById('dice').className='main-form-active';
    let score = Math.floor((Math.random() * 6) + 1);
    counter=counter+1;
    overallscore+=score;
    dicescore.push(score)
    document.getElementById('dicescore').innerHTML=`Score ${dicescore.join(',')}`
    document.getElementById('dicerollcounter').innerHTML=`trial ${counter}/3`
    if(dicescore.length==3 && overallscore>=10){
        document.getElementById("dice").className='main-form-disabled';
    alert(`congratulations your score is ${overallscore} and that gets you a coupon in next step`)
    }
    if(dicescore.length==3 && overallscore<10 && attempts==1){
        attempts=2
        dicescore=[]
        overallscore=0
        counter=0
        alert(`sorry ,but you have one more chance to try `)
        document.getElementById('dicescore').innerHTML=`Score ${dicescore.join(',')}`
        document.getElementById('dicerollcounter').innerHTML=`trial ${counter}/3`
        }
        if(dicescore.length==3 && overallscore<10 && attempts==2){

            alert(`sorry, better luck next time `)
            location.reload();
            }
   

})


document.getElementById("profileimg").addEventListener('click',()=>{
    try{
        if(document.getElementById('profileform').className=='main-form-disabled' &&
         document.getElementById('profile').className!='main-form-disabled'){
        let name=localStorage.getItem('profilename')
        let username=localStorage.getItem('profileusername')
        document.getElementById('profilename').innerHTML=`Name: ${name}`;
        document.getElementById('profileusername').innerHTML=`Username: ${username}`;
        if(document.getElementById('profile').className=='main-form-inactive'){
            document.getElementById('profile').className='main-form-active'
        }
        else if(document.getElementById('profile').className=='main-form-active'){
            document.getElementById('profile').className='main-form-inactive'
        }
    }

    }catch(e){
        console.log(e)
    }
})



document.getElementById("save_profile").addEventListener('click',()=>{
    try{
        let name=document.getElementsByName('name')[0].value
        let username=document.getElementsByName('username')[0].value
        let email=document.getElementsByName('email')[0].value
       localStorage.setItem('profilename',name);
       localStorage.setItem('profileusername',username);
       localStorage.setItem('profileemail',email);
       document.getElementById('profileform').className='main-form-disabled'
alert('details captured click on 2nd image to see details')
    }catch(e){
        console.log('errorin form')
    }
})