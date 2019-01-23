import { Component, OnInit } from '@angular/core';
import { SocialComponentDistAngularLoaderService } from '../social-component-dist-angular-loader.service';

@Component({
  selector: 'app-try-social-comment',
  templateUrl: './try-social-comment.component.html',
  styleUrls: ['./try-social-comment.component.less']
})
export class TrySocialCommentComponent implements OnInit {

  constructor(
    private commentService: SocialComponentDistAngularLoaderService
  ) { }

  ngOnInit() {
    const loader = this.commentService.getCommentLoaderObject();
    loader.loadSocialPageCommentButton();
  }

}
