const path = require('path');
const fs = require('fs');
const pagesPath = path.join(__dirname, "pages");
const contentTypes = {};

module.exports = function (api) {
  api.loadSource(store => {

    fs.readdirSync(path.join(__dirname, "dynamicContentTypes")).forEach(function(file) {
      let currentName = file.split('.')[0];
      contentTypes[currentName] = store.addContentType({
        typeName: currentName
      })
      let node = JSON.parse(fs.readFileSync(path.join(__dirname, "dynamicContentTypes") + "/" + file));
      node["id"] = random_id();
      contentTypes[currentName].addNode(node);
    })

    const pages = store.addContentType({
      typeName: "PageStructure"
    });

    pages.addNode({
      title: "erste Seite",
      url: "hallo",
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
        store.createReference(contentTypes["divider"].findNode()),
        store.createReference(contentTypes["contact"].findNode()),
        store.createReference(contentTypes["profile_card"].findNode())
      ]
    })
    store.createReference(contentTypes["rq_014"].findNodes()[0].lists.push(store.createReference(contentTypes["rq_090"].findNode())));

    fs.readdirSync(pagesPath).forEach(function(file) {

          let currentData = JSON.parse(fs.readFileSync(pagesPath + "/" + file));
          let items = [];
          currentData.contents.forEach(function(item) {
            item["id"] = random_id();
            let node = store.createReference(contentTypes[item.type].addNode(item));
            items.push(node);
          });
          pages.addNode({
            path: currentData.url,
            id: currentData.id,
            title: currentData.title,
            contents: items,
            url: currentData.url
          })
    });
    function random_id() {
      return '_' + (Number(String(Math.random()).slice(2)) + Date.now()).toString(36);
    }
  })

  api.createPages(async ({ graphql, createPage }) => {
    const data = await graphql(`
      query pages {
        page: allPageStructure {
          edges {
            node {
              title
              url
              id
              contents {
                ...header
                ...stage
                ...category
                ...richText
                ...divider
                ...textWithIcon
                ...textInColumns
                ...promoBanner
                ...contentTeaser
                ...image
                ...breadcrumb
                ...attributeFilter
                ...contactForm
                ...bulletList
                ...quote
                ...card
                ...cardWithText
                ...projectLink
                ...contentSlider
                ...slider
                ...contact
                ...profilecard
              }
            }
          }
        }
      }

      fragment profilecard on profile_card {
        type
        title
        description
        src
        contact
      }

      fragment richText on rq_007 {
        type
        background
        contents {
          type
          title
          md
          text
          options
          lists {
            text
            options
          }
        }
      }

      fragment header on rq_008 {
        type
        size
        title
      }

      fragment textWithIcon on rq_011 {
        type
        title
        text
        src
        category
        href
        linkText
        count
      }

      fragment textInColumns on rq_012 {
        type
        cols
        text
        title
      }

      fragment stage on rq_013 {
        type
        title
        src
        buttonText
      }

      fragment promoBanner on rq_014 {
        type
        src
        type
        lists {
          title
          text
          options
        }
        title
        href
        linkText
        textWithIcon {
          title
          text
          icon
          linkText
          href
        }
      }

      fragment contentTeaser on rq_015 {
        type
        size
        src
        linkText
        position
        text
        attr
        label
        title
        link
        options
        scale
      }

      fragment category on rq_016 {
        type
        title
        src
        text
        path
      }

      fragment image on rq_021 {
        type
        title
        text
        src
        position
        size
      }

      fragment breadcrumb on rq_035 {
        type
        title
        path
      }

      fragment attributeFilter on rq_037 {
        type
        title
        attrType
      }

      fragment contactForm on rq_067 {
        type
        title
        text
        dropdown
      }

      fragment bulletList on rq_090 {
        type
        title
        text
        checked
        options
      }

      fragment quote on rq_091 {
        type
        text
        src
        name
        description
      }

      fragment card on rq_092 {
        type
        color
        attr
        content {
          type
          text
          src
          href
          checked
          options
          name
          description
          title
          contact
          information_contents {
            type
            text
          }
          position
          size
        }
      }

      fragment cardWithText on rq_093 {
        type
        mdContents {
          type
          options
          title
          text
          md
        }
        cardContents {
          type
          options
          title
          checked
        }
        cardColor
        mdBackground
      }

      fragment projectLink on rq_094 {
        type
        title
        src
        text
        link
        linkText
      }

      fragment contentSlider on rq_095 {
        type
        title
        stages {
          src
          title
          text
          checked
          options
        }
      }

      fragment slider on cardSlider {
        type
        cards {
          color
          content {
            type
            text
            src
            href
            checked
            options
            name
            description
            position
            size
          }
        }
      }

      fragment contact on contact {
        type
        title
      }


      fragment divider on divider {
        type
        id
      }
    `);

    data.data.page.edges.forEach(({node}) => {
      createPage({
        path: `/${node.url}`,
        component: './src/templates/PageStructureNew.vue',
        context: {
          id: node.id,
          title: node.title,
          contents: node.contents,
          url: ('/' + node.url).replace('//', '')
        }
      })
    })
  })
}
