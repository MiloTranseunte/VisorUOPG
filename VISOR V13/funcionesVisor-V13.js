  //AMBIENTE PROD

  $(document).ready(function(){

      $('#btnProd').click(function(e) {  
          var inputvalue = $("#input").val();
          if (inputvalue.length >= 6){
          window.open("http://sgi.agcontrol.gob.ar/GestionTramite/VisorTramite.aspx?id="+inputvalue);}
          else{window.open("http://sgi.agcontrol.gob.ar/VisorTramiteTR/"+inputvalue);}
      });
  });


  //Ambiente TEST

$(document).ready(function(){
      $('#btnDesa').click(function(e) {  
  var inputvalue = $("#input").val();
  if (inputvalue.length >= 6){
       window.open("http://clientes.grupomost.com/gcba/desa/sgi.agcontrol.gob.ar/GestionTramite/VisorTramite.aspx?id="+inputvalue);}
       else{window.open("http://clientes.grupomost.com/gcba/desa/sgi.agcontrol.gob.ar/VisorTramiteTR/"+inputvalue);}

    });
});

//Ambiente HML 

$(document).ready(function(){
      $('#btnHML').click(function(e) {  
  var inputvalue = $("#input").val();
  if (inputvalue.length >= 6){
       window.open("http://www.dghpsh.agcontrol.gob.ar/hml/sgi.agcontrol.gob.ar/GestionTramite/VisorTramite.aspx?id="+inputvalue);}
       else{window.open("http://www.dghpsh.agcontrol.gob.ar/hml/sgi.agcontrol.gob.ar/VisorTramiteTR/"+inputvalue);}


    });
});

// Buscador Expedientes JAVA

$(document).ready(function(){
      $('#btnMost').click(function(e) {  
  var inputvalue = $("#input").val();
       window.open("http://dghpsh.agcontrol.gov.ar/habilitaciones/listarExpedientes.jsp?p_nro_exp="+inputvalue+"&p_tipo_tramite=&p_tipo_exp=&p_subtipo_exp=&p_numeroSolicitud=&p_numeroInformeVerificacion=&p_fc_desde=&p_fc_hasta=&p_etapa=&p_rol_interv=&p_usuario_interv=&p_resultado_etapa=&p_visado_etapa=&p_estado_exp=&p_colegio_escribano=false&p_zona=&p_calle=&p_domic_nro=&p_tipo_entidad=&p_tipo_doc=&p_nro_doc=&p_nombre_razon_soc=&primera=false&p_codigoDom=null&p_operacion=insert&p_destino=algun_destino.jsp&p_mensaje=algun_mensaje");
    });
});

//Buscador de JAHDES

$(document).ready(function(){
      $('#btnJahdes').click(function(e) {  
  var inputvalue = $("#input").val();
  if(inputvalue == '')
  {
        document.getElementById('marcoVisor').src = 'http://jahde/hdk_agc_prd/servlet/thdkcas';
        btnJahdes.onclick = reload;
  }
    else
      {  
        document.getElementById('marcoVisor').src = 'http://jahde/hdk_agc_prd/servlet/thdksca?17,'+ inputvalue;
        btnJahdes.onclick = reload;
      }
  });
});

//Acceso a SSIT TAD

$(document).ready(function(){
      $('#obleaQRprod').click(function(e) { 
        var inputvalue = $('#input').val();
        var codeData = window.btoa(inputvalue);
        window.open("http://www.dghpsh.agcontrol.gob.ar/SSIT/Mobile/GetObleatramite.aspx?id_solicitud="+codeData);
    });
});

$(document).ready(function(){
      $('#obleaQRDesa').click(function(e) { 
        var inputvalue = $('#input').val();
        var codeData = window.btoa(inputvalue);
        window.open("http://clientes.grupomost.com/gcba/desa/ssit.agcontrol.gob.ar/Mobile/GetObleatramite.aspx?id_solicitud="+codeData);
    });
});



/////////////////////////////////////////////////// SECCION DE BOTONES OCULTOS /////////////////////////////////////////////////// 

//Mostrar y ocultar PANEL con más botones


function onOFF_Panel() {
    var x = document.getElementById("Panel_oculto");
    if (x.style.display === "none") {
        x.style.display = "inline-block";
    } else {
        x.style.display = "none";
    }
}

// BOTONES DE SGI para mostrar/ocultar

function onOFF_SGI() {
    var x = document.getElementById("SGI_oculto");
    if (x.style.display === "none") {
        x.style.display = "inline-flex";
    } else {
        x.style.display = "none";
    }
}

// BOTONES DE SSIT para mostrar/ocultar

function onOFF_SSIT() {
    var x = document.getElementById("SSIT_oculto");
    if (x.style.display === "none") {
        x.style.display = "inline-flex";
    } else {
        x.style.display = "none";
    }
}

// BOTONES DE SSIT para mostrar/ocultar

function onOFF_AT() {
    var x = document.getElementById("AT_oculto");
    if (x.style.display === "none") {
        x.style.display = "inline-flex";
    } else {
        x.style.display = "none";
    }
}

// BOTONES DE CONSEJOS para mostrar/ocultar

function onOFF_CONSEJOS() {
    var x = document.getElementById("CONSEJOS_oculto");
    if (x.style.display === "none") {
        x.style.display = "inline-flex";
    } else {
        x.style.display = "none";
    }
}

// BOTONES DE JAVA para mostrar/ocultar

function onOFF_JAVA() {
    var x = document.getElementById("JAVA_oculto");
    if (x.style.display === "none") {
        x.style.display = "inline-flex";
    } else {
        x.style.display = "none";
    }
}