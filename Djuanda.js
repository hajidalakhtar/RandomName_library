(function(window) {
    'use strict'
    function defineDjuanda(){
    var Djuanda = {};

        //  ============== Random name ============= \\
        Djuanda.randomNameOnlineId = function(callback){
            var elems = document.getElementsByClassName(callback);
            fetch('https://uinames.com/api/?region=indonesia&amount='+elems.length)
            .then(response => response.json())
            .then(data => {
                for(var i = 0; i < elems.length; i++) {
                    elems[i].innerHTML = data[i].name+' '+ data[i].surname;
                }
            })
            .catch(error => console.error(error))
        }
        
        Djuanda.randomNameOnline = function(callback){
            var elems = document.getElementsByClassName(callback);
            fetch('https://uinames.com/api/?region=united%20states&amount='+elems.length)
            .then(response => response.json())
            .then(data => {
                for(var i = 0; i < elems.length; i++) {
                    elems[i].innerHTML = data[i].name+' '+ data[i].surname;
                }
            })
            .catch(error => console.error(error))
        }


        Djuanda.randomName = function(callback){  
            var data = ['Clifford Goewey ', 
            'Douglass Cyrus', 
            'Josefina Clever',  
            'Horacio Hammons', 
            'Jennifer Madonna',  
            'Tiffani Canty', 
            'Barton Waggener',  
            'Tawny Casto',  
            'Oswaldo Carcamo',  
            'Cinderella Willingham',  
            'Tayna Ozment',  
            'Zaida Thomas',  
            'Ashley Vachon',  
            'Annabel File',  
            'Sid Bradham',  
            'Zula Schott',  
            'Shona Segui',  
            'Lyda Drey',  
            'Trinity Kugel',  
            'Evita Trejo',  
            'Tameika Julius',  
            'Numbers Dankert',  
            'Christi Ruby',  
            'Leatrice Schartz',  
            'Andreas Mandez',  
            'Theo Henricks',  
            'Weston Stamp',  
            'Leon Clutts',  
            'Margery Sak',  
            'Lanny Laforce',  
            'Johnson Sasson',  
            'Nathaniel Heaston',  
            'Jeneva Reasons',  
            'Sunday Strosnider',  
            'Azzie Vanhoy',  
            'Moriah Wragg',  
            'Evia Guest',  
            'Tamica Clements',  
            'Christia Storm',  
            'Rudolph Pintor',  
            'Bert Prisco',  
            'Darin Scheerer',  
            'Wilda Bronson',  
            'Anamaria Rickel',  
            'Orpha Sigmon',  
            'Renaldo Kirkwood',  
            'Felipe Robson', 
            'Harley Bevil',  
            'Casandra Phong',  
            'Lillie Garza']
            var elems = document.getElementsByClassName(callback);

            for(var i = 0; i < elems.length; i++) {
                var rand = data[Math.floor(Math.random() * data.length)];
                elems[i].innerHTML = rand;
            }
        }

        Djuanda.randomNameId = function(callback){  
            var data = ['Achmad Kalla', 
            'Agus Nursalim', 
            'Agus Purnomo Edhi',  
            'Aji Bayu Wirrotama', 
            'Albert Kongoasa',  
            'Alexander Hermas Wolfe', 
            'Alexandra Miksar',  
            'Andrie Setiawan Yapsir',  
            'Angie Christina',  
            'Anthony Dominic Byron',  
            'Ateng Suhendra',  
            'Benny Setiawan',  
            'Bayu Virgan Triyatno',  
            'Bobby Iman Satrio',  
            'BUDHI SOEJONO',  
            'Budi Mulio Utomo',  
            'Budiono Darsono',  
            'David Kristian',  
            'Darwin Sutanto',  
            'Devi Tri Asmarasari',  
            'Dewi Garlina Sari',  
            'Dharmawandi Sutanto',  
            'Dicky Kurniawan',  
            'Dina Eldelina Pow',  
            'Djauhara Faizal',  
            'Djoni Rion Gui',  
            'Dodi Suhartono Abdul Kadir',  
            'Eddi Sugiardi',  
            'Edwin Sugiarto',  
            'Efrem Wardhana',  
            'Eko Budianto',  
            'Elly Lestari Adiutama',  
            'Emily Waty Setiawan',  
            'Erlina Ongoredjo',  
            'Erwin Gunawan',  
            'Evi Hamdani',  
            'Feilie Sulestijani',  
            'Flores Samudro',  
            'Fransiscus Antonius S.A',  
            'Ganesh Chander Grover',  
            'Gemilang Investama',  
            'Gunawan Santoso Gwie',  
            'Hajato Darsono',  
            'Handi Gunawan',  
            'Hastuti Sulistio',  
            'Hendra Harjadi',  
            'Hendrik Tee', 
            'Henny Hartady',  
            'Henry Pribadi',  
            'Herman Iskandar']
            // document.getElementById(callback).innerHTML = rand ;
            var elems = document.getElementsByClassName(callback);
            for(var i = 0; i < elems.length; i++) {
                var rand = data[Math.floor(Math.random() * data.length)];
                elems[i].innerHTML = rand;
            }
        }







        return Djuanda;
}

    if (typeof(Djuanda) === 'undefined') {
        window.Djuanda = defineDjuanda();
    }
})(window);
// Create By Muhammad Hajid Al Akhtar
