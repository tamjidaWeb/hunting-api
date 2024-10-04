const loadPhone = async(searchText)=>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    // console.log(phones);
    displayPhones(phones);

}

// handle search button

// const handleSearch = ()=> {
// const searchField = document.getElementById('search-field');
// const searchText = searchField.value;
// console.log(searchText);
// }


const handleSearch =() => {
    console.log('handle search');
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    loadPhone(searchText);
}

const handleSearch2 = ()=>{
    const searchField = document.getElementById('search-field2');
    const searchText = searchField.value;
    loadPhone(searchText);
}


const displayPhones = phones =>{
    // console.log(phones)
    const phonContainer = document.getElementById('phone-container');

    //clear phone container cards before adding new cards
    phonContainer.textContent = '';

    //display only first 12 phones
    phones = phones.slice(0,12);


    phones.forEach(phone => {
        // console.log(phone)
        //2. create a div
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-gray-100 w-96 mt-8 pt-4 shadow-xl`;
        //3 set inner html
        phoneCard.innerHTML = `
       
            <figure>
                <img
                src="${phone.image}"
                alt="Shoes" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">${phone.phone_name}!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
            </div>
        `;
        // 4 append child
        phonContainer.appendChild(phoneCard);
    })
}

//handle search button

// const handleSearch =()=>{
//     console.log('click handle')
// }

// const displayPhones = phones=>{
//         //  console.log(phones);

//         const phonContainer = document.getElementById('phone-container');
//         phones.forEach(phone=>{
//             console.log(phone)
//             // 1 create a div
//             //2 create a div
//             const phoneCard = document.createElement('div');
//             phoneCard.classList = `card bg-gray-100 w-96 shadow-xl`;
//             //3 set inner html
//             phoneCard.innerHTML = `
//             <figure>
//                       <img
//                         src="${phone.image}"
//                         alt="Shoes" />
//                     </figure>
//                     <div class="card-body">
//                       <h2 class="card-title">${phone.phone_name}</h2>
//                       <p>If a dog chews shoes whose shoes does he choose?</p>
//                       <div class="card-actions justify-end">
//                         <button class="btn btn-primary">Buy Now</button>
//                       </div>
//                     </div>
//             `;

//             // append child
//             phonContainer.appendChild(phoneCard);
//         })


// }

// loadPhone();