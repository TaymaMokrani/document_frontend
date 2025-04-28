export class Auteur {
    id: number;
  nom: string;
  prenom: string;
  email: string; 
  grade: string;
  specialite: string;
  constructor( id: number,  nom: string ,prenom: string ,email: string ,grade: string ,specialite: string ){
    this.id = id ; 
    this.nom = nom ;
    this.prenom = prenom ;
    this.email = email ;
    this.grade = grade ;
    this.specialite = specialite ;
  }
}
