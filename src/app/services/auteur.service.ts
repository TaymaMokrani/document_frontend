import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Auteur } from '../shared/auteur';

@Injectable({
  providedIn: 'root'
})
export class AuteurService {
  private auteurs: Auteur[] = [
    new Auteur(1, 'Smith', 'John', 'john.smith@example.com', 'Professor', 'AI'),
    new Auteur(2, 'Doe', 'Jane', 'jane.doe@example.com', 'Doctor', 'Machine Learning'),
    new Auteur(3, 'Johnson', 'Michael', 'michael.johnson@example.com', 'Engineer', 'Data Science'),
    new Auteur(4, 'Williams', 'Emily', 'emily.williams@example.com', 'Lecturer', 'Ethics'),
    new Auteur(5, 'Brown', 'James', 'james.brown@example.com', 'Researcher', 'Cybersecurity')
  ];

  // Fetch all authors
  getAllAuteurs(): Observable<Auteur[]> {
    return of(this.auteurs);
  }

  // Fetch an author by ID
  getAuteurById(id: number): Observable<Auteur | undefined> {
    return of(this.auteurs.find(auteur => auteur.id === id));
  }

  // Add a new author
  addAuteur(auteur: Auteur): Observable<void> {
    auteur.id = this.getNextId();  // Ensure the new author has a unique ID
    this.auteurs.push(auteur);
    return of();
  }

  // Update an existing author
  updateAuteur(id: number, updatedAuteur: Auteur): Observable<void> {
    const index = this.auteurs.findIndex(auteur => auteur.id === id);
    if (index !== -1) {
      this.auteurs[index] = updatedAuteur;
    }
    return of();
  }

  // Delete an author
  deleteAuteur(id: number): Observable<void> {
    this.auteurs = this.auteurs.filter(auteur => auteur.id !== id);
    return of();
  }

  // Helper function to get the next available ID for an author
  private getNextId(): number {
    return this.auteurs.length > 0 ? Math.max(...this.auteurs.map(auteur => auteur.id)) + 1 : 1;
  }
}

