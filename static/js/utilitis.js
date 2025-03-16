// Open Modal Function
export function openModalF(modalId, btnSelector) {
    const modal = document.getElementById(modalId)
    const btns = document.querySelectorAll(btnSelector)


    btns.forEach(btn => {
        btn.addEventListener('click', function () {
            modal.classList.add('active')
        })
    })
}


// close button funciton
export function closeButtonF() {
    const closeButtons = document.querySelectorAll('.modal-close-btn');

    closeButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            const modal = btn.closest('.my-modal, .all-category'); // Selects the closest matching element

            if (modal) { // Check if a matching ancestor exists
                modal.classList.remove('active');
            }
        });
    });
}



// Sidebar toggle function
export function toggleF(sidebarId, buttonId) {
    const sidebar = document.getElementById(sidebarId);
    const toggleBtn = document.getElementById(buttonId);
    const closeBtn = document.getElementById('close-mobile-sidebar')

    if (!sidebar || !toggleBtn) {
        console.error('Sidebar or Button not found. Check your IDs.');
        return;
    }

    // Add event listener to the button
    toggleBtn.addEventListener('click', function () {
        sidebar.classList.toggle('active');
        toggleBtn.classList.toggle('active');

    });

    if (closeBtn) {
        // close menu icon
        closeBtn.addEventListener('click', function () {
            if (sidebar.classList.contains('active')) {
                toggleBtn.classList.remove('active')
            }
            else {
                toggleBtn.classList.add('active')
            }
        })
    }
}




// export function deleteAllF(deleteParent, deleteButtons, deleteItem) {
//     const parent = document.querySelector(deleteParent)
//     if (!parent) return;

//     const buttons = parent.querySelectorAll(deleteButtons)
//     const items = parent.querySelectorAll(deleteItem)


//     buttons.forEach((btn, index) => {
//         btn.addEventListener('click', function () {
//             if (items[index]) {
//                 items[index].remove()
//             }
//         })
//     })
// }







// Base function for updating quantity
export function updateQuantity(inputField, operation) {
    let currentValue = parseInt(inputField.value) || 0;

    // Increment or decrement based on the operation
    if (operation === 'increment' && currentValue < 9) {
        inputField.value = currentValue + 1;
    } else if (operation === 'decrement' && currentValue > 1) {
        inputField.value = currentValue - 1;
    }
}




// setup quantity
export function setupQuantityButtons() {
    const allCartItems = document.querySelectorAll('.shopping-cart-modal .item');

    allCartItems.forEach((item) => {
        const plusButton = item.querySelector('.plus-btn');
        const minusButton = item.querySelector('.minus-btn');
        const inputField = item.querySelector('.input-field');

        // Add event listener for the plus button
        plusButton.addEventListener('click', function () {
            updateQuantity(inputField, 'increment');
        });

        // Add event listener for the minus button
        minusButton.addEventListener('click', function () {
            updateQuantity(inputField, 'decrement');
        });
    });

}






// Search Dropdown
export function openSearchDropdown() {
    const input = document.getElementById('search-input')
    const dropdwon = document.getElementById('search-dropdown')


    input.addEventListener('input', function () {
        if (input.value.trim() !== '') {
            dropdwon.classList.add('active');

        } else {
            dropdwon.classList.remove('active');
        }
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function (event) {
        const isClickInside = dropdwon.contains(event.target) || input.contains(event.target);
        if (!isClickInside) {
            dropdwon.classList.remove('active'); // Close dropdown

            if (dropdwon) {
                dropdwon.classList.remove('active');
            }
        }
    });
}




// delete function
export function deleteF(itemClass, btnsClass) {
    const buttons = document.querySelectorAll(btnsClass)
    buttons.forEach((btn) => {
        btn.addEventListener('click', function (event) {
            event.preventDefault();
            event.stopPropagation();

            const item = btn.closest(itemClass);
            console.log(item)
            if (item) {
                item.remove();
            } else {
                console.warn("No parent item found for this button.");
            }
        });
    });
}

deleteF('.shopping-cart-modal .item', '.shopping-cart-modal .delete-btn')



// quick view
export function quickViewF(buttons) {
    const btns = document.querySelectorAll(buttons)

    if (btns) {
        btns.forEach(btn => {
            btn.addEventListener('click', function (e) {
                const modal = document.querySelector('.qucik-view-modal')

                console.log(modal)
                if (modal) {
                    modal.classList.add('active')
                }
            })
        })
    }
}





// big image change
export function bigImageChangeF(bigImg, smallImgsSelector) {
    const bigImage = document.getElementById(bigImg)
    const smallImgs = document.querySelectorAll(smallImgsSelector)

    activeF('.small-images img')

    if (bigImage && smallImgs) {
        smallImgs.forEach(img => {
            img.addEventListener('click', function () {
                bigImage.src = this.src
            })
        })
    }

}



document.addEventListener("DOMContentLoaded", function () {
    const upBtn = document.querySelector(".up-btn");

    if (upBtn) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 400) {
                upBtn.classList.add("active"); // Show button
            } else {
                upBtn.classList.remove("active"); // Hide button
            }
        });
    }
});




