var Database;
/*
    CREADO POR:Victor Alejandro Ordoñez
    E-MAIL: vordonez74@gmail.com
*/
var createMateriales = "CREATE TABLE IF NOT EXISTS Materiales(idMat INTEGER PRIMARY KEY AUTOINCREMENT,Material TEXT,UMB TEXT,stock REAL,Pto REAL,Max REAL,Cap TEXT,Texto_breve TEXT,Cod TEXT,Ce TEXT,Alm TEXT,PMV REAL)";
var createME2L = "CREATE TABLE IF NOT EXISTS ME2L(idME2L INTEGER PRIMARY KEY AUTOINCREMENT,Material TEXT,Ce TEXT,Alm TEXT,Prov TEXT,Tipo TEXT,Pedido TEXT,Pos TEXT,Text_breve TEXT, CantPed REAL,Grp TEXT,FechaDoc DATETIME,UMP TEXT,UMA TEXT,PorEntr REAL,CantUMA REAL,NroNec TEXT,TipImp TEXT,Lib TEXT,Moneda TEXT, Precio REAL,CantBase TEXT,EstrLib TEXT)";
var createMB25 = "CREATE TABLE IF NOT EXISTS MB25(idMB25 INTEGER PRIMARY KEY AUTOINCREMENT,material TEXT,usuario TEXT,reserva TEXT,cant_dif REAL,centro TEXT,almacen TEXT,centro_recep TEXT,almacen_recep TEXT,posicion INTEGER,texto_breve TEXT,um TEXT,fecha_base DATETIME, fecha_nec DATETIME,clase_mov TEXT,Imputacion TEXT,CantNec REAL,CantRed REAL)";
var createVL10B = "CREATE TABLE IF NOT EXISTS VL10B(idVL10B INTEGER PRIMARY KEY AUTOINCREMENT,material TEXT,creado_por TEXT,causante TEXT,cant_pend REAL,um TEXT,denominacion TEXT,destinatario TEXT,almacen TEXT,pos INTEGER,centro_sum TEXT,fecha_base DATETIME, fecha_nec DATETIME)";
var createZOR = "CREATE TABLE IF NOT EXISTS ZOR(idZOR INTEGER PRIMARY KEY AUTOINCREMENT,Material TEXT,Ce TEXT,Ce_desc TEXT,Alm TEXT,FechaSol DATETIME, Tipo TEXT,Sol TEXT,Pos TEXT,Text_breve TEXT,UM TEXT,CantSol REAL,Soli TEXT,Cesta TEXT,Pedido TEXT,Il TEXT,Texto TEXT,S TEXT,Lib TEXT,B1 TEXT,EstLib TEXT,El TEXT,B TEXT,Con TEXT, LibInc TEXT,CtdPed TEXT, Gr TEXT,Modif DATETIME,UM2 TEXT,Grp TEXT,Grp_desc TEXT)";
var createCentros = "CREATE TABLE IF NOT EXISTS Centros(idCentros INTEGER PRIMARY KEY AUTOINCREMENT, Ce TEXT, Nombre TEXT)";
var createGpo = "CREATE TABLE IF NOT EXISTS Gpo(idGpo INTEGER PRIMARY KEY AUTOINCREMENT,GCp TEXT, Denominacion TEXT)";

var insertSMateriales = "INSERT INTO Materiales (Material,UMB,stock,Pto,Max,Cap,Texto_breve,Cod,Ce,Alm,PMV) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";//11 fields
var insertSME2L = "INSERT INTO ME2L (Material,Ce,Alm,Prov,Tipo,Pedido,Pos,Text_breve, CantPed,Grp,FechaDoc,UMP,UMA,PorEntr,CantUMA,NroNec,TipImp,Lib,Moneda, Precio,CantBase,EstrLib) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)"; //22 Fields
var insertSMB25 = "INSERT INTO MB25 (material,usuario,reserva,cant_dif,centro,almacen,centro_recep,almacen_recep,posicion,texto_breve,um,fecha_base, fecha_nec,clase_mov,Imputacion,CantNec,CantRed) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?,?,?,?)"; //17 fields
var insertSVL10B = "INSERT INTO VL10B (material,creado_por,causante,cant_pend,um,denominacion,destinatario,almacen,pos,centro_sum,fecha_base, fecha_nec) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"; //12 fields
var insertSZOR = "INSERT INTO ZOR (Material,Ce,Ce_desc,Alm,FechaSol, Tipo,Sol,Pos,Text_breve,UM,CantSol,Soli,Cesta,Pedido,Il,Texto,S,Lib,B1,EstLib,El,B,Con, LibInc,CtdPed, Gr,Modif,UM2,Grp,Grp_desc) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";//30 fields
var insertSCentros = "INSERT INTO Centros(Ce,Nombre) VALUES(?,?)";
var insertSGpo = "INSERT INTO Gpo(Gcp,Denominacion) VALUES(?,?)";

