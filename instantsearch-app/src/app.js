const { algoliasearch, instantsearch } = window;

const searchClient = algoliasearch(
  '5L1S6UUZVF',
  '7bf4a2b4e4f0c324b0cca574ab137f6a'
);

const search = instantsearch({
  indexName: 'inaodeng_com_5l1s6uuzvf_pages.tmp',
  searchClient,
  future: { preserveSharedStateOnUnmount: true },
});

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
  }),
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: (hit, { html, components }) => html`
        <article>
          <img src=${hit.image} alt=${hit.keywords} />
          <div>
            <h1>${components.Highlight({ hit, attribute: 'keywords' })}</h1>
          </div>
        </article>
      `,
    },
  }),
  instantsearch.widgets.configure({
    hitsPerPage: 8,
  }),
  instantsearch.widgets.pagination({
    container: '#pagination',
  }),
]);

search.start();
