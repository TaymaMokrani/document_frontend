import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocumentService } from '../services/document.service';
import { Auteur } from '../shared/auteur';
import { Document } from '../shared/document';


@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
})
export class DocumentComponent implements OnInit {
  document!: Document;
  auteur!: Auteur;

  constructor(private route: ActivatedRoute, private documentService: DocumentService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.documentService.getDocumentById(id).subscribe((doc) => {
      if (doc) {
        this.document = doc;
        this.loadAuteur(doc.auteurId);
      }
    });
  }

  loadAuteur(auteurId: number): void {
    this.documentService.getAuteurById(auteurId).subscribe((auteur) => {
      if (auteur) {
        this.auteur = auteur;
      }
    });
  }
  
}