var insertSConsultas = "INSERT INTO Consultas(statements,nombresCampos, Descripcion) VALUES(?,?,?)";


function WebSQLInit() {
	var DBObj = this; //window
	//Database = window.openDatabase('W3SchoolsDemoDatabase', '1.0', 'W3SchoolsDemoDatabase', 2 * 1024 * 1024);
    Database = window.openDatabase("Reposicion2", "1.0", "Por Ordoñez", 2 * 1024 * 1024);

    this.InitMateriales = function(){
        Database.transaction(function(tx){
            tx.executeSql(createMateriales,[],function(){
                console.log('Tabla Materiales lista.');
            });
        },function (err) {
            if (err.message.indexOf("Categories already exists") === -1) {
                window.alert("Error 6: " + err.message);
            }
        });
    };
    
    this.InitME2L = function(){
        Database.transaction(function(tx){
            tx.executeSql(createME2L,[],function(){
                console.log('Tabla ME2L lista.');
            });
        },function(err){
            if(err.message.indexOf("Categories already exists") === -1) {
                window.alert("Error 6: " + err.message);
            }
        });
    };
    this.InitMB25 = function(){
        Database.transaction(function(tx){
            tx.executeSql(createMB25,[],function(){
                console.log('Tabla MB25 lista.');
            });
        },function (err) {
            if (err.message.indexOf("Categories already exists") === -1) {
                window.alert("Error 6: " + err.message);
            }
        });
    };
    this.InitVL10B = function(){
        Database.transaction(function(tx){
            tx.executeSql(createVL10B,[],function(){
                console.log('Tabla VL10B lista.');
            });
        },function (err) {
            if (err.message.indexOf("Categories already exists") === -1) {
                window.alert("Error 6: " + err.message);
            }
        });
    };
    
    this.InitZOR = function(){
        Database.transaction(function(tx){
            tx.executeSql(createZOR,[],function(){
                console.log('Tabla ZOR lista.');
            });
        },function (err) {
            if (err.message.indexOf("Categories already exists") === -1) {
                window.alert("Error 6: " + err.message);
            }
        });
    };
    this.InitCentros = function(){
        Database.transaction(function(tx){
            tx.executeSql(createCentros,[],function(){
                console.log('Tabla Centros lista.');
            });
        },function (err) {
            if (err.message.indexOf("Categories already exists") === -1) {
                window.alert("Error 6: " + err.message);
            }
        });
    };
    this.InitGpo = function(){
        Database.transaction(function(tx){
            tx.executeSql(createGpo,[],function(){
                console.log('Tabla Gpo lista.');
            });
        },function (err) {
            if (err.message.indexOf("Categories already exists") === -1) {
                window.alert("Error 6: " + err.message);
            }
        });
    };
    
	function w3DropTable(tablename) {
		var sql="DROP TABLE [" + tablename + "]";
		Database.transaction(function (tx)
			{
				tx.executeSql(sql,[]);
			}
			,function (err) {
				window.alert("Error 3: " + err.message);
			}
	
		);
	}
	function w3DropView(tablename) {
		var sql="DROP VIEW [" + tablename + "]";
		Database.transaction(function (tx)
			{
				tx.executeSql(sql,[]);
			}
			,function (err) {
				window.alert("Error 4: " + err.message);
			}
		);
	}
	function w3DropIndex(tablename) {
		var sql="DROP INDEX [" + tablename + "]";
		Database.transaction(function (tx)
			{
				tx.executeSql(sql,[]);
			}
			,function (err) {
				window.alert("Error 5: " + err.message);
			}
	
		);
	}
	function checkDBChanges(x) {
		if (
			x.toUpperCase().indexOf("INSERT INTO ")>-1 ||
			x.toUpperCase().indexOf("UPDATE ")>-1 ||
			x.toUpperCase().indexOf("DELETE ")>-1 ||
			x.toUpperCase().indexOf("ALTER TABLE ")>-1 ||
			x.toUpperCase().indexOf("DROP TABLE ")>-1 ||
			x.toUpperCase().indexOf("INTO ")>-1 ||
			x.toUpperCase().indexOf("CREATE TABLE ")>-1 ||
			x.toUpperCase().indexOf("ALTER TABLE ")>-1 ||
			x.toUpperCase().indexOf("CREATE VIEW ")>-1 ||		
			x.toUpperCase().indexOf("REPLACE VIEW ")>-1 ||
			x.toUpperCase().indexOf("DROP VIEW ")>-1 ||
			(x.toUpperCase().indexOf("CREATE INDEX")>-1 ) ||
			(x.toUpperCase().indexOf("CREATE UNIQUE INDEX")>-1 ) ||		
			(x.toUpperCase().indexOf("DROP INDEX")>-1 )		
			) {
			return true;
		}
		return false;
	}
	this.w3ExecuteSQL = function(sql) {
		var resultContainer;
		resultContainer = document.getElementById("divResultSQL");
		resultContainer.innerHTML = "";
		Database.transaction(function (tx)
			{
				tx.executeSql(sql,[],function (tx, results)
					{
						var len = results.rows.length, i, j, m, txt, columns = [], DBChanges = 0;
						if (len > 0) {
							txt = "";
							txt = txt + "<div style='padding:10px;'><div style='margin-bottom:10px;'>Number of Records: " + len + "</div>";
							txt = txt + "<table class='w3-table-all notranslate'><tr>";
							for (m in results.rows.item(0)) {
							    columns.push(m);
							}
							for (j = 0; j < columns.length; j++) {
								txt = txt + "<th>" + columns[j] + "</th>";  
							}
							txt = txt + "</tr>";
							for (i = 0; i < len; i++) {
								txt = txt + "<tr>";	   
								for (j = 0; j < columns.length; j++) {
								    if (results.rows.item(i)[columns[j]] == null) {
    									txt = txt + "<td><i>null</i></td>";  
    								} else {
    									txt = txt + "<td>" + results.rows.item(i)[columns[j]] + "</td>";
    							    }    								
								}
								txt = txt + "</tr>";	   
							}
							resultContainer.innerHTML =  txt + "</table></div>";
						} else {
							DBChanges = checkDBChanges(sql);
							if (DBChanges === true) {
								txt = "<div style='padding:10px;'>You have made changes to the database.";
								if (results.rowsAffected > 0) {txt = txt + " Rows affected: " + results.rowsAffected; }
								resultContainer.innerHTML = txt + "</div>";
							} else {
								txt = "<div style='padding:10px;'>No result.</div>";
								resultContainer.innerHTML = txt;
							}
						}
						DBObj.myDatabase();
					}
				);
			}
			,function (err) {
				window.alert("Error 1: " + err.message);
			}
		);
	};
    this.selectStar = function (tablename) {
    	var sql = "SELECT * FROM [" + tablename + "]";
		document.getElementById("textareaCodeSQL").value = sql;
		DBObj.w3ExecuteSQL(sql);
	};
    
    this.myDatabase = function () {
		Database.transaction(function (tx)
			{
				var tblnames = [], recordcounts = [], viewnames = [], viewrecordcounts = [], indexnames = [];
				document.getElementById("yourDB").innerHTML = "";
				document.getElementById("yourRC").innerHTML = "";
				document.getElementById("yourIX").innerHTML = "";				
				function w3DBInfo() {
					var txt = "", i;
					txt = txt + "<table width='100%' xclass='w3-table-all notranslate'><tr>";
					txt = txt + "<th style='text-align:left;'>Tabla</th>";  
					txt = txt + "<th style='text-align:right;'>Reg</th>";
					txt = txt + "</tr>";
					for (i = 0; i < tblnames.length; i++) {
						txt = txt + "<tr>";	   
						txt = txt + "<td title='Click to see the content of the " + tblnames[i] + " table' style='text-align:left;cursor:pointer;text-decoration:underline;' onclick='WebSQL1.selectStar(\"" + tblnames[i] + "\")'>" + tblnames[i] + "</td>";  
						txt = txt + "<td style='text-align:right;'>" + recordcounts[i] + "</td>";  				
                        txt = txt + "<td style='text-align:right;'>";
						txt = txt + "</tr>";	   
                        //<input type='file' name='archivos' id='archivos' class='center-block'>
					}
					document.getElementById("yourDB").innerHTML =  txt + "</table>";
				}
				function w3DBViewInfo() {
					var txt = "", i;
					txt = txt + "<h3 style='color:#8AC007'>Views:</h3>";
					txt = txt + "<table width='100%' xclass='w3-table-all notranslate'><tr>";
					txt = txt + "<th style='text-align:left;'>Name of View</th>";  
					txt = txt + "<th style='text-align:right;'>Records</th>";  						
					txt = txt + "</tr>";
					for (i = 0; i < viewnames.length; i++) {
						txt = txt + "<tr>";	   
						txt = txt + "<td title='Click to see the content of the " + viewnames[i] + " view' style='text-align:left;cursor:pointer;text-decoration:underline;' onclick='WebSQL1.selectStar(\"" + viewnames[i] + "\")'>" + viewnames[i] + "</td>";  
						txt = txt + "<td style='text-align:right;'>" + viewrecordcounts[i] + "</td>";  				
						txt = txt + "</tr>";	   
					}
					document.getElementById("yourRC").innerHTML =  txt + "</table>";
				}
                
				function w3DBIndexInfo() {
					var txt = "", i;
					txt = txt + "<h3 style='color:#8AC007'>Indexes:</h3>";
					txt = txt + "<table width='100%' xclass='w3-table-all notranslate'><tr>";
					txt = txt + "<th style='text-align:left;'>Name of Index</th>";  
					txt = txt + "</tr>";
					for (i = 0; i < viewnames.length; i++) {
						txt = txt + "<tr>";	   
						txt = txt + "<td style='text-align:left;'>" + indexnames[i] + "</td>";  
						txt = txt + "</tr>";	   
					}
					document.getElementById("yourIX").innerHTML =  txt + "</table>";
				}
				function makeRecordcountsArray(x) {
					var i, lastTable = false;
					for (i = 0; i < x.length; i++) {
						if (i === (x.length - 1)) {lastTable = true; }
						tx.executeSql("SELECT count(*) AS rc,'" + lastTable + "' AS i FROM [" + x[i] + "]",[],function (tx, results)
							{
								var len = results.rows.length, k, cc = "";
								if (len > 0) {
									for (k = 0; k < len; k++) {
										recordcounts.push(results.rows.item(k).rc);
										cc = results.rows.item(k).i;
									}
									if (cc === "true") {
										w3DBInfo();
									}
								} else {
									window.alert("ERROR 4");
								}
							
							}
						);
					}
				}
				function makeViewRecorcountsArray(x) {
					var i, lastTable = false;
					for (i = 0; i < x.length; i++) {
						if (i === (x.length - 1)) {lastTable = true; }
						tx.executeSql("SELECT count(*) AS rc,'" + lastTable + "' AS i FROM [" + x[i] + "]",[],function (tx, results)
							{
								var len = results.rows.length, k, cc = "", txt;
								if (len > 0) {
									for (k = 0; k < len; k++) {
										viewrecordcounts.push(results.rows.item(k).rc);
										cc = results.rows.item(k).i;
									}
									if (cc === "true") {
										w3DBViewInfo();
									}
								} else {
									window.alert("ERROR 5");
								}
							
							}
						);
					}
				}
				tx.executeSql("SELECT tbl_name FROM sqlite_master WHERE type='table' AND tbl_name NOT LIKE '__WebKitDatabaseInfoTable__' AND tbl_name NOT LIKE 'sqlite_sequence'",[],function (tx, results)
					{
						var len = results.rows.length, i;
						if (len > 0) {
							for (i = 0; i < len; i++) {
								tblnames.push(results.rows.item(i).tbl_name);
							}
							makeRecordcountsArray(tblnames);
						}
					}
				);
				tx.executeSql("SELECT tbl_name FROM sqlite_master WHERE type='view'",[],function (tx, results)
					{
						var len = results.rows.length, i;
						if (len > 0) {
							for (i = 0; i < len; i++) {
								viewnames.push(results.rows.item(i).tbl_name);
							}
							makeViewRecorcountsArray(viewnames);
						}
					}
				);
				tx.executeSql("SELECT name FROM sqlite_master WHERE type='index' AND tbl_name NOT LIKE '__WebKitDatabaseInfoTable__'",[],function (tx, results)
					{
						var len = results.rows.length, i;
						if (len > 0) {
							for (i = 0; i < len; i++) {
								indexnames.push(results.rows.item(i).name);
							}
							w3DBIndexInfo();
						}
					}
				);
			}
			,function (err) {
				window.alert("ERROR 2.5" + err.message);
			}
		);
	};
    
	this.w3InitDatabase = function(n) {
		DBObj.InitMateriales();
        DBObj.InitME2L();
        DBObj.InitMB25();
        DBObj.InitVL10B();
        DBObj.InitZOR();
        DBObj.InitCentros();
        DBObj.InitGpo();
	};
    
	this.w3ClearDatabase = function() {
		var warn = window.confirm("This action will restore the database back to its original content.\n\nAre you sure you want to continue?");
		if (warn === false) {
			return false;
		}
		document.getElementById("divResultSQL").innerHTML =  "";
		if (Database) {
			Database.transaction(function (tx)
				{
					tx.executeSql("SELECT name FROM    sqlite_master WHERE type='index' AND name<>'sqlite_autoindex___WebKitDatabaseInfoTable___1'",[],function (tx, results)
						{
							var len = results.rows.length, i;
							if (len>0) {
								for (i = 0; i < len; i++) {
									w3DropIndex(results.rows.item(i).name);
								}
							}
						}
					);
					tx.executeSql("SELECT name FROM sqlite_master WHERE type='view'",[],function (tx, results)
						{
							var len = results.rows.length, i;
							if (len>0) {
								for (i = 0; i < len; i++) {
									w3DropView(results.rows.item(i).name);
								}
							}
						}
					);
					tx.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name<>'sqlite_sequence' AND name<>'__WebKitDatabaseInfoTable__'",[],function (tx, results)
						{
							var len = results.rows.length, i;
							if (len>0) {
								for (i = 0; i < len; i++) {
									w3DropTable(results.rows.item(i).name);
									if (i === (len - 1)) { DBObj.w3InitDatabase(1); }
								}
							} else {
								DBObj.w3InitDatabase(1);
							}
						}
					);
				}
				,function (err) {
					window.alert("Error 2: " + err.message);
				}
			);
		}
	};
	this.runSQL = function(n) {
		Database.transaction(function (tx)
			{
				tx.executeSql("SELECT * FROM sqlite_sequence",[],function ()
					{
					var sql = document.getElementById("textareaCodeSQL").value;
					DBObj.w3ExecuteSQL(sql);
					}
				);
			}
			,function (err) {
				DBObj.w3InitDatabase(0);
			}
		);
	};
	
}

