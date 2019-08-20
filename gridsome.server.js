// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const path = require('path');
const fs = require('fs');
//const textContentType = require('./dynamicContentTypes/textContentType');

const pagesPath = path.join(__dirname, "pages");
const contentTypes = {};

module.exports = function (api) {
  api.loadSource(store => {

    fs.readdirSync(path.join(__dirname, "dynamicContentTypes")).forEach(function(file) {
      let currentName = file.split('.')[0];
      contentTypes[currentName] = store.addContentType({
        typeName: currentName
      })
       contentTypes[currentName].addNode(JSON.parse(fs.readFileSync(path.join(__dirname, "dynamicContentTypes") + "/" + file)));
    })



    const pages = store.addContentType({
      typeName: "PageStructure",
      route: "/:slug"
    });


    pages.addNode({
      title: "erste Seite",
      contents: [
        store.createReference(contentTypes["rq_008"].findNode()),
        store.createReference(contentTypes["rq_007"].findNode()),
        store.createReference(contentTypes["rq_011"].findNode()),
        store.createReference(contentTypes["rq_012"].findNode()),
        store.createReference(contentTypes["rq_013"].findNode()),
        store.createReference(contentTypes["rq_014"].findNode()),
        store.createReference(contentTypes["rq_015"].findNode()),
        store.createReference(contentTypes["rq_016"].findNode()),
        store.createReference(contentTypes["rq_021"].findNode()),
        store.createReference(contentTypes["rq_035"].findNode()),
        store.createReference(contentTypes["rq_037"].findNode()),
        store.createReference(contentTypes["rq_067"].findNode()),
        store.createReference(contentTypes["rq_090"].findNode()),
        store.createReference(contentTypes["rq_091"].findNode()),
        store.createReference(contentTypes["rq_092"].findNode()),
        store.createReference(contentTypes["rq_093"].findNode()),
        store.createReference(contentTypes["rq_094"].findNode()),
        store.createReference(contentTypes["rq_095"].findNode()),
        store.createReference(contentTypes["cardSlider"].findNode()),
        store.createReference(contentTypes["divider"].findNode())
      ]
    })
    store.createReference(contentTypes["rq_014"].findNodes()[0].lists.push(store.createReference(contentTypes["rq_090"].findNode())))


    fs.readdirSync(pagesPath).forEach(function(file) {

          let currentData = JSON.parse(fs.readFileSync(pagesPath + "/" + file));
          let items = [];
          currentData.contents.forEach(function(item) {
          let node = store.createReference(contentTypes[item.type].addNode(item));
          items.push(node);
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
