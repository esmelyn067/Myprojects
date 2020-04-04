(function(){
   //Variables

   var lista = document.getElementById("lista"),
       tareaInput = document.getElementById("tareaInput"),
       btnNuevaTarea = document.getElementById("btn-agregar");

  //Funciones
function agregarTarea(){
	var tarea = tareaInput.value,
        nuevaTarea = document.createElement("li"),
        enlace = document.createElement("a"),
        contenido = document.createTextNode(tarea);

        if (tarea ==="") {
             tareaInput.setAttribute("placeholder","Agregar una tarea valida");
             tareaInput.className = "error";
             return false;
        }
         
  // Agregagmos un contenido al enlace
    enlace.appendChild(contenido);

  // Le establecemos un atributo href
     enlace.setAttribute("href","#");

  //Agreagamos el enlace a la nueva tarea
   nuevaTarea.appendChild(enlace);

  //Agregamos la nueva tarea a la lista   
    lista.appendChild(nuevaTarea);

    tareaInput.value ="";

  //->Borrando Elementos Recien 
   for (var i =0;  i<= lista.children.length - 1;i++) {
    	lista.children[i].addEventListener("click", eliminarErecientes);
    } 

}
function comprobarInput(){
	tareaInput.className = "";
	tareaInput.setAttribute("placeholder","Agrega tu tarea");
}
function eliminarTarea(){
	 this.parentNode.removeChild(this);
}
function eliminarErecientes(){
    this.parentNode.removeChild(this);
}



  // Eventos     
  // -> Agregar Tareas 
      btnNuevaTarea.addEventListener("click", agregarTarea);

  //->Comprovar Input
      tareaInput.addEventListener("click", comprobarInput);

   //->Borrando Elementos de la lista
   for (var i =0;  i<= lista.children.length - 1;i++) {
    	lista.children[i].addEventListener("click", eliminarTarea);
    } 

   




}());