// funcion que inserta los registro de la tabla Materiales masivamente 
function insertRecordMaterial(resultado){
    aux='';
    var campos = new Array();
    var bandera = true;
    Database.transaction(function (tx) {
        for(i=0;i<=resultado.length;i++){
            if(bandera){//esto es para saltar los nombres de los campos
                i = resultado.indexOf('\n') + 1;
                bandera = false;
            }
            aux+=resultado[i];
    	    if(resultado[i]=='\t'){//final de campo
                aux = aux.substring(0,aux.length-1);
    	        campos.push(aux);
    	        aux='';
    	    }
    	    if(resultado[i]=='\n'){//final de linea
    	        campos.push(aux);//el último campo termina junto con la líena
    	        tx.executeSql(insertSMateriales, campos,null,onError);
                campos = [];
    	        aux='';
    	    }
        }
	});
}

function insertRecordME2L(resultado){
    aux='';
    var campos = new Array();
    var bandera = true;
    Database.transaction(function (tx) {
        for(i=0;i<=resultado.length;i++){
            if(bandera){//esto es para saltar los nombres de los campos
                i = resultado.indexOf('\n') + 1;
                bandera = false;
            }
            aux+=resultado[i];
            if(resultado[i]=='\t'){//final de campo
            	aux = aux.substring(0,aux.length-1);
                campos.push(aux);
    	        aux='';
    	    }
    	    if(resultado[i]=='\n'){//final de linea
    	        campos.push(aux);//el último campo termina junto con la líena

                tx.executeSql(insertSME2L,campos,null,onError);
                campos = []; //vacio el vector
    	        aux='';
    	    }
        }
	});
}

