const defaultState = [
        {
            sku: 'SKU-1',
            img: 'http://cdn.home24.net/images/media/catalog/product/250x250/png/s/e/sessel-houston-i-webstoff-chrom-stoff-milan-gelb-3936076.jpg',
            title: 'Sessel Houston I',
            author: 'jill111',
            amount: {
                currency: 'EUR',
                value : '749.99'
            }
        },
        {
            sku: 'SKU-2',
            img: 'http://cdn.home24.net/images/media/catalog/product/250x250/png/e/c/ecksofa-grapefield-webstoff-longchair-ottomane-davorstehend-rechts-meeresgruen-3177209.jpg',
            title: 'Ecksofa Grapefield',
            author: 'pashminu',
            amount: {
                currency: 'EUR',
                value : '1649.00'
            }
        },
        {

            sku: 'SKU-3',
            img: 'http://cdn.home24.net/images/media/catalog/product/250x250/png/t/i/tischleuchte-tripod-metall-eisen-1-flammig-740822.jpg',
            title: 'Tischleuchte TRIPOD',
            author: 'Danson67',
            amount: {
                currency: 'EUR',
                value : '59.99'
            }
        },
        {

            sku: 'SKU-6',
            img: 'http://cdn.home24.net/images/media/catalog/product/250x250/png/a/r/armlehnenstuhl-nicholas-kunstleder-hellgrau-1068902.jpg',
            title: 'Armlehnenstuhl Nicholas I ',
            author: 'fancycravel',
            amount: {
                currency: 'EUR',
                value : '255.00'
            }
        },
        {

            sku: 'SKU-7',
            img: ' http://cdn.home24.net/images/media/catalog/product/250x250/png/f/i/figur-woody-bumble-eiche-eiche-natur-3132513.jpg',
            title: 'Figur Woody Bumble',
            author: 'jill111',
            amount: {
                currency: 'EUR',
                value : '99.00'
            }
        },
        {

            sku: 'SKU-8',
            img: 'http://cdn.home24.net/images/media/catalog/product/250x250/png/i/n/indexliving-3603733.jpg',
            title: 'Armlehnenstuhl Le Gaillard',
            author: 'BkrmadtyaKarki',
            amount: {
                currency: 'EUR',
                value : '119.99'
            }
        }
    ];

export default function products(state = defaultState, action) {
    return state;
}
