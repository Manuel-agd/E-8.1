import "./style.css";

type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

// Funcion para extraer la lista de pacientes asignados a pediatria.

const obtenPacientesAsignadosAPediatria = (
    pacientes: Pacientes[]
  ): Pacientes[] => {
    const pacientesPediatria: Pacientes[] = [];

    for(let i = 0; i < pacientes.length; i++){

        if(pacientes[i].especialidad === "Pediatra"){
            pacientesPediatria.push(pacientes[i])
        }
    }
    return pacientesPediatria;
  };
  const resultado = obtenPacientesAsignadosAPediatria(pacientes);
  console.log(resultado);

// Funcion para extraer la lista de pacientes asignados a pediatria menores de 10 años.

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
    pacientes: Pacientes[]
  ): Pacientes[] => {
    const menorPediatria: Pacientes[] =[];

    for(let i = 0; i < pacientes.length; i++){
        if(pacientes[i].especialidad ==="Pediatra" && pacientes[i].edad < 10){
            menorPediatria.push(pacientes[i])
        }
    }
    return menorPediatria;
  };
  const menorResultado = obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes);
  console.log(menorResultado);

// Funcion para activar el protocolo de urgencia si se cumplen condiciones de temperatura y ritmo cardiaco.

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
    let activarProtocolo: boolean = false;
  
    for(let i = 0; i < pacientes.length; i++){
        if(pacientes[i].temperatura > 39 && pacientes[i].frecuenciaCardiaca > 100){
            activarProtocolo = true;
            break;
        }
    }
    return activarProtocolo;
  };
  const protocoloResultado = activarProtocoloUrgencia(pacientes);
  console.log(protocoloResultado);

//Funcion para reasignar a los pacientes de pediatria al medico de familia.

const reasignaPacientesAMedicoFamilia = (
    pacientes: Pacientes[]
  ): Pacientes[] => {
    let reasignadosEspecialidad: Pacientes[] = [];

    for(let i = 0; i < pacientes.length; i++){
        if(pacientes[i].especialidad === "Pediatra"){
            reasignadosEspecialidad.push({...pacientes[i], especialidad: "Medico de familia"});
        } else {
            reasignadosEspecialidad.push(pacientes[i]);
        }
    }
    return reasignadosEspecialidad;
  };
  const pacientesReasignados = reasignaPacientesAMedicoFamilia(pacientes);
  console.log(pacientesReasignados);

  //Funcion para verificar si hay pacientes asignados a pediatria

  const hayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {

  for(let i = 0; i < pacientes.length; i++) {
    if(pacientes[i].especialidad === "Pediatra"){
      return true;
     } 
    }
    return false;
  };
  console.log(hayPacientesDePediatria(pacientes));

  interface NumeroPacientesPorEspecialidad {
    medicoDeFamilia: number;
    pediatria: number;
    cardiologia: number;
  }
  
  const cuentaPacientesPorEspecialidad = (
    pacientes: Pacientes[]
  ): NumeroPacientesPorEspecialidad => {

    let contadorCardiologia: number = 0;
    let contadorPediatra: number = 0;
    let contadorMedicoDeFamilia: number = 0;

    for (let i = 0; i < pacientes.length; i++) {
      if(pacientes[i].especialidad === "Cardiólogo"){
        contadorCardiologia++;
      } else if(pacientes[i].especialidad === "Pediatra"){
        contadorPediatra++;
      }
      else if (pacientes[i].especialidad === "Medico de familia") {
        contadorMedicoDeFamilia++;
      }
    }
    return {
      medicoDeFamilia: contadorMedicoDeFamilia,
      pediatria: contadorPediatra,
      cardiologia: contadorCardiologia
    };
  };
  console.log(cuentaPacientesPorEspecialidad(pacientes));