function insertRecordMB25(resultado){
    aux='';
    var campos = new Array();
    var bandera = true;
    Database.transaction(function (tx) {
        for(i=0;i<=resultado.length;i++){
            if(bandera){//esto es para saltar los nombres de los campos
                i = resultado.indexOf('\n') + 1;
                bandera = false;
            }
            aux+=resultado[i];
            if(resultado[i]=='\t'){//final de campo
            	aux = aux.substring(0,aux.length-1);
                campos.push(aux);
    	        aux='';
    	    }
    	    if(resultado[i]=='\n'){//final de linea
    	        campos.push(aux);//el último campo termina junto con la líena

                tx.executeSql(insertSMB25,campos,null,onError);
                campos = []; //vacio el vector
    	        aux='';
    	    }
        }
	});
}

function insertRecordVL10B(resultado){
    aux='';
    var campos = new Array();
    var bandera = true;
    Database.transaction(function (tx) {
        for(i=0;i<=resultado.length;i++){
            if(bandera){//esto es para saltar los nombres de los campos
                i = resultado.indexOf('\n') + 1;
                bandera = false;
            }
            aux+=resultado[i];
            if(resultado[i]=='\t'){//final de campo
            	aux = aux.substring(0,aux.length-1);
    	        campos.push(aux);
    	        aux='';
    	    }
    	    if(resultado[i]=='\n'){//final de linea
    	        campos.push(aux);//el último campo termina junto con la líena

                tx.executeSql(insertSVL10B,campos,null,onError);
                campos = []; //vacio el vector
    	        aux='';
    	    }
        }
	});
}

