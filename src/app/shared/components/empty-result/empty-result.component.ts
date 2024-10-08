import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreConfigService } from '../../../../core/services/config.service';
import { Subject } from 'rxjs';
import { GlobalService } from '@shared/services/global.service';

@Component({
  selector: 'empty-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './empty-result.component.html',
  styleUrl: './empty-result.component.scss'
})
export class EmptyResultComponent implements OnInit {
  @Input() imgHeight: string;
  @Input() imgWidth: string;

  public imgSrc: string;

  constructor(public globalService: GlobalService) {}

  ngOnInit() {
    this.globalService.coreConfig$.subscribe(
      (config) => {
        if (config.layout.skin === 'dark') {
          this.imgSrc = 'assets/images/elements/search-not-found-dark.png';
        } else {
          this.imgSrc = 'assets/images/elements/search-not-found-light.png';
        }
      }
    );
  }

}
