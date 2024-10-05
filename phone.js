const loadPhone = async(searchText, isShowAll)=>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    // console.log(phones);
    displayPhones(phones, isShowAll);

}

// handle search button

// const handleSearch = ()=> {
// const searchField = document.getElementById('search-field');
// const searchText = searchField.value;
// console.log(searchText);
// }


const handleSearch =(isShowAll) => {
    toggleLoadingSpinner(true);
    console.log('handle search');
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    loadPhone(searchText, isShowAll);
}
//handle search recap
// const handleSearch2 = ()=>{
//     toggleLoadingSpinner(true);
//     const searchField = document.getElementById('search-field2');
//     const searchText = searchField.value;
//     loadPhone(searchText);
// }

const toggleLoadingSpinner = (isLoading) =>{
    const loadingSpinner = document.getElementById('loading-spinner');
    if(isLoading){
        loadingSpinner.classList.remove('hidden');
    }
    else{
        loadingSpinner.classList.add('hidden')
    }
}


const displayPhones = (phones, isShowAll) =>{
    // console.log(phones)
    const phonContainer = document.getElementById('phone-container');


    //display show all button if there are more than 12 phones
    const showAllContainer = document.getElementById('show-all-container')
    if(phones.length >12 && !isShowAll){
        showAllContainer.classList.remove('hidden')
    }
    else{
        showAllContainer.classList.add('hidden')
    }


    //clear phone container cards before adding new cards
    phonContainer.textContent = '';

    console.log('is show all', isShowAll)
    //display only first 12 phones if not show all
    if(!isShowAll){}
    phones = phones.slice(0,12);
    


    phones.forEach(phone => {
        console.log(phone);
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
                <div class="card-actions justify-center">
                <button class="btn btn-primary">Show Details</button>
                </div>
            </div>
            </div>
        `;
        // 4 append child
        phonContainer.appendChild(phoneCard);
    })

    //hide loading spinner
    toggleLoadingSpinner(false);
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


//handle show all

const handleShowAll = () =>{
    handleSearch(true);
}