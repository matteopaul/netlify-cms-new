import React from 'react';
import CMS from 'netlify-cms';
// import styles from '/preview.css';

const css = require('/preview.css').toString();



CMS.registerPreviewStyle(styles.toString(), {raw: true});

var PagePreview = createClass({
  render: function() {
    return h('div', {},

      // This is a static header that would only be rendered once for the entire list
      h('h1', {}, this.props.entry.getIn(['data', 'title'])),

      // Here we provide a simple mapping function that will be applied to each
      // object in the array of authors
      this.props.widgetsFor('contents').map(function(contents, index) {
        if(contents) {
          let type = contents.getIn(['data', 'type']);
          console.log(type);
          switch(type) {
            case 'rq_007':
            console.log('RichText');
              return h('div', {}, contents.getIn(['data', 'title']));
              break;
            default:
              console.log('');
          }
        }
      })
    );
  }
});

CMS.registerPreviewTemplate("pageStructure", PagePreview);