function insertRecordZOR(resultado){
    aux='';
    var campos = new Array();
    var bandera = true;
    Database.transaction(function (tx) {
        for(i=0;i<=resultado.length;i++){
            if(bandera){//esto es para saltar los nombres de los campos
                i = resultado.indexOf('\n') + 1;
                bandera = false;
            }
            aux+=resultado[i];
            if(resultado[i]=='\t'){//final de campo
            	aux = aux.substring(0,aux.length-1);
    	        campos.push(aux);
    	        aux='';
    	    }
    	    if(resultado[i]=='\n'){//final de linea
    	        campos.push(aux);//el último campo termina junto con la líena

                tx.executeSql(insertSZOR,campos,null,onError);
                campos = []; //vacio el vector
    	        aux='';
    	    }
        }
	});
}

function insertRecordCentros(resultado){
    aux='';
    var campos = new Array();
    var bandera = true;
    Database.transaction(function (tx) {
        for(i=0;i<=resultado.length;i++){
            if(bandera){//esto es para saltar los nombres de los campos
                i = resultado.indexOf('\n') + 1;
                bandera = false;
            }
            aux+=resultado[i];
            if(resultado[i]=='\t'){//final de campo
            	aux = aux.substring(0,aux.length-1);
                campos.push(aux);
    	        aux='';
    	    }
    	    if(resultado[i]=='\n'){//final de linea
    	        campos.push(aux);//el último campo termina junto con la líena

                tx.executeSql(insertSCentros,campos,null,onError);
                campos = []; //vacio el vector
    	        aux='';
    	    }
        }
	});
}

