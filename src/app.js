document.addEventListener('alpine:init', () => {
    Alpine.data('products', () => ({
        items: [
            {
                id: 1,
                name: 'Tas',
                img: '1.jpg',
                price: 20000
            },
            {
                id: 2,
                name: 'Jaket',
                img: '2.jpg',
                price: 25000
            },
            {
                id: 3,
                name: 'Sepatu',
                img: '3.jpg',
                price: 30000,
            },
            {
                id: 4,
                name: 'Kaos',
                img: '4.jpg',
                price: 35000,
            },
            {
                id: 5,
                name: 'Jas',
                img: '5.jpg',
                price: 40000,
            },
            {
                id: 6,
                name: 'Jam tangan',
                img: '6.jpg',
                price: 45000,
            }
        ],
    }))

    // Alpine store (bisa diubah datanya)
    Alpine.store('cart', {
        items: [],
        quantity: 0,
        total: 0,
        add(newItem) {
            // Mengecek adakah barang yang sama dalam cart
            const cartItem = this.items.find((item) => item.id == newItem.id)
            console.log(cartItem)
            // jika belum ada barang di cart  
            if (cartItem == undefined) {
                this.items.push({ ...newItem, quantity: 1, total: newItem.price })
                this.quantity++
                this.total += newItem.price
            } else {
                // jika sudah ada barang di cart, cek apakah barang sama atau beda 
                this.items = this.items.map((item) => {
                    // jika barang berbeda
                    if (item.id !== newItem.id) {
                        return item
                    } else {
                        // jika barang sama
                        item.quantity++
                        item.total = item.price * item.quantity
                        this.quantity++
                        this.total += item.price
                        return item
                    }
                })
            }

            console.log(this.items)
        },
        remove(id) {
            const cartItem = this.items.find((item) => item.id == id)

            if (cartItem.quantity > 1) {
                this.items = this.items.map((item) => {
                    if (item.id !== id) {
                        return item
                    } else {
                        this.quantity--
                        item.quantity--
                        item.total -= item.price
                        this.total -= item.price
                        return item
                    }
                })

            } else if (cartItem.quantity == 1) {
                this.items = this.items.filter((item) => item.id !== id)
                this.quantity--
                this.total -= cartItem.price
                return item
            }
        }
    })

})

// Form validation
const checkoutButton = document.querySelector('.checkout-button');
checkoutButton.disabled = true;
const form = document.querySelector('#checkout-form')


form.addEventListener('keyup', function () {
    for (let i = 0; i < form.elements.length; i++) {
        if (form.elements[i].value.length !== 0) {
            checkoutButton.classList.remove('disable');
            checkoutButton.classList.add('disable');
        } else {
            return false;
        }
    }
    console.log('berhasil')
    checkoutButton.disabled = false;
    checkoutButton.classList.remove('disable');
});


// kirim data
checkoutButton.addEventListener('click', function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const data = new URLSearchParams(formData);
    const objData = Object.fromEntries(data);
    window.open('http://wa.me/6287855038324?text='+ encodeURIComponent((formatMessage(objData))))
    
})

//format pesan
const formatMessage = (obj) => {
    return `Data Customer
nama\t: ${obj.name}
email\t: ${obj.email}
phone\t: ${obj.phone}
alamat\t: ${obj.address}\n
Data Pesanan${JSON.parse(obj.items).map((item) => `\t\n${item.name}\t: (${item.quantity} x ${rupiah(item.price)} = ${rupiah(item.total)})`).join('')}\n
Total Harga: ${rupiah(obj.total)}
Terimakasih`

}

//Validasi form pesan
const formMessage = document.querySelector('.form-message')
const submitButton = document.querySelector('.btn-submit')

console.log(formMessage.elements)
submitButton.disabled = true;

formMessage.addEventListener('keyup', function() {
    for(let i = 0; i < formMessage.elements.length; i++) {
        if(formMessage.elements[i].value.length !== 0) {
            submitButton.disabled = true;
        } else {
            return false;
        }
    }
    submitButton.disabled = false;
    submitButton.style.backgroundColor = "#37AA9C";
    submitButton.style.cursor = "pointer";
})

// Form pesan
submitButton.addEventListener('click', function(e) {
    e.preventDefault();
    const name = document.getElementById('user-input');
    const email = document.getElementById('mail-input');
    const message = document.getElementById('message-input');
    console.log(`${name.value} 
${email.value}
${message.value}`)
    name.value = ''
    email.value = ''
    message.value = ''
    alert('pesan anda telah terkirim')
})

//Konversi ke rupiah
const rupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(number)
}

