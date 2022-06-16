

(async() => {
    const {value: Plantel} = await Swal.fire({
        title: 'Bienvenido a Macroeconomía 1', 
        text: 'Te saluda Francisco Elige tu Plantel',
        icon: '',
        confirmButtonText: 'Selecionar',
        footer: 'Te presento una pequeña información de Los Economistas de nuestra Historia',
        imageUrl: 'img/12 economistas.jpg',
        imageWidth: '400px',
        imageAlt: 'Economistas',
        input:"select",
        inputPlacehoolder:'Plantel',
        inputValue: '',
        inputOptions: {
            Centro: 'Centro',
            Cubilete: 'Cubilete',
            Guadalupe: 'Guadalupe',
            Tonala: 'Tonala'
        }
        });
        if (Plantel){
            Swal.fire({
                title: `Selecionaste ${Plantel}`
            });
        
        
        }

})()




