export const defineUsers=[
     { name: "Ekram", email: "ekram@gmail.com", password: "ekram" },
  { name: "Zain", email: "zain123@gmail.com", password: "zain" },
  { name: "Areeba", email: "areeba456@gmail.com", password: "areeba" },
  { name: "Hassan", email: "hassan789@gmail.com", password: "hassan" },
  { name: "Fatima", email: "fatima111@gmail.com", password: "fatima" },
  { name: "Talha", email: "talha222@gmail.com", password: "talha" },
  { name: "Nimra", email: "nimra333@gmail.com", password: "nimra" },
  { name: "Usman", email: "usman444@gmail.com", password: "usman" },
  { name: "Iqra", email: "iqra555@gmail.com", password: "iqra" },
  { name: "Bilal", email: "bilal666@gmail.com", password: "bilal" },
  { name: "Laiba", email: "laiba777@gmail.com", password: "laiba" },
]


export const getUsers=()=>{
    try {
        const users = localStorage.getItem('defineUsers');
        return users?JSON.parse(users):[];
    } catch (error) {
        console.log(error)
        return;
    }
}

export const setUser=(data)=>{
    try {
        const users=[...defineUsers,data];
        localStorage.setItem("defineUsers",JSON.stringify(users));
        return
    } catch (error) {
        console.log(error)
    }
}

