# Notification System with Mark-As-Read Functionality

## Overview
This project is a simple **interactive notification system** built with JavaScript, HTML, and CSS.  
It allows users to:

- See a live count of unread notifications.
- Mark all notifications as read with a single button click.
- Toggle individual notifications between read and unread.
- Automatically update the unread counter in real-time.

This project demonstrates **reactive UI concepts** and dynamic DOM manipulation.

---

## Features

1. **Unread Notifications Counter**
   - Displays the number of notifications that are unread.
   - Updates automatically whenever a notification is marked read or unread.

2. **Mark All as Read Button**
   - Clicking the button removes the `unread` class from all notifications.
   - Updates the counter to reflect zero unread notifications.

3. **Individual Notification Toggle**
   - Clicking on a single notification toggles its `unread` state.
   - Counter updates immediately to reflect the current number of unread notifications.

---

## How It Works

1. **Selecting DOM Elements**
   - The button, notification list items, and the counter element are selected using `document.querySelector` and `document.querySelectorAll`.

2. **Mark All as Read Logic**
   - The button has a click event listener.
   - On click, each notification has its `unread` class removed using `.classList.remove`.
   - The unread notifications are re-counted using `document.querySelectorAll('.unread').length`.
   - The counter element's text content is updated to show the new unread count.

3. **Individual Notification Logic**
   - Each notification has its own click event listener.
   - On click, the `unread` class is toggled using `.classList.toggle('unread')`.
   - The unread notifications are re-counted dynamically.
   - The counter updates immediately to reflect changes.

---

## Technologies Used

- **HTML** – For the notification structure and markup.
- **CSS** – For styling notifications, differentiating read and unread states.
- **JavaScript** – For handling all dynamic interactions and reactive updates.

---

## Learning Points

- DOM selection using `querySelector` and `querySelectorAll`.
- Looping through NodeLists with `forEach`.
- Event handling with `addEventListener`.
- Manipulating CSS classes with `classList.remove` and `classList.toggle`.
- Updating DOM elements in real-time using `.textContent`.
- Implementing reactive UI without frameworks.

---

## Future Enhancements

- Add **animations** when a notification is marked as read.
- Persist notification states in **localStorage** so that counts and read/unread status survive page reloads.
- Optimize the code using **event delegation** to handle notifications dynamically added to the DOM.