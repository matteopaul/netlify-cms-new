import React from 'react';
import CMS from 'netlify-cms';

const PagePreview = createClass({
  render: function() {
      return h('div', {},

      // This is a static header that would only be rendered once for the entire list
      h('h1', {}, 'Page'),

      // Here we provide a simple mapping function that will be applied to each
      // object in the array of authors
      this.props.widgetsFor('contents').map(function(title, index) {
        let html;
        switch(title.getIn(['data', 'type'])) {
          case 'rq_007':
            html = h('RQ_007', {'v-bind:contents': title.getIn(['data', 'contents']), ':background': title.getIn(['data', 'background'])}, "")
            break;
          case 'rq_008':
            html = h('strong', {}, title.getIn(['data', 'title  ']))
            break;
          case 'rq_011':
            break;
          case 'rq_012':
            html = h('img', {'src': '/uploads/rq_012.png'});
            break;
          default:

        }
        return h('div', {'class': title.getIn(['data', 'type']).replace('_', '-') + '-container'}, html);
      })
    )
      }
    });

CMS.registerPreviewTemplate("pageStructure", PagePreview);
CMS.registerPreviewStyle('/preview.css');
