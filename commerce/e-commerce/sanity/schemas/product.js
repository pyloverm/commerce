


const supportedLanguages = [
  { id: 'en', title: 'English', isDefault: true },
  { id: 'pt', title: 'Portugese' },
  { id: 'fr', title: 'French' }
]
const baseLanguage = supportedLanguages.find(l => l.isDefault)

export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'title',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'array',
        of: [{ type: 'image' }],
        options: {
          hotspot: true,
        }
      },
      { 
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: (doc, options) => options.parent.name['en'],
          maxLength: 90,
        }
      },
      { 
        name: 'name',
        title: 'Name',
        type: 'localeString',
      },
      { 
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      { 
        name: 'details',
        title: 'Details',
        type: 'localeString',
      }
    ]
  }