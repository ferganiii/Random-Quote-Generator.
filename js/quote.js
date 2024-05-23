var advice=document.getElementById('quotName');
var author=document.getElementById('authorName');





var x = [
    {'author': '-- Oscar Wilde', 
     'quote': 'Be yourself; everyone else is already taken'
    },


    {'author': '-- Marcus Tullius Cicero', 
     'quote': '-A room without books is like a body without a soul'
    },


    {'author': '--Mae West', 
     'quote': 'You only live once, but if you do it right, once is enough.'
    },

    {'author': '-- Mahatma Gandhi', 
     'quote': 'Be the change that you wish to see in the world'
    },
    {'author': '--Mark Twain', 
     'quote': 'If you tell the truth, you dont have to remember anything.'
    },
    {'author': '-- Oscar Wilde', 
     'quote': 'Always forgive your enemies; nothing annoys them so much'
    },
];

function add(){

    var random =Math.floor((Math.random() * x.length));

document.getElementById('quotName').innerHTML = `\"${x[random].quote}\"`;
document.getElementById('authorName').innerHTML = `${x[random].author}`;
}


