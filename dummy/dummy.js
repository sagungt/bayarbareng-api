module.exports = {
    // dummy admin
    Admin: {
        data: [
            {
                id: 1,
                name: 'John Doe',
                email: 'john@example.com',
                password: ''
            },
        ]
    },
    // dummy customer
    Customer: {
        data: [
            {
                id: 1,
                email: 'john@example.com',
                langganan: 'Netflix Premium',
                lama_langganan: '1 Bulan'
            },
        ]
    },
    // dummy packet price
    Paket: {
        data: [
            {
                nama_paket: 'Netflix Premium',
                harga_paket: 186000
            },
            {
                nama_paket: 'Spotify Premium',
                harga_paket: 261000
            },
            {
                nama_paket: 'Youtube Music Premium',
                harga_paket: 75000
            },
            {
                nama_paket: 'Youtube Premium',
                harga_paket: 89000
            }
        ]
    }

}