// funciton active
export function activeF(selector) {
    const items = document.querySelectorAll(selector)

    items.forEach(item => {
        item.addEventListener('click', function () {
            items.forEach(single => {
                single.classList.remove('active')
            })
            item.classList.add('active')
        })
    })
}







// doropdown
function dropdwonToggle(wrapperId) {
    const wrapper = document.getElementById(wrapperId)
    // const dropdowns = wrapper.querySelectorAll('.dropdwon')

    if (wrapper) {
        const btns = wrapper.querySelectorAll('.nav-btn')

        btns.forEach((btn, index) => {
            btn.addEventListener('click', function () {
                const dropdown = btn.querySelector('.dropdown');
                const icon = btn.querySelector('span')


                // Close all other dropdowns
                btns.forEach(otherBtn => {
                    const otherDropdown = otherBtn.querySelector('.dropdown')
                    const otherIcon = otherBtn.querySelector('span')

                    if (otherDropdown != dropdown) {
                        otherDropdown.classList.remove('active')
                        otherIcon.classList.remove('active')
                    }
                })

                if (dropdown) {
                    // Toggle the 'active' class on the dropdown
                    dropdown.classList.toggle('active');
                    icon.classList.toggle('active')
                }
            })
        })
    }
}


dropdwonToggle('category-sticky')









// Toggle category dropdowns and icon  for Mobile category
document.querySelectorAll('.open-btn').forEach(button => {
    button.addEventListener('click', function () {
        const dropdown = this.nextElementSibling; // The dropdown div
        const icon = this.querySelector('.plus-minus-btn i'); // The plus/minus icon

        // Close all other dropdowns and reset their icons
        document.querySelectorAll('.dropdown').forEach(otherDropdown => {
            if (otherDropdown !== dropdown) {
                otherDropdown.classList.remove('active'); // Close other dropdowns
                const otherIcon = otherDropdown.previousElementSibling.querySelector('.plus-minus-btn i');
                if (otherIcon) {
                    otherIcon.classList.remove('fa-minus'); // Change icon to plus
                    otherIcon.classList.add('fa-plus');
                }
            }
        });

        // Toggle the current dropdown
        dropdown.classList.toggle('active');

        // Toggle the icon for the current dropdown
        if (dropdown.classList.contains('active')) {
            icon.classList.remove('fa-plus');
            icon.classList.add('fa-minus');
        } else {
            icon.classList.remove('fa-minus');
            icon.classList.add('fa-plus');
        }
    });
});



// Toggle subcategory dropdowns and icon for Mobile category
document.querySelectorAll('.subcategory-btn').forEach(subcategory => {
    subcategory.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent navigation
        const nestedDropdown = this.nextElementSibling; // The nested dropdown div
        const icon = this.querySelector('.plus-minus-btn i'); // The plus/minus icon for nested dropdown

        // Close all other nested dropdowns and reset their icons
        document.querySelectorAll('.nested-dropdown').forEach(otherNestedDropdown => {
            if (otherNestedDropdown !== nestedDropdown) {
                otherNestedDropdown.classList.remove('active'); // Close other nested dropdowns
                const otherIcon = otherNestedDropdown.previousElementSibling.querySelector('.plus-minus-btn i');
                otherIcon.classList.remove('fa-minus');
                otherIcon.classList.add('fa-plus');
            }
        });

        // Toggle the current nested dropdown
        nestedDropdown.classList.toggle('active');

        // Toggle the icon for the current nested dropdown
        if (nestedDropdown.classList.contains('active')) {
            icon.classList.remove('fa-plus');
            icon.classList.add('fa-minus');
        } else {
            icon.classList.remove('fa-minus');
            icon.classList.add('fa-plus');
        }
    });
});

toggleF('all-category', 'mobile-menu-icon');



const allCategoryClose = document.getElementById('all-category-close');
const mobileMenuIcon = document.getElementById('mobile-menu-icon');

// Listen for a click event on the 'all-category-close' button
allCategoryClose.addEventListener('click', function () {
    // Remove the 'active' class from the mobile menu icon when the category close button is clicked
    mobileMenuIcon.classList.remove('active');
});






// Tab Function
export function tabF(tabSelector, contentSelector) {

    document.querySelectorAll(tabSelector).forEach(tab => {
        tab.addEventListener('click', function () {
            document.querySelectorAll(tabSelector).forEach(t => t.classList.remove('active'));
            document.querySelectorAll(contentSelector).forEach(tc => tc.classList.remove('active'));

            this.classList.add('active');
            document.getElementById(this.dataset.tab).classList.add('active');
        });
    });
}

// Example Usage




// when page reload then show modal
function pageReloadModal() {
    const modal = document.getElementById('page-reload-modal');

    if (!modal) return; // Exit if modal does not exist

    window.addEventListener("load", function () {
        setTimeout(() => {
            modal.classList.add('active');

            setTimeout(() => {
                modal.style.display = "none";
            }, 5000); // Hide after 5 seconds

        }, 2000); // Show after 2 seconds
    });
}

pageReloadModal();
