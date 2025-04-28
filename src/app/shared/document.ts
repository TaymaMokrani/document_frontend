export class Document {
        id: number;
        titre: string;
        auteurId: number; 
        theme: string;
        resume: string;
        motsCles: string[]; 
        datePublication: Date;
        contenuFichier: string; // contenu du fichier (ex: base64 pour un PDF)
        typeFichier: string; 
        nomFichier: string; // nom réel du fichier stocké (ex: "memoire2024.pdf")
        urlFichier: string; // chemin/URL du fichier pour le téléchargement
        constructor(id: number ,titre: string ,auteurId: number , theme: string ,resume: string ,motsCles: string[] , datePublication: Date ,typeFichier: string , nomFichier: string ,  urlFichier: string ,){
            this.id = id ;
            this.titre = titre ;
            this.auteurId = auteurId ;
            this.theme = theme ;
            this.resume = resume ;
            this.motsCles = motsCles ;
            this.datePublication = datePublication ;
            this.typeFichier = typeFichier ;
            this.nomFichier = nomFichier ;
            this.urlFichier = urlFichier ;
            this.contenuFichier = "";
        }    
}
