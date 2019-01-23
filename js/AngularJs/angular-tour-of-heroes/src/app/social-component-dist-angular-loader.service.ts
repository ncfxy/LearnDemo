import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SocialComponentDistAngularLoaderService {

  private exportSymbol(name, opt_object) {
    const parts: string[] = name.split('.');
    let cur = window;
    for (let part; parts.length && (part = parts.shift());) {
      if (!parts.length && opt_object !== void 0) {
          // last part and we have an object; use it
          cur[part] = opt_object;
      } else if (cur[part]) {
          cur = cur[part];
      } else {
          cur[part] = {};
          cur = cur[part];
      }
    }
  }

  private exportRequirejs() {
    this.exportSymbol('wap.core.ui.social.RequireJs', {});
    this.exportSymbol('wap.core.ui.social.RequireJs.require', requirejs);
    this.exportSymbol('wap.core.ui.social.RequireJs.define', define);
    this.exportSymbol('wap.core.ui.social.RequireJs.requirejs', requirejs);
  }

  private getHost() {
    const urlSplit = /^(?:([^:\/?#.]+):)?(?:\/\/(?:([^\/?#]*)@)?([^\/#?]*?)(?::([0-9]+))?(?=[\/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;
    let result = location.href.match(urlSplit);
    const schema = result[1];
    const domain = result[3];

    /******For test*********/
    const backendUrl = findGetParameter('backendUrl');
    if (backendUrl) {
        return backendUrl;
    }
    /******end test*********/

    result = /(?:(.*)\.)?((.+?)(?:\-.+)?.(?:collabo-dev|hue).worksap.com)/.exec(domain);
    if (result === undefined || result === null) {
        return 'Social is not supported!';
    }
    const suffix = result[2];
    const tenant = result[3];
    if (tenant === 'collabstga' || tenant === 'collabstgb') {
        return schema + '://social.' + tenant + '-evaluation.collabo-dev.worksap.com';
    } else if (tenant === 'develop') {
        return schema + '://social.' + tenant + '-develop.collabo-dev.worksap.com';
    } else {
        return schema + '://social.' + suffix;
    }

    function findGetParameter(parameterName) {
      let resultInner = null;
      const items = location.search.substr(1).split(unescape('%26'));
        items.forEach(function(item) {
          const tmp = item.split('=');
            if (tmp[0] === parameterName) { resultInner = decodeURIComponent(tmp[1]); }
        });
        return resultInner;
    }
  }

  private getSocialComponent($element, requirePromise) {
    const type = typeof $element;
    if (!((type === 'object' && $element !== null || type === 'function') && $element.nodeType === 1)) {
        return {};
    }
    return {
        listen: $element['addEventListener'].bind($element),
        unlisten:  $element['removeEventListener'].bind($element),
        dispose: function() {
            requirePromise.then(function (functions) {
                functions['dispose']();
            });
        },
        asyncCall: function(functionName, var_args) {
            const newArgs = Array.prototype.slice.call(arguments, 1);
            return new Promise(function(resolve, reject) {
                requirePromise.then(function(functions) {
                    resolve(functions[functionName].apply(null, newArgs));
                });
            });
        }
    };
  }

  private load(moduleNames, $opt_element?, opt_successCallback?, opt_errorCallback?) {
    const requirejsConfig = {
      'baseUrl': this.getHost() + '/social/static/js'
    };
    const requirePromise = new Promise(function(resolve, reject) {
        requirejs(requirejsConfig, moduleNames, function(socialModule) {
            resolve(socialModule['load']($opt_element));
        }, function(error) {
            console.log(error);
        });
    });
    return this.getSocialComponent($opt_element, requirePromise);
  }

  getCommentLoaderObject() {
    this.exportRequirejs();
    const self = this;
    return {
      loadSocialPageCommentButton: function($opt_element?: Element) {
        return self.load(['comment'], $opt_element);
      },
      loadSocialCommonCommentArea: function($opt_element?: Element) {
          return self.load(['comment'], $opt_element);
      },
      loadClipPage: function($opt_element?: Element) {
          return self.load(['clip-page'], $opt_element);
      },
      loadClipButton: function($opt_element?: Element) {
          return self.load(['clip-button'], $opt_element);
      },
      loadFollowButton: function($opt_element?: Element) {
          return self.load(['follow-button'], $opt_element);
      },
      loadClipTagFilter: function($opt_element?: Element) {
          return self.load(['clip-tag-filter'], $opt_element);
      },
      loadClipTagList: function($opt_element?: Element) {
          return self.load(['clip-tag-list'], $opt_element);
      },
      listen: function(src, type, opt_callback?: Function) {
          return src.listen(type, opt_callback);
      },
      unlisten: function(src, type, opt_callback?: Function) {
          return src.unlisten(type, opt_callback);
      },
      EventType: {
          CLIP_TAG_FILTER_CHANGE: 'social-clip-select-tag',
          FOLLOW_STATUS_CHANGE: 'social-follow-status-change',
          CLIP_FILTER_LOAD_SUCCESS: 'clip-tag-filter-load-success',
          CLIP_TAG_LIST_CLICK: 'clip-tag-list-click',
          CREATE_NEW_TAG: 'create-new-tag'
      },
      ClipEventType: {
          CLIP_TAG_FILTER_CHANGE: 'social-clip-select-tag',
          CLIP_FILTER_LOAD_SUCCESS: 'clip-tag-filter-load-success',
          CLIP_TAG_LIST_CLICK: 'clip-tag-list-click',
          CREATE_NEW_TAG: 'create-new-tag'
      },
      FollowEventType: {
          FOLLOW_STATUS_CHANGE: 'social-follow-status-change'
      },
      CommentEventType: {

      }
    };
  }

  constructor() {
  }
}
