
tinymce.init({
    selector: '#description-txt',
    height: 200,
    menubar: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar: 'undo redo | formatselect | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
  });
  
  const pokemones = [];
  const cargarTabla = ()=>{
    //1. Obtener una referencia a la tabla
    let tbody = document.querySelector("#tbody-tabla");
    // eliminar contenido
    tbody.innerHTML = "";
    //2. Recorrer la lista de pokemones
    for(let i=0; i < pokemones.length; ++i){
      let p = pokemones[i];
    //3. Por cada pokemon generar una fila de la tabla(tr)
    let tr = document.createElement("tr");
    //4. Por cada atributo generar una td de la tabla
    let tdNro = document.createElement("td");
    let tdNombre = document.createElement("td");
    let tdTipo = document.createElement("td");
    let tdDescription = document.createElement("td");
    let tdAcciones = document.createElement("td");
    //DEFINIR LO QUE VA EN LA TABLA
    tdNro.innerText = i + 1;
    tdNombre.innerText = p.nombre;
    //TODO: EL TIPO TIENE QUE SER UN ICONO
    let tipo = document.createElement("i");
    if(p.tipo == "1"){
      // TIPO PLANTA <i class="fas fa-leaf"></i>
      tipo.classList.add("fas", "fa-leaf","text-sucess","fa-3x");
    }else if(p.tipo == "2"){
      //TIPO FUEGO <i class="fas fa-fire"></i>
      tipo.classList.add("fas","fa-fire","text-danger","fa-3x");
    }else if(p.tipo == "3"){
      //TIPO ELECTRICO <i class="fas fa-bolt"></i>
      tipo.classList.add("fas","fa-bolt","text-warning","fa-3x");
    }else if(p.tipo == "4"){
      //TIPO AGUA <i class="fas fa-tint"></i>
      tipo.classList.add("fas","fa-tint","text-primary","fa-3x");
    }else {
      // TIPO NORMAL <i class="fas fa-bullseye"></i>
      tipo.classList.add("fas","fa-bullseye","text-info","fa-3x");
    }
    tdTipo.classList.add("text-center");
    tdTipo.appendChild(tipo);
    
    
    tdDescription.innerHTML = p.description;
    //QUE HAGO CON LAS ACCIONES
    //5. Agregar los td al tr
    tr.appendChild(tdNro);
    tr.appendChild(tdNombre);
    tr.appendChild(tdTipo);
    tr.appendChild(tdDescription);
    tr.appendChild(tdAcciones);
    //6. Agregar el tr a la tabla
    tbody.appendChild(tr);
    }

  };

  document.querySelector("#registrar-btn").addEventListener("click", ()=>{
    let nombre = document.querySelector("#nombre-txt").value;
    let tipo = document.querySelector("#tipo-select").value;
    let legendario = document.querySelector("#legendario-si").checked;
    let description = tinymce.get("description-txt").getContent(); //Solo para el tinymce
    console.log("Hola Mundo!",nombre, " ",tipo, " ",legendario," ",description);
      
    let pokemon = {};
    pokemon.nombre = nombre;
    pokemon.tipo = tipo;
    pokemon.legendario = legendario;
    pokemon.description = description;
    
    pokemones.push(pokemon);
    cargarTabla();
    Swal.fire("Resultado exitoso!", "Pokemon registrado", "info");

});
