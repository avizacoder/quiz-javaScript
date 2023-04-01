const datas = [

    // Doris
    {
        question: 'Son versiones sin costo de programas o aplicacion.',
        choices: [
            'vim',
            'vscode',
            'Paid Version',
            'Free Version'
        ],
        answer: 'Free Version',
        image: 'https://wwwhatsnew.com/wp-content/uploads/2014/07/imagen7.jpg'
    
    },

    //Jeremy
    {
        question: 'Deteccion de radio y enlace.',
        choices: [
            'Extent',
            'Compass',
            'Radar',
            'Location',
        ],
        answer: 'Radar',
        image: 'https://cdn-icons-png.flaticon.com/512/196/196345.png'

    },
    {
        question: 'Es una secuencia de intrucciones de codido que se ejecuta repetidas veces.',
        choices: [
            'Extent',
            'Compass',
            'Loop',
            'Location',
        ],
        answer: 'Loop',
        image: 'https://sites.google.com/site/wikiredesprimaria/_/rsrc/1441235763512/red-social-horizontal/red-en-anillo-o-en-bucle-cerrado/anillo.gif?height=400&width=357'

    },

    // Limber
    {
        question: 'Es un registro específico de alta velocidad.',
        choices: [
            'Memory Data Register',
            'Principal Memory',
            'Central Processing Unit',
            'Memory Addrees Register',
            'Data Bus',
        ],
        answer: 'Memory Data Register',
        image: 'https://upload.wikimedia.org/wikipedia/commons/8/81/Memory_Data_Register_diagram.jpg'

    },
    {
        question: 'Es un sistema operativo de Microsoft.',
        choices: [
            'Microsoft',
            'Mac',
            'Windows 11',
            'Widows 10',
            'Linux',
        ],
        answer: 'Windows 11',
        image: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2021/07/windows-11-2407647.jpg?tf=3840x'

    }
    
]

function tresAleatorios(list) {
    return [...list].sort(() => (Math.random() > 0.5 ? 1 : -1)).slice(0, 3)
}

export const data = tresAleatorios(datas)


