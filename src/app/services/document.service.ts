import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { Document } from '../shared/document';
import { Auteur } from '../shared/auteur';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private documents: Document[] = [
    new Document(1, 'Machine Learning 101', 1, 'Education', 'Introduction to ML', ['Machine Learning', 'AI'], new Date('2024-01-15'), 'pdf', 'ml101.pdf', '/assets/ml101.pdf'),
  new Document(2, 'Deep Learning Basics', 2, 'Education', 'Intro to DL', ['Deep Learning', 'ML'], new Date('2023-05-10'), 'pdf', 'deep_learning.pdf', '/assets/deep_learning.pdf'),
  new Document(3, 'Data Science Handbook', 1, 'Science', 'Guide to DS', ['Data Science', 'Guide'], new Date('2022-09-20'), 'pdf', 'ds_handbook.pdf', '/assets/ds_handbook.pdf'),
  new Document(4, 'Advanced Python Programming', 3, 'Programming', 'Master Python', ['Python', 'Programming', 'Advanced'], new Date('2023-03-01'), 'pdf', 'advanced_python.pdf', '/assets/advanced_python.pdf'),
  new Document(5, 'Cloud Computing Fundamentals', 2, 'Technology', 'Cloud basics', ['Cloud', 'AWS', 'Azure'], new Date('2023-07-18'), 'pdf', 'cloud_computing.pdf', '/assets/cloud_computing.pdf'),
  new Document(6, 'AI Ethics and Society', 4, 'Philosophy', 'Ethical implications of AI', ['AI', 'Ethics', 'Society'], new Date('2022-11-05'), 'pdf', 'ai_ethics.pdf', '/assets/ai_ethics.pdf'),
  new Document(7, 'Introduction to Cybersecurity', 5, 'Security', 'Protecting digital assets', ['Cybersecurity', 'Security', 'IT'], new Date('2023-02-12'), 'pdf', 'intro_cybersecurity.pdf', '/assets/intro_cybersecurity.pdf'),
  new Document(8, 'Natural Language Processing', 1, 'AI', 'NLP Overview', ['NLP', 'Machine Learning', 'AI'], new Date('2024-02-27'), 'pdf', 'nlp_overview.pdf', '/assets/nlp_overview.pdf'),
  new Document(9, 'Big Data Analytics', 2, 'Data', 'Handling big data', ['Big Data', 'Analytics', 'Hadoop'], new Date('2023-09-15'), 'pdf', 'big_data_analytics.pdf', '/assets/big_data_analytics.pdf'),
  new Document(10, 'Blockchain for Beginners', 6, 'Technology', 'Intro to Blockchain', ['Blockchain', 'Cryptocurrency'], new Date('2022-08-30'), 'pdf', 'blockchain_beginners.pdf', '/assets/blockchain_beginners.pdf'),
  ];

  private auteurs: Auteur[] = [
    new Auteur(1, 'Smith', 'John', 'john.smith@example.com', 'Professor', 'AI'),
    new Auteur(2, 'Doe', 'Jane', 'jane.doe@example.com', 'Doctor', 'Machine Learning')
  ];

  getAllDocuments(): Observable<Document[]> {
    return of(this.documents);
  }

  getDocumentById(id: number): Observable<Document | undefined> {
    return of(this.documents.find(doc => doc.id === id));
  }

  getAuteurById(id: number): Observable<Auteur | undefined> {
    return of(this.auteurs.find(auteur => auteur.id === id));
  }

  downloadDocument(id: number): Observable<Blob> {
    const blob = new Blob(["Fake file content"], { type: 'application/pdf' });
    return of(blob);
  }
  addDocument(document: Document): Observable<void> {
    document.id = this.getNextId();
    this.documents.push(document);
    return of();
  }
  
  updateDocument(id: number, updatedDocument: Document): Observable<void> {
    const index = this.documents.findIndex(doc => doc.id === id);
    if (index !== -1) {
      this.documents[index] = updatedDocument;
    }
    return of();
  }
  
  deleteDocument(id: number): Observable<void> {
    this.documents = this.documents.filter(doc => doc.id !== id);
    return of();
  }
  
  private getNextId(): number {
    return this.documents.length > 0 ? Math.max(...this.documents.map(doc => doc.id)) + 1 : 1;
  }
  
  
}

