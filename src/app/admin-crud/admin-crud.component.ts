import { Component, OnInit } from '@angular/core';
import { Document } from '../shared/document'; // Adjust path if needed
import { DocumentService } from '../services/document.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-crud',
  templateUrl: './admin-crud.component.html',
  styleUrls: ['./admin-crud.component.css']
})
export class AdminCrudComponent implements OnInit {
  documents: Document[] = [];
  selectedDocument: Document | null = null;
  isEditing = false;
  currentDocument: Document = this.createEmptyDocument();
  newMotCle: string = '';  // Define the newMotCle property
  motCles: string[] = []; // Define the motCles property
  constructor(private documentService: DocumentService, private router: Router) {}

  ngOnInit(): void {
    this.loadDocuments();
  }

  loadDocuments(): void {
    this.documentService.getAllDocuments().subscribe((docs) => {
      this.documents = docs;
    });
  }

    // Add the addMotCle method
    addMotCle(): void {
      if (this.newMotCle.trim()) {
        console.log('Adding new motCle:', this.newMotCle);
        this.motCles.push(this.newMotCle.trim());
        this.currentDocument.motsCles = this.motCles; // Update the currentDocument's motsCles
        this.newMotCle = '';  // Reset the input after adding
      }
    }
  
    // Add the removeMotCle method
    removeMotCle(motCle: string): void {
      this.motCles = this.motCles.filter(m => m !== motCle);
      this.currentDocument.motsCles = this.motCles; // Update the currentDocument's motsCles
      console.log('Removing motCle:', motCle);
    }
  editDocument(document: Document): void {
    this.selectedDocument = { ...document };
    this.isEditing = true;
    this.currentDocument = { ...document };  // Set the currentDocument for binding in the form
  }

  deleteDocument(id: number): void {
    if (confirm('Are you sure you want to delete this document?')) {
      this.documentService.deleteDocument(id).subscribe(() => {
        this.loadDocuments();
      });
    }
  }

  saveDocument(): void {
    console.log('Saving document:', this.currentDocument);
    
  }

  cancelEdit(): void {
    this.isEditing = false;
    this.selectedDocument = null;
    this.currentDocument = this.createEmptyDocument();  // Reset form
  }

  onLoadFile(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.currentDocument.typeFichier = file.type;
      this.currentDocument.nomFichier = file.name;
      const reader = new FileReader();
      reader.onload = (e) => {
        this.currentDocument.contenuFichier = (e.target?.result as string);
        console.log(this.currentDocument); // Log after file is read
      };
      reader.readAsText(file); // Read the file content as text
    }
  }

  handleSubmit(){
    // Handle form submission logic here
    console.log('Form submitted with document:', this.currentDocument);
  }
  private createEmptyDocument(): Document {
    return new Document(
      0,
      '',
      0,
      '',
      '',
      [],
      new Date(),
      '',
      '',
      '',
      

    );
  }
}
