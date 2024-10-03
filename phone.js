const loadPhone = async()=>{
    const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const data = await res.json();
    const phones = data.data;
    // console.log(phones);
    displayPhones(phones);

}

const displayPhones = phones=>{
        //  console.log(phones);
        phones.forEach(phone=>{
            console.log(phone)
        })


}

loadPhone()