export const toDisplayDateFormat=(datestring)=>{
    console.log(datestring);
    const date = new Date(datestring);
 return `${date.getDate()} ${date.toLocaleDateString('en-US',{month:'short'})} ${date.getFullYear()} ${date.toLocaleString("en-US",{hour:'numeric',minute:'numeric',hour12:true})}`
}