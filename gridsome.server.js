// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const path = require('path');
const fs = require('fs');
//const textContentType = require('./dynamicContentTypes/textContentType');

const pagesPath = path.join(__dirname, "pages");
const contentPath = path.join(__dirname, "pageContents");
const contentTypes = {};

module.exports = function (api) {
  api.loadSource(store => {

    fs.readdirSync(path.join(__dirname, "dynamicContentTypes")).forEach(function(file) {
      let currentName = file.split('.')[0].toLowerCase();
      contentTypes[currentName] = store.addContentType({
        typeName: currentName
      })
      contentTypes[currentName].addNode(JSON.parse(fs.readFileSync(path.join(__dirname, "dynamicContentTypes") + "/" + file)));
    })

    fs.readdirSync(contentPath).forEach(function(file) {
        let contenttype = file.split("-")[0];
        let currentData = JSON.parse(fs.readFileSync(contentPath + "/" + file));
        contentTypes[contenttype].addNode(currentData);
    });

    for(let i = 0; i < contentTypes["categorybannercontenttype"].findNodes().length; i++) {
      let links = contentTypes["categorybannercontenttype"].findNodes()[i].breadcrumbLinks;
      for(let x = 0; x < links.length; x++) {
        linkPieces = [];
        linkPieces.push()
      }
    }


    const pages = store.addContentType({
      typeName: "PageStructure",
      route: "/page/:slug"
    });


    pages.addNode({
      title: "erste Seite",
      contents: [store.createReference(contentTypes["imagecontenttype"].findNode()),
                  store.createReference(contentTypes["stagecontenttype"].findNode()),
                  store.createReference(contentTypes["categorybannercontenttype"].findNode()),
                  store.createReference(contentTypes["breadcrumbcontenttype"].findNode()),
                  store.createReference(contentTypes["textcontenttype"].findNode())]
    })


    fs.readdirSync(pagesPath).forEach(function(file) {

          let currentData = JSON.parse(fs.readFileSync(pagesPath + "/" + file));
          let items = [];

          currentData.contents.forEach(function(item) {
            for(let i = 0; i < Object.keys(contentTypes).length; i++) {
              let node = getNodeByTitle(Object.keys(contentTypes)[i], item.title);
              if(node) {
                items.push(store.createReference(node));
              }

              /*if(item.type === Object.keys(contentTypes)[i]) {
                const newItem = contentTypes[Object.keys(contentTypes)[i]].addNode(item);
                items.push(store.createReference(newItem))
              }*/
            }

          });
          pages.addNode({
            id: currentData.id,
            title: currentData.title,
            contents: items
          })
    })
  })
  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api
  })


}

function getNodeByTitle(contentType, title) {
  for(let i = 0; i < contentTypes[contentType].findNodes().length; i++) {
    if(contentTypes[contentType].findNodes()[i].title === title) {

      return contentTypes[contentType].findNodes()[i];
    }
  }
  return null;
}
