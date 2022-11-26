// function hotelRoom (input) {
    
//     let month = input[0]; 
//     let nightsCount = Number(input[1]); 

//     let studioPrice = 0; 
//     let apartmentPrice = 0;


//     switch(month) {
//         case "May":
//         case "October":
    
//      if (nightsCount > 7 && nightsCount <= 14) {
//         studioPrice = (nightsCount * 50) * 0.95; 
//         apartmentPrice = 65 * nightsCount; 
//         console.log(studioPrice); 
//         console.log(apartmentPrice); 
//      } else if (nightsCount > 14) {
//         studioPrice = (nightsCount * 50) * 0.70; 
//         apartmentPrice = (nightsCount * 65) * 0.90;
//         console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`); 
//         console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
//      } else {
//         studioPrice = (nightsCount * 50); 
//         apartmentPrice = (nightsCount * 65);
//         console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`); 
//         console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
//      } break; 

//         case "June": 
//         case "September": 

//     if (nightsCount > 14) {
//         apartmentPrice = (nightsCount * 75.20) * 0.90 ; 
//         studioPrice = (nightsCount * 68.70) * 0.80; 
//         console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`); 
//         console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
//     } else {    
//         apartmentPrice = (nightsCount * 68.70); 
//         studioPrice = (nightsCount * 75.20); 
//         console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`); 
//         console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
//     }break; 

//         case "July": 
//         case "August": 

//     if (nightsCount > 14) {
//         apartmentPrice = (nightsCount * 77) * 0.90; 
//         studioPrice = nightsCount * 76; 
//         console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`); 
//         console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
//     } else {
//         apartmentPrice = nightsCount * 77; 
//         studioPrice = nightsCount * 76; 
//         console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`); 
//         console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
//     } break;
     
//     }
// }
    

// hotelRoom (["May", "8"])

function hotelRoom (input) {
    let month = input[0]; 
    let nightsCount = Number(input[1]); 

    let studioPrice = 0; 
    let apartmentPrice = 0; 

    switch(month) {
        case 'May': 
        case 'October': 
            if (nightsCount > 7 && nightsCount <=14) {
                studioPrice = (nightsCount * 50) * 0.95; 
                apartmentPrice = nightsCount * 65; 
                console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`); 
                console.log(`Studio: ${studioPrice.toFixed(2)} lv.`)
            } else if (nightsCount > 14) {
                studioPrice = (nightsCount * 50) * 0.70; 
                apartmentPrice = (nightsCount * 65) * 0.90; 
                console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`); 
                console.log(`Studio: ${studioPrice.toFixed(2)} lv.`)
            } else {
                studioPrice = nightsCount * 50; 
                apartmentPrice = nightsCount * 65; 
                console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`); 
                console.log(`Studio: ${studioPrice.toFixed(2)} lv.`)
            }break; 

        case 'June': 
        case 'September': 
            if (nightsCount > 14) {
                studioPrice = (nightsCount * 75.20) * 0.80; 
                apartmentPrice = (nightsCount * 68.70) * 0.90; 
                console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`); 
                console.log(`Studio: ${studioPrice.toFixed(2)} lv.`)
            } else {
                studioPrice = nightsCount * 75.20; 
                apartmentPrice = nightsCount * 68.70; 
                console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`); 
                console.log(`Studio: ${studioPrice.toFixed(2)} lv.`)
            }break; 
        
        case 'July': 
        case 'August': 
            if(nightsCount > 14) {
                studioPrice = nightsCount * 76; 
                apartmentPrice = (nightsCount * 77) * 0.90; 
                console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`); 
                console.log(`Studio: ${studioPrice.toFixed(2)} lv.`)
            } else {
                studioPrice = nightsCount * 76; 
                apartmentPrice = nightsCount * 77; 
                console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`); 
                console.log(`Studio: ${studioPrice.toFixed(2)} lv.`)
            }
            
            break; 
        
    }
}   

hotelRoom (["June",

"14"]) 