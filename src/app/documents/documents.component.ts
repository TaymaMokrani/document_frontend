import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocumentService } from '../services/document.service';
import { Document } from '../shared/document';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
})
export class DocumentsComponent implements OnInit {
  documents: Document[] = [];
  filteredDocuments: Document[] = [];
  searchText: string = '';

  constructor(private documentService: DocumentService, private router: Router) {}

  ngOnInit(): void {
    this.loadDocuments();
  }

  loadDocuments(): void {
    this.documentService.getAllDocuments().subscribe((docs) => {
      this.documents = docs;
      this.filteredDocuments = docs;
    });
  }

  searchDocuments(): void {
    const text = this.searchText.toLowerCase();
    this.filteredDocuments = this.documents.filter(doc =>
      doc.titre.toLowerCase().includes(text) ||
      doc.theme.toLowerCase().includes(text)
    );
  }

  viewDetails(id: number): void {
    this.router.navigate(['/document', id]);
  }
  

  downloadDocument(id: number): void {
    this.documentService.downloadDocument(id).subscribe(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'document.pdf';
      a.click();
      window.URL.revokeObjectURL(url);
    });
  }
}