function insertRecordGpo(resultado){
    aux='';
    var campos = new Array();
    var bandera = true;
    Database.transaction(function (tx) {
        for(i=0;i<=resultado.length;i++){
            if(bandera){//esto es para saltar los nombres de los campos
                i = resultado.indexOf('\n') + 1;
                bandera = false;
            }
            aux+=resultado[i];
            if(resultado[i]=='\t'){//final de campo
            	aux = aux.substring(0,aux.length-1);
                campos.push(aux);
                aux='';
    	    }
    	    if(resultado[i]=='\n'){//final de linea
    	        campos.push(aux);//el último campo termina junto con la líena

                tx.executeSql(insertSGpo,campos,null,onError);
                campos = []; //vacio el vector
    	        aux='';
    	    }
        }
	});
}

// Function for Hendeling Error...
function onError(tx, error){
    alert(error.message);
}

function handleFileSelect(evt){
    if(window.File && window.FileReader && window.FileList && window.Blob){
        //Se debe verificar extensión, tipo de archivo, formato de columnas y cantidad de columnas
        var files = evt.target.files; // FileList object
        // files is a FileList of File objects. List some properties.
        var output = [];

        for (var i = 0, f; f = files[i]; i++) {
            if(f.type==='text/plain'){//Solo los texto plano
                output.push('<li><strong>', escape(f.name), '</strong></li>');
                /***************************************************************/
                // Reset progress indicator on new file selection.
                progress.style.width = '0%';
                progress.textContent = '0%';

                reader = new FileReader();
                reader.onerror = errorHandler;
                reader.onprogress = updateProgress;
                reader.onabort = function(e) {
                alert('File read cancelled');
                };
                reader.onloadstart = function(e) {
                    document.getElementById('progress_bar').className = 'loading';
                };
                reader.onload = function(e) {
                    // Ensure that the progress bar displays 100% at the end.
                    progress.style.width = '100%';
                    progress.textContent = '100%';
                    setTimeout("document.getElementById('progress_bar').className='';", 2000);
                    resultado = e.target.result;
                    switch(verificarEstructura(resultado)){
                    	case 1://Materiales
                    		insertRecordMaterial(resultado);
                    		break;
                    	case 2://Pedidos
                    		insertRecordME2L(resultado);
                    		break;
                    	case 3://Reservas
                    		insertRecordMB25(resultado);
                    		break;
                    	case 4://Traslados
                    		insertRecordVL10B(resultado);
                    		break;
                    	case 5://Solpeds
                    		insertRecordZOR(resultado);
                    		break;
                    }
                }

                reader.readAsText(f,"UTF-8");// UTF-8, UTF-16, UNICODE, ANSI
            }
        /*escape(f.name),f.type,f.size,f.lastModifiedDate.toLocaleDateString()*/
        }

        document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
    }else{
        alert('The File APIs are not fully supported in this browser.');
    }
}

