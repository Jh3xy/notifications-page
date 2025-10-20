// Mark as read logic


// Grab the required elements
let btn = document.querySelector('.notif__mark-read')
let notifLists = document.querySelectorAll('.notif__list')
let notifCount = document.querySelector('.notif__count')

// watch for a click on btn and toogle the "unread" class for each notifList
btn.addEventListener("click", ()=>{
 notifLists.forEach(
  (notifList)=>{
   notifList.classList.remove('unread')
  }
 )
 //recount the total number of elements eith the unread class no its been removed 
 let unreadNotifs = document.querySelectorAll('.unread')
 
 //update the text content of notifCount so its the new total of "unread" elements....
 notifCount.textContent = unreadNotifs.length;
 /*
  Debugging
 console.log(notifCount)
 console.log(`there are ${unreadNotifs.length} notifications left`)
 */
 
})















