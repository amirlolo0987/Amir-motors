console.log("فایل اسکریپت با موفقیت لود شد!");

function modal_show(){
    let modal = document.getElementById('modal-support')
    modal.classList.toggle('modal-hide')

}

function modal_hide(){
    let modal = document.getElementById('modal-support')
    modal.classList.remove('modal-hide')
}

function send_support(){
    if(fullNameRegex.test(document.getElementById('i1').value) && 
  emailRegex.test(document.getElementById('i2').value) &&
  document.getElementById('i3').value.length>0){
    document.getElementById('i1').value=''
    document.getElementById('i2').value=''
    document.getElementById('i3').value=''
    succces_message()
  }
    
    

}

function card_show(name){
    let card=document.getElementById('card-hide')
    card.classList.toggle('card-show')
}


function succces_message(){
  msg=document.getElementById('successMessage')
    msg.classList.add('success-message-after')
  document.getElementById('success-message-in').textContent='Message Sended'
  setTimeout(()=>{
        msg.classList.remove('success-message-after')
    
  },5000)
}


document.getElementById('card-1').addEventListener('click',()=>{
    card_show('mercedesAMGGT63_2023')
})


setInterval(function name(params) {
    let time_text= document.getElementById('time')

    let now=new Date()

    time_text.textContent=now.toLocaleTimeString()
},1000)

const fullNameRegex = /^(?=.{5,30}$)[A-Za-z]+(?:\s[A-Za-z]+)+$/;
let flname = document.getElementById('i1')


const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let emailinp = document.getElementById('i2')

flname.addEventListener('change',()=>{
  let e= document.getElementById('error-input1')
  if(fullNameRegex.test(flname.value)){
    e.style.display='none'

  }
  else{
    e.style.display='block'
    e.style.color='red'
  }

})



emailinp.addEventListener('change',()=>{
  let e= document.getElementById('error-input2')
  if(emailRegex.test(emailinp.value)){
    e.style.display='none'

  }
  else{
    e.style.display='block'
    e.style.color='red'

  }

})

function toggle_sidebar(){
  document.getElementById('sidebar-mobil').classList.toggle('mobile-side-on')
}