const supportedLanguages = [
  { id: 'en', title: 'English', isDefault: true },
  { id: 'pt', title: 'Portugese' },
  { id: 'fr', title: 'French' }
]
const baseLanguage = supportedLanguages.find(l => l.isDefault)

export default {
    name: 'banner',
    title: 'Banner',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'buttonText',
            title: 'ButtonText',
            type: 'localeString',
        },
        {
            name: 'product',
            title: 'Product',
            type: 'localeString',
        },
        {
            name: 'desc',
            title: 'Desc',
            type: 'localeString',
        },
        {
            name: 'smallText',
            title: 'SmallText',
            type: 'localeString',
        },
        {
            name: 'midText',
            title: 'MidText',
            type: 'localeString',
        },
        {
            name: 'largeText1',
            title: 'LargeText1',
            type: 'localeString',
        },
        {
            name: 'largeText2',
            title: 'LargeText2',
            type: 'localeString',
        },
        {
            name: 'discount',
            title: 'Discount',
            type: 'string',
        },
        {
            name: 'saleTime',
            title: 'SaleTime',
            type: 'localeString',
        },
    ],
    preview: {
        select: {
        title: `title.${baseLanguage.id}`
        }
    }
  };