var resultado;
var reader;
var progress = document.querySelector('.percent');

function abortRead() {
    reader.abort();
}

function errorHandler(evt) {
    switch(evt.target.error.code) {
        case evt.target.error.NOT_FOUND_ERR:
            alert('File Not Found!');
        break;
        case evt.target.error.NOT_READABLE_ERR:
            alert('File is not readable');
        break;
        case evt.target.error.ABORT_ERR:
        break; // noop
        default:
            alert('An error occurred reading this file.');
    };
}

function updateProgress(evt) {
    // evt is an ProgressEvent.
    if (evt.lengthComputable) {
        var percentLoaded = Math.round((evt.loaded / evt.total) * 100);
        // Increase the progress bar length.
        if (percentLoaded < 100) {
            progress.style.width = percentLoaded + '%';
            progress.textContent = percentLoaded + '%';
        }
    }
}


function verificarEstructura(resultado){
    var aux='', i, NroTabla = 0;
    var campos = new Array();
    i = resultado.indexOf('\n') + 1;//asigno la posición despues del primier salto de linea
    while(resultado[i]!=='\n'){
        aux+=resultado[i];
        i++;
    }
    campos = aux.split('\t');

    switch(campos.length){

        case 11: //Materiales
/*Material UMB Libre utiliz. Punto máximo CaP Texto breve de material NºMaterial Ce.  Almacén PrMedioVar
  1000007  KG  8400.000      0.000 0.000  ND  BACTERICIDA BUSSAN 881  01110105   1002 1129    12.41*/
            if(/^\d+$/.test(campos[0])&&/^([0-9])*\.([0-9])*$|^([0-9])*$/.test(campos[2])&&campos[8].trim().length===4&&campos[9].trim().length===4){
               console.log("Archivo de Materiales reconocido.");
               NroTabla = 1;
            }else{
                console.log("Fallo al reconocer archivo de Materiales.");
            }
            break;

        case 22: //Pedidos
/*Material Ce   Alm  proveedor Cl  Documento  Pos Texto breve                      Cantped Grp FechDoc    Umped UmAlm 
1000022  1001 1125 MINACLAR  ZOP 4500031983 10  TIERRA FILTRANTE DIAFILTER FLO M 42      D14 04/05/2015 T     KG 
Porentr Cant      Númeronec Tipo de imputación	Ind.liberación	Moneda	Precio neto	Cantidad base	Estrategia liberac.
26.460  42000.000                               L               ARS     3494.90     1               06*/
            if(/^\d+$/.test(campos[0])&&campos[2].trim().length===4&&/^\d+$/.test(campos[5])&&/^([0-9])*\.([0-9])*$|^([0-9])*$/.test(campos[8])){
                console.log("Archivo ME2L reconocido.");
                NroTabla = 2;
            }else{
                console.log("Fallo al reconocer archivo ME2L");
            }
            break;

        case 17: //Reservas
/*Material usuario reserva    Cantdif Ce   Alm  CenRec AlmRec pos Texto breve de material UmBase Fechabase  Fechanec   mov Imp         Cantnec Cantred
  1030385	 JAGUTI  9500109918	2       1001 1126               1   ARO,PISTON/OEM WESTSTM  C/U    24/01/2015 24/01/2015 201 JA01031006  12      10*/
           if(/^\d+$/.test(campos[0])){
                console.log("Archivo MB25 reconocido.");
                NroTabla = 3;
            }else{
                console.log("Fallo al reconocer archivo");
            }
            break;

        case 12: //ZUB
/*Material Creadopor Causante   Cantpend Umbase Denomina  DestinaMcía. Alm  Pos Centrosum Creadoel   Entregas
  1045747  MAJEREZ   4500045251 20       L      HERBICIDA 1062         11HL 10  1007      23/10/2015 22/11/2015*/            
            if(/^\d+$/.test(campos[0])&&/^\d+$/.test(campos[2])&&/^([0-9])*\.([0-9])*$|^([0-9])*$/.test(campos[3])){
                console.log("Archivo VL10B reconocido.");
                NroTabla = 4;
            }else{
                console.log("Fallo al reconocer archivo VL10B");
            }
            break;

        case 30: //solped
/*Material Ce   Cen        Alm  Fe.sol.    CDoc Sol      Pos Texto breve   UM  Ctd.sol Solici  Númerodoc  Pedido lib                    Status     S Lib 
1000619  1001 OperAzúcar 1125 29/06/2015 ZOR  10021740 10  PALLET MADERA C/U 50      ORDONEZ 3000129903	       Petición-oferta/Pedido No tratado N 2	
B EstadLib EL B Con Libinc Ctd.pedido	Gr. Modif.el   UM  Grupo art. Grupo de artículos
  X        01       No     0.000      DOA	02/07/2015 C/U ABST970VS  Rpto.varios Abast.*/
            
            if(/^\d+$/.test(campos[0])&&campos[3].trim().length===4&&/(^\d{2}\/\d{2}\/\d{4})|(^\d{1}\/\d{2}\/\d{4})/.test(campos[4])&&/^\d+$/.test(campos[6])&&/^([0-9])*\.([0-9])*$|^([0-9])*$/.test(campos[10])){
                console.log("Archivo de Solpeds reconocido.");
                NroTabla = 5;
            }else{
                console.log("Fallo al reconocer archivo de Solpeds.");
            }
            break;            
        case 2:
            break;
        default:
            console.log("Archivo no reconocido");
    }
    return NroTabla;
}
/*

para validar fechas: /^\d{2}\/\d{2}\/\d{4}/.test("30/11/1974")
para decimales o entero: /^([0-9])*\.([0-9])*$|^([0-9])*$/.test("5.5")
para centro o almacén: .trim().length === 4
para pedido,reserva,causante,material, documentos, pos, mov : /^\d+$/.test("4254")

\w para letras, equivalente a [a-zA-Z]
\W para no letras, equivalente a [^a-zA-Z]
\d para dígitos, equivalente a [0-9]
\D para no dígitos, equivalente a [^0-9]
\s para espacios en blanco (espacios, tabuladores, etc).
\S para no espacios en blanco